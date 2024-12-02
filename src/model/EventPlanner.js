import { EVENT_DATE } from '../constant/eventDate';
import Menu from './Menu';

class EventPlanner {
  #date;

  #totalAmount;

  constructor(date, totalAmount) {
    this.#date = date;
    this.#totalAmount = totalAmount;
  }

  calculateDdayDiscount() {
    if (this.#totalAmount < 10000 || this.#date < 1 || this.#date > 25) return 0;
    return 1000 + (this.#date - 1) * 100;
  }

  calculateWeekdayDiscount(quantity) {
    if (this.#totalAmount < 10000 || !EVENT_DATE[this.#date].includes('W')) return 0;
    return 2023 * quantity;
  }

  calculateHolidayDiscount(quantity) {
    if (this.#totalAmount < 10000 || !EVENT_DATE[this.#date].includes('H')) return 0;
    return 2023 * quantity;
  }

  calculateSpecialdayDiscount() {
    if (this.#totalAmount < 10000 || !EVENT_DATE[this.#date].includes('S')) return 0;
    return 1000;
  }

  getGivingItem() {
    if (this.#totalAmount < 120000) return null;
    return Menu.create('샴페인');
  }

  getTotalEventAmount() {
    const menu = this.getGivingItem();
    let price = 0;
    if (menu) price = menu.getInfo().price;
    return (
      this.calculateDdayDiscount() +
      this.calculateWeekdayDiscount() +
      this.calculateHolidayDiscount() +
      this.calculateSpecialdayDiscount() +
      price
    );
  }

  getExpectPayAmount() {
    const menu = this.getGivingItem();
    let price = 0;
    if (menu) price = menu.getInfo().price;
    return this.#totalAmount - this.getTotalEventAmount() + price;
  }

  getEventBadge() {
    if (this.#totalAmount < 10000) return null;

    const amount = this.getTotalEventAmount();
    if (amount >= 5000) return '별';
    if (amount >= 10000) return '트리';
    if (amount >= 20000) return '산타';

    return null;
  }
}

export default EventPlanner;
