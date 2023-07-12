// Object.entries
// Object.entries는 객체의 [key, value] 쌍의 배열을 반환
// Object.entries(obj) -> [[key, value], [key, value], ...]

class MySort {
  constructor(object) {
    this.object = object;
  }

  getSort() {
    return Object.entries(this.object)[0][1].sort()[
      Object.values(this.object).length
    ];
  }
}

const object = {
  month: ["July", "September", "January", "December"],
};

const sortMe = new MySort(object);

console.log(sortMe.getSort()); // January
