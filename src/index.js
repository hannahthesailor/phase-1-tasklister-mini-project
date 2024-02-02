document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const todoList = document.getElementById("tasks");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const taskInput = document.getElementById("new-task-description");
      const taskDescription = taskInput.value;
  
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;
      todoList.appendChild(taskItem);
  
      taskInput.value = "";
    });

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
});
});
