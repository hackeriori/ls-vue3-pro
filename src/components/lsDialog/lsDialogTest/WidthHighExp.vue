<template>
  <div>
    <h2>指定宽高，显示全屏按钮</h2>
    <div>指定弹窗的宽高（未指定的情况下，宽度默认为50%，高度默认由内容撑开），设定width和height属性即可。</div>
    <div>如果需要全屏按钮，添加showFullScreen（仅用于非全屏弹窗，按钮显示的情况下可双击标题栏切换全屏）</div>
    <example-box>
      <el-button @click="openDialog">打开弹窗</el-button>
      <LsDialog v-model="visible" width="800px" height="600px" show-full-screen title-text="示例弹窗"></LsDialog>
      <template #code>
        <pre>&lt;el-button @click="openDialog"&gt;打开弹窗&lt;/el-button&gt;
&lt;LsDialog v-model="visible" width="800px" height="600px" show-full-screen title-text="示例弹窗"&gt;&lt;/LsDialog&gt;

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
