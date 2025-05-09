<script setup lang="ts">
import {computed, onMounted, ref, useTemplateRef, watch, nextTick, shallowRef, triggerRef} from 'vue'
import type {PropType} from '../../../types/DynamicHeightVirtualList';

class FenwickTree {
  n: number;
  tree: number[];

  constructor(n: number) {
    this.n = n;
    this.tree = Array(n + 1).fill(0);
  }

  init(arr: number[]) {
    for (let i = 0; i < this.n; i++) {
      this.update(i, arr[i]);
    }
  }

  update(i: number, delta: number) {
    // 内部用 1-based
    for (let x = i + 1; x <= this.n; x += x & -x) {
      this.tree[x] += delta;
    }
  }

  query(i: number): number {
    let s = 0;
    for (let x = i + 1; x > 0; x -= x & -x) {
      s += this.tree[x];
    }
    return s;
  }

  lowerBound(target: number): number {
    // 在 tree 中寻找最小 idx，使得 sum(idx) > target
    // 标准 BIT 按位跳，O(log N)
    let idx = 0;
    let bitMask = 1 << Math.floor(Math.log2(this.n));
    for (; bitMask > 0; bitMask >>= 1) {
      const t = idx + bitMask;
      if (t <= this.n && this.tree[t] <= target) {
        target -= this.tree[t];
        idx = t;
      }
    }
    return idx; // 0-based 结果
  }
}

const props = defineProps<PropType>();

// 根模板引用
const elRef = useTemplateRef<HTMLElement>('elRef');
// 子模板引用
const itemRefs = useTemplateRef<HTMLElement[]>('itemRefs');
// 容器高度
const boxHeight = ref(0);
// 起始索引
const startIndex = shallowRef(0);
// 保存每项的当前真实高度
let heights = props.listData.map(() => props.itemHeight);
// Fenwick 树
let bit = new FenwickTree(props.listData.length);
bit.init(heights);
// 一个只会自增、不承载实际业务数据的 ref
const trigger = ref(0)
// 结束索引，由于预估高度是预估的最小值，所以这里结束索引必定大于等于视口的数量，就没必要缓冲
const endIndex = computed(() => Math.min(startIndex.value + Math.ceil(boxHeight.value / props.itemHeight), props.listData.length));
// 偏移量
const startOffset = computed(() => startIndex.value > 0 ? bit.query(startIndex.value - 1) : 0);
// 列表总高度，为缓存位置的最后一项的底边
const listHeight = computed(() => {
  // 让 computed 订阅 trigger，避免bit更新后无法触发更新
  trigger.value
  return bit.query(props.listData.length - 1);
});
// 偏移量对应的style
const listTransform = computed(() => `translateY(${startOffset.value}px)`
);
// 可视区域数据
const visibleData = computed(() => props.listData.slice(startIndex.value, endIndex.value));

/**
 * 获取列表起始索引
 */
function getStartIndex(scrollTop = 0) {
  // 找最小的 idx 使 prefixSum(idx) > scrollTop
  // lowerBound 返回 0-based idx，且 prefixSum(idx) <= scrollTop，所以下面 +1
  const idx = bit.lowerBound(scrollTop);
  return Math.min(idx, props.listData.length - 1);
}

/**
 * 修正内容高度
 */
function updateItemsSize() {
  if (!itemRefs.value?.length) return

  let dirty = false
  itemRefs.value.forEach(node => {
    const idx = Number(node.dataset.index)
    const h = node.offsetHeight
    const oldH = heights[idx]
    if (h !== oldH) {
      heights[idx] = h
      bit.update(idx, h - oldH)
      dirty = true
    }
  })

  if (dirty) {
    // 强制让 listHeight 重新计算
    trigger.value++
  }
}

/**
 * 滚动事件
 */
function scrollEvent() {
  const scrollTop = elRef.value!.scrollTop;
  const idx = getStartIndex(scrollTop);
  if (idx !== startIndex.value) {
    startIndex.value = idx;
  }
}

// 在可视区变更时测量一次，nextTick 保证 DOM 已更新
watch([visibleData, startIndex], () => {
  updateItemsSize();
}, {flush: 'post'});

watch(() => props.listData.length, async (newValue, OldValue) => {
  if (newValue === OldValue)
    return;
  heights = Array.from({length: newValue}).map(() => props.itemHeight);
  bit = new FenwickTree(newValue);
  bit.init(heights);
  // 重新计算startOffset
  const lowIndex = Math.max(newValue - Math.ceil(boxHeight.value / props.itemHeight), 0);
  if (startIndex.value >= lowIndex) {
    startIndex.value = lowIndex;
    await nextTick();
    // 更新高度
    updateItemsSize();
    elRef.value!.scrollTo(0, elRef.value!.scrollHeight - elRef.value!.clientHeight);
  } else {
    const diff = startOffset.value - elRef.value!.scrollTop;
    // 更新高度
    updateItemsSize();
    trigger.value++;
    await nextTick();
    triggerRef(startIndex);
    elRef.value!.scrollTo(0, startOffset.value - diff);
  }
  // scrollEvent();
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
  overflow-y: auto;
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