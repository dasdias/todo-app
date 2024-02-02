import {getDomElements} from '../modules/getDomElements.js';
import {
  renderElements,
  renderTable,
} from '../modules/render.js';
import {createModal} from '../modules/createModal.js';
import {checkValidate} from '../modules/controls.js';
import {getStorage} from '../modules/serviceStorage.js';

let storData = [];

const init = () => {
  const {appContainer} = getDomElements();
  const {input, modalForm, modalWrap} = createModal(appContainer);
  const startApp = (userName) => {
    userName = userName.toLowerCase();
    if (!userName) return;
    storData = getStorage(userName);
    modalWrap.classList.add('d-none');
    if (+storData.length <= 0) {
      renderElements(appContainer, userName);
    } else {
      const {tbody} = renderElements(appContainer, userName);
      renderTable(storData, tbody);
    }
  };

  input.addEventListener('input', (e) => {
    checkValidate(input);
  });

  input.addEventListener('keyup', (e) => {
    const keyCode = e.code;
    if (keyCode === 'Enter') {
      const userName = checkValidate(input);
      startApp(userName);
    }
  });

  modalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputModal = modalForm.querySelector('input[type="text"]');
    const userName = checkValidate(inputModal);
    startApp(userName);
  });
};

init();
