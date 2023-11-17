const rateOfInterest = 8.2;

function calculateInterest(principal) {
  return principal * (rateOfInterest / 100);
}

console.log(calculateInterest(100000));
