import { todo } from "./index";
import { allTodos, allProjects } from "./index.js";

// Adds todo to allTodos
function addTodo(title, date, priority, project) {
  let newTodo = new todo(title, date, priority, project);
}

// Removes todo on allTodos
function deleteTodo() {
  let todo = document.querySelector(".get-deleted");
  let title = todo.firstElementChild.textContent;

  for (let i = 0; i < allTodos.length; i++) {
    if (allTodos[i].title == title) {
      allTodos.splice(i, 1);
      console.log(allTodos);
    }
  }
}

// Return the right object
function getObj(title) {
  for (let i = 0; i < allTodos.length; i++) {
    if (allTodos[i].title == title) {
      return allTodos[i];
    }
  }
}

function addProject(title) {
  allProjects.push(title);
}

function deleteProject(projectName) {
  for (let i = 0; i < allProjects.length; i++) {
    if (allProjects[i] == projectName) {
      allProjects.splice(i, 1);
      console.log(allProjects);
    }
  }
}

export { addTodo, deleteTodo, getObj, addProject, deleteProject };
