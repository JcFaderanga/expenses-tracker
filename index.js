const add_box = document.querySelector(".add-container");
const add_button = document.querySelector(".bx-plus");
const add_exit = document.querySelector(".bx-x");
const item = document.querySelector(".item");


add_button.onclick = function(){
    add_box.style.display = "flex";
    document.querySelector("nav").style.background = "#0e6dbd";
};

add_exit.onclick = function(){
    add_box.style.display = "none";
    document.querySelector("nav").style.background = "white";
};

item.onclick = function(){
item.style.height = "200px";
};


