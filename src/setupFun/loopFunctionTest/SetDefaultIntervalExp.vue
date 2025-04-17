<template>
  <div class="ls-text-halfLine">
    <h2>setDefaultInterval，设置默认的调用时间间隔</h2>
    <pre>/**
 * 设置默认的调用时间间隔
 * @param interval 调用时间间隔(ms)
 */
export declare function setDefaultInterval(interval: number): void</pre>
    <h3>一般在项目初始化阶段调用一次，动态调用将在下一次执行调用时应用时间间隔。（即不会立即更改时间间隔）</h3>
    <div>下方标签中的数字，每间隔10000毫秒增加1，更改后每1000毫秒增加1</div>
    <example-box>
      <h4>{{ num }}</h4>
      <el-button @click="changeSet">更改默认间隔</el-button>
      <template #code>
        <pre>&lt;template&gt;
  &lt;h4&gt;&#123;&#123; num &#125;&#125;&lt;/h4&gt;
  &lt;el-button @click="changeSet"&gt;更改默认间隔&lt;/el-button&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
const num = ref(0);

async function addNumber() {
  return new Promise(resolve => {
    setTimeout(() => {
        num.value++;
        resolve(undefined);
      }
    );
  })
}

function changeSet() {
  setDefaultInterval(1000);
}

setupLoopFunction(addNumber)
&lt;/script&gt;</pre>
      </template>
    </example-box>
  </div>
</template>

<script setup lang="ts">
import ExampleBox from "../../components/exampleBox/ExampleBox.vue";
import {ref} from "vue";
import {setupLoopFunction, setDefaultInterval} from "../loopFunction";

const num = ref(0);

async function addNumber() {
  return new Promise(resolve => {
    setTimeout(() => {
        num.value++;
        resolve(undefined);
      }
    );
  })
}

function changeSet() {
  setDefaultInterval(1000);
}

setupLoopFunction(addNumber)
</script>

<style scoped>

</style>
