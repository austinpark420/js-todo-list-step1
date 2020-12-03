const $input = document.getElementById('new-todo-title');
const $todoList = document.getElementById('todo-list');

$input.addEventListener('keyup', handleTodo);

function handleTodo(event) {
  console.log(event);
  const text = event.target.value;

  if (event.key === 'Enter') {
    $todoList.innerHTML += `
    <li>
      <div class="view">
        <input class="toggle" type="checkbox">
        <label class="label">${text}</label>
        <button class="destroy"></button>
      </div>
      <input class="edit" value={text}>
    </li>
    `;

    $input.value = '';
  }

}

$todoList.addEventListener('click',toggleItem);

function toggleItem(e){
  console.log(e.target.closest('li'));
  e.target.closest('li').classList.toggle('completed');
}
