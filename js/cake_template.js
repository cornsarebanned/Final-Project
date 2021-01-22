function load() {
    var urlParams = new URLSearchParams(window.location.search);
    var image = "<img src = " + '"' + urlParams.get('img') + '" width="450" height="450">';
    var price = "$" + urlParams.get('price')
    document.getElementById('productName').innerHTML = urlParams.get('name');
    document.getElementById('productDesc').innerHTML = urlParams.get('desc');
    document.getElementById('productPrice').innerHTML = price;
    document.getElementById('productImg').innerHTML = image;
}

document.onload = load();
