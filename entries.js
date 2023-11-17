const person = {
  name: "Ashok",
  age: 30,
  city: "Kolkata",
};

for (const [key, value] of Object.entries(person)) {
  console.log(`${key}: ${value}`);
}
