import{E as B}from"./ExampleBox-CHEDYhng.js";import{i as c,d as b,a as p,h as n,f as v,w as r,F as y,b as x,q as R,g as k,t as f,u as o,e as T,o as d}from"./index-DQ4q2RYY.js";function g(u,s=!1){const t=c(u.find(e=>e.selected)||null),a=c(u);function i(e){if(t.value)if(t.value.name===e.name)if(s)t.value.selected=!1,t.value=null;else return;else t.value.selected=!1,e.selected=!0,t.value=e;else e.selected=!0,t.value=e}return{selectedButton:t,buttons:a,selectButton:i}}const _={class:"height100",style:{padding:"0.5em","box-sizing":"border-box"}},N=b({__name:"RadioButtonTest",setup(u){const{selectedButton:s,buttons:t,selectButton:a}=g([{name:"工具1",selected:!1},{name:"工具2",selected:!1}],!0);return(i,e)=>{const m=T("el-button");return d(),p("div",_,[e[1]||(e[1]=n("h1",null,"setupRadioButton用于单选按钮逻辑",-1)),e[2]||(e[2]=n("div",null,"一个按钮对应一个工具或一个页面，例如工具可激活和取消激活，只能选中一个工具的典型场景。",-1)),e[3]||(e[3]=n("pre",null,`/**
 * 单选按钮逻辑
 * @param initButtons 初始化按钮组，只有最多一项的selected为true
 * @param buttonUpAble 按钮是否可以弹起，默认无法弹起
 */
export declare function setupRadioButton<T extends RadioButtonType>(initButtons: T[], buttonUpAble = false): {
  selectedButton: Ref<T | null>,
  buttons: Ref<T[]>,
  selectButton: (item: UnwrapRef<T>) => void,
}`,-1)),v(B,null,{code:r(()=>e[0]||(e[0]=[n("pre",null,`<el-button v-for="item in buttons" :key="item.name" :type="item.selected?'primary':'' as any" @click="selectButton(item)">
  {{ item.name }}
</el-button>
<div>当前激活了 {{ selectedButton ? selectedButton.name : '' }}</div>
<script setup lang="ts">
  import {setupRadioButton} from "../radioButton";

  const {selectedButton, buttons, selectButton} = setupRadioButton([
    {
      name: '工具1',
      selected: false,
    },
    {
      name: '工具2',
      selected: false,
    }
  ],true);
<\/script>`,-1)])),default:r(()=>[(d(!0),p(y,null,x(o(t),l=>(d(),R(m,{key:l.name,type:l.selected?"primary":"",onClick:C=>o(a)(l)},{default:r(()=>[k(f(l.name),1)]),_:2},1032,["type","onClick"]))),128)),n("div",null,"当前激活了 "+f(o(s)?o(s).name:""),1)]),_:1})])}}});export{N as default};
