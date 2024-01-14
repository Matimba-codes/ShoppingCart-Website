# ShoppingCart-Website
 A website made with html, css, and javascript

User Manual: Shopping Cart Checkout Process

Table of Contents
No table of contents entries found.

The 'checkout.js', 'process_payment.php', 'confirmation.js', and 'confirmation.html' pages of the shopping cart checkout process are implemented in four pieces, and this user manual explains how to utilise each of them. Users can check their order, enter their payment information, and get a confirmation of their purchase during the checkout process.

1. Introduction
Users may easily finalise their purchase by going through a series of steps in the shopping cart checkout procedure. Displaying the order summary, gathering payment data, and verifying the order are all part of the procedure.

2. Prerequisites
You require the following in order to use the shopping cart checkout process:

- A web browser that supports JavaScript.
- A functioning internet connection.

3. Checkout Process Overview
There are four steps in the checkout process, each with a distinct function:

1. 'checkout.js': This JavaScript file manages the order summary display, gathers the user's payment information, and saves it in the browser's local storage. After submitting the form, it also leads the user to the confirmation page.
2. 'process_payment.php': This PHP code gets the form data submitted from the 'checkout.js' file, processes and validates it, and then enters the order details into a MySQL database. It gives back a JSON answer that shows the transaction was successful.
3. 'confirmation.js': This JavaScript code displays the user's payment information on the confirmation page after retrieving it from local storage.
4. "confirmation.html": This HTML page shows the user a confirmation message along with their contact information and order information.

4. Using the Checkout Process
Follow the steps below to use the shopping cart checkout process:

4.1. Adding Items to the Cart
Make sure you have added things to your cart by browsing the website and choosing the desired products before beginning the checkout procedure.

4.2. Reviewing the Order Summary
1. Click the "Checkout" option in the website's navigation menu to proceed to the checkout page.
2. The order summary portion of the checkout page shows the goods in your shopping cart and the total amount due.
3. Double-check that the order summary appropriately depicts the item(s) you plan to buy.

4.3. Providing Payment Information
1. Enter your name, card number, and CVV (Card Verification Value) in the payment form box.
2. Double-check that the payment information you input is correct and valid.
3. After entering the necessary data, click the "Submit" button.
4. The system will verify the payment information and validate the form.

4.4. Viewing the Confirmation Page
1. You will be instantly routed to the confirmation page after submitting the payment form.
2. A message confirming your purchase will appear on the confirmation page.
3. Your name, card number, and CVV are among the other pieces of personal information that are visible on the page.
4. Check the confirmation information to make sure it is accurate.

5. Conclusion
Congratulations! The checkout procedure for your shopping cart has been successfully finished. Now that your purchase has been confirmed, you can move on with the payment with confidence. Please get in touch with our support team for help if you run into any problems or have any other inquiries.
