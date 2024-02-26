export default function cartCalculate(cartData, isDiscount) {
  let subTotal = 0.0;
  let countProducts = 0;
  let discount = 0;

  //count tottal product & calculate subTotal price
  cartData.forEach((item) => {
    subTotal += item.price * item.count;
    countProducts += item.count;
  });

  //Calculate other cost & Discount
  let tax = (subTotal / 100) * 5;
  let shipping = subTotal / 100;
  let total = subTotal + tax + shipping;
  discount = isDiscount ? (total / 100) * 15 : 0;
  total = total - discount;

  total = total.toFixed(2);
  tax = tax.toFixed(2);
  shipping = shipping.toFixed(2);
  discount = discount.toFixed(2);

  return { subTotal, discount, tax, shipping, countProducts, total };
}
