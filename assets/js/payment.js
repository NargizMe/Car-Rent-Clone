let locationPick = document.getElementById('locations-pick');
let datePick = document.getElementById('date-pick');
let timePick = document.getElementById('time-pick');
let pick = document.querySelector('.pick');
let pickUnSelected = document.querySelector('.pick-unSelected');
let pickSelected = document.querySelector('.pick-selected');

let locationDrop = document.getElementById('locations-drop');
let dateDrop = document.getElementById('date-drop');
let timeDrop = document.getElementById('time-drop');
let drop = document.querySelector('.drop');
let dropUnSelected = document.querySelector('.drop-unSelected');
let dropSelected = document.querySelector('.drop-selected');


locationPick.addEventListener('click', () => {
    pickSelected.style.display = 'block';
    dropSelected.style.display = 'none';
})

datePick.addEventListener('click', () => {
    pickSelected.style.display = 'block';
    dropSelected.style.display = 'none';
})

timePick.addEventListener('click', () => {
    pickSelected.style.display = 'block';
    dropSelected.style.display = 'none';
})

locationDrop.addEventListener('click', () => {
    pickSelected.style.display = 'none';
    dropSelected.style.display = 'block';
})

dateDrop.addEventListener('click', () => {
    pickSelected.style.display = 'none';
    dropSelected.style.display = 'block';
})

timeDrop.addEventListener('click', () => {
    pickSelected.style.display = 'none';
    dropSelected.style.display = 'block';
})