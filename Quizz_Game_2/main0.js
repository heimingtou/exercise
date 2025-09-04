let nt=document.querySelector("#note");
let button1=document.querySelector("#read");
let button2=document.querySelector("#write");

button1.onmouseover=function(){
    let span=document.createElement("span");
    span.classList.add("span")
    span.textContent="kiem tra cach doc dung cua kanji ";
    nt.append(span);
}
button1.onmouseout=function(){
    let spans=document.querySelector("span")
    nt.removeChild(spans);
}
