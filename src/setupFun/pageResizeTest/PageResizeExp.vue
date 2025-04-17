<template>
  <div>
    <h2>新打开的页面按1600*757的比例缩放至全屏，调整浏览器窗口大小，可以看到页面始终保持比例缩放。</h2>
    <example-box>
      <router-link to="/PageResizeInner" target="_blank">打开新页面查看</router-link>
      <template #code>
        <pre>&lt;template&gt;
  &lt;div ref="elRef" class="ls-flex" style="width: 1600px;height: 757px"&gt;
    &lt;div style="width: 33%;background-color: rgba(255,0,0,0.1)"&gt;
      &lt;h1&gt;我是左面板&lt;/h1&gt;
    &lt;/div&gt;
    &lt;div style="width: 33%;background-color: rgba(0,255,0,0.1)"&gt;
      &lt;h1&gt;我是中面板&lt;/h1&gt;
    &lt;/div&gt;
    &lt;div style="width: 33%;background-color: rgba(0,0,255,0.1)"&gt;
      &lt;h1&gt;我是右面板&lt;/h1&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
const {elRef} = setupPageResize(1600, 757, true)
&lt;/script&gt;</pre>
      </template>
    </example-box>
  </div>
</template>

<script setup lang="ts">
import ExampleBox from "../../components/exampleBox/ExampleBox.vue";
</script>

<style scoped>

</style>
