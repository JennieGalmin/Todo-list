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



dt.addEventListener("click", function(){
    dt.classList.toggle("task"); 
    dd.classList.toggle("taskDesc");

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








