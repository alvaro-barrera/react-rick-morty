const request = (data, options) => {
  return fetch(data[0], data[1], options);
};

export default request;
