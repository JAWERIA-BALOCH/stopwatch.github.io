// Variables to keep track of time and state
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function updateDisplay() {
    // Calculate hours, minutes, and seconds
    const totalMilliseconds = elapsedTime;
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);

    const milliseconds = totalMilliseconds % 1000;
    const seconds = totalSeconds % 60;
    const minutes = totalMinutes % 60;
    const hours = totalHours;

    // Format the time display
    document.getElementById('display').textContent = 
        `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
}

function start() {
    if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 100); // Update every 100ms for better accuracy
    }
}

function pause() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
}

function reset() {
    pause();
    elapsedTime = 0;
    updateDisplay();
}

// Event listeners for buttons (optional, if not using inline onclick attributes)
document.getElementById('startbtn').addEventListener('click', start);
document.getElementById('pausebtn').addEventListener('click', pause);
document.getElementById('resetbtn').addEventListener('click', reset);
