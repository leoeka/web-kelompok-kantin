function proceedToPayment() {
    // Mendapatkan metode pembayaran yang dipilih oleh pengguna
    var paymentMethod;
    var paymentInputs = document.getElementsByName('paymentMethod');
    for (var i = 0; i < paymentInputs.length; i++) {
        if (paymentInputs[i].checked) {
            paymentMethod = paymentInputs[i].value;
            break;
        }
    }

    // Menampilkan pesan sesuai dengan metode pembayaran yang dipilih
    if (paymentMethod === 'cash') {
        alert('Pesanan Anda akan diproses. Terima kasih atas pembelian Anda!');
    } else if (paymentMethod === 'bank') {
        // Redirect ke halaman pembayaran online atau tampilkan instruksi pembayaran lebih lanjut
        alert('Nomor Virtual Account Anda adalah: XXX-XXX-XXX. Silakan lakukan pembayaran.');
    } else {
        alert('Silakan pilih metode pembayaran terlebih dahulu!');
    }
}

// Menampilkan crosher saat metode pembayaran dipilih
var paymentMethods = document.querySelectorAll('.method input[type="radio"]');
paymentMethods.forEach(function(method) {
    method.addEventListener('change', function() {
        var crosher = this.parentElement.querySelector('.crosher');
        if (this.checked) {
            document.querySelectorAll('.crosher').forEach(function(c) {
                c.style.display = 'none';
            });
            crosher.style.display = 'flex';
        }
    });
});
