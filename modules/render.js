import {
  removeTask,
  checkValidate,
  finishTask,
  editTask,
} from './controls.js';
import {
  createForm,
  addStyleAppContainer,
  createMainTitle,
  createWrapTabl,
  createTable,
  createRow,
} from './createElements.js';
import {getStorage, setStorage} from './serviceStorage.js';

// export const data = [
//   // {id: 1, task: 'Купить Хлеб', taskStatus: true},
//   // {id: 2, task: 'Убрать квартиру', taskStatus: false},
//   // {id: 3, task: 'Вынести мусор', taskStatus: false},
//   // {id: 4, task: 'Помыть слона', taskStatus: true},
//   // {id: 5, task: 'Сделать уроки', taskStatus: true},
// ];
const renderTitle = (mainContainer) => {
  mainContainer.append(createMainTitle());
};

export const renderTable = (data, tableElem) => {
  tableElem.textContent = '';
  let count = 0;
  data.map((elems, index) => {
    if (count % 2 === 0) {
      count = 1;
      const {tr} = createRow('table-light', index + 1, elems);
      tableElem.append(tr);
    } else {
      count = 0;
      const {tr} = createRow('', index + 1, elems);
      tableElem.append(tr);
    }
  });
};


const renderForm = (mainContainer, tbody, userName = '') => {
  let unicId = '';
  // {id: unicId, task: 'Купить Хлеб', taskStatus: true};
  const {form, inputElem, btnReset, btnSubmit} = createForm();
  let userTask = '';
  mainContainer.append(form);
  btnReset.addEventListener('click', (e) => {
    btnSubmit.setAttribute('disabled', true);
  });
  inputElem.addEventListener('input', (e) => {
    const target = e.target;
    checkValidate(target);
  });
  inputElem.addEventListener('keypres', (e) => {
    const keyCOde = e.code;
    if (keyCOde === 'Enter') {
      userTask = checkValidate(inputElem);
      if (!userTask) return;
      unicId = Date.now();
      setStorage(userName, {id: unicId, task: userTask, taskStatus: false});
      const data = getStorage(userName);
      renderTable(data, tbody);
      inputElem.closest('form').reset();
    }
  });
  form.addEventListener('submit', (e) => {
    const target = e.target;
    e.preventDefault();
    const input = target.querySelector('input[type="text"]');
    userTask = checkValidate(input);
    if (!userTask) return;
    unicId = Date.now();
    setStorage(userName, {id: unicId, task: userTask, taskStatus: false});
    const data = getStorage(userName);
    renderTable(data, tbody);
    btnSubmit.setAttribute('disabled', true);
    form.reset();
  });
};

// отрисовываем элементы на странице
export const renderElements = (mainContainer, userName) => {
  renderTitle(mainContainer); // добавляем заголовок
  addStyleAppContainer(); // добавляем стиль к контейнеру
  const wrap = createWrapTabl('table-wrapper'); // обёртка таблицы
  const {table, tbody} = createTable(); // создаём таблицу
  renderForm(mainContainer, tbody, userName); // добавляем форму

  tbody.addEventListener('click', (e) => {
    const storData = getStorage(userName);
    finishTask(e, userName, tbody);
    removeTask(e, storData, userName, tbody);
    editTask(e, userName, tbody);
  });
  wrap.append(table);
  mainContainer.append(wrap);

  return {tbody};
};
