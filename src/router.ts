import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';

export type RouteRecordRawLike = RouteRecordRaw & { meta?: any };

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: '导航页',
    meta: {
      showInList: false
    },
    component: () => import('./ViewSelector.vue')
  },
  {
    path: '/LsDialogTest',
    name: '弹窗组件',
    component: () => import('./components/lsDialog/LsDialogTest.vue'),
  },
  {
    path: '/ExpandableBoxTest',
    name: '可伸缩的盒子组件',
    component: () => import('./components/expandableBox/ExpandableBoxTest.vue'),
  },
  {
    path: '/RollNumberTest',
    name: '滚动的数字组件',
    component: () => import('./components/rollNumber/RollNumberTest.vue'),
  },
  {
    path: '/LoopFunctionTest',
    name: '循环调用',
    component: () => import('./setupFun/loopFunctionTest/LoopFunctionTest.vue'),
  },
  {
    path: '/PageResizeTest',
    name: '页面整体缩放',
    component: () => import('./setupFun/pageResizeTest/PageResizeTest.vue'),
  },
  {
    path: '/PageResizeInner',
    name: '页面整体缩放嵌入体',
    component: () => import('./setupFun/pageResizeTest/PageResizeInner.vue'),
    meta: {
      showInList: false
    },
  },
  {
    path: '/RadioButtonTest',
    name: '单选按钮',
    component: () => import('./setupFun/radioButtonTest/RadioButtonTest.vue'),
  },
  {
    path: '/VirtualListTest',
    name: '虚拟列表',
    component: () => import('./components/virtualList/VirtualListTest.vue'),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory()
});

export default router;
