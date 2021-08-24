// Add Item in Cart onClick Cart Button Start
$(document).on('click', '.product-form__cart-submit', function(e){
    // e.preventDefault();
    var $this = $(this);
    // $this.attr('aria-disabled', true);
    // $this.find('[data-add-to-cart-text]').addClass('hidden');
    // $(document).find('.continue_shop').hide();
    // $this.find('[data-loader]').removeClass('hidden');
    var formData = $(this).closest('form').serialize();
    $('.drawer').addClass('show_drawer');
    console.log(formData);
    __addTocart(formData, $this);
  });
  
  function __addTocart(formData, currentBtn) {
    
    $('#preloader').fadeIn();
    $.ajax({
      type: 'POST',
      url: '/cart/add.js',
      dataType: 'json',
      data:  formData,
      success: function(data, status){
        slideCart();
        agreeCartCondiotn();
        console.log(data);console.log(status);
        console.log(currentBtn);
        currentBtn.removeAttr('aria-disabled');
        currentBtn.find('[data-add-to-cart-text]').removeClass('hidden');
        currentBtn.find('[data-loader]').addClass('hidden');
        $('.drawer_inner').addClass('has_cart_items');
        if($('body').hasClass('template-cart')) {
          location.reload();
        } else {
          $('.quickView_close_btn').trigger('click');
          $('[data-popup-stage="cart"]').removeClass('hidden').addClass('transition-ready is-open');
//         $(".cart-drawer__items").empty();
//         setTimeout(function() {
//           miniCartDrawer.removeClass('cart-popup-wrapper--hidden is-transitioning');
//         },500)
        }
      },
      error: function(XMLHttpRequest, textStatus, error ){
        var errors=(XMLHttpRequest.responseJSON.description);
        console.log(textStatus);
        console.log(error);
        //$(document).find('.pdp_pincode_block').before('<div class="quantity-error"><span>'+errors+'</span></div>');
        if(window.location.pathname.indexOf('collections') > -1) { 
            currentBtn.after('<div class="quantity-error"><span>'+errors+'</span></div>');
        }
        setTimeout(function(){ 
            $(document).find('.quantity-error').remove();
            $(document).find('.product-form__add-to-cart').removeAttr('aria-disabled');
            $(document).find('[data-loader]').addClass('hidden');
            $(document).find('[data-add-to-cart-text]').removeClass('hidden');
            $('#preloader').fadeOut();
        }, 5000);

        // if it's not last one Move Along else update the cart number with the current quantity
      }
    });
  }
  // Add Item in Cart onClick Cart Button End

   /*---- SlideCart function BEGIN ----*/
   function slideCart() {
    console.log('enter in slide cart common function');
    $.ajax({
      url: '/cart.js',
      dataType: "json",
      cache: false,
      success: function(cart) {
        $(document).find('[data-cart-count]').text(cart.item_count);
        $.ajax({
          url: '/cart/?view=miniCart',
          cache: false,
          success: function(response) {
            $('#preloader').fadeOut();
            $('.update-cart').empty().append(response);
            $(document).find('.cart-popup-wrapper').remove();
            caretRemovePopup();
          }
        });
      }
    });
  }          
  /*---- SlideCart function END ----*/
  /* update cart and minicart on increase or decrease quantity start */
  $(document).on('click','.quantity-input__button', function(e){
      console.log('Remove Cart Clicked')   
      if(!$(this).hasClass('pdp-button')) {
        e.preventDefault();
        var getDataQty = parseInt($(this).closest().find('.form__input cart__quantity').val());
        if($('body').hasClass('template-cart')){
          console.log('yes you are on cartpage');
          var getDataId = $(this).closest('tr').attr('data-cart-item-key');//console.log(getDataId)
        } else {
          console.log('yes you are on others');
          var getDataId = $(this).closest('tr').attr('data-cart-item-key');//console.log(getDataId)
        }
        var $thisName = $(this).attr('data-name'); //console.log($thisName);
        var getDataQty = parseInt($(this).closest('.cart__qty_iput_holder').find('input[data-quantity]').val());
        var avilable_qty= parseInt($(this).closest('.cart-drawer__item').attr('data-qty'));
        var avilable_qty1= parseInt($(this).closest('.cart__table-row').attr('max-avail-prodcut'));
        if($thisName == 'plus') {
          if(getDataQty == avilable_qty || getDataQty ==avilable_qty1 || avilable_qty  ==0 || avilable_qty1== 0){
            console.log('matchedQty')
            return false;
          }else{
            getDataQty = getDataQty + 1;
          }
        } else if($thisName == 'minus' ) {
          if(getDataQty > 0){
            getDataQty = getDataQty - 1;
          } 
          else {
            getDataQty = 1;
            return false;
          }    	
        } else {
          getDataQty = 0;
        }
        console.log(getDataId);
        console.log(getDataQty);
        $(this).closest('.cart__qty_iput_holder').find('input[data-quantity]').val(getDataQty);
        updateCartItem (getDataId, getDataQty);
      }
  });
  
  $(document).find('#MainContent .update-cart .cart__table-row').each(function() {
    var $pruduct_Avail = parseInt($(this).attr('max-avail-prodcut'));
    console.log($pruduct_Avail);
    if($pruduct_Avail == 0) {
      var $pruduct_DataKey = $(this).attr('data-cart-item-key');
      console.log($pruduct_DataKey);
      updateCartItem($pruduct_DataKey, $pruduct_Avail);
    }
  });
  
  // Remove Cart Item Start
  $('.remove_cart_item').click(function(e){
    console.log('Remove Cart Clicked')   
    if(!$(this).hasClass('pdp-button')) {
      e.preventDefault();
      var getDataId = $(this).closest('.cart-remove-popup').find('.cart-remove-item').attr('data-cart-item-key');
      updateCartItem(getDataId, 0);
    }
 });
 // Remove Cart Item End

  function updateCartItem (getDataId, getDataQty) {
    $('#preloader').fadeIn();
    $.ajax({
      type: 'POST',
      url: '/cart/update.js',
      data: 'updates['+getDataId+']='+getDataQty,
      dataType: "json",
      cache: false,
      success: function(response) {
//         $('[data-cart-wrapper]').removeClass('hide');
//         $('[data-empty-page-content]').addClass('hide');
        console.log(response);
        $('[data-cart-count]').text(response.item_count);
        if(response.item_count === 0) {
          $('.cart-drawer-container .empty-mini-cart').removeClass('hidden');
          $('.template-cart .cart-page-item').addClass('hidden');
          $('.template-cart .template-404').removeClass('hidden');
          $('.template-cart .glb-breadcrumb').addClass('hide');
          $('.drawer_inner').removeClass('has_cart_items');
          console.log('Cart Is Empty')
        } else {
          $('.drawer_inner').addClass('has_cart_items');
        }
        $.ajax({
          url: '/cart/?view=miniCart',
          cache: false,
          success: function(response) {
            $('.update-cart').empty().append(response);
            $('#preloader').fadeOut();    
            caretRemovePopup(); 
          }
        });
      }
    });
  }
  /* update cart and minicart on increase or decrease quantity end */

