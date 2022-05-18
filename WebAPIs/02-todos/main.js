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


// Exercice Reseau et Storage

// Exercice 1 : Réseau
// Envoyer avec l'API fetch ou XMLHttpRequest une requête GET
// vers https://jsonplaceholder.typicode.com/todos
// parser le JSON reçu en réponse
// pour chaque élément du tableau appeler la méthode createTodoRow
// et ajouter les lignes créé au container

// Exercice 2 : Storage
// Ecouter la saisi dans le champs .todos-input avec l'événement input
// stocker la valeur saisie dans le localStorage à la clé de votre choix
// (exemple slide 51)
// Au chargement de la page remplir le champs avec le contenu du storage

