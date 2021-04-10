import { UI } from "./UI"
import { openFormEvent, deleteTodoEvent, openEachProjectEvent, editTodoEvent } from "./events"

// stores every todo/ project
let allTodos = [];
let allProjects = ["haus", "maus"];

// todo class
class todo {
    constructor(title, dueDate, priority, project, textDescripion) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.textDescripion = textDescripion;
        allTodos.push(this)
    }
}

// dummy todos
let a = new todo("bossbibel", "2021-04-09")
let b = new todo("bibel", "2012-02-12")

// first load
function init() {
    UI.displayInboxUI(); // displays InboxUI in content (header, openFormBtn)
    UI.displayEveryTodo(); // lists every todo in content
    UI.showAllProjects(); //shows all projects in the sidebar
    openFormEvent(); // Press on openFormBtn -> Opens input Form; Add/ Cancel Btn
    if(allProjects.length >= 1) {
        openEachProjectEvent(); //if there is a project -> you can click on it
    }
    deleteTodoEvent(); //lets you delete the todos
    editTodoEvent();
}

init();



export { todo, allTodos, allProjects }