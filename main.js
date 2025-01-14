const menuBtn=document.querySelector('#menu-btn');
const NavBar=document.querySelector('nav');

menuBtn.addEventListener('click',()=>{ 
    NavBar.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');

});