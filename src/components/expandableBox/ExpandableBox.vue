<template>
  <div class="expandableBox" :class="{expanded:isExpand}">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  //盒子当前是否展开
  isExpand: boolean
}>()
</script>

<style scoped>
.expandableBox {
  display: grid;
  grid-template-rows: 0fr;
  transition: .3s;
  overflow: hidden;
}

.expandableBox.expanded {
  grid-template-rows: 1fr;
}

.expandableBox > div {
  min-height: 0;
}
</style>