// Remove Cart Popup Start
caretRemovePopup();
function caretRemovePopup() {
    $('.remove_cart_pop_btn').click(function(e){
        e.preventDefault();
        $('body').addClass('remove_cart_popup_show')
        let carPopItem = $(this).closest('.cart__row');
        let productImage = $(carPopItem).find('.cart__image').clone();
        let productTitle = $(carPopItem).find('.cart__product-title').clone();
        let productVarrients = $(carPopItem).find('.product-details').clone();
        let productQuen = $(carPopItem).find('.cart__qty-input').val();
        let productPrice = $(carPopItem).find('.cart__final-price .org_price').clone();
        let productId = $(carPopItem).find('.cart__qty .cart__qty-input').attr('data-id');
        let itemRemove = $(this).closest('.cart__table-row').attr('data-removecartlink');
        let cartItemKey = $(carPopItem).attr('data-cart-item-key');
        let itemQuen = $(carPopItem).closest('.cart__qty_iput_holder').find('input[data-quantity]').val()
        let avilItem = $(carPopItem).closest('.cart-drawer__item').attr('data-qty');
        let maxAvilItem = $(carPopItem).closest('.cart__table-row').attr('max-avail-prodcut');
        setTimeout(function(){
            $('.cart-remove-popup-wrapper .cart-remove-item').attr('data-cart-item-key',cartItemKey);
            $('.cart-remove-popup-wrapper .cart-remove-item').attr('data-quantity',itemQuen);
            $('.cart-remove-popup-wrapper .cart-remove-item').attr('max-avail-prodcut',maxAvilItem);
            $('.cart-remove-popup-wrapper .cart-remove-item').attr('data-qty',avilItem);
            $('.cart-remove-popup-wrapper .cart-remove-item .cart_image_column .cart_image-holder').append(productImage);
            $('.cart-remove-popup-wrapper .cart-remove-item .cart_image_content .cart_item-title').append(productTitle);
            $('.cart-remove-popup-wrapper .cart-remove-item .cart_image_content .cart_item-varrients').append(productVarrients);
            $('.cart-remove-popup-wrapper .cart-remove-item .cart_image_content .cart_item-quantity').append('Quantity : '+productQuen);
            $('.cart-remove-popup-wrapper .cart-remove-item .cart_image_content .cart_item-price').append(productPrice);
            $('.cart-remove-popup-wrapper .cart-remove-item').attr('data-product-id',productId);
            $('.remove_cart_item').attr('href',itemRemove);
        },100);
    });
    $('.close_cart_pop, .cart-remove-popup-wrapper, .remove_cart_item').click(function(){
        $('body').removeClass('remove_cart_popup_show');
        $('.cart-remove-popup-wrapper .cart-remove-item .cart_image_column .cart_image-holder').html('');
        $('.cart-remove-popup-wrapper .cart-remove-item .cart_image_content .cart_item-title').html('');
        $('.cart-remove-popup-wrapper .cart-remove-item .cart_image_content .cart_item-varrients').html('');
        $('.cart-remove-popup-wrapper .cart-remove-item .cart_image_content .cart_item-quantity').html('');
        $('.cart-remove-popup-wrapper .cart-remove-item .cart_image_content .cart_item-price').html('');
        $('.cart-remove-popup-wrapper .cart-remove-item').attr('data-product-id','');
    });
    $('.cart-remove-popup').click(function(e){
    e.stopPropagation();
    });
}
// Remove Cart Popup Start
  
