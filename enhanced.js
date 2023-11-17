var name = "Sonam";
var location = "Mumbai";
var age = 13;

var intro = function () {
  console.log(
    "Hello!! I am " +
      this.name +
      ".I am a " +
      this.age +
      " years old,and I am from " +
      this.location +
      "."
  );
};

var anotherPerson = { name, location, age, intro };
anotherPerson.intro();
