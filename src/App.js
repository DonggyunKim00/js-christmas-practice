import { readAndValidateDate, readAndValidateMenu } from './utils/readInput.js';
import OutputView from './view/OutputView.js';
import Menu from './model/Menu.js';
import MenuList from './model/MenuList.js';
import EventPlanner from './model/EventPlanner.js';

class App {
  #menuList;

  #eventPlanner;

  async run() {
    OutputView.printIntro();

    const date = await readAndValidateDate();
    const menus = await readAndValidateMenu();
    this.#createMenuList(menus);
    this.#createEventPlanner(date);

    this.#displayOrderPreview(date);
  }

  #createMenuList(menus) {
    const orderMenu = menus.split(',').map((item) => {
      const [name, quantity] = item.split('-');
      return { menu: Menu.create(name), quantity: Number(quantity) };
    });

    this.#menuList = new MenuList(orderMenu);
  }

  #createEventPlanner(date) {
    this.#eventPlanner = new EventPlanner(date, this.#menuList.getTotalAmount());
  }

  #displayOrderPreview(date) {
    OutputView.printPreview(date);

    OutputView.printOrderMenus(this.#menuList.getOrderMenu());
    OutputView.printPrevDiscountAmount(this.#menuList.getTotalAmount());
    OutputView.printGivingItem(this.#eventPlanner.getGivingItem());
    const events = this.#makeApplyEventObject();
    OutputView.printEventLog(events);

    const amount = Object.entries(events).reduce((acc, cur) => acc + cur[1], 0);
    OutputView.printEventTotalAmount(amount);

    const amountDiscount = Object.entries(events).reduce((acc, cur, idx) => {
      if (idx === 4) return acc;
      return acc - cur[1];
    }, this.#menuList.getTotalAmount());
    OutputView.printExpectPayAmount(amountDiscount);

    OutputView.printBadge(this.#eventPlanner.getEventBadge(amount));
  }

  #makeApplyEventObject() {
    return {
      '크리스마스 디데이 할인': this.#eventPlanner.calculateDdayDiscount(),
      '평일 할인': this.#eventPlanner.calculateWeekdayDiscount(
        this.#menuList.getMenuCountWithCategory('디저트'),
      ),
      '주말 할인': this.#eventPlanner.calculateHolidayDiscount(
        this.#menuList.getMenuCountWithCategory('메인'),
      ),
      '특별 할인': this.#eventPlanner.calculateSpecialdayDiscount(),
      '증정 이벤트': this.#eventPlanner.getGivingItem()
        ? this.#eventPlanner.getGivingItem().getInfo().price
        : 0,
    };
  }
}

export default App;
