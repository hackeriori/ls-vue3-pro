<template>
<div>
  <h2>全屏弹窗</h2>
  <div>设置fullScreen属性为true即可</div>
  <example-box>
    <el-button @click="openDialog">打开弹窗</el-button>
    <LsDialog v-model="visible" full-screen title-text="示例弹窗"></LsDialog>
    <template #code>
        <pre>&lt;el-button @click="openDialog"&gt;打开弹窗&lt;/el-button&gt;
&lt;LsDialog v-model="visible" full-screen title-text="示例弹窗"&gt;&lt;/LsDialog&gt;

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
