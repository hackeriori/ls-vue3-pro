/**
 * 用于元素自动聚焦的自定义指令。
 * 该指令会在元素挂载时自动调用 `focus()` 方法，使元素获得焦点。
 *
 * @example
 * ```vue
 * <input v-focus type="text" placeholder="自动聚焦的输入框" />
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