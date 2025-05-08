export interface PropType {
  // 列表数据
  listData: any[],
  // 每项预估高度的最小值
  itemHeight: number,
  // 每项的键名，用于v-for中当key使用
  itemKey: string,
}