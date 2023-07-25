const a = {
  stringField: "Joe",
  nestedField: { field: "Nested" },
};
const b = JSON.parse(JSON.stringify(a)); // !Deep copy!
b.stringField = "Bob";
b.nestedField.field = "Changed";
console.log(a.stringField, a.nestedField.field); // Joe Nested
console.log(b.stringField, b.nestedField.field); // Bob Changed

// JSON.stringify로 a를 문자열로 바꿔주기 때문에 기존 객체 참조값이 사라진다. 다시 JSON.parse을 이용해 객체로 변환하여 새로운 객체를 만들어주기 때문에 깊은 복사가 이뤄지는 것이다! 때문에 a와 b는 서로 다른 객체여서 b의 값을 바꿔도 a의 값은 바뀌지 않는다.
