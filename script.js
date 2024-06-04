let timer;
let isRunning = false;
let [hours, minutes, seconds] = [0, 0, 0];

const display = document.getElementById('display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    let h = hours < 10 ? `0${hours}` : hours;
    let m = minutes < 10 ? `0${minutes}` : minutes;
    let s = seconds < 10 ? `0${seconds}` : seconds;
    display.textContent = `${h}:${m}:${s}`;
}

function startStopwatch() {
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 1000);
}

function stopStopwatch() {
    clearInterval(timer);
}

startStopBtn.addEventListener('click', () => {
    if (isRunning) {
        stopStopwatch();
        startStopBtn.textContent = 'Start';
    } else {
        startStopwatch();
        startStopBtn.textContent = 'Stop';
    }
    isRunning = !isRunning;
});

resetBtn.addEventListener('click', () => {
    stopStopwatch();
    [hours, minutes, seconds] = [0, 0, 0];
    updateDisplay();
    startStopBtn.textContent = 'Start';
    isRunning = false;
});

updateDisplay();
