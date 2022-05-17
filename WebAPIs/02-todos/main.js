import { createTodoRow } from "./todos.js";

/** @type {HTMLFormElement} */
const formEl = document.querySelector('.todos-form');

/** @type {HTMLInputElement} */
const inputEl = document.querySelector('.todos-input');

/** @type {HTMLDivElement} */
const containerEl = document.querySelector('.todos-container');

/** @type {HTMLInputElement} */
const toggleEl = document.querySelector('.todos-toggle');

formEl.addEventListener('submit', (event) => {
  event.preventDefault();

  const divEl = createTodoRow({
    id: Math.random(),
    title: inputEl.value,
    completed: false,
  });

  containerEl.prepend(divEl);
});

toggleEl.addEventListener('click', () => {
  /** @type {NodeListOf<HTMLInputElement>} */
  const checkboxEls = containerEl.querySelectorAll('.todo-completed');

  for (const checkboxEl of checkboxEls) {
    checkboxEl.checked = toggleEl.checked;
  }
});
