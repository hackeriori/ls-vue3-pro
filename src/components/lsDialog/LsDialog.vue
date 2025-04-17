<template>
  <Teleport to="body" :disabled="!appendToBody">
    <transition v-if="modal" name="lsDialogFade" @before-leave="leavingEvent">
      <div class="lsDialogMask" v-show="modelValue" @mousedown.left.self="modalClick(true)"
           @mouseup.left.self="modalClick(false)">
        <transition :name="translateName">
          <LsDialogPanel :titleText="titleText" :width="width" :full-screen="fullScreen" :height="height"
                         v-show="modelValue" :show-full-screen="!fullScreen && showFullScreen" :fit-height="fitHeight"
                         :close-confirm="closeConfirm" :close-tip="closeTip" :close-dialog="closeDialog"
                         :box-center="boxCenter" :left="left" :top="top" :bottom="bottom" :right="right"
                         :draggable="draggable" @confirm="confirm" ref="lsDialogPanel" @sizeChange="sizeChange"
                         :show-footer="showFooter">
            <template #default>
              <slot></slot>
            </template>
            <template #footer>
              <slot name="footer" :closeDialog="closeDialog">
              </slot>
            </template>
          </LsDialogPanel>
        </transition>
      </div>
    </transition>
    <transition v-else :name="translateName">
      <LsDialogPanel v-show="modelValue" :titleText="titleText" :width="width" :full-screen="fullScreen"
                     :show-full-screen="!fullScreen && showFullScreen" :close-confirm="closeConfirm"
                     :height="height" :close-tip="closeTip" :fit-height="fitHeight" @sizeChange="sizeChange"
                     :box-center="boxCenter" :left="left" :top="top" :bottom="bottom" :right="right"
                     :close-dialog="closeDialog" :draggable="draggable" @confirm="confirm" ref="lsDialogPanel"
                     :show-footer="showFooter">
        <template #default>
          <slot></slot>
        </template>
        <template #footer>
          <slot name="footer" :closeDialog="closeDialog">
          </slot>
        </template>
      </LsDialogPanel>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import {computed, nextTick, shallowRef, watch} from "vue";
import LsDialogPanel from "./LsDialogPanel.vue";
import {ElMessageBox} from "element-plus";

interface Props {
  //v-model的值
  modelValue: boolean,
  //弹窗标题
  titleText?: string,
  //弹窗宽度，default: '50%'
  width?: string,
  //是否全屏，default: false
  fullScreen?: boolean,
  //是否显示全屏按钮，全屏模式下该按钮无效（显示的情况下可双击标题栏切换全屏），default: false
  showFullScreen?: boolean,
  //是否显示关闭弹窗确认框，default: false
  closeConfirm?: boolean,
  //关闭弹窗确认框的提示内容，default: '弹窗即将关闭，确认吗？'
  closeTip?: string,
  //是否显示遮罩层，default: true
  modal?: boolean,
  //是否可通过标题栏拖动弹窗，default: true
  draggable?: boolean,
  //是否添加弹窗到body中以提高弹窗层级，default: false
  appendToBody?: boolean,
  //body是否占据剩余高度（占据剩余宽度时，需要指定高度或全屏，如果超长自己加滚动条），默认由内容撑开，default: false
  fitHeight?: boolean,
  //弹窗的高度，如果不指定，则由内容撑开，default: 'unset'
  height?: string,
  //是否可以通过点击遮罩层关闭弹窗，default: true
  closeOnClickModal?: boolean,
  //是否显示在外层相对盒子的中央，default: true
  boxCenter?: boolean,
  //当boxCenter为false时，left的值，default: 'unset'
  left?: string,
  //当boxCenter为false时，top的值，default: 'unset'
  top?: string,
  //当boxCenter为false时，right的值，default: 'unset'
  right?: string,
  //当boxCenter为false时，bottom的值，default: 'unset'
  bottom?: string,
  //是否显示脚部按钮区域
  showFooter?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  titleText: '',
  width: '50%',
  fullScreen: false,
  showFullScreen: false,
  closeConfirm: false,
  closeTip: '弹窗即将关闭，确认吗？',
  modal: true,
  draggable: true,
  appendToBody: false,
  fitHeight: false,
  height: 'unset',
  closeOnClickModal: true,
  boxCenter: true,
  left: 'unset',
  top: 'unset',
  right: 'unset',
  bottom: 'unset',
  showFooter: true
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
  (e: 'dialogClose', type: 'byButton' | 'byModal' | 'byKey'): void
  (e: 'confirm'): void
  (e: 'sizeChange'): void
}>()

const translateName = computed(() => props.boxCenter ? 'lsDialogCenter' : 'lsDialogCenterFix')

/** unbind */
let modelDownFlag = false;
//第一次显示的时候，需要计算位置
let firstShow = true;
//遮罩在关闭中
let isLeaving = false;
/** ref **/
const lsDialogPanel = shallowRef<InstanceType<typeof LsDialogPanel>>();

watch(() => props.modelValue, (value) => {
  if (value) {
    isLeaving = false;
    //当弹窗可见后，设置焦点方便按esc
    nextTick(() => lsDialogPanel.value?.focus());
  }
  //当dom挂载并显示后，offsetParent才能获取到
  if (value && firstShow) {
    nextTick(() => lsDialogPanel.value?.initSize());
    firstShow = false;
  }
})

async function closeDialog(type: 'byButton' | 'byModal' | 'byKey' | PointerEvent) {
  //如果是事件（从slot点击）
  if (type instanceof PointerEvent)
    type = "byButton";
  if (isLeaving)
    return;
  if (props.closeConfirm) {
    try {
      lsDialogPanel.value?.blur();
      await ElMessageBox.confirm(props.closeTip);
    } catch {
      return;
    }
  }
  emit('update:modelValue', false);
  emit('dialogClose', type);
}

//模块上点击才能触发关闭弹窗
function modalClick(downFlag: boolean) {
  if (!props.closeOnClickModal)
    return;
  if (downFlag)
    modelDownFlag = true;
  else if (!downFlag && modelDownFlag) {
    modelDownFlag = false;
    closeDialog("byModal");
  }
}

function confirm() {
  emit('confirm');
}

function sizeChange() {
  emit('sizeChange');
}

function leavingEvent() {
  isLeaving = true;
}

</script>

<style>
.lsDialogMask {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  left: 0;
  top: 0;
}

.lsDialogFade-enter-active,
.lsDialogFade-leave-active {
  transition-property: opacity;
  transition-duration: 300ms;
}

.lsDialogFade-enter-from,
.lsDialogFade-leave-to {
  opacity: 0;
}

.lsDialogCenter-enter-active.lsDialogPanel.center,
.lsDialogCenter-leave-active.lsDialogPanel.center {
  transition-property: opacity, transform;
  transition-duration: 300ms;
}

.lsDialogCenter-enter-from.lsDialogPanel.center,
.lsDialogCenter-leave-to.lsDialogPanel.center {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.5);
}

.lsDialogCenterFix-enter-active.lsDialogPanel,
.lsDialogCenterFix-leave-active.lsDialogPanel {
  transition-property: opacity, transform;
  transition-duration: 300ms;
}

.lsDialogCenterFix-enter-from.lsDialogPanel,
.lsDialogCenterFix-leave-to.lsDialogPanel {
  opacity: 0;
  transform: scale(0.5);
}
</style>
