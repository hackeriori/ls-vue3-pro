<template>
  <div class="height100" style="padding: 0.5em;box-sizing: border-box">
    <div class="ls-text-line">
      <h1>setupPageResize用于将页面按设置大小缩放至全屏</h1>
      <h3>有些按大屏设计的页面（例如按1920x1080设计），需要在不考虑自适应布局的情况下，快速在一个基础平台系统的iFrame页面中打开，并且布局不会改变（但是会缩放）。</h3>
      <pre>/**
 * 按比例缩放页面
 * @param width 宽度，默认1920
 * @param height 高度，默认1080
 * @param keepRatio 是否保持宽高比，默认否
 * @return {ShallowRef&lt;HTMLDivElement | undefined&gt;} 返回一个ref，绑定到需要缩放的dom
 */
export declare function setupPageResize(width?: number, height?: number, keepRatio?: boolean): ShallowRef&lt;HTMLDivElement | undefined&gt;</pre>
    </div>
    <div>
      <PageResizeExp></PageResizeExp>
    </div>
  </div>
</template>

<script setup lang="ts">

import PageResizeExp from "./PageResizeExp.vue";
</script>

<style scoped>

</style>
