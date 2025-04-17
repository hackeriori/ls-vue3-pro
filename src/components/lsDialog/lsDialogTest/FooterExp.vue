<template>
<div>
  <h2>自定义弹窗脚部</h2>
  <div>设置showFooter属性可以决定是否显示脚部</div>
  <div>通过footer插槽，可以自定义脚部</div>
  <example-box>
    <el-button @click="openDialog">打开弹窗</el-button>
    <LsDialog v-model="visible" title-text="示例弹窗">
      <template #footer="{closeDialog}">
        <el-button @click="closeDialog">关闭</el-button>
      </template>
    </LsDialog>
    <template #code>
        <pre>&lt;el-button @click="openDialog"&gt;打开弹窗&lt;/el-button&gt;
&lt;LsDialog v-model="visible" title-text="示例弹窗"&gt;
  &lt;template #footer="{closeDialog}"&gt;
    &lt;el-button @click="closeDialog"&gt;关闭&lt;/el-button&gt;
  &lt;/template&gt;
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
