import {renderTable} from './render.js';
import {getStorage, setStorage} from './serviceStorage.js';

// удаляем задачу
export const removeTask = (e, data, userName, tbody) => {
  const storData = getStorage(userName);
  const target = e.target;
  if (target.closest('.remove')) {
    console.log('target: ', +target.dataset.id);
    const newData = storData.filter((el) => el.id !== +target.dataset.id);
    console.log('newData: ', newData);
    setStorage(userName, [...newData]);
    renderTable(newData, tbody);
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