// Agree condition checkobx validation Start
function agreeCartCondiotn() {
  $('form.cart').submit(function(e){
    let termsAgree = $(this).find('#agree-tems');
    let termsAgreeErrorMsg = $(this).find('#termsError');
    if($(termsAgree).prop('checked') == false){
        e.preventDefault();
        $(termsAgreeErrorMsg).css('display','block');
        $(termsAgreeErrorMsg).text('** Please agree with terms and conditions.');
        setTimeout(function(){
          $(termsAgreeErrorMsg).text('');
          $(termsAgreeErrorMsg).css('display','none');
        },3000);
    } else {
        $(termsAgreeErrorMsg).text('');
        $(termsAgreeErrorMsg).css('display','none');
    }
  });
  $('form.cart #agree-tems').change(function(){
    let termsAgreeErrorMsg2 = $(this).closest('form.cart').find('#termsError');
    if($(this).prop('checked') == false){
        $(termsAgreeErrorMsg2).css('display','block');
        $(termsAgreeErrorMsg2).text('** Please agree with terms and conditions.');
        setTimeout(function(){
          $(termsAgreeErrorMsg2).text('');
          $(termsAgreeErrorMsg2).css('display','none');
        },3000);
    } else {
        $(termsAgreeErrorMsg2).text('');
        $(termsAgreeErrorMsg2).css('display','none');
    }
  });
}
agreeCartCondiotn();
// Agree condition checkobx validation End

  // show drawer
  $('.minicart-btn').click(function(e){
    e.preventDefault();
    $('.drawer').addClass('show_drawer')
  });
  $('.close-mini-cart').click(function(){
    $('.drawer').removeClass('show_drawer')
  });