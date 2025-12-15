let btn=document.querySelector("#btn");
btn.addEventListener("click",btn_click);
function btn_click(){
    document.querySelector("body").classList.toggle("body_dark-theme");

}
