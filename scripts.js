const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('.nav-bar');

menuIcon.onclick=() => {
    navBar.classList.toggle('active');
    menuIcon.classList.toggle('active');
    
}

