class MenuList {
  #list;

  constructor(menus) {
    this.#list = [...menus];
  }

  getOrderMenu() {
    return this.#list.map((item) => ({ name: item.menu.getInfo().name, quantity: item.quantity }));
  }

  getTotalAmount() {
    return this.#list.reduce((acc, cur) => {
      const { menu, quantity } = cur;
      return acc + menu.getInfo().price * quantity;
    }, 0);
  }

  getMenuCountWithCategory(category) {
    return this.#list.reduce((acc, cur) => {
      const { menu, quantity } = cur;
      if (menu.getInfo().category === category) return acc + quantity;
      return acc;
    }, 0);
  }
}

export default MenuList;
