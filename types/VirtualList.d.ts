import type {PropType as __PropType} from 'vue';

export interface PropType {
  // 列表数据
  listData: object[],
  // 每项高度
  itemHeight: number
}

export declare const VirtualList: import("vue").DefineComponent<{
  listData: {
    type: __PropType<object>;
    required: true;
  },
  itemHeight: {
    type: __PropType<number>;
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
  }
}>> & {}, PropType>;
export default VirtualList;
