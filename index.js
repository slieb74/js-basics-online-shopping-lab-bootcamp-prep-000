var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var obj = {};
 var itemPrice = Math.floor(Math.random()*100)
 obj = {item: itemPrice}
 cart.push(obj)
 return (`${item} has been added to your cart.`)
}

function viewCart() {
  var x = []
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  }
  else {
    var y = 'In your cart'
  for (let i =0; i < cart.length; i++) {
    x.push(`you have ${item} at $${Math.random()*100},`)
  }
  return `${y} ${x}.`
  }
}

function total() {
  var sum = 0
  for(let i = 0; i < cart.length; i++) {
    sum += cart[i]
  }
  //return sum
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return "Sorry, we don't have a credit card on file for you."
  }
  cart = [];
  return (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
}
