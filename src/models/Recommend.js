import { Random } from "@woowacourse/mission-utils";
import { CATEGORIES, MENUS } from "../data/datas.js";
import Menu from "./Menu.js";

class Recommend {
  #coachs;
  #menus = [];

  constructor(coachs, menu) {
    this.#coachs = coachs;
    this.menu = menu;
  }

  drawMenu() {
    for (let day = 0; day < 4; day++) {
      const pickCategoryMenu = this.#pickCategory();
      const selectedMenu = this.#selectMenu(pickCategoryMenu);
      const decidedMenu = new Menu(category, selectedMenu, day);
      this.#menus.push(decidedMenu);
    }
    console.log(this.#menus);
  }

  #pickCategory() {
    const categoryNumber = Random.pickNumberInRange(1, 5);
    const category = CATEGORIES[categoryNumber];
    const menus = MENUS[category].split(",").map((menu) => menu.trim());

    return menus;
  }

  #selectMenu(menus) {
    const randomIndex = Random.pickNumberInRange(0, 9);
    const selectedMenu = menus[randomIndex];

    if (this.filterHateMenu(selectedMenu)) {
      return this.#selectMenu();
    }

    return selectedMenu;
  }

  filterHateMenu(selectedMenu) {
    return this.#coachs.some((menu) => menu.getHateMenu() === selectedMenu);
  }
}

export default Recommend;
