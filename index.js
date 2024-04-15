const add_box = document.querySelector(".add-container");
const add_button = document.querySelector(".bx-plus");
const add_exit = document.querySelector(".bx-x");


add_button.addEventListener('click',function(){
    add_box.style.display = "flex";
    document.querySelector("nav").style.background = "#0e6dbd";
});

add_exit.addEventListener('click',function(){
    add_box.style.display = "none";
    document.querySelector("nav").style.background = "white";
});



