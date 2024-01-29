import {v4 as uuidV4} from "../_snowpack/pkg/uuid.js";
import confetti from "../_snowpack/pkg/canvas-confetti.js";
const list = document.querySelector("#list");
const form = document.getElementById("new-task-form");
const input = document.querySelector("#new-task-title");
const deleteAllBtn = document.querySelector("#delete-all-btn");
const message = document.querySelector("#message");
const titleEmoji = document.querySelector("#title-emoji");
const startDateDiv = document.querySelector("#start-date");
const endDateDiv = document.querySelector("#end-date");
const messageDiv = document.createElement("div");
const emptyListText = "There are no items logged!";
const emptyListEmoji = "🤒";
const fullListEmoji = "🤓";
const allCompleteEmoji = "🥳";
document.addEventListener("DOMContentLoaded", hasNoItemsMessage);
deleteAllBtn?.addEventListener("click", deleteAll);
let tasks = loadTasks();
tasks.forEach(addListItem);
let startDate = loadStartDate();
if (startDate) {
  startDateDiv?.append(startDate);
}
if (startDate && tasks.length === 0) {
  removeStartDate();
}
let endDate = loadCompletionDate();
if (endDate) {
  endDateDiv?.append(endDate);
}
function changeTitleEmoji(icon) {
  titleEmoji?.replaceChildren("");
  titleEmoji?.append(icon);
}
function hasNoItemsMessage() {
  if (tasks.length === 0) {
    messageDiv.textContent = emptyListText;
    message?.append(messageDiv);
    changeTitleEmoji(emptyListEmoji);
    removeStartDate();
    removeCompletionDate();
  } else {
    messageDiv.remove();
    changeTitleEmoji(fullListEmoji);
  }
}
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input?.value == "" || input?.value == null)
    return;
  const newTask = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  };
  tasks.push(newTask);
  if (tasks.length === 1) {
    let startDate2 = setStartDate();
    startDateDiv?.append(startDate2);
    console.log(startDate2);
  }
  if (loadCompletionDate()) {
    removeCompletionDate();
  }
  addListItem(newTask);
  input.value = "";
});
function addListItem(task) {
  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  const checkboxDelete = document.createElement("input");
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    if (task.completed === true) {
      label.className = "completed";
    } else {
      label.className = "";
    }
    saveTasks();
    areAllTasksDone();
  });
  checkboxDelete.addEventListener("click", () => {
    deleteTask(task);
    label.remove();
    item.remove();
  });
  saveTasks();
  checkbox.type = "checkbox";
  checkbox.className = "done-checkbox";
  checkbox.checked = task.completed;
  checkboxDelete.type = "button";
  checkboxDelete.id = "delete-btn";
  checkboxDelete.value = "x";
  if (task.completed === true) {
    label.className = "completed";
  } else {
    label.className = "";
  }
  label.append(checkbox, task.title, checkboxDelete);
  item.append(label);
  list?.append(item);
  hasNoItemsMessage();
}
function saveTasks() {
  localStorage.setItem("TASKS", JSON.stringify(tasks));
}
function loadTasks() {
  let taskJSON = localStorage.getItem("TASKS");
  if (taskJSON === null)
    return [];
  return JSON.parse(taskJSON);
}
function areAllTasksDone() {
  let tasksDone = true;
  tasks.forEach((item) => {
    if (item.completed === false) {
      tasksDone = false;
    }
  });
  if (tasksDone === true) {
    setCompletionDate();
    let completionDate = loadCompletionDate();
    if (completionDate) {
      endDateDiv?.append(completionDate);
    }
    changeTitleEmoji(allCompleteEmoji);
    confetti({
      particleCount: 120,
      spread: 70,
      origin: {y: 0.6}
    });
  } else {
    changeTitleEmoji(fullListEmoji);
    removeCompletionDate();
  }
}
function deleteTask(task) {
  let tasksFiltered = tasks.filter((item) => item.id !== task.id);
  tasks = tasksFiltered;
  saveTasks();
  hasNoItemsMessage();
  areAllTasksDone();
}
function deleteAll() {
  list?.replaceChildren("");
  startDateDiv?.replaceChildren("");
  tasks = [];
  saveTasks();
  hasNoItemsMessage();
}
function setStartDate() {
  let date = new Date();
  localStorage.setItem("START_DATE", date.toUTCString());
  return date.toUTCString();
}
function setCompletionDate() {
  let date = new Date();
  localStorage.setItem("END_DATE", "All tasks completed On: " + date.toUTCString());
  return date.toUTCString();
}
function loadStartDate() {
  let startDate2 = localStorage.getItem("START_DATE");
  if (startDate2) {
    return startDate2;
  }
}
function loadCompletionDate() {
  let endDate2 = localStorage.getItem("END_DATE");
  if (endDate2) {
    return endDate2;
  }
}
function removeStartDate() {
  localStorage.removeItem("START_DATE");
  startDateDiv?.replaceChildren("");
}
function removeCompletionDate() {
  localStorage.removeItem("END_DATE");
  endDateDiv?.replaceChildren("");
}
