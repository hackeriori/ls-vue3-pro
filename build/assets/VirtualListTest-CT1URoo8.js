import{d as g,s as b,h as r,c as o,i as D,a as u,m as s,H as c,F as S,b as T,y as k,o as d,_ as B,f,w as v,g as C,t as E}from"./index-6_e4sQwc.js";import{E as I}from"./ExampleBox-D7WoVV8z.js";const M=g({__name:"VirtualList",props:{listData:{},itemHeight:{}},setup(h){const e=h,l=b(),t=r(0),a=r(0),n=r(0),m=r(0),x=o(()=>e.listData.length*e.itemHeight),p=o(()=>Math.ceil(t.value/e.itemHeight)),_=o(()=>`translateY(${a.value}px)`),y=o(()=>e.listData.slice(n.value,Math.min(m.value,e.listData.length)));D(()=>{t.value=l.value.clientHeight,m.value=n.value+p.value});function H(){const i=l.value.scrollTop;n.value=Math.floor(i/e.itemHeight),m.value=n.value+p.value,a.value=i-i%e.itemHeight}return(i,$)=>(d(),u("div",{ref_key:"elRef",ref:l,class:"virtualListContainer",onScroll:H},[s("div",{class:"listStrutter",style:c({height:x.value+"px"})},null,4),s("div",{class:"renderList",style:c({transform:_.value})},[(d(!0),u(S,null,T(y.value,(L,V)=>(d(),u("div",{class:"renderItem",key:V,style:c({height:i.itemHeight+"px"})},[k(i.$slots,"default",{item:L},void 0,!0)],4))),128))],4)],544))}}),w=B(M,[["__scopeId","data-v-cb3428ac"]]),N={class:"height100",style:{padding:"0.5em","box-sizing":"border-box"}},R={style:{height:"300px"}},F=g({__name:"VirtualListTest",setup(h){const e=r(Array.from({length:300}).map((l,t)=>({id:t})));return(l,t)=>(d(),u("div",N,[t[1]||(t[1]=s("h1",null,"VirtualList是一个定高虚拟列表的组件",-1)),t[2]||(t[2]=s("h3",null,"从目前接触的设计来看，列表项基本上都是定高的，后续有不定高需求再封装",-1)),t[3]||(t[3]=s("h3",null,"列表需要列表数据listData和每项数据的高度itemHeight,插槽item为传入的数据项",-1)),f(I,null,{code:v(()=>t[0]||(t[0]=[s("pre",null,`<div style="height: 300px">
  <VirtualList :list-data="list" :item-height="30">
    <template #default="{ item }">
      {{ item['id'] }}
    </template>
  </VirtualList>
</div>
import VirtualList from './VirtualList.vue';
import {ref} from 'vue';

const list = ref(Array.from({length: 300}).map((x, i) => ({id: i})));`,-1)])),default:v(()=>[s("div",R,[f(w,{"list-data":e.value,"item-height":30},{default:v(({item:a})=>[C(E("id"in a?a.id:""),1)]),_:1},8,["list-data"])])]),_:1})]))}});export{F as default};
