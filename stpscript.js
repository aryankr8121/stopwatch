const stopwatch = document.querySelector('.stopwatch');
const minutes = stopwatch.querySelector('.minutes');
const seconds = stopwatch.querySelector('.seconds');
const startBtn = stopwatch.querySelector('.start');
const stopBtn = stopwatch.querySelector('.stop');
const resetBtn = stopwatch.querySelector('.reset');

let timer;

function startTimer() {
  let sec = 0;
  let min = 0;
  timer = setInterval(() => {
    sec++;
    if (sec === 60) {
      sec = 0;
      min++;
    }
    minutes.textContent = pad(min);
    seconds.textContent = pad(sec);
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  stopTimer();
  minutes.textContent = '00';
  seconds.textContent = '00';
}

function pad(val) {
  return val < 10 ? `0${val}` : val;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
