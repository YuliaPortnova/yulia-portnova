import { initMainMenu } from './main-menu.js';
import { initAnimation } from './animation.js';
import { initScrollAnimation } from './scroll-animation.js';
import { initProgressBar } from './progress-bar.js';
import { activateParallaxMouseMove } from './parallax-mouse-move.js';
import { initCursor } from './cursor.js';
import { typeWriter } from './type-writer.js';

const parallaxMouseMoveContainer = document.querySelector('.parallax-mouse-move');
const elementToPrint = document.querySelector('.hero__description');

initAnimation();
initScrollAnimation();
initProgressBar();
initMainMenu();
activateParallaxMouseMove(parallaxMouseMoveContainer);
initCursor();
typeWriter(elementToPrint);
