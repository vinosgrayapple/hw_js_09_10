// $(function() {
//     $('.jcarousel').jcarousel({
//         // Configuration goes here
//     });
// });
$(function() {

    $('.jcarousel').jcarousel({
        wrap: 'circular'
    })
    .jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true,
        });

    $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '">' + page + '</a>';
        }
        
    });



  $('.mySlick').slick({
 dots: true,
 slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  });

});
