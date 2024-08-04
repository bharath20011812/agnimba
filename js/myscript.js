$(document).ready(function() {
  /*** Newsfeed ***/
  $('.speciali-main').owlCarousel({
   loop: true,
   margin: 10,
   items:3,
   nav:false,
   autoplay:true,
   center: false,
   dots:true,
   navText: [  
     '<i class="fa-solid fa-arrow-left"></i>',
     '<i class="fa-solid fa-arrow-right"></i>'
 ],
   responsive:{
     0:{
       items:1
     },
     600:{
       items:1
       // margin: 85,
     },
     768:{
       items:2
     },
     1200:{
       items:3
     }
   }
 });


  /*** Newsfeed ***/
  $('.recruit-main').owlCarousel({
   loop: true,
   margin: 10,
   items:3,
   nav:false,
   autoplay:true,
   center: false,
   dots:true,
   responsive:{
     0:{
       items:2
     },
     600:{
       items:2
       // margin: 85,
     },
     768:{
       items:3
     },
     1200:{
       items:5
     }
   }
 });
});



function inVisible(element) {
 //Checking if the element is
 //visible in the viewport
 var WindowTop = $(window).scrollTop();
 var WindowBottom = WindowTop + $(window).height();
 var ElementTop = element.offset().top;
 var ElementBottom = ElementTop + element.height();
 //animating the element if it is
 //visible in the viewport
 if ((ElementBottom <= WindowBottom) && ElementTop >= WindowTop)
   animate(element);
}

function animate(element) {
 //Animating the element if not animated before
 if (!element.hasClass('ms-animated')) {
   var maxval = element.data('max');
   var html = element.html();
   element.addClass("ms-animated");
   $({
     countNum: element.html()
   }).animate({
     countNum: maxval
   }, {
     //duration 5 seconds
     duration: 5000,
     easing: 'linear',
     step: function() {
       element.html(Math.floor(this.countNum) + html);
     },
     complete: function() {
       element.html(this.countNum + html);
     }
   });
 }

}

//When the document is ready
$(function() {
 //This is triggered when the
 //user scrolls the page
 $(window).scroll(function() {
   //Checking if each items to animate are 
   //visible in the viewport
   $("h2[data-max]").each(function() {
     inVisible($(this));
   });
 })
});



