import InputView from "../views/InputView.js";
import Coach from "../models/Coach.js";
import Recommend from "../models/Recommend.js";
class RecommendController {
  #coachs;
  #recommand;

  constructor() {}

  async start() {
    const coachNames = await this.promptCoachNames();
    const coachs = await this.getHateMenus(coachNames);
    this.setRecommend(coachs);
  }

  async promptCoachNames() {
    const inputedCoachNames = await InputView.readCoachName();
    return inputedCoachNames.split(",");
  }

  async getHateMenus(names) {
    const coachs = [];

    for (const name of names) {
      const hateMenu = await InputView.readAntiFood(name);
      const hateArrayMenu = hateMenu.split(",").map((menu) => menu.trim());
      const coach = new Coach(name, hateArrayMenu);
      coachs.push(coach);
    }

    return coachs;
  }

  setRecommend(coachs) {
    this.#recommand = new Recommend(coachs);
    this.#recommand.drawMenu();
  }
}

export default RecommendController;
