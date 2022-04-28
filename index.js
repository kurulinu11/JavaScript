let nextId = 1;

const getTaskNameAnDescription = function () {
    const taskName = document.querySelector("#task-name").value;
    const taskDescription = document.querySelector("#task-description").value;

    return {taskName, taskDescription};
};

const addTask = function(){
    const {taskName, taskDescription} = getTaskNameAnDescription();
    const listItem = document.createElement("li");

    listItem.classList = "list-group-item d-flex justify-content-between align-items-center";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-control-checkbox";
    checkbox.addEventListener("click", () => {
        if (checkbox.checked == true) {
            listItem.style.textDecoration = "line-through";
        } else {
            listItem.style.textDecoration = "none";
        }
    });

    const idSpan = document.createElement("span");
    idSpan.textContent = 1 + nextId;

    const taskNameSpan = document.createElement("span");
    taskNameSpan.textContent = taskName;

    const taskDescriptionSpan = document.createElement("span");
    taskDescriptionSpan.textContent = taskDescription;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList = "btn btn-danger";
    deleteButton.addEventListener("click", () => listItem.remove());

    listItem.append(
        checkbox,
        idSpan,
        taskNameSpan,
        taskDescriptionSpan,
        deleteButton
    );

    document.querySelector("#task-list").append(listItem);
    listItem.setAttribute("id", nextId);
    nextId++;
};

const addTaskButton = document.querySelector("#add-task-btn");
addTaskButton.addEventListener("click", addTask);

const clearTaskButton = document.querySelector("#clear-task-btn");

clearTaskButton.addEventListener("click", function handleClick(event) {
    event.preventDefault();

    const inputs = document.querySelectorAll("#task-name, #task-description")

    inputs.forEach(input => {
        input.value = '';
    });
});