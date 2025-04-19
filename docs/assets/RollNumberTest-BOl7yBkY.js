import{E as V}from"./ExampleBox-e9va1w5m.js";import{d as x,h as u,c as R,z as w,a as g,t as B,o as _,f as i,w as v,e as c,m as n}from"./index-n8jG7h5l.js";const h=x({__name:"RollNumber",props:{number:{},fractionDigits:{default:0},duration:{default:300},trimRightZero:{type:Boolean,default:!0}},setup(f){const l=f,s=u(l.number),a=R(()=>{let e=s.value.toFixed(l.fractionDigits);return l.trimRightZero&&l.fractionDigits&&(e=e.replace(/\.0+/,"")),e});let o=null;w(()=>l.number,e=>b(e));function b(e){const r=performance.now(),m=s.value,d=e-m;o&&cancelAnimationFrame(o);function t(N){const p=N-r;if(p>0)if(p<l.duration)s.value=m+d*(p/l.duration);else{s.value=e,o=null;return}o=requestAnimationFrame(t)}o=requestAnimationFrame(t)}return(e,r)=>(_(),g("span",null,B(a.value),1))}}),D={class:"height100",style:{padding:"0.5em","box-sizing":"border-box"}},Z={class:"ls-text-line"},y={class:"ls-text-line"},z={class:"ls-text-line"},E={class:"ls-text-line"},A={class:"ls-text-line"},U=x({__name:"RollNumberTest",setup(f){const l=u(20),s=u(0),a=u(300),o=u(!0);return(b,e)=>{const r=c("el-input-number"),m=c("el-switch"),d=c("el-scrollbar");return _(),g("div",D,[i(d,null,{default:v(()=>[e[10]||(e[10]=n("h1",null,"RollNumber是一个展示数字及数字间动画过渡的组件",-1)),i(V,null,{code:v(()=>e[9]||(e[9]=[n("pre",null,`<div class="ls-text-line">
  <span>后台控制的数值</span>
  <el-input-number v-model="value" :step="20"></el-input-number>
</div>
<div class="ls-text-line">
  <span>小数位数</span>
  <el-input-number v-model="decimal" :min="0" :max="3"></el-input-number>
</div>
<div class="ls-text-line">
  <span>动画时间</span>
  <el-input-number v-model="duration" :min="0" :max="3000"></el-input-number>
</div>
<div class="ls-text-line">
  <span>移除小数后多余的0</span>
  <el-switch v-model="trimRightZero"></el-switch>
</div>
<div class="ls-text-line">
  <span>页面呈现的数值</span>
  <RollNumber style="color: red" :number="value" :fractionDigits="decimal" :duration="duration"
              :trim-right-zero="trimRightZero"></RollNumber>
</div>
<script setup lang="ts">
import ExampleBox from "../exampleBox/ExampleBox.vue";
import {ref} from "vue";
import RollNumber from "./RollNumber.vue";

const value = ref(20);
const decimal = ref(0);
const duration = ref(300);
const trimRightZero = ref(true);`,-1)])),default:v(()=>[n("div",Z,[e[4]||(e[4]=n("span",null,"后台控制的数值",-1)),i(r,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=t=>l.value=t),step:20},null,8,["modelValue"])]),n("div",y,[e[5]||(e[5]=n("span",null,"小数位数",-1)),i(r,{modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=t=>s.value=t),min:0,max:3},null,8,["modelValue"])]),n("div",z,[e[6]||(e[6]=n("span",null,"动画时间",-1)),i(r,{modelValue:a.value,"onUpdate:modelValue":e[2]||(e[2]=t=>a.value=t),min:0,max:3e3},null,8,["modelValue"])]),n("div",E,[e[7]||(e[7]=n("span",null,"移除小数后多余的0",-1)),i(m,{modelValue:o.value,"onUpdate:modelValue":e[3]||(e[3]=t=>o.value=t)},null,8,["modelValue"])]),n("div",A,[e[8]||(e[8]=n("span",null,"页面呈现的数值",-1)),i(h,{style:{color:"red"},number:l.value,fractionDigits:s.value,duration:a.value,"trim-right-zero":o.value},null,8,["number","fractionDigits","duration","trim-right-zero"])])]),_:1})]),_:1})])}}});export{U as default};
