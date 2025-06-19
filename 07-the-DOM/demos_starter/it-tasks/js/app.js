const service = new TaskService();

function displayTitle() {
   
    // add the Task List title
    const title = service.getListTitle();

    const header = document.getElementById("task-header");
    header.innerText = title;
   
}

// get the list of all tasks and
// create all rows
function displayTasks() {
   
    const tasks = service.getTasks();
    console.log(tasks);

    const todoContainer = document.getElementById("todos");

    // this is a loop - we will deal with EACH task
    // one at a time
    tasks.forEach(task => {

        // create a new DIV
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task")
        if(task.priority == 1) taskDiv.classList.add("high");
        if(task.priority == 2) taskDiv.classList.add("medium");

        // add the title of the task to the div
        taskDiv.innerText = task.title;

        // add the div to the task list cointainer
        todoContainer.appendChild(taskDiv)
    })

    
}



displayTitle();
displayTasks();

