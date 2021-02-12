//set to local storage(JSON file in JS file)
//set JSON format to array

let myCakeProducts = [
  {
    productId: 1,
    productName: "Blueberries and Vanilla Cake",
    description: "Sandwiched between 2 Strawberry red coloured large macaron shells are Fresh Strawberries Cream and our Signature Chocolate Ganache filling.",
    price: 55.00,
    cakesQuantity: 1,
    cakeSize: 6, // cannot have hyphen for JSON in cake-size
    candles: 2,
    imageUrl: "images/cakes_images/blueRaspberryCrop_1_500x500.png"
  },
  {
    productId: 2,
    productName: "Blueberries Crusted Cheesecake",
    description: "Three thick and rich layers of chocolate cake are stacked and immersed with generous amounts of mouth-watering Vanilla Buttercream. Last but not least, a beautiful melted dark chocolate drip is drizzled to create this masterpiece!",
    price: 65.00,
    cakesQuantity: 2,
    cakeSize: 8,
    candles: 3,
    imageUrl: "images/cakes_images/blueberries_syrup_lg_crop_500x500.jpg"
  },
  {
    productId: 3,
    productName: "Fresh Pink Marbled Cake with Macarons",
    description: "Dark Valrhona Chocolate generously filled with Nutella jam, in house cooked milk crumbles, Nutella infused velvet cream cheese, crowned with artisanal French Chocolate Bar.",
    price: 70.00,
    cakesQuantity: 3,
    cakeSize: 10,
    candles: 4,
    imageUrl: "images/cakes_images/cake_burnout_candles_sm_resize1_500x500.jpg"
  },
  {
    productId: 4,
    productName: "Strawberries and Minty Viola Cake",
    description: "Sandwiched between 2 Strawberry red coloured large macaron shells are Fresh Strawberries Cream and our Signature Chocolate Ganache filling.",
    price: 49.00,
    cakesQuantity: 1,
    cakeSize: 6,
    candles: 1,
    imageUrl: "images/cakes_images/mint_strawberry_lg_crop_500x500.jpg"
  },
  {
    productId: 5,
    productName: "Vanilla Cake with Chocolate Drizzle",
    description: "Pastel pink floral cake with edible Dried Rose Petals with Classic Vanilla Cream.",
    price: 65.00,
    cakesQuantity: 1,
    cakeSize: 6,
    candles: 1,
    imageUrl: "images/cakes_images/heritage_chocolate_cake_crop_500x500.jpg"
  },
  {
    productId: 6,
    productName: "Red Velvet Macarons Cake",
    description: "Sandwiched between 2 Strawberry red coloured large macaron shells are Fresh Strawberries Cream and our Signature Chocolate Ganache filling.",
    price: 55.00,
    cakesQuantity: 1,
    cakeSize: 6,
    candles: 1,
    imageUrl: "images/cakes_images/macaron_cake_crop_500x500.jpg"
  },
  {
    productId: 7,
    productName: "Cranberries Summer Peach Cake",
    description: "Maple infused cake layerd with in house cooked Blueberry & Blackberry jam, fluffy smooth Cream Cheese Swirls and Fresh Berries.",
    price: 50.00,
    cakesQuantity: 1,
    cakeSize: 6,
    candles: 1,
    imageUrl: "images/cakes_images/xmas_redberry_crop_500x500.jpg"
  },
  {
    productId: 8,
    productName: "Raspberries and Chocolate Layered Cake",
    description: "Adapted from the ever-so-popular Strawberries Shortcake, expect moist and Velvety Vanilla layers for this cake. Expect freshly Whipped Strawberries Chantilly and farm-picked sliced Strawberries.",
    price: 55.00,
    cakesQuantity: 1,
    cakeSize: 6,
    candles: 1,
    imageUrl: "images/cakes_images/xmas_chocolate_cake_crop_500x500.jpg"
  },
  {
    productId: 9,
    productName: "White Xmas Cake with Cherries and Cookies",
    description: "Made with a Dark Stout Beer, Molasses, Ginger, Nutmeg, Cinnamon and Cardamom then topped with a Sweet Cream Cheese frosting. It's sweet, spicy, comforting and indulgent all at the same time.",
    price: 55.00,
    cakesQuantity: 1,
    cakeSize: 6,
    candles: 1,
    imageUrl: "images/cakes_images/gingerbread_cake_lg_crop_1_500x500.jpg"
  },
  {
    productId: 10,
    productName: "Rainbow Sprinkled Star Shaped Funfetti Cake",
    description: "Our very own rendition of the traditional Black Forest Cake. Moist Belgian Dark Chocolate Cake Sponge, layered with Chocolate Fudge and Madagascar Vanilla bean chantilly, textured with in-house cooked balsamic cherry jam with juicy plump cherry!",
    price: 69.00,
    cakesQuantity: 1,
    cakeSize: 6,
    candles: 1,
    imageUrl: "images/cakes_images/sparkles_cake_lg_crop1_500x500.jpg"
  }
];

