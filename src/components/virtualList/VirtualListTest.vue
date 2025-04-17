<script setup lang="ts">
import VirtualList from './VirtualList.vue';
import {ref} from 'vue';
import ExampleBox from '../exampleBox/ExampleBox.vue';

const list = ref(Array.from({length: 300}).map((x, i) => ({id: i})));
</script>

<template>
  <div class="height100" style="padding: 0.5em;box-sizing: border-box">
    <h1>VirtualList是一个定高虚拟列表的组件</h1>
    <h3>从目前接触的设计来看，列表项基本上都是定高的，后续有不定高需求再封装</h3>
    <h3>列表需要列表数据listData和每项数据的高度itemHeight,插槽item为传入的数据项</h3>
    <ExampleBox>
      <div style="height: 300px">
        <VirtualList :list-data="list" :item-height="30">
          <template #default="{ item }">
            {{ 'id' in item ? item.id : '' }}
          </template>
        </VirtualList>
      </div>
      <template #code>
        <pre>&lt;div style="height: 300px"&gt;
  &lt;VirtualList :list-data="list" :item-height="30"&gt;
    &lt;template #default="{ item }"&gt;
      &#123;&#123; item['id'] &#125;&#125;
    &lt;/template&gt;
  &lt;/VirtualList&gt;
&lt;/div&gt;
import VirtualList from './VirtualList.vue';
import {ref} from 'vue';

const list = ref(Array.from({length: 300}).map((x, i) =&gt; ({id: i})));</pre>
      </template>
    </ExampleBox>
  </div>
</template>

<style scoped>

</style>
