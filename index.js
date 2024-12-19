const header=document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY>0);
});

let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');

menu.onclick=() =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sr= scrollReveal({
    distance:'30px',
    duration:2600,
    reset:true
})

sr.reveal('.home-text',{delay:280, origin:'bottom'})

let cart = [];
document.querySelectorAll("button.add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
        // Get the name and price from the data attributes of the button
        const name = button.getAttribute("data-name");
        const price = parseFloat(button.getAttribute("data-price"));
        addToCart(name, price);  // Example item, replace with dynamic data if needed
    });
});



//add item to the cart
function addToCart(name, price){
    console.log(`Adding item: ${name}, Price: ${price}`);
    let item = { name, price};
    cart.push(item);
    console.log(cart);
    updateCart();
    updateCartCount()
}

//update cart display
function updateCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceContainer = document.getElementById("total-price");
    cartItemsContainer.innerHTML = ""; // Clear current cart items

    let totalPrice = 0; // Initialize the total price

    // Loop through the cart and display each item
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(li);
        totalPrice += item.price; // Add to the total price
    });

    // Update the total price display
    totalPriceContainer.textContent = `Total: $${totalPrice.toFixed(2)}`;
}


// Function to update the cart item count in the header
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cart.length; // Set the cart count
}
