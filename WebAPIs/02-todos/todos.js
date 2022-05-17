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

  const spanEl = document.createElement('span');
  spanEl.className = 'todo-title';
  spanEl.innerText = todo.title;

  divEl.append(spanEl);

  return divEl;
}
