/**
 * @param {object} todo
 * @param {number} todo.id
 * @param {string} todo.title
 * @param {boolean} todo.completed
 */
export function createTodoRow(todo) {
  // <div class="todo-row" data-todo-id="0.35335">
  //   <input type="checkbox" class="todo-completed">
  //   <span class="todo-title">ABC</span>
  //   <button class="todo-delete">-</button>
  // </div>

  const divEl = document.createElement('div');
  divEl.className = 'todo-row';
  divEl.dataset.todoId = todo.id;

  const checkboxEl = document.createElement('input');
  checkboxEl.type = 'checkbox';
  checkboxEl.className = 'todo-completed';
  checkboxEl.checked = todo.completed;

  const spanEl = createTodoSpan(todo.title);

  const btnEl = document.createElement('button');
  btnEl.className = 'todo-delete';
  btnEl.innerText = '-';

  divEl.append(checkboxEl, spanEl, btnEl);

  return divEl;
}


export function createTodoSpan(title) {
  const spanEl = document.createElement('span');
  spanEl.className = 'todo-title';
  spanEl.innerText = title;
  return spanEl;
}

export function createTodoInput(title) {
  const inputEl = document.createElement('input');
  inputEl.type = 'text';
  inputEl.className = 'todo-title-edit';
  inputEl.value = title;
  return inputEl;
}
