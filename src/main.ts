import {createApp} from 'vue';
import 'ls-base-lib/dist/css/ls.css';
import './global.css'
import App from './App.vue';
import router from "./router";

createApp(App).use(router).mount('#app');
