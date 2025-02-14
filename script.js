const counter = document.getElementById('counter');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const stopBtn = document.getElementById('stop-btn')
let intervalId


function startCountdown(){
const number = +counter.innerHTML
if(number > 0){
counter.textContent = number - 1
}else { clearInterval(intervalId)}
}
 startBtn.addEventListener('click', ()=>{
  if (intervalId) return
  intervalId = setInterval((startCountdown),1000)})

resetBtn.addEventListener('click', () =>{
  clearInterval(intervalId)
  intervalId = null
  counter.textContent = 10
})
stopBtn.addEventListener('click', () =>{
  clearInterval(intervalId)
  intervalId = null;
  counter.textContent = innerHTML
})
