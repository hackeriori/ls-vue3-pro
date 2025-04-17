import{E as u}from"./ExampleBox-D7WoVV8z.js";import{d as s,a as r,n as x,m as t,y as m,o as d,_ as v,h as b,f as n,w as a,e as f,g,t as _}from"./index-6_e4sQwc.js";const c=s({__name:"ExpandableBox",props:{isExpand:{type:Boolean}},setup(i){return(o,l)=>(d(),r("div",{class:x(["expandableBox",{expanded:o.isExpand}])},[t("div",null,[m(o.$slots,"default",{},void 0,!0)])],2))}}),B=v(c,[["__scopeId","data-v-bac66c96"]]),h={class:"height100",style:{padding:"0.5em","box-sizing":"border-box"}},k=s({__name:"ExpandableBoxTest",setup(i){const o=b(!0);function l(){o.value=!o.value}return(E,e)=>{const p=f("el-button");return d(),r("div",h,[e[2]||(e[2]=t("h1",null,"ExpandableBox是一个向下展开的组件",-1)),e[3]||(e[3]=t("div",null,"通常我们在写高度变化的动画时，从高度0到高度auto是无法直接使用transition动画来完成的",-1)),e[4]||(e[4]=t("div",null,"这需要我们按dom的实际高度来指定height属性，但是内容变化后，又需要我们重新来指定height属性，这显然不方便",-1)),e[5]||(e[5]=t("div",null,"借助gird布局，我们可以实现0到auto的动画过渡，特封装此组件",-1)),n(u,null,{code:a(()=>e[1]||(e[1]=[t("pre",null,`<el-button @click="toggleShowMore">{{ showMore ? '收起' : '更多' }}</el-button>
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
<\/script>`,-1)])),default:a(()=>[n(p,{onClick:l},{default:a(()=>[g(_(o.value?"收起":"更多"),1)]),_:1}),n(B,{"is-expand":o.value},{default:a(()=>e[0]||(e[0]=[t("div",{style:{height:"300px","background-color":"aquamarine"}},null,-1)])),_:1},8,["is-expand"])]),_:1})])}}});export{k as default};
