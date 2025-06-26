const service = new TaskService("Daily");
const service2 = new TaskService(2);

function displayTitle() {
   
    // add the Task List title
    const title = service.getListTitle();

    const header = document.getElementById("task-header");
    header.innerText = title;
   
}

// must add async/await pattern here because the service.getTasks() function is an async function
async function displayTasks() {
    // get the list of all tasks and
    // create all rows
   
    let tasks = await service.getTasks();

    // sort the list - low number first
    tasks = tasks.sort((left, right) => {
        if(left.priority <= right.priority) 
            return -1;
        else
            return 1;
    })

    // add priorityText to each task (map to new object)
    tasks = tasks.map(task => {

        let priorityTempText = "high";
        switch(task.priority)
        {
            case 1:
                priorityTempText = "high";
                break;
            case 2:
                priorityTempText = "medium";
                break;
            default:
                priorityTempText = "low";
        }

        return {
            // id: task.id,
            // dueDate: task.dueDate,
            // priority: task.priority,
            // title: task.title,
            ...task,
            priorityText: priorityTempText
        };

    })


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

        //1. create the date div
        const dateDiv = document.createElement("div");
        dateDiv.classList.add("date");

        const date = new Date(task.dueDate);
        // console.log(typeof(date))
        const dateText = (date.getMonth() + 1) + "/" + (date.getDate() + 1)
        
        dateDiv.innerText = dateText;
        taskDiv.appendChild(dateDiv);

        //2. create priority button div
        const priorityButtonDiv = document.createElement("div");
        priorityButtonDiv.classList.add("priority-" + task.priorityText)
        taskDiv.appendChild(priorityButtonDiv);

        //3. create priority text div
        const priorityDiv = document.createElement("div");
        priorityDiv.innerText = task.priorityText;
        priorityDiv.classList.add("priority");
        taskDiv.appendChild(priorityDiv);

        //4. create the title div
        const titleDiv = document.createElement("div");
        titleDiv.classList.add("title");
        titleDiv.textContent = task.title;
        taskDiv.appendChild(titleDiv);

        // add the click event to the div
        taskDiv.addEventListener('click', () => {
            completeTask(taskDiv);
        });

        // add the task div to the task list cointainer
        todoContainer.appendChild(taskDiv)
    })

    
}

function completeTask(taskDiv)
{
    // find the container
    const todoContainer = document.getElementById("todos");

    todoContainer.removeChild(taskDiv);

    taskDiv.classList.remove("high")
    taskDiv.classList.remove("medium")
    taskDiv.classList.add("complete")
    todoContainer.appendChild(taskDiv);
}

function completeTasks() {

    const taskDivs = document.querySelectorAll(".task")

    taskDivs.forEach(taskDiv => {
        completeTask(taskDiv);
    })
}

function init()
{
    // this code will only run after the whole page has loaded (DOM)
    displayTitle();
    displayTasks();

    const completeButton = document.getElementById("completeButton");
    completeButton.addEventListener('click', completeTasks);
}

document.addEventListener('DOMContentLoaded', init)

