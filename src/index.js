import { UI } from "./UI"
import { openFormEvent, deleteTodoEvent, openEachProjectEvent, editTodoEvent, deleteProjectEvent} from "./events"
import { loadTodos, loadProjects } from "./localstorage"

// stores every todo/ project
let allTodos = [];
let allProjects = [];

// todo class, pushes the Todo into allTodosArray
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

// first load
function init() {
    loadTodos();
    loadProjects();

    // if there are no Todos and projects
    if(allTodos.length == 0 && allProjects.length == 0) {
        UI.displayInboxUI();
        openFormEvent();
    } 

    else {
        UI.displayInboxUI();        // displays InboxUI in content (header, openFormBtn)
        UI.displayEveryTodo();      // lists every todo in content
        UI.showAllProjects();       //shows all projects in the sidebar
        openFormEvent();            // Press on openFormBtn -> Opens input Form; Add/ Cancel Btn
        if(allProjects.length >= 1) {
            openEachProjectEvent(); //if there is a project -> you can click on it
        }
        deleteProjectEvent();
        deleteTodoEvent();          //lets you delete the todos
        editTodoEvent();
    }

}

init();



export { todo, allTodos, allProjects }