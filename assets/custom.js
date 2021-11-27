// Add Item in Cart onClick Cart Button Start
__cartData();


  // $(document).on('change', 'select[name="id"]', function(){
  //   console.log('select changes');
  //   __cartData();
  // });
$(document).on('click', '.product-form__cart-submit:not([aria-label="Sold out"])', async function(e){
    e.preventDefault();
    var $this = $(this);
    var formData = $(this).closest('form').serialize();
    let cart = await __cartData(formData, $this); 
   
  });

  // Check Cart data for validate current variant quantity

  async function __cartData(formData, $this){
    var totalQtyInCart  = {
      qty:0,
      currentVarQty:0
    };
    // $('#preloader').fadeIn();
    var cartAPIResponse = await cartAPI(totalQtyInCart);  
    console.log('formdata', formData);
    if(!formData) return; 
    console.log(cartAPIResponse);
    console.log('abcd==>', totalQtyInCart );
    if(totalQtyInCart.currentVarQty - totalQtyInCart.qty < 1) //return;
    console.log('abc', totalQtyInCart );
    __addTocart(formData, $this, totalQtyInCart.qty);  
  }
  
  function cartAPI(totalQtyInCart) {
    var updateQty = 0;
    var currentVar = $('[name=id]').val();
    var currentVarQty = $('[name=id] option[value="'+currentVar+'"]').data('qty');
    totalQtyInCart.currentVarQty = currentVarQty;
    return $.ajax({
      url: '/cart.js',
      dataType: "json",
      cache: false,
      success: function(cart) {
      //  console.log('cartDatattaa', cart)
        totalQtyInCart.qty = 0;
        let cartItems = cart.items;
        if(cartItems.length > 0)
        for(i=0; i< cartItems.length; i++ ){
          let varId = cartItems[i].id;
          if(varId != currentVar) continue
          totalQtyInCart.qty += cartItems[i].quantity;
        }
        if(totalQtyInCart.qty <= currentVarQty) {
          let current_varQty = currentVarQty - totalQtyInCart.qty;
          if(current_varQty > 0 && current_varQty < 3) {
            $('.cv-stock-left').text(current_varQty).show();
          } else {
            $('.cv-stock-left').hide();
          }
          //$('.cv-stock-left').text();
        } 
      }       
    });
  }
  function __addTocart(formData, currentBtn, qtyinCart) {  
    console.log(qtyinCart);  
    $(document).find('.cartItemError').remove();   
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
        $('.drawer').addClass('show_drawer');
        $('.drawer_inner').addClass('has_cart_items');
        var leftItems = parseInt($('.cv-stock-left').text()) - 1;
        if(leftItems > 0 && leftItems < 3) {
          $('.cv-stock-left').text(leftItems).show();
        } else {
          $('.cv-stock-left').hide();
        }

        
        if($('body').hasClass('template-cart')) {
          location.reload();
        } else {
          $('.quickView_close_btn').trigger('click');
          $('[data-popup-stage="cart"]').removeClass('hidden').addClass('transition-ready is-open');
        }
      },
      error: function(XMLHttpRequest, textStatus, error ){
        var errors=(XMLHttpRequest.responseJSON.description);
        console.log(textStatus);
        console.log(XMLHttpRequest.status);
        if(XMLHttpRequest.status == 422) {
          currentBtn.before('<p class="cartItemError" style="font-size: 10px;margin: 0;color: red;font-weight: 500;padding-bottom: 0px;">Item already added to cart, no more piece available</p>');
          $('#preloader').hide();
          setTimeout(function(){
            $(document).find('.cartItemError').remove();   
          },7000)
        }
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
        $('#CartCount').removeClass('hide');
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
      // console.log('Remove Cart Clicked')   
      if(!$(this).hasClass('pdp-button')) {
        e.preventDefault();
        var getDataQty = parseInt($(this).closest().find('.form__input .cart__quantity').val());
        if($('body').hasClass('template-cart')){
          // console.log('yes you are on cartpage');
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
          if(getDataQty == avilable_qty || getDataQty == avilable_qty1 || avilable_qty  == 0 || avilable_qty1 == 0){
            console.log('matchedQty')
            if($('body').hasClass('template-cart')){
              $(this).closest('tr[data-cart-item]').find('[data-cart-quantity-error-message-wrapper] [data-cart-quantity-error-message]').text('Max quantity added to cart');
              $(this).closest('tr[data-cart-item]').find('[data-cart-quantity-error-message-wrapper]').removeClass('hide');

              setTimeout(function(){
                $('tr[data-cart-item] [data-cart-quantity-error-message-wrapper] [data-cart-quantity-error-message]').text('');
                $('tr[data-cart-item] [data-cart-quantity-error-message-wrapper]').addClass('hide');
              },3000);
            }
            
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
  $(document).on('submit', 'form.cart' ,function(e){
    let termsAgree = $(this).find('#agree-tems');
    let termsAgreeErrorMsg = $(this).find('#termsError');
    if($(termsAgree).prop('checked') == false){
        e.preventDefault();
        $(termsAgreeErrorMsg).text('** Please agree with terms and conditions.').css('display','block');
        setTimeout(function(){
          $(termsAgreeErrorMsg).text('').css('display','none');
        },3000);
    } else {
        $(termsAgreeErrorMsg).text('').css('display','none');
    }
  });
  $(document).on('change', 'form.cart #agree-tems', function(){
    let termsAgreeErrorMsg2 = $(this).closest('form.cart').find('#termsError');
    if($(this).prop('checked') == false){
        $(termsAgreeErrorMsg2).text('** Please agree with terms and conditions.').css('display','block');
        setTimeout(function(){
          $(termsAgreeErrorMsg2).text('').css('display','none');
        },3000);
    } else {
        $(termsAgreeErrorMsg2).text('').css('display','none');
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

  $(document).on('click', '.cart__continue-controls a[data-closeminicart]', function(){
    $('.close-mini-cart').trigger('click');
  })

  // show tooltip on load
  $(document).find('span.meta_tooltip').remove();
  $(window).on('load', function(){    
    $(document).find('#common-tooltip p').each(function(){
      let dataLabel = $(this).data('label');
      $(document).find('[data-tooltip="'+dataLabel+'"] .pdp-tab-val').after('<span class="meta_tooltip" data-tooltip-title="'+$(this).text()+'"></span>');
    });
  });
  


  $(document).on('click', '.custom-checkbox-list :radio', function(){
    var selectedOption = $(this).val();
    $('.single-option-selector[data-index="option2"] option, .single-option-selector[data-index="option3"] option').attr('disabled','disabled');//removeClass('availableoption');
    $('.single-option-selector[data-index="option2"] option, .single-option-selector[data-index="option3"] option').removeAttr('selected');
    // var option2Availabe = 
    // $('select[name="id"] option')
    // alert($(this).val());
    $('select[name="id"] option[data-color="'+selectedOption+'"]').each(function(){
      var option2Available = $(this).data('size');
      var option3Available = $(this).data('option3');
      if($('.single-option-selector[data-index="option2"]').length > 0) {
        $('.single-option-selector[data-index="option2"] option[value="'+option2Available+'"]').removeAttr('disabled');//addClass('availableoption')
        $('.single-option-selector[data-index="option2"] option:not(:disabled):first').attr('selected','selected').trigger('change');
      } 
      if($('.single-option-selector[data-index="option3"]').length > 0) {
        $('.single-option-selector[data-index="option3"] option[value="'+option3Available+'"]').removeAttr('disabled'); //.addClass('availableoption')
        $('.single-option-selector[data-index="option3"] option:not(:disabled):first').attr('selected','selected').trigger('change');
      }
    })

  })