// store arrays in local storage as key: cakesData
localStorage.setItem("cakesData",JSON.stringify(myCakeProducts));

    const inch8 = 12; // add $12 for 8inch cake choice
    const inch10 = 16; // add $16 for 12inch cake choice
    var selectedCakeSizeCost = 0.0; // updated cost of cake, depending on chosen cake size
    var subTotalCakeCost = 0.0;
    var totalCost = 0.0; // customer will pay this final amount, to pass to cakes_cart.html 
    var gst = 0.0;
    
    sessionStorage.setItem("totalCost",JSON.stringify(totalCost));
    sessionStorage.setItem("gst",JSON.stringify(gst));
    let output = "";
    // get stored data from in local storage
    var storedCakesData = JSON.parse(localStorage.getItem("cakesData"));
    // console.log(storedCakesData);

    for (let i = 0; i < storedCakesData.length; i++) {
      
      subTotalCakeCost = (storedCakesData[i].price * storedCakesData[i].cakesQuantity);
      // console.log("1 cake price =$"+storedCakesData[i].price+" x "+storedCakesData[i].cakesQuantity+" cakes=$"+subTotalCakeCost);
      totalCost = totalCost + subTotalCakeCost;
      sessionStorage.setItem("totalCost",JSON.stringify(totalCost));
      
      gst = (totalCost*0.07).toFixed(2);
      sessionStorage.setItem("gst",JSON.stringify(gst));

      switch(storedCakesData[i].cakeSize) {
        case 8:
          selectedCakeSizeCost = storedCakesData[i].price + inch8;
          break;
        case 10:
          selectedCakeSizeCost = storedCakesData[i].price + inch10;
          break;
        default: // 6inch here
          selectedCakeSizeCost = storedCakesData[i].price;
      } 
      // console.log("totalCost = "+totalCost);
      // console.log("gst = " + gst);
    output +=
    `
    <div class="container bg-white py-2 my-3">
    <form action="#" id="edit-cart${i}" method="post" enctype="multipart/form-data">
    <div class="row mb-3">
      <div class="col-12 col-sm-6">
        <div class="row">
          <div class="col-sm-6 col-md-3 mb-2 cartSmallScreenImage">
            <img src="${storedCakesData[i].imageUrl}"
                alt="${storedCakesData[i].productName}"
                class="rounded img-fluid d-block mx-auto" style="border:2px solid black;">
          </div>
          <div class="cart_product_font col-sm-6 col-md-8 mb-2">
          ${storedCakesData[i].productName}, ${storedCakesData[i].cakeSize} inch, 
          with ${storedCakesData[i].candles} candle(s)</div>
        </div>
      </div>
      <div class="col-12 col-sm-6">
        <div class="row">
          <div class="cart_productprice_font col-sm-3 text-left mb-2">
            $${selectedCakeSizeCost}  </div> 
          <div class="col-sm-3 text-left mb-2">
            ${storedCakesData[i].cakesQuantity} cakes =
          </div>
          <div class="cart_totalproductprice_font col-sm-4 text-left mb-2">$${subTotalCakeCost}</div>
          <div class="col-sm-2 text-right mb-2">
            <button type="button" class="btn btn-danger"><i
                class="fa fa-trash"></i></button>
          </div>
        </div>
      </div>
    </div>
    `   
        document.getElementById("cart").innerHTML = output;
    }
    console.log("totalCost = "+totalCost);
    console.log("gst = " + gst);
// --------------------------------------------------------------
// pass totalCost & gst to cakes_cart.html File, via localstorage

    document.getElementById("overallSubTotalCost").innerHTML = `$${totalCost}`;
    document.getElementById("gstHere").innerHTML = `$${gst}`;
    document.getElementById("overallTotalCost").innerHTML = `$${totalCost}`;

// --------------------------------------------------------------

