<template>
  <!--  <div class="ls-abs-inner" style="z-index: 2">-->
  <!--    <button @click="addItems">add items</button>-->
  <!--    <button @click="removeItems">remove items</button>-->
  <!--  </div>-->
  <DynamicHeightVirtualList :list-data="items" item-key="id" :item-height="19">
    <template #default="{ item }">
      <div class="list-item">
        <span style="background-color: #daffcd">{{ item.id }}.</span>
        <span>{{ item.text }}</span>
      </div>
    </template>
  </DynamicHeightVirtualList>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import DynamicHeightVirtualList from './DynamicHeightVirtualList.vue';

const items = ref(Array.from({length: 1000}).map((_, index) => ({
  id: index, text: generateRandomFixedCharString()
})));

// 生成一个长度为10-1000的随机长度固定字母的字符串
function generateRandomFixedCharString(): string {
  // 随机选一个 A-Z 的大写字母
  const randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26));
  // 生成 10 到 1000 之间的随机长度
  const length = Math.floor(Math.random() * (991)) + 10;
  return randomChar.repeat(length);
}

// function addItems() {
//   const newItems = Array.from({length: 1000}).map((_, index) => ({
//     id: 1000 + index, text: generateRandomFixedCharString()
//   }));
//   items.value = [...items.value, ...newItems];
// }
//
// function removeItems() {
//   items.value = items.value.slice(0, 500);
// }
</script>

<style scoped>
.list-item {
  word-wrap: break-word;
}
</style>