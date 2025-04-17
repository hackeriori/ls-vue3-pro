<template>
  <div ref="elRef" class="ls-flex" style="width: 1600px;height: 757px">
    <div style="width: 33%;background-color: rgba(255,0,0,0.1)">
      <h1>我是左面板</h1>
    </div>
    <div style="width: 33%;background-color: rgba(0,255,0,0.1)">
      <h1>我是中面板</h1>
    </div>
    <div style="width: 33%;background-color: rgba(0,0,255,0.1)">
      <h1>我是右面板</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
import {setupPageResize} from "../pageResize";

const {elRef} = setupPageResize(1600, 757, true)
</script>

<style scoped>

</style>
