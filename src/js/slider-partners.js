$(document).ready(function($) {
  let sliderlist = $(".partners-silder__item");
  let directionBtn = $(".js-partnets-direction");

  let i = -50;

  sliderlist.each(index => {
    setValueItem(sliderlist, index, i);
    i = i + 103;
  });
  // click
  directionBtn.on("click", function() {
    if ($(this).hasClass("partners__direction--left")) {
      if (getValueItem(sliderlist.eq(0)) === -50) return null;
      updateSlideItems(sliderlist, 1);
    } else {
      if (getValueItem(sliderlist.eq(sliderlist.length - 1)) === -50)
        return null;
      updateSlideItems(sliderlist, -1);
    }
  });
});
function updateSlideItems(slideList, direction) {
  slideList.each(index => {
    let value = getValueItem(slideList.eq(index));

    value += +103 * direction;
    setValueItem(slideList, index, value);
  });
}
function getValueItem(item) {
  let startValue = item.css("--i");
  return +startValue.slice(0, startValue.length - 1);
}
function setValueItem(slideList, index, value) {
  slideList.eq(index).css({
    "--i": `${value}%`
  });
}
