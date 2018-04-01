window.onload = function () {
  document.body.className += 'loaded'
  document.querySelector('.bg').style.height = window.innerHeight + "px";
  timer();
}
window.onresize = function () {
  document.querySelector('.bg').style.height = window.innerHeight + "px";
}
const toggle = document.querySelector('.toggle');
const target = document.querySelector('.popup--menu');
const close = document.querySelector('.toggle--close');

function timer() {
  const timer = setTimeout(function () {
    document.querySelector(".bg").classList.remove("pre");
  }, 1000);
}

function toggleChange() {
  toggle.classList.toggle("toggle--hidden");
  close.classList.toggle('toggle--close--active');
  target.classList.toggle('popup--menu--active');
}

toggle.addEventListener('click', toggleChange, false);
close.addEventListener('click', toggleChange, false);