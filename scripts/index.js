import {getDomElements} from '../modules/getDomElements.js';
import {
  renderElements,
} from '../modules/render.js';
import {
  createMainTitle,
} from '../modules/createElements.js';

export const elementsDom = getDomElements();
const init = () => {
  renderElements(elementsDom.appContainer);
  createMainTitle(elementsDom.appContainer);
};

init();
