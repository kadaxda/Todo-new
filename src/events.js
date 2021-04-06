import { UI } from "./UI"
import { todo } from "./index"
import { addTodo, deleteTodo } from "./data"

// Press on + button -> Opens input Form
function openFormEvent() {
    let openFormBtn = document.querySelector(".openFormBtn");
    openFormBtn.addEventListener("click", (e) => {
        
        UI.openForm()
        // Cancel Btn closes form
        let cancelBtn = document.querySelector("#cancelBtn");
        cancelBtn.addEventListener("click", function(e) {
            //UI
            UI.closeForm()
        })

        let addBtn = document.querySelector("#addBtn");
        addBtn.addEventListener("click", (e) => {

        //DATA
                let title = document.querySelector("#titleInput").value;
                let date = document.querySelector("#dateInput").value;
                let priority = document.querySelector("#selectInput").value;
                addTodo(title, date, priority);

                //UI
                UI.closeForm();
                UI.showDisplayTodo(title, date, priority);

                deleteTodoEvent();
        })
    })

}

function deleteTodoEvent() {
    let deleteBtn = document.querySelector("#deleteBtn");
    deleteBtn.addEventListener("click", (e) => {
        //DATA
        deleteTodo();
    })
}

export {openFormEvent, deleteTodoEvent}