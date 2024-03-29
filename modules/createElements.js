import {getDomElements} from './getDomElements.js';

const {appContainer} = getDomElements();

// добавляем классы бутстрап для выравнивания к главному контейнеру
export const addStyleAppContainer = () => {
  appContainer.classList.
    add('vh-100', 'w-100', 'd-flex', 'align-items-center',
      'justify-content-center', 'flex-column');
};

// создаём главный заголовок и встфвляем его на страницу
export const createMainTitle = () => {
  const title = document.createElement('h3');
  title.textContent = 'Todo App';
  return title;
};

// создаём кнопки
export const createBtn = (nameClass, content,
    typeBtn = false, dataAttr = false, attr = false) => {
  const btn = document.createElement('button');
  if (typeBtn) {
    btn.setAttribute('type', typeBtn);
  }
  if (dataAttr) {
    btn.dataset.id = dataAttr;
  }
  if (attr) {
    btn.setAttribute(attr.key, attr.val);
  }
  btn.textContent = content;
  btn.className = nameClass;
  return btn;
};

// создаём тег labal
const createLabel = (nameclass) => {
  const label = document.createElement('label');
  label.className = nameclass;
  return label;
};

// создаём тег input
const createInput = (nameclass, type = false, placeholder = false) => {
  const input = document.createElement('input');
  if (type) {
    input.setAttribute('type', type);
  }
  if (placeholder) {
    input.setAttribute('placeholder', placeholder);
  }
  input.className = nameclass;
  return input;
};

// создаём обёртку таблицы
export const createWrapTabl = (nameclass) => {
  const tableWrap = document.createElement('div');
  tableWrap.className = nameclass;
  return tableWrap;
};

/**  Cоздаём тег
  * @param {string} tagName - название тега
  * @param {string}  content - текст
  * @param {string} nameClass - класс если нужен
  * @param {string} dataAttr - Data атрибут
  * @return {string} - возвращаем тег
*/
const createTdThTag = (tagName, content = false,
    nameClass = false, dataAttr = false) => {
  const tag = document.createElement(tagName);
  if (dataAttr) {
    tag.dataset.id = dataAttr;
  }
  if (nameClass) {
    tag.className = nameClass;
  }
  if (content) {
    tag.textContent = content;
  }
  return tag;
};

// создаём ряд в таблице
export const createRow = (classTr = false, index,
    {
      id,
      task,
      taskStatus,
    }) => {
  const tr = document.createElement('tr');
  if (classTr) {
    tr.className = classTr;
  }
  if (taskStatus) {
    tr.classList.add('table-success'); // table-success
  }
  if (taskStatus) {
    tr.classList.remove('table-light');
    tr.classList.add('table-success');
  }
  const numberTd = createTdThTag('td', index);
  const taskTd = createTdThTag('td', task, 'task');
  const statusTd = createTdThTag('td', taskStatus ? 'Выполнена' : 'В процессе');
  // statusTd.classList.add(taskStatus ? '' : '');
  const tdBtn = createTdThTag('td');
  const btnDel = createBtn('remove btn btn-danger me-2', 'Удалить', false, id);
  const btnComplite =
    createBtn('endtask btn btn-success', 'Завершить', false, id);
  tdBtn.append(btnDel, btnComplite);
  tr.append(numberTd, taskTd, statusTd, tdBtn);
  return {
    tr,
    btnDel,
    btnComplite,
  };
};

// создаём таблицу
export const createTable = () => {
  const table = document.createElement('table');
  table.classList.add('table', 'table-hover', 'table-bordered');
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  tr.append(createTdThTag('th', '№'));
  tr.append(createTdThTag('th', 'Задача'));
  tr.append(createTdThTag('th', 'Статус'));
  tr.append(createTdThTag('th', 'Действия'));
  thead.append(tr);

  const tbody = document.createElement('tbody');
  tbody.classList.add('table__tbody');
  table.append(thead, tbody);
  return {
    table,
    tbody,
  };
};

// создаём форму и вставляем на страницу
export const createForm = () => {
  const form = document.createElement('form');
  form.classList.add('d-flex', 'align-items-center', 'mb-3');
  const btnSubmit = createBtn('btn btn-primary me-3',
    'Сохранить', 'submit', '', {key: 'disabled', val: 'true'});
  const btnReset = createBtn('btn btn-warning', 'Очистить', 'reset', 'reset');
  const labelElem = createLabel('form-group me-3 mb-0');
  const inputElem = createInput('form-control', 'text', 'Ввести задачу');

  labelElem.append(inputElem);
  form.append(labelElem, btnSubmit, btnReset);
  return {form, inputElem, btnReset, btnSubmit};
};


