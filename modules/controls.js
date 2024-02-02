import {renderTable} from './render.js';
import {editTaskStorage, getStorage, removeTaskStorage, setStorage}
  from './serviceStorage.js';

// удаляем задачу
export const removeTask = (e, data, userName, tbody) => {
  const target = e.target;
  if (target.closest('.remove')) {
    const currentTaskId = +target.dataset.id;
    removeTaskStorage(userName, currentTaskId);
    const storData = getStorage(userName);
    renderTable(storData, tbody);
  }
};

// редактируем задачу
export const finishTask = (e, userName) => {
  const target = e.target;
  if (target.closest('.endtask')) {
    // const newData = storData.filter((el) => el.id !== +target.dataset.id);
    const currentTaskId = +target.dataset.id;
    editTaskStorage(userName, currentTaskId);
    console.log('currentTaskId: ', currentTaskId);
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
