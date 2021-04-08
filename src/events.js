import { UI } from "./UI"
import { allProjects, todo } from "./index"
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

function openProjectEvent() {
    let openProjectsFormBtn = document.querySelector(".openProjectsFormBtn");
    openProjectsFormBtn.addEventListener("click", (e) => {
        UI.openProjectsForm();

        let addBtn = document.querySelector("#addBtn");
        addBtn.addEventListener("click", (e) => {
            // UI
            let titleInput = document.querySelector("#titleInput");
            UI.addProject(titleInput.value);
        })

        let cancelBtn = document.querySelector("#cancelBtn");
        cancelBtn.addEventListener("click", () => {
            UI.closeProjectForm();
        })
    })
}

function openEachProjectEvent() {
    let eachProject = document.querySelectorAll(".eachProject");
    eachProject.forEach((project) => {
        project.addEventListener("click", (e) => {
            UI.vanishContent();
            UI.showOneProject(project.textContent)
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

let project = document.querySelector("#projects");
project.addEventListener("click", (e) => {
    UI.vanishContent();
    UI.showProject();
    openProjectEvent();
})


export {openFormEvent, deleteTodoEvent}