<template>
  <div class="ls-text-halfLine">
    <h2>setupLoopFunctions，循环调用多个方法</h2>
    <pre>/**
 * 循环调用多个方法
 * @param events 方法集合
 * @param interval 调用时间间隔(ms)
 */
export declare function setupLoopFunctions(events: (() => Promise&lt;unknown&gt;)[], interval?: number): void</pre>
    <div>下方标签中的数字，第一个每隔1000毫秒加1，第二个每隔1000毫秒加2</div>
    <example-box>
      <h4>{{ num1 }}</h4>
      <h4>{{ num2 }}</h4>
      <template #code>
        <pre>&lt;template&gt;
  &lt;h4&gt;&#123;&#123; num1 &#125;&#125;&lt;/h4&gt;
  &lt;h4&gt;&#123;&#123; num2 &#125;&#125;&lt;/h4&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
const num1 = ref(0);
const num2 = ref(0);

async function addNumber1() {
  return new Promise(resolve => {
    setTimeout(() => {
        num1.value++;
        resolve(undefined);
      }
    );
  })
}

async function addNumber2() {
  return new Promise(resolve => {
    setTimeout(() => {
        num2.value += 2;
        resolve(undefined);
      }
    );
  })
}

setupLoopFunctions([addNumber1, addNumber2], 1000)
&lt;/script&gt;</pre>
      </template>
    </example-box>
  </div>
</template>

<script setup lang="ts">
import ExampleBox from "../../components/exampleBox/ExampleBox.vue";
import {ref} from "vue";
import {setupLoopFunctions} from "../loopFunction";

const num1 = ref(0);
const num2 = ref(0);

async function addNumber1() {
  return new Promise(resolve => {
    setTimeout(() => {
        num1.value++;
        resolve(undefined);
      }
    );
  })
}

async function addNumber2() {
  return new Promise(resolve => {
    setTimeout(() => {
        num2.value += 2;
        resolve(undefined);
      }
    );
  })
}

setupLoopFunctions([addNumber1, addNumber2], 1000)
</script>

<style scoped>

</style>
