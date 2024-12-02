import { MENU } from '../constant/menu.js';

class Menu {
  #info;

  constructor(name, price, category) {
    this.#info = {
      name,
      price,
      category,
    };
  }

  static create(name) {
    const { category, price } = MENU[name];
    return new Menu(name, price, category);
  }

  getInfo() {
    return this.#info;
  }
}

export default Menu;
