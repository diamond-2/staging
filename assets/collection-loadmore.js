$(document).ready(function(){
  var productOnPgae = $('.product-listing');
  var listProduct = $(productOnPgae).find('.grid--uniform');
  var nextUrl = $(productOnPgae).attr('data-pagination');
  var loadMoreBtn = $('.loadmore-btn-box');
  var loadmoreSpiner = $('.loder-spiner')
  function loadmore() {
    $.ajax(
        {
          url: nextUrl,
          type: 'GET',
          dataType: 'html',
          beforeSend: function(){
            loadMoreBtn.hide();
            loadmoreSpiner.show();
          }
        }
    ).done(function(next_page){
        loadmoreSpiner.hide();
        var newProduct = $(next_page).find('.product-listing .grid--uniform');
        var new_url = $(newProduct).closest('.product-listing').attr('data-pagination');
        console.log(new_url)
        nextUrl = new_url;
        $(listProduct).append(newProduct.html());
        $(listProduct).find('.product_images_slider:not(.slick-initialized)').slick({ 
          autoplay: false,
          autoplaySpeed: 500,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          Infinite: false,
          loop: false,
          dots: false
        });
        if(new_url) {
          loadMoreBtn.show();
        }
    });
  }
  $('.loadMore-btn').click(function(){
    console.log('clicked');
    loadmore();
  });
});
