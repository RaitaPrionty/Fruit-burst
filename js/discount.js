// function for fruitprice
function fruitsPrice(id){
    
    const fruitprice = document.getElementById(id);
    const fruitpricetext = fruitprice.innerText;
    const fruitpricetextfloat = parseFloat(fruitpricetext);
    return fruitpricetextfloat;

    
    
}
// mango
document.getElementById('btn-mango').addEventListener('click',function(){
    
    const price = fruitsPrice('Mango-price');
    const input = document.getElementById('Mango-input');
    const discount = price * 20/100;
    input.value = discount;
})
// jackfruit
document.getElementById('btn-jackfruit').addEventListener('click',function(){
    
    const price = fruitsPrice('jackfruit-price');
    const input = document.getElementById('jackfruit-input');
    const discount = price * 20/100;
    input.value = discount;
})
// watermelon
document.getElementById('btn-watermelon').addEventListener('click',function(){
    
    const price = fruitsPrice('watermelon-price');
    const input = document.getElementById('watermelon-input');
    const discount = price * 20/100;
    input.value = discount;
})
// balckberry
document.getElementById('berry-btn').addEventListener('click',function(){
    
    const price = fruitsPrice('berry-price');
    const input = document.getElementById('berry-input');
    const discount = price * 20/100;
    input.value = discount;
})
// strawberry
document.getElementById('straw-btn').addEventListener('click',function(){
    
    const price = fruitsPrice('straw-price');
    const input = document.getElementById('straw-input');
    const discount = price * 20/100;
    input.value = discount;
})
// waterfruits
document.getElementById('btn-waterfruit').addEventListener('click',function(){
    
    const price = fruitsPrice('waterfruit-price');
    const input = document.getElementById('waterfruit-input');
    const discount = price * 20/100;
    input.value = discount;
})
// waterapple
document.getElementById('apple-btn').addEventListener('click',function(){
    
    const price = fruitsPrice('apple-price');
    const input = document.getElementById('apple-input');
    const discount = price * 20/100;
    input.value = discount;
})
// plam
document.getElementById('palm-btn').addEventListener('click',function(){
    
    const price = fruitsPrice('palm-price');
    const input = document.getElementById('palm-input');
    const discount = price * 20/100;
    input.value = discount;
})
// litchi
document.getElementById('btn-litchi').addEventListener('click',function(){
    
    const price = fruitsPrice('litchi-price');
    const input = document.getElementById('litchi-input');
    const discount = price * 20/100;
    input.value = discount;
})