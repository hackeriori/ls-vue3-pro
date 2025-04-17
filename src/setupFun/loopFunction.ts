import {onUnmounted} from "vue";

//循环请求默认时间间隔(ms)
let defaultInterval = 10000;

/**
 * 循环调用单一方法
 * @param event 耗时方法
 * @param interval 调用时间间隔(ms)
 */
export function setupLoopFunction(event: () => Promise<unknown>, interval?: number,) {
  /**unbind*/
  let loopKey: NodeJS.Timeout

  async function loopFun() {
    await event();
    loopKey = setTimeout(loopFun, interval || defaultInterval)
  }

  loopFun()

  onUnmounted(() => clearTimeout(loopKey));
}

/**
 * 循环调用多个方法
 * @param events 方法集合
 * @param interval 调用时间间隔(ms)
 */
export function setupLoopFunctions(events: (() => Promise<unknown>)[], interval?: number) {
  events.forEach(x => setupLoopFunction(x, interval));
}

/**
 * 设置默认的调用时间间隔
 * @param interval 调用时间间隔(ms)
 */
export function setDefaultInterval(interval: number){
  defaultInterval = interval;
}
