$(document).ready(function(){
  var productOnPgae = $('[data-pagination].product-listing');
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
        
        let updateCountLimit = parseInt($('.__product-count__limit').text());
        const prodCountInit = $('.__product-count__initial').data('pcinit'); console.log('prodCountInit--> ', prodCountInit)
        const prodCountLimit = 16; console.log('prodCountLimit--> ', prodCountLimit)
        const prodCountTotal = $('.__product-count__totalCount').data('tpcount'); console.log('prodCountTotal--> ', prodCountTotal);
        let diffPcount = prodCountTotal - updateCountLimit;
        if(prodCountTotal > updateCountLimit && diffPcount >= prodCountLimit) {
          updateCountLimit = updateCountLimit + prodCountLimit
          $('.__product-count__limit[data-pclimit]').text(updateCountLimit);

        } else if(prodCountTotal > updateCountLimit && diffPcount < prodCountLimit)  {
          updateCountLimit = updateCountLimit + diffPcount;
          $('.__product-count__limit[data-pclimit]').text(updateCountLimit);
        }
        loadmoreSpiner.hide();        
        var newProduct = $(next_page).find('.product-listing .grid--uniform');
        var new_url = $(newProduct).closest('.product-listing').attr('data-pagination');
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
  $('.loadMore-btn:not(.loademore__2)').click(function(){
    console.log('clicked');
    loadmore();
  });



  // Loose Diamond Grid View Loader
  function loadmore2(event) {
    var productOnPgae2 = $(event).closest('.grid-view-section[data-view="grid"]');
    var listProduct2 = $(productOnPgae2).find('.grid--uniform');
    var nextUrl2 = $(productOnPgae2).find('.product-listing').attr('data-pagination');
    var loadMoreBtn2 = $(productOnPgae2).find('.loadmore-btn-box');
    var loadmoreSpiner2 = $(productOnPgae2).find('.loder-spiner')
    $.ajax(
        {
          url: nextUrl2,
          type: 'GET',
          dataType: 'html',
          beforeSend: function(){
            loadMoreBtn2.hide();
            loadmoreSpiner2.show();
          }
        }
    ).done(function(next_page){
        loadmoreSpiner2.hide();
        let newProduct = $(next_page).find('.product-listing .grid--uniform');
        let new_url = $(newProduct).closest('.product-listing').attr('data-pagination');
        console.log(new_url)
        nextUrl2 = new_url;
        $(listProduct2).append(newProduct.html());
        $(listProduct2).find('.product_images_slider:not(.slick-initialized)').slick({ 
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
          loadMoreBtn2.show();
        }
    });
  }
  $('.loademore__grid').click(function(e){
    console.log('clicked');
    loadmore2(this);
  });

  // List View Loader
  function loadmoreList(event) {
    var productOnPgae2 = $(event).closest('.list-view-section[data-view="list"]');
    var listProduct2 = $(productOnPgae2).find('.list-view-items tbody');
    var nextUrl2 = $(productOnPgae2).find('.product-listing').attr('data-pagination');
    var loadMoreBtn2 = $(productOnPgae2).find('.loadmore-btn-box');
    var loadmoreSpiner2 = $(productOnPgae2).find('.loder-spiner')
    $.ajax(
        {
          url: nextUrl2,
          type: 'GET',
          dataType: 'html',
          beforeSend: function(){
            loadMoreBtn2.hide();
            loadmoreSpiner2.show();
          }
        }
    ).done(function(next_page){
        loadmoreSpiner2.hide();
        let newProduct = $(next_page).find('.product-listing .list-view-items tbody');
        let new_url = $(newProduct).closest('.product-listing').attr('data-pagination');
        console.log(new_url)
        nextUrl2 = new_url;
        $(listProduct2).append(newProduct.html());
        if(new_url) {
          loadMoreBtn2.show();
        }
    });
  }
  $('.loademore__list').click(function(e){
    console.log('clicked')
    loadmoreList(this);
  });
});
