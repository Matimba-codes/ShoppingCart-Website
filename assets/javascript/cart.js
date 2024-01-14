function displayCartItems() {
  const cartItemsElement = document.getElementById('cartItems');
  const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

  cartItemsElement.innerHTML = '';

  if (cart.length === 0) {
    cartItemsElement.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.innerHTML = `
        <p>${item.name} - $${item.price.toFixed(2)}</p>
      `;
      cartItemsElement.appendChild(cartItem);
    });
  }
}

displayCartItems();

function checkout() {
  const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

  // Save the cart items and their prices in session storage
  sessionStorage.setItem('cart', JSON.stringify(cart));

  // Navigate to the checkout page
  window.location.href = 'checkout.html';
}
