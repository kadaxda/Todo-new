import { allTodos, allProjects } from "./index.js"
import { isThisWeek } from 'date-fns'


class UI {
    // displays Header and add button
    static displayInboxUI() {
        let content = document.querySelector(".content");
        let header = document.createElement("h2");
        header.textContent = "Inbox";
        content.appendChild(header);

        let openFormBtn = document.createElement("button");
        openFormBtn.setAttribute("type", "submit");
        openFormBtn.classList.add("openFormBtn")
        openFormBtn.textContent = "+";
        content.appendChild(openFormBtn);
    }
    // displays form after clicking on openformbtn
    static openForm() {
        let content = document.querySelector(".content");
        let openFormBtn = document.querySelector(".openFormBtn")
        let inputForm = document.createElement("div");
        inputForm.classList.add("InputFormContainer")
        inputForm.innerHTML = `<div class="inputForm">
                                    <label  for="title">Title: </label>
                                    <input id="titleInput" type="text">
                                    <label for="dueDate">Due Date: </label>
                                    <input id="dateInput" type="date">
                                    <label for="priority">Priority: </label>
                                    <div class="selectWrapper">
                                        <select id="selectInput">
                                        <option>high</option>
                                        <option>medium</option>
                                        <option>low</option>
                                        </select>
                                    </div>
                                    <input type="button" value="Add" id="addBtn">
                                    <input type="button" value="Cancel" id="cancelBtn">
                                </div>`;  
        content.insertBefore(inputForm, openFormBtn);
    }
    // closes form
    static closeForm() {
        let inputForm = document.querySelector(".inputForm");
        inputForm.parentElement.removeChild(inputForm)
    }

    static showDisplayTodo(title, dueDate, priority) {
        let content = document.querySelector(".content");
        
        let eachTodo = document.createElement("div");
        eachTodo.innerHTML = `<div class="eachTodo">
                                    <p id="title" >${title}</p>
                                    <p id="dueDate" >Due: ${dueDate}</p>
                                    <p>Priority: ${priority}</p>
                                
                                    <button id="deleteBtn"><i class="material-icons">delete</i></button>
                                    
                                </div>`
        content.appendChild(eachTodo);
        
    }

    static deleteTodo() {
        let todo = document.querySelector(".get-deleted");
        todo.parentElement.removeChild(todo);
    }

    static showValidationError() {
        let content = document.querySelector(".content");
        let InputFormContainer = document.querySelector(".InputFormContainer")
        let message = document.createElement("div");

        message.innerHTML = `<div class="validationError">
                                 <p>Please fill in every form!</p>
                            </div>`
        content.insertBefore(message, InputFormContainer);
        
    }

    static vanishContent() {
        let content = document.querySelector(".content");
        content.innerHTML = "";
    }

    static showEveryTodo() {
        allTodos.forEach((todo) => {
            console.log(todo)
            this.showDisplayTodo(todo.title, todo.dueDate, todo.priority)
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
                this.showDisplayTodo(todo.title, todo.dueDate, todo.priority);
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
                this.showDisplayTodo(todo.title, todo.dueDate, todo.priority);
            }
            
        })
    }

    static showProject() {
        let content = document.querySelector(".content");
        let header = document.createElement("h2");
        header.textContent = "Projects";
        content.appendChild(header);

        let openProjectsFormBtn = document.createElement("button");
        openProjectsFormBtn.setAttribute("type", "submit");
        openProjectsFormBtn.classList.add("openProjectsFormBtn")
        openProjectsFormBtn.textContent = "+";
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
        let sidebar = document.querySelector(".sidebar");
        let newProject = document.createElement("h4");
        newProject.textContent = project;
        sidebar.appendChild(newProject)
    }

    static showAllProjects() {
        let sidebar = document.querySelector(".sidebar");
        allProjects.forEach((project) => {
            let newProject = document.createElement("h4");
            newProject.classList.add("eachProject")
            newProject.textContent = project;
            sidebar.appendChild(newProject)
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
        let openFormBtn = document.createElement("button");
        openFormBtn.setAttribute("type", "submit");
        openFormBtn.classList.add("openFormBtn")
        openFormBtn.textContent = "+";
        content.appendChild(openFormBtn);
    }


}

export { UI }
