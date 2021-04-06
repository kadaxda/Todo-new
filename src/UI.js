import { todo } from "./index"

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
    static openForm() {
        let content = document.querySelector(".content");
        let openFormBtn = document.querySelector(".openFormBtn")
        let inputForm = document.createElement("div");
        
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
        content.insertBefore(inputForm, openFormBtn)
    }

    static closeForm() {
        let inputForm = document.querySelector(".inputForm");
        inputForm.parentElement.removeChild(inputForm)
    }

    static showDisplayTodo(title, dueDate, priority) {
        let content = document.querySelector(".content");
        
        let eachTodo = document.createElement("div");
        eachTodo.innerHTML = `<div class="eachTodo">
                                    <p>${title}</p>
                                    <p>Due: ${dueDate}</p>
                                    <p>Priority: ${priority}</p>
                                    <input type="button" value="delete" id="deleteBtn">
                                </div>`
        content.appendChild(eachTodo)
        
    }
}

export { UI }