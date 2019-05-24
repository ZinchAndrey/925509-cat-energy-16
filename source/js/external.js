var link = document.querySelector(".main-nav__toggle");
var searchPopup = document.querySelector(".main-nav__list--show");
var orderLink = document.querySelector(".order-link");

searchPopup.classList.remove("main-nav__list--show");
searchPopup.classList.add("main-nav__list--close");

link.addEventListener("click", function(evt) {
    evt.preventDefault();
    searchPopup.classList.toggle("main-nav__list--close");
});

orderLink.addEventListener("click", function(evt) {
  evt.preventDefault();
});
