let arrrr=[];
let array_len;

  $(document).on('click', '#th_cart_btn_c', function () {
    //let th_cart_p_id_ = $(this).attr("th_cart_item_p_id");
    let th_cart_p_id = $(this).attr("th_cart_item_p_handle");
    $(this).addClass("change_icon_c");
<<<<<<< HEAD
    // if(parseInt(th_cart_items_id_no) != 6 && !arrrr.includes(th_cart_p_id)){
    //   $(this).closest('#th_cart_added').remove();
    // $(this).after("<span id='th_cart_added'>item is added to try at cart</span>");
    // }
=======
    if(!arrrr.includes(th_cart_p_id)){
    $(this).after("<span id='th_cart_added'>item is added to try at cart</span>");
    }
>>>>>>> dev-md
  //  alert("The paragraph was clicked.");
   

    if (localStorage.getItem("th_cart_items_id") != null) {

        var th_cart_items_id_no= localStorage.getItem("th_cart_items_id").length;

        if( parseInt(th_cart_items_id_no) > 0){
            
            var new_arry=localStorage.getItem("th_cart_items_id");
            const myArr = new_arry.split(",");
            arrrr=myArr;
<<<<<<< HEAD
            if(parseInt(th_cart_items_id_no) != 4){
            if ( !arrrr.includes(th_cart_p_id)){
              if(parseInt(th_cart_items_id_no) != 4 && !arrrr.includes(th_cart_p_id)){  

            arrrr.push(th_cart_p_id);
            localStorage.setItem("th_cart_items_id",arrrr);
            $(this).after("<span id='th_cart_added'>item is added to try at cart</span>");
              }
            }else{
            $(this).closest('#th_cart_added').remove();
=======
            array_len =arrrr.length;
            if(array_len < 7){
            if ( !arrrr.includes(th_cart_p_id)){
              if( array_len < 7 && !arrrr.includes(th_cart_p_id)){  

            arrrr.push(th_cart_p_id);
            localStorage.setItem("th_cart_items_id",arrrr);
            //$(this).after("<span id='th_cart_added'>item is added to try at cart</span>");
              }
            }else{
            //$(this).closest('#th_cart_added').remove();
            $(this).next().remove("span");
>>>>>>> dev-md
            $(this).after("<span id='th_cart_added'>item is already added to try at cart</span>");

            }
          }else{
<<<<<<< HEAD
            $(this).closest('#th_cart_added').remove();
=======
            // $(this).closest('#th_cart_added').remove();
            $(this).next().remove("span");
>>>>>>> dev-md
            $(this).after("<span id='th_cart_added'>your try at home cart is full.</span>");
          }
    
          }
          
         }
    
       
        if (localStorage.getItem("th_cart_items_id") === null || parseInt(localStorage.getItem("th_cart_items_id").length) == 0 ) {
    
             arrrr.push(th_cart_p_id);
            localStorage.setItem("th_cart_items_id",arrrr);
            console.log(localStorage.getItem("th_cart_items_id"));
            console.log(localStorage.getItem("th_cart_items_id").length);
  
        }
    





});