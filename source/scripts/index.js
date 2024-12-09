import { initMainMenu } from './main-menu.js';
import { initAnimation } from './animation.js';
import { initScrollAnimation } from './scroll-animation.js';
import { initProgressBar } from './progress-bar.js';
import { activateParallaxMouseMove } from './parallax-mouse-move.js';

const parallaxMouseMoveContainer = document.querySelector('.parallax-mouse-move');

initAnimation();
initScrollAnimation();
initProgressBar();
initMainMenu();
activateParallaxMouseMove(parallaxMouseMoveContainer);
