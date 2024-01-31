import {getDomElements} from '../modules/getDomElements.js';
import {
  renderElements,
} from '../modules/render.js';
import {
  createMainTitle,
} from '../modules/createElements.js';
import {createModal} from '../modules/createModal.js';

// const getUser = () => {
//   const userValue = prompt('Введите ваше имя: ');
//   console.log('userValue: ', userValue);
// };

export const elementsDom = getDomElements();
const init = () => {
  createModal(elementsDom.appContainer);
  // getUser();
  renderElements(elementsDom.appContainer);
  createMainTitle(elementsDom.appContainer);
};

init();
