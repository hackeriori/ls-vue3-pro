import type { PropType as __PropType } from 'vue';
export declare const LsDialog: import("vue").DefineComponent<{
    modelValue: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    titleText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    width: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    fullScreen: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    showFullScreen: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    closeConfirm: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    closeTip: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    modal: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    draggable: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    appendToBody: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    fitHeight: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    height: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    closeOnClickModal: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    boxCenter: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    left: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    top: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    right: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    bottom: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    showFooter: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: true;
    }
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "dialogClose" | "confirm" | "sizeChange")[], "update:modelValue" | "dialogClose" | "confirm" | "sizeChange", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: __PropType<boolean>;
        required: true;
        default: boolean;
    };
    titleText: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    width: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    fullScreen: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    showFullScreen: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    closeConfirm: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    closeTip: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    modal: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    draggable: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    appendToBody: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    fitHeight: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    height: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    closeOnClickModal: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    boxCenter: {
        type: __PropType<boolean | undefined>;
        required: false;
        default: boolean;
    };
    left: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    top: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    right: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    bottom: {
        type: __PropType<string | undefined>;
        required: false;
        default: string;
    };
    showFooter: {
      type: __PropType<boolean | undefined>;
      required: false;
      default: true;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onDialogClose?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
    onSizeChange?: ((...args: any[]) => any) | undefined;
}, {
    //v-model的值
    modelValue: boolean,
    //弹窗标题
    titleText: string | undefined,
    //弹窗宽度，default: '50%'
    width: string | undefined,
    //是否全屏，default: false
    fullScreen: boolean | undefined,
    //是否显示全屏按钮，全屏模式下该按钮无效（显示的情况下可双击标题栏切换全屏），default: false
    showFullScreen: boolean | undefined,
    //是否显示关闭弹窗确认框，default: false
    closeConfirm: boolean | undefined,
    //关闭弹窗确认框的提示内容，default: '弹窗即将关闭，确认吗？'
    closeTip: string | undefined,
    //是否显示遮罩层，default: true
    modal: boolean | undefined,
    //是否可通过标题栏拖动弹窗，default: true
    draggable: boolean | undefined,
    //是否添加弹窗到body中以提高弹窗层级，default: false
    appendToBody: boolean | undefined,
    //body是否占据剩余高度（占据剩余宽度时，需要指定高度或全屏，如果超长自己加滚动条），默认由内容撑开，default: false
    fitHeight: boolean | undefined,
    //弹窗的高度，如果不指定，则由内容撑开，default: 'unset'
    height: string | undefined,
    //是否可以通过点击遮罩层关闭弹窗，default: true
    closeOnClickModal: boolean | undefined,
    //是否显示在外层相对盒子的中央，default: true
    boxCenter: boolean | undefined,
    //当boxCenter为false时，left的值，default: 'unset'
    left: string | undefined,
    //当boxCenter为false时，top的值，default: 'unset'
    top: string | undefined,
    //当boxCenter为false时，right的值，default: 'unset'
    right: string | undefined,
    //当boxCenter为false时，bottom的值，default: 'unset'
    bottom: string | undefined,
    //是否显示脚部按钮区域
    showFooter: boolean | undefined,
}>;
export default LsDialog;
