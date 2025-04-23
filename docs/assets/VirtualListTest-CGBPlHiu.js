const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./VuePlayground-BUcfc-KO.js","./base-Op_l8k2B.js","./index-BCLzAaPz.js","./index-DH63uhMi.css","./base-CMRK1q-d.css","./el-scrollbar-nGQc_BzY.js","./install-Bjjr33yt.js","./index-BeX1gaoE.js","./el-scrollbar-BWxh-h6K.css","./lsBaseLib.es-DNO7EYIp.js","./VuePlayground-BTNWep8G.css"])))=>i.map(i=>d[i]);
import{d as n,j as p,a as i,A as r,z as u,f as d,u as e,a5 as c,F as f,a6 as _,o}from"./index-BCLzAaPz.js";import"./base-Op_l8k2B.js";import{v,i as g,a as V}from"./importMap-ByMWiKNi.js";const x={style:{height:"285px"}},h=`<script setup>
import {VirtualList} from 'ls-vue3-pro';
import {ref} from 'vue';

const list = ref(Array.from({length: 300}).map((x, i) => ({id: i, name:'Item - ' + i})));
<\/script>

<template>
  <VirtualList :list-data="list" :item-height="30" item-key="id" class="height100" >
    <template #default="{ item }">
      {{ item.name }}
    </template>
  </VirtualList>
</template>`,E=n({__name:"VirtualListTest",setup(y){const a=p(!0),m=c(async()=>{const s=await _(()=>import("./VuePlayground-BUcfc-KO.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url);return a.value=!1,s.default});return(s,t)=>{const l=v;return o(),i(f,null,[t[0]||(t[0]=r("div",{class:"ls-marginV-1"},"定高虚拟列表组件，用于高效渲染大量数据。",-1)),t[1]||(t[1]=r("div",{class:"ls-marginV-1"},"通过计算可视区域内的数据，减少 DOM 节点的渲染数量，提升性能。",-1)),u((o(),i("div",x,[d(e(m),{code:h,"import-map":e(V),css:e(g)},null,8,["import-map","css"])])),[[l,a.value]])],64)}}});export{E as default};
