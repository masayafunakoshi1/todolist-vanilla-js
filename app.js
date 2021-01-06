//DOM Elements
const forms = document.forms;
const list = document.querySelector(".tasks-list");
const completeList = document.querySelector(".completed-tasks-list");


//complete tasks
list.addEventListener("click", function(e){
    if(e.target.className === "completeBtn"){
        const li = e.target.parentElement.parentElement;
        //Cloning list item
        const clonedLi = li.cloneNode(true);
        li.parentElement.removeChild(li);
         //Appending list item into new list
        completeList.appendChild(clonedLi);

        //Adding new buttons and deleting old buttons 
        const deleteBtn = document.createElement("button");

        deleteBtn.textContent="Delete Task";
        clonedLi.appendChild(deleteBtn);

        //Adding classes of complete-list and deleting classes of todo-list
        deleteBtn.classList.add("deleteBtn");
        clonedLi.classList.add("completed-tasks");
        clonedLi.classList.remove("tasks")
        ////////// Still attempting to remove "completeBtn" from <li> when cloned to completed list

    }
});

completeList.addEventListener("change", function(e){
    if(e.element === "li"){
        e.removeChild(completeBtnHandler)
    }
})


//delete tasks from completed list
completeList.addEventListener("click", function(e){
    if(e.target.className === "deleteBtn") {
        const completedLi = e.target.parentElement;

        completedLi.parentElement.removeChild(completedLi)
    }
})

//add tasks
const addForm = forms["add-task-form"]
addForm.addEventListener("submit", function(e){
    e.preventDefault();

    //create elements
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement("li");
    const task = document.createElement("span");
    const completeBtn = document.createElement("button");

    //adding text content
    task.textContent = value;
    completeBtn.textContent = "Complete Task"

    //appending new elements to DOM
    li.appendChild(task);
    li.appendChild(completeBtn);
    list.appendChild(li);

    //adding Classes
    li.classList.add("tasks");
    completeBtn.classList.add("completeBtn")

    //Input bar becomes blank after submit
    const resetInput = () => {
        document.querySelector('input[type="text"]').value = "";
    }
    resetInput();
})