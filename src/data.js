import { todo } from "./index"

function addTodo(title, date, priority) {
    let newTodo = new todo(title, date, priority);
}

function deleteTodo() {
    console.log(this)
}

export {addTodo, deleteTodo}