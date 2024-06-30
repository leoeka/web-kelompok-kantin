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

function checkout() {
    var total = calculateTotal();
    // Logika untuk proses checkout
    if (confirm('Total harga pesanan: Rp. ' + total + '. Apakah Anda ingin melanjutkan ke pembayaran?')) {
        window.location.href = 'Payment.html';
    }
    // Setelah checkout berhasil, bersihkan daftar pesanan
    orderItems = [];
    updateOrderList();
}

function proceedPayment() {
    var paymentMethods = document.getElementsByName('payment');
    var selectedMethod;
    for (var i = 0; i < paymentMethods.length; i++) {
        if (paymentMethods[i].checked) {
            selectedMethod = paymentMethods[i].value;
            break;
        }
    }

    var paymentResultDiv = document.getElementById('payment-result');
    paymentResultDiv.innerHTML = ''; // Clear previous result

    if (selectedMethod === 'bank-transfer') {
        paymentResultDiv.innerHTML = '<p>Silakan transfer ke nomor rekening berikut: <strong>1234567890</strong></p>';
    } else if (selectedMethod === 'cod') {
        paymentResultDiv.innerHTML = '<p>Tunggu pesanan Anda. Pesanan akan segera dikirimkan ke alamat Anda.</p>';
    } else {
        paymentResultDiv.innerHTML = '<p>Metode pembayaran ini belum tersedia.</p>';
    }
}