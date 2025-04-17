<template>
  <div>
    <h2>取消遮罩层，取消拖动</h2>
    <div>通过设置modal属性，显示遮罩层，设置draggable属性，拖动弹窗</div>
    <example-box>
      <el-button @click="openDialog">打开弹窗</el-button>
      <LsDialog v-model="visible" :modal="false" :draggable="false" title-text="示例弹窗"></LsDialog>
      <template #code>
        <pre>&lt;el-button @click="openDialog"&gt;打开弹窗&lt;/el-button&gt;
&lt;LsDialog v-model="visible" :modal="false" :draggable="false" title-text="示例弹窗"&gt;&lt;/LsDialog&gt;

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
