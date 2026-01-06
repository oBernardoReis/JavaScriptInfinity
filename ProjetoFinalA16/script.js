const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");

{
  id: 123456;
  text: "Estudar JavaScript";
  completed: false;
}

function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  list.innerHTML = "";
  const tasks = getTasks();

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.classList.toggle("completed", task.completed);

    const span = document.createElement("span");
    span.textContent = task.text;
    span.addEventListener("click", () => toggleTask(task.id));

    const actions = document.createElement("div");
    actions.className = "actions";

    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.onclick = () => editTask(task.id);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑";
    deleteBtn.onclick = () => deleteTask(task.id);

    actions.append(editBtn, deleteBtn);
    li.append(span, actions);
    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const tasks = getTasks();

  tasks.push({
    id: Date.now(),
    text: input.value,
    completed: false
  });

  saveTasks(tasks);
  input.value = "";
  renderTasks();
});

function toggleTask(id) {
  const tasks = getTasks();
  const task = tasks.find(t => t.id === id);
  task.completed = !task.completed;

  saveTasks(tasks);
  renderTasks();
}

function editTask(id) {
  const tasks = getTasks();
  const task = tasks.find(t => t.id === id);

  const newText = prompt("Editar tarefa:", task.text);
  if (newText) {
    task.text = newText;
    saveTasks(tasks);
    renderTasks();
  }
}

function deleteTask(id) {
  const tasks = getTasks().filter(t => t.id !== id);
  saveTasks(tasks);
  renderTasks();
}

renderTasks();
