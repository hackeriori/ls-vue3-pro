import"./base-Op_l8k2B.js";import{d as u,a as x}from"./ExampleBox-CiSa_htM.js";import{d as s,a as r,B as m,A as t,k as f,o as d,_ as g,j as v,f as n,w as a,g as b,t as B}from"./index-BCLzAaPz.js";import"./install-Bjjr33yt.js";import"./index-fdAl261p.js";const _=s({__name:"ExpandableBox",props:{isExpand:{type:Boolean}},setup(i){return(e,l)=>(d(),r("div",{class:m(["expandableBox",{expanded:e.isExpand}])},[t("div",null,[f(e.$slots,"default",{},void 0,!0)])],2))}}),c=g(_,[["__scopeId","data-v-bac66c96"]]),E={class:"height100",style:{padding:"0.5em","box-sizing":"border-box"}},C=s({__name:"ExpandableBoxTest",setup(i){const e=v(!0);function l(){e.value=!e.value}return(h,o)=>{const p=x;return d(),r("div",E,[o[2]||(o[2]=t("h1",null,"ExpandableBox是一个向下展开的组件",-1)),o[3]||(o[3]=t("div",null,"通常我们在写高度变化的动画时，从高度0到高度auto是无法直接使用transition动画来完成的",-1)),o[4]||(o[4]=t("div",null,"这需要我们按dom的实际高度来指定height属性，但是内容变化后，又需要我们重新来指定height属性，这显然不方便",-1)),o[5]||(o[5]=t("div",null,"借助gird布局，我们可以实现0到auto的动画过渡，特封装此组件",-1)),n(u,null,{code:a(()=>o[1]||(o[1]=[t("pre",null,`<el-button @click="toggleShowMore">{{ showMore ? '收起' : '更多' }}</el-button>
<ExpandableBox :is-expand="showMore">
  <div style="height: 300px;background-color: aquamarine"></div>
</ExpandableBox>

<script setup lang="ts">
import {ref} from "vue";
import ExpandableBox from "./ExpandableBox.vue";

const showMore = ref(true);

function toggleShowMore(){
  showMore.value = !showMore.value;
}
<\/script>`,-1)])),default:a(()=>[n(p,{onClick:l},{default:a(()=>[b(B(e.value?"收起":"更多"),1)]),_:1}),n(c,{"is-expand":e.value},{default:a(()=>o[0]||(o[0]=[t("div",{style:{height:"300px","background-color":"aquamarine"}},null,-1)])),_:1},8,["is-expand"])]),_:1})])}}});export{C as default};
