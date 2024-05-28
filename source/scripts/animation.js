const burgerArrowButton = document.querySelector('.burger-arrow');

const animateBurgerArrow = () => {
  if (burgerArrowButton) {
    const onBurgerArrowButtonClick = () => {
      burgerArrowButton.classList.toggle('is-active');
    };
    burgerArrowButton.addEventListener('click', onBurgerArrowButtonClick);
  }
};

const initAnimation = () => {
  animateBurgerArrow();
};

export {initAnimation};
