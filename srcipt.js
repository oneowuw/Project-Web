// toggle class active 
const navbarNav = document.querySelector('.navbar-nav');

// ketika makanan menu di klik
document.querySelector('#makanan-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik diluar sidebar untuk menghilangkan nav
const makanan = document.querySelector('#makanan-menu');

document.addEventListener('click' , function (e) {
    if (!makanan.contains(e.target) && !navbarNav.contains(e.taget)) {
        navbarNav.classList.remove('active');
    }
});