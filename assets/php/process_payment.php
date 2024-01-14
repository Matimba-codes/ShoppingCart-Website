<?php
// Retrieve form data
$name = $_POST['name'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$address = $_POST['address'];

// Retrieve cart items
$cart = $_POST['cart'];
$cartItems = json_decode($cart, true);
$cartItems = [];
foreach ($_POST as $key => $value) {
  if (strpos($key, 'item_') === 0) {
    $item = json_decode($value, true);
    $cartItems[] = $item;
  }
}


// Insert form data and cart items into the MySQL database
// Modify the following code to match your MySQL database configuration
$servername = 'localhost';
$username = 'root';
$password = '';
$dbname = 'shopping_cart';

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die('Connection failed: ' . $conn->connect_error);
}

// Insert form data into the database
$sql = "INSERT INTO orders (name, lastname, email, phone, address) VALUES ('$name', '$lastname', '$email', '$phone', '$address')";
$conn->query($sql);

$orderID = $conn->insert_id;

// Insert cart items into the database
foreach ($cartItems as $item) {
  $itemName = $conn->real_escape_string($item['name']);
  $itemPrice = $conn->real_escape_string($item['price']);

  $sql = "INSERT INTO order_items (order_id, item_name, item_price) VALUES ('$orderID', '$itemName', '$itemPrice')";
  $conn->query($sql);
}

$conn->close();

// Return a response to the client
$response = ['success' => true];
echo json_encode($response);
?>
