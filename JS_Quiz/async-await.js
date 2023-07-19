async function f() {
  let result = "first!";
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });

  result = await promise;

  console.log(result);
}

f(); // done!
// result = await promise; 라인에서 프로미스가 처리될 때까지 대기.
// 1초 후 resolve('done!') 이 프로미스 객체에 결과값으로 result에 할당된다.
