import { EVENT_DATE } from '../constant/eventDate.js';
import Menu from './Menu.js';

class EventPlanner {
  #date;

  #totalAmount;

  #givingItem;

  constructor(date, totalAmount) {
    this.#date = date;
    this.#totalAmount = totalAmount;
    this.#givingItem = this.#initGivingItem();
  }

  #initGivingItem() {
    if (this.#totalAmount < 120000) return null;
    return Menu.create('샴페인');
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

  getEventBadge(amount) {
    if (this.#totalAmount < 10000) return null;

    if (amount >= 5000 && amount < 10000) return '별';
    if (amount >= 10000 && amount < 20000) return '트리';
    if (amount >= 20000) return '산타';

    return null;
  }

  getGivingItem() {
    return this.#givingItem;
  }
}

export default EventPlanner;
