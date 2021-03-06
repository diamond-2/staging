document.addEventListener('DOMContentLoaded', function() {
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
    // let address = document.querySelector(".booking-info-input-address").value;
     let address1 = document.querySelector(".booking-info-input-add1").value;
     let address2 = document.querySelector(".booking-info-input-add2").value;
     let city = document.querySelector(".booking-info-input-city").value;
     let state = document.querySelector(".booking-info-input-state").value;
     let country = document.querySelector(".booking-info-input-country").value;
     let pincode = document.querySelector(".booking-info-input-pincode").value;
  
   /* validation */
  
     let input_fill =false; 
  
     if (date ==''&& name =='' && mobile_no=='' && email =='' && address1 =='' && city=='' && state =='' && country==='' && pincode =='' ){
     let errors= document.querySelectorAll(".error");   
      for (i = 0; i < errors.length; i++) {
        errors[i].classList.add("error_sty");
        errors[i].innerHTML="<span>Mandatory Field!</span>";
        }
     }
  
     if(date !=''){
     document.querySelector(".date-slot-input").nextElementSibling.innerHTML='';
     document.querySelector(".date-slot-input").nextElementSibling.classList.remove("error_sty");
     
     input_fill=true;
     }else{
      document.querySelector(".date-slot-input").nextElementSibling.classList.add("error_sty");
      document.querySelector(".date-slot-input").nextElementSibling.innerHTML='<span>Mandatory Field!</span>';
      input_fill=false;
    }
  
     if(name !=''){
      input_fill=true;
      document.querySelector(".name-input").nextElementSibling.classList.remove("error_sty");
       document.querySelector(".name-input").nextElementSibling.innerHTML='';
     }else{
      input_fill=false;
      document.querySelector(".name-input").nextElementSibling.classList.add("error_sty");
      document.querySelector(".name-input").nextElementSibling.innerHTML='<span>Mandatory Field!</span>';
     }
  
     if(mobile_no !=''){
  
      var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
       if( ! mobile_no.match(phoneno)){
         input_fill=false;
          document.querySelector(".tel-input").nextElementSibling.classList.add("error_sty");
          document.querySelector(".tel-input").nextElementSibling.innerHTML='<span>Invalid Phone Number!</span>';
            }
          else{
            input_fill=true;
            document.querySelector(".tel-input").nextElementSibling.classList.remove("error_sty");
            document.querySelector(".tel-input").nextElementSibling.innerHTML='';  
          }
     
     }else{
      input_fill=false;
      document.querySelector(".tel-input").nextElementSibling.classList.add("error_sty");
      document.querySelector(".tel-input").nextElementSibling.innerHTML='<span>Mandatory Field!</span>';
     }
  
     if(email !=''){
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
        if ( ! email.match(validRegex)) {
          input_fill=false;
          document.querySelector(".email-input").nextElementSibling.classList.add("error_sty");
          document.querySelector(".email-input").nextElementSibling.innerHTML='<span>Invalid email address!</span>';
        }else{
          input_fill=true;
          document.querySelector(".email-input").nextElementSibling.classList.remove("error_sty");
          document.querySelector(".email-input").nextElementSibling.innerHTML='';
        }
  
      //document.querySelector(".email-input").nextElementSibling.innerHTML='';
  
     }else{
      input_fill=false;
      document.querySelector(".email-input").nextElementSibling.classList.add("error_sty");
      document.querySelector(".email-input").nextElementSibling.innerHTML='<span>Mandatory Field!</span>';
     }
  
    //  if(address !=''){
    //   input_fill=true;
    //    document.querySelector(".address-input").nextElementSibling.innerHTML='';
    //  }else{
    //   input_fill=false;
    //   document.querySelector(".address-input").nextElementSibling.innerHTML='<span>Mandatory Field!</span>';
    //  }
    

     if(address1 !=''){
      input_fill=true;
      document.querySelector(".add1-input").nextElementSibling.classList.remove("error_sty");
       document.querySelector(".add1-input").nextElementSibling.innerHTML='';
     }else{
      input_fill=false;
      document.querySelector(".add1-input").nextElementSibling.classList.add("error_sty");
      document.querySelector(".add1-input").nextElementSibling.innerHTML='<span>Mandatory Field!</span>';
     }

     if(city !=''){
      input_fill=true;
      document.querySelector(".city-input").nextElementSibling.classList.remove("error_sty");
       document.querySelector(".city-input").nextElementSibling.innerHTML='';
     }else{
      input_fill=false;
      document.querySelector(".city-input").nextElementSibling.classList.add("error_sty");
      document.querySelector(".city-input").nextElementSibling.innerHTML='<span>Mandatory Field!</span>';
     }

     if(state !=''){
      input_fill=true;
      document.querySelector(".state-input").nextElementSibling.classList.remove("error_sty");
       document.querySelector(".state-input").nextElementSibling.innerHTML='';
     }else{
      input_fill=false;
      document.querySelector(".state-input").nextElementSibling.classList.add("error_sty");
      document.querySelector(".state-input").nextElementSibling.innerHTML='<span>Mandatory Field!</span>';
     }

     if(country !=''){
      input_fill=true;
      document.querySelector(".country-input").nextElementSibling.classList.remove("error_sty");
       document.querySelector(".country-input").nextElementSibling.innerHTML='';
     }else{
      input_fill=false;
      document.querySelector(".country-input").nextElementSibling.classList.add("error_sty");
      document.querySelector(".country-input").nextElementSibling.innerHTML='<span>Mandatory Field!</span>';
     }

     if(pincode !=''){
      input_fill=true;
      document.querySelector(".pincode-input").nextElementSibling.classList.remove("error_sty");
       document.querySelector(".pincode-input").nextElementSibling.innerHTML='';
     }else{
      input_fill=false;
      document.querySelector(".pincode-input").nextElementSibling.classList.add("error_sty");
      document.querySelector(".pincode-input").nextElementSibling.innerHTML='<span>Mandatory Field!</span>';
     }

    //  if(address2 !=''){
    //   input_fill=true;
    //    document.querySelector(".pincode-input").nextElementSibling.innerHTML='';
    //  }else{
    //   input_fill=false;
    //   document.querySelector(".pincode-input").nextElementSibling.innerHTML='<span>Mandatory Field!</span>';
    //  }
  
  let errors= document.querySelectorAll(".error");
   
   for (i = 0; i < errors.length; i++) {
     if (errors[i].hasChildNodes()) {
    // console.log("yes")
     input_fill=false;
  }
  }
  
  /* end validation */
  
 
  /* after form validation */

   if( input_fill)  {

    document.getElementById('tah-m-overlay').classList.add('tah-m-is-visible');
    document.getElementById('tah-m-modal').classList.add('tah-m-is-visible');
    let enter_mobole_no = document.querySelector(".booking-info-input-mobile").value;
    document.getElementById("mobile_no_m").innerHTML=enter_mobole_no;
    window.scrollTo({ top: 160, behavior: 'smooth' });

    sentOtp($('.tah-request-data[data-name="mobile"]').val());
  
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
    document.querySelector("#mobile-no-cl").nextElementSibling.classList.add("error_sty");
    document.querySelector("#mobile-no-cl").nextElementSibling.innerHTML='<span>Phone Number required!</span>';

    }
    else{
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if( ! change_mobile_no.match(phoneno)){
        input_fill_n=false;
        document.querySelector("#mobile-no-cl").nextElementSibling.classList.add("error_sty");
       document.querySelector("#mobile-no-cl").nextElementSibling.innerHTML='<span>Invalid Phone Number!</span>';
         }
       else{
        input_fill_n=true;
        document.querySelector("#mobile-no-cl").nextElementSibling.classList.remove("error_sty");
         document.querySelector("#mobile-no-cl").nextElementSibling.innerHTML='';  
       }
    }
       if(input_fill_n){
        document.getElementById("mobile_no_m").innerHTML=change_mobile_no;
        document.getElementById('th_cart_inner-tc-in').style.display = "block";
        document.getElementById('mobile-no-cl').style.display = "none";
         
       }
  
});
  
