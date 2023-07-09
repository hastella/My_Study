const animals = ["cat", "dog", "puppy", "rabbit"];

function callback(animal) {
  if (animal.length < 4) {
    return true;
  } else {
    return false;
  }
}

const newAnimals = animals.filter(callback);
console.log(newAnimals); // ['cat', 'dog]
