import {
  createForm,
  addStyleAppContainer,
  createMainTitle,
  createWrapTabl,
  createTable,
  createRow,
} from './createElements.js';

const data = [
  {id: 1, task: 'Купить Хлеб', taskStatus: true},
  {id: 2, task: 'Убрать квартиру', taskStatus: false},
  {id: 3, task: 'Вынести мусор', taskStatus: false},
  {id: 4, task: 'Помыть слона', taskStatus: true},
  {id: 5, task: 'Сделать уроки', taskStatus: true},
];

const renderTitle = (mainContainer) => {
  mainContainer.append(createMainTitle());
};
const renderForm = (mainContainer) => {
  mainContainer.append(createForm());
};

// обертка таблицы
const renderTableWrap = (mainContainer) => {
  let count = 0;
  const wrap = createWrapTabl('table-wrapper');
  const {table, tbody} = createTable();
  tbody.addEventListener('click', (e) => {
    const target = e.target;
    if (target.closest('.remove')) {
      console.log('target: ', target);
    }
  });
  wrap.append(table);
  mainContainer.append(wrap);
  data.map((elems, index) => {
    if (count % 2 === 0) {
      count = 1;
      const {tr} = createRow('table-light', index + 1, elems);
      tbody.append(tr);
    } else {
      count = 0;
      const {tr} = createRow('', index + 1, elems);
      tbody.append(tr);
    }
  });
};

// отрисовываем элементы на странице
export const renderElements = (mainContainer) => {
  renderTitle(mainContainer); // добавляем заголовок
  addStyleAppContainer(); // добавляем стиль к контейнеру
  renderForm(mainContainer); // добавляем форму
  renderTableWrap(mainContainer); // добавляем обёртку таблицы
};
