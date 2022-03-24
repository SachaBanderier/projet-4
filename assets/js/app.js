
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName('slides');
    let dots = document.getElementsByClassName('dot');
    
    if(n > slides.length) { slideIndex = 1 }
    
    if(n < 1 ) { slideIndex = slides.length }
    
    // Cacher toutes les slides
    for(let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    // Retirer "active" de tous les points
    for(let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
    }
    
    // Afficher la slide demandée
    slides[slideIndex - 1].style.display = 'block';
    
    // Ajouter "active" sur le point cliqué
    dots[slideIndex - 1].classList.add('active');
  }