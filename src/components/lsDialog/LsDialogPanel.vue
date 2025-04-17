<template>
  <div class="lsDialogPanel ls-panel ls-flexV ls-flex-unShrink" tabindex="0" @keyup.esc.self="closeDialog('byKey')"
       :class="{center:boxCenter}" ref="elRef">
    <div class="lsDialogTitle ls-flex ls-flex-between ls-flex-centerV" :class="{lsDraggable:draggableFlag}"
         ref="triggerDom" @dblclick="toggleFullScreen">
      <div @mousemove.stop @mousedown.stop style="cursor: auto">{{ titleText }}</div>
      <div style="font-size: 18px">
        <el-icon class="ls-text-hover" style="margin: 0 0.2em" v-if="showFullScreen"
                 @click="toggleFullScreen">
          <FullScreen/>
        </el-icon>
        <el-icon class="ls-text-hover" @click="closeDialog('byButton')">
          <Close/>
        </el-icon>
      </div>
    </div>
    <div class="lsDialogBody" :class="{fit100:fitHeight}">
      <slot></slot>
    </div>
    <div v-if="showFooter" class="ls-flex ls-flex-end" style="padding: 0 1em 1em 1em">
      <slot name="footer">
        <el-button @click="closeDialog('byButton')">取 消</el-button>
        <el-button type="primary" style="margin-left: 1em" @click="confirm">确 认</el-button>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onBeforeUnmount, onMounted, ref, shallowRef} from "vue";
import DraggableDom from "./DraggableDom";
import {Close, FullScreen} from "@element-plus/icons-vue"
import {funDebounce} from 'ls-base-lib'

interface Props {
  titleText: string,
  width: string,
  fullScreen: boolean,
  showFullScreen: boolean,
  closeConfirm: boolean,
  closeTip: string,
  closeDialog: (type: 'byButton' | 'byModal' | 'byKey') => Promise<void>,
  draggable: boolean,
  fitHeight: boolean,
  height: string,
  boxCenter: boolean,
  left: string,
  top: string,
  right: string,
  bottom: string,
  showFooter: boolean,
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (e: 'confirm'): void
  (e: 'sizeChange'): void
}>();
/** bind **/
const draggableFlag = ref(props.draggable);
/** unbind **/
let fullScreenFlag = props.fullScreen;
let draggableDom: DraggableDom | undefined = undefined;
let originalX = "";
let originalY = "";
let originalHeight = "";
let originalWidth = "";
/** ref **/
const elRef = shallowRef<HTMLElement>();
const triggerDom = shallowRef<HTMLElement>();

onMounted(() => {
  const el = elRef.value!;
  if (props.boxCenter) {
    el.style.left = '50%';
    el.style.top = '50%';
  } else {
    el.style.left = props.left;
    el.style.top = props.top;
    el.style.bottom = props.bottom;
    el.style.right = props.right;
  }
  if (fullScreenFlag) {
    el.style.width = '100%';
    el.style.height = '100%';
  } else {
    el.style.width = props.width;
    el.style.height = props.height;
  }
  if (props.draggable) {
    draggableDom = new DraggableDom(el, triggerDom.value!, props.boxCenter);
    draggableDom.start();
    if (fullScreenFlag) {
      draggableFlag.value = false;
      draggableDom.setPause(true);
    }
  }
});

onBeforeUnmount(() => {
  draggableDom?.stop();
});

function toggleFullScreen() {
  if (!props.showFullScreen)
    return
  fullScreenFlag = !fullScreenFlag;
  if (fullScreenFlag) {
    if (props.draggable) {
      //禁止拖动
      draggableFlag.value = false;
      draggableDom?.setPause(true);
      const el = elRef.value!;
      const style = getComputedStyle(el);
      //记录原始位置
      const parentStyle = getComputedStyle(el.offsetParent!);
      //记录并设置高度，原高度为undefined
      originalHeight = Number(style.height.slice(0, -2)) / Number(parentStyle.height.slice(0, -2)) * 100 + '%';
      originalWidth = Number(style.width.slice(0, -2)) / Number(parentStyle.width.slice(0, -2)) * 100 + '%';
      originalX = el.style.left;
      originalY = el.style.top;
      el.style.height = originalHeight;
      el.style.width = originalWidth;
    }
  } else {
    //允许拖动
    if (props.draggable) {
      draggableFlag.value = true;
      draggableDom?.setPause(false);
    }
  }
  setSize();
}

function setSize() {
  const style = elRef.value!.style;

  // 取消transition动画，避免在移动弹窗时有阻尼
  const cancelTransition = funDebounce(() => {
    elRef.value!.style.transitionProperty = '';
    elRef.value!.style.transitionDuration = '';
  }, 300);

  style.transitionProperty = 'left, top, width, height';
  style.transitionDuration = '300ms';
  if (fullScreenFlag) {
    style.width = '100%';
    style.height = '100%';
    style.left = props.boxCenter ? '50%' : '0';
    style.top = props.boxCenter ? '50%' : '0';
  } else {
    style.width = originalWidth;
    style.height = originalHeight;
    style.left = originalX;
    style.top = originalY;
  }
  cancelTransition();
  emit('sizeChange');
}

function initSize(): void {
  if (draggableDom) {
    const el = elRef.value!;
    draggableDom.setPercentStyle(el);
    el.style.bottom = 'unset';
    el.style.right = 'unset';
  }
}

function confirm() {
  emit("confirm");
}

function focus() {
  elRef.value!.focus();
}

function blur() {
  elRef.value!.blur();
}

defineExpose({
  initSize,
  focus,
  blur
})
</script>

<style>
.lsDialogPanel {
  position: absolute;
  outline: none;
  box-sizing: border-box;
  min-width: 160px;
}

.lsDialogPanel.center {
  transform: translate(-50%, -50%);
}

.lsDialogTitle {
  padding: 0.5em 1em;
  border-bottom: var(--el-border);
  color: var(--el-text-color-primary);
  font-size: 16px;
  background-color: var(--el-border-color-light);
  user-select: none;
}

.lsDialogTitle.lsDraggable {
  cursor: move;
}

.lsDialogBody {
  padding: 1em;
  flex-grow: 1
}

.lsDialogBody.fit100 {
  height: 0;
}
</style>
