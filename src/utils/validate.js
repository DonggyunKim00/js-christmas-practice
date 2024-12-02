export const ERROR_MESSAGE = Object.freeze({
  EMPTY_INPUT: '입력값이 비어있습니다. 다시 입력해 주세요.\n',
  DATE_ERROR: '유효하지 않은 날짜입니다. 다시 입력해 주세요.\n',
  DOES_NOT_EXIST_PRODUCT: '존재하지 않는 상품입니다. 다시 입력해 주세요.\n',
});

const validFunction = {
  isEmptyInput: (input) => !input,

  isValidDate: (input) => /^\d+$/.test(input) && input >= 1 && input <= 31,
};

export const validateDateInput = (input) => {
  if (validFunction.isEmptyInput(input)) throw new Error(ERROR_MESSAGE.EMPTY_INPUT);
  if (!validFunction.isValidDate(input)) throw new Error(ERROR_MESSAGE.DATE_ERROR);
};
