var cakeProducts = [
    {
        "productId": 1,
        "productName": "Blueberries and Vanilla Cake",
        "description": "Sandwiched between 2 Strawberry red coloured large macaron shells are Fresh Strawberries Cream and our Signature Chocolate Ganache filling.",
        "price": 55.00,
        "imageUrl": "images/cakes_images/blue_raspberry_cake.jpg"
    },
    {
        "productId": 2,
        "productName": "Blueberries Crusted Cheesecake",
        "description": "Three thick and rich layers of chocolate cake are stacked and immersed with generous amounts of mouth-watering Vanilla Buttercream. Last but not least, a beautiful melted dark chocolate drip is drizzled to create this masterpiece!",
        "price": 65.00,
        "imageUrl": "images/cakes_images/blueberry_cheesecake.jpg"
    },
    {
        "productId": 3,
        "productName": "Fresh Pink Marbled Cake with Macarons",
        "description": "Dark Valrhona Chocolate generously filled with Nutella jam, in house cooked milk crumbles, Nutella infused velvet cream cheese, crowned with artisanal French Chocolate Bar.",
        "price": 70.00,
        "imageUrl": "images/cakes_images/cake_burnout_candles.jpg"
    },
    {
        "productId": 4,
        "productName": "Strawberries and Minty Viola Cake",
        "description": "Sandwiched between 2 Strawberry red coloured large macaron shells are Fresh Strawberries Cream and our Signature Chocolate Ganache filling.",
        "price": 49.00,
        "imageUrl": "images/cakes_images/mint_strawberry_lg.jpg"
    },
    {
        "productId": 5,
        "productName": "Vanilla Cake with Chocolate Drizzle",
        "description": "Pastel pink floral cake with edible Dried Rose Petals with Classic Vanilla Cream.",
        "price": 69.90,
        "imageUrl": "images/cakes_images/heritage_chocolate_cake.jpg"
    },
    {
        "productId": 6,
        "productName": "Red Velvet Macarons Cake",
        "description": "Rich valrhona chocolate cake layers, frosted with chocolate fudge cream cheese, finished with a salted caramel sauce drizzle wreath and cocoa nibs.",
        "price": 69.00,
        "imageUrl": "images/cakes_images/macaron_cake.jpg"
    },
    {
        "productId": 7,
        "productName": "Cranberries Summer Peach Cake",
        "description": "Maple infused cake layerd with in house cooked Blueberry & Blackberry jam, fluffy smooth Cream Cheese Swirls and Fresh Berries.",
        "price": 50.00,
        "imageUrl": "images/cakes_images/xmas_redberry_cake.jpg"
    },
    {
        "productId": 8,
        "productName": "Raspberries and Chocolate Layered Cake",
        "description": "Adapted from the ever-so-popular Strawberries Shortcake, expect moist and Velvety Vanilla layers for this cake. Expect freshly Whipped Strawberries Chantilly and farm-picked sliced Strawberries.",
        "price": 55.00,
        "imageUrl": "images/cakes_images/xmas_chocolate_cake.jpg"
    },
    {
        "productId": 9,
        "productName": "White Xmas Cake with Cherries and Cookies",
        "description": "Made with a Dark Stout Beer, Molasses, Ginger, Nutmeg, Cinnamon and Cardamom then topped with a Sweet Cream Cheese frosting. It's sweet, spicy, comforting and indulgent all at the same time.",
        "price": 55.00,
        "imageUrl": "images/cakes_images/gingerbread_cake.jpg"
    },
    {
        "productId": 10,
        "productName": "Rainbow Sprinkled Star Shaped Funfetti Cake",
        "description": "Our very own rendition of the traditional Black Forest Cake. Moist Belgian Dark Chocolate Cake Sponge, layered with Chocolate Fudge and Madagascar Vanilla bean chantilly, textured with in-house cooked balsamic cherry jam with juicy plump cherry!",
        "price": 69.00,
        "imageUrl": "images/cakes_images/sparkles_cake.jpg"
    }
];

document.getElementById("cakes").innerHTML = `
<div id="container_products" class="container">
<div class="product-container">

${cakeProducts.map(function (cake) {
    return ` 
    <a href ="cake_template.html?img=${cake.imageUrl}&name=${cake.productName}&desc=${cake.description}&price=${cake.price}">
    <div class="indi-product">
        <div class="product-hvr">
            <div class="product">
                <img class="product-img" src="${cake.imageUrl}">
            </div>
            <div class="details">
                <div class="content">
                    <h5>${cake.productName}</h5>
                    <p>${cake.description}</p>
                </div>
            </div>
        </div>
        <p class="product-description">${cake.productName}</p>
        <p class="product-price">From $${cake.price}</p>
    </div>
    </a>
`
}).join('')}
</div>
    </div>
`

