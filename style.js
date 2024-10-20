// JAI HANUMAN

const inputext = document.getElementById("inputext");
const containerlist = document.getElementById("list-container");
const button = document.getElementById("btn");


function addtask() {
    if (inputext.value === "") {
        alert("Add  Somthing to list it");
    }
    else {
        const li = document.createElement("li");
        li.innerHTML = inputext.value;
        containerlist.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData()
    }
    inputext.value = "";
    saveData();
}

containerlist.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
},false);

 
 
function saveData(){
         localStorage.setItem("data", containerlist.innerHTML);
}


function display(){
    containerlist.innerHTML =  localStorage.getItem("data");
}

display();

alert("jvjgj");