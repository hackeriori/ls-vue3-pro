export interface PropType {
  // 列表数据
  listData: any[],
  // 每预估高度的最小值
  itemHeight: number,
  // 每项的键名，用于v-for中当key使用
  itemKey: string,
}

/**
 * 不定高虚拟列表组件，用于高效渲染大量数据。
 * 通过计算可视区域内的数据，减少 DOM 节点的渲染数量，提升性能。
 *
 * @example
 * ```vue
 * // props
 * // listData 列表数据数组，支持任意类型的数据。
 * // itemHeight 每预估高度的最小值（单位：px），注意一定要评估出一个最小值，以避免空白出现
 * // itemKey 列表项的唯一键名，用于 `v-for` 循环中的 `key` 属性。
 *
 * <template>
 *   <DynamicHeightVirtualList
 *     :listData="dataList"
 *     :itemHeight="50"
 *     itemKey="id"
 *   >
 *     <template #default="{ item }">
 *       <div>{{ item.name }}</div>
 *     </template>
 *   </DynamicHeightVirtualList>
 * </template>
 *
 * <script setup>
 * import { ref } from 'vue';
 * import DynamicHeightVirtualList from 'ls-vue3-pro';
 *
 * const dataList = ref([
 *   { id: 1, name: 'Item 1' },
 *   { id: 2, name: 'Item 2' },
 *   // 更多数据...
 * ]);
 * </script>
 * ```
 */
export declare const DynamicHeightVirtualList: import("vue").DefineComponent<{
  listData: {
    type: __PropType<object>;
    required: true;
  },
  itemHeight: {
    type: __PropType<number>;
    required: true;
  },
  itemKey: {
    type: __PropType<string>;
    required: true;
  }
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, null, null, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
  listData: {
    type: __PropType<object>;
    required: true;
  },
  itemHeight: {
    type: __PropType<number>;
    required: true;
  },
  itemKey: {
    type: __PropType<string>;
    required: true;
  }
}>> & {}, PropType>;
export default VirtualList;