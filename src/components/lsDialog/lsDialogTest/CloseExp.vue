<template>
  <div>
    <h2>关闭弹窗时确认，取消点击遮罩层关闭</h2>
    <div>设置closeConfirm属性为true即可，另外可以通过closeTip设定关闭弹窗确认框的提示内容，默认为"弹窗即将关闭，确认吗？"。</div>
    <div>通过closeOnClickModals属性，控制是否可以通过点击遮罩层关闭弹窗</div>
    <example-box>
      <el-button @click="openDialog">打开弹窗</el-button>
      <LsDialog v-model="visible" close-confirm close-tip="确定保存吗？" :close-on-click-modal="false" title-text="示例弹窗"></LsDialog>
      <template #code>
        <pre>&lt;el-button @click="openDialog"&gt;打开弹窗&lt;/el-button&gt;
&lt;LsDialog v-model="visible" close-confirm close-tip="确定保存吗？" :close-on-click-modal="false" title-text="示例弹窗"&gt;&lt;/LsDialog&gt;

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
