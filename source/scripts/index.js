import { initMainMenu } from './main-menu.js';
import { initAnimation } from './animation.js';
import { initScrollAnimation } from './scroll-animation.js';
import { initProgressBar } from './progress-bar.js';
import { activateParallax } from './parallax.js';

const indexHero = document.querySelector('.hero--index');

initAnimation();
initScrollAnimation();
initProgressBar();
initMainMenu();
activateParallax(indexHero);
