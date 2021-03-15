//initializing with jquery instead of html
//scroll code nipped from https://infinite-scroll.com/

$('.container').infiniteScroll({
  // options
  path: '.pagination__next',
  append: '.post',
  history: false,
});
