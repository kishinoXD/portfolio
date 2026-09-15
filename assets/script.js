const offcanvasMenu = document.getElementById('offcanvasMenu');
const hamburgerButton = document.querySelector('.hamburger-btn');

offcanvasMenu.addEventListener('show.bs.offcanvas', function () {
    hamburgerButton.classList.add('active');
});

offcanvasMenu.addEventListener('hide.bs.offcanvas', function () {
    hamburgerButton.classList.remove('active');
});