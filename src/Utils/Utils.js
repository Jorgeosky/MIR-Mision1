function formatTime(num) {
  let min = Math.floor(num / 60);
  let seg = num - min * 60;
  min = `0${min}`;
  seg = seg < 10 ? `0${seg}` : seg;
  return `${min}:${seg}`;
}

async function fetchApi() {
  // eslint-disable-next-line no-undef
  const response = await fetch('https://fakestoreapi.com/products');
  const responseJSON = await response.json();
  return responseJSON;
}

export {
  formatTime, fetchApi,
};
