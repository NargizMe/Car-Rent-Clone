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

