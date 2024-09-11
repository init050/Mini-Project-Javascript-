
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
  <div id ="task-list"></div>


`;



document.addEventListener("DOMContentLoaded", function () {
  
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskform = document.getElementById("task-form");
  
  const inputTaskTitle = document.getElementById('task-title');
  const inputTaskDec = document.getElementById('task-dec');
  const addTaskSubmit = document.getElementById("add-task-submit");
  const taskList = document.querySelector("#task-list");
  const editBtn =document.querySelector("#edit")

  


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
    
    // render(); //TODO: It should be called after adding the Function render => UPDATE UI.
    function render() {
      taskList.innerHTML=tasks.map((task)=>
        `<div  class="m-5 p-7 h-30 flex justify-between items-center border-r-red-700 border-r-4  rounded-xl border border-gray-200 ">
          <div class="flex gap-5">
            <div class="form-control self-start">
              <label class="label cursor-pointer">
                <input type="checkbox" checked="checked" class="checkbox checkbox-primary border border-gray-400" />
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
            <div id ="dots" data-id = ${task.id} class="hidden flex gap-2 border border-gray-400 p-1 rounded-md">
              <img class="delete border-l-2 pl-2" src="./assets/tabler_trash-x.png" alt="delete">
              <img class="edit" src="./assets/tabler_edit.png" alt="edit">
            </div>
          </div>
      
         </div>`).join("")
         localStorage.setItem("tasks",JSON.stringify(tasks))
      
    }
    render();
    
   /* set.addEventListener("click", () =>{
      
      settingList.innerHTML =` 
      <div class="flex border p-2 rounded-sm">
        <img src="./tabler_trash-x.png" alt="delete">
        <img src="./tabler_edit.png" alt="edit">
      </div>
      `
    });
    */
  
    
    taskList.addEventListener("click",(event)=>{
      if(event.target.classList.contains("delete")){
        const taskId = parseInt(event.target.parentNode.dataset.id)
        tasks=tasks.filter((task) => task.id !== taskId)
      render();   
      }
 
      
      if(event.target.classList.contains("edit")){
        const taskId = parseInt(event.target.parentNode.dataset.id)
        tasks=tasks.map((task) =>
        task.id === taskId ?{...task,title:"newtitle"}:task)
      render();  
      }
      if(event.target.classList.contains("setting")){
        const set = event.target.parentNode.nextElementSibling 
        set.classList.remove('hidden')
      }
      /* if(event.target.classList.contains("setting")){
        settingList.innerHTML =` 
        <div class="flex border p-2 rounded-sm">
          <img src="./tabler_trash-x.png" alt="delete">
          <img src="./tabler_edit.png" alt="edit">
        </div>
        `
        
       } 
        */
        


    })
   /* editBtn.addEventListener("click",()=>{
      
      
    })
    */
  

});
