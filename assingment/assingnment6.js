let startTime;
let elapsedTime = 0;
let timerInterval;
let running = false;

const display = document.getElementById('display');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

function startStop() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 10); // update every 10 milliseconds
        startStopButton.textContent = 'Stop';
    } else {
        clearInterval(timerInterval);
        elapsedTime = Date.now() - startTime;
        startStopButton.textContent = 'Start';
    }
    running = !running;
}

function reset() {
    clearInterval(timerInterval);
    running = false;
    elapsedTime = 0;
    display.textContent = '00:00:00.000000';
    startStopButton.textContent = 'Start';
}

function updateDisplay() {
    const now = Date.now();
    const time = now - startTime;

    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const microseconds = time % 1000 * 1000 + Math.floor(now % 1 * 1000000);

    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${padMicroseconds(microseconds)}`;
}

function pad(number) {
    return number.toString().padStart(2, '0');
}

function padMicroseconds(number) {
    return number.toString().padStart(6, '0');
}

startStopButton.addEventListener('click', startStop);
resetButton.addEventListener('click', reset);
