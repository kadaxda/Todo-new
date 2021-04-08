import { UI } from "./UI"
import { openFormEvent, deleteTodoEvent, openEachProjectEvent } from "./events"

// contains every todo
let allTodos = [];
let allProjects = ["haus", "maus"];

// todo class
class todo {
    constructor(title, dueDate, priority, project) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        allTodos.push(this)
    }
}

let a = new todo("bossbibel", "2021-04-09", "medium")
let b = new todo("bibel", "2012-02-12", "high")


function init() {
    UI.displayInboxUI()
    UI.showEveryTodo()
    UI.showAllProjects();
    openFormEvent();
    if(allProjects.length >= 1) {
        openEachProjectEvent();
    }
    deleteTodoEvent();
}

init();



export { todo, allTodos, allProjects }