const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VuePlayground-ChrFiHm0.js","./base-BBc8Qiim.js","./index-ClGOKeQm.js","./index-DH63uhMi.css","./base-CMRK1q-d.css","./el-scrollbar-ZhpN8ZV-.js","./install-CWDznwhL.js","./index-B8Vq7gf2.js","./el-scrollbar-BWxh-h6K.css","./lsBaseLib.es-DNO7EYIp.js","./VuePlayground-BTNWep8G.css"])))=>i.map(i=>d[i]);
import{d as n,j as m,a,A as o,z as d,f as u,u as t,a5 as c,F as v,a6 as f,o as r}from"./index-ClGOKeQm.js";import"./base-BBc8Qiim.js";import{v as _,i as x,a as g}from"./importMap-CMHVOgJo.js";const y={style:{height:"265px"}},E=`<script setup>
import {vEllipsis} from 'ls-vue3-pro';
import {ref} from 'vue';

const text = ref('这是一段可能会超出容器宽度的文本内容');
<\/script>

<template>
  <div>
    <input style="width: 300px" v-model="text" />
  </div>
  <div v-ellipsis style="width: 100px;background-color: aquamarine">{{ text }}</div>
</template>`,k=n({__name:"EllipsisTest",setup(V){const s=m(!0),l=c(async()=>{const i=await f(()=>import("./VuePlayground-ChrFiHm0.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url);return s.value=!1,i.default});return(i,e)=>{const p=_;return r(),a(v,null,[e[0]||(e[0]=o("div",{class:"ls-marginV-1"},"v-ellipsis指令，用于实现文本超出时自动隐藏并显示 title 提示。",-1)),e[1]||(e[1]=o("div",{class:"ls-marginV-1"},"该指令会在元素挂载和更新时检查内容是否超出容器宽度，并动态设置 title 属性。",-1)),d((r(),a("div",y,[u(t(l),{code:E,"import-map":t(g),css:t(x)},null,8,["import-map","css"])])),[[p,s.value]])],64)}}});export{k as default};
