// 计分板
class ScorePanel{
  /**
   * 分数初始值
   */
  score:number = 0;
  level:number = 1;
  /**
   * 数字span元素
   */
  scoreEle:HTMLElement;
  levelEle:HTMLElement;
  /**
   * 最大等级level
   */
  maxLevel:number;
  /**
   * 多少分level提升
   */
  upScore: number;
  /**
   * 最大level传入，不传默认为10
   */
  constructor(maxLevel:number = 10,upScore:number = 5) {
    this.scoreEle = document.getElementById("scoreele")!;
    this.levelEle = document.getElementById("levelele")!;
    this.maxLevel = maxLevel;
    this.upScore = upScore;
  }

  /**
   * 加分方法
   */
  addScore() {
    this.scoreEle.innerHTML = ++this.score + '';
    /**
     * 判断分数以调动level
     */
    if (this.score % this.upScore === 0) {
      this.addLevel()
    }
  }
  /**
   * level增加(上限10)
   */
  addLevel() {
    if(this.level<this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + '';
    }
  }
}
export default ScorePanel;