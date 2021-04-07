import { UI } from "./UI"
import { openFormEvent, deleteTodoEvent } from "./events"

// contains every todo
let allTodos = [];

// todo class
class todo {
    constructor(title, dueDate, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = "standard";
        allTodos.push(this)
    }
}

let a = new todo("bossbibel", "2019-19-02", "medium")
let b = new todo("bibel", "2012-19-02", "high")


function init() {
    UI.displayInboxUI()
    UI.showEveryTodo()
    openFormEvent()
    deleteTodoEvent();
}

init();



export { todo, allTodos }