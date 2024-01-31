import {createBtn} from './createElements.js';

export const createModal = (elementsDom) => {
  const modalWrap = document.createElement('div');
  modalWrap.style.cssText = `
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
  `;
  modalWrap.classList.add(
    'position-fixed',
    'd-flex',
    'justify-content-center',
    'align-items-center',
    'bg-dark', 'bg-opacity-75',
  );
  const modalForm = document.createElement('form');
  modalForm.classList.add('border', 'bg-light');
  modalForm.style.cssText = `
    max-width: 550px;
    width: 100%;
    padding: 15px;
  `;
  const label = document.createElement('label');
  label.textContent = 'Введите ваше имя';
  label.setAttribute('for', 'username');
  label.classList.add('mb-2');
  const input = document.createElement('input');
  input.classList.add('me-3');
  input.id = 'username';
  const wrap = document.createElement('div');
  wrap.classList.add('d-flex');
  const btn = createBtn('btn btn-primary', 'Войти', 'submit');
  wrap.append(input, btn);
  modalForm.append(label, wrap);
  modalWrap.append(modalForm);
  input.classList.add('form-control');
  elementsDom.append(modalWrap);
  return input;
};
