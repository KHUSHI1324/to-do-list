const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function AddTask(){
    if(inputBox.value===' '){
        alert("pls enter in info.");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        // innerHTML= it is a property of returning,the text content of the element,including all spacing nd inner html tags.
        // we want to set or get value from any html tag then we use innerHTML.
        //      "       "           any input feild we use value.
        listContainer.appendChild(li);
        let cross=document.createElement("cross");
        cross.innerHTML="\u00d7";
// unicode=it is a universal character encoding standard.
// it is an international character encoding standard that includes different lang.scripts nd symbols.
// each letter,digit or symbol has its own unique unicode value.
// it is an extension od ASCII that allows many more charaters to be represented.
        li.appendChild(cross);
    }
    inputBox.value=" ";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "CROSS"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();