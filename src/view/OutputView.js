import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  OUTPUT_MESSAGE: Object.freeze({
    WELCOME_INTRO: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
    PREVIEW_INTRO: '12월 26일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n',
    BEFORE_DISCOUNT_TOTAL_AMOUNT: (amount) => `<할인 전 총주문 금액>\n${amount}원`,
    GIVING_MENU: (menu) => `<증정 메뉴>\n${menu ?? '없음'}`,
    EVENT_LOG: (events) => {
      if (!events) return `<혜택 내역>\n없음`;
      const stringEvent = Object.entries(events)
        .map(([eventName, money]) => `${eventName}: -${money}`)
        .join('\n');
      return `<혜택 내역>\n${stringEvent}`;
    },
    EVENT_TOTAL_AMOUNT: (amount) => `<총혜택 금액>\n${amount ? `-${amount}` : '0'}원`,
    EVENT_BADGE: (badge) => `<12월 이벤트 배지>\n${badge ?? '없음'}`,
  }),

  printBlankLine() {
    Console.print('');
  },

  printIntro() {
    Console.print(this.OUTPUT_MESSAGE.WELCOME_INTRO);
  },

  printPreview() {
    Console.print(this.OUTPUT_MESSAGE.PREVIEW_INTRO);
  },

  printError(message) {
    Console.print(`[ERROR] ${message}`);
  },
};

export default OutputView;
