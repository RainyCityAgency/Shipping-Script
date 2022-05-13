(function CheckoutShipping() {
    'use strict';
  
    // Perform changes only on the shipping_method step
    if (Shopify.Checkout.step !== 'shipping_method') return;
  
    // Initialize after Shopify renders the checkout
    document.addEventListener('page:load', init);
    // Reinitialize on DOM refresh
    document.addEventListener('page:change', init);
  
    // Logic
    function init() {
        
    let d = new Date();
      var shippingMethodLength =document.querySelectorAll(".section--shipping-method fieldset .content-box__row .radio__label .radio__label__primary").length;
    // for royal mail hiding based on time
    if(d.getDay() ==1 || d.getDay() ==2 || d.getDay() ==3 || d.getDay() ==4) {
   
          if(d.getHours() >= 0 && d.getHours() < 16){
          for(var i=0;i<shippingMethodLength;i++){
            var shippingToCompare = document.querySelectorAll(".section--shipping-method fieldset .content-box__row .radio__label .radio__label__primary  ")[i].getAttribute("data-shipping-method-label-title");
        if( shippingToCompare == "Royal Mail Next Day Delivery (Tracked) - Dispatched Monday" || shippingToCompare == "Royal Mail Next Day Delivery (Tracked) - Order before 12:30pm"){
            document.querySelectorAll(".section--shipping-method fieldset .content-box__row")[i].style.display="none";
        }
            
        } 
       
  
      }  else {
      
        
         for(var i=0;i<shippingMethodLength;i++){
            var shippingToCompare = document.querySelectorAll(".section--shipping-method fieldset .content-box__row .radio__label .radio__label__primary  ")[i].getAttribute("data-shipping-method-label-title");
        if( shippingToCompare != "Standard Delivery - Expected 3 - 5 Days"  && shippingToCompare != "Royal Mail Next Day Delivery (Tracked) - Order before 4pm" && shippingToCompare != "Courier Next Day Delivery (Tracked) - Order before 4pm" ){
            document.querySelectorAll(".section--shipping-method fieldset .content-box__row")[i].style.display="none";
        }
            
        }
        
        
      
      }
    
    }
    
      
     if( d.getDay() ==5 ) {
      
      if(d.getHours() >= 0 && d.getHours() < 16 ){
        
          for(var i=0;i<shippingMethodLength;i++){
            var shippingToCompare = document.querySelectorAll(".section--shipping-method fieldset .content-box__row .radio__label .radio__label__primary  ")[i].getAttribute("data-shipping-method-label-title");
        if( shippingToCompare == "Royal Mail Next Day Delivery (Tracked) - Dispatched Monday" || shippingToCompare == "Royal Mail Next Day Delivery (Tracked) - Order before 12:30pm"){
            document.querySelectorAll(".section--shipping-method fieldset .content-box__row")[i].style.display="none";
        }
            
        }
       
      }
    
    }
    
    
    
     if( d.getDay() ==5 ) {
      
      if(d.getHours() > 15 && d.getHours() <= 23 ){
          for(var i=0;i<shippingMethodLength;i++){
            var shippingToCompare = document.querySelectorAll(".section--shipping-method fieldset .content-box__row .radio__label .radio__label__primary  ")[i].getAttribute("data-shipping-method-label-title");
        if( shippingToCompare == "Royal Mail Next Day Delivery (Tracked) - Order before 4pm" || shippingToCompare == "Royal Mail Next Day Delivery (Tracked) - Dispatched Monday"){
            document.querySelectorAll(".section--shipping-method fieldset .content-box__row")[i].style.display="none";
        }
            
        }
       
      }
    
    }
    
     if( d.getDay() == 6 ) {
       
        var halfhourFlag = true;
        if(d.getHours() ==12 && d.getMinutes() > 30) {
          
           halfhourFlag = false;
          
        }  
      if(d.getHours() >= 0 && d.getHours() < 13 && halfhourFlag ){
      
        for(var i=0;i<shippingMethodLength;i++){
            var shippingToCompare = document.querySelectorAll(".section--shipping-method fieldset .content-box__row .radio__label .radio__label__primary  ")[i].getAttribute("data-shipping-method-label-title");
        if( shippingToCompare == "Royal Mail Next Day Delivery (Tracked) - Order before 4pm" || shippingToCompare == "Royal Mail Next Day Delivery (Tracked) - Dispatched Monday"){
            document.querySelectorAll(".section--shipping-method fieldset .content-box__row")[i].style.display="none";
        }
            
        }
  
      }
    
    }
    
     if( d.getDay() == 6 ) {
        var halfhourFlag = true;
        if(d.getHours() ==12 && d.getMinutes() < 30) {
          
           halfhourFlag = false;
          
        }  
      
      if(d.getHours() >= 12 && d.getHours() <= 23 && halfhourFlag){
    
         for(var i=0;i<shippingMethodLength;i++){
            var shippingToCompare = document.querySelectorAll(".section--shipping-method fieldset .content-box__row .radio__label .radio__label__primary  ")[i].getAttribute("data-shipping-method-label-title");
        if( shippingToCompare == "Royal Mail Next Day Delivery (Tracked) - Order before 12:30pm" || shippingToCompare == "Royal Mail Next Day Delivery (Tracked) - Order before 4pm"){
            document.querySelectorAll(".section--shipping-method fieldset .content-box__row")[i].style.display="none";
        }
            
        }
      
      }
    
    }
    
    if( d.getDay() == 0 ) {
      
      if(d.getHours() >=  0 && d.getHours() < 23 ){
        
         for(var i=0;i<shippingMethodLength;i++){
            var shippingToCompare = document.querySelectorAll(".section--shipping-method fieldset .content-box__row .radio__label .radio__label__primary  ")[i].getAttribute("data-shipping-method-label-title");
        if( shippingToCompare == "Royal Mail Next Day Delivery (Tracked) - Order before 12:30pm" || shippingToCompare == "Royal Mail Next Day Delivery (Tracked) - Order before 4pm"){
            document.querySelectorAll(".section--shipping-method fieldset .content-box__row")[i].style.display="none";
        }
            
        }
      
  
      }
    
    }
    
     // for courier hidding hidding based on time
     
    
      if(d.getDay() ==1 || d.getDay() ==2 || d.getDay() ==3 || d.getDay() ==4 ) {
      
     
      if(d.getHours() >= 0 && d.getHours() < 16){
          for(var i=0;i<shippingMethodLength;i++){
            var shippingToCompare = document.querySelectorAll(".section--shipping-method fieldset .content-box__row .radio__label .radio__label__primary  ")[i].getAttribute("data-shipping-method-label-title");
        if( shippingToCompare == "Courier Next Day Delivery (Tracked) - Order before 4pm." || shippingToCompare == "Courier Next Day Delivery (Tracked) - Order before 12:30pm" || shippingToCompare == "Courier Next Day Delivery (Tracked) - Dispatched Monday"){
            document.querySelectorAll(".section--shipping-method fieldset .content-box__row")[i].style.display="none";
        }
            
        }
       
  
      }  
    
    }
    
        if(d.getDay() == 4 ) {
      
     
      if(d.getHours() > 15 && d.getHours() <= 23){
          for(var i=0;i<shippingMethodLength;i++){
            var shippingToCompare = document.querySelectorAll(".section--shipping-method fieldset .content-box__row .radio__label .radio__label__primary  ")[i].getAttribute("data-shipping-method-label-title");
        if( shippingToCompare == "Courier Next Day Delivery (Tracked) - Order before 4pm" || shippingToCompare == "Courier Next Day Delivery (Tracked) - Order before 12:30pm" || shippingToCompare == "Courier Next Day Delivery (Tracked) - Dispatched Monday"){
            document.querySelectorAll(".section--shipping-method fieldset .content-box__row")[i].style.display="none";
        }
            
        }
        
          for(var i=0;i<shippingMethodLength;i++){
            var shippingToCompare = document.querySelectorAll(".section--shipping-method fieldset .content-box__row .radio__label .radio__label__primary  ")[i].getAttribute("data-shipping-method-label-title");
        if( shippingToCompare == "Courier Next Day Delivery (Tracked) - Order before 4pm."){
            document.querySelectorAll(".section--shipping-method fieldset .content-box__row")[i].style.display="block";
        }
            
        }
       
  
      }  
    
    }
    
    
        if(d.getDay() == 5 ) {
      
     
      if(d.getHours() >= 0 && d.getHours() < 16){
          for(var i=0;i<shippingMethodLength;i++){
            var shippingToCompare = document.querySelectorAll(".section--shipping-method fieldset .content-box__row .radio__label .radio__label__primary  ")[i].getAttribute("data-shipping-method-label-title");
        if( shippingToCompare == "Courier Next Day Delivery (Tracked) - Order before 4pm" || shippingToCompare == "Courier Next Day Delivery (Tracked) - Order before 12:30pm" || shippingToCompare == "Courier Next Day Delivery (Tracked) - Dispatched Monday"){
            document.querySelectorAll(".section--shipping-method fieldset .content-box__row")[i].style.display="none";
        }
            
        }
       
  
      }  
    
    }
    
    
      if(d.getDay() == 5 ) {
      
     
      if(d.getHours() > 15 && d.getHours() <= 23){
          for(var i=0;i<shippingMethodLength;i++){
            var shippingToCompare = document.querySelectorAll(".section--shipping-method fieldset .content-box__row .radio__label .radio__label__primary  ")[i].getAttribute("data-shipping-method-label-title");
        if( shippingToCompare == "Courier Next Day Delivery (Tracked) - Order before 4pm" || shippingToCompare == "Courier Next Day Delivery (Tracked) - Order before 4pm." || shippingToCompare == "Courier Next Day Delivery (Tracked) - Dispatched Monday"){
            document.querySelectorAll(".section--shipping-method fieldset .content-box__row")[i].style.display="none";
        }
            
        }
       
  
      }  
    
    }
    
    
        if(d.getDay() == 6 ) {
       var halfhourFlag = true;
        if(d.getHours() ==12 && d.getMinutes() > 30) {
          
           halfhourFlag = false;
          
        }  
     
      if(d.getHours() >= 0 && d.getHours() < 13 && halfhourFlag){
          for(var i=0;i<shippingMethodLength;i++){
            var shippingToCompare = document.querySelectorAll(".section--shipping-method fieldset .content-box__row .radio__label .radio__label__primary  ")[i].getAttribute("data-shipping-method-label-title");
        if( shippingToCompare == "Courier Next Day Delivery (Tracked) - Order before 4pm" || shippingToCompare == "Courier Next Day Delivery (Tracked) - Order before 4pm." || shippingToCompare == "Courier Next Day Delivery (Tracked) - Dispatched Monday"){
            document.querySelectorAll(".section--shipping-method fieldset .content-box__row")[i].style.display="none";
        }
            
        }
       
  
      }  
    
    }
    
       if(d.getDay() == 6 ) {
           var halfhourFlag = true;
        if(d.getHours() ==12 && d.getMinutes() < 30) {
          
           halfhourFlag = false;
          
        }  
      
     
      if(d.getHours() >= 12 && d.getHours() <= 23 && halfhourFlag){
          for(var i=0;i<shippingMethodLength;i++){
            var shippingToCompare = document.querySelectorAll(".section--shipping-method fieldset .content-box__row .radio__label .radio__label__primary  ")[i].getAttribute("data-shipping-method-label-title");
        if( shippingToCompare == "Courier Next Day Delivery (Tracked) - Order before 4pm" || shippingToCompare == "Courier Next Day Delivery (Tracked) - Order before 4pm." || shippingToCompare == "Courier Next Day Delivery (Tracked) - Order before 12:30pm"){
            document.querySelectorAll(".section--shipping-method fieldset .content-box__row")[i].style.display="none";
        }
            
        }
       
  
      }  
    
    }
    
         if(d.getDay() == 0 ) {
      
     
      if(d.getHours() >= 0 && d.getHours() <= 23){
          for(var i=0;i<shippingMethodLength;i++){
            var shippingToCompare = document.querySelectorAll(".section--shipping-method fieldset .content-box__row .radio__label .radio__label__primary  ")[i].getAttribute("data-shipping-method-label-title");
        if( shippingToCompare == "Courier Next Day Delivery (Tracked) - Order before 4pm" || shippingToCompare == "Courier Next Day Delivery (Tracked) - Order before 4pm." || shippingToCompare == "Courier Next Day Delivery (Tracked) - Order before 12:30pm"){
            document.querySelectorAll(".section--shipping-method fieldset .content-box__row")[i].style.display="none";
        }
            
        }
       
  
      }  
    
    }
  
      
    }
  })();
  
     
   
  