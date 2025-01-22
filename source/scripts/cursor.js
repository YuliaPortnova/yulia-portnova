const links = document.querySelectorAll(('projects__img-link'));
const cursor = document.querySelector('.cursor');

const initCursor = () => {
  if (links && cursor) {
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

    const updateCursor = () => {
      const diffX = Math.round(mouse.x - position.x);
      const diffY = Math.round(mouse.y - position.y);

      position.x = Math.round(position.x + diffX * PARAMS.speed);
      position.y = Math.round(position.y + diffY * PARAMS.speed);
      const translate = `translate(${mouse.x}px, ${mouse.y}px)`;
      cursor.style.transform = translate;
    };

    links.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        console.log("hgshd");
        cursor.style.fill = '#fb2df7';
      });

      link.addEventListener('mouseleave', () => {
        cursor.style.fill = '#245852';
      });
    });

    window.addEventListener('mousemove', (event) => {
      mouse.x = event.clientX - PARAMS.offset;
      mouse.y = event.clientY + window.scrollY - PARAMS.offset;
    });

    let scrollStarted = 0;

    window.addEventListener('scroll', () => {
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
};

export { initCursor };
