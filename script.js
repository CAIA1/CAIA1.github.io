const menuIcon = document.getElementById('menu-icon');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-item');


menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('active');
}); 


navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});