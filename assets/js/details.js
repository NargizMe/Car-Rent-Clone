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
//////
document.querySelector("#navHaburgerBtn").addEventListener("click",function (e) {  
  if (document.querySelector(".detail__aside").style.display == "block") {
    document.querySelector(".detail__aside").style.display = "none"
    document.querySelector(".detail__aside").style.width = "0"
    return
  }
  document.querySelector(".detail__aside").style.display = "block"
  document.querySelector(".detail__aside").style.width = "300px"
})
////////
let wishListIconDet = document.querySelectorAll(".empty-heart");

wishListIconDet.forEach((heart)=>{
    heart.addEventListener("click",function(){
        if (this.classList.contains("fa-regular")) {
            this.classList.remove("fa-regular");
            this.classList.add("fa-solid");
            this.style.color = "#ED3F3F";
        }
        else{
            this.classList.remove("fa-solid");
            this.classList.add("fa-regular");
            this.style.color = "black";
        }
    });
})