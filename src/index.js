import { UI } from "./UI"
import { openFormEvent, deleteTodoEvent } from "./events"

// contains every todo
let allTodos = [];
let allProjects = ["haus", "maus"];

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

let a = new todo("bossbibel", "2021-04-09", "medium")
let b = new todo("bibel", "2012-02-12", "high")


function init() {
    UI.displayInboxUI()
    UI.showEveryTodo()
    UI.showAllProjects();
    openFormEvent()
    deleteTodoEvent();
}

init();



export { todo, allTodos, allProjects }