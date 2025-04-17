export default class DraggableDom {
  readonly #triggerDom: HTMLElement
  readonly #mouseDown: (ev: MouseEvent) => void
  readonly #mouseMove: (ev: MouseEvent) => void
  readonly #mouseUp: () => void
  #clickX = 0
  #clickY = 0
  //点下去的原点
  #originalX = 0
  #originalY = 0
  #minX = 0
  #maxX = 0
  #minY = 0
  #maxY = 0
  #pauseFlag = false

  constructor(dom: HTMLElement, triggerDom: HTMLElement, boxCenter: boolean) {
    this.#triggerDom = triggerDom;
    this.#mouseDown = (ev) => {
      if (this.#pauseFlag)
        return;
      //点击放大和关闭按钮取消拖拽
      if ((ev.target as HTMLElement).tagName === 'I')
        return;
      //记录点击起点
      this.#clickX = ev.screenX;
      this.#clickY = ev.screenY;
      //记录当前元素信息
      const style = getComputedStyle(dom);
      this.setPercentStyle(dom);
      this.#originalX = Number(style.left.slice(0, -2));
      this.#originalY = Number(style.top.slice(0, -2));
      const width = Number(style.width.slice(0, -2));
      const height = Number(style.height.slice(0, -2));
      this.#minX = boxCenter ? Math.floor(width / 2) : 0;
      this.#minY = boxCenter ? Math.floor(height / 2) : 0;
      //记录父元素信息
      const parentStyle = getComputedStyle(dom.offsetParent!);
      const parentWidth = Number(parentStyle.width.slice(0, -2));
      const parentHeight = Number(parentStyle.height.slice(0, -2));
      this.#maxX = parentWidth - width + this.#minX - 1;
      this.#maxY = parentHeight - height + this.#minY - 1;
      document.addEventListener('mousemove', this.#mouseMove);
      document.addEventListener('mouseup', this.#mouseUp)
    }
    this.#mouseMove = (ev) => {
      const offsetX = ev.screenX - this.#clickX;
      const nextX = this.#originalX + offsetX;
      if (nextX < this.#minX)
        dom.style.left = this.#minX + 'px';
      else if (nextX > this.#maxX) {
        dom.style.left = this.#maxX + 'px';
      } else {
        dom.style.left = nextX + 'px';
      }
      const offsetY = ev.screenY - this.#clickY;
      const nextY = this.#originalY + offsetY;
      if (nextY < this.#minY)
        dom.style.top = this.#minY + 'px';
      else if (nextY > this.#maxY)
        dom.style.top = this.#maxY + 'px';
      else
        dom.style.top = nextY + 'px';
    }
    this.#mouseUp = () => {
      this.setPercentStyle(dom);
      document.removeEventListener('mousemove', this.#mouseMove);
      document.removeEventListener('mouseup', this.#mouseUp);
    }
  }

  //按百分比形式设置左和顶
  setPercentStyle(dom: HTMLElement) {
    //还原百分比形式
    if (dom.offsetParent) {
      const parentStyle = getComputedStyle(dom.offsetParent);
      const style = getComputedStyle(dom);
      dom.style.left = Number(style.left.slice(0, -2)) / Number(parentStyle.width.slice(0, -2)) * 100 + '%';
      dom.style.top = Number(style.top.slice(0, -2)) / Number(parentStyle.height.slice(0, -2)) * 100 + '%';
    }
  }

  setPause(value: boolean) {
    this.#pauseFlag = value;
  }

  start() {
    this.#triggerDom.addEventListener('mousedown', this.#mouseDown);
  }

  stop() {
    this.#triggerDom.removeEventListener('mousedown', this.#mouseDown);
    this.#mouseUp();
  }
}
