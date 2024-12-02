import { readAndValidateDate, readAndValidateMenu } from './utils/readInput.js';
import OutputView from './view/OutputView.js';

class App {
  async run() {
    OutputView.printIntro();

    const date = await readAndValidateDate();
    const menuList = await readAndValidateMenu();

    OutputView.printPreview(date);
  }
}

export default App;
