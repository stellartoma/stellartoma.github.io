import {v4 as uuidV4} from "../_snowpack/pkg/uuid.js";
import confetti from "../_snowpack/pkg/canvas-confetti.js";
const list = document.querySelector("#list");
const listContainer = document.getElementById("list-container");
const form = document.getElementById("new-task-form");
const input = document.querySelector("#new-task-title");
const deleteAllBtn = document.querySelector("#delete-all-btn");
const message = document.querySelector("#message");
const titleEmoji = document.querySelector("#title-emoji");
const startDateDiv = document.querySelector("#start-date");
const endDateDiv = document.querySelector("#end-date");
const messageDiv = document.createElement("div");
const emptyListText = "Add a task to start a list!";
const emptyListEmoji = "🤒";
const fullListEmoji = "🤓";
const allCompleteEmoji = "";
const tasksListStartText = "List started: ";
const tasksCompletedText = "All tasks completed: ";
let alreadyDidCompleteAnimation = false;
document.addEventListener("DOMContentLoaded", checkListStatus);
deleteAllBtn?.addEventListener("click", deleteAll);
let tasks = loadTasks();
tasks.forEach(addListItem);
function checkListStatus() {
  let startDate = loadStartDate();
  if (startDate && startDateDiv) {
    startDateDiv.textContent = startDate;
  }
  if (startDate && tasks.length === 0) {
    removeStartDate();
  }
  let endDate = loadCompletionDate();
  if (endDate && endDateDiv) {
    endDateDiv.textContent = endDate;
  }
  hasNoItemsMessage();
  areAllTasksDone();
}
function changeTitleEmoji(icon) {
  titleEmoji?.replaceChildren("");
  titleEmoji?.append(icon);
}
function hasNoItemsMessage() {
  if (tasks.length === 0) {
    messageDiv.textContent = emptyListText;
    message?.append(messageDiv);
    if (listContainer !== null) {
      listContainer.className = "hide";
    }
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
  alreadyDidCompleteAnimation = false;
  if (tasks.length === 1) {
    let startDate = tasksListStartText + setStartDate();
    startDateDiv?.append(startDate);
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
      label.className = "completed_txt";
      item.className = "completed_item";
    } else {
      label.className = "";
      item.className = "";
      alreadyDidCompleteAnimation = false;
    }
    saveTasks();
    checkListStatus();
  });
  checkboxDelete.addEventListener("click", () => {
    deleteTask(task);
    label.remove();
    item.remove();
    checkListStatus();
  });
  saveTasks();
  checkbox.type = "checkbox";
  checkbox.className = "done-checkbox";
  checkbox.checked = task.completed;
  checkboxDelete.type = "button";
  checkboxDelete.id = "delete-btn";
  checkboxDelete.value = "x";
  if (task.completed === true) {
    label.className = "completed_txt";
    item.className = "completed_item";
  } else {
    label.className = "";
    item.className = "";
  }
  label.append(checkbox, task.title, checkboxDelete);
  item.append(label);
  list?.append(item);
  checkListStatus();
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
  if (tasksDone === true && tasks.length > 0) {
    if (loadCompletionDate() === null) {
      setCompletionDate();
    }
    let completionDate = loadCompletionDate();
    if (endDateDiv) {
      endDateDiv.textContent = completionDate;
    }
    changeTitleEmoji(allCompleteEmoji);
    if (listContainer !== null) {
      listContainer.className = "tasks_completed_bg";
    }
    if (alreadyDidCompleteAnimation === false) {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: {y: 0.6}
      });
      alreadyDidCompleteAnimation = true;
    }
  } else {
    changeTitleEmoji(fullListEmoji);
    removeCompletionDate();
    if (listContainer !== null) {
      listContainer.className = "";
    }
  }
  if (tasks.length === 0) {
    changeTitleEmoji(emptyListEmoji);
  }
}
function deleteTask(task) {
  let tasksFiltered = tasks.filter((item) => item.id !== task.id);
  tasks = tasksFiltered;
  saveTasks();
  areAllTasksDone();
  hasNoItemsMessage();
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
  localStorage.setItem("END_DATE", date.toUTCString());
  return date.toUTCString();
}
function loadStartDate() {
  let startDate = localStorage.getItem("START_DATE");
  if (startDate) {
    return tasksListStartText + startDate;
  }
  return null;
}
function loadCompletionDate() {
  let endDate = localStorage.getItem("END_DATE");
  if (endDate) {
    return tasksCompletedText + endDate;
  }
  return null;
}
function removeStartDate() {
  localStorage.removeItem("START_DATE");
  startDateDiv?.replaceChildren("");
}
function removeCompletionDate() {
  localStorage.removeItem("END_DATE");
  endDateDiv?.replaceChildren("");
}