document.getElementById('vya_btn').addEventListener('click', function(e) {
e.preventDefault();
let mobile = $(document).find('.tah-request-data[data-name="mobile"]').val(); console.log('verifyMobile', mobile)
let input_fill_opt_in=false;
let th_cart_opt_p_v = document.querySelectorAll("input.otp");
var fullotp = '';
for (i = 0; i < th_cart_opt_p_v.length; i++) {
    if (th_cart_opt_p_v[i].value) {
    console.log("yes" + th_cart_opt_p_v[i].value)
    fullotp += th_cart_opt_p_v[i].value
    input_fill_opt_in=true;
 }else{
  input_fill_opt_in=false;
 }
 }
 if(input_fill_opt_in){

    document.getElementById('tah-cart-form').style.display = "none";
    document.getElementById('tah-cart-describing').style.display = "none";
    document.getElementById('breadcrumb-text-c').innerHTML = "Checkout";
    document.getElementById('checkout-form').style.display = "none";
    document.getElementById('ac-wrapper').style.display = "block";
    document.getElementById('tah-m-overlay').classList.remove('tah-m-is-visible');
    document.getElementById('tah-m-modal').classList.remove('tah-m-is-visible');
    document.querySelector(".opt_error").innerHTML='';
   let change_mobile_no = document.getElementById("mobile_no_m").value;
   document.querySelector(".booking-info-input-mobile").value=change_mobile_no;
   document.querySelector(".opt_error").classList.remove("error_sty");

    console.log('Fullotp', fullotp);
    verifyOtp(mobile, fullotp)

   

 }else{
  document.querySelector(".opt_error").classList.add("error_sty");
  document.querySelector(".opt_error").innerHTML='<span>Fill OTP Inputs!</span>';
 }

});

