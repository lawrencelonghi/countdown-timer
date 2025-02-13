const counter = document.getElementById('counter');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');

function startCountdown(){
const number = +counter.innerHTML
counter.textContent = number - 1
}

startBtn.addEventListener('click', ()=>{
  setTimeout((startCountdown),1000)
})
