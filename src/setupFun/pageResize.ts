import {onMounted, shallowRef, onUnmounted} from "vue";

/**
 * 按比例缩放页面
 * @param width 宽度，默认1920
 * @param height 高度，默认1080
 * @param keepRatio 是否保持宽高比，默认否
 */
export function setupPageResize(width = 1920, height = 1080, keepRatio = false) {
  const elRef = shallowRef<HTMLDivElement>();

  function scalePage() {
    const sw = document.body.clientWidth / width;
    const sh = document.body.clientHeight / height;
    if (elRef.value) {
      if (keepRatio)
        elRef.value.style.transform = `scale(${Math.min(sw, sh)})`;
      else
        elRef.value.style.transform = `scale(${sw},${sh})`;
    }
  }

  window.addEventListener('resize', scalePage)

  onMounted(() => {
    if (elRef.value) {
      elRef.value.style.transformOrigin = 'top left';
    }
    scalePage();
  })

  onUnmounted(() => {
    window.removeEventListener('resize', scalePage)
  })

  return {elRef}
}
