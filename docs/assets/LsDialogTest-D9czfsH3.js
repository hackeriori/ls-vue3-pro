import{E as k}from"./ExampleBox-D7WoVV8z.js";import{d as B,h as x,s as U,i as Q,j as Z,e as C,a as F,o as b,k as _,n as A,l as $,m as i,p as j,t as K,q as P,f as a,w as f,u as q,v as ee,x as te,y as L,g as w,c as le,z as oe,T as z,A as H,B as O,C as ne,E as se,D as R}from"./index-6_e4sQwc.js";class ie{#o;#n;#s;#e;#r=0;#a=0;#f=0;#p=0;#t=0;#i=0;#l=0;#u=0;#d=!1;constructor(t,s,r){this.#o=s,this.#n=e=>{if(this.#d||e.target.tagName==="I")return;this.#r=e.screenX,this.#a=e.screenY;const p=getComputedStyle(t);this.setPercentStyle(t),this.#f=Number(p.left.slice(0,-2)),this.#p=Number(p.top.slice(0,-2));const o=Number(p.width.slice(0,-2)),d=Number(p.height.slice(0,-2));this.#t=r?Math.floor(o/2):0,this.#l=r?Math.floor(d/2):0;const m=getComputedStyle(t.offsetParent),c=Number(m.width.slice(0,-2)),v=Number(m.height.slice(0,-2));this.#i=c-o+this.#t-1,this.#u=v-d+this.#l-1,document.addEventListener("mousemove",this.#s),document.addEventListener("mouseup",this.#e)},this.#s=e=>{const p=e.screenX-this.#r,o=this.#f+p;o<this.#t?t.style.left=this.#t+"px":o>this.#i?t.style.left=this.#i+"px":t.style.left=o+"px";const d=e.screenY-this.#a,m=this.#p+d;m<this.#l?t.style.top=this.#l+"px":m>this.#u?t.style.top=this.#u+"px":t.style.top=m+"px"},this.#e=()=>{this.setPercentStyle(t),document.removeEventListener("mousemove",this.#s),document.removeEventListener("mouseup",this.#e)}}setPercentStyle(t){if(t.offsetParent){const s=getComputedStyle(t.offsetParent),r=getComputedStyle(t);t.style.left=Number(r.left.slice(0,-2))/Number(s.width.slice(0,-2))*100+"%",t.style.top=Number(r.top.slice(0,-2))/Number(s.height.slice(0,-2))*100+"%"}}setPause(t){this.#d=t}start(){this.#o.addEventListener("mousedown",this.#n)}stop(){this.#o.removeEventListener("mousedown",this.#n),this.#e()}}function ue(l,t,s=!1,r){let e=null,p=!1;const o=function(...d){e&&clearTimeout(e),s&&!p&&(l.apply(this,d),p=!0),e=setTimeout(()=>{l.apply(this,d),e=null},t)};return o.cancel=function(){e&&clearTimeout(e),e=null},o}function re(l,t){return`${typeof l=="object"?l.constructor.name:l.name}类中的${t.toString()}方法中：`}function y(l,t="校验失败！",s=!1){return function(r,e,p,o){let d=!0,m=[];for(let c=0;c<r.length;c++){const v=r[c];(v.index<o.length||s)&&(l(v.index<o.length?o[v.index]:void 0,v)||(d=!1,m.push(`第${v.index+1}个参数${v.name}，${typeof t=="string"?t:t(v)}`)))}if(!d)throw`${re(e,p)}${m.join("；")}！`}}const h=new Map;h.set("required",y(l=>l!==void 0,"是必须的",!0)),h.set("number",y(l=>Number.isFinite(l),"必须是数字")),h.set("string",y(l=>typeof l=="string","必须是字符串")),h.set("boolean",y(l=>l===!0||l===!1,"必须是布尔值")),h.set("function",y(l=>typeof l=="function","必须是函数")),h.set("array",y(l=>Array.isArray(l),"必须是数组")),h.set("date",y(l=>l instanceof Date&&!isNaN(l.valueOf()),"必须是日期")),h.set("dom",y(l=>l instanceof HTMLElement,"必须是HTMLElement")),h.set("map",y(l=>l instanceof Map,"必须是Map类型")),h.set("regExp",y(l=>l instanceof RegExp,"必须是正则表达式")),h.set("symbol",y(l=>typeof l=="symbol","必须是Symbol")),h.set("asyncFunction",y(l=>typeof l=="function"&&l.constructor.name==="AsyncFunction","必须是异步函数")),h.set("instanceof",y((l,t)=>l instanceof t.instance,l=>`必须是[${l.instance.name}]的实例类型`)),h.set("custom",y((l,t)=>t.custom(l),l=>l.customText||"自定义校验失败"));const ae={style:{"font-size":"18px"}},fe={key:0,class:"ls-flex ls-flex-end",style:{padding:"0 1em 1em 1em"}},W=B({__name:"LsDialogPanel",props:{titleText:{},width:{},fullScreen:{type:Boolean},showFullScreen:{type:Boolean},closeConfirm:{type:Boolean},closeTip:{},closeDialog:{type:Function},draggable:{type:Boolean},fitHeight:{type:Boolean},height:{},boxCenter:{type:Boolean},left:{},top:{},right:{},bottom:{},showFooter:{type:Boolean}},emits:["confirm","sizeChange"],setup(l,{expose:t,emit:s}){const r=l,e=s,p=x(r.draggable);let o=r.fullScreen,d,m="",c="",v="",E="";const D=U(),N=U();Q(()=>{const u=D.value;r.boxCenter?(u.style.left="50%",u.style.top="50%"):(u.style.left=r.left,u.style.top=r.top,u.style.bottom=r.bottom,u.style.right=r.right),o?(u.style.width="100%",u.style.height="100%"):(u.style.width=r.width,u.style.height=r.height),r.draggable&&(d=new ie(u,N.value,r.boxCenter),d.start(),o&&(p.value=!1,d.setPause(!0)))}),Z(()=>{d?.stop()});function n(){if(r.showFullScreen){if(o=!o,o){if(r.draggable){p.value=!1,d?.setPause(!0);const u=D.value,g=getComputedStyle(u),T=getComputedStyle(u.offsetParent);v=Number(g.height.slice(0,-2))/Number(T.height.slice(0,-2))*100+"%",E=Number(g.width.slice(0,-2))/Number(T.width.slice(0,-2))*100+"%",m=u.style.left,c=u.style.top,u.style.height=v,u.style.width=E}}else r.draggable&&(p.value=!0,d?.setPause(!1));V()}}function V(){const u=D.value.style,g=ue(()=>{D.value.style.transitionProperty="",D.value.style.transitionDuration=""},300);u.transitionProperty="left, top, width, height",u.transitionDuration="300ms",o?(u.width="100%",u.height="100%",u.left=r.boxCenter?"50%":"0",u.top=r.boxCenter?"50%":"0"):(u.width=E,u.height=v,u.left=m,u.top=c),g(),e("sizeChange")}function M(){if(d){const u=D.value;d.setPercentStyle(u),u.style.bottom="unset",u.style.right="unset"}}function I(){e("confirm")}function G(){D.value.focus()}function J(){D.value.blur()}return t({initSize:M,focus:G,blur:J}),(u,g)=>{const T=C("el-icon"),X=C("el-button");return b(),F("div",{class:A(["lsDialogPanel ls-panel ls-flexV ls-flex-unShrink",{center:u.boxCenter}]),tabindex:"0",onKeyup:g[4]||(g[4]=_($(Y=>u.closeDialog("byKey"),["self"]),["esc"])),ref_key:"elRef",ref:D},[i("div",{class:A(["lsDialogTitle ls-flex ls-flex-between ls-flex-centerV",{lsDraggable:p.value}]),ref_key:"triggerDom",ref:N,onDblclick:n},[i("div",{onMousemove:g[0]||(g[0]=$(()=>{},["stop"])),onMousedown:g[1]||(g[1]=$(()=>{},["stop"])),style:{cursor:"auto"}},K(u.titleText),33),i("div",ae,[u.showFullScreen?(b(),P(T,{key:0,class:"ls-text-hover",style:{margin:"0 0.2em"},onClick:n},{default:f(()=>[a(q(ee))]),_:1})):j("",!0),a(T,{class:"ls-text-hover",onClick:g[2]||(g[2]=Y=>u.closeDialog("byButton"))},{default:f(()=>[a(q(te))]),_:1})])],34),i("div",{class:A(["lsDialogBody",{fit100:u.fitHeight}])},[L(u.$slots,"default")],2),u.showFooter?(b(),F("div",fe,[L(u.$slots,"footer",{},()=>[a(X,{onClick:g[3]||(g[3]=Y=>u.closeDialog("byButton"))},{default:f(()=>g[5]||(g[5]=[w("取 消")])),_:1}),a(X,{type:"primary",style:{"margin-left":"1em"},onClick:I},{default:f(()=>g[6]||(g[6]=[w("确 认")])),_:1})])])):j("",!0)],34)}}}),S=B({__name:"LsDialog",props:{modelValue:{type:Boolean,default:!1},titleText:{default:""},width:{default:"50%"},fullScreen:{type:Boolean,default:!1},showFullScreen:{type:Boolean,default:!1},closeConfirm:{type:Boolean,default:!1},closeTip:{default:"弹窗即将关闭，确认吗？"},modal:{type:Boolean,default:!0},draggable:{type:Boolean,default:!0},appendToBody:{type:Boolean,default:!1},fitHeight:{type:Boolean,default:!1},height:{default:"unset"},closeOnClickModal:{type:Boolean,default:!0},boxCenter:{type:Boolean,default:!0},left:{default:"unset"},top:{default:"unset"},right:{default:"unset"},bottom:{default:"unset"},showFooter:{type:Boolean,default:!0}},emits:["update:modelValue","dialogClose","confirm","sizeChange"],setup(l,{emit:t}){const s=l,r=t,e=le(()=>s.boxCenter?"lsDialogCenter":"lsDialogCenterFix");let p=!1,o=!0,d=!1;const m=U();oe(()=>s.modelValue,n=>{n&&(d=!1,R(()=>m.value?.focus())),n&&o&&(R(()=>m.value?.initSize()),o=!1)});async function c(n){if(n instanceof PointerEvent&&(n="byButton"),!d){if(s.closeConfirm)try{m.value?.blur(),await se.confirm(s.closeTip)}catch{return}r("update:modelValue",!1),r("dialogClose",n)}}function v(n){s.closeOnClickModal&&(n?p=!0:!n&&p&&(p=!1,c("byModal")))}function E(){r("confirm")}function D(){r("sizeChange")}function N(){d=!0}return(n,V)=>(b(),P(ne,{to:"body",disabled:!n.appendToBody},[n.modal?(b(),P(z,{key:0,name:"lsDialogFade",onBeforeLeave:N},{default:f(()=>[H(i("div",{class:"lsDialogMask",onMousedown:V[0]||(V[0]=$(M=>v(!0),["left","self"])),onMouseup:V[1]||(V[1]=$(M=>v(!1),["left","self"]))},[a(z,{name:e.value},{default:f(()=>[H(a(W,{titleText:n.titleText,width:n.width,"full-screen":n.fullScreen,height:n.height,"show-full-screen":!n.fullScreen&&n.showFullScreen,"fit-height":n.fitHeight,"close-confirm":n.closeConfirm,"close-tip":n.closeTip,"close-dialog":c,"box-center":n.boxCenter,left:n.left,top:n.top,bottom:n.bottom,right:n.right,draggable:n.draggable,onConfirm:E,ref_key:"lsDialogPanel",ref:m,onSizeChange:D,"show-footer":n.showFooter},{default:f(()=>[L(n.$slots,"default")]),footer:f(()=>[L(n.$slots,"footer",{closeDialog:c})]),_:3},8,["titleText","width","full-screen","height","show-full-screen","fit-height","close-confirm","close-tip","box-center","left","top","bottom","right","draggable","show-footer"]),[[O,n.modelValue]])]),_:3},8,["name"])],544),[[O,n.modelValue]])]),_:3})):(b(),P(z,{key:1,name:e.value},{default:f(()=>[H(a(W,{titleText:n.titleText,width:n.width,"full-screen":n.fullScreen,"show-full-screen":!n.fullScreen&&n.showFullScreen,"close-confirm":n.closeConfirm,height:n.height,"close-tip":n.closeTip,"fit-height":n.fitHeight,onSizeChange:D,"box-center":n.boxCenter,left:n.left,top:n.top,bottom:n.bottom,right:n.right,"close-dialog":c,draggable:n.draggable,onConfirm:E,ref_key:"lsDialogPanel",ref:m,"show-footer":n.showFooter},{default:f(()=>[L(n.$slots,"default")]),footer:f(()=>[L(n.$slots,"footer",{closeDialog:c})]),_:3},8,["titleText","width","full-screen","show-full-screen","close-confirm","height","close-tip","fit-height","box-center","left","top","bottom","right","draggable","show-footer"]),[[O,n.modelValue]])]),_:3},8,["name"]))],8,["disabled"]))}}),pe=B({__name:"BaseExp",setup(l){const t=x(!1),s=x(!1);function r(){t.value=!0}function e(){s.value=!0}return(p,o)=>{const d=C("el-button");return b(),F("div",null,[o[2]||(o[2]=i("h2",null,"基础用法",-1)),o[3]||(o[3]=i("div",null,"通过v-model绑定一个boolean类型的变量，控制弹窗的显隐",-1)),o[4]||(o[4]=i("div",null,"通过titleText属性设置弹窗标题",-1)),o[5]||(o[5]=i("div",null,"按ESC键，点击遮罩层，点击关闭按钮，点击取消均可关闭弹窗",-1)),o[6]||(o[6]=i("div",null,"通过confirm事件以分辨是否点击了确定按钮",-1)),a(k,null,{code:f(()=>[i("pre",null,`<el-button @click="openDialog">打开弹窗</el-button>
<div>已点击确定按钮：`+K(s.value?"是":"否")+`</div>
<LsDialog v-model="visible" title-text="示例弹窗" @confirm="OK"></LsDialog>

<script setup lang="ts">
import {ref} from "vue";

const visible = ref(false);
const isOK = ref(false);

function openDialog() {
  visible.value = true;
}

function OK(){
  isOK.value = true;
}
<\/script>`,1)]),default:f(()=>[a(d,{onClick:r},{default:f(()=>o[1]||(o[1]=[w("打开弹窗")])),_:1}),i("div",null,"已点击确定按钮："+K(s.value?"是":"否"),1),a(S,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=m=>t.value=m),"title-text":"示例弹窗",onConfirm:e},null,8,["modelValue"])]),_:1})])}}}),de=B({__name:"FullScreenExp",setup(l){const t=x(!1);function s(){t.value=!0}return(r,e)=>{const p=C("el-button");return b(),F("div",null,[e[3]||(e[3]=i("h2",null,"全屏弹窗",-1)),e[4]||(e[4]=i("div",null,"设置fullScreen属性为true即可",-1)),a(k,null,{code:f(()=>e[2]||(e[2]=[i("pre",null,`<el-button @click="openDialog">打开弹窗</el-button>
<LsDialog v-model="visible" full-screen title-text="示例弹窗"></LsDialog>

<script setup lang="ts">
import {ref} from "vue";

const visible = ref(false);

function openDialog() {
  visible.value = true;
}
<\/script>`,-1)])),default:f(()=>[a(p,{onClick:s},{default:f(()=>e[1]||(e[1]=[w("打开弹窗")])),_:1}),a(S,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o),"full-screen":"","title-text":"示例弹窗"},null,8,["modelValue"])]),_:1})])}}}),me=B({__name:"WidthHighExp",setup(l){const t=x(!1);function s(){t.value=!0}return(r,e)=>{const p=C("el-button");return b(),F("div",null,[e[3]||(e[3]=i("h2",null,"指定宽高，显示全屏按钮",-1)),e[4]||(e[4]=i("div",null,"指定弹窗的宽高（未指定的情况下，宽度默认为50%，高度默认由内容撑开），设定width和height属性即可。",-1)),e[5]||(e[5]=i("div",null,"如果需要全屏按钮，添加showFullScreen（仅用于非全屏弹窗，按钮显示的情况下可双击标题栏切换全屏）",-1)),a(k,null,{code:f(()=>e[2]||(e[2]=[i("pre",null,`<el-button @click="openDialog">打开弹窗</el-button>
<LsDialog v-model="visible" width="800px" height="600px" show-full-screen title-text="示例弹窗"></LsDialog>

<script setup lang="ts">
import {ref} from "vue";

const visible = ref(false);

function openDialog() {
  visible.value = true;
}
<\/script>`,-1)])),default:f(()=>[a(p,{onClick:s},{default:f(()=>e[1]||(e[1]=[w("打开弹窗")])),_:1}),a(S,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o),width:"800px",height:"600px","show-full-screen":"","title-text":"示例弹窗"},null,8,["modelValue"])]),_:1})])}}}),ge=B({__name:"CloseExp",setup(l){const t=x(!1);function s(){t.value=!0}return(r,e)=>{const p=C("el-button");return b(),F("div",null,[e[3]||(e[3]=i("h2",null,"关闭弹窗时确认，取消点击遮罩层关闭",-1)),e[4]||(e[4]=i("div",null,'设置closeConfirm属性为true即可，另外可以通过closeTip设定关闭弹窗确认框的提示内容，默认为"弹窗即将关闭，确认吗？"。',-1)),e[5]||(e[5]=i("div",null,"通过closeOnClickModals属性，控制是否可以通过点击遮罩层关闭弹窗",-1)),a(k,null,{code:f(()=>e[2]||(e[2]=[i("pre",null,`<el-button @click="openDialog">打开弹窗</el-button>
<LsDialog v-model="visible" close-confirm close-tip="确定保存吗？" :close-on-click-modal="false" title-text="示例弹窗"></LsDialog>

<script setup lang="ts">
import {ref} from "vue";

const visible = ref(false);

function openDialog() {
  visible.value = true;
}
<\/script>`,-1)])),default:f(()=>[a(p,{onClick:s},{default:f(()=>e[1]||(e[1]=[w("打开弹窗")])),_:1}),a(S,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o),"close-confirm":"","close-tip":"确定保存吗？","close-on-click-modal":!1,"title-text":"示例弹窗"},null,8,["modelValue"])]),_:1})])}}}),ve=B({__name:"ModalExp",setup(l){const t=x(!1);function s(){t.value=!0}return(r,e)=>{const p=C("el-button");return b(),F("div",null,[e[3]||(e[3]=i("h2",null,"取消遮罩层，取消拖动",-1)),e[4]||(e[4]=i("div",null,"通过设置modal属性，显示遮罩层，设置draggable属性，拖动弹窗",-1)),a(k,null,{code:f(()=>e[2]||(e[2]=[i("pre",null,`<el-button @click="openDialog">打开弹窗</el-button>
<LsDialog v-model="visible" :modal="false" :draggable="false" title-text="示例弹窗"></LsDialog>

<script setup lang="ts">
import {ref} from "vue";

const visible = ref(false);

function openDialog() {
  visible.value = true;
}
<\/script>`,-1)])),default:f(()=>[a(p,{onClick:s},{default:f(()=>e[1]||(e[1]=[w("打开弹窗")])),_:1}),a(S,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o),modal:!1,draggable:!1,"title-text":"示例弹窗"},null,8,["modelValue"])]),_:1})])}}}),be=B({__name:"BodyExp",setup(l){const t=x(!1);function s(){t.value=!0}return(r,e)=>{const p=C("el-button");return b(),F("div",null,[e[4]||(e[4]=i("h2",null,"提升弹窗层级，弹窗内容使用百分比布局",-1)),e[5]||(e[5]=i("div",null,"通过appendToBody属性，可以将弹窗的参照提升至body，以解决参照元素尺寸不够或层级不够的情况。",-1)),e[6]||(e[6]=i("div",null,"如果指定了高度，内容希望使用百分比高度，那么需要指定fitHeight属性",-1)),a(k,null,{code:f(()=>e[3]||(e[3]=[i("pre",null,`<el-button @click="openDialog">打开弹窗</el-button>
<LsDialog v-model="visible" append-to-body height="300px" fit-height title-text="示例弹窗">
  <div class="height100" style="background-color: aquamarine"></div>
</LsDialog>

<script setup lang="ts">
import {ref} from "vue";

const visible = ref(false);

function openDialog() {
  visible.value = true;
}
<\/script>`,-1)])),default:f(()=>[a(p,{onClick:s},{default:f(()=>e[1]||(e[1]=[w("打开弹窗")])),_:1}),a(S,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o),"append-to-body":"",height:"300px","fit-height":"","title-text":"示例弹窗"},{default:f(()=>e[2]||(e[2]=[i("div",{class:"height100",style:{"background-color":"aquamarine"}},null,-1)])),_:1},8,["modelValue"])]),_:1})])}}}),ce=B({__name:"PositionExp",setup(l){const t=x(!1);function s(){t.value=!0}return(r,e)=>{const p=C("el-button");return b(),F("div",null,[e[3]||(e[3]=i("h2",null,"自定义弹窗位置",-1)),e[4]||(e[4]=i("div",null,"弹窗通常是在屏幕（参照物）中心弹出，如果希望自定义弹出位置，可以设置boxCenter属性为false，并指定left，top，right，bottom这些属性",-1)),e[5]||(e[5]=i("div",null,"示例弹窗将从屏幕右下方弹出",-1)),a(k,null,{code:f(()=>e[2]||(e[2]=[i("pre",null,`<el-button @click="openDialog">打开弹窗</el-button>
<LsDialog v-model="visible" :box-center="false" right="0.5em" bottom="0.5em" title-text="示例弹窗"></LsDialog>

<script setup lang="ts">
import {ref} from "vue";

const visible = ref(false);

function openDialog() {
  visible.value = true;
}
<\/script>`,-1)])),default:f(()=>[a(p,{onClick:s},{default:f(()=>e[1]||(e[1]=[w("打开弹窗")])),_:1}),a(S,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o),"box-center":!1,right:"0.5em",bottom:"0.5em","title-text":"示例弹窗"},null,8,["modelValue"])]),_:1})])}}}),ye=B({__name:"FooterExp",setup(l){const t=x(!1);function s(){t.value=!0}return(r,e)=>{const p=C("el-button");return b(),F("div",null,[e[4]||(e[4]=i("h2",null,"自定义弹窗脚部",-1)),e[5]||(e[5]=i("div",null,"设置showFooter属性可以决定是否显示脚部",-1)),e[6]||(e[6]=i("div",null,"通过footer插槽，可以自定义脚部",-1)),a(k,null,{code:f(()=>e[3]||(e[3]=[i("pre",null,`<el-button @click="openDialog">打开弹窗</el-button>
<LsDialog v-model="visible" title-text="示例弹窗">
  <template #footer="{closeDialog}">
    <el-button @click="closeDialog">关闭</el-button>
  </template>
</LsDialog>

<script setup lang="ts">
import {ref} from "vue";

const visible = ref(false);

function openDialog() {
  visible.value = true;
}
<\/script>`,-1)])),default:f(()=>[a(p,{onClick:s},{default:f(()=>e[1]||(e[1]=[w("打开弹窗")])),_:1}),a(S,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o),"title-text":"示例弹窗"},{footer:f(({closeDialog:o})=>[a(p,{onClick:o},{default:f(()=>e[2]||(e[2]=[w("关闭")])),_:2},1032,["onClick"])]),_:1},8,["modelValue"])]),_:1})])}}}),he={class:"height100",style:{padding:"0.5em","box-sizing":"border-box"}},Fe=B({__name:"LsDialogTest",setup(l){return(t,s)=>{const r=C("el-scrollbar");return b(),F("div",he,[a(r,null,{default:f(()=>[s[0]||(s[0]=i("h1",null,"LsDialog是一个弹窗组件",-1)),s[1]||(s[1]=i("h3",null,"弹窗采用absolute定位而没有使用fixed定位，这与我构建项目的习惯有关，我习惯于body及app元素高度100%，即body是不允许滚动的，滚动在app内的元素实现。",-1)),s[2]||(s[2]=i("h3",null,"风格与element-plus高度相似，功能点包含弹窗可拖动，可全屏，动画过渡，适配element-plus明亮黑暗模式。依赖包含element-plus",-1)),s[3]||(s[3]=i("h3",null,"使用方法（建议项目里面全局注册组件）",-1)),s[4]||(s[4]=i("pre",null,`import {LsDialog} from "ls-vue3-pro";
import {createApp} from "vue";
import ElementPlus from 'element-plus';
import App from "./App.vue";
import 'ls-vue3-pro/dist/style.css';
...

const app = createApp(App).use(ElementPlus).use(xxx);
app.component('LsDialog', LsDialog);
app.mount('#app');`,-1)),s[5]||(s[5]=i("h3",null,"具体属性、插槽和事件，参照库代码中的文件LsDialog.d.ts或web-types.json",-1)),a(pe),a(de),a(me),a(ge),a(ve),a(be),a(ce),a(ye)]),_:1})])}}});export{Fe as default};
