let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;

const display = document.getElementById("display");

// Update display
function updateDisplay() {
  const h = hours < 10 ? "0" + hours : hours;
  const m = minutes < 10 ? "0" + minutes : minutes;
  const s = seconds < 10 ? "0" + seconds : seconds;
  display.textContent = `${h}:${m}:${s}`;
}

// Start stopwatch
function startTimer() {
  if (timer !== null) return;

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

// Stop stopwatch
function stopTimer() {
  clearInterval(timer);
  timer = null;
}

// Reset stopwatch
function resetTimer() {
  stopTimer();
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

// Button events
document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);
