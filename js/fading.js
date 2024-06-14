document.addEventListener('DOMContentLoaded', function () {
    // Dodaj klasę hidden do elementów
    document.querySelectorAll('.carousel-inner, .container, .row, .image, .card .footer').forEach(function (el) {
        el.classList.add('hidden');
    });

    // Konfiguracja ScrollReveal
    window.sr = ScrollReveal();

    sr.reveal('.carousel-inner', {
        duration: 4000,
        beforeReveal: function (el) {
            el.classList.remove('hidden');
        }
    });
    sr.reveal('.container', {
        duration: 3000,
        beforeReveal: function (el) {
            el.classList.remove('hidden');
        }
    });
    sr.reveal('.row', {
        duration: 1000,
        beforeReveal: function (el) {
            el.classList.remove('hidden');
        }
    });
    sr.reveal('.image', {
        duration: 4000,
        beforeReveal: function (el) {
            el.classList.remove('hidden');
        }
    });
    sr.reveal('.card', {
        duration: 4000,
        delay: 1000, // Opóźnienie w milisekundach. XXXXXXXXXXXXXXXXXXXXX Dodac gdzie trzeba jeśli trzeba
        beforeReveal: function (el) {
            el.classList.remove('hidden');
        }
    });
    sr.reveal('.footer', {
        duration: 3000,
        beforeReveal: function (el) {
            el.classList.remove('hidden');
        }
    });
    sr.reveal('.contact-form-box', {
        duration: 7000,
        beforeReveal: function (el) {
            el.classList.remove('hidden');
        }
    });
    sr.reveal('.login-form-box', {
        duration: 7000,
        beforeReveal: function (el) {
            el.classList.remove('hidden');
        }
    });
    sr.reveal('.form-container', {
        duration: 5000,
        beforeReveal: function (el) {
            el.classList.remove('hidden');
        }
    });
});
