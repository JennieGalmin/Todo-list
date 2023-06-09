/* fetch('https://dummyjson.com/todos')
.then(res => res.json())
.then(console.log);*/

const inputBox = document.getElementById("myInput");
const list = document.getElementById("myUL");
const addButton = document.getElementById("btn");

function addTask(){
if(inputBox.value === ""){
    alert("Please enter task");
} else {

let li = document.createElement("li");
li.textContent = inputBox.value;
list.appendChild(li);


li.addEventListener("click", function(){
    li.classList.toggle("task"); 

 });

let span  = document.createElement("span");
span.innerHTML = "\u00d7";
li.appendChild(span);


span.addEventListener("click", function(){
    li.remove();
});
};

inputBox.value = "";
};

addButton.addEventListener("click", addTask);








/*let newTask = document.createElement("SPAN");
    let newText = document.createTextNode("");
}


    newTask.appendChild(newText);
    document.body.appendChild(newTask);


/*document.addEventListener("click", function(event){
     if(!event.target.matches("#btn")) return;

    fetch('https://dummyjson.com/todos')
.then(res => res.json())
.then((data)=> console.log(data));
});
*/