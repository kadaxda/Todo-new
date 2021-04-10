import { UI } from "./UI"
import { allProjects, todo } from "./index"
import { addTodo, deleteTodo, getObj } from "./data"


// Press on + button -> Opens input Form
function openFormEvent() {
    let openFormBtn = document.querySelector(".openFormBtn");
    openFormBtn.addEventListener("click", (e) => {
        
        UI.openNewTodoForm()
        // Cancel Btn closes form
        let cancelBtn = document.querySelector("#cancelBtn");
        cancelBtn.addEventListener("click", function(e) {
            //UI
            UI.closeNewTodoForm()
        })

        let addBtn = document.querySelector("#addBtn");
        addBtn.addEventListener("click", (e) => {

            //DATA
            let title = document.querySelector("#titleInput").value;
            let date = document.querySelector("#dateInput").value;
            let priority = "low";
            let project = "standard";
            if(title == "" || date == "" || priority == "") {
                UI.showValidationError();
                return;
            }
            addTodo(title, date, priority, project, "");

            //UI
            UI.closeNewTodoForm();
            UI.displayOneTodo(title, date, priority);

            deleteTodoEvent();
            editTodoEvent()
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
            openEachProjectsForm();
            UI.showOnlyProject(project.textContent);
        })
    })
}

function openEachProjectsForm() {
    let eachProjectFormBtn = document.querySelector(".openFormBtn");
    eachProjectFormBtn.addEventListener("click", (e) => {
        let projectName = document.querySelector(".projectHeader").textContent;
        UI.openNewTodoForm();

        let cancelBtn = document.querySelector("#cancelBtn");
        cancelBtn.addEventListener("click", function(e) {
            //UI
            UI.closeNewTodoForm()
        }) 

        let addBtn = document.querySelector("#addBtn");
        addBtn.addEventListener("click", (e) => {

            //DATA
            let title = document.querySelector("#titleInput").value;
            let date = document.querySelector("#dateInput").value;
            let priority = "low";
            let project = projectName;
            if(title == "" || date == "" || priority == "") {
                UI.showValidationError();
                return;
            }
            addTodo(title, date, priority, project);

            //UI
            UI.closeNewTodoForm();
            UI.displayOneTodo(title, date, priority);

            
    
            deleteTodoEvent();
            })
    })
}


function editTodoEvent() {
    let editBtns = document.querySelectorAll("#editBtn");
    editBtns.forEach((Btn) => {
        Btn.addEventListener("click", (e) => {
            Btn.parentElement.classList.add("edit");

            UI.showEditForm();
        })
    })
}



let today = document.querySelector("#today");
today.addEventListener("click", (e) => {
    UI.vanishContent();
    UI.showOnlyToday();
    deleteTodoEvent();
    editTodoEvent()
})

let inbox = document.querySelector("#inbox");
inbox.addEventListener("click", (e) => {
    UI.vanishContent();
    UI.displayInboxUI();
    UI.displayEveryTodo();
    openFormEvent();
    deleteTodoEvent();
    editTodoEvent()
})


let week = document.querySelector("#week");
week.addEventListener("click", (e) => {
    UI.vanishContent();
    UI.showOnlyWeek();
    deleteTodoEvent();
    editTodoEvent()
})

let project = document.querySelector("#projects");
project.addEventListener("click", (e) => {
    UI.vanishContent();
    UI.displayProjectUI();
    openProjectEvent();
    editTodoEvent()
})


export {openFormEvent, deleteTodoEvent, openEachProjectEvent, editTodoEvent}