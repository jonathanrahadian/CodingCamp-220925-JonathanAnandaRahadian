// Menunggu seluruh konten halaman dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {

    // --- Fitur 1: Sapaan Selamat Datang ---
    const userName = prompt("Please enter your name:", "");
    if (userName) {
        document.getElementById('welcome-text').innerText = `Hi ${userName}, Welcome To The Website`;
    }

    // --- Fitur 2: Validasi dan Tampilan Form ---
    const messageForm = document.getElementById('message-form');

    // Tambahkan event listener untuk event 'submit' pada form
    messageForm.addEventListener('submit', function(event) {
        // Mencegah form dari perilaku default-nya (reload halaman)
        event.preventDefault();

        // Ambil nilai dari setiap input
        const nama = document.getElementById('nama').value;
        const tglLahir = document.getElementById('tgl-lahir').value;
        // Cek radio button mana yang dipilih
        const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked');
        const pesan = document.getElementById('pesan').value;

        // Validasi sederhana: pastikan semua field terisi
        if (!nama || !tglLahir || !jenisKelamin || !pesan) {
            alert("Harap lengkapi semua field!");
            return; // Hentikan eksekusi jika ada yang kosong
        }

        // Tampilkan waktu saat ini
        const now = new Date();
        document.getElementById('current-time').innerText = now.toString();

        // Tampilkan nilai yang di-submit ke area output
        document.getElementById('output-nama').innerText = nama;
        document.getElementById('output-tgl-lahir').innerText = tglLahir;
        document.getElementById('output-jenis-kelamin').innerText = jenisKelamin.value;
        document.getElementById('output-pesan').innerText = pesan;

        // Kosongkan form setelah submit
        messageForm.reset();
    });
});