// Object.freeze() vs Object.seal()
const employee = { name: "Stella" };

// Object.freeze(employee);
// employee.name = "freeze는 못바꾸지~";
// console.log(employee.name); // Stella

Object.seal(employee);
employee.name = "seal은 바꿀 수 있지~";
console.log(employee.name); // seal은 바꿀 수 있지~
