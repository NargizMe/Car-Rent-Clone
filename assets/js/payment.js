window.onload = function (){
    initAccordion();
    initFocus();
    checkValidation();
    changeInnerText();
}

function initFocus(){
    let locationPick = document.getElementById('locations-pick');
    let datePick = document.getElementById('date-pick');
    let timePick = document.getElementById('time-pick');
    let pickSelected = document.querySelector('.pick-selected');

    let locationDrop = document.getElementById('locations-drop');
    let dateDrop = document.getElementById('date-drop');
    let timeDrop = document.getElementById('time-drop');
    let dropSelected = document.querySelector('.drop-selected');


    locationPick.addEventListener('click', () => {
        pickSelected.style.display = 'block';
        dropSelected.style.display = 'none';
    })

    datePick.addEventListener('click', function() {
        pickSelected.style.display = 'block';
        dropSelected.style.display = 'none';
        this.type = 'date';
        this.parentElement.children[1].style.display = 'none';

    })

    timePick.addEventListener('click', () => {
        pickSelected.style.display = 'block';
        dropSelected.style.display = 'none';
    })

    locationDrop.addEventListener('click', () => {
        pickSelected.style.display = 'none';
        dropSelected.style.display = 'block';
    })

    dateDrop.addEventListener('click', function(){
        pickSelected.style.display = 'none';
        dropSelected.style.display = 'block';
        this.type = 'date';
        this.parentElement.children[1].style.display = 'none';
    })

    timeDrop.addEventListener('click', () => {
        pickSelected.style.display = 'none';
        dropSelected.style.display = 'block';
    })
}

function initAccordion () {
    const accordionInput = document.querySelectorAll("input[name=card-type]")
    const multiplePayment = document.querySelectorAll('.multiple-payment-card .payment-card__info');
    const firstElement = multiplePayment[0];

    if(firstElement){
        firstElement.style.display = 'grid'
    }

    accordionInput.forEach((input) => {
        input.addEventListener('change', function (e)  {
            const selectedVal = this.getAttribute('data-value');

            multiplePayment.forEach((el) => {
                el.style.display = 'none';
                const currentVal = el.getAttribute('data-value');
                if (currentVal === selectedVal) {
                    el.style.display = 'grid';
                }
            })
        })
    })
}

function checkValidation(){
    const button = document.querySelector('.rent-a-car');
    const agreementCheckBox = document.querySelector('#agreement');


    button.addEventListener('click', function (){
        if(agreementCheckBox.checked){
            const billingInputs = document.querySelectorAll('#billing input');
            billingInputs.forEach((input) => {
                input.style.border = 'none';
                if(!input.value){
                    const emptyInput = document.querySelector(`input[name='${input.name}']`)
                    emptyInput.style.border = '2px solid tomato';
                    window.scrollTo(0, 250);
                }
            })

            const dateInputs = document.querySelectorAll('#rental-selects input[type=date]');
            dateInputs.forEach((input) => {
                input.style.border = 'none';
                if(!input.value){
                    const emptyInput = document.querySelector(`input[name='${input.name}']`)
                    emptyInput.style.border = '2px solid tomato';
                    window.scrollTo(0, 850);
                }
            })


            const rentalSelects = document.querySelectorAll('#rental-selects select');
            rentalSelects.forEach((select) => {
                select.style.border = 'none';
                if(!select.value){
                    const emptyInput = document.querySelector(`select[name='${select.name}']`)
                    emptyInput.style.border = '2px solid tomato';
                    window.scrollTo(0, 1150);
                }
            })
        }
        else{
            alert('You must accept the agreement');
        }
    })

}

function changeInnerText(){
    let rentalSpan = document.querySelector('.rental-info__bottom').children[0].children[0].children[1];
    window.addEventListener('resize', () => {
        rentalSpan.innerText = window.screen.width <= 992? 'Overall price rental': 'Overall price and includes rental discount';
    })
}
