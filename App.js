// JavaScript code for the stopwatch web app

let timerInterval;
let elapsedTime = 0;
let isRunning = false;
let lapCounter = 1;

// Function to format time in HH:MM:SS
function formatTime(timeInMs) {
    const hours = Math.floor(timeInMs / (1000 * 60 * 60)).toString().padStart(2, '0');
    const minutes = Math.floor((timeInMs % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
    const seconds = Math.floor((timeInMs % (1000 * 60)) / 1000).toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Start the stopwatch
function startStopwatch() {
    if (!isRunning) {
        const startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            document.getElementById('time-display').textContent = formatTime(elapsedTime);
        }, 1000);
        isRunning = true;
    }
}

// Pause the stopwatch
function pauseStopwatch() {
    if (isRunning) {
        clearInterval(timerInterval);
        isRunning = false;
    }
}

// Reset the stopwatch
function resetStopwatch() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById('time-display').textContent = "00:00:00";
    document.getElementById('lap-list').innerHTML = ""; // Clear laps
    isRunning = false;
    lapCounter = 1;
}

// Record a lap time
function lapTime() {
    if (isRunning) {
        const lapList = document.getElementById('lap-list');
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCounter++}: ${formatTime(elapsedTime)}`;
        lapList.appendChild(lapItem);
    }
}
