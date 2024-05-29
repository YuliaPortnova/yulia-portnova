const burgerArrowButton = document.querySelector('.burger-arrow');
const starButton = document.querySelector('.star');

const activateButton = (button) => {
  if (button) {
    const onButtonClick = () => {
      button.classList.toggle('is-active');
    };
    button.addEventListener('click', onButtonClick);
  }
};

const initAnimation = () => {
  activateButton(burgerArrowButton);
  activateButton(starButton);
};

export {initAnimation};
