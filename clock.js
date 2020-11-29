document.addEventListener('DOMContentLoaded', setTime);

const hourArm = document.getElementById('hourArm');
const minArm = document.getElementById('minArm');
const secArm = document.getElementById('secArm');
const pendulum = document.getElementById('pendulum');
const btnDiv = document.getElementById('btn');
const clock = document.getElementById('clock');

function setTime(){
   let btn = document.querySelector('button');
   btn.addEventListener('click', setClasses);
}

function setClasses(){
   btnDiv.classList.add('hide');
   clock.classList.add('move');
   secArm.classList.add('spinSec');
   minArm.classList.add('spinMin');
   hourArm.classList.add('spinHour');
   pendulum.classList.add('spinPend');

   // wait 2 seconds for animation to finish
   setTimeout(function(){pendulum.classList.add('swing');}, 2000);

   timer();
}

function timer() {

   let d = new Date();
   let secRatio = d.getSeconds() / 60;
   let minRatio = ((secRatio + d.getMinutes()) / 60) + (90/360); // last term adjusts for the
   let hourRatio = ((minRatio + d.getHours()) / 12) + (-90/360); // initial position of arms
   console.log(`${hourRatio}:${minRatio}:${secRatio}`)           // in svg

   setRotation(secArm, secRatio);
   setRotation(minArm, minRatio);
   setRotation(hourArm, hourRatio);

   setInterval(timer, 1000);
}

function setRotation(element, rotationRatio) {
   element.style.setProperty('--rotation', rotationRatio * 360);
}