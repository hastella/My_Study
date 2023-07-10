// 재귀함수
const myFunc = (str) => {
  if (str.length > 1) {
    return myFunc(str.slice(1));
    // myFunc('ello world')
    // myFunc('llo world')
    // myFunc('lo world')
    // myFunc('o world')
    // myFunc(' world')
    // ...
    // myFunc('d')
  }
  return str; // 'd'
};
console.log(myFunc("Hello world")); // 'd'