//  var cakeProducts = [
//      {
//          "productId": 1,
//          "productName": "Blueberries and Vanilla Cake",
//          "description": "Sandwiched between 2 Strawberry red coloured large macaron shells are Fresh Strawberries Cream and our Signature Chocolate Ganache filling.",
//          "price": 55.00,
//          "imageUrl": "images/cakes_images/blueRaspberryCrop_1_500x500.png"
//      },
//      {
//          "productId": 2,
//          "productName": "Blueberries Crusted Cheesecake",
//          "description": "Three thick and rich layers of chocolate cake are stacked and immersed with generous amounts of mouth-watering Vanilla Buttercream. Last but not least, a beautiful melted dark chocolate drip is drizzled to create this masterpiece!",
//          "price": 65.00,         "imageUrl": "images/cakes_images/blueberries_syrup_lg_crop_500x500.jpg"
//      }
//  ];
/*
    },
    {
        "productId": 3,
        "productName": "Fresh Pink Marbled Cake with Macarons",
        "description": "Dark Valrhona Chocolate generously filled with Nutella jam, in house cooked milk crumbles, Nutella infused velvet cream cheese, crowned with artisanal French Chocolate Bar.",
        "price": 70.00,
        "imageUrl": "images/cakes_images/cake_burnout_candles_sm_resize1_500x500.jpg"
    },
    {
        "productId": 4,
        "productName": "Strawberries and Minty Viola Cake",
        "description": "Sandwiched between 2 Strawberry red coloured large macaron shells are Fresh Strawberries Cream and our Signature Chocolate Ganache filling.",
        "price": 49.00,
        "imageUrl": "images/cakes_images/mint_strawberry_lg_crop_500x500.jpg"
    },
    {
        "productId": 5,
        "productName": "Vanilla Cake with Chocolate Drizzle",
        "description": "Pastel pink floral cake with edible Dried Rose Petals with Classic Vanilla Cream.",
        "price": 65.99,
        "imageUrl": "images/cakes_images/heritage_chocolate_cake_crop_500x500.jpg"
    },
    {
        "productId": 6,
        "productName": "Red Velvet Macarons Cake",
        "description": "Rich valrhona chocolate cake layers, frosted with chocolate fudge cream cheese, finished with a salted caramel sauce drizzle wreath and cocoa nibs.",
        "price": 69.00,
        "imageUrl": "images/cakes_images/macaron_cake_crop_500x500.jpg"
    },
    {
        "productId": 7,
        "productName": "Cranberries Summer Peach Cake",
        "description": "Maple infused cake layerd with in house cooked Blueberry & Blackberry jam, fluffy smooth Cream Cheese Swirls and Fresh Berries.",
        "price": 50.00,
        "imageUrl": "images/cakes_images/xmas_redberry_crop_500x500.jpg"
    },
    {
        "productId": 8,
        "productName": "Raspberries and Chocolate Layered Cake",
        "description": "Adapted from the ever-so-popular Strawberries Shortcake, expect moist and Velvety Vanilla layers for this cake. Expect freshly Whipped Strawberries Chantilly and farm-picked sliced Strawberries.",
        "price": 55.00,
        "imageUrl": "images/cakes_images/xmas_chocolate_cake_crop_500x500.jpg"
    },
    {
        "productId": 9,
        "productName": "White Xmas Cake with Cherries and Cookies",
        "description": "Made with a Dark Stout Beer, Molasses, Ginger, Nutmeg, Cinnamon and Cardamom then topped with a Sweet Cream Cheese frosting. It's sweet, spicy, comforting and indulgent all at the same time.",
        "price": 55.00,
        "imageUrl": "images/cakes_images/gingerbread_cake_lg_crop_1_500x500.jpg"
    },
    {
        "productId": 10,
        "productName": "Rainbow Sprinkled Star Shaped Funfetti Cake",
        "description": "Our very own rendition of the traditional Black Forest Cake. Moist Belgian Dark Chocolate Cake Sponge, layered with Chocolate Fudge and Madagascar Vanilla bean chantilly, textured with in-house cooked balsamic cherry jam with juicy plump cherry!",
        "price": 69.00,
        "imageUrl": "images/cakes_images/sparkles_cake_lg_crop1_500x500.jpg"
    }
];
*/
//  document.getElementById("cart").innerHTML = `
//  <div id="container_products" class="container">
//      <div class="product-container">

//      ${cakeProducts.map(function (cake) {
//          return ` 
        
//              <div class="container bg-white py-2 my-5"> 
//              <form action="#" id="edit-cart" method="post" enctype="multipart/form-data">             <div class="row mb-3"> 
//                  <div class="col-12 col-sm-6"> 
//                  <div class="row">
//                      <div class="col-sm-6 col-md-3 mb-2"> 
//                      <img src="${cake.imageUrl}"
//                          alt="Picture of my Cake"
//                          class="rounded img-fluid d-block mx-auto" style="border:2px solid black;">
//                      </div>
//                      <div class="cart_product_font col-sm-6 col-md-8 mb-2">
//                      ${cake.productName} </div>
//                  </div>
//                  </div>

//                  <div class="col-12 col-sm-6">
//                  <div class="row">
//                      <div class="cart_productprice_font col-sm-3 text-left mb-2">
//                      $${cake.price} </div> 
//                      <div class="col-sm-3 text-left mb-2">
//                      <input type="number" name="quantity" value="1" size="1" class="form-control quantity-input"
//                          data-original="1">
//                      </div>
//                      <div class="cart_totalproductprice_font col-sm-4 text-left mb-2">$55.00</div>
//                      <div class="col-sm-2 text-right mb-2">
//                      <button type="button" class="btn btn-danger" onclick="cart.remove('1627023');"><i                         class="fa fa-trash"></i></button>
//                      </div>
//                  </div>
//                  </div>
//              </div>
//              </form>
//              </div> <!--End of container div (FORM)-->
        
//          `
//      }).join('')}
//      </div>
//  </div>
//  `



    