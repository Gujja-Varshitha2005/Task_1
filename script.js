 function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle done on click
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });

  // Add delete button
  const span = document.createElement("span");
  span.textContent = "✖";
  span.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent toggle when deleting
    li.remove();
  });

  li.appendChild(span);
  taskList.appendChild(li);
  taskInput.value = "";
}