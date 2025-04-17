<script setup lang="ts">
import {defineAsyncComponent, ref} from 'vue';

const loadingExample = ref(true);
const VuePlayground = defineAsyncComponent(async () => {
    const x = await import('../../components/vuePlayground/VuePlayground.vue');
    loadingExample.value = false;
    return x.default
  }
)
const importMap = {
  'element-plus': 'https://unpkg.com/element-plus@2.9.7/dist/index.full.min.mjs',
  '@element-plus/icons-vue': 'https://unpkg.com/@element-plus/icons-vue@2.3.1/dist/index.min.js',
  'ls-base-lib': 'https://unpkg.com/ls-base-lib@2.0.4/dist/lsBaseLib.es.js',
  'ls-vue3-pro': 'https://unpkg.com/ls-vue3-pro@1.2.0/dist/lsVue3Pro.es.js'
};
const exampleCode = `\<script setup\>
import {vFocus} from 'ls-vue3-pro'
\</script\>

\<template\>
  <input v-focus />
\</template\>`;
</script>

<template>
  <div class="ls-marginV-1">可以看到输入框自动获取焦点了，因为使用了v-focus指令</div>
  <div v-loading="loadingExample">
    <VuePlayground :code="exampleCode" :import-map="importMap" style="height: 250px"></VuePlayground>
  </div>
</template>

<style scoped>

</style>