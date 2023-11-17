function calculateCircleArea(radius = 5) {
  const area = Math.PI * Math.pow(radius, 2);
  return area;
}

const radius1 = 3;
const area1 = calculateCircleArea(radius1);
console.log(
  `The area of the circle with radius ${radius1} is: ${area1.toFixed(2)}`
);

const area2 = calculateCircleArea();
console.log(
  `The area of the circle with the default radius is: ${area2.toFixed(2)}`
);
