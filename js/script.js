
// GET THE P ELEMENT 
var add_new = document.getElementById("add_new_product");

// ADDED NEW PRO
var count = 0;
function add_pro(){
    count++;
    add_new.textContent = count;
}

// REMOVE PRO
function remove_pro(){
    count--;
    add_new.textContent = count;
}


// GET IMAGES
//IMAGES 1 
var img1 = document.getElementById("img_1");
var img2 = document.getElementById("img_2");
var img3 = document.getElementById("img_3");
var img3 = document.getElementById("img_4");
var close_window = document.getElementById("close_image");

//GET IMAGE
function hand_click2(){
  img2.classList.add("preview_card");
}

//GET IMAGE 2
function hand_click1(){
  img1.classList.add("preview_card");
}

//GET IMAGE 3
function hand_click3(){
  img3.classList.add("preview_card");
}

//GET IMAGE 3
function hand_click4(){
  img4.classList.add("preview_card");
}

//FUNCTION FOR CLOSE THE WINDOW
function down_this1(){
  img1.style.position = "static";
  img1.style.width = "23%";
  img1.style.height = "80%"
}

//FOR DOWN 2
function down_this2(){
  img2.style.position = "static";
  img2.style.width = "23%";
  img2.style.height = "80%"
}

//FOR DOWN 3
function down_this3(){
  img3.style.position = "static";
  img3.style.width = "23%";
  img3.style.height = "80%"
}

//FOR DOWN 4
function down_this4(){
  img3.style.position = "static";
  img3.style.width = "23%";
  img3.style.height = "80%"
}

