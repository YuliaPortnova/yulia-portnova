const animationButtons = document.querySelectorAll('.animation__button');

const activateButton = (button) => {
  if (button) {
    const onButtonClick = () => {
      button.classList.toggle('is-active');
    };
    button.addEventListener('click', onButtonClick);
  }
};

const initAnimation = () => {
  animationButtons.forEach((button) => {
    activateButton(button);
  });
};

export {initAnimation};
