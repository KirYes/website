/*hide navbar when scroll down*/
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
/*bg navbar when scroll*/
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
    if (navbar.classList.contains('active')) {
        header.style.background = "#100f0f"; 
    }else{
        header.style.background = "none"; 
    }
}

window.onscroll= () =>{
    navbar.classList.remove('active')
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
