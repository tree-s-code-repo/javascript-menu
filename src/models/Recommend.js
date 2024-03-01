import { Random } from "@woowacourse/mission-utils";
import { CATEGORIES, MENUS } from "../data/datas.js";

class Recommend {
  #coachs;
  #menus = [];

  constructor(coachs) {
    this.#coachs = coachs;
  }

  drawMenu() {
    const categoryNumber = Random.pickNumberInRange(1, 5);
    const category = CATEGORIES[categoryNumber];
    const menus = MENUS[category].split(",").map((menu) => menu.trim());

    const selectedMenu = this.selectMenu(menus);

    this.#menus.push(selectedMenu);
  }

  selectMenu(menus) {
    const randomIndex = Random.pickNumberInRange(0, 9);
    const selectedMenu = menus[randomIndex];

    if (this.filterHateMenu(selectedMenu)) {
      return this.selectMenu();
    }

    return selectedMenu;
  }

  filterHateMenu(selectedMenu) {
    return this.#coachs.some((menu) => menu.getHateMenu() === selectedMenu);
  }
}

export default Recommend;
