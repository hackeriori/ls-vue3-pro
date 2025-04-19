import{E as k}from"./ExampleBox-e9va1w5m.js";import{d as D,h as C,s as H,i as G,j as J,e as y,a as h,o as g,k as Q,n as N,l as E,m as n,p as Y,t as K,q as P,f as u,w as r,u as A,v as Z,x as _,y as L,g as c,c as ee,z as te,T as M,A as z,B as U,C as le,E as oe,D as q}from"./index-n8jG7h5l.js";import{F as ne}from"./lsBaseLib.es-DNO7EYIp.js";class se{#o;#n;#s;#e;#r=0;#a=0;#f=0;#p=0;#t=0;#i=0;#l=0;#u=0;#d=!1;constructor(t,i,a){this.#o=i,this.#n=e=>{if(this.#d||e.target.tagName==="I")return;this.#r=e.screenX,this.#a=e.screenY;const f=getComputedStyle(t);this.setPercentStyle(t),this.#f=Number(f.left.slice(0,-2)),this.#p=Number(f.top.slice(0,-2));const o=Number(f.width.slice(0,-2)),p=Number(f.height.slice(0,-2));this.#t=a?Math.floor(o/2):0,this.#l=a?Math.floor(p/2):0;const m=getComputedStyle(t.offsetParent),w=Number(m.width.slice(0,-2)),x=Number(m.height.slice(0,-2));this.#i=w-o+this.#t-1,this.#u=x-p+this.#l-1,document.addEventListener("mousemove",this.#s),document.addEventListener("mouseup",this.#e)},this.#s=e=>{const f=e.screenX-this.#r,o=this.#f+f;o<this.#t?t.style.left=this.#t+"px":o>this.#i?t.style.left=this.#i+"px":t.style.left=o+"px";const p=e.screenY-this.#a,m=this.#p+p;m<this.#l?t.style.top=this.#l+"px":m>this.#u?t.style.top=this.#u+"px":t.style.top=m+"px"},this.#e=()=>{this.setPercentStyle(t),document.removeEventListener("mousemove",this.#s),document.removeEventListener("mouseup",this.#e)}}setPercentStyle(t){if(t.offsetParent){const i=getComputedStyle(t.offsetParent),a=getComputedStyle(t);t.style.left=Number(a.left.slice(0,-2))/Number(i.width.slice(0,-2))*100+"%",t.style.top=Number(a.top.slice(0,-2))/Number(i.height.slice(0,-2))*100+"%"}}setPause(t){this.#d=t}start(){this.#o.addEventListener("mousedown",this.#n)}stop(){this.#o.removeEventListener("mousedown",this.#n),this.#e()}}const ie={style:{"font-size":"18px"}},ue={key:0,class:"ls-flex ls-flex-end",style:{padding:"0 1em 1em 1em"}},R=D({__name:"LsDialogPanel",props:{titleText:{},width:{},fullScreen:{type:Boolean},showFullScreen:{type:Boolean},closeConfirm:{type:Boolean},closeTip:{},closeDialog:{type:Function},draggable:{type:Boolean},fitHeight:{type:Boolean},height:{},boxCenter:{type:Boolean},left:{},top:{},right:{},bottom:{},showFooter:{type:Boolean}},emits:["confirm","sizeChange"],setup(v,{expose:t,emit:i}){const a=v,e=i,f=C(a.draggable);let o=a.fullScreen,p,m="",w="",x="",V="";const b=H(),F=H();G(()=>{const s=b.value;a.boxCenter?(s.style.left="50%",s.style.top="50%"):(s.style.left=a.left,s.style.top=a.top,s.style.bottom=a.bottom,s.style.right=a.right),o?(s.style.width="100%",s.style.height="100%"):(s.style.width=a.width,s.style.height=a.height),a.draggable&&(p=new se(s,F.value,a.boxCenter),p.start(),o&&(f.value=!1,p.setPause(!0)))}),J(()=>{p?.stop()});function l(){if(a.showFullScreen){if(o=!o,o){if(a.draggable){f.value=!1,p?.setPause(!0);const s=b.value,d=getComputedStyle(s),T=getComputedStyle(s.offsetParent);x=Number(d.height.slice(0,-2))/Number(T.height.slice(0,-2))*100+"%",V=Number(d.width.slice(0,-2))/Number(T.width.slice(0,-2))*100+"%",m=s.style.left,w=s.style.top,s.style.height=x,s.style.width=V}}else a.draggable&&(f.value=!0,p?.setPause(!1));B()}}function B(){const s=b.value.style,d=ne(()=>{b.value.style.transitionProperty="",b.value.style.transitionDuration=""},300);s.transitionProperty="left, top, width, height",s.transitionDuration="300ms",o?(s.width="100%",s.height="100%",s.left=a.boxCenter?"50%":"0",s.top=a.boxCenter?"50%":"0"):(s.width=V,s.height=x,s.left=m,s.top=w),d(),e("sizeChange")}function $(){if(p){const s=b.value;p.setPercentStyle(s),s.style.bottom="unset",s.style.right="unset"}}function W(){e("confirm")}function j(){b.value.focus()}function I(){b.value.blur()}return t({initSize:$,focus:j,blur:I}),(s,d)=>{const T=y("el-icon"),O=y("el-button");return g(),h("div",{class:N(["lsDialogPanel ls-panel ls-flexV ls-flex-unShrink",{center:s.boxCenter}]),tabindex:"0",onKeyup:d[4]||(d[4]=Q(E(X=>s.closeDialog("byKey"),["self"]),["esc"])),ref_key:"elRef",ref:b},[n("div",{class:N(["lsDialogTitle ls-flex ls-flex-between ls-flex-centerV",{lsDraggable:f.value}]),ref_key:"triggerDom",ref:F,onDblclick:l},[n("div",{onMousemove:d[0]||(d[0]=E(()=>{},["stop"])),onMousedown:d[1]||(d[1]=E(()=>{},["stop"])),style:{cursor:"auto"}},K(s.titleText),33),n("div",ie,[s.showFullScreen?(g(),P(T,{key:0,class:"ls-text-hover",style:{margin:"0 0.2em"},onClick:l},{default:r(()=>[u(A(Z))]),_:1})):Y("",!0),u(T,{class:"ls-text-hover",onClick:d[2]||(d[2]=X=>s.closeDialog("byButton"))},{default:r(()=>[u(A(_))]),_:1})])],34),n("div",{class:N(["lsDialogBody",{fit100:s.fitHeight}])},[L(s.$slots,"default")],2),s.showFooter?(g(),h("div",ue,[L(s.$slots,"footer",{},()=>[u(O,{onClick:d[3]||(d[3]=X=>s.closeDialog("byButton"))},{default:r(()=>d[5]||(d[5]=[c("取 消")])),_:1}),u(O,{type:"primary",style:{"margin-left":"1em"},onClick:W},{default:r(()=>d[6]||(d[6]=[c("确 认")])),_:1})])])):Y("",!0)],34)}}}),S=D({__name:"LsDialog",props:{modelValue:{type:Boolean,default:!1},titleText:{default:""},width:{default:"50%"},fullScreen:{type:Boolean,default:!1},showFullScreen:{type:Boolean,default:!1},closeConfirm:{type:Boolean,default:!1},closeTip:{default:"弹窗即将关闭，确认吗？"},modal:{type:Boolean,default:!0},draggable:{type:Boolean,default:!0},appendToBody:{type:Boolean,default:!1},fitHeight:{type:Boolean,default:!1},height:{default:"unset"},closeOnClickModal:{type:Boolean,default:!0},boxCenter:{type:Boolean,default:!0},left:{default:"unset"},top:{default:"unset"},right:{default:"unset"},bottom:{default:"unset"},showFooter:{type:Boolean,default:!0}},emits:["update:modelValue","dialogClose","confirm","sizeChange"],setup(v,{emit:t}){const i=v,a=t,e=ee(()=>i.boxCenter?"lsDialogCenter":"lsDialogCenterFix");let f=!1,o=!0,p=!1;const m=H();te(()=>i.modelValue,l=>{l&&(p=!1,q(()=>m.value?.focus())),l&&o&&(q(()=>m.value?.initSize()),o=!1)});async function w(l){if(l instanceof PointerEvent&&(l="byButton"),!p){if(i.closeConfirm)try{m.value?.blur(),await oe.confirm(i.closeTip)}catch{return}a("update:modelValue",!1),a("dialogClose",l)}}function x(l){i.closeOnClickModal&&(l?f=!0:!l&&f&&(f=!1,w("byModal")))}function V(){a("confirm")}function b(){a("sizeChange")}function F(){p=!0}return(l,B)=>(g(),P(le,{to:"body",disabled:!l.appendToBody},[l.modal?(g(),P(M,{key:0,name:"lsDialogFade",onBeforeLeave:F},{default:r(()=>[z(n("div",{class:"lsDialogMask",onMousedown:B[0]||(B[0]=E($=>x(!0),["left","self"])),onMouseup:B[1]||(B[1]=E($=>x(!1),["left","self"]))},[u(M,{name:e.value},{default:r(()=>[z(u(R,{titleText:l.titleText,width:l.width,"full-screen":l.fullScreen,height:l.height,"show-full-screen":!l.fullScreen&&l.showFullScreen,"fit-height":l.fitHeight,"close-confirm":l.closeConfirm,"close-tip":l.closeTip,"close-dialog":w,"box-center":l.boxCenter,left:l.left,top:l.top,bottom:l.bottom,right:l.right,draggable:l.draggable,onConfirm:V,ref_key:"lsDialogPanel",ref:m,onSizeChange:b,"show-footer":l.showFooter},{default:r(()=>[L(l.$slots,"default")]),footer:r(()=>[L(l.$slots,"footer",{closeDialog:w})]),_:3},8,["titleText","width","full-screen","height","show-full-screen","fit-height","close-confirm","close-tip","box-center","left","top","bottom","right","draggable","show-footer"]),[[U,l.modelValue]])]),_:3},8,["name"])],544),[[U,l.modelValue]])]),_:3})):(g(),P(M,{key:1,name:e.value},{default:r(()=>[z(u(R,{titleText:l.titleText,width:l.width,"full-screen":l.fullScreen,"show-full-screen":!l.fullScreen&&l.showFullScreen,"close-confirm":l.closeConfirm,height:l.height,"close-tip":l.closeTip,"fit-height":l.fitHeight,onSizeChange:b,"box-center":l.boxCenter,left:l.left,top:l.top,bottom:l.bottom,right:l.right,"close-dialog":w,draggable:l.draggable,onConfirm:V,ref_key:"lsDialogPanel",ref:m,"show-footer":l.showFooter},{default:r(()=>[L(l.$slots,"default")]),footer:r(()=>[L(l.$slots,"footer",{closeDialog:w})]),_:3},8,["titleText","width","full-screen","show-full-screen","close-confirm","height","close-tip","fit-height","box-center","left","top","bottom","right","draggable","show-footer"]),[[U,l.modelValue]])]),_:3},8,["name"]))],8,["disabled"]))}}),re=D({__name:"BaseExp",setup(v){const t=C(!1),i=C(!1);function a(){t.value=!0}function e(){i.value=!0}return(f,o)=>{const p=y("el-button");return g(),h("div",null,[o[2]||(o[2]=n("h2",null,"基础用法",-1)),o[3]||(o[3]=n("div",null,"通过v-model绑定一个boolean类型的变量，控制弹窗的显隐",-1)),o[4]||(o[4]=n("div",null,"通过titleText属性设置弹窗标题",-1)),o[5]||(o[5]=n("div",null,"按ESC键，点击遮罩层，点击关闭按钮，点击取消均可关闭弹窗",-1)),o[6]||(o[6]=n("div",null,"通过confirm事件以分辨是否点击了确定按钮",-1)),u(k,null,{code:r(()=>[n("pre",null,`<el-button @click="openDialog">打开弹窗</el-button>
<div>已点击确定按钮：`+K(i.value?"是":"否")+`</div>
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
<\/script>`,1)]),default:r(()=>[u(p,{onClick:a},{default:r(()=>o[1]||(o[1]=[c("打开弹窗")])),_:1}),n("div",null,"已点击确定按钮："+K(i.value?"是":"否"),1),u(S,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=m=>t.value=m),"title-text":"示例弹窗",onConfirm:e},null,8,["modelValue"])]),_:1})])}}}),ae=D({__name:"FullScreenExp",setup(v){const t=C(!1);function i(){t.value=!0}return(a,e)=>{const f=y("el-button");return g(),h("div",null,[e[3]||(e[3]=n("h2",null,"全屏弹窗",-1)),e[4]||(e[4]=n("div",null,"设置fullScreen属性为true即可",-1)),u(k,null,{code:r(()=>e[2]||(e[2]=[n("pre",null,`<el-button @click="openDialog">打开弹窗</el-button>
<LsDialog v-model="visible" full-screen title-text="示例弹窗"></LsDialog>

<script setup lang="ts">
import {ref} from "vue";

const visible = ref(false);

function openDialog() {
  visible.value = true;
}
<\/script>`,-1)])),default:r(()=>[u(f,{onClick:i},{default:r(()=>e[1]||(e[1]=[c("打开弹窗")])),_:1}),u(S,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o),"full-screen":"","title-text":"示例弹窗"},null,8,["modelValue"])]),_:1})])}}}),fe=D({__name:"WidthHighExp",setup(v){const t=C(!1);function i(){t.value=!0}return(a,e)=>{const f=y("el-button");return g(),h("div",null,[e[3]||(e[3]=n("h2",null,"指定宽高，显示全屏按钮",-1)),e[4]||(e[4]=n("div",null,"指定弹窗的宽高（未指定的情况下，宽度默认为50%，高度默认由内容撑开），设定width和height属性即可。",-1)),e[5]||(e[5]=n("div",null,"如果需要全屏按钮，添加showFullScreen（仅用于非全屏弹窗，按钮显示的情况下可双击标题栏切换全屏）",-1)),u(k,null,{code:r(()=>e[2]||(e[2]=[n("pre",null,`<el-button @click="openDialog">打开弹窗</el-button>
<LsDialog v-model="visible" width="800px" height="600px" show-full-screen title-text="示例弹窗"></LsDialog>

<script setup lang="ts">
import {ref} from "vue";

const visible = ref(false);

function openDialog() {
  visible.value = true;
}
<\/script>`,-1)])),default:r(()=>[u(f,{onClick:i},{default:r(()=>e[1]||(e[1]=[c("打开弹窗")])),_:1}),u(S,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o),width:"800px",height:"600px","show-full-screen":"","title-text":"示例弹窗"},null,8,["modelValue"])]),_:1})])}}}),pe=D({__name:"CloseExp",setup(v){const t=C(!1);function i(){t.value=!0}return(a,e)=>{const f=y("el-button");return g(),h("div",null,[e[3]||(e[3]=n("h2",null,"关闭弹窗时确认，取消点击遮罩层关闭",-1)),e[4]||(e[4]=n("div",null,'设置closeConfirm属性为true即可，另外可以通过closeTip设定关闭弹窗确认框的提示内容，默认为"弹窗即将关闭，确认吗？"。',-1)),e[5]||(e[5]=n("div",null,"通过closeOnClickModals属性，控制是否可以通过点击遮罩层关闭弹窗",-1)),u(k,null,{code:r(()=>e[2]||(e[2]=[n("pre",null,`<el-button @click="openDialog">打开弹窗</el-button>
<LsDialog v-model="visible" close-confirm close-tip="确定保存吗？" :close-on-click-modal="false" title-text="示例弹窗"></LsDialog>

<script setup lang="ts">
import {ref} from "vue";

const visible = ref(false);

function openDialog() {
  visible.value = true;
}
<\/script>`,-1)])),default:r(()=>[u(f,{onClick:i},{default:r(()=>e[1]||(e[1]=[c("打开弹窗")])),_:1}),u(S,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o),"close-confirm":"","close-tip":"确定保存吗？","close-on-click-modal":!1,"title-text":"示例弹窗"},null,8,["modelValue"])]),_:1})])}}}),de=D({__name:"ModalExp",setup(v){const t=C(!1);function i(){t.value=!0}return(a,e)=>{const f=y("el-button");return g(),h("div",null,[e[3]||(e[3]=n("h2",null,"取消遮罩层，取消拖动",-1)),e[4]||(e[4]=n("div",null,"通过设置modal属性，显示遮罩层，设置draggable属性，拖动弹窗",-1)),u(k,null,{code:r(()=>e[2]||(e[2]=[n("pre",null,`<el-button @click="openDialog">打开弹窗</el-button>
<LsDialog v-model="visible" :modal="false" :draggable="false" title-text="示例弹窗"></LsDialog>

<script setup lang="ts">
import {ref} from "vue";

const visible = ref(false);

function openDialog() {
  visible.value = true;
}
<\/script>`,-1)])),default:r(()=>[u(f,{onClick:i},{default:r(()=>e[1]||(e[1]=[c("打开弹窗")])),_:1}),u(S,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o),modal:!1,draggable:!1,"title-text":"示例弹窗"},null,8,["modelValue"])]),_:1})])}}}),me=D({__name:"BodyExp",setup(v){const t=C(!1);function i(){t.value=!0}return(a,e)=>{const f=y("el-button");return g(),h("div",null,[e[4]||(e[4]=n("h2",null,"提升弹窗层级，弹窗内容使用百分比布局",-1)),e[5]||(e[5]=n("div",null,"通过appendToBody属性，可以将弹窗的参照提升至body，以解决参照元素尺寸不够或层级不够的情况。",-1)),e[6]||(e[6]=n("div",null,"如果指定了高度，内容希望使用百分比高度，那么需要指定fitHeight属性",-1)),u(k,null,{code:r(()=>e[3]||(e[3]=[n("pre",null,`<el-button @click="openDialog">打开弹窗</el-button>
<LsDialog v-model="visible" append-to-body height="300px" fit-height title-text="示例弹窗">
  <div class="height100" style="background-color: aquamarine"></div>
</LsDialog>

<script setup lang="ts">
import {ref} from "vue";

const visible = ref(false);

function openDialog() {
  visible.value = true;
}
<\/script>`,-1)])),default:r(()=>[u(f,{onClick:i},{default:r(()=>e[1]||(e[1]=[c("打开弹窗")])),_:1}),u(S,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o),"append-to-body":"",height:"300px","fit-height":"","title-text":"示例弹窗"},{default:r(()=>e[2]||(e[2]=[n("div",{class:"height100",style:{"background-color":"aquamarine"}},null,-1)])),_:1},8,["modelValue"])]),_:1})])}}}),ge=D({__name:"PositionExp",setup(v){const t=C(!1);function i(){t.value=!0}return(a,e)=>{const f=y("el-button");return g(),h("div",null,[e[3]||(e[3]=n("h2",null,"自定义弹窗位置",-1)),e[4]||(e[4]=n("div",null,"弹窗通常是在屏幕（参照物）中心弹出，如果希望自定义弹出位置，可以设置boxCenter属性为false，并指定left，top，right，bottom这些属性",-1)),e[5]||(e[5]=n("div",null,"示例弹窗将从屏幕右下方弹出",-1)),u(k,null,{code:r(()=>e[2]||(e[2]=[n("pre",null,`<el-button @click="openDialog">打开弹窗</el-button>
<LsDialog v-model="visible" :box-center="false" right="0.5em" bottom="0.5em" title-text="示例弹窗"></LsDialog>

<script setup lang="ts">
import {ref} from "vue";

const visible = ref(false);

function openDialog() {
  visible.value = true;
}
<\/script>`,-1)])),default:r(()=>[u(f,{onClick:i},{default:r(()=>e[1]||(e[1]=[c("打开弹窗")])),_:1}),u(S,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o),"box-center":!1,right:"0.5em",bottom:"0.5em","title-text":"示例弹窗"},null,8,["modelValue"])]),_:1})])}}}),ve=D({__name:"FooterExp",setup(v){const t=C(!1);function i(){t.value=!0}return(a,e)=>{const f=y("el-button");return g(),h("div",null,[e[4]||(e[4]=n("h2",null,"自定义弹窗脚部",-1)),e[5]||(e[5]=n("div",null,"设置showFooter属性可以决定是否显示脚部",-1)),e[6]||(e[6]=n("div",null,"通过footer插槽，可以自定义脚部",-1)),u(k,null,{code:r(()=>e[3]||(e[3]=[n("pre",null,`<el-button @click="openDialog">打开弹窗</el-button>
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
<\/script>`,-1)])),default:r(()=>[u(f,{onClick:i},{default:r(()=>e[1]||(e[1]=[c("打开弹窗")])),_:1}),u(S,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=o=>t.value=o),"title-text":"示例弹窗"},{footer:r(({closeDialog:o})=>[u(f,{onClick:o},{default:r(()=>e[2]||(e[2]=[c("关闭")])),_:2},1032,["onClick"])]),_:1},8,["modelValue"])]),_:1})])}}}),be={class:"height100",style:{padding:"0.5em","box-sizing":"border-box"}},De=D({__name:"LsDialogTest",setup(v){return(t,i)=>{const a=y("el-scrollbar");return g(),h("div",be,[u(a,null,{default:r(()=>[i[0]||(i[0]=n("h1",null,"LsDialog是一个弹窗组件",-1)),i[1]||(i[1]=n("h3",null,"弹窗采用absolute定位而没有使用fixed定位，这与我构建项目的习惯有关，我习惯于body及app元素高度100%，即body是不允许滚动的，滚动在app内的元素实现。",-1)),i[2]||(i[2]=n("h3",null,"风格与element-plus高度相似，功能点包含弹窗可拖动，可全屏，动画过渡，适配element-plus明亮黑暗模式。依赖包含element-plus",-1)),i[3]||(i[3]=n("h3",null,"使用方法（建议项目里面全局注册组件）",-1)),i[4]||(i[4]=n("pre",null,`import {LsDialog} from "ls-vue3-pro";
import {createApp} from "vue";
import ElementPlus from 'element-plus';
import App from "./App.vue";
import 'ls-vue3-pro/dist/style.css';
...

const app = createApp(App).use(ElementPlus).use(xxx);
app.component('LsDialog', LsDialog);
app.mount('#app');`,-1)),i[5]||(i[5]=n("h3",null,"具体属性、插槽和事件，参照库代码中的文件LsDialog.d.ts或web-types.json",-1)),u(re),u(ae),u(fe),u(pe),u(de),u(me),u(ge),u(ve)]),_:1})])}}});export{De as default};
