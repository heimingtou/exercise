
let text=document.getElementById("greeting")
function changeText(){
greeting.innerHTML="Chào mừng bạn đến với bài tập DOM!";
}
let colorBox=document.getElementById("box");
let img=document.getElementById("#myImage");
function changeImage(){
    document.getElementById("myImage").src = "https://www.svgrepo.com/show/452030/avatar-default.svg";
}
function changeColorBox(){
    console.log("hello");
    colorBox.style.backgroundColor="orange";
}
let input=document.getElementById("todoInput");
function addTodo(){
    let li= document.createElement("li");
    li.textContent=input.value;
    input.value="";
    let dltBtn=document.createElement("button");
    dltBtn.textContent="Xóa";
    dltBtn.onclick=function(){
        li.remove();
    }
    li.appendChild(dltBtn);
 document.getElementById("todoList").appendChild(li);
}
function removeTodo(){
let li= document.querySelectorAll("#todoList li");
for(let i=0;i<li.length;i++){
    li[i].addEventListener("click",function(){
        this.remove();
    });
}}
function toggleHighlight(){
    let p=document.getElementById("toggleClassText");
    p.classList.toggle("highlight");
}