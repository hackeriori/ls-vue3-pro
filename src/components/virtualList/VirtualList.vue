<script setup lang="ts">
import {computed, onMounted, ref, type ShallowRef, shallowRef} from 'vue';
import type {PropType} from '../../../types/VirtualList';

const props = defineProps<PropType>();
const elRef = shallowRef<HTMLDivElement>() as ShallowRef<HTMLDivElement>;
// 可视区域高度
const screenHeight = ref(0);
// 偏移量
const startOffset = ref(0);
// 起始索引
const startIndex = ref(0);
// 结束索引
const endIndex = ref(0);
// 列表总高度
const listHeight = computed(() => {
  return props.listData.length * props.itemHeight
});
// 可显示的列表项数
const visibleCount = computed(() => {
  return Math.ceil(screenHeight.value / props.itemHeight)
});
// 偏移量对应的style
const listTransform = computed(() => {
  return `translateY(${startOffset.value}px)`;
});
// 获取真实显示列表数据
const visibleData = computed(() => {
  return props.listData.slice(startIndex.value, Math.min(endIndex.value, props.listData.length));
});

onMounted(() => {
  screenHeight.value = elRef.value.clientHeight;
  endIndex.value = startIndex.value + visibleCount.value;
});

function scrollEvent() {
  // 当前滚动位置
  const scrollTop = elRef.value.scrollTop;
  // 此时的开始索引
  startIndex.value = Math.floor(scrollTop / props.itemHeight);
  // 此时的结束索引
  endIndex.value = startIndex.value + visibleCount.value;
  // 此时的偏移量
  startOffset.value = scrollTop - (scrollTop % props.itemHeight);
}
</script>

<template>
  <div ref="elRef" class="virtualListContainer" @scroll="scrollEvent">
    <div class="listStrutter" :style="{ height: listHeight + 'px' }"></div>
    <div class="renderList" :style="{ transform: listTransform }">
      <div class="renderItem" v-for="(item,index) in visibleData" :key="index" :style="{height: itemHeight + 'px'}">
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
