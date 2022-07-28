/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let myTable = document.querySelector('tbody');
  myTable.innerHTML = '';

}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
  let myTable = document.querySelector('tbody');

  // DONE: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++) {
    // TODO: Create a TR
    let tr = document.createElement('tr');
    myTable.appendChild(tr);

    // DONE: Create a TD for the delete link, quantity,  and the item
    let deleteLink = document.createElement('td');
    deleteLink.setAttribute('class', 'deleteBtn');
    let quantity = document.createElement('td');
    let item = document.createElement('td');
    deleteLink.textContent = 'Delete';
    quantity.textContent = `${cart.items[i].quantity}`;
    item.textContent = `${cart.items[i].product}`;

    // DONE: Add the TR to the TBODY and each of the TD's to the TR
    tr.appendChild(deleteLink);
    tr.appendChild(quantity);
    tr.appendChild(item);
  }
}

function removeItemFromCart(event) {
  // DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
  let item = event.target.product;
  event.target.cart.removeItem(this);
  cart.removeItem(item);
  // DONE: Save the cart back to local storage
  let stringifiedProducts = JSON.stringify(cart.items);
  localStorage.setItem('cart', stringifiedProducts);
  // DONE: Re-draw the cart table
  showCart();


}

// This will initialize the page and draw the cart on screen
renderCart();
