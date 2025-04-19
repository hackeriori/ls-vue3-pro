<script setup lang="ts">
import {defineAsyncComponent, ref} from 'vue';
import {importMap, importCss} from '../../utils/importMap';

const loadingExample = ref(true);
const VuePlayground = defineAsyncComponent(async () => {
    const x = await import('../../components/vuePlayground/VuePlayground.vue');
    loadingExample.value = false;
    return x.default
  }
)

const exampleCode = `\<script setup\>
import {VirtualList} from 'ls-vue3-pro';
import {ref} from 'vue';

const list = ref(Array.from({length: 300}).map((x, i) => ({id: i, name:'Item - ' + i})));
\</script\>

\<template\>
  \<VirtualList :list-data="list" :item-height="30" item-key="id" class="height100" \>
    \<template #default="{ item }"\>
      {{ item.name }}
    \</template\>
  \</VirtualList\>
\</template\>`;
</script>

<template>
  <div class="ls-marginV-1">定高虚拟列表组件，用于高效渲染大量数据。</div>
  <div class="ls-marginV-1">通过计算可视区域内的数据，减少 DOM 节点的渲染数量，提升性能。</div>
  <div v-loading="loadingExample" style="height: 285px">
    <VuePlayground :code="exampleCode" :import-map="importMap" :css="importCss"></VuePlayground>
  </div>
</template>

<style scoped>

</style>
