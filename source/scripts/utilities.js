// function throttle (callee, timeout) {
//   let timer = null;
//   return function perform(...args) {
//     if (timer) {
//       return;
//     }
//     timer = setTimeout(() => {
//       callee(...args);
//       clearTimeout(timer);
//       timer = null;
//     }, timeout);
//   };
// }


const throttle = (callback, delayBetweenFrames = 100) => {
  let timeoutId, lastCallTime;

  return (...rest) => {
    const elapsedTime = Date.now() - lastCallTime;
    const delay = Math.max(delayBetweenFrames - elapsedTime, 0);
    window.clearTimeout(timeoutId);

    timeoutId = window.setTimeout(() => {
      callback(...rest);
      lastCallTime = Date.now();
    }, delay);
  };
};


export { throttle };
