<script setup lang="ts">
import {ref, computed, onMounted, watch, useTemplateRef} from 'vue'
import type {PropType} from '../../../types/DynamicHeightVirtualList';

interface PositionType {
  // 高度
  height: number,
  // 顶边所在高度
  top: number,
}

const props = defineProps<PropType>();

// 根模板引用
const elRef = useTemplateRef<HTMLElement>('elRef');
// 子模板引用
const itemRefs = useTemplateRef<HTMLElement[]>('itemRefs');
// 可视区域高度
const boxHeight = ref(0);
// 起始索引
const startIndex = ref(0);
// 缓存位置数组
const positions = ref<PositionType[]>(props.listData.map((_item, index) => ({
  height: props.itemHeight,
  top: index * props.itemHeight
})));
// 结束索引，由于预估高度是预估的最小值，所以这里结束索引必定大于等于视口的数量，就没必要缓冲
const endIndex = computed(() => Math.min(startIndex.value + Math.ceil(boxHeight.value / props.itemHeight), props.listData.length));
// 偏移量
const startOffset = computed(() => positions.value[startIndex.value]?.top || 0);
// 列表总高度，为缓存位置的最后一项的底边
const listHeight = computed(() => {
  if (positions.value.length) {
    const lastItem = positions.value[positions.value.length - 1];
    return lastItem.top + lastItem.height;
  }
  return 0;
});
// 偏移量对应的style
const listTransform = computed(() => {
  return `translateY(${startOffset.value}px)`
});
// 可视区域数据
const visibleData = computed(() => props.listData.slice(startIndex.value, endIndex.value));

/**
 * 获取列表起始索引
 */
function getStartIndex(scrollTop = 0) {
  let startIdx = 0
  let endIdx = positions.value.length - 1

  while (startIdx <= endIdx) {
    const midIndex = Math.round((startIdx + endIdx) / 2)
    const top = positions.value[midIndex].top
    const bottom = positions.value[midIndex].top + positions.value[midIndex].height;
    if (top <= scrollTop && bottom > scrollTop) {
      return midIndex
    } else if (bottom <= scrollTop) {
      startIdx = midIndex + 1
    } else if (top > scrollTop) {
      endIdx = midIndex - 1
    }
  }
}

/**
 * 修正内容高度
 */
function updateItemsSize() {
  if (!itemRefs.value?.length) return;
  // 先更新高度
  let dirty = false;
  let firstDirtyIndex = -1;
  itemRefs.value.forEach(node => {
    const idx = Number(node.dataset.index);
    const h = node.offsetHeight;
    if (positions.value[idx].height !== h) {
      if (firstDirtyIndex < 0) {
        firstDirtyIndex = idx + 1;
      }
      positions.value[idx].height = h;
      dirty = true;
    }
  });
  // 只要有任何高度变化，就从第一个变化项的后一项开始，累加重算所有 top
  if (dirty) {
    for (let i = firstDirtyIndex; i < positions.value.length; i++) {
      const prev = positions.value[i - 1];
      positions.value[i].top = prev.top + prev.height;
    }
  }
}

/**
 * 滚动事件
 */
function scrollEvent() {
  const scrollTop = elRef.value!.scrollTop
  const offset = positions.value[startIndex.value].top
  const height = positions.value[startIndex.value].height
  // 还在当前窗口内，啥也不做
  if (scrollTop >= offset && scrollTop <= offset + height) {
    return
  }
  startIndex.value = getStartIndex(scrollTop)!
}

// 在可视区变更时测量一次，nextTick 保证 DOM 已更新
watch([visibleData, startIndex], () => {
  updateItemsSize();
}, {flush: 'post'});

onMounted(() => {
  // 更新容器高度，此时子项还未加载，因为endIndex为0
  boxHeight.value = elRef.value!.clientHeight;
})
</script>

<template>
  <div ref="elRef" class="virtualListContainer" @scroll.passive="scrollEvent">
    <div class="listStrutter" :style="{ height: listHeight + 'px' }"></div>
    <div :style="{ transform: listTransform }" class="renderList">
      <div ref="itemRefs" v-for="(item,index) in visibleData" :data-index="startIndex + index" :key="item[itemKey]"
           class="renderItem">
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.virtualListContainer {
  overflow-y: scroll;
  overflow-x: hidden;
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