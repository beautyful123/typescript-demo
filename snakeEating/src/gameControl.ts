import snake from "./modules/snake";
import food from "./modules/food";
import scorePanel from "./modules/scorePanel";

class GameControl{
  snake: snake;
  food: food;
  scorePanel: scorePanel;
  // 方向
  direction: string = "0"
  // 蛇是否存活
  islive: boolean = true
  constructor(a:number,b:number) {
    this.snake = new snake();
    this.food = new food();
    this.scorePanel = new scorePanel(a,b);
    // 初始化
    this.init()
  }
  // 初始化
  init() {
    document.addEventListener("keydown", (e) => this.keyDownHandler(e))
    // 蛇跑
    this.run()
  }
  // 点击事件
  keyDownHandler(e:KeyboardEvent) {
    this.direction = e.key;
  }
  /**
   * 蛇移动
   */
   run() {
    /**
     * 拿到蛇的坐标
     */
    let x = this.snake.x;
    let y = this.snake.y;
    switch(this.direction) {
      case "Up":
      case "ArrowUp":
        y -= 10;
      break;
      case "Down":
      case "ArrowDown":
        y += 10;
      break;
      case "Left":
      case "ArrowLeft":
        x -= 10;
      break;
      case "Right":
      case "ArrowRight":
        x += 10
      break;
    }
    try {
      this.snake.x = x;
      this.snake.y = y;
      // 判断是否吃到
      this.checkEat(x,y)
    } catch(err) {
      alert(err.message + 'GAME OVER!')
      // 状态设置为死亡
      this.islive = false;
    }
    // 回调
    this.islive && setTimeout(this.run.bind(this), 300-(this.scorePanel.level-1)*30)
  }
  /**
   * 检查吃食物
   */
  checkEat(x:number,y:number) {
    if( this.food.x === x && this.food.y === y) {
      /**
       * 加分
       */
      this.scorePanel.addScore();
      /**
       * 改变位置
       */
      this.food.change();
      /**
       * 身体增加一节
       */
      this.snake.addBodies();
    }
  }
}

export default GameControl;