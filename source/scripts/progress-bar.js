import { throttle } from './utilities';

const progressBar = document.querySelector('.animation__progress-bar');

const recalculateProgress = () => {
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const windowScroll = window.scrollY;
  const progressBarWidth = (windowScroll / windowHeight).toFixed(2);

  progressBar.style.transform = `scaleX(${progressBarWidth})`;
};

const initProgressBar = () => {
  if (!progressBar) {
    return null;
  }

  window.addEventListener('scroll', throttle(() => {
    recalculateProgress();
  }));
  window.addEventListener('resize', throttle(() => {
    recalculateProgress();
  }));
};

export { initProgressBar };
