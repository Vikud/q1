const burgerIcon = document.querySelector("#burger-icon");
const closeIcon = document.querySelector("#close-icon");
const menu = document.querySelector("#menu");

console.log(burgerIcon);
console.log(closeIcon);
console.log(menu);

burgerIcon.addEventListener("click", function () {
  menu.style.right = "0";
  menu.style.display = 'block'
});

closeIcon.addEventListener("click", function() {
  menu.style.right = "-100%";
});

document.addEventListener("click", function (event) {
  if (!menu.contains(event.target) && event.target !== burgerIcon) {
    menu.style.right = "-100%";
  }
});

window.addEventListener("resize", function() {
  if(window.innerWidth >780) {
    menu.style.right = "-100%";
  }
});


const openBtn = document.querySelector("#openBtn");
const popup = document.querySelector("#popup");
const closeBtn = document.querySelector("#closeBtn");
const openBtn2 = document.querySelector("#openBtn2");
const openBtn3 = document.querySelector("#openBtn3");
const openBtn4 = document.querySelector("#openBtn4");
const openBtn5 = document.querySelector("#openBtn5");
const openBtn6 = document.querySelector("#openBtn6");
const openBtn7 = document.querySelector("#openBtn7");
const openBtn8 = document.querySelector("#openBtn8");

console.log(openBtn);
console.log(popup);
console.log(closeBtn);

openBtn.addEventListener("click", function() {
  popup.style.display = "block";
});

openBtn2.addEventListener("click", function() {
    popup.style.display = "block";
  });

  openBtn3.addEventListener("click", function() {
    popup.style.display = "block";
  });

openBtn4.addEventListener("click", function() {
    popup.style.display = "block";
  });

openBtn5.addEventListener("click", function() {
    popup.style.display = "block";
  });

openBtn7.addEventListener("click", function() {
    popup.style.display = "block";
  });

openBtn8.addEventListener("click", function() {
    popup.style.display = "block";
  });

closeBtn.addEventListener("click", function(){
    popup.style.display = "none";
  });

window.addEventListener("click", function(event) {
  if(event.target === popup) {
    popup.style.display = "none";
  }
});