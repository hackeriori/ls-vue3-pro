import{d as g,S as D,j as r,c as o,h as b,a as u,A as s,D as c,F as S,b as k,k as T,o as d,_ as B,f,w as p,g as C,t as I}from"./index-B-ef8-WX.js";import{d as M}from"./ExampleBox-C_i4eZW2.js";import"./base-Cu9M98Mf.js";import"./install-BqcjuNST.js";const w=g({__name:"VirtualList",props:{listData:{},itemHeight:{}},setup(v){const e=v,l=D(),t=r(0),a=r(0),n=r(0),m=r(0),x=o(()=>e.listData.length*e.itemHeight),h=o(()=>Math.ceil(t.value/e.itemHeight)),_=o(()=>`translateY(${a.value}px)`),y=o(()=>e.listData.slice(n.value,Math.min(m.value,e.listData.length)));b(()=>{t.value=l.value.clientHeight,m.value=n.value+h.value});function L(){const i=l.value.scrollTop;n.value=Math.floor(i/e.itemHeight),m.value=n.value+h.value,a.value=i-i%e.itemHeight}return(i,R)=>(d(),u("div",{ref_key:"elRef",ref:l,class:"virtualListContainer",onScroll:L},[s("div",{class:"listStrutter",style:c({height:x.value+"px"})},null,4),s("div",{class:"renderList",style:c({transform:_.value})},[(d(!0),u(S,null,k(y.value,(V,H)=>(d(),u("div",{class:"renderItem",key:H,style:c({height:i.itemHeight+"px"})},[T(i.$slots,"default",{item:V},void 0,!0)],4))),128))],4)],544))}}),A=B(w,[["__scopeId","data-v-cb3428ac"]]),E={class:"height100",style:{padding:"0.5em","box-sizing":"border-box"}},N={style:{height:"300px"}},O=g({__name:"VirtualListTest",setup(v){const e=r(Array.from({length:300}).map((l,t)=>({id:t})));return(l,t)=>(d(),u("div",E,[t[1]||(t[1]=s("h1",null,"VirtualList是一个定高虚拟列表的组件",-1)),t[2]||(t[2]=s("h3",null,"从目前接触的设计来看，列表项基本上都是定高的，后续有不定高需求再封装",-1)),t[3]||(t[3]=s("h3",null,"列表需要列表数据listData和每项数据的高度itemHeight,插槽item为传入的数据项",-1)),f(M,null,{code:p(()=>t[0]||(t[0]=[s("pre",null,`<div style="height: 300px">
  <VirtualList :list-data="list" :item-height="30">
    <template #default="{ item }">
      {{ item['id'] }}
    </template>
  </VirtualList>
</div>
import VirtualList from './VirtualList.vue';
import {ref} from 'vue';

const list = ref(Array.from({length: 300}).map((x, i) => ({id: i})));`,-1)])),default:p(()=>[s("div",N,[f(A,{"list-data":e.value,"item-height":30},{default:p(({item:a})=>[C(I("id"in a?a.id:""),1)]),_:1},8,["list-data"])])]),_:1})]))}});export{O as default};
