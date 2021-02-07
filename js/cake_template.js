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


// Parsing Form to CHECKOUT CART (START)
const consumerForm = document.querySelector('.consumer_selection'); 
console.log(consumerForm);
const consumerFormRadio = document.querySelectorAll('.consumer_radioBtn > div > input'); //Nodelist(3)
console.log(consumerFormRadio);
const sixInch = document.querySelector('#six_inch');
console.log(sixInch.value);
// console.log(sixInch);
const eightInch = document.querySelector('#eight_inch');
// console.log(eightInch);
const tenInch = document.querySelector('#ten_inch');
// console.log(tenInch);
const noOfCandles = document.querySelector('#candlesQuantity');
// console.log(noOfCandles.value);

consumerForm.addEventListener('submit', function(e){

    e.preventDefault();
    console.log(e.target); //consumerForm

    if(sixInch.checked == true){
        // alert(sixInch.value +'" inch cake selected');
        if(noOfCandles.value == 0){
            //Prompt user to check whether they want any candle
            alert('Will you like to include any candles? If not, press submit to continue.');
            }
    }else if(eightInch.checked == true){
        // alert(eightInch.value + '" inch cake selected');
        if(noOfCandles.value == 0){
            //Prompt user to check whether they want any candle
            alert('Will you like to include any candles? If not, press submit to continue.');
            }
    }else if(tenInch.checked == true){
        // alert(tenInch.value + '" inch cake selected');
        if(noOfCandles.value == 0){
            //Prompt user to check whether they want any candle
            alert('Will you like to include any candles? If not, press submit to continue.');
            }
    }else{
        alert('Please indicate the size selection.');
    } 

   

})
// Parsing Form to CHECKOUT CART (END)

