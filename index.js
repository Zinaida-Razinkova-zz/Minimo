// Mobile menu
(() => {
    const menuBtnRef = document.querySelector('[data-menu-button]');
    const mobileMenuRef = document.querySelector('[data-menu]');
  
    menuBtnRef.addEventListener('click', () => {
      const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
  
      menuBtnRef.classList.toggle('is-open');
      menuBtnRef.setAttribute('aria-expanded', !expanded);
  
      mobileMenuRef.classList.toggle('is-open');
    });
  })();

  // Slider
  let slideIndex = 1;

  showSlides(slideIndex);

  function plusSlides(n){
    showSlides(slideIndex += n);
  }

  function currentSlide(n){
    showSlides(slideIndex = n);
  }

  function showSlides(n){
  let i;
  const slides = document.getElementsByClassName("slides");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1){
    slideIndex=slides.length;
  }
  for (i=0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
 
  slides[slideIndex -1].style.display = "block";
  }