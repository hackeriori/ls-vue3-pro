import"./base-DbjQXbdW.js";import{E as _}from"./el-scrollbar-keZdNopt.js";import{d as c,a as L}from"./ExampleBox-Bd-ZHTTp.js";import{a2 as F,d,j as m,a as f,A as n,f as i,w as a,t as p,o as v,g as N}from"./index-Cht9iEeR.js";import"./install-B18KVwZb.js";let x=1e4;function b(r,o){let t;async function s(){await r(),t=setTimeout(s,o||x)}s(),F(()=>clearTimeout(t))}function w(r,o){r.forEach(t=>b(t,o))}function y(r){x=r}const T={class:"ls-text-halfLine"},g=d({__name:"LoopFunctionExp",setup(r){const o=m(0);async function t(){return new Promise(s=>{setTimeout(()=>{o.value++,s(void 0)})})}return b(t,1e3),(s,u)=>(v(),f("div",T,[u[1]||(u[1]=n("h2",null,"setupLoopFunction，循环调用单一方法",-1)),u[2]||(u[2]=n("pre",null,`/**
 * 循环调用单一方法
 * @param event 耗时方法
 * @param interval 调用时间间隔(ms)
 */
export declare function setupLoopFunction(event: () => Promise<unknown>, interval?: number): void`,-1)),u[3]||(u[3]=n("div",null,"下方标签中的数字，每间隔1000毫秒增加1",-1)),i(c,null,{code:a(()=>u[0]||(u[0]=[n("pre",null,`<template>
  <h4>{{ num }}</h4>
</template>

<script setup lang="ts">
const num = ref(0);

async function addNumber() {
  return new Promise(resolve => {
    setTimeout(() => {
        num.value++;
        resolve(undefined);
      }
    );
  })
}

setupLoopFunction(addNumber, 1000)
<\/script>`,-1)])),default:a(()=>[n("h4",null,p(o.value),1)]),_:1})]))}}),P={class:"ls-text-halfLine"},E=d({__name:"LoopFunctionsExp",setup(r){const o=m(0),t=m(0);async function s(){return new Promise(e=>{setTimeout(()=>{o.value++,e(void 0)})})}async function u(){return new Promise(e=>{setTimeout(()=>{t.value+=2,e(void 0)})})}return w([s,u],1e3),(e,l)=>(v(),f("div",P,[l[1]||(l[1]=n("h2",null,"setupLoopFunctions，循环调用多个方法",-1)),l[2]||(l[2]=n("pre",null,`/**
 * 循环调用多个方法
 * @param events 方法集合
 * @param interval 调用时间间隔(ms)
 */
export declare function setupLoopFunctions(events: (() => Promise<unknown>)[], interval?: number): void`,-1)),l[3]||(l[3]=n("div",null,"下方标签中的数字，第一个每隔1000毫秒加1，第二个每隔1000毫秒加2",-1)),i(c,null,{code:a(()=>l[0]||(l[0]=[n("pre",null,`<template>
  <h4>{{ num1 }}</h4>
  <h4>{{ num2 }}</h4>
</template>

<script setup lang="ts">
const num1 = ref(0);
const num2 = ref(0);

async function addNumber1() {
  return new Promise(resolve => {
    setTimeout(() => {
        num1.value++;
        resolve(undefined);
      }
    );
  })
}

async function addNumber2() {
  return new Promise(resolve => {
    setTimeout(() => {
        num2.value += 2;
        resolve(undefined);
      }
    );
  })
}

setupLoopFunctions([addNumber1, addNumber2], 1000)
<\/script>`,-1)])),default:a(()=>[n("h4",null,p(o.value),1),n("h4",null,p(t.value),1)]),_:1})]))}}),h={class:"ls-text-halfLine"},k=d({__name:"SetDefaultIntervalExp",setup(r){const o=m(0);async function t(){return new Promise(u=>{setTimeout(()=>{o.value++,u(void 0)})})}function s(){y(1e3)}return b(t),(u,e)=>{const l=L;return v(),f("div",h,[e[2]||(e[2]=n("h2",null,"setDefaultInterval，设置默认的调用时间间隔",-1)),e[3]||(e[3]=n("pre",null,`/**
 * 设置默认的调用时间间隔
 * @param interval 调用时间间隔(ms)
 */
export declare function setDefaultInterval(interval: number): void`,-1)),e[4]||(e[4]=n("h3",null,"一般在项目初始化阶段调用一次，动态调用将在下一次执行调用时应用时间间隔。（即不会立即更改时间间隔）",-1)),e[5]||(e[5]=n("div",null,"下方标签中的数字，每间隔10000毫秒增加1，更改后每1000毫秒增加1",-1)),i(c,null,{code:a(()=>e[1]||(e[1]=[n("pre",null,`<template>
  <h4>{{ num }}</h4>
  <el-button @click="changeSet">更改默认间隔</el-button>
</template>

<script setup lang="ts">
const num = ref(0);

async function addNumber() {
  return new Promise(resolve => {
    setTimeout(() => {
        num.value++;
        resolve(undefined);
      }
    );
  })
}

function changeSet() {
  setDefaultInterval(1000);
}

setupLoopFunction(addNumber)
<\/script>`,-1)])),default:a(()=>[n("h4",null,p(o.value),1),i(l,{onClick:s},{default:a(()=>e[0]||(e[0]=[N("更改默认间隔")])),_:1})]),_:1})])}}}),D={class:"height100",style:{padding:"0.5em","box-sizing":"border-box"}},V=d({__name:"LoopFunctionTest",setup(r){return(o,t)=>{const s=_;return v(),f("div",D,[i(s,null,{default:a(()=>[t[0]||(t[0]=n("div",{class:"ls-text-line"},[n("h1",null,"setupLoopFunction，setupLoopFunctions用于循环调用耗时方法，例如在页面中轮询接口。"),n("h3",null,"调用时会等待耗时方法执行，执行完毕后，等待时间间隔（默认10000ms）再次调用耗时方法。避免过快执行耗时方法（例如请求接口）")],-1)),i(g),i(E),i(k)]),_:1})])}}});export{V as default};
