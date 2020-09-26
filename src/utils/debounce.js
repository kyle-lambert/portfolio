function debounce(callback, delay) {
  let timer;
  return (bool) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(bool);
    }, delay);
  };
}

export default debounce;
