// Обработчик
let productWrapper = $(".js-product-wrapper");
let productItems = productWrapper.children("li");
let productNavigation = $(".js-product-navigation");
let productTab = $(".js-product-tab");

productTab.on("click", function() {
  const tabType = $(this).data("product");

  updateTab($(this));

  if (tabType === "all") {
    showProduct(productItems);
  } else {
    productItems.each((index, element) => {
      let item = productItems.eq(index);
      let itemType = productItems.eq(index).data("product");
      if (itemType === tabType) {
        showProduct(item);
      } else {
        hideProduct(item);
      }
    });
  }
});
function showProduct(product) {
  product.removeClass("product-item--disable");
}
function hideProduct(product) {
  product.addClass("product-item--disable");
}
function updateTab(tab) {
  tab.siblings().removeClass("js-product-tab--active");
  tab.addClass("js-product-tab--active");
}
