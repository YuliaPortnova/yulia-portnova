const calculateCenterX = (parallaxBox) => {
  const parallaxWidth = parallaxBox.offsetWidth;
  return parallaxWidth / 2;
};

const calculateCenterY = (parallaxBox) => {
  const parallaxHeight = parallaxBox.offsetHeight;
  return parallaxHeight / 2;
};

const activateParallax = (parallaxBox) => {
  if (!parallaxBox) {
    return;
  }
  const layers = parallaxBox.querySelectorAll('.parallax-layer');
  let boxCenterX = calculateCenterX(parallaxBox);
  let boxCenterY = calculateCenterY(parallaxBox);

  const onParallaxBoxMouseMove = (event) => {
    layers.forEach((layer) => {
      const layerSpeed = layer.dataset.speed;
      const coordX = event.clientX - boxCenterX;
      const coordY = event.clientY - boxCenterY;
      const x = (coordX * layerSpeed).toFixed(2);
      const y = (coordY * layerSpeed).toFixed(2);
      layer.style.transform = `translate(${x}px, ${y}px)`;
    });
  };

  window.addEventListener('resize', () => {
    boxCenterX = calculateCenterX(parallaxBox);
    boxCenterY = calculateCenterY(parallaxBox);
  });
  parallaxBox.addEventListener('mousemove', onParallaxBoxMouseMove);
};

export { activateParallax };
