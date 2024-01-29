import {
  createForm,
  addStyleAppContainer,
  createMainTitle,
  createWrapTabl,
  createTable,
  createRow,
} from './createElements.js';

const data = [
  {id: 1, task: 'Купить слона', taskStatus: 'В процессе'},
  {id: 2, task: 'Помыть кота', taskStatus: 'Выполнена'},
];

const renderTitle = (mainContainer) => {
  mainContainer.append(createMainTitle());
};
const renderForm = (mainContainer) => {
  mainContainer.append(createForm());
};

const renderRow = (tbody) => {
  // tbody.createRow('table-light', {});
};

const renderTableWrap = (mainContainer) => {
  const wrap = createWrapTabl('table-wrapper');
  const {table, tbody} = createTable();
  renderRow(tbody);
  table.append();
  wrap.append(table);
  mainContainer.append(wrap);
};

export const renderElements = (mainContainer) => {
  renderTitle(mainContainer);
  addStyleAppContainer();
  renderForm(mainContainer);
  renderTableWrap(mainContainer);
};
