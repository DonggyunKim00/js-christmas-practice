import Menu from './Menu';

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

  getGivingItem() {
    if (this.getTotalAmount() > 120000) return Menu.create('샴페인');
    return null;
  }
}

export default MenuList;
