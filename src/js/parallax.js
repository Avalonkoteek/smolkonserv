window.addEventListener("scroll", () => {
  let parallaxBg = document.querySelector(".js-parallax-bg");
  let y = window.pageYOffset / 2 + "px";

  parallaxBg.style.setProperty("--bg-positionY", y);
});
