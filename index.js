const $input = document.getElementById('new-todo-title');

function handleTodo(e) {
  console.log(e);
}

$input.addEventListener('keypress', handleTodo);
