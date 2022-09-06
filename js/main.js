// HEADER JS
var body = document.getElementById("body");
var menu_button = document.getElementById("hamburger-menu");
var nav = document.getElementById("nav");
var bck_opacity = document.getElementById("bck-opacity");
var nav_close = document.getElementById("nav-close");
var lng_selector = document.getElementById("lng-selector");
var lngs = document.getElementById("lngs");
var search_btn = document.getElementById("search-btn");
var search_input = document.getElementById("search-input");

menu_button.onclick = function () {
  nav.classList.toggle("open");
  bck_opacity.classList.toggle("high");
};
nav_close.onclick = function () {
  nav.classList.toggle("open");
  bck_opacity.classList.toggle("high");
};
lng_selector.onclick = function () {
  lngs.classList.toggle("open");
};
search_btn.onclick = function () {
  search_input.classList.toggle("open-extra");
};
search_btn.onclick = function () {
  search_input.classList.toggle("open-extra");
  main.classList.toggle("small");
};
// End HEADER JS

// PROFILE-ORDERS JS
var my_profile = document.getElementById("my-profile");
var down_arrow = document.getElementById("down-arrow");


down_arrow.onclick = function(){
  my_profile.classList.toggle("open");
  console.log("worked");
}

// END PROFILE-ORDERS JS


// SIGN_IN JS

// End SIGN-IN JS

