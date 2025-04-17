<template>
  <div>
    <h2>提升弹窗层级，弹窗内容使用百分比布局</h2>
    <div>通过appendToBody属性，可以将弹窗的参照提升至body，以解决参照元素尺寸不够或层级不够的情况。</div>
    <div>如果指定了高度，内容希望使用百分比高度，那么需要指定fitHeight属性</div>
    <example-box>
      <el-button @click="openDialog">打开弹窗</el-button>
      <LsDialog v-model="visible" append-to-body height="300px" fit-height title-text="示例弹窗">
        <div class="height100" style="background-color: aquamarine"></div>
      </LsDialog>
      <template #code>
        <pre>&lt;el-button @click="openDialog"&gt;打开弹窗&lt;/el-button&gt;
&lt;LsDialog v-model="visible" append-to-body height="300px" fit-height title-text="示例弹窗"&gt;
  &lt;div class="height100" style="background-color: aquamarine"&gt;&lt;/div&gt;
&lt;/LsDialog&gt;

&lt;script setup lang="ts"&gt;
import {ref} from "vue";

const visible = ref(false);

function openDialog() {
  visible.value = true;
}
&lt;/script&gt;</pre>
      </template>
    </example-box>
  </div>
</template>

<script setup lang="ts">
import ExampleBox from "../../exampleBox/ExampleBox.vue";
import LsDialog from "../LsDialog.vue";
import {ref} from "vue";

const visible = ref(false);

function openDialog() {
  visible.value = true;
}
</script>

<style scoped>

</style>
