/**
 * 用于元素自动聚焦的自定义指令。
 * 该指令会在元素挂载时自动调用 `focus()` 方法，使元素获得焦点。
 * 如果使用了 `.deep` 修饰符，则会递归查找子元素中的 `input` 或 `textarea` 并对其进行聚焦。
 * 通过传递数值给 `v-focus`，可以控制元素在失去焦点后重新聚焦的次数。
 *
 * @example
 * ```vue
 * <!-- 直接聚焦 -->
 * <input v-focus type="text" placeholder="自动聚焦的输入框" />
 *
 * <!-- 使用 .deep 修饰符聚焦深层的 input 或 textarea -->
 * <el-input v-focus.deep placeholder="自动聚焦的输入框" />
 *
 * <!-- 控制重新聚焦次数 -->
 * <input v-focus="3" type="text" placeholder="最多重新聚焦3次" />
 * ```
 */
export declare const vFocus: Directive

/**
 * 用于实现文本超出时自动隐藏并显示 title 提示。
 * 该指令会在元素挂载和更新时检查内容是否超出容器宽度，并动态设置 title 属性。
 *
 * @example
 * ```vue
 * <div v-ellipsis>这是一段可能会超出容器宽度的文本内容。</div>
 * ```
 */
export declare const vEllipsis: Directive