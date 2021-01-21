function load() {
    var urlParams = new URLSearchParams(window.location.search);
    var image = "<img src = "+'"'+urlParams.get('img')+'">';
    document.getElementById('productName').innerHTML = urlParams.get('name');
    document.getElementById('productDesc').innerHTML = urlParams.get('desc');
    document.getElementById('productImg').innerHTML = image;
}

document.onload = load();