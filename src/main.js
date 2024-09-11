
let storage =localStorage.getItem("tasks")
let tasks = storage ? JSON.parse(storage) :[]

document.querySelector("#app").innerHTML = `
  <h1 class="text-3xl"> تسک های امروز</h1>
  <button id="add-task-btn" class="mt-10 btn border-2 border-dashed rounded-md p-4 input-bordered w-full">+ افزودن وظیفه ی جدید"</button>    

  <div id="task-form" class="hidden mt-4">
    <input type="text" id='task-title' placeholder='نام تسک' class='border p-2 rounded-md w-full mb-2' />
    <textarea id="task-dec" placeholder='توضیحات' class="border p-2 rounded-md w-full mb-2"></textarea>
    <button id="add-task-submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">اضافه کردن تسک</button>
  </div>
  <p id="task-count" class="mt-3"></p>

  <div id ="task-list"></div>
  
  <h1 id="done-task-title" class="text-2xl mt-10 hidden ">تسک های انجام شده</h2>
  <ul class="mt-2" id="done-task-list"></ul>
  
`;




  
const addTaskBtn = document.getElementById("add-task-btn");
const taskform = document.getElementById("task-form");

const inputTaskTitle = document.getElementById('task-title');
const inputTaskDec = document.getElementById('task-dec');
const addTaskSubmit = document.getElementById("add-task-submit");
const taskList = document.querySelector("#task-list");
const editBtn =document.querySelector("#edit")
const doneTaskTitle = document.querySelector("#done-task-title");
const doneTaskList = document.querySelector("#done-task-list");

  


  // Show form when adding task button is clicked. 
  addTaskBtn.addEventListener('click', function(){
    addTaskBtn.classList.add('hidden')
    taskform.classList.remove('hidden')
  });

  

  addTaskSubmit.addEventListener('click', function(){

    // Reset form after adding task.
    taskform.classList.add('hidden');
    addTaskBtn.classList.remove('hidden');
    

    const taskTitle = inputTaskTitle.value;
    const taskDec = inputTaskDec.value;
    console.log(taskTitle, taskDec)
    if(!taskTitle || !taskDec) throw new Error ("task cant be empty")


    const task = {
      id: new Date().getTime(),
      title: taskTitle,
      dec: taskDec,
      isCompleted: false,
      
    };

    // Clear input field after adding task.
    inputTaskTitle.value = "";  
    inputTaskDec.value = "";


    tasks.unshift(task)
    console.log(tasks)
    render();
  });



    

function render() {
  taskList.innerHTML = tasks
  .filter((task) => !task.isCompleted)
  .map(
    (task) =>
  `<div  class="m-5 p-7 h-30 flex justify-between items-center border-r-red-700 border-r-4  rounded-xl border border-gray-200 ">
  <div class="flex gap-5">
    <div class="form-control self-start">
      <label class="label cursor-pointer">
      <input data-id="${task.id}" type="checkbox" class="checkbox" />
      </label>
    </div>
    <div >
      <h3 class="font-bold mb-3">${task.title}</h3>
      <p class="text-gray-500">${task.dec}</p>
    </div>
  </div>
  <div  class=" flex flex-col  cursor-pointer gap-2" >
    <div>
      <img class="setting" src="./assets/Frame 1000005552.png" alt="setting">
    </div>
    <div class="settingList" data-id = ${task.id} class="flex gap-2 ">
      <button class="btn btn-sm delete">delete</button>
      <button class=" btn btn-sm edit">edit</button>
    </div>
  </div>
  
  
  <div id="task-form" class="hidden mt-4">
  <input type="text" id='task-title' placeholder='نام تسک' class='border p-2 rounded-md w-full mb-2' />
  <textarea id="task-dec" placeholder='توضیحات' class="border p-2 rounded-md w-full mb-2"></textarea>
  <button id="add-task-submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">اضافه کردن تسک</button>
  </div>
  </div>
  
  `).join("")
  localStorage.setItem("tasks",JSON.stringify(tasks))



  if (tasks.filter((task) => task.isCompleted).length > 0) {
    doneTaskTitle.classList.remove("hidden");
  } else {
    doneTaskTitle.classList.add("hidden");
  }
  
  doneTaskList.innerHTML = tasks
      .filter((task) => task.isCompleted)
      .map(
        (task) =>
        `<div  class="m-5 p-7 h-30 flex justify-between items-center border-r-red-700 border-r-4  rounded-xl border border-gray-200 ">
        <div class="flex gap-5">
          <div class="form-control self-start">
            <label class="label cursor-pointer">
            <input data-id="${task.id}" type="checkbox" checked="checked" class="checkbox" />
            </label>
          </div>
          <div >
            <h3 class="font-bold mb-3">${task.title}</h3>
            <p class="text-gray-500">${task.dec}</p>
          </div>
        </div>
        <div  class=" flex flex-col  cursor-pointer gap-2" >
          <div>
            <img class="setting" src="./assets/Frame 1000005552.png" alt="setting">
          </div>
          <div class="settingList" data-id = ${task.id} class="flex gap-2 ">
            <button class="btn btn-sm delete">delete</button>
            <button class=" btn btn-sm edit">edit</button>
          </div>
        </div>

  <div id="task-form" class="hidden mt-4">
  <input type="text" id='task-title' placeholder='نام تسک' class='border p-2 rounded-md w-full mb-2' />
  <textarea id="task-dec" placeholder='توضیحات' class="border p-2 rounded-md w-full mb-2"></textarea>
  <button id="add-task-submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">اضافه کردن تسک</button>
  </div>
        </div>`).join("")
 

    localStorage.setItem("tasks", JSON.stringify(tasks));
}
render();


taskList.addEventListener("click",(event)=>{


  if(event.target.classList.contains("delete")){
    const taskId = parseInt(event.target.parentNode.dataset.id)
    tasks=tasks.filter((task) => task.id !== taskId)
    render()
  }


  if(event.target.classList.contains("edit")){
    const taskId = parseInt(event.target.parentNode.dataset.id)
    const editForm = event.target.parentNode.parentNode.nextElementSibling
    const updateInput = editForm.firstElementChild;
    const updateButton = editForm.lastElementChild;
    const updateDescription = updateInput.nextElementSibling;
    if (editForm.classList.contains("hidden")) {
      editForm.classList.remove("hidden");
      editForm.classList.add("flex");
    } else {
      editForm.classList.remove("flex");
      editForm.classList.add("hidden");
    }
    

    updateButton.addEventListener("click", () => {
      tasks = tasks.map((task) =>
        task.id === taskId ? { ...task, title: updateInput.value, dec:updateDescription.value} : task
      );
      render();
    });
  }
 
})



taskList.addEventListener("click",(event)=>{
  if (event.target.classList.contains("checkbox")) {
    const taskId = parseInt(event.target.dataset.id);
    tasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    render();
  }
  
})



doneTaskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    const taskId = parseInt(event.target.parentNode.dataset.id);
    tasks = tasks.filter((task) => task.id !== taskId);
    render();
  }


  if (event.target.classList.contains("checkbox")) {
    const taskId = parseInt(event.target.dataset.id);
    tasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    render();
  }


  if (event.target.classList.contains("edit")) {
    const taskId = parseInt(event.target.parentNode.dataset.id);
    const editForm = event.target.parentNode.parentNode.nextElementSibling;
    const updateInput = editForm.firstElementChild;
    const updateButton = editForm.lastElementChild;
    const updateDescription = updateInput.nextElementSibling;

    if (editForm.classList.contains("hidden")) {
      editForm.classList.remove("hidden");
      editForm.classList.add("flex");
    } else {
      editForm.classList.remove("flex");
      editForm.classList.add("hidden");
    }

    updateButton.addEventListener("click", () => {
      tasks = tasks.map((task) =>
        task.id === taskId ? { ...task, title: updateInput.value, dec: updateDescription.value } : task
      );
      render();
    });

  }
});



render();