import { UI } from "./UI"
import { deleteTodoEvent, openFormEvent } from "./events"

// contains every todo
let allTodos = [];

// todo class
class todo {
    constructor(title, dueDate, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        allTodos.push(this)
    }
}

UI.displayInboxUI()



// Press on + button -> Opens input Form
openFormEvent()



export { todo, allTodos }