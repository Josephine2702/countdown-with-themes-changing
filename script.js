"use strict"

const background = document.querySelector('video'),
    themes = document.querySelectorAll('option'),
    selectTheme = document.querySelector('#select'),
    countdownContainer = document.querySelector('.countdown__container'),
    eventInput = document.querySelector('#event'),
    dateInput = document.querySelector('#date'),
    form = document.querySelector('form'),
    countdownBtn = document.querySelector('.countdown__btn'),
    counterContainer = document.querySelector('.counter__container'),
    counterTitle = document.querySelector('.counter__title'), 
    timeElements = document.querySelectorAll('span'),
    completeContainer = document.querySelector('.complete__container'),
    completeInfo = document.querySelector('#complete__info');

const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;


// set min date
let today = new Date().toISOString().split('T')[0];
dateInput.setAttribute('min', today);


// form.addEventListener('change', e => {
//     e.preventDefault();
//     const target = e.target;

//     if(target.classList.contains('event')){
//         console.log(eventInput.value);
//     }else{
//         console.log(dateInput.value)
//     }

// })



let countdownValue = new Date(),
    countdownTitle = '',
    countdownDate = '',
    countdownActive,
    savedCountdown = {};


// function updateDOM() {
//     countdownActive = setInterval(() => {
//         const now = new Date().getTime();
//         const distance = countdownValue - now;
            
//         const days = Math.floor(distance / day),
//             hours = Math.floor((distance % day) / hour),
//             minutes = Math.floor((distance % hour) / minute),
//             seconds = Math.floor((distance % minute) / second);

//     // // hide input
//      countdownContainer.hidden = false;

//     // if countdown has ended, show complete
//     if (distance < 0) {
//         countdownContainer.hidden = true;
//         clearInterval(countdownActive);
//         completeInfo.textContent = `${countdownTitle} finished on ${countdownDate}`;
//         completeContainer.hidden = false;
//     } else {
//         // populate countdown
//         counterTitle.textContent = `${countdownTitle}`;
//         timeElements[0].textContent = `${days}`;
//         timeElements[1].textContent = `${hours}`;
//         timeElements[2].textContent = `${minutes}`;
//         timeElements[3].textContent = `${seconds}`;
//         completeContainer.hidden = true;
//         countdownContainer.hidden = false;
//     }
//         }, second);
// }

    // take values from input
//     function updateCountdown(e) {
//         e.preventDefault();
//         countdownTitle = e.srcElement[0].value;
//         countdownDate = e.srcElement[1].value;
//         savedCountdown = {
//             title: countdownTitle,
//             date: countdownDate
//         };
//         localStorage.setItem('countdown', JSON.stringify(savedCountdown));
//      // check for valid date
//      if (countdownDate === '') {
//         alert('Please select the date');
//      } else {
//     // get number version of current Date, update DOM
//     countdownValue = new Date(countdownDate).getTime();
//     updateDOM();
//      }
// }

function updateDom(){
    countdownActive = setInterval(() => {
        countdownValue = new Date(dateInput.value).getTime();
        
        const now = new Date().getTime();
        const distance = countdownValue - now;
    
        const days = Math.floor(distance / day),
            hours = Math.floor((distance % day) / hour),
            minutes = Math.floor((distance % hour) / minute),
            seconds = Math.floor((distance % minute) / second);
    
            countdownContainer.hidden = true;
            counterContainer.hidden = false;
    
            countdownTitle = eventInput.value;
            countdownDate = dateInput.value;
    
            if(distance < 0) {
                counterContainer.hidden = true;
                completeContainer.hidden = false;
                completeInfo.textContent = `${countdownTitle} finished on ${countdownDate}`
            } else {
                counterTitle.textContent = `${countdownTitle}`;
                 timeElements[0].textContent = `${days}`;
                 timeElements[1].textContent = `${hours}`;
                 timeElements[2].textContent = `${minutes}`;
                 timeElements[3].textContent = `${seconds}`;
    
            }
 
    }, 1000);
     
}

countdownBtn.addEventListener('click', (e) => {
    e.preventDefault();
   
         updateDom();

    
})
































 // change theme   
 function setTheme(){
    themes.forEach(theme => {
    
    if(theme.selected){
     background.setAttribute('src', `/assets/${theme.value}.mp4`);
     document.body.setAttribute('data-theme', `${theme.value}`);
    }
});
}

selectTheme.addEventListener('change', setTheme);


