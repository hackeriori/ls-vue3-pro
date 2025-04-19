<script setup lang="ts">
import {defineAsyncComponent, ref} from 'vue';
import {importMap} from '../../utils/importMap';

const loadingExample = ref(true);
const VuePlayground = defineAsyncComponent(async () => {
    const x = await import('../../components/vuePlayground/VuePlayground.vue');
    loadingExample.value = false;
    return x.default
  }
)

const exampleCode = `\<script setup\>
import {vFocus} from 'ls-vue3-pro'
\</script\>

\<template\>
  \<input v-focus type="text" placeholder="自动聚焦的输入框"/\>
\</template\>`;
</script>

<template>
  <div class="ls-marginV-1">v-focus指令，用于元素自动聚焦的自定义指令。</div>
  <div class="ls-marginV-1">该指令会在元素挂载时自动调用 `focus()` 方法，使元素获得焦点。</div>
  <div v-loading="loadingExample">
    <VuePlayground :code="exampleCode" :import-map="importMap" style="height: 147px"></VuePlayground>
  </div>
</template>

<style scoped>

</style>