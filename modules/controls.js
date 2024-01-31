import {renderTable} from './render.js';
export const removeTask = (e, data, tbody) => {
  const target = e.target;
  if (target.closest('.remove')) {
    console.log('target: ', +target.dataset.id);
    const newData = data.filter((el) => el.id !== +target.dataset.id);
    console.log('newData: ', newData);
    renderTable(newData, tbody);
  }
};
export const editTask = (e, data) => {
  const target = e.target;
  if (target.closest('.edit')) {
    console.log('editTask');
  }
};
