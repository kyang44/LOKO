const SLIDES = $(".groupPhoto");

/* See "show next slide snippet" to use */
function nextSlide() {
  let nextNum = SLIDES.index($(".groupPhoto:not(.hidden)")) + 1 + 1; /* +1 for 0-index array */
  if (nextNum > SLIDES.length) {
    nextNum = 1;
  }
  showSlide(nextNum);
}

/* See "show previous slide snippet" to use */
function prevSlide() {
  let prevNum = SLIDES.index($(".groupPhoto:not(.hidden)")) - 1 + 1; /* +1 for 0-index array */
  if (prevNum <= 0) {
    prevNum = SLIDES.length;
  }
  showSlide(prevNum);
}

/* See "show slide X snippet" to use */
function showSlide(num) {
  let index = num - 1;
  let currentSlide = SLIDES.eq(index);

  SLIDES.addClass("hidden");
  currentSlide.removeClass("hidden");
}

$(".rightArrow").click(function() {
    prevSlide();
});

$(".leftArrow").click(function() {
    nextSlide();
});
