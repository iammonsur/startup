let openBtn = document.querySelector(".bi-list");
let CloseBtn = document.querySelector(".bi-x-lg");
let menu = document .querySelector(".navbar__menu");

openBtn.addEventListener("click",()=>{
    openBtn.classList.toggle("tata");
    CloseBtn.classList.toggle("tata");
    menu.classList.toggle("hidden")
})
CloseBtn.addEventListener("click",()=>{
    CloseBtn.classList.toggle("tata");
    openBtn.classList.toggle("tata");
    menu.classList.toggle("hidden")
})