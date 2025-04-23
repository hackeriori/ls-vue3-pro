import{d as p}from"./ExampleBox-Ce_LokWD.js";import{d as o,a as l,A as n,f as r,w as t,e as u,g as m,o as i}from"./index-Cx6CCqNW.js";import"./base-B4mn-k-B.js";import"./install-O06-IG97.js";import"./index-CxKK6j5m.js";const g=o({__name:"PageResizeExp",setup(a){return(s,e)=>{const d=u("router-link");return i(),l("div",null,[e[2]||(e[2]=n("h2",null,"新打开的页面按1600*757的比例缩放至全屏，调整浏览器窗口大小，可以看到页面始终保持比例缩放。",-1)),r(p,null,{code:t(()=>e[1]||(e[1]=[n("pre",null,`<template>
  <div ref="elRef" class="ls-flex" style="width: 1600px;height: 757px">
    <div style="width: 33%;background-color: rgba(255,0,0,0.1)">
      <h1>我是左面板</h1>
    </div>
    <div style="width: 33%;background-color: rgba(0,255,0,0.1)">
      <h1>我是中面板</h1>
    </div>
    <div style="width: 33%;background-color: rgba(0,0,255,0.1)">
      <h1>我是右面板</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
const {elRef} = setupPageResize(1600, 757, true)
<\/script>`,-1)])),default:t(()=>[r(d,{to:"/PageResizeInner",target:"_blank"},{default:t(()=>e[0]||(e[0]=[m("打开新页面查看")])),_:1})]),_:1})])}}}),h={class:"height100",style:{padding:"0.5em","box-sizing":"border-box"}},b=o({__name:"PageResizeTest",setup(a){return(s,e)=>(i(),l("div",h,[e[0]||(e[0]=n("div",{class:"ls-text-line"},[n("h1",null,"setupPageResize用于将页面按设置大小缩放至全屏"),n("h3",null,"有些按大屏设计的页面（例如按1920x1080设计），需要在不考虑自适应布局的情况下，快速在一个基础平台系统的iFrame页面中打开，并且布局不会改变（但是会缩放）。"),n("pre",null,`/**
 * 按比例缩放页面
 * @param width 宽度，默认1920
 * @param height 高度，默认1080
 * @param keepRatio 是否保持宽高比，默认否
 * @return {ShallowRef<HTMLDivElement | undefined>} 返回一个ref，绑定到需要缩放的dom
 */
export declare function setupPageResize(width?: number, height?: number, keepRatio?: boolean): ShallowRef<HTMLDivElement | undefined>`)],-1)),n("div",null,[r(g)])]))}});export{b as default};
