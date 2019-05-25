var link = document.querySelector(".main-nav__toggle");
var searchPopup = document.querySelector(".main-nav__list--show");
var searchToggle = document.querySelector(".main-nav__toggle--disable");
var orderLinks = document.querySelectorAll(".order-link");

searchToggle.classList.remove("main-nav__toggle--disable");
searchToggle.classList.add("main-nav__toggle");

searchPopup.classList.remove("main-nav__list--show");
searchPopup.classList.add("main-nav__list--close");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    searchPopup.classList.toggle("main-nav__list--close");
});

for(var i=0; i<orderLinks.length; i++) {
  orderLinks[i].addEventListener("click", function(evt) {
    evt.preventDefault();
  });
}
