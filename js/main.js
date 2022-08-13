var elModalOpenButton = document.querySelector(".btn-menyu");

var elModalOpenlink = document.querySelector(".header-right");



elModalOpenButton.addEventListener("click", function () {
  elModalOpenlink.classList.toggle("nav--active")
})
