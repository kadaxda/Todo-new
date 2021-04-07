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
            if(title == "" || date == "" || priority == "") {
                UI.showValidationError();
                return;
            }
            addTodo(title, date, priority);

            //UI
            UI.closeForm();
            UI.showDisplayTodo(title, date, priority);

            deleteTodoEvent();
            })
    })

}

function deleteTodoEvent() {
    let deleteBtn = document.querySelectorAll("#deleteBtn");
    deleteBtn.forEach((deleteButton) => {

        deleteButton.addEventListener("click", (e) => {
            deleteButton.parentElement.classList.add("get-deleted");
            
            // DATA
            deleteTodo()

            // UI
            UI.deleteTodo();          
        }) 
    })

}

let today = document.querySelector("#today");
today.addEventListener("click", (e) => {
    UI.vanishContent();
    UI.showOnlyToday();
    deleteTodoEvent();
})

let inbox = document.querySelector("#inbox");
inbox.addEventListener("click", (e) => {
    UI.vanishContent();
    UI.displayInboxUI();
    UI.showEveryTodo();
    openFormEvent();
    deleteTodoEvent();
})


let week = document.querySelector("#week");
week.addEventListener("click", (e) => {
    UI.vanishContent();
    UI.showOnlyWeek();
    deleteTodoEvent();
})

export {openFormEvent, deleteTodoEvent}