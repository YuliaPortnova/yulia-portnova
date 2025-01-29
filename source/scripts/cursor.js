const imgLinks = document.querySelectorAll(('.projects__img-link'));
const links = document.querySelectorAll(('.projects__link, .main-header__link'));
const cursor = document.querySelector('.cursor');
const cursorCircle = document.querySelector('.cursor circle');
const footer = document.querySelector('.main-footer');
const footerLinks = footer.querySelectorAll('.main-footer__link');
const scrollButton = document.querySelector('.scroll-to');

const initCursor = () => {
  if (links && cursor && cursorCircle) {
    if (window.matchMedia('(pointer: coarse)').matches) {
      cursor.style.display = 'none';
    } else {
      const PARAMS = {
        speed: 0.2,
        offset: Math.round(cursor.getBoundingClientRect().width / 2)
      };

      const mouse = {
        x: null,
        y: null
      };

      const position = {
        x: null,
        y: null
      };

      let isMouseMoved = false;

      const updateCursor = () => {
        if (isMouseMoved) {
          const diffX = Math.round(mouse.x - position.x);
          const diffY = Math.round(mouse.y - position.y);

          position.x = Math.round(position.x + diffX * PARAMS.speed);
          position.y = Math.round(position.y + diffY * PARAMS.speed);
          const translate = `translate(${mouse.x}px, ${mouse.y}px)`;
          cursor.style.transform = translate;
        }
        isMouseMoved = false;
      };

      const changeCursor = (color, transform) => {
        cursor.style.fill = color;
        cursorCircle.style.transform = transform;
      };

      imgLinks.forEach((link) => {
        link.addEventListener('mouseenter', () => {
          changeCursor('rgba(251, 45, 247, 0.8)', 'scale(0.6)');
        });

        link.addEventListener('mouseleave', () => {
          changeCursor('rgba(36, 88, 82, 0.4)', 'scale(1)');
        });
      });

      links.forEach((link) => {
        link.addEventListener('mouseenter', () => {
          changeCursor('rgba(36, 88, 82, 0.8)', 'scale(0.6)');
        });

        link.addEventListener('mouseleave', () => {
          changeCursor('rgba(36, 88, 82, 0.8)', 'scale(1)');
        });
      });

      footer.addEventListener('mouseenter', () => {
        cursor.style.fill = 'rgba(251, 45, 247, 0.6)';
      });

      footer.addEventListener('mouseleave', () => {
        cursor.style.fill = 'rgba(36, 88, 82, 0.6)';
      });

      footerLinks.forEach((link) => {
        link.addEventListener('mouseenter', () => {
          changeCursor('rgba(251, 45, 247, 0.9)', 'scale(0.5)');
        });

        link.addEventListener('mouseleave', () => {
          changeCursor('rgba(251, 45, 247, 0.9)', 'scale(1)');
        });
      });

      scrollButton.addEventListener('mouseenter', () => {
        cursorCircle.style.transform = 'scale(0)';
      });

      scrollButton.addEventListener('mouseleave', () => {
        cursorCircle.style.transform = 'scale(1)';
      });

      document.addEventListener('mouseleave', () => {
        cursor.style.opacity = 0;
      });

      document.addEventListener('mouseenter', () => {
        cursor.style.opacity = 1;
      });

      window.addEventListener('mousemove', (event) => {
        isMouseMoved = true;
        mouse.x = event.clientX - PARAMS.offset;
        mouse.y = event.clientY + window.scrollY - PARAMS.offset;
      });

      let scrollStarted = 0;

      window.addEventListener('scroll', () => {
        isMouseMoved = true;
        const scrollTop = window.scrollY;
        const delta = scrollTop - scrollStarted;
        mouse.y = mouse.y + delta;
        scrollStarted = scrollTop;
      });

      const requestAnimationHandler = () => {
        updateCursor();
        requestAnimationFrame(requestAnimationHandler);
      };

      requestAnimationFrame(requestAnimationHandler);
    }
  }
};

export { initCursor };
