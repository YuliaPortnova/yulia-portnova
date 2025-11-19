import { initMainMenu } from './main-menu.js';
import { initAnimation } from './animation.js';
import { initScrollAnimation } from './scroll-animation.js';
import { initProgressBar } from './progress-bar.js';
import { initCursor } from './cursor.js';
import { initTypeWriter } from './type-writer.js';

const elementToPrint = document.querySelector('.hero__description');

initAnimation();
initScrollAnimation();
initProgressBar();
initMainMenu();
initCursor();
initTypeWriter(elementToPrint);
