

// DOM Elements
const cartIcon = document.getElementById("cart-icon");
const cartPanel = document.getElementById("cart-panel");
const closeCart = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

let cart = [];

// Open Cart Panel
cartIcon.addEventListener("click", () => {
    cartPanel.classList.add("open");
});

// Close Cart Panel
closeCart.addEventListener("click", () => {
    cartPanel.classList.remove("open");
});

// Add to Cart
document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
        const id = button.dataset.id;
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);

        const existingItem = cart.find((item) => item.id === id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }

        updateCart();
    });
});

// Handle Quantity Change
cartItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("quantity-increase")) {
        const id = e.target.dataset.id;
        const item = cart.find((item) => item.id === id);
        if (item) {
            item.quantity += 1;
        }
    } else if (e.target.classList.contains("quantity-decrease")) {
        const id = e.target.dataset.id;
        const item = cart.find((item) => item.id === id);
        if (item) {
            item.quantity -= 1;
            if (item.quantity <= 0) {
                cart = cart.filter((cartItem) => cartItem.id !== id);
            }
        }
    }

    updateCart();
});

// Update Cart
function updateCart() {
    // Update Cart Items
    cartItems.innerHTML = "";
    cart.forEach((item) => {
        const div = document.createElement("div");
        div.classList.add("cart-item");
        div.innerHTML = `
            <span>${item.name}</span>
            <div class="quantity-controls">
                <button class="quantity-decrease" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-increase" data-id="${item.id}">+</button>
            </div>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        `;
        cartItems.appendChild(div);
    });

    // Update Cart Count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update Total Price
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotal.textContent = totalPrice.toFixed(2);
}



const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Toggle Navbar Visibility
hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});





