document.getElementById('paymentForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  const formData = new FormData(this);

  // Append cart items to the form data
  cart.forEach((item, index) => {
    formData.append('cart', JSON.stringify(cart));
  });

  // Send the form data to the server using fetch
  fetch('process_payment.php', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Payment successful, do something
      alert('Payment successful!');
      sessionStorage.removeItem('cart');
      window.location.href = 'confirmation.html';
    } else {
      // Payment failed, handle the error
      alert('Payment failed!');
    }
  })
  .catch(error => {
    console.error(error);
    alert('An error occurred while processing the payment.');
  });
});
