const originalPrice = 100;
const discountCoupon = 20;
function calculateDiscount(price, discountCoupon) {
  let discountedPrice = price - discountCoupon;
  return `The discounted price is Rs.${discountedPrice.toFixed(2)}`;
}

const result = calculateDiscount(originalPrice, discountCoupon);
console.log(result);
