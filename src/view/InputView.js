import { Console } from '@woowacourse/mission-utils';

const InputView = {
  INPUT_MESSAGE: Object.freeze({
    DATE_QUESTION: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
    MENU_QUESTION:
      '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
  }),

  async readDate() {
    const input = await Console.readLineAsync(this.InputView.DATE_QUESTION);
    return input;
  },

  async readMenu() {
    const input = await Console.readLineAsync(this.InputView.MENU_QUESTION);
    return input;
  },
};

export default InputView;
