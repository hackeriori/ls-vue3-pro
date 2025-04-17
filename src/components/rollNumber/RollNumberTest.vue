<template>
  <div class="height100" style="padding: 0.5em;box-sizing: border-box">
    <el-scrollbar>
      <h1>RollNumber是一个展示数字及数字间动画过渡的组件</h1>
      <ExampleBox>
        <div class="ls-text-line">
          <span>后台控制的数值</span>
          <el-input-number v-model="value" :step="20"></el-input-number>
        </div>
        <div class="ls-text-line">
          <span>小数位数</span>
          <el-input-number v-model="decimal" :min="0" :max="3"></el-input-number>
        </div>
        <div class="ls-text-line">
          <span>动画时间</span>
          <el-input-number v-model="duration" :min="0" :max="3000"></el-input-number>
        </div>
        <div class="ls-text-line">
          <span>移除小数后多余的0</span>
          <el-switch v-model="trimRightZero"></el-switch>
        </div>
        <div class="ls-text-line">
          <span>页面呈现的数值</span>
          <RollNumber style="color: red" :number="value" :fractionDigits="decimal" :duration="duration"
                      :trim-right-zero="trimRightZero"></RollNumber>
        </div>
        <template #code>
        <pre>&lt;div class="ls-text-line"&gt;
  &lt;span&gt;后台控制的数值&lt;/span&gt;
  &lt;el-input-number v-model="value" :step="20"&gt;&lt;/el-input-number&gt;
&lt;/div&gt;
&lt;div class="ls-text-line"&gt;
  &lt;span&gt;小数位数&lt;/span&gt;
  &lt;el-input-number v-model="decimal" :min="0" :max="3"&gt;&lt;/el-input-number&gt;
&lt;/div&gt;
&lt;div class="ls-text-line"&gt;
  &lt;span&gt;动画时间&lt;/span&gt;
  &lt;el-input-number v-model="duration" :min="0" :max="3000"&gt;&lt;/el-input-number&gt;
&lt;/div&gt;
&lt;div class="ls-text-line"&gt;
  &lt;span&gt;移除小数后多余的0&lt;/span&gt;
  &lt;el-switch v-model="trimRightZero"&gt;&lt;/el-switch&gt;
&lt;/div&gt;
&lt;div class="ls-text-line"&gt;
  &lt;span&gt;页面呈现的数值&lt;/span&gt;
  &lt;RollNumber style="color: red" :number="value" :fractionDigits="decimal" :duration="duration"
              :trim-right-zero="trimRightZero"&gt;&lt;/RollNumber&gt;
&lt;/div&gt;
&lt;script setup lang="ts"&gt;
import ExampleBox from "../exampleBox/ExampleBox.vue";
import {ref} from "vue";
import RollNumber from "./RollNumber.vue";

const value = ref(20);
const decimal = ref(0);
const duration = ref(300);
const trimRightZero = ref(true);</pre>
        </template>
      </ExampleBox>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import ExampleBox from "../exampleBox/ExampleBox.vue";
import {ref} from "vue";
import RollNumber from "./RollNumber.vue";

const value = ref(20);
const decimal = ref(0);
const duration = ref(300);
const trimRightZero = ref(true);
</script>

<style scoped>

</style>
