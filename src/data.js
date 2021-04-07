import { todo } from "./index"
import { allTodos } from "./index.js"

function addTodo(title, date, priority) {
    let newTodo = new todo(title, date, priority);
    console.log(allTodos);
}

function deleteTodo() {
    let todo = document.querySelector(".get-deleted");
    let title = todo.firstElementChild.textContent;
    
    for(let i = 0; i<allTodos.length; i++) {
        if(allTodos[i].title == title) {
            allTodos.splice(i, 1);
            console.log(allTodos);
        }
    }

}

export {addTodo, deleteTodo}