<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref, type ShallowRef, shallowRef} from 'vue';
import type {PropType} from '../../../types/VirtualList';

const props = defineProps<PropType>();
const elRef = shallowRef<HTMLDivElement>() as ShallowRef<HTMLDivElement>;
// 可视区域高度
const boxHeight = ref(0);
// 偏移量
const startOffset = ref(0);
// 起始索引
const startIndex = ref(0);
// 结束索引
const endIndex = computed(() => Math.min(startIndex.value + Math.ceil(boxHeight.value / props.itemHeight) + 1, props.listData.length));
// 列表总高度，为列表项数乘以每项高度
const strutterHeight = computed(() => props.listData.length * props.itemHeight);
// 偏移量对应的style
const listTransform = computed(() => `translate3D(0, ${startOffset.value}px, 0)`);
// 获取真实显示列表数据，为列表数据切片
const visibleItems = computed(() => props.listData.slice(startIndex.value, endIndex.value));
// 观察器
let observer: ResizeObserver | null = null;

onMounted(() => {
  boxHeight.value = elRef.value.clientHeight;
  observer = new ResizeObserver(() => {
    boxHeight.value = elRef.value!.clientHeight;
  });
  observer.observe(elRef.value!);
});

onUnmounted(()=>{
  observer?.disconnect();
})

/**
 * 滚动事件
 */
function scrollEvent() {
  // 当前滚动位置
  const scrollTop = elRef.value.scrollTop;
  // 此时的开始索引
  startIndex.value = Math.floor(scrollTop / props.itemHeight);
  // 此时的偏移量
  startOffset.value = scrollTop - (scrollTop % props.itemHeight);
}
</script>

<template>
  <div ref="elRef" class="virtualListContainer" @scroll.passive="scrollEvent">
    <div class="listStrutter" :style="{ height: strutterHeight + 'px' }"></div>
    <div class="renderList" :style="{ transform: listTransform }">
      <div class="renderItem" v-for="item in visibleItems" :key="item[itemKey]" :style="{height: itemHeight + 'px'}">
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.virtualListContainer {
  overflow: auto;
  position: relative;
  height: 100%;
}

.listStrutter {
  position: absolute;
  left: 0;
  right: 0;
  z-index: -1;
}
</style>
