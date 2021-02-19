function load() {
    var urlParams = new URLSearchParams(window.location.search);
    var image = "<img src = "+'"'+urlParams.get('img')+'">';
    var price = "$" + urlParams.get('price');
    document.getElementById('productName').innerHTML = urlParams.get('name');
    document.getElementById('productDesc').innerHTML = urlParams.get('desc');
    document.getElementById('productPrice').innerHTML = price;
    document.getElementById('productImg').innerHTML = image;
}

document.onload = load();

function sentToLocal() {
    var urlParams = new URLSearchParams(window.location.search);
    var pname = urlParams.get('name');
    var desc = urlParams.get('desc');
    var price = urlParams.get('price');
    var image = urlParams.get('img');
    var cakeSize = document.querySelector('[name="cakeSize"]:checked').value;
    var candles = document.querySelector('[name="candles"]').value;
        
    // get existing stored cakesData from local storage if any
    var storedCakesData =  JSON.parse(localStorage.getItem("cakesData"));
    var addCakeProduct;
    var updateId = 0;

    if (storedCakesData!==null) {      // have cakes sitting in cart page, awaiting checkout
        updateId = storedCakesData.length;
        
        addCakeProduct = {
            productId: updateId,
            productName: pname,
            description: desc,
            price: price,
            cakesQuantity: 1,
            cakeSize: cakeSize,
            candles: candles,
            imageUrl: image
            };
        storedCakesData[updateId] = addCakeProduct;
        localStorage.setItem("cakesData",JSON.stringify(storedCakesData));
    } else {                            // empty cart page, no cakes waiting to checkout, 
        addCakeProduct = [              
            {
            productId: 1,               // so add the very 1st cake to cart page
            productName: pname,
            description: desc,
            price: price,
            cakesQuantity: 1,
            cakeSize: cakeSize,
            candles: candles,
            imageUrl: image
            }];
        localStorage.setItem("cakesData",JSON.stringify(addCakeProduct));
        }
    }


// ======================================================================================
// Parsing Form to CHECKOUT CART (START)
// const consumerForm = document.querySelector('.consumer_selection'); 
// console.log(consumerForm);
// const consumerFormRadio = document.querySelectorAll('.consumer_radioBtn > div > input'); //Nodelist(3)
// console.log(consumerFormRadio);
// const sixInch = document.querySelector('#six_inch');
// console.log(sixInch.value);
// // console.log(sixInch);
// const eightInch = document.querySelector('#eight_inch');
// // console.log(eightInch);
// const tenInch = document.querySelector('#ten_inch');
// // console.log(tenInch);
// const noOfCandles = document.querySelector('#candlesQuantity');
// // console.log(noOfCandles.value);


// const sample = document.querySelectorAll('.consumer_radioBtn > div > input');
// console.log(sample);
// var prev = null;
// sample.forEach(element => {
//    if(sixInch.checked)     
// });


// consumerForm.addEventListener('submit', function(e){

//     e.preventDefault();
//     console.log(e.target); //consumerForm

//     if(sixInch.checked == true){
//         // alert(sixInch.value +'" inch cake selected');
//         //if(noOfCandles.value <= 0){
//             //Prompt user to check whether they want any candle
//             //alert('Will you like to include any candles? If not, press submit to continue.');
//             //    if(noOfCandles >= 0){
//             window.location = "cakes_cart.html";
            
//     }else if(eightInch.checked == true){
//         // alert(eightInch.value + '" inch cake selected');
//         //if(noOfCandles.value < 1){
//             //Prompt user to check whether they want any candle
//             //alert('Will you like to include any candles? If not, press submit to continue.');
//             window.location = "cakes_cart.html";
            
//     }else if(tenInch.checked == true){
//         // alert(tenInch.value + '" inch cake selected');
//         //if(noOfCandles.value < 1){
//             //Prompt user to check whether they want any candle
//             //alert('Will you like to include any candles? If not, press submit to continue.');
//             //}else{
//                 window.location = "cakes_cart.html";
//             //}
//     }else{
//         alert('Please indicate the size selection.');
//     } 

// })
// Parsing Form to CHECKOUT CART (END)

