import { todo } from "./index"
import { allTodos } from "./index.js"

// Adds todo to allTodos
function addTodo(title, date, priority, project) {
    let newTodo = new todo(title, date, priority, project);
}

// Removes todo on allTodos
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