$(document).ready(function(){
    $(window).scroll(function(){
      if(this.scrollY > 20){
        $(".navbar").addClass("sticky");
        $(".goTop").fadeIn();
      }
      else{
        $(".navbar").removeClass("sticky");
        $(".goTop").fadeOut();
      }
    });
  
    $(".goTop").click(function(){scroll(0,0)});
  
    $('.menu-toggler').click(function(){
      $(this).toggleClass("active");
      $(".navbar-menu").toggleClass("active");
    });
  
    $(".works").magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery:{enabled:true}
    });
  });
  
  
  let slideIndex = 1;
  
  function showSlides(n) {
      let slides = document.getElementsByClassName("slide");
  
      if (n > slides.length) {
          slideIndex = 1;
      }
      if (n < 1) {
          slideIndex = slides.length;
      }
  
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
  
      slides[slideIndex - 1].style.display = "block";
  }
  
  function plusSlides(n) {
      showSlides(slideIndex += n);
  }
  
  showSlides(slideIndex);
  