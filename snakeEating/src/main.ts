import "./style/index.less"
import Food from "./modules/food"
import ScorePanel from "./modules/scorePanel"
import Snake from "./modules/snake"

const food = new Food()
food.change();

const scorePanel = new ScorePanel(10,10);
for(var i = 0;i<200;i++) {
  scorePanel.addScore()
}

const snake = new Snake()
console.log(snake)