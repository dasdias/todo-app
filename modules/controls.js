import {renderTable} from './render.js';
import {getStorage, removeTaskStorage, setStorage} from './serviceStorage.js';

// удаляем задачу
export const removeTask = (e, data, userName, tbody) => {
  const target = e.target;
  if (target.closest('.remove')) {
    // console.log('target: ', +target.dataset.id);
    const currentTaskId = +target.dataset.id;
    // const newData = storData.filter((el) => el.id !== +target.dataset.id);
    // console.log('newData: ', newData);
    // setStorage(userName, newData);
    console.log(currentTaskId);
    removeTaskStorage(userName, currentTaskId);
    const storData = getStorage(userName);
    renderTable(storData, tbody);
  }
};

// редактируем задачу
export const editTask = (e, data) => {
  const target = e.target;
  if (target.closest('.edit')) {
    console.log('editTask');
  }
};

// валидируем input
export const checkValidate = (target) => {
  const form = target.closest('form');
  const submitBtn = form.querySelector('button[type="submit"]');
  const targetValue = target.value.trim();
  if (targetValue !== '') {
    target.classList.remove('is-invalid');
    submitBtn.removeAttribute('disabled');
    return targetValue;
  } else {
    target.classList.add('is-invalid');
    submitBtn.setAttribute('disabled', 'true');
  }
  return false;
};
