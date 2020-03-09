$(document).ready(function($) {
  let ContentWrapper = $(".js-slider-wrapper");

  ContentWrapper.each(function() {
    let imageWrapper = $(this).find(".js-image-wrapper");
    let imagesList = imageWrapper.children(".js-image-item");

    let textWrapper = $(this).find(".js-text-wrapper");
    let textList = textWrapper.children(".js-text-item");

    if (
      !$(this)
        .find(".js-tab")
        .hasClass("active-tab")
    ) {
      $(this)
        .find(".js-tab")
        .eq(0)
        .addClass("active-tab");

      classUpdate(imagesList.eq(0));
      classUpdate(textList.eq(0));
    }

    // TABS controls
    $(this).on("click", ".js-tab", function() {
      const indexTab = $(this).index();

      updateIndicator(indexTab);

      let imageItem = imagesList.eq(indexTab);
      let textItem = textList.eq(indexTab);
      console.log(imageItem);
      classUpdate(imageItem);
      classUpdate(textItem);
      $(this)
        .addClass("active-tab")
        .siblings()
        .removeClass("active-tab");
    });
  });
  function updateIndicator(index) {
    let transition = (80 - 20 * index) * -1 + "%";
    $(".js-indicator").css({
      "--x": transition
    });
  }
  function classUpdate(items) {
    items.each(function() {
      var item = $(this);
      item
        .addClass("is-selected")
        .removeClass("move-left")
        .siblings()
        .removeClass("is-selected")
        .end()
        .prevAll()
        .addClass("move-left")
        .end()
        .nextAll()
        .removeClass("move-left");
    });
  }
});
