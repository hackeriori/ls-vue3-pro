import {ref, UnwrapRef} from "vue";
import {RadioButtonType} from "../../types";

/**
 * 单选按钮逻辑
 * @param initButtons 初始化按钮组，只有最多一项的selected为true
 * @param buttonUpAble 按钮是否可以弹起，默认无法弹起
 */
export function setupRadioButton<T extends RadioButtonType>(initButtons: T[], buttonUpAble = false) {
  //当前选中
  const selectedButton = ref<T | null>(initButtons.find(x => x.selected) || null);
  //所有按钮
  const buttons = ref<T[]>(initButtons);

  //点击由所有按钮渲染出的按钮时的方法
  function selectButton(item: UnwrapRef<T>) {
    if (selectedButton.value) {
      if (selectedButton.value.name === item.name) {
        if (buttonUpAble) {
          //弹起按钮
          selectedButton.value.selected = false;
          selectedButton.value = null;
        } else
          return;
      } else {
        //替换选中按钮
        selectedButton.value.selected = false;
        item.selected = true;
        selectedButton.value = item;
      }
    } else {
      item.selected = true;
      selectedButton.value = item;
    }
  }

  return {selectedButton, buttons, selectButton}
}
