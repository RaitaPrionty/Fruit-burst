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
    const mangoquantity = document.getElementById('mango-quantity');
    const mangoquantitystring = mangoquantity.value;
    const mangoquantityfloat = parseFloat(mangoquantitystring);
    const PriceMango = mangoquantityfloat*price
    const discountPrice = PriceMango * 20/100;
   const input = document.getElementById('Mango-input');
    input.value = discountPrice;
})
// jackfruit
document.getElementById('btn-jackfruit').addEventListener('click',function(){
    
    const price = fruitsPrice('jackfruit-price');
    const mangoquantity = document.getElementById('jackfruit-quantity');
    const mangoquantitystring = mangoquantity.value;
    const mangoquantityfloat = parseFloat(mangoquantitystring);
    const PriceMango = mangoquantityfloat*price
    const discountPrice = PriceMango * 20/100;
   const input = document.getElementById('jackfruit-input');
    input.value = discountPrice;
})
// watermelon
document.getElementById('btn-watermelon').addEventListener('click',function(){
    
    const price = fruitsPrice('watermelon-price');
    const mangoquantity = document.getElementById('watermelon-quantity');
    const mangoquantitystring = mangoquantity.value;
    const mangoquantityfloat = parseFloat(mangoquantitystring);
    const PriceMango = mangoquantityfloat*price
    const discountPrice = PriceMango * 20/100;
   const input = document.getElementById('watermelon-input');
    input.value = discountPrice;
})
// balckberry
document.getElementById('berry-btn').addEventListener('click',function(){
    
    const price = fruitsPrice('berry-price');
    const mangoquantity = document.getElementById('blackberry-quantity');
    const mangoquantitystring = mangoquantity.value;
    const mangoquantityfloat = parseFloat(mangoquantitystring);
    const PriceMango = mangoquantityfloat*price
    const discountPrice = PriceMango * 20/100;
   const input = document.getElementById('berry-input');
    input.value = discountPrice;
})
// strawberry
document.getElementById('straw-btn').addEventListener('click',function(){
    
    const price = fruitsPrice('straw-price');
    const mangoquantity = document.getElementById('strawberry-quantity');
    const mangoquantitystring = mangoquantity.value;
    const mangoquantityfloat = parseFloat(mangoquantitystring);
    const PriceMango = mangoquantityfloat*price
    const discountPrice = PriceMango * 20/100;
   const input = document.getElementById('straw-input');
    input.value = discountPrice;
})
// waterfruits
document.getElementById('btn-waterfruit').addEventListener('click',function(){
    
    const price = fruitsPrice('waterfruit-price');
    const mangoquantity = document.getElementById('waterfruit-quantity');
    const mangoquantitystring = mangoquantity.value;
    const mangoquantityfloat = parseFloat(mangoquantitystring);
    const PriceMango = mangoquantityfloat*price
    const discountPrice = PriceMango * 20/100;
   const input = document.getElementById('waterfruit-input');
    input.value = discountPrice;
})
// waterapple
document.getElementById('apple-btn').addEventListener('click',function(){
    
    const price = fruitsPrice('apple-price');
    const mangoquantity = document.getElementById('waterapple-quantity');
    const mangoquantitystring = mangoquantity.value;
    const mangoquantityfloat = parseFloat(mangoquantitystring);
    const PriceMango = mangoquantityfloat*price
    const discountPrice = PriceMango * 20/100;
   const input = document.getElementById('apple-input');
    input.value = discountPrice;
})
// plam
document.getElementById('palm-btn').addEventListener('click',function(){
    
    const price = fruitsPrice('palm-price');
    const mangoquantity = document.getElementById('palm-quantity');
    const mangoquantitystring = mangoquantity.value;
    const mangoquantityfloat = parseFloat(mangoquantitystring);
    const PriceMango = mangoquantityfloat*price
    const discountPrice = PriceMango * 20/100;
   const input = document.getElementById('palm-input');
    input.value = discountPrice;
})
// litchi
document.getElementById('btn-litchi').addEventListener('click',function(){
    
    const price = fruitsPrice('litchi-price');
    const mangoquantity = document.getElementById('litchi-quantity');
    const mangoquantitystring = mangoquantity.value;
    const mangoquantityfloat = parseFloat(mangoquantitystring);
    const PriceMango = mangoquantityfloat*price
    const discountPrice = PriceMango * 20/100;
   const input = document.getElementById('litchi-input');
    input.value = discountPrice;
})