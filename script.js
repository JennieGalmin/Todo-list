/* fetch('https://dummyjson.com/todos')
.then(res => res.json())
.then(console.log);*/

const inputBox = document.getElementById("myInput");
const list = document.getElementById("myDl");
const addButton = document.getElementById("btn");
const descriptionBox = document.getElementById("descriptionInput");

function addTask(){
if(inputBox.value === ""){
    alert("Please enter task");
} else {

let dt = document.createElement("dt");
dt.textContent = inputBox.value;
list.appendChild(dt);

let dd = document.createElement("dd");
dd.textContent = descriptionBox.value;
list.appendChild(dd);

let removeButton = document.createElement("span");
removeButton.innerHTML = "\u00d7";
dd.appendChild(removeButton); 

let dateSpan = document.createElement("span");
let createdDate = new Date();
let dateString = createdDate.toLocaleString();
dateSpan.textContent = "created:" + dateString;
dt.appendChild(dateSpan);

let doneDate = document.createElement("span");
doneDate.classList.add("Done:");


dt.addEventListener("click", function(){
    dt.classList.toggle("task"); 
    dd.classList.toggle("taskDesc");

    let completionDate = document.createElement("span");
    completionDate.classList.add("completion-date");

    if(dt.classList.contains("task")){
       
    let completedDate = new Date();
    let newDate = completedDate.toLocaleString();
    completionDate.textContent = "completed:" + newDate;
    dd.appendChild(completionDate);
     } else {
        completionDate.textContent = "";
     }

});   



removeButton.addEventListener("click", function(){
   dt.remove();
    dd.remove();
});

}

inputBox.value = "";
descriptionBox.value = "";

}

addButton.addEventListener("click", addTask);








