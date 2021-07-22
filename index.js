const btnToggle = document.querySelector('.toggle');   // hamburger menu toggle
const menu = document.querySelector('.menu');

btnToggle.addEventListener('click', () => {
   btnToggle.classList.toggle('active');
   menu.classList.toggle('active');
})

menu.addEventListener("click", () => {
   btnToggle.classList.toggle('active');
   menu.classList.toggle('active');
});


var topBtn = document.getElementById("topBtn");

window.onscroll = function(){                         // header scrolled background change
   const navbarDOM = document.getElementById("navbar");
   if(document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20){
      navbarDOM.classList.add("scrolled");
      btnToggle.classList.remove('active');
      menu.classList.remove('active');
      topBtn.style.display = "block"; // When the user scrolls down 20px from the top of the document, show the button
   }
   else {
    navbarDOM.classList.remove("scrolled");
    topBtn.style.display = "none";
   }
};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}