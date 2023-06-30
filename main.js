const lodash = require("lodash");

const object4 = lodash.cloneDeep(object1);

console.log(object1 === object4);
object4.food.us = "buger";
console.log(object1);
console.log(object4);
