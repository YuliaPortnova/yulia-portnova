const headerElement = document.querySelector('.main-header:not(.main-header--not-sticky)');
const animateAppearanceElements = document.querySelectorAll('.projects__project');
const SCROLLED_HEADER_START = 500;
const Y_TRANSLATION = 120;
const screenHeight = document.documentElement.clientHeight;

let scrollStarted = 0;

const isVisible = (element) => {
  const elementBoundary = element.getBoundingClientRect();
  const top = elementBoundary.top;
  const bottom = elementBoundary.bottom;
  return (top >= 0) && (bottom - Y_TRANSLATION <= screenHeight);
};

const animateAppearance = () => {
  if (animateAppearanceElements) {
    animateAppearanceElements.forEach((element) => {
      if (isVisible(element)) {
        element.classList.add('is-active');
      }
    });
  }
};

const animateHeader = () => {
  if (headerElement) {
    const scrollTop = window.scrollY;
    const delta = scrollTop - scrollStarted;
    // console.log(scrollTop, SCROLLED_HEADER_START, delta);
    headerElement.classList.toggle('main-header--sticky', (scrollTop >= SCROLLED_HEADER_START) && (delta > 0));
    scrollStarted = scrollTop;
  }
};

const initScrollAnimation = () => {
  animateAppearance();

  const onWindowScroll = () => {
    animateHeader();
    animateAppearance();
  };

  window.addEventListener('scroll', onWindowScroll);
};

export { initScrollAnimation };
