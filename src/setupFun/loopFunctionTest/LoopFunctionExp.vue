<template>
  <div class="ls-text-halfLine">
    <h2>setupLoopFunction，循环调用单一方法</h2>
    <pre>/**
 * 循环调用单一方法
 * @param event 耗时方法
 * @param interval 调用时间间隔(ms)
 */
export declare function setupLoopFunction(event: () => Promise&lt;unknown&gt;, interval?: number): void</pre>
    <div>下方标签中的数字，每间隔1000毫秒增加1</div>
    <example-box>
      <h4>{{ num }}</h4>
      <template #code>
        <pre>&lt;template&gt;
  &lt;h4&gt;&#123;&#123; num &#125;&#125;&lt;/h4&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
const num = ref(0);

async function addNumber() {
  return new Promise(resolve =&gt; {
    setTimeout(() =&gt; {
        num.value++;
        resolve(undefined);
      }
    );
  })
}

setupLoopFunction(addNumber, 1000)
&lt;/script&gt;</pre>
      </template>
    </example-box>
  </div>
</template>

<script setup lang="ts">
import ExampleBox from "../../components/exampleBox/ExampleBox.vue";
import {ref} from "vue";
import {setupLoopFunction} from "../loopFunction";

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

setupLoopFunction(addNumber, 1000)
</script>

<style scoped>

</style>
