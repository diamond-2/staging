
document.getElementById("sap-btn").addEventListener("click", function(event){
    event.preventDefault()
    document.getElementById('tah-cart-form').style.display = "none";
    document.getElementById('tah-cart-describing').style.display = "none";
    document.getElementById('breadcrumb-text-c').innerHTML = "Checkout";
    document.getElementById('checkout-form').style.display = "block";
  
    /* data collection of checkout form inputs*/
    
    /* data collection of checkout form inputs*/
  
  });
  
  document.getElementById("booking-info-btn-bn").addEventListener("click", function(event){
    event.preventDefault()
  
     /* data collection of appointment conformation form input*/
     let date = document.querySelector(".date-slot-input-date").value;
     let time = document.querySelector(".time-slot-input-time").value;
     let name = document.querySelector(".booking-info-input-name").value;
     let mobile_no = document.querySelector(".booking-info-input-mobile").value;
     let email = document.querySelector(".booking-info-input-email").value;
     let address = document.querySelector(".booking-info-input-address").value;
  
   /* validation */
  
     let input_fill =false; 
  
     if (date ==''&& name =='' && mobile_no=='' && email =='' && address==''){
     let errors= document.querySelectorAll(".error");
   
      for (i = 0; i < errors.length; i++) {
        errors[i].innerHTML="<span>field is require!</span>";
        }
     }
  
     if(date !=''){
     document.querySelector(".date-slot-input").nextElementSibling.innerHTML='';
     input_fill=true;
     }else{
      document.querySelector(".date-slot-input").nextElementSibling.innerHTML='<span>field is require!</span>';
      input_fill=false;
    }
  
     if(name !=''){
      input_fill=true;
       document.querySelector(".name-input").nextElementSibling.innerHTML='';
     }else{
      input_fill=false;
      document.querySelector(".name-input").nextElementSibling.innerHTML='<span>field is require!</span>';
     }
  
     if(mobile_no !=''){
  
      var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
       if( ! mobile_no.match(phoneno)){
         input_fill=false;
          document.querySelector(".tel-input").nextElementSibling.innerHTML='<span>Invalid Phone Number!</span>';
            }
          else{
            input_fill=true;
            document.querySelector(".tel-input").nextElementSibling.innerHTML='';  
          }
     
     }else{
      input_fill=false;
      document.querySelector(".tel-input").nextElementSibling.innerHTML='<span>field is require!</span>';
     }
  
     if(email !=''){
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
        if ( ! email.match(validRegex)) {
          input_fill=false;
          document.querySelector(".email-input").nextElementSibling.innerHTML='<span>Invalid email address!</span>';
        }else{
          input_fill=true;
          document.querySelector(".email-input").nextElementSibling.innerHTML='';
        }
  
      //document.querySelector(".email-input").nextElementSibling.innerHTML='';
  
     }else{
      input_fill=false;
      document.querySelector(".email-input").nextElementSibling.innerHTML='<span>field is require!</span>';
     }
  
     if(address !=''){
      input_fill=true;
       document.querySelector(".address-input").nextElementSibling.innerHTML='';
     }else{
      input_fill=false;
      document.querySelector(".address-input").nextElementSibling.innerHTML='<span>field is require!</span>';
     }
  
  let errors= document.querySelectorAll(".error");
   
   for (i = 0; i < errors.length; i++) {
     if (errors[i].hasChildNodes()) {
     console.log("yes")
     input_fill=false;
  }
  }
  
  /* end validation */
  
  /* after form validation */
   if( input_fill)
   {

    document.getElementById('tah-m-overlay').classList.add('tah-m-is-visible');
    document.getElementById('tah-m-modal').classList.add('tah-m-is-visible');
    window.scrollTo({ top: 160, behavior: 'smooth' });
  
   }
  
      /* data collection of appointment conformation form input*/
  
  });
  
  document.getElementById('tah-m-close-btn').addEventListener('click', function() {
    document.getElementById('tah-m-overlay').classList.remove('tah-m-is-visible');
    document.getElementById('tah-m-modal').classList.remove('tah-m-is-visible');
  });
  

  document.getElementById('mobile_no_mc').addEventListener('click', function() {
    document.getElementById('th_cart_inner-tc-in').style.display = "none";
    document.getElementById('mobile-no-cl').style.display = "block";
  
});
  


document.getElementById('mncl-in-btn').addEventListener('click', function() {
    let change_mobile_no = document.getElementById('mncl-in').value;
    let input_fill_n;
    if(change_mobile_no ==''){
    document.querySelector("#mobile-no-cl").nextElementSibling.innerHTML='<span>Phone Number required!</span>';

    }
    else{
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if( ! change_mobile_no.match(phoneno)){
        input_fill_n=false;
       document.querySelector("#mobile-no-cl").nextElementSibling.innerHTML='<span>Invalid Phone Number!</span>';
         }
       else{
        input_fill_n=true;
         document.querySelector("#mobile-no-cl").nextElementSibling.innerHTML='';  
       }
    }
       if(input_fill_n){
        document.getElementById("mobile_no_m").innerHTML=change_mobile_no;
        document.getElementById('th_cart_inner-tc-in').style.display = "block";
        document.getElementById('mobile-no-cl').style.display = "none";
         
       }
  
});
  
document.getElementById('vya_btn').addEventListener('click', function() {
let input_fill_opt_in=false;
let th_cart_opt_p_v = document.querySelectorAll("#th_cart_opt_p");
for (i = 0; i < th_cart_opt_p_v.length; i++) {
    if (th_cart_opt_p_v[i].value) {
    console.log("yes" + th_cart_opt_p_v[i].value)
    input_fill_opt_in=true;
 }
 }
 if(input_fill_opt_in){

    document.getElementById('tah-cart-form').style.display = "none";
    document.getElementById('tah-cart-describing').style.display = "none";
    document.getElementById('breadcrumb-text-c').innerHTML = "Checkout";
    document.getElementById('checkout-form').style.display = "none";
    document.getElementById('checkout-form').style.display = "none";
    document.getElementById('ac-wrapper').style.display = "block";
    document.getElementById('tah-m-overlay').classList.remove('tah-m-is-visible');
    document.getElementById('tah-m-modal').classList.remove('tah-m-is-visible');
 }

});



var x = {
    nextSlot: 60,
    // breakTime: [
    //     ['11:00', '14:00'], ['16:00', '18:00']
    // ],
    startTime: '06:00',
    endTime: '12:00'
};

var slotTime = moment(x.startTime, "HH:mm");
var endTime = moment(x.endTime, "HH:mm");

function isInBreak(slotTime, breakTimes) {
    return breakTimes.some((br) => {
      return slotTime >= moment(br[0], "HH:mm") && slotTime < moment(br[1], "HH:mm");
  });
}

let times = [];
while (slotTime < endTime)
{
  if (!isInBreak(slotTime, x.breakTime)) {
     times.push(slotTime.format("HH:mm"));
  }
  slotTime = slotTime.add(x.nextSlot, 'minutes');
}

console.log("Time slots: ", times);
