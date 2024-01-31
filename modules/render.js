import {
  removeTask,
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

export const data = [
  {id: 1, task: 'Купить Хлеб', taskStatus: true},
  {id: 2, task: 'Убрать квартиру', taskStatus: false},
  {id: 3, task: 'Вынести мусор', taskStatus: false},
  {id: 4, task: 'Помыть слона', taskStatus: true},
  {id: 5, task: 'Сделать уроки', taskStatus: true},
];

const renderTitle = (mainContainer) => {
  mainContainer.append(createMainTitle());
};

const checkValidate = (target) => {
  if (target.value.trim() !== '') {
    target.classList.remove('is-invalid');
  } else {
    target.classList.add('is-invalid');
  }
  return target.value.trim();
};
const renderForm = (mainContainer) => {
  const {form, inputElem} = createForm();
  mainContainer.append(form);
  inputElem.addEventListener('input', (e) => {
    const target = e.target;
    checkValidate(target);
  });
  form.addEventListener('submit', (e) => {
    const target = e.target;
    e.preventDefault();
    const input = target.querySelector('input[type="text"]');
    const valueInput = checkValidate(input);
    console.log('valueInput: ', valueInput);
  });
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


// обертка таблицы
const renderTableWrap = (mainContainer) => {
  const wrap = createWrapTabl('table-wrapper');
  const {table, tbody} = createTable();

  tbody.addEventListener('click', (e) => {
    editTask(e, data);
    removeTask(e, data, tbody);
  });
  wrap.append(table);
  mainContainer.append(wrap);
  renderTable(data, tbody);
};

// отрисовываем элементы на странице
export const renderElements = (mainContainer) => {
  renderTitle(mainContainer); // добавляем заголовок
  addStyleAppContainer(); // добавляем стиль к контейнеру
  renderForm(mainContainer); // добавляем форму
  renderTableWrap(mainContainer); // добавляем обёртку таблицы
};
