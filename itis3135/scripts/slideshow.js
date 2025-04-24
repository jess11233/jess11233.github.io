document.addEventListener("DOMContentLoaded", () => {
    let slideIndex = 1;
  
    // Define showSlides using a hoisted function declaration
    function showSlides(n) {
      let i;
      const slides = document.getElementsByClassName("mySlides");
      const dots = document.getElementsByClassName("demo");
      const captionText = document.getElementById("caption");
  
      if (slides.length === 0 || dots.length === 0 || !captionText) return;
  
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }
  
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
  
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
      captionText.innerHTML = slides[slideIndex - 1].getElementsByTagName("img")[0].alt;
    }
  
    // Now you can safely call this
    showSlides(slideIndex);
  
    // Expose globally
    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
      };
      
      window.currentSlide = function(n) {
        showSlides(slideIndex = n);
      };
      
  });