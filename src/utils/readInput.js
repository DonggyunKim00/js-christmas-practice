import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import { validateDateInput } from './validate.js';

const recursionInput = async (readInput, validationFn) => {
  try {
    const input = await readInput();
    validationFn(input);
    return input;
  } catch (error) {
    OutputView.printError(error.message);
    return recursionInput(readInput, validationFn);
  }
};

export const readAndValidateDate = () =>
  recursionInput(() => InputView.readDate(), validateDateInput);
