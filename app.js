let lastScrollTop = 0;
const header = document.querySelector('.header')
window.addEventListener("scroll", function(){
    let scrollTop = window.pageYOffset ||  document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        header.style.top="-80px";
    }else{
        header.style.top="0";
    }
    lastScrollTop = scrollTop;
});

document.addEventListener('scroll', () => {
    if(window.scrollY > 150) {
        header.style.background="#100f0f";
    }
        else{
            header.style.background="none";
        }
});
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    if (navbar.classList.contains('active')) {
        header.style.background = "#100f0f"; 
    }else{
        header.style.background = "none"; 
    }
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active')
}

window.onscroll= () =>{
    navbar.classList.remove('active')
    searchForm.classList.remove('active');
}
var items = document.querySelectorAll("li");

function isItemInView(item){
  var rect = item.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isItemInView(items[i])) {
        items[i].classList.add("show");
      }
    }
  }

  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

  document.querySelectorAll('.imgBx').forEach(icon => {
    icon.addEventListener('mouseover', function() {
        document.querySelector('.imgBx.active').classList.remove('active');
        document.querySelector('.box-container.active').classList.remove('active');
        
        this.classList.add('active');
        const contentId = this.getAttribute('data-id');
        document.getElementById(contentId).classList.add('active');
    });
});

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) =>{
    console.log(entry)
    if(entry.isIntersecting){
        entry.target.classList.add('show');
    } else{
        entry.target.classList.remove('show');
    }
});
});

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
   
