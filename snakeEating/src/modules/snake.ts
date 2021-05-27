class Snake {
  /**
   * 🐍的元素
   */
  element: HTMLElement;

  head: HTMLElement;
  bodies: HTMLCollection;
  constructor() {
    // this.element = document.getElementById('snake')!;
    this.head = document.querySelector(".snake>div") as HTMLElement
    // this.bodies = document.querySelectorAll(".snake>div") as HTMLElement
    this.element = document.getElementsByClassName('snake')[0] as HTMLElement;
    this.bodies = this.element.getElementsByTagName('div');
  }
  /**
   * 蛇头左上角坐标
   */
  get x():number {
    return this.head.offsetLeft;
  }
  get y():number {
    return this.head.offsetTop;
  }
  /**
   * 蛇头设置坐标
   */
  set x(value:number) {
    this.head.style.left = value + 'px';
  }
  set y(value:number) {
    this.head.style.top = value + "px";
  }
  /**
   * 蛇增加一格身体
   */
  addBodies() {
    this
  }

}


export default Snake;