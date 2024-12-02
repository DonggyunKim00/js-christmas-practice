import { readAndValidateDate, readAndValidateMenu } from './utils/readInput.js';

class App {
  async run() {
    const date = await readAndValidateDate();
    const menuList = await readAndValidateMenu();
  }
}

export default App;
