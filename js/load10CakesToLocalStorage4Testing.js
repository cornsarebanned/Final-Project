//set to local storage(JSON file in JS file)
//set JSON format to array
// for testing purposes only, here

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
