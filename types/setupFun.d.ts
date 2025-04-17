import {ShallowRef, Ref, UnwrapRef} from "vue";

export interface RadioButtonType {
  name: string,
  selected: boolean,
}

/**
 * 循环调用单一方法
 * @param event 耗时方法
 * @param interval 调用时间间隔(ms)
 */
export declare function setupLoopFunction(event: () => Promise<unknown>, interval?: number): void

/**
 * 循环调用多个方法
 * @param events 方法集合
 * @param interval 调用时间间隔(ms)
 */
export declare function setupLoopFunctions(events: (() => Promise<unknown>)[], interval?: number): void

/**
 * 设置默认的调用时间间隔
 * @param interval 调用时间间隔(ms)
 */
export declare function setDefaultInterval(interval: number): void

/**
 * 按比例缩放页面
 * @param width 宽度，默认1920
 * @param height 高度，默认1080
 * @param keepRatio 是否保持宽高比，默认false
 * @return {ShallowRef<HTMLDivElement | undefined>} 返回一个ref，绑定到需要缩放的dom
 */
export declare function setupPageResize(width = 1920, height = 1080, keepRatio = false): {elRef: ShallowRef<HTMLDivElement | undefined>}

/**
 * 单选按钮逻辑
 * @param initButtons 初始化按钮组，只有最多一项的selected为true
 * @param buttonUpAble 按钮是否可以弹起，默认无法弹起
 */
export declare function setupRadioButton<T extends RadioButtonType>(initButtons: T[], buttonUpAble = false): {
  selectedButton: Ref<T | null>,
  buttons: Ref<T[]>,
  selectButton: (item: UnwrapRef<T>) => void,
}
