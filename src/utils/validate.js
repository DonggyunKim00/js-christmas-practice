import { MENU } from '../constant/menu.js';

export const ERROR_MESSAGE = Object.freeze({
  EMPTY_INPUT: '입력값이 비어있습니다. 다시 입력해 주세요.\n',
  DATE_ERROR: '유효하지 않은 날짜입니다. 다시 입력해 주세요.\n',
  MENU_FORM_ERROR: '유효하지 않은 주문입니다. 다시 입력해 주세요.(메뉴 형식)\n',
  DOES_NOT_EXIST_PRODUCT: '유효하지 않은 주문입니다. 다시 입력해 주세요.\n',
  DUPLICATE_MENU: '유효하지 않은 주문입니다. 다시 입력해 주세요.\n',
  ONLY_DRINK: '음료만 주문할 수 없습니다. 다시 입력해 주세요.\n',
  MENU_TOTAL_AMOUNT: '메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다. 다시 입력해 주세요.\n',
});

const validFunction = {
  isEmptyInput: (input) => !input,

  isValidDate: (input) => /^\d+$/.test(input) && input >= 1 && input <= 31,

  isInvalidMenuForm: (input) => input.split(',').some((item) => !/^(.)+-\d+$/.test(item)),

  isExistAllMenu: (input) =>
    input.split(',').every((item) => {
      const [name, quantity] = item.split('-');
      return !!MENU[name] && quantity > 0;
    }),

  hasDuplicateMenu: (input) => {
    const nameArr = input.split(',').map((item) => item.split('-')[0]);
    return nameArr.length !== new Set(nameArr).size;
  },

  isOnlyDrink: (input) =>
    input
      .split(',')
      .map((item) => MENU[item.split('-')[0]].category)
      .every((item) => item === '음료'),

  isOverMenuTotal: (input) =>
    input.split(',').reduce((acc, cur) => acc + Number(cur.split('-')[1]), 0) > 20,
};

export const validateDateInput = (input) => {
  if (validFunction.isEmptyInput(input)) throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
  if (!validFunction.isValidDate(input)) throw new Error(ERROR_MESSAGE.DATE_ERROR);
};

export const validateMenuInput = (input) => {
  if (validFunction.isEmptyInput(input)) throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
  if (validFunction.isInvalidMenuForm(input)) throw new Error(ERROR_MESSAGE.MENU_FORM_ERROR);
  if (!validFunction.isExistAllMenu(input)) throw new Error(ERROR_MESSAGE.DOES_NOT_EXIST_PRODUCT);
  if (validFunction.hasDuplicateMenu(input)) throw new Error(ERROR_MESSAGE.DUPLICATE_MENU);
  if (validFunction.isOnlyDrink(input)) throw new Error(ERROR_MESSAGE.ONLY_DRINK);
  if (validFunction.isOverMenuTotal(input)) throw new Error(ERROR_MESSAGE.MENU_TOTAL_AMOUNT);
};
