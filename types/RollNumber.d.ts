import type {PropType as __PropType} from 'vue';

export declare const RollNumber: import("vue").DefineComponent<{
  number: {
    type: __PropType<number>;
    required: true;
  },
  fractionDigits: {
    type: __PropType<number>;
    required: false;
    default: 0;
  },
  duration: {
    type: __PropType<number>;
    required: false;
    default: 300;
  },
  trimRightZero: {
    type: __PropType<boolean>;
    required: false;
    default: true;
  }
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, null, null, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
  number: {
    type: __PropType<number>;
    required: true;
  },
  fractionDigits: {
    type: __PropType<number>;
    required: false;
    default: 0;
  },
  duration: {
    type: __PropType<number>;
    required: false;
    default: 300;
  },
  trimRightZero: {
    type: __PropType<boolean>;
    required: false;
    default: true;
  }
}>> & {}, {
  //绑定的展示数字
  number: boolean,
  //小数位数，默认为0
  fractionDigits?: number
  //动画时间，单位ms，默认300
  duration?: number,
  //去掉小数右侧多余的0，默认true
  trimRightZero?: boolean
}>;
export default RollNumber;
