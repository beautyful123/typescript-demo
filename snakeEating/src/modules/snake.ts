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
    this.head.style.top = "0px";
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
    if(value === this.x) {
      return;
    }
    // 水平方向禁止掉头
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
      if(this.x > value) {
        value = this.x +10
      } else {
        value = this.x - 10
      }
    }
    if(value>290 || value<0) {
      throw new Error("蛇撞墙了！")
    }
    // 其余子元素改变位置
    this.dance();
    this.head.style.left = value + 'px';
    // 判断有没有咬尾巴
    this.checkHeadBody()
  }
  set y(value:number) {
    /**
     * 如果修改的Y值等于原先的Y值，则不操作
     */
    if(value === this.y) {
      return;
    }
    // 垂直方向禁止掉头
    if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) { //掉头了
      if(this.y > value) { //掉头且新值小于旧值
        value = this.y + 10
      } else {
        value = this.y - 10
      }
    }
    if(value>290 || value<0) {
      throw new Error("蛇撞墙了！")
    }
    // 蛇儿扭起来
    this.dance();
    this.head.style.top = value + "px";
    // 判断有没有咬尾巴
    this.checkHeadBody()
  }
  /**
   * 蛇增加一格身体
   */
  addBodies() {
    this.element.insertAdjacentElement("beforeend", document.createElement("div"));
  }
  /**
   * 身体每一节定位
   */
  dance() {
    for(var i=this.bodies.length-1;i>0;i--) {
      let s = Number(i);
      let n = this.bodies[s] as HTMLElement
      let m = this.bodies[s-1] as HTMLElement
      if(s > 0) {
        n.style.left = m.offsetLeft + 'px';
        n.style.top = m.offsetTop + 'px';
      }
    }
  }
  /**
   * 咬尾巴
  */
 checkHeadBody() {
   for(var i =1;i<this.bodies.length;i++) {
     let bd = this.bodies[i] as HTMLElement;
     if(bd.offsetLeft === this.x && bd.offsetTop === this.y) {
      //  咬尾巴了
      throw new Error("咬尾巴了！")
     }
   }
 }
}


export default Snake;