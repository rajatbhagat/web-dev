import TodoList from './ToDoList.js'
// alert('Hello World!');

$('#wd-todo').append(`
    <div class="container">
        <h1>Todo example</h1>
        ${TodoList()}
    </div>
`);

