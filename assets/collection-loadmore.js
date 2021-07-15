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
        console.log(newProduct)
        var new_url = $(newProduct).attr('data-pagination');
        nextUrl = new_url;
        $(listProduct).append(newProduct.html());
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
