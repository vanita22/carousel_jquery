$('.carousel').carousel({
  interval: 200;
});

$('#myCarousel').on('slide.bs.carousel', function () {
  direction: left;
})