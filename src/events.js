import { UI } from "./UI"
import { allProjects, allTodos, todo } from "./index"
import { addTodo, deleteTodo, getObj, addProject,  deleteProject } from "./data"
import { saveTodos, saveProjects } from "./localstorage"


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

            saveTodos();
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
            saveTodos();

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

            //DATA
            addProject(titleInput.value)
            saveProjects();
            openEachProjectEvent();
            deleteProjectEvent();
        })

        let cancelBtn = document.querySelector("#cancelBtn");
        cancelBtn.addEventListener("click", () => {
            UI.closeProjectForm();
        })
    })
}

function openEachProjectEvent() {
    let eachProjectsHeader = document.querySelectorAll(".eachProjectsHeader");
    eachProjectsHeader.forEach((project) => {
        project.addEventListener("click", (e) => {
            UI.vanishContent();
            UI.showOneProject(project.textContent)
            openEachProjectsForm();
            UI.showOnlyProject(project.textContent);
            deleteProjectEvent();
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
            saveTodos();

            //UI
            UI.closeNewTodoForm();
            UI.displayOneTodo(title, date, priority);

            
            deleteProjectEvent();
            deleteTodoEvent();
            })
    })
}


function editTodoEvent() {
    let editBtns = document.querySelectorAll("#editBtn");


    editBtns.forEach((Btn) => {
        Btn.addEventListener("click", (e) => {

            console.log(Btn.parentElement.firstChild.textContent)
            title = Btn.parentElement.firstChild.textContent;

            let todoObj = getObj(title);
            console.log(todoObj)

            UI.showEditForm();

            let titleInput = document.querySelector("#titleEditInput");
            titleInput.value = todoObj.title;

            let dateInput = document.querySelector("#dueDateInput");
            dateInput.value = todoObj.dueDate;

            let textDescriptionInput = document.querySelector("#textDescriptionInput") ;
            
            textDescriptionInput.value = todoObj.textDescription;

            if(todoObj.textDescription == undefined) {
                textDescriptionInput.value = " ";
            }

            let priorityInput = document.querySelector("select");
            priorityInput.value = todoObj.priority;

            let addBtn = document.querySelector("#AddBtn");
            addBtn.addEventListener("click", (e) => {
                todoObj.title = titleInput.value;
                todoObj.dueDate = dateInput.value;
                todoObj.textDescription = textDescriptionInput.value;
                todoObj.priority = priorityInput.value;

                UI.closeEditForm();
                editTodoEvent();
                console.log(allTodos)
                saveTodos();
            })


            let cancelBtn = document.querySelector("#CancelBtn");
            cancelBtn.addEventListener("click", (e) => {
                UI.closeEditForm();
                editTodoEvent();
            })
        })
    })
}

function deleteProjectEvent() {
    let allProjectDeleteBtns = document.querySelectorAll(".ProjectDeleteBtn");
    allProjectDeleteBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            // DATA
            let projectName = btn.parentElement.parentElement.children[1].textContent;
            console.log(allProjects, projectName)
            deleteProject(projectName);
            saveProjects();
             // UI
            btn.parentElement.parentElement.parentElement.removeChild(btn.parentElement.parentElement)
             
        })
    })
}


let today = document.querySelector("#today");
today.addEventListener("click", (e) => {
    UI.vanishContent();
    UI.showOnlyToday();
    deleteTodoEvent();
    editTodoEvent()
    deleteProjectEvent();
})

let inbox = document.querySelector("#inbox");
inbox.addEventListener("click", (e) => {
    UI.vanishContent();
    UI.displayInboxUI();
    UI.displayEveryTodo();
    openFormEvent();
    deleteTodoEvent();
    editTodoEvent();
    deleteProjectEvent();
})


let week = document.querySelector("#week");
week.addEventListener("click", (e) => {
    UI.vanishContent();
    UI.showOnlyWeek();
    deleteTodoEvent();
    editTodoEvent();
    deleteProjectEvent();
})

let project = document.querySelector("#projects");
project.addEventListener("click", (e) => {
    UI.vanishContent();
    UI.displayProjectUI();
    openProjectEvent();
    editTodoEvent();
    deleteProjectEvent();
})


export {openFormEvent, deleteTodoEvent, openEachProjectEvent, editTodoEvent, deleteProjectEvent}