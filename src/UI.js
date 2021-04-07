import { allTodos } from "./index.js"
import { isThisWeek, toDate  } from 'date-fns'
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
        allTodos.forEach((todo) => {
            let today = new Date().toISOString().slice(0, 10)
            if(today == todo.dueDate) {
                this.showDisplayTodo(todo.title, todo.dueDate, todo.priority);
            }
            
        })
    }

    static showOnlyWeek() {
        allTodos.forEach((todo) => {
            let today = new Date().toISOString().slice(0, 10);
            console.log(toDate(todo.dueDate))
            if(isThisWeek(todo.dueDate)) {
                this.showDisplayTodo(todo.title, todo.dueDate, todo.priority);
            }
            
        })
    }
}

export { UI }
