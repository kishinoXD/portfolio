const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', function(e) {
    cursor.style.transform =
        `translate3d(${e.clientX - 15}px, ${e.clientY - 15}px, 0)`;
});

const links = document.querySelectorAll('a, button, .custom-card');

links.forEach(function(link) {
    link.addEventListener('mouseenter', function() {
        cursor.classList.add('hover');
    });

    link.addEventListener('mouseleave', function() {
        cursor.classList.remove('hover');
    });
});