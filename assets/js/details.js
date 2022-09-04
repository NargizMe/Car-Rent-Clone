const mainSlide = document.querySelector(
  "#detail__cardbox_slider .detail__card_slider .main_slider "
);
const optionSlides = document.querySelectorAll(
  "#detail__cardbox_slider .detail__card_slider .slider_item_box div"
);

optionSlides.forEach((slide) => {
  slide.addEventListener("click", function () {
    mainSlide.style.backgroundImage = `url(${slide.children[0].getAttribute("src")})`
    removeSelectFromAllOptionSlides();
    slide.classList.add("selecedSlide");
  });
});

function removeSelectFromAllOptionSlides() {
  optionSlides.forEach((slide) => {
    slide.classList.remove("selecedSlide");
  });
}
