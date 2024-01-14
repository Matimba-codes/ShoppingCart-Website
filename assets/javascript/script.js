function addToCart(productName, price) {
  let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  const product = {
    name: productName,
    price: price
  };
  cart.push(product);
  sessionStorage.setItem('cart', JSON.stringify(cart));
  alert('Product added to cart!');
}

