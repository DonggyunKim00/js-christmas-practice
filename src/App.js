import { readAndValidateDate, readAndValidateMenu } from './utils/readInput.js';
import OutputView from './view/OutputView.js';
import Menu from './model/Menu.js';
import MenuList from './model/MenuList.js';

class App {
  #menuList;

  async run() {
    OutputView.printIntro();

    const date = await readAndValidateDate();
    const menus = await readAndValidateMenu();
    this.#createMenuList(menus);

    OutputView.printPreview(date);
  }

  #createMenuList(menus) {
    const orderMenu = menus.split(',').forEach((item) => {
      const [name, quantity] = item.split('-');
      return { menu: Menu.create(name), quantity: Number(quantity) };
    });

    this.#menuList = new MenuList(orderMenu);
  }
}

export default App;
