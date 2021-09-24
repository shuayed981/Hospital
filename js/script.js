$(function(){



var nav = $('.menu_cont').offset().top;

$(window).scroll(function(){

    var src =   $(this).scrollTop();

   if(src > nav ){

    $('.menu_cont').addClass('menu_fix');

   }

   else{

    $('.menu_cont').removeClass('menu_fix');

   }
    
});



});