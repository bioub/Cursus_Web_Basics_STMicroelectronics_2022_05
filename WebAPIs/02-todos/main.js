import { createTodoRow } from "./todos.js";

/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todos-form');

/** @type {HTMLInputElement} */
const inputEl = document.querySelector('.todos-input');

/** @type {HTMLDivElement} */
const containerEl = document.querySelector('.todos-container');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const divEl = createTodoRow({
    id: Math.random(),
    title: inputEl.value,
    completed: false,
  });

  containerEl.prepend(divEl);
});
