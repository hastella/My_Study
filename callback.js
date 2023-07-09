const animals = ["cat", "dog", "puppy", "rabbit"];

function callback(animal) {
  return animal.length < 4;
}

const newAnimals = animals.filter(callback);
console.log(newAnimals); // ['cat', 'dog]
