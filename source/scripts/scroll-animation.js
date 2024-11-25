const headerElement = document.querySelector('.main-header:not(.main-header--not-sticky)');
const projectElements = document.querySelectorAll('.projects__project');
const SCROLLED_HEADER_START = 500;
const Y_TRANSLATION = 120;
const screenHeight = document.documentElement.clientHeight;

let scrollStarted = 0;

const initScrollAnimation = () => {
  if (projectElements) {
    const isVisible = (element) => {
      const elementBoundary = element.getBoundingClientRect();
      const top = elementBoundary.top;
      const bottom = elementBoundary.bottom;
      return (top >= 0) && (bottom - Y_TRANSLATION <= screenHeight);
    };

    projectElements.forEach((element) => {
      if (isVisible(element)) {
        element.classList.add('is-active');
      }
    });
  }

  const onWindowScroll = () => {
    if (headerElement) {
      const scrollTop = window.scrollY;
      const delta = scrollTop - scrollStarted;
      // console.log(scrollTop, SCROLLED_HEADER_START, delta);
      headerElement.classList.toggle('main-header--sticky', (scrollTop >= SCROLLED_HEADER_START) && (delta > 0));
      scrollStarted = scrollTop;
    }

    if (projectElements) {
      const isFullyVisible = (element) => {
        const elementBoundary = element.getBoundingClientRect();
        const top = elementBoundary.top;
        const bottom = elementBoundary.bottom;
        return (top >= 0) && (bottom <= screenHeight);
      };

      projectElements.forEach((element) => {
        if (isFullyVisible(element)) {
          element.classList.add('is-active');
        }
      });
    }
  };

  window.addEventListener('scroll', onWindowScroll);
};

export { initScrollAnimation };
