// alert("UWAGA alert!");
// const root = document.querySelector("#root");
// root.style.height = "400px";
// root.style.width = "400px";
// root.style.backgroundColor = "blue";
let nextId = 1;

const newTaskElement = function(taskText) {
    const div = document.createElement("div");

    const idSpan = document.createElement("span");
    idSpan.textContent = "ID: " + nextId; // lub: `ID: ${nextId}`;

    const taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = taskText + " ";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Usun";

    const doneButton = document.createElement("button");
    doneButton.textContent = "Zrobiono";

    deleteButton.addEventListener("click", () => div.remove());

    doneButton.addEventListener("click", () => {
        if (doneButton.textContent === "Zrobiono") {
            div.style.textDecoration = "line-through";
            doneButton.textContent = "Wykonaj";
        } else {
            div.style.textDecoration = "none";
            doneButton.textContent = "Zrobiono";
        }
    });

    div.append(idSpan, taskTextSpan, deleteButton, doneButton);
    document.querySelector("#task-list").append(div);

    div.setAttribute("id", nextId); // lub: div.id = nextId;
    nextId++;
};

const getTaskText = function() {
    const taskTextInput = document.querySelector("#task-text");
    return taskTextInput.value;
};

const submitTaskButton = document.querySelector("#submit-task");
submitTaskButton.addEventListener("click", () => {
    const taskText = getTaskText();
    newTaskElement(taskText);
});


