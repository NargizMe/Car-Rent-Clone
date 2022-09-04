//PICK DATE INPUT
let pickDate = document.querySelector("#pickDate");
let dateInput = document.querySelector("#pickDateInput");

pickDate.addEventListener("click",function(){
    dateInput.showPicker();

    dateInput.value;
    
    dateInput.addEventListener("change",function(){
       pickDate.innerText = this.value;
    });
});
//PICK TIME INPUT
let pickTime = document.querySelector("#pickTime");
let timeInput = document.querySelector("#pickTimeInput");

pickTime.addEventListener("click",function(){
    timeInput.showPicker();

    timeInput.value;
    
    timeInput.addEventListener("change",function(){
        pickTime.innerText = this.value;
    });
});

//DROP DATE INPUT
let dropDate = document.querySelector("#dropDate");
let dropDateInput = document.querySelector("#dropDateInput");

dropDate.addEventListener("click",function(){
    dropDateInput.showPicker();

    dropDateInput.value;
    
    dropDateInput.addEventListener("change",function(){
        dropDate.innerText = this.value;
    });
});
//DROP TIME INPUT
let dropTime = document.querySelector("#dropTime");
let dropTimeInput = document.querySelector("#dropTimeInput");

dropTime.addEventListener("click",function(){
    dropTimeInput.showPicker();

    dropTimeInput.value;
    
    dropTimeInput.addEventListener("change",function(){
        dropTime.innerText = this.value;
    });
});

//WishList Click

let wishListIcon = document.querySelectorAll(".empty-heart");

wishListIcon.forEach((heart)=>{
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

//Show More Click
let showMoreBtn = document.querySelector(".show-more-btn");
let cards = document.querySelectorAll(".card");
showMoreBtn.addEventListener("click",function(){
    if (this.innerText.toLowerCase() == "show more") {
        this.innerText = "Show Less";
        cards.forEach((card)=>{
            if (card.classList.contains("hidden-card")) {
                card.style.display = "block";
            }
        });
    }
    else{
        this.innerText = "Show More";
        cards.forEach((card)=>{
            if (card.classList.contains("hidden-card")) {
                card.style.display = "none";                
            }
        });
    }
});

//Switch Button Click
let switchBtn = document.querySelector(".switch-btn");
let pickUp = document.querySelector(".pick__up");
let dropOff = document.querySelector(".drop__off");

switchBtn.addEventListener("click",function(){
    let pickInnerHTML = pickUp.innerHTML;
    let dropOffInnerHTML = dropOff.innerHTML;

    dropOff.innerHTML = pickInnerHTML;
    pickUp.innerHTML = dropOffInnerHTML;
});
