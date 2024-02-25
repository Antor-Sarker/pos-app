export default function cartCalculate(cartData){
    let subTotal =0
    let countProducts = 0

    cartData.forEach(item => {
        subTotal += item.price * item.count
        countProducts += item.count
    });

    let tax = ((subTotal/100) * 5)
    let shipping = ((subTotal/100))

    let total = subTotal + tax + shipping
    
    tax = tax.toFixed(2)
    shipping = shipping.toFixed(2)
    total = total.toFixed(2)

    return {subTotal, tax, shipping, countProducts, total}
}