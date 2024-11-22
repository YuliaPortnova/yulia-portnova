const header = document.querySelector('.main-header:not(.main-header--not-sticky)');
const SCROLLED_HEADER_START = 500;

let scrollStarted = 0;

const initStickyHeader = () => {
  if (!header) {
    return null;
  }
  const onWindowScroll = () => {
    const scrollTop = window.scrollY;
    const delta = scrollTop - scrollStarted;
    // console.log(scrollTop, SCROLLED_HEADER_START, delta);
    header.classList.toggle('main-header--sticky', (scrollTop >= SCROLLED_HEADER_START) && (delta > 0));
    scrollStarted = scrollTop;
  };

  window.addEventListener('scroll', onWindowScroll);
};

export { initStickyHeader };
