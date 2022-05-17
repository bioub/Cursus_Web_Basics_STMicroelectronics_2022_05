import { createTodoInput, createTodoRow, createTodoSpan } from "./todos.js";

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

containerEl.addEventListener('click', (event) => {
  /** @type {HTMLElement} */
  const target = event.target;

  if (target.classList.contains('todo-delete')) {
    // l'ancêtre le plus proche dont la classe contient todo-row
    target.closest('.todo-row')?.remove();
  }

  if (target.classList.contains('todo-title')) {
    const title = target.innerText;
    const inputEl = createTodoInput(title);
    target.replaceWith(inputEl);
    event.stopPropagation();
  }

  if (target.classList.contains('todo-title-edit')) {
    event.stopPropagation();
  }
});

// window.addEventListener('click', (event) => {
//   const inputEl = document.querySelector('.todo-title-edit');

//   if (inputEl) {
//     const title = inputEl.value;
//     const spanEl = createTodoSpan(title);
//     inputEl.replaceWith(spanEl);
//   }
// }, { capture: true });

window.addEventListener('click', (event) => {
  const inputEl = document.querySelector('.todo-title-edit');

  if (inputEl) {
    const title = inputEl.value;
    const spanEl = createTodoSpan(title);
    inputEl.replaceWith(spanEl);
  }
});
