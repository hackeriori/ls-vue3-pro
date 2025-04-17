<template>
  <div class="height100" style="padding: 0.5em;box-sizing: border-box">
    <el-scrollbar>
      <h1>LsDialog是一个弹窗组件</h1>
      <h3>弹窗采用absolute定位而没有使用fixed定位，这与我构建项目的习惯有关，我习惯于body及app元素高度100%，即body是不允许滚动的，滚动在app内的元素实现。</h3>
      <h3>风格与element-plus高度相似，功能点包含弹窗可拖动，可全屏，动画过渡，适配element-plus明亮黑暗模式。依赖包含element-plus</h3>
      <h3>使用方法（建议项目里面全局注册组件）</h3>
      <pre>import {LsDialog} from "ls-vue3-pro";
import {createApp} from "vue";
import ElementPlus from 'element-plus';
import App from "./App.vue";
import 'ls-vue3-pro/dist/style.css';
...

const app = createApp(App).use(ElementPlus).use(xxx);
app.component('LsDialog', LsDialog);
app.mount('#app');</pre>
      <h3>具体属性、插槽和事件，参照库代码中的文件LsDialog.d.ts或web-types.json</h3>
      <BaseExp></BaseExp>
      <FullScreenExp></FullScreenExp>
      <WidthHighExp></WidthHighExp>
      <CloseExp></CloseExp>
      <ModalExp></ModalExp>
      <BodyExp></BodyExp>
      <PositionExp></PositionExp>
      <FooterExp></FooterExp>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">

import BaseExp from "./lsDialogTest/BaseExp.vue";
import FullScreenExp from "./lsDialogTest/FullScreenExp.vue";
import WidthHighExp from "./lsDialogTest/WidthHighExp.vue";
import CloseExp from "./lsDialogTest/CloseExp.vue";
import ModalExp from "./lsDialogTest/ModalExp.vue";
import BodyExp from "./lsDialogTest/BodyExp.vue";
import PositionExp from "./lsDialogTest/PositionExp.vue";
import FooterExp from "./lsDialogTest/FooterExp.vue";
</script>

<style>

</style>
