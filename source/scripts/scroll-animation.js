const headerElement = document.querySelector('.main-header:not(.main-header--not-sticky)');
const animateAppearanceElements = document.querySelectorAll('.projects__project');
const scrollToTopButton = document.querySelector('.scroll-to');
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

const animateHeader = (delta, scrollTop) => {
  if (headerElement) {
    headerElement.classList.toggle('main-header--sticky', (scrollTop >= SCROLLED_HEADER_START) && (delta > 0));
  }
};

const animateScrollToTopButton = (delta, scrollTop) => {
  if (scrollToTopButton) {
    scrollToTopButton.classList.toggle('is-visible', (scrollTop >= SCROLLED_HEADER_START) && (delta < 0));
  }
};

const initScrollAnimation = () => {
  animateAppearance();

  const onWindowScroll = () => {
    const scrollTop = window.scrollY;
    const delta = scrollTop - scrollStarted;

    animateHeader(delta, scrollTop);
    animateAppearance();
    animateScrollToTopButton(delta, scrollTop);

    scrollStarted = scrollTop;
  };

  window.addEventListener('scroll', onWindowScroll);
};

export { initScrollAnimation };
