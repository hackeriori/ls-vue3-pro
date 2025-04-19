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
import {vEllipsis} from 'ls-vue3-pro';
import {ref} from 'vue';

const text = ref('这是一段可能会超出容器宽度的文本内容');
\</script\>

\<template\>
  \<div\>
    \<input style="width: 300px" v-model="text" /\>
  \</div\>
  <div v-ellipsis style="width: 100px;background-color: aquamarine">{{ text }}</div>
\</template\>`;
</script>

<template>
  <div class="ls-marginV-1">v-ellipsis指令，用于实现文本超出时自动隐藏并显示 title 提示。</div>
  <div class="ls-marginV-1">该指令会在元素挂载和更新时检查内容是否超出容器宽度，并动态设置 title 属性。</div>
  <div v-loading="loadingExample" style="height: 265px">
    <VuePlayground :code="exampleCode" :import-map="importMap"></VuePlayground>
  </div>
</template>

<style scoped>

</style>