const progressBar = document.querySelector('.animation__progress-bar');

const initProgressBar = () => {
  if (!progressBar) {
    return null;
  }

  const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  window.addEventListener('scroll', () => {
    const windowScroll = window.scrollY;
    const progressBarWidth = (windowScroll / windowHeight).toFixed(2);

    progressBar.style.transform = `scaleX(${progressBarWidth})`;
  });
};

export { initProgressBar };
