<template>
  <span>{{ showNumber }}</span>
</template>

<script setup lang="ts">
import {computed, ref, watch} from "vue";

const props = withDefaults(defineProps<{
  number: number,
  fractionDigits?: number,
  duration?: number,
  trimRightZero?: boolean
}>(), {
  fractionDigits: 0,
  duration: 300,
  trimRightZero: true
})

const animateNumber = ref(props.number);
const showNumber = computed(() => {
  let result = animateNumber.value.toFixed(props.fractionDigits);
  if (props.trimRightZero && props.fractionDigits)
    result = result.replace(/\.0+/, '');
  return result;
});
// 动画执行回调
let ramCallBack: number | null = null;

watch(() => props.number, value => changeAnimateNumber(value));

function changeAnimateNumber(target: number) {
  const startTime = performance.now();
  const startNumber = animateNumber.value;
  const durationNumber = target - startNumber;
  // 取消上次动画
  ramCallBack && cancelAnimationFrame(ramCallBack);

  function changeNumber(time: DOMHighResTimeStamp) {
    const timeSpan = time - startTime;
    // 由于精度问题，timeSpan可能时负数
    if (timeSpan > 0) {
      if (timeSpan < props.duration) {
        animateNumber.value = startNumber + durationNumber * (timeSpan / props.duration);
      } else {
        animateNumber.value = target;
        ramCallBack = null;
        return;
      }
    }
    ramCallBack = requestAnimationFrame(changeNumber);
  }

  ramCallBack = requestAnimationFrame(changeNumber)
}
</script>

<style scoped>

</style>
