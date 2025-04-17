<template>
  <div>
    <h2>自定义弹窗位置</h2>
    <div>弹窗通常是在屏幕（参照物）中心弹出，如果希望自定义弹出位置，可以设置boxCenter属性为false，并指定left，top，right，bottom这些属性</div>
    <div>示例弹窗将从屏幕右下方弹出</div>
    <example-box>
      <el-button @click="openDialog">打开弹窗</el-button>
      <LsDialog v-model="visible" :box-center="false" right="0.5em" bottom="0.5em" title-text="示例弹窗"></LsDialog>
      <template #code>
        <pre>&lt;el-button @click="openDialog"&gt;打开弹窗&lt;/el-button&gt;
&lt;LsDialog v-model="visible" :box-center="false" right="0.5em" bottom="0.5em" title-text="示例弹窗"&gt;&lt;/LsDialog&gt;

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
