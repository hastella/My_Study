const promise = new Promise((res) => res(2)); // 2
promise
  .then((v) => {
    console.log(v); // 2
    return v * 2; // 4
  })
  .then((v) => {
    console.log(v); // 4
    return v * 2; // 8
  })
  .finally((v) => {
    // finally는 인자를 받지 않는다!!
    console.log(v); // undefined
    return v * 2; // undefined
  })
  .then((v) => {
    console.log(v); // 8
  });
