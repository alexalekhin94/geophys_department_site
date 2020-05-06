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





//+++++++++++++++++++++++++++++++++++Для слайдера+++++++++++++++++++++++++++++++++++++++++++++++++++++++

slidersLiterature = document.querySelectorAll('.swiper-container');
console.log(slidersLiterature);

slidersLiterature.forEach(el => {

  var swiper = new Swiper(el, {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: el.querySelector ('.pag'),
      clickable: true,
    },
  });

});



