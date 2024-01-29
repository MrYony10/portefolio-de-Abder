$('.page1 .back, .page2 .back-1, .page3 .back-2, .page4 .back-3, .page5 .back-4, .page6 .back-5, .page7 .back-6').hide();


$('#button1').click(function () {
   if (!$('.page1').hasClass('flip1')) {
      $('.page1').addClass('flip1')
      $('.page1 .head').delay(500).fadeOut(1000)
      $('.page1').css('border-radius', '0px 12px 22px 0px')
      $('.page1').css('z-index','30')
      $('.page1 .back').show(3500)
      $('.page1 .head').hide(2500)
   } 
 else if(!$('.page2').hasClass('flip')) {
     $('.page2').addClass('flip')
    $('.page2 .head-1').delay(500).fadeOut(1000)
    $('.page2').css('border-radius', '0px 12px 22px 0px')
    $('.page2').css('z-index','50')
    $('.page2 .back-1').show(3500)
  
    $('.page2 .head').hide(2500)
  } 
  else if (!$('.page3').hasClass('flip')) {
   $('.page3').addClass('flip')
   $('.page3').css('z-index','60')
   $('.page3 .head-2').delay(500).fadeOut(1000)
   $('.page3').css('border-radius', '0px 12px 22px 0px')
   $('.page3 .back-2').show(3500)
}
  else if (!$('.page4').hasClass('flip')) {
   $('.page4').addClass('flip')
   $('.page4').css('z-index','70')
   $('.page4 .Head-3').delay(500).fadeOut(1000)
   $('.page4').css('border-radius', '0px 12px 22px 0px')
   $('.page4 .back-3').show(3500)




}
  else if (!$('.page5').hasClass('flip')) {
   $('.page5').addClass('flip')
   $('.page5').css('z-index','80')
   $('.page5 .head-4').delay(500).fadeOut(1000)
   $('.page5').css('border-radius', '0px 12px 22px 0px')
   $('.page5 .back-4').show(3500)


}
  else if (!$('.page6').hasClass('flip')) {
   $('.page6').addClass('flip')
   $('.page6').css('z-index',"90")
   $('.page6 .head-5').delay(500).fadeOut(1000)
   $('.page6').css('border-radius', '0px 12px 22px 0px')
   $('.page6 .back-5').show(3500)

}


})





$('#button2').click(function () {

 if ($('.page6').hasClass('flip')) {
   $('.page6').removeClass('flip')
   $('.page6').css("z-index","30")
   $('.page6 .head-5').show(800)
   $('.page6 .back-5').hide(800)
  



}
  else if ($('.page5').hasClass('flip')) {
   $('.page5').removeClass('flip')
   $('.page5').css("z-index","40")
   $('.page5 .head-4').show(800)
   $('.page5 .back-4').hide(800)

}
  else if ($('.page4').hasClass('flip')) {
   $('.page4').removeClass('flip')
   $('.page4').css("z-index","60")
   $('.page4 .Head-3').show(800)
   $('.page4 .back-3').hide(800)
  
  

}
  else if ($('.page3').hasClass('flip')) {
   $('.page3').removeClass('flip')
   $('.page3 .head-2').show(800)
   $('.page3').css("z-index","70")
   $('.page3 .back-2').hide(800)
   
  

}
else if ($('.page2').hasClass('flip')) {
   $('.page2').removeClass('flip')
   $('.page2 .head-1').show(800)
   $('.page2').css("z-index","80")
   $('.page2 .bacK-1').hide(800)
   

  
} 
else if ($('.page1').hasClass('flip1')) {
   $('.page1').removeClass('flip1')
   $('.page1 .head').show(800)
   $('.page1').css("z-index","100")
   $('.page1 .back').hide(800)
   

  
} 

})