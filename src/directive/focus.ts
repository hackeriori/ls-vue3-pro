import type {Directive} from 'vue';
import type {DirectiveBinding} from '@vue/runtime-core';

export const vFocus: Directive = {
  mounted(_el: HTMLElement, binding: DirectiveBinding) {
    let el: HTMLElement | null = null;
    if (binding.modifiers.deep)
      el = getDeepInput(_el);
    if (!el)
      el = _el;
    // 用于肯定会失焦的场景，例如某些对话框内的输入框，会有失焦，此时需要重新聚焦
    if (binding.value) {
      // 重新对焦次数
      let tryTimes = 0;
      const autoFocus = () => {
        el.focus();
        tryTimes++;
        if (tryTimes >= binding.value)
          el.removeEventListener('blur', autoFocus)
      };
      el.addEventListener('blur', autoFocus)
    }
    if (el.checkVisibility())
      el.focus();
    else{
      // 如果元素不可见，则使用IntersectionObserver等待元素可见后对焦，适用于元素是v-show隐藏的场景
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).focus();
            observer.disconnect();
          }
        });
      });
      observer.observe(el);
    }
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