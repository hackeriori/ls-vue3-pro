import type {Directive} from 'vue';

export const vEllipsis: Directive = {
  mounted(el: HTMLElement) {
    // 给当前元素设置超出隐藏，此类名来自于ls-base-lib
    el.classList.add("ls-text-unWarp");
    // 如果超出，添加title
    if (el.scrollWidth > el.offsetWidth) {
      el.title = el.innerText;
    }
  },
  updated(el: HTMLElement) {
    // 如果超出，添加title，否则移除title
    if (el.scrollWidth > el.offsetWidth)
      el.title = el.innerText;
    else
      el.removeAttribute('title');
  }
}