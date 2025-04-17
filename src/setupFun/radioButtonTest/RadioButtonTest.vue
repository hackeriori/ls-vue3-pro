<template>
  <div class="height100" style="padding: 0.5em;box-sizing: border-box">
    <h1>setupRadioButton用于单选按钮逻辑</h1>
    <div>一个按钮对应一个工具或一个页面，例如工具可激活和取消激活，只能选中一个工具的典型场景。</div>
    <pre>/**
 * 单选按钮逻辑
 * @param initButtons 初始化按钮组，只有最多一项的selected为true
 * @param buttonUpAble 按钮是否可以弹起，默认无法弹起
 */
export declare function setupRadioButton&lt;T extends RadioButtonType&gt;(initButtons: T[], buttonUpAble = false): {
  selectedButton: Ref&lt;T | null&gt;,
  buttons: Ref&lt;T[]&gt;,
  selectButton: (item: UnwrapRef&lt;T&gt;) =&gt; void,
}</pre>
    <ExampleBox>
      <el-button v-for="item in buttons" :key="item.name" :type="item.selected?'primary':'' as any"
                 @click="selectButton(item)">
        {{ item.name }}
      </el-button>
      <div>当前激活了 {{ selectedButton ? selectedButton.name : '' }}</div>
      <template #code>
        <pre>&lt;el-button v-for="item in buttons" :key="item.name" :type="item.selected?'primary':'' as any" @click="selectButton(item)"&gt;
  &#123;&#123; item.name &#125;&#125;
&lt;/el-button&gt;
&lt;div&gt;当前激活了 &#123;&#123; selectedButton ? selectedButton.name : '' &#125;&#125;&lt;/div&gt;
&lt;script setup lang="ts"&gt;
  import {setupRadioButton} from "../radioButton";

  const {selectedButton, buttons, selectButton} = setupRadioButton([
    {
      name: '工具1',
      selected: false,
    },
    {
      name: '工具2',
      selected: false,
    }
  ],true);
&lt;/script&gt;</pre>
      </template>
    </ExampleBox>
  </div>
</template>

<script setup lang="ts">
import ExampleBox from "../../components/exampleBox/ExampleBox.vue";
import {setupRadioButton} from "../radioButton";

const {selectedButton, buttons, selectButton} = setupRadioButton([
  {
    name: '工具1',
    selected: false,
  },
  {
    name: '工具2',
    selected: false,
  }
], true);
</script>

<style scoped>

</style>
