let p = new Promise((resolve, reject) => {
  reject(Error("The Fails!"));
});
p.catch((error) => console.log(error.message));
p.catch((error) => console.log(error.message));
// 콘솔이 두번 찍힌다

let t = new Promise((resolve, reject) => {
  return Promise.reject(Error("The Fails!"));
});
t.catch((error) => console.log(error.message));
t.catch((error) => console.log(error.message));
// 에러발생
// 이유는? Promise 생성자 함수 내부에서는 return 구문으로 프로미스를 반환하면 안된다. 생성자 함수는 비동기 작업이 끝나면 resolve 또는 reject 함수를 호출하여 프로미스를 결정(resolve)하거나 거부(reject)하는 역할을 수행해야 한다.
