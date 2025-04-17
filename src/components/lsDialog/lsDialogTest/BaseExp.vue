<template>
  <div>
    <h2>基础用法</h2>
    <div>通过v-model绑定一个boolean类型的变量，控制弹窗的显隐</div>
    <div>通过titleText属性设置弹窗标题</div>
    <div>按ESC键，点击遮罩层，点击关闭按钮，点击取消均可关闭弹窗</div>
    <div>通过confirm事件以分辨是否点击了确定按钮</div>
    <example-box>
      <el-button @click="openDialog">打开弹窗</el-button>
      <div>已点击确定按钮：{{ isOK ? '是' : '否' }}</div>
      <LsDialog v-model="visible" title-text="示例弹窗" @confirm="OK"></LsDialog>
      <template #code>
        <pre>&lt;el-button @click="openDialog"&gt;打开弹窗&lt;/el-button&gt;
&lt;div&gt;已点击确定按钮：{{ isOK ? '是' : '否' }}&lt;/div&gt;
&lt;LsDialog v-model="visible" title-text="示例弹窗" @confirm="OK"&gt;&lt;/LsDialog&gt;

&lt;script setup lang="ts"&gt;
import {ref} from "vue";

const visible = ref(false);
const isOK = ref(false);

function openDialog() {
  visible.value = true;
}

function OK(){
  isOK.value = true;
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
const isOK = ref(false);

function openDialog() {
  visible.value = true;
}

function OK(){
  isOK.value = true;
}
</script>

<style scoped>

</style>
