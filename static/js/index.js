window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
  var options = {
    slidesToScroll: 1,
    slidesToShow: 2,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 4000,
  };

  var carousels = bulmaCarousel.attach('.carousel', options);
  for (var i = 0; i < carousels.length; i++) {
    carousels[i].on('before:show', function(state) {
      console.log(state);
    });
  }

  bulmaSlider.attach();

  $('[data-video-carousel]').each(function() {
    var carousel = $(this);
    var slides = carousel.find('[data-video-slide]');
    var prevButton = carousel.find('[data-carousel-prev]');
    var nextButton = carousel.find('[data-carousel-next]');
    var currentSlide = 0;

    function showSlide(index) {
      currentSlide = Math.max(0, Math.min(index, slides.length - 1));
      slides.removeClass('is-active').eq(currentSlide).addClass('is-active');

      carousel.find('video').each(function() {
        this.pause();
      });

      prevButton.prop('hidden', currentSlide === 0);
      nextButton.prop('hidden', currentSlide === slides.length - 1);
    }

    prevButton.on('click', function() {
      showSlide(currentSlide - 1);
    });

    nextButton.on('click', function() {
      showSlide(currentSlide + 1);
    });

    showSlide(currentSlide);
  });
});
