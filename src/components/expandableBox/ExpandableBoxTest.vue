<template>
  <div class="height100" style="padding: 0.5em;box-sizing: border-box">
    <h1>ExpandableBox是一个向下展开的组件</h1>
    <div>通常我们在写高度变化的动画时，从高度0到高度auto是无法直接使用transition动画来完成的</div>
    <div>这需要我们按dom的实际高度来指定height属性，但是内容变化后，又需要我们重新来指定height属性，这显然不方便</div>
    <div>借助gird布局，我们可以实现0到auto的动画过渡，特封装此组件</div>
    <ExampleBox>
      <el-button @click="toggleShowMore">{{ showMore ? '收起' : '更多' }}</el-button>
      <ExpandableBox :is-expand="showMore">
        <div style="height: 300px;background-color: aquamarine"></div>
      </ExpandableBox>
      <template #code>
        <pre>&lt;el-button @click="toggleShowMore"&gt;&#123;&#123; showMore ? '收起' : '更多' &#125;&#125;&lt;/el-button&gt;
&lt;ExpandableBox :is-expand="showMore"&gt;
  &lt;div style="height: 300px;background-color: aquamarine"&gt;&lt;/div&gt;
&lt;/ExpandableBox&gt;

&lt;script setup lang="ts"&gt;
import {ref} from "vue";
import ExpandableBox from "./ExpandableBox.vue";

const showMore = ref(true);

function toggleShowMore(){
  showMore.value = !showMore.value;
}
&lt;/script&gt;</pre>
      </template>
    </ExampleBox>
  </div>
</template>

<script setup lang="ts">
import ExampleBox from "../exampleBox/ExampleBox.vue";
import {ref} from "vue";
import ExpandableBox from "./ExpandableBox.vue";

const showMore = ref(true);

function toggleShowMore(){
  showMore.value = !showMore.value;
}
</script>

<style scoped>

</style>
