import confetti from 'canvas-confetti';
import './style.css';

const today = new Date();

const todayFullYear = today.getFullYear();

const todayIsFriday = today.getDay() === 5;

const qustionElm = document.querySelector('#friday-qustion');
const answerElm = document.querySelector('#friday-answer');
const footerElm = document.querySelector('#footer');

qustionElm.innerHTML = '&nbsp;&nbsp;今天是星期五吗？';
answerElm.innerHTML = todayIsFriday ? '是的' : '不是';

footerElm.innerHTML = `
  <span>2009</span>
  <span> ~ </span>
  <span>${todayFullYear}</span>
`;

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const getWindowSize = () => {
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const height =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  return { width, height };
};

const showConfetti = (x, y) => {
  const { width, height } = getWindowSize();
  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { x: x / width, y: y / height },
  });
};

const startIntervalConfetti = () => {
  setInterval(() => {
    const { width, height } = getWindowSize();
    const x = randomInRange(width / 3, width - width / 4);
    const y = randomInRange(height / 3, height - height / 4);
    showConfetti(x, y);
  }, 3000);
};

if (todayIsFriday) {
  startIntervalConfetti();
}

document.body.addEventListener('click', function (e) {
  showConfetti(e.pageX, e.pageY);
});
