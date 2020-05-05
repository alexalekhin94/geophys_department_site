var navigation = new Navigation(document.getElementById("navigation"));



let slides = document.querySelectorAll(".header__slide")
let practiceLinkArray = document.querySelectorAll(".header__practice-link")
let slideIndex = 0;


function closeAllSlides (){
  for (let j = 0; j < slides.length; j++){
    slides[j].style.display = "none";
  }
}

closeAllSlides();




for(let i = 0; i < practiceLinkArray.length; i++){
    practiceLinkArray[i].addEventListener('mouseover', ()=>{
    slideIndex = i;
    console.log(i)
    showPracticePreview(i);

  })
}

function showPracticePreview(slideNum){
  for (let j = 0; j < slides.length; j++){
    slides[j].style.display = "none";
  }

  slides[slideNum].style.display = "block";
}


var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: '.pag-1',
    clickable: true,
  },
});


var swiper1 = new Swiper('.swiper-container2', {
  effect: 'coverflow',
  grabCursor: true,
  // centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 220,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.pag-2',
  },
});