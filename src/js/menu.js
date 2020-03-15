// 1 клик по кнопке
// 2 изменить стили кнопки
// открыть меню

let burger = $(".navigation__burger");
let nav = $(".nav-links");
let navLinks = nav.children("li");

// BURGER CLICK
burger.on("click", () => {
  if (burger.hasClass("burger--close")) {
    closeMenu();
  } else {
    openMenu();
  }
});

// NAVLINKS CLICK
navLinks.click(function(event) {
  let element = $(this)
    .children("a")
    .attr("href");
  event.preventDefault();

  let scrollTop = $("#" + element).offset().top;

  if (burger.hasClass("burger--close")) {
    closeMenu();
  }
  $("html, body").animate({ scrollTop: scrollTop }, 1000);
});
$(window).scroll(() => {
  onScroll();
});

const onScroll = () => {
  checkTabContainerPosition();
};

const checkTabContainerPosition = () => {
  let offset = $("header").offset().top;
  if ($(window).scrollTop() > offset) {
    $(".navigation").addClass("navigation--top");
  } else {
    $(".navigation").removeClass("navigation--top");
  }
};
function openMenu() {
  burger.addClass("burger--close");
  nav.addClass("nav-links--active");
}
function closeMenu() {
  burger.removeClass("burger--close");
  nav.removeClass("nav-links--active");
}
