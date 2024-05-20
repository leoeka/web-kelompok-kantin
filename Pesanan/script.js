var orderItems = []; // Array untuk menyimpan pesanan

// Fungsi untuk menambahkan pesanan
function tambahPesanan(itemName, itemPrice) {
    var existingItem = orderItems.find(item => item.name === itemName);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        orderItems.push({ name: itemName, price: itemPrice, quantity: 1 });
    }
    updateOrderList();
}

// Fungsi untuk mengurangi pesanan
function kurangiPesanan(itemName, itemPrice) {
    var existingItem = orderItems.find(item => item.name === itemName);
    if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
    } else {
        orderItems = orderItems.filter(item => item.name !== itemName);
    }
    updateOrderList();
}

// Fungsi untuk menampilkan total harga pesanan
function calculateTotal() {
    var total = 0;
    for (var i = 0; i < orderItems.length; i++) {
        total += orderItems[i].price * orderItems[i].quantity;
    }
    return total;
}

// Fungsi untuk memperbarui tampilan daftar pesanan
function updateOrderList() {
    var orderItemsElement = document.getElementById('orderItems');
    orderItemsElement.innerHTML = '';

    for (var i = 0; i < orderItems.length; i++) {
        var item = orderItems[i];
        var listItem = document.createElement('li');
        listItem.textContent = item.name + ' - Rp. ' + item.price + ' x ' + item.quantity;
        orderItemsElement.appendChild(listItem);
    }

    // Tampilkan total harga
    var totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = 'Total: Rp. ' + calculateTotal();
}

// Fungsi untuk menampilkan tampilan pesanan
function showOrder() {
    var orderOverlay = document.getElementById('orderOverlay');
    orderOverlay.style.display = 'block';
}

// Fungsi untuk menutup tampilan pesanan
function closeOrder() {
    var orderOverlay = document.getElementById('orderOverlay');
    orderOverlay.style.display = 'none';
}

// Fungsi untuk checkout
function checkout() {
    var total = calculateTotal();
    // Logika untuk proses checkout
    alert('Total harga pesanan: Rp. ' + total);
    // Setelah checkout berhasil, bersihkan daftar pesanan
    orderItems = [];
    updateOrderList();
}

