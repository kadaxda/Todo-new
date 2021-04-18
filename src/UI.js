import { allTodos, allProjects } from "./index.js"
import { isThisWeek } from 'date-fns'
import { openFormEvent, deleteTodoEvent, openEachProjectEvent, editTodoEvent } from "./events"


class UI {
    // displays Header and openFormBtn
    static displayInboxUI() {
        let content = document.querySelector(".content");
        let header = document.createElement("h2");
        header.textContent = "Inbox";
        content.appendChild(header);

        let openFormBtn = document.createElement("div")
        openFormBtn.classList.add("openFormBtn")
        openFormBtn.innerHTML = `<span class="material-icons-outlined" id="newTodoLogo">add</span>`
        content.appendChild(openFormBtn);
    }
    // displays form after clicking on openFormBtn
    static openNewTodoForm() {
        //Checks if there is alerady the todo form open
        let temp = document.getElementsByClassName("InputFormContainer")
        console.log(temp.length)
        if(temp.length > 0) {
            return;
        }

        let content = document.querySelector(".content");
        let openFormBtn = document.querySelector(".openFormBtn")
        let inputForm = document.createElement("div");
        inputForm.classList.add("InputFormContainer")
        inputForm.innerHTML = `<div class="inputForm">
                                    <label  for="title">Title: </label>
                                    <input id="titleInput" type="text">
                                    <label for="dueDate">Due Date: </label>
                                    <input id="dateInput" type="date">
                                 
                                    <input type="button" value="Add" id="addBtn">
                                    <input type="button" value="Cancel" id="cancelBtn">
                                </div>`;  

        

        content.insertBefore(inputForm, openFormBtn);
    }
    // closes form
    static closeNewTodoForm() {
        let inputForm = document.querySelector(".inputForm");
        inputForm.parentElement.removeChild(inputForm)
    }

    // displays one todo
    static displayOneTodo(title, dueDate, priority) {
        let content = document.querySelector(".content");
        let eachTodo = document.createElement("div");
        eachTodo.classList.add("eachTodo");
        let titleText = document.createElement("p");
        titleText.setAttribute("id", "title");
        titleText.textContent  = title;

        let dueDateText = document.createElement("p");
        dueDateText.setAttribute("id", "date");
        dueDateText.textContent  = `Due: ${dueDate}`;

        let editBtn = document.createElement("div");
        editBtn.setAttribute("id", "editBtn");
        editBtn.innerHTML = `<span>edit</span>`

        let deleteBtn = document.createElement("div");
        deleteBtn.setAttribute("id", "deleteBtn");
        deleteBtn.innerHTML = `<span class="material-icons-outlined">delete</span>`;

        eachTodo.appendChild(titleText)
        eachTodo.appendChild(dueDateText)
        eachTodo.appendChild(editBtn)
        eachTodo.appendChild(deleteBtn)

        content.appendChild(eachTodo);

        // changes color for priority
        switch(priority) {
            case "low":
                eachTodo.classList.add("lowPriority");
                break;
            case "medium": 
                eachTodo.classList.add("mediumPriority");
                break;
            case "high":
                eachTodo.classList.add("highPriority");
                break;
        }
        editTodoEvent();
    }

    // deletes Todo
    static deleteTodo() {
        let todo = document.querySelector(".get-deleted");
        todo.parentElement.removeChild(todo);
    }

    // shows Validation Error when user input isnt good
    static showValidationError() {
        let content = document.querySelector(".content");
        let InputFormContainer = document.querySelector(".InputFormContainer")
        let message = document.createElement("div");

        message.innerHTML = `<div class="validationError">
                                 <p>Please fill in every form!</p>
                            </div>`
        content.insertBefore(message, InputFormContainer);
        
        function clearError() {
            content.removeChild(message)
        }

        setTimeout(clearError, 3000)
    }


    // deletes everything On .content Class
    static vanishContent() {
        let content = document.querySelector(".content");
        content.innerHTML = "";
    }

    // Lists every todo in content
    static displayEveryTodo() {
        allTodos.forEach((todo) => {
            this.displayOneTodo(todo.title, todo.dueDate, todo.priority)
        })
    }

    static showOnlyToday() {
        let content = document.querySelector(".content");
        let header = document.createElement("h2");
        header.textContent = "Today";
        content.appendChild(header);

        allTodos.forEach((todo) => {
            let today = new Date().toISOString().slice(0, 10)
            if(today == todo.dueDate) {
                this.displayOneTodo(todo.title, todo.dueDate, todo.priority);
            }
            
        })
    }

    static showOnlyWeek() {
        let content = document.querySelector(".content");
        let header = document.createElement("h2");
        header.textContent = "This week";
        content.appendChild(header);

        allTodos.forEach((todo) => {
            let YYYY = todo.dueDate.slice(0, 4);
            let MM = todo.dueDate.slice(5, 7) - 1;
            let DD = todo.dueDate.slice(8, 10);
            
            if(isThisWeek(new Date(YYYY, MM, DD))) {
                this.displayOneTodo(todo.title, todo.dueDate, todo.priority);
            }
            
        })
    }

