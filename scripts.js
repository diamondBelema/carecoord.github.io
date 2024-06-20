document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'var(--primary-color)';
        } else {
            header.style.backgroundColor = 'var(--tertiary-color)';
        }
    });
});
