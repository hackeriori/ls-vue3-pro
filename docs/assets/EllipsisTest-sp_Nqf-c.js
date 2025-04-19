const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VuePlayground-dG-cmJMd.js","./index-n8jG7h5l.js","./index-BYRr-lI-.css","./lsBaseLib.es-DNO7EYIp.js","./VuePlayground-D8Czq4-w.css"])))=>i.map(i=>d[i]);
import{d as p,h as m,a as i,m as a,A as d,I as u,f as c,u as o,J as v,F as f,K as _,o as r}from"./index-n8jG7h5l.js";import{i as x}from"./importMap-CHAiu5j_.js";const g={style:{height:"265px"}},y=`<script setup>
import {vEllipsis} from 'ls-vue3-pro';
import {ref} from 'vue';

const text = ref('这是一段可能会超出容器宽度的文本内容');
<\/script>

<template>
  <div>
    <input style="width: 300px" v-model="text" />
  </div>
  <div v-ellipsis style="width: 100px;background-color: aquamarine">{{ text }}</div>
</template>`,w=p({__name:"EllipsisTest",setup(E){const t=m(!0),l=v(async()=>{const s=await _(()=>import("./VuePlayground-dG-cmJMd.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return t.value=!1,s.default});return(s,e)=>{const n=u("loading");return r(),i(f,null,[e[0]||(e[0]=a("div",{class:"ls-marginV-1"},"v-ellipsis指令，用于实现文本超出时自动隐藏并显示 title 提示。",-1)),e[1]||(e[1]=a("div",{class:"ls-marginV-1"},"该指令会在元素挂载和更新时检查内容是否超出容器宽度，并动态设置 title 属性。",-1)),d((r(),i("div",g,[c(o(l),{code:y,"import-map":o(x)},null,8,["import-map"])])),[[n,t.value]])],64)}}});export{w as default};
