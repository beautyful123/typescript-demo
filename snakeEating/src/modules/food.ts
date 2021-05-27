// 食物
class Food{
  element: HTMLElement;

  constructor() {
    this.element = document.getElementById("food")!;
  }
/**
 * 食物的定位位置
 */
  get x():number {
    return this.element.offsetLeft;
  }

  get y():number {
    return this.element.offsetTop;
  }

/**
 * 食物位置变化
 */
  change() {
    this.element.style.top = this.random() + "px";
    this.element.style.left = this.random() + "px";
  }
  /**
   * 随机数，0~300且之包含10倍数
   * @returns number
   */
  random():number {
    return Math.floor(Math.random()*30)*10;
  }
}
export default Food;