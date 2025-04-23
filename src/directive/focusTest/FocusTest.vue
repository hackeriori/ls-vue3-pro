<script setup lang="ts">
import {defineAsyncComponent, ref} from 'vue';
import {importCss, importMap} from '../../utils/importMap';

const loadingExample = ref(true);
const VuePlayground = defineAsyncComponent(async () => {
    const x = await import('../../components/vuePlayground/VuePlayground.vue');
    loadingExample.value = false;
    return x.default
  }
)
const showView = ref(1);

function toggleShowView() {
  showView.value = showView.value === 1 ? 2 : 1;
}

const exampleCodeInput = `\<script setup\>
import {vFocus} from 'ls-vue3-pro'
\</script\>

\<template\>
  \<input v-focus type="text" placeholder="自动聚焦的输入框"/\>
\</template\>`;

const exampleCodeElInput = `\<script setup\>
import {vFocus} from 'ls-vue3-pro'
import {ElInput} from 'element-plus'
\</script\>

\<template\>
  \<el-input v-focus.deep style="width: 177px" placeholder="自动聚焦的输入框"/\>
\</template\>`;
</script>

<template>
  <div class="ls-marginV-1">v-focus指令，用于元素自动聚焦的自定义指令。</div>
  <div class="ls-marginV-1">该指令会在元素挂载时自动调用 `focus()` 方法，使元素获得焦点。</div>
  <el-radio-group v-model="showView" class="ls-marginV-1">
    <el-radio :value="1" @click="toggleShowView">使用ElementPlus的输入框</el-radio>
    <el-radio :value="2" @click="toggleShowView">使用Input输入框</el-radio>
  </el-radio-group>

  <div v-loading="loadingExample">
    <VuePlayground v-if="showView === 1" :code="exampleCodeElInput" :import-map="importMap" :css="importCss" style="height: 169px"></VuePlayground>
    <VuePlayground v-else :code="exampleCodeInput" :import-map="importMap" :css="importCss" style="height: 147px"></VuePlayground>
  </div>
</template>

<style scoped>

</style>