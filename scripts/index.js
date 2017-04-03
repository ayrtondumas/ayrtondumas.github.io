function toggleHamburger( el ){
  $(el).toggleClass("is-active");
  $("header").toggleClass("header-is-active");
  $("nav").toggleClass("nav-is-active");
}

function hideNav() {
  $("header").removeClass("header-is-active");
  $("nav").removeClass("nav-is-active");
  $(".hamburger").removeClass("is-active");
}