// SentOtp API function 
function sentOtp(mobile){
  _data = {
    "mobile_no":mobile
  }
  fetch('https://aryamond.mobikasa.net/api/send-otp', {
    method: "POST",
    body: JSON.stringify(_data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => {
    console.log(json)

  })
  .catch(err => console.log(err));
}

// Verify Otp API function 
function verifyOtp(mobile, otp){
  _data = {
    "mobile_no":mobile,
    "otp": otp
  }
  fetch('https://aryamond.mobikasa.net/api/verify-otp', {
    method: "POST",
    body: JSON.stringify(_data),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => {
    console.log('verifyOtp', json)
    var prodArray = [];
    $('#the_cart_items_render tr').each(function(){
      prodArray.push(
        {
          "tah_product_id":$(this).data('id'),
          "name":$(this).find('.list-view-item__title').text().trim(),
          "total_price":$(this).data('price'),
          "slug":$(this).data('handle'),
          "image":$(this).find('.cart__image').attr('src'),
          "status":"Active"
      }
      )
    })

    var addTahRequestData = {
      "tah_customer_id": $('.tah-request-data[data-name="tah_customer_id"]').val(),
      "name":$('.tah-request-data[data-name="name"]').val(),
      "email":$('.tah-request-data[data-name="email"]').val(),
      "mobile":$('#mobile_no_m').text().trim(),
      "status":"Pending",
      "date":$('#calender_date').val(),
      "time":$('#time-slot-select-time').val(),
      "address": {
                  "address_1":$('.tah-request-data[data-name="address_1"]').val(),
                   "address_2": $('.tah-request-data[data-name="address_2"]').val(),
                   "city":$('.tah-request-data[data-name="city"]').val(),
                   "zip":$('.tah-request-data[data-name="zip"]').val(),
                   "state":$('.tah-request-data[data-name="state"]').val(),
                   "country":$('.tah-request-data[data-name="country"]').val(), 
                },
      "products": prodArray
      };
      console.log("addTahRequestData==>", addTahRequestData);
      addTahReques(addTahRequestData)

  })
  .catch(err => console.log(err));
}

// Add TAH request API


function addTahReques(addTahRequestData){
  fetch('https://aryamond.mobikasa.net/api/add-tah-request', {
    method: "POST",
    body: JSON.stringify(addTahRequestData),
    headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => {
    console.log('AddTahREques', json);
    document.getElementById('ac-wrapper').style.display = "block";
    $('#adat-d-v').text($('#calender_date').val());
    $('#adat-t-v').text($('#time-slot-select-time').val());
  })
  .catch(err => {

    document.getElementById('checkout-form').style.display = "block";
    console.log('ADDTAHREQ ERR==>', err)
  });
}


/* time slot using momentum js */
//Data
let time_interval = document.getElementById("time-slot-outer").getAttribute("th_cart-time-interval");
let time_start = document.getElementById("time-slot-outer").getAttribute("th_cart-time-start");
let time_end = document.getElementById("time-slot-outer").getAttribute("th_cart-time-end");

let x = {
  slotInterval:time_interval,
  openTime: time_start,
  closeTime: time_end
};

//Format the time
let startTime = moment(x.openTime, "hh:mm A");

//Format the end time and the next day to it 
// let endTimeEE = moment(x.closeTime, "hh:mm A").add(1, 'days');
let endTime = moment(x.closeTime, "hh:mm A");

//Times
let allTimes = [];

//Loop over the times - only pushes time with 30 minutes interval
while (startTime < endTime) {
  //Push times
   

  let start_time= startTime.format("hh:mm A");
  let interval_time= startTime.add(x.slotInterval, 'hours'); // hours or minutes
  let end_time = interval_time.format("hh:mm A");
  let finaltime = start_time + "- "+ end_time;

  allTimes.push(finaltime); 
  //Add interval of 30 minutes
 
}

//console.log(allTimes);

let select_element = document.getElementById("time-slot-select-time");
for (let i=0; i< allTimes.length; i++)
{
console.log('All Times', allTimes[i]);
let val =  allTimes[i].split('-')[0];
val = val.replaceAll(' AM',':00');
val = val.replaceAll(' PM',':00');

var option = document.createElement("option");
option.text = allTimes[i];
let after_rlt = allTimes[i].substr(0, allTimes[i].indexOf('-'));
let final_value= after_rlt.substring(0, after_rlt.length - 2).trim();
option.value = final_value;
select_element.appendChild(option);
}

/* time slot using momentum js */

/* calender js start */


 let selected_date_added; 
var calendar = document.getElementById("calendar-table");
var gridTable = document.getElementById("table-body");
var currentDate = new Date();
var selectedDate = currentDate;
var selectedDayBlock = null;
var globalEventObj = {};

var sidebar = document.getElementById("sidebar");

function createCalendar(date, side) {
var currentDate = date;
var startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

var monthTitle = document.getElementById("month-name");
var yearNum = currentDate.toLocaleString("en-US", {
  year: "numeric"
});
var monthName = currentDate.toLocaleString("en-US", {
  month: "long"
});


let selected_date_default= currentDate.toLocaleString("en-US", {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  
});
selected_date_added = selected_date_default;
monthTitle.innerHTML = `${yearNum} ${monthName} `;

if (side == "left") {
  gridTable.className = "animated fadeOutRight";
} else {
  gridTable.className = "animated fadeOutLeft";
}

setTimeout(() => {
  gridTable.innerHTML = "";

  var newTr = document.createElement("div");
  newTr.className = "row";
  var currentTr = gridTable.appendChild(newTr);

  for (let i = 1; i < startDate.getDay(); i++) {
     let emptyDivCol = document.createElement("div");
     emptyDivCol.className = "col empty-day";
     currentTr.appendChild(emptyDivCol);
  }

  var lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  lastDay = lastDay.getDate();

  for (let i = 1; i <= lastDay; i++) {
     if (currentTr.children.length >= 7) {
        currentTr = gridTable.appendChild(addNewRow());
     }
     let currentDay = document.createElement("div");
     currentDay.className = "col";
     if (selectedDayBlock == null && i == currentDate.getDate() || selectedDate.toDateString() == new Date(currentDate.getFullYear(), currentDate.getMonth(), i).toDateString()) {
        selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);

        document.getElementById("eventDayName").innerHTML = selectedDate.toLocaleString("en-US", {
            year: "numeric",
           month: "long",
           day: "numeric"          
        });

        selectedDayBlock = currentDay;
        setTimeout(() => {
           currentDay.classList.add("blue");
           currentDay.classList.add("lighten-3");
        }, 900);
     }
     currentDay.innerHTML = i;

     //show marks
     if (globalEventObj[new Date(currentDate.getFullYear(), currentDate.getMonth(), i).toDateString()]) {
        let eventMark = document.createElement("div");
        eventMark.className = "day-mark";
        currentDay.appendChild(eventMark);
     }

     currentTr.appendChild(currentDay);
  }

  for (let i = currentTr.getElementsByTagName("div").length; i < 7; i++) {
     let emptyDivCol = document.createElement("div");
     emptyDivCol.className = "col empty-day";
     currentTr.appendChild(emptyDivCol);
  }

  if (side == "left") {
     gridTable.className = "animated fadeInLeft";
  } else {
     gridTable.className = "animated fadeInRight";
  }

  function addNewRow() {
     let node = document.createElement("div");
     node.className = "row";
     return node;
  }

}, !side ? 0 : 270);
}

createCalendar(currentDate);

var todayDayName = document.getElementById("todayDayName");
todayDayName.innerHTML = "Today is " + currentDate.toLocaleString("en-US", {
weekday: "long",
day: "numeric",
month: "short"
});

var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");

prevButton.onclick = function changeMonthPrev() {
currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
createCalendar(currentDate, "left");
}
nextButton.onclick = function changeMonthNext() {
currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
createCalendar(currentDate, "right");
}

gridTable.onclick = function (e) {

if (!e.target.classList.contains("col") || e.target.classList.contains("empty-day")) {
  return;
}

if (selectedDayBlock) {
  if (selectedDayBlock.classList.contains("blue") && selectedDayBlock.classList.contains("lighten-3")) {
     selectedDayBlock.classList.remove("blue");
     selectedDayBlock.classList.remove("lighten-3");
  }
}
selectedDayBlock = e.target;
selectedDayBlock.classList.add("blue");
selectedDayBlock.classList.add("lighten-3");

selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), parseInt(e.target.innerHTML));

let selected_date= selectedDate.toLocaleString("en-US", {
  year : "numeric",
  month: "2-digit",
  day: "numeric"
  
});


//console.log("mss"+ selected_date);
 
// get month name, day of month, year, time
const dateFomat =  selected_date.split('/');
selectedDateFormat =  dateFomat[2]+'-'+dateFomat[0]+'-'+dateFomat[1];
selected_date_added = selectedDateFormat;

//calender_date


}

/* if date is default slected */




$('[data-id="model_calender"]').on('click', function(){
var thisModel = $(this).data('target');
$(thisModel).show();
$(thisModel).find('[data-close="model_calender"]').click(function(){ 
$(thisModel).hide();
});
// $(window).click(function(event){
// if('#'+event.target.id == thisModel){
//   $(thisModel).hide();
// }
// });
});

document.getElementById('apply_footer').addEventListener('click', function() {

document.getElementById("calender_date").value=selected_date_added;
$("#mymodel_calender").hide();
});
document.getElementById('cancel_footer').addEventListener('click', function() {
  $("#mymodel_calender").hide();
  });
  
/* calender js end */
/* otp modal */

  $("[id=th_cart_opt_p]").keyup(function(event) {
     if ($(this).val() !=""){
      if (!$.isNumeric($(this).val())) {
        $(".opt_error").html("<span>Please Enter Number Only!</span>");
        } else{
         $(this).next('input').focus();
         $(".opt_error").empty();
         document.querySelector(".opt_error").classList.remove("error_sty");
        }
       }  
  });

//   function myFunction() {
//     const pattern = /^[0-9]$/;

//     return pattern.test(e.key );
// }
$(document).ready(function() {
  $('.booking-info-input-mobile,.booking-info-input-pincode,#mncl-in,.otp1,.otp2,.otp3,.otp4,.otp5,.otp6').keypress(function(e) {
      var verified = (e.which == 8 || e.which == undefined || e.which == 0) ? null : String.fromCharCode(e.which).match(/[^0-9]/);
      if (verified) {e.preventDefault();}
  });
  });
/* code for show items */


console.log('TAH Cart.js active');


let product_handle_arr=[];

if (localStorage.getItem("th_cart_items_id") != null ) {
  console.log(localStorage.getItem("th_cart_items_id"));
  var th_cart_items_id_no= localStorage.getItem("th_cart_items_id").length;
  if( parseInt(th_cart_items_id_no) > 0){


let added_product_handle =  localStorage.getItem("th_cart_items_id"); console.log("added_product_handle", added_product_handle);

const myArray = added_product_handle.split(",");
$("#the_cart_items_render").empty();
myArray.forEach(function(item, i) {
  $("#th_cart_t_no").text(parseInt(++i));

  var itemUrls = "/products/"+item+'/?view=tahcartres';
  function getData(ajaxurl) { 
    return $.ajax({
      url: itemUrls,
      type: 'GET',
    });
  };
  async function renderMetaInfo() {
    try {
      const res = await getData("/products/"+item+'/?view=tahcartres')

      let x  = res;
      var GridContentupdate = x;
    //console.log(GridContentupdate); 
     $("#the_cart_items_render").append(GridContentupdate);                   
    } catch(err) {
      console.log(err);
    }
  }
  renderMetaInfo();
});

}else{
  $("#th_cart_t_no").text(parseInt(0));
  $("#the_cart_items_render").append("<div class='cart_empty'>Try At Home Cart is Empty!");   
}
}
else{
  $("#th_cart_t_no").text(parseInt(0));
  $("#the_cart_items_render").append("<div class='cart_empty'>Try At Home Cart is Empty!");   
}


/* removed items from localstorag */

$(document).on('click', '[data-remove-tah-item]', function () {

  let th_cart_p_handle_ = $(this).attr("th_cart_remove_p_handle");
  var new_arry_remove_item=localStorage.getItem("th_cart_items_id");
  let new_arry_remove_items = new_arry_remove_item.split(",");
  //  var filteredTahItems = new_arry_remove_items.filter(e => e !== th_cart_p_handle_)
  //  console.log('FilteredTAHItems', filteredTahItems);

    new_arry_remove_items.splice(new_arry_remove_items.indexOf(th_cart_p_handle_), 1);
    localStorage.setItem("th_cart_items_id",new_arry_remove_items);
    setTimeout(function(){
      if(localStorage.getItem("th_cart_items_id").length == 0){
        localStorage.removeItem("th_cart_items_id");
      }
    },1000);
    


    console.log('FilteredTAHItems', localStorage.getItem("th_cart_items_id").length);
    
   // console.log(localStorage.getItem("th_cart_items_id")); 
   if (localStorage.getItem("th_cart_items_id") != null ) {
    var th_cart_items_id_no= localStorage.getItem("th_cart_items_id").length;
    if( parseInt(th_cart_items_id_no) > 0){

      $("#the_cart_items_render").empty();
    let added_product_handle=  localStorage.getItem("th_cart_items_id");
    const myArray = added_product_handle.split(",");
    
    myArray.forEach(function(item, i) {
      $("#th_cart_t_no").text(parseInt(++i));
    
      var itemUrls = "/products/"+item+'/?view=tahcartres';
      function getData(ajaxurl) { 
        return $.ajax({
          url: itemUrls,
          type: 'GET',
        });
      };
      async function renderMetaInfo() {
        try {
          const res = await getData("/products/"+item+'/?view=tahcartres')
    
          let x  = res;
          var GridContentupdate = x;
        //console.log(GridContentupdate); 
       
         $("#the_cart_items_render").append(GridContentupdate);                   
        } catch(err) {
          console.log(err);
        }
      }
      renderMetaInfo();

    });
  }
  else{
    $("#th_cart_t_no").text(parseInt(0));
    $("#the_cart_items_render").empty();
    $("#the_cart_items_render").append("<div class='cart_empty'>Try At Home Cart is Empty!");  
  }
}else{
  $("#th_cart_t_no").text(parseInt(0));
  $("#the_cart_items_render").empty();
    $("#the_cart_items_render").append("<div class='cart_empty'>Try At Home Cart is Empty!"); 
}

});
/* removed items from localstorag */

});