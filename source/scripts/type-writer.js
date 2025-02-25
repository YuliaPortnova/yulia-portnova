const typeWriter = (element) => {
  let i = 0;
  const text = element.textContent;
  element.textContent = '';
  const speed = 80;

  function print() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(print, speed);
    }
  }

  print();
};

export { typeWriter };


