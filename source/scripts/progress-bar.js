import { throttle } from './utils/throttle';

const progressBar = document.querySelector('.animation__progress-bar');

const recalculateProgress = () => {
  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const windowScroll = window.scrollY;
  const progressBarWidth = (windowScroll / windowHeight).toFixed(2);

  progressBar.style.transform = `scaleX(${progressBarWidth})`;
};

const throttledRecalculateProgress = throttle(recalculateProgress, 50);

const initProgressBar = () => {
  if (!progressBar) {
    return null;
  }

  window.addEventListener('scroll', throttledRecalculateProgress);
  window.addEventListener('resize', throttledRecalculateProgress);
};

export { initProgressBar };
