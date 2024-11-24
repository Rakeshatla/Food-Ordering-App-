const TotalBill = (cartitems) => {
    // console.log(cartitems)
    const total = cartitems.reduce((sum, item) => {
        const price = item.card.info.price || item.card.info.defaultPrice;
        return sum + price;
    }, 0);
    // Convert from cents to rupees
    return total / 100
};
export default TotalBill;