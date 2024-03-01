class Coach {
  #name;
  #menus;
  #hateMenu;
  constructor(name, hateMenu) {
    this.#name = name;
    this.#hateMenu = hateMenu;
  }

  getHateMenu() {
    return this.#hateMenu;
  }
}

export default Coach;
