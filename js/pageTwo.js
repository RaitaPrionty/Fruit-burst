

// function for page -2 price
// function for price
function price(priceId){
    const price = document.getElementById(priceId);
    const priceString = price.innerText;
    const priceFloat = parseFloat(priceString);
    return priceFloat;
}

// function for quantity
function Quantity(quantityid){
    const quantity = document.getElementById(quantityid);
    const Quantityvalue = quantity.value;
    const quantityFloat = parseFloat(Quantityvalue);
    return quantityFloat;
}
// strawbery
document.getElementById('straw-btn').addEventListener('click',function(){
    const Price = price('straw-price');
    const quantity = Quantity('straw-quantity');
    const totalPrice = Price * quantity;
    const input = document.getElementById('straw-input');
    input.value = totalPrice;
})
// green apple
document.getElementById('apple-btn').addEventListener('click',function(){
    const Price = price('apple-price');
    const quantity = Quantity('apple-quantity');
    const totalPrice = Price * quantity;
    const input = document.getElementById('apple-input');
    input.value = totalPrice;
})
// mealon
document.getElementById('mealon-btn').addEventListener('click',function(){
    const Price = price('mealon-price');
    const quantity = Quantity('mealon-quantity');
    const totalPrice = Price * quantity;
    const input = document.getElementById('mealon-input');
    input.value = totalPrice;
})
// orange
document.getElementById('orange-btn').addEventListener('click',function(){
    const Price = price('orange-price');
    const quantity = Quantity('orange-quantity');
    const totalPrice = Price * quantity;
    const input = document.getElementById('orange-input');
    input.value = totalPrice;
})
// pomgrade
document.getElementById('pomgrade-btn').addEventListener('click',function(){
    const Price = price('pomgrade-price');
    const quantity = Quantity('pomgrade-quantity');
    const totalPrice = Price * quantity;
    const input = document.getElementById('pomgrade-input');
    input.value = totalPrice;
})
// avo
document.getElementById('avo-btn').addEventListener('click',function(){
    const Price = price('avo-price');
    const quantity = Quantity('avo-quantity');
    const totalPrice = Price * quantity;
    const input = document.getElementById('avo-input');
    input.value = totalPrice;
})
// graps
document.getElementById('graps-btn').addEventListener('click',function(){
    const Price = price('graps-price');
    const quantity = Quantity('graps-quantity');
    const totalPrice = Price * quantity;
    const input = document.getElementById('graps-input');
    input.value = totalPrice;
})
//mango
document.getElementById('mango-btn').addEventListener('click',function(){
    const Price = price('mango-price');
    const quantity = Quantity('mango-quantity');
    const totalPrice = Price * quantity;
    const input = document.getElementById('mango-input');
    input.value = totalPrice;
})


    