const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
q