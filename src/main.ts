import {createApp} from 'vue';
import ElementPlus from 'element-plus'
import zhCN from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'ls-base-lib/dist/css/ls.css';
import './global.css'
import App from './App.vue';
import router from "./router";

createApp(App).use(ElementPlus, {locale: zhCN}).use(router).mount('#app');
