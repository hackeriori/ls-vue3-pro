import type {Directive} from 'vue';
import type {DirectiveBinding} from '@vue/runtime-core';

export const vFocus: Directive = {
  mounted (_el: HTMLElement, binding: DirectiveBinding) {
    let el: HTMLElement | null = null;
    if (binding.modifiers.deep)
      el = getDeepInput(_el);
    if (!el)
      el = _el;
    el.focus()
  }
}

/**
 * 获取深层的input或者textarea，适用于指令用于像el-input这类组件
 */
function getDeepInput(el: HTMLElement) {
  const input = el.querySelector('input');
  if (input) return input;
  return el.querySelector('textarea');
}