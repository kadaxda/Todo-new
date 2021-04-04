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
}

export { UI }