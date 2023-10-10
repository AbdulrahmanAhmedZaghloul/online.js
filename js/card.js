let title = document.querySelectorAll(".title");
let reload = document.querySelectorAll(".reload");
let ul = document.querySelectorAll("ul");

window.onload = function () {
  if (window.navigator.onLine) {
    online();
  } else {
    offline();
  }
};
window.addEventListener("online", function () {
  online();
});

window.addEventListener("offline", function () {
  offline();
});
reload.onclick = function () {
  window.location.reload();
};
function online() {
  $(".title").html(`<h2>Online Now</h2>`);
  $(".title").css("color", "green");
  ul.classList.add(".head");
  reload.classList.add(".reloed");
}

function offline() {
  $(".title").html(`<h2>Offline Now</h2>`);
  $(".row ").css("color", "darkgray");
  $("ul").removeClass(".head");
  $(".reload").removeClass(".head");
}

// reload.classList.remove(".reloed");
