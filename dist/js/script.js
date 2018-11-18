var headerTop = $(".header").offset().top;
$(window).scroll(function() {
  var currentScroll = $(window).scrollTop();
  if (currentScroll >= headerTop) {
    $(".header").css({
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      display: "grid",
      "grid-template-columns":
        "[full-start] repeat(10, [col-start] minmax(min-content, 12rem) [col-end])[full-end]",
      "z-index": "10"
    });
  } else {
    $(".header").css({
      position: "static"
    });
  }
});

// $(document).ready(function(){
//     $("button").click(function(){
//         $("h1, h2, p").addClass("blue");
//         $("div").addClass("important");
//     });
// });

// else if (currentScroll >= headerTop) {
//     $("header").addClass("hd--js");
//   }

//     var fixmeTop = $('.fixme').offset().top;
// $(window).scroll(function() {
//     var currentScroll = $(window).scrollTop();
//     if (currentScroll >= fixmeTop) {
//         $('.fixme').css({
//             position: 'fixed',
//             top: '0',
//             left: '0'
//         });
//     } else {
//         $('.fixme').css({
//             position: 'static'
//         });
//     }
