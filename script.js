let intro = document.querySelector('.intro');
let logoSpan = document.querySelectorAll('.logo');

// Activate logo spans on load
window.addEventListener('DOMContentLoaded', () => {
  logoSpan.forEach((span, idx) => {
    setTimeout(() => {
      span.classList.add('active');
    }, (idx + 1) * 400);
  });
});

// Function to fade and slide up intro
function hideIntro() {
  // Prevent multiple triggers
  window.removeEventListener('click', hideIntro);
  window.removeEventListener('wheel', hideIntro);
  window.removeEventListener('touchstart', hideIntro);

  logoSpan.forEach((span, idx) => {
    setTimeout(() => {
      span.classList.remove('active');
      span.classList.add('fade');
    }, (idx + 1) * 50);
  });

  setTimeout(() => {
    intro.style.top = '-100vh';
  }, 500);
}

// Trigger on user interaction
window.addEventListener('click', hideIntro);
window.addEventListener('wheel', hideIntro);
window.addEventListener('touchstart', hideIntro);

//-----------------------



let startTime, elapsedTime = 0, timerInterval;
let running = false;

function updateClock() {
    let now = new Date();
    let hours = (now.getHours() ) % 24; 
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    document.getElementById("clock").innerText = 
        String(hours).padStart(2, '0') + ":" + 
        String(minutes).padStart(2, '0') + ":" + 
        String(seconds).padStart(2, '0');
}

setInterval(updateClock, 1000); // Update clock every second
updateClock(); // Show time immediately on load

function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    let minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    let seconds = String(totalSeconds % 60).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

function startStopwatch() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            document.getElementById("display").innerText = formatTime(elapsedTime);
        }, 1000);
        running = true;
    }
}

function stopStopwatch() {
    clearInterval(timerInterval);
    running = false;
}

function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById("display").innerText = "00:00:00";
    running = false;
}
//--------------dark theme switch 
let dark= localStorage.getItem('dark');
const themeSwitch = document.getElementById('theme');

const enableDarkmode=()=>{
    document.body.classList.add('dark');
    localStorage.setItem('dark','active');
}

const disableDarkmode=()=>{
    document.body.classList.remove('dark');
    localStorage.setItem('dark',null);
}

if(dark === "active")enableDarkmode();

themeSwitch.addEventListener('click',()=>{
      dark = localStorage.getItem('dark');
  if (dark === 'active') disableDarkmode();
  else enableDarkmode();
})
