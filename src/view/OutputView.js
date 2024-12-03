import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  OUTPUT_MESSAGE: Object.freeze({
    WELCOME_INTRO: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
    PREVIEW_INTRO: (date) => `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
    ORDER_MENU: (menus) => `\n<주문 메뉴>\n${menus}`,
    BEFORE_DISCOUNT_TOTAL_AMOUNT: (amount) => `\n<할인 전 총주문 금액>\n${amount}원`,
    GIVING_MENU: (menu) => `\n<증정 메뉴>\n${menu}`,
    EVENT_LOG: (events) => `\n<혜택 내역>\n${events}`,
    EVENT_TOTAL_AMOUNT: (amount) => `\n<총혜택 금액>\n${amount}원`,
    AFTER_DISCOUNT_TOTAL_AMOUNT: (amount) => `\n<할인 후 예상 결제 금액>\n${amount}원`,
    EVENT_BADGE: (badge) => `\n<12월 이벤트 배지>\n${badge ?? '없음'}`,
  }),

  printError(message) {
    Console.print(`[ERROR] ${message}`);
  },

  printIntro() {
    Console.print(this.OUTPUT_MESSAGE.WELCOME_INTRO);
  },

  printPreview(date) {
    Console.print(this.OUTPUT_MESSAGE.PREVIEW_INTRO(date));
  },

  printOrderMenus(menus) {
    const stringifyMenus = menus.map((item) => `${item.name} ${item.quantity}개`).join('\n');

    Console.print(this.OUTPUT_MESSAGE.ORDER_MENU(stringifyMenus));
  },

  printPrevDiscountAmount(amount) {
    Console.print(this.OUTPUT_MESSAGE.BEFORE_DISCOUNT_TOTAL_AMOUNT(amount.toLocaleString('ko-KR')));
  },

  printGivingItem(item) {
    let stringItem = '없음';
    if (item) stringItem = `${item.getInfo().name} 1개`;

    Console.print(this.OUTPUT_MESSAGE.GIVING_MENU(stringItem));
  },

  printEventLog(events) {
    const stringEvent = Object.entries(events)
      .map(([eventName, money]) => {
        if (!money) return '';
        return `${eventName}: -${money.toLocaleString('ko-KR')}원`;
      })
      .filter((item) => item !== '')
      .join('\n');

    Console.print(this.OUTPUT_MESSAGE.EVENT_LOG(stringEvent || '없음'));
  },

  printEventTotalAmount(amount) {
    const strAmount = amount > 0 ? `-${amount.toLocaleString('ko-KR')}` : 0;
    Console.print(this.OUTPUT_MESSAGE.EVENT_TOTAL_AMOUNT(strAmount));
  },

  printExpectPayAmount(amount) {
    Console.print(this.OUTPUT_MESSAGE.AFTER_DISCOUNT_TOTAL_AMOUNT(amount.toLocaleString('ko-KR')));
  },

  printBadge(badge) {
    Console.print(this.OUTPUT_MESSAGE.EVENT_BADGE(badge));
  },
};

export default OutputView;
