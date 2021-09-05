let timer = document.querySelector('.timer');
let timeMinut = 30 * 60;
setInterval(() => {
  let seconds = timeMinut % 60;
  let minuts = (timeMinut / 60) % 60;
  let strTimer = `${Math.trunc(minuts)}:${seconds} Осталось до конца акции`;
  timer.innerHTML = strTimer;
  --timeMinut;
}, 1000);
