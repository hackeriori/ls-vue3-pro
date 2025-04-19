const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VuePlayground-BZLSRyWc.js","./base-DbjQXbdW.js","./index-Cht9iEeR.js","./index-DH63uhMi.css","./base-CMRK1q-d.css","./el-scrollbar-keZdNopt.js","./install-B18KVwZb.js","./el-scrollbar-BWxh-h6K.css","./lsBaseLib.es-DNO7EYIp.js","./VuePlayground-BTNWep8G.css"])))=>i.map(i=>d[i]);
import{d as p,j as m,a,A as i,z as d,f as u,u as o,a5 as v,F as c,a6 as f,o as r}from"./index-Cht9iEeR.js";import"./base-DbjQXbdW.js";import{v as _,a as x}from"./importMap-DlKZV69q.js";const g={style:{height:"265px"}},y=`<script setup>
import {vEllipsis} from 'ls-vue3-pro';
import {ref} from 'vue';

const text = ref('这是一段可能会超出容器宽度的文本内容');
<\/script>

<template>
  <div>
    <input style="width: 300px" v-model="text" />
  </div>
  <div v-ellipsis style="width: 100px;background-color: aquamarine">{{ text }}</div>
</template>`,k=p({__name:"EllipsisTest",setup(E){const t=m(!0),l=v(async()=>{const s=await f(()=>import("./VuePlayground-BZLSRyWc.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);return t.value=!1,s.default});return(s,e)=>{const n=_;return r(),a(c,null,[e[0]||(e[0]=i("div",{class:"ls-marginV-1"},"v-ellipsis指令，用于实现文本超出时自动隐藏并显示 title 提示。",-1)),e[1]||(e[1]=i("div",{class:"ls-marginV-1"},"该指令会在元素挂载和更新时检查内容是否超出容器宽度，并动态设置 title 属性。",-1)),d((r(),a("div",g,[u(o(l),{code:y,"import-map":o(x)},null,8,["import-map"])])),[[n,t.value]])],64)}}});export{k as default};
