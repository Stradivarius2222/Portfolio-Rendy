document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.getElementById('burger-icon');
    const navMenu = document.getElementById('nav-menu');

    // Fungsi untuk toggle menu saat ikon burger diklik
    burgerIcon.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Fungsi untuk menutup menu saat link navigasi di klik (berguna di mobile)
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Cek apakah menu sedang terbuka di mode mobile
            if (window.innerWidth <= 768 && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
});