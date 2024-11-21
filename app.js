const wrpapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const iconClose2 = document.querySelector('.form-box.register .icon-close');
const overlay = document.querySelector('.overlay');


registerLink.addEventListener('click', ()=> {
    wrpapper.classList.add('active');
});


loginLink.addEventListener('click', ()=> {
    wrpapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrpapper.classList.remove('active');
    wrpapper.classList.add('active-popup');
    overlay.classList.add('active');
    btnPopup.classList.add('active');
});


iconClose.addEventListener('click', ()=> {
    wrpapper.classList.remove('active-popup');
    overlay.classList.remove('active');
    btnPopup.classList.remove('active');
});

iconClose2.addEventListener('click', ()=> {
    wrpapper.classList.remove('active-popup');
    wrpapper.classList.remove('active');
    overlay.classList.remove('active');   
    btnPopup.classList.remove('active'); 
});
