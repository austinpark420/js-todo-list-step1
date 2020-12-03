const $input = document.getElementById('new-todo-title');

$input.addEventListener('keyup', handleTodo);

function handleTodo(e) {
  console.log(e);
}

console.log('gg');