import { allTodos, allProjects } from "./index.js";
// Local storage

export function saveTodos() {
  localStorage.setItem("allTodos", JSON.stringify(allTodos));
}

export function loadTodos() {
  if (JSON.parse(localStorage.getItem("allTodos")) == null) {
    return;
  }
  allTodos = JSON.parse(localStorage.getItem("allTodos"));
}

export function saveProjects() {
  localStorage.setItem("allProjects", JSON.stringify(allProjects));
}

export function loadProjects() {
  if (JSON.parse(localStorage.getItem("allProjects")) == null) {
    return;
  }
  allProjects = JSON.parse(localStorage.getItem("allProjects"));
}
