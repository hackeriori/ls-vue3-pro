<template>
  <div class="height100" style="padding: 0.5em;box-sizing: border-box">
    <el-scrollbar>
      <div class="ls-text-line">
        <h1>setupLoopFunction，setupLoopFunctions用于循环调用耗时方法，例如在页面中轮询接口。</h1>
        <h3>调用时会等待耗时方法执行，执行完毕后，等待时间间隔（默认10000ms）再次调用耗时方法。避免过快执行耗时方法（例如请求接口）</h3>
      </div>
      <loop-function-exp></loop-function-exp>
      <loop-functions-exp></loop-functions-exp>
      <set-default-interval-exp></set-default-interval-exp>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import LoopFunctionExp from "./LoopFunctionExp.vue";
import LoopFunctionsExp from "./LoopFunctionsExp.vue";
import SetDefaultIntervalExp from "./SetDefaultIntervalExp.vue";
</script>

<style scoped>

</style>
