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
  showView.value++;
  if (showView.value > 4)
    showView.value = 1;
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

const exampleCodeRetry = `\<script setup\>
import {vFocus} from 'ls-vue3-pro'
import {ElInput} from 'element-plus'
\</script\>

\<template\>
  \<el-input v-focus.deep="2" style="width: 177px" placeholder="自动聚焦的输入框"/\>
\</template\>`;

const exampleCodeShow = `\<script setup\>
import {ref} from 'vue'
import {vFocus} from 'ls-vue3-pro';
const isShow = ref(false);

function toggleShow(){
  isShow.value = !isShow.value
}
\</script\>

\<template\>
  <div><button @click="toggleShow">切换按钮</button></div>
  \<input v-show="isShow" v-focus style="width: 177px" placeholder="自动聚焦的输入框"/\>
\</template\>`;
</script>

<template>
  <div class="ls-marginV-1">v-focus指令，用于元素自动聚焦的自定义指令。</div>
  <div class="ls-marginV-1">该指令会在元素挂载时自动调用 `focus()` 方法，使元素获得焦点。</div>
  <div class="ls-marginV-1">如果使用了 `.deep` 修饰符，则会递归查找子元素中的 `input` 或 `textarea` 并对其进行聚焦</div>
  <div class="ls-marginV-1">通过传递数值给 `v-focus`，可以控制元素在失去焦点后重新聚焦的次数</div>
  <el-radio-group v-model="showView" class="ls-marginV-1">
    <el-radio :value="1" @click="toggleShowView">ElementPlus的输入框</el-radio>
    <el-radio :value="2" @click="toggleShowView">Input输入框</el-radio>
    <el-radio :value="3" @click="toggleShowView">重新对焦次数</el-radio>
    <el-radio :value="4" @click="toggleShowView">初始不可见元素对焦</el-radio>
  </el-radio-group>

  <div v-loading="loadingExample">
    <VuePlayground v-if="showView === 1" :code="exampleCodeElInput" :import-map="importMap" :css="importCss"
                   style="height: 169px"></VuePlayground>
    <VuePlayground v-else-if="showView === 2" :code="exampleCodeInput" :import-map="importMap" :css="importCss"
                   style="height: 147px"></VuePlayground>
    <VuePlayground v-else-if="showView === 3" :code="exampleCodeRetry" :import-map="importMap" :css="importCss"
                   style="height: 147px"></VuePlayground>
    <VuePlayground v-else :code="exampleCodeShow" :import-map="importMap" :css="importCss"
                   style="height: 169px"></VuePlayground>
  </div>
</template>

<style scoped>

</style>