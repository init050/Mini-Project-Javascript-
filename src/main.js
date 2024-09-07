import './output.css'


let tasks = []

document.querySelector("#app").innerHTML = `
  <h1 class="text-3xl"> تسک های امروز</h1>
  <button id="add-task-btn" class="mt-10 btn border-2 border-dashed rounded-md p-4 input-bordered w-full">+ افزودن وظیفه ی جدید"</button>    

  <div id="task-form" class="hidden mt-4">
    <input type="text" id='task-title' placeholder='نام تسک' class='border p-2 rounded-md w-full mb-2' />
    <textarea id="task-dec" placeholder='توضیحات' class="border p-2 rounded-md w-full mb-2"></textarea>
    <button id="add-task-submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">اضافه کردن تسک</button>
  </div>


`;


document.addEventListener("DOMContentLoaded", function () {
  
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskform = document.getElementById("task-form");
  
  const inputTaskTitle = document.getElementById('task-title');
  const inputTaskDec = document.getElementById('task-dec');

  const addTaskSubmit = document.getElementById("add-task-submit");


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
    
    // render(); //TODO: It should be called after adding the Function render => UPDATE UI.

  });

});








