let cart = [];

function addToCart(item, price) {
    cart.push({item, price});
    renderCart();
}

function renderCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price;
        cartElement.innerHTML += `<li>${item.item} - Rp. ${item.price}</li>`;
    });
    cartElement.innerHTML += `<li>Total: Rp. ${total}</li>`;
}

function checkout() {
    alert('Terima kasih atas pesanan Anda!');
    cart = [];
    renderCart();
}
