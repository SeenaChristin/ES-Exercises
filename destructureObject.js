function printPersonDetails1(person) {
  let { name, age, city } = person;
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`City: ${city}`);
}

function printPersonDetails2({ name, age, city }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log(`City: ${city}`);
}

const person1 = {
  name: "Alice",
  age: 30,
  city: "New-York",
};
const person2 = {
  name: "Mark",
  age: 40,
  city: "London",
};

printPersonDetails1(person1);
printPersonDetails2(person2);