    static showOnlyProject(projectName) {
        allTodos.forEach((todo) => {
            if(todo.project == projectName) {
                this.displayOneTodo(todo.title, todo.dueDate, todo.priority);
            }
        })
    }

    static displayProjectUI() {
        let content = document.querySelector(".content");
        let header = document.createElement("h2");
        header.textContent = "Projects";
        content.appendChild(header);

        let openProjectsFormBtn = document.createElement("div")
        openProjectsFormBtn.classList.add("openProjectsFormBtn")
        openProjectsFormBtn.innerHTML = `<span class="material-icons-outlined" id="newTodoLogo">add</span>`
        content.appendChild(openProjectsFormBtn);
    }

    static openProjectsForm() {
        let content = document.querySelector(".content");
        let openProjectsFormBtn = document.querySelector(".openProjectsFormBtn")
        let projectForm = document.createElement("div");
        projectForm.classList.add("projectFormContainer")
        projectForm.innerHTML = `<div class="projectForm">
                                    <label  for="title">Title: </label>
                                    <input id="titleInput" type="text">
                                    <input type="button" value="Add" id="addBtn">
                                    <input type="button" value="Cancel" id="cancelBtn">
                                </div>`;  
        content.insertBefore(projectForm, openProjectsFormBtn);
    }

    static addProject(project) {
        console.log(project)
        let sidebar = document.querySelector(".sidebar");
        let projectContainer = document.createElement("div");
        projectContainer.classList.add("eachProject")


        let newProject = document.createElement("div");
        newProject.innerHTML = `<div class="eachProjectsHeader">${project}</div>`

        let sidebarLogo = document.createElement("div");
        sidebarLogo.innerHTML = `<div class="eachProjectsLogo"><span class="material-icons" id="projectSidebarLogo">list</span></div>`

        let deleteBtn = document.createElement("div");
        deleteBtn.innerHTML = `<div class="ProjectDeleteBtn"> <span class="material-icons-outlined" id="deleteLogo">delete</span></div>`

        projectContainer.appendChild(sidebarLogo)
        projectContainer.appendChild(newProject)
        projectContainer.appendChild(deleteBtn)
        sidebar.appendChild(projectContainer)

    }

    // shows all projects in the sidebar
    static showAllProjects() {
        console.log(allProjects)
        allProjects.forEach((Myproject) => {
            UI.addProject(Myproject)
        })
    }

    static closeProjectForm() {
        let projectForm = document.querySelector(".projectForm");
        projectForm.parentElement.removeChild(projectForm)
    }

    static showOneProject(project) {
        //Display the right header of the Project
        let content = document.querySelector(".content");
        let projectHeader = document.createElement("h3");
        projectHeader.classList.add("projectHeader")
        projectHeader.textContent = project;
        content.appendChild(projectHeader);

        //Add a "add todo" button to the project
        let openFormBtn = document.createElement("div")
        openFormBtn.classList.add("openFormBtn")
        openFormBtn.innerHTML = `<span class="material-icons-outlined" id="newTodoLogo">add</span>`
        content.appendChild(openFormBtn);
    }

   static showEditForm() {
       UI.vanishContent();
       let content = document.querySelector(".content");
       let expandTodo = document.createElement("div");
       expandTodo.innerHTML = 
       `<div class="expandTodo">
            <label for="title">Title: </label>
            <input id="titleEditInput" type="text">
            <label for="dueDate">Due Date: </label>
            <input id="dueDateInput" type="date">

            <label for="textDescription">Text Description: </label>
            <input id="textDescriptionInput" type="text">
            <label for="priority">Priority: </label>
            <div class="selectWrapper">
                <select id="select">
                <option>high</option>
                <option>medium</option>
                <option>low</option>
                </select>
            </div>
            <div class="addAndCancelContainer">
                <input type="button" value="Add" id="AddBtn">
                <input type="button" value="Cancel" id="CancelBtn">
            </div>
        </div>`
        content.appendChild(expandTodo)
   }

   static closeEditForm() {
       let editForm = document.querySelector(".expandTodo");
       editForm.innerHTML = "";
                this.vanishContent();
                UI.displayInboxUI(); // displays InboxUI in content (header, openFormBtn)
                this.vanishSidebar();
                UI.displayEveryTodo(); // lists every todo in content
                UI.showAllProjects(); //shows all projects in the sidebar
                openFormEvent(); // Press on openFormBtn -> Opens input Form; Add/ Cancel Btn
                if(allProjects.length >= 1) {
                    openEachProjectEvent(); //if there is a project -> you can click on it
                }
                deleteTodoEvent(); //lets you delete the todos
                editTodoEvent();
   }

   static vanishSidebar() {
       let eachProjects = document.querySelectorAll(".eachProject");
       eachProjects.forEach((project) => {
           project.parentElement.removeChild(project)
       })

   }

}

export { UI }
