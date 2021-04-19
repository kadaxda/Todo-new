import { UI } from "./UI";
import {
  openFormEvent,
  deleteTodoEvent,
  openEachProjectEvent,
  editTodoEvent,
  deleteProjectEvent,
} from "./events";
import { loadTodos, loadProjects } from "./localstorage";

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
    allTodos.push(this);
  }
}

// first load
function init() {
  loadTodos();
  loadProjects();

  UI.displayInboxUI();
  UI.showAllProjects();
  UI.displayEveryTodo();
}

init();

export { todo, allTodos, allProjects };
