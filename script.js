let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    let product = {
        name: productName,
        price: productPrice
    };

    cart.push(product);
    total += productPrice;

    renderCart();
}

function renderCart() {
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(product => {
        let item = document.createElement('div');
        item.classList.add('cart-item');
        item.textContent = `${product.name} - R$ ${product.price.toFixed(2)}`;
        cartItems.appendChild(item);
    });

    let totalElement = document.getElementById('total');
    totalElement.textContent = total.toFixed(2);

    // Mostra o carrinho ao adicionar item
    showCart();
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.classList.toggle('show');
}

function showCart() {
    const modal = document.getElementById('cart-modal');
    modal.classList.add('show');
}
