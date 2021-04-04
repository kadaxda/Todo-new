import { UI } from "./UI"

// contains every todo
let allTodos = [];

// todo class
class todo {
    constructor(title, dueDate, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}

UI.displayInboxUI()


// EVENTS
// Press on + button -> Opens input Form
let openFormBtn = document.querySelector(".openFormBtn");
openFormBtn.addEventListener("click", (e) => {
    let content = document.querySelector(".content");

    let inputForm = document.createElement("div");
    inputForm.innerHTML = `<div class="inputForm">
                                <label for="title">Title: </label>
                                <input type="text">
                                <label for="dueDate">Due Date: </label>
                                <input type="date">
                                <label for="priority">Priority: </label>
                                <div class="selectWrapper">
                                    <select>
                                    <option>high</option>
                                    <option>medium</option>
                                    <option>low</option>
                                    </select>
                                </div>
                                <input type="button" value="Add">
                                <input type="button" value="Cancel" id="cancelBtn">
                            </div>`;  

    content.insertBefore(inputForm, openFormBtn  )

    //Press on Cancel button
    let cancelBtn = document.querySelector("#cancelBtn");
    cancelBtn.addEventListener("click", function(e) {
    let inputForm = document.querySelector(".inputForm");
    inputForm.parentElement.removeChild(inputForm)
})
})



export { todo }