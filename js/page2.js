//COMPETENCE #1
$(document).ready(function () {
  $('.competence').click(function () {
    $('.page2').addClass('flip')
    $('.page2 .head-1').delay(500).fadeOut(1000)
    $('.page2').css('border-raduis', '0px 12px 22px 0px')

    $('.page2 .back-1').show(3500)

    $('.page2 .head-1').hide(2500)
  })

  // FORMATION #2
  $('.Formation').click(function () {
    setTimeout(function () {
      $('.page2').addClass('flip')
      $('.page2 .head-1').delay(500).fadeOut(1000)
      $('.page2').css('border-raduis', '0px 12px 22px 0px')

      $('.page2 .back-1').show(3500)

      $('.page2 .head').hide(2500)
    }, 1000)

    setTimeout(function () {
      $('.page3').addClass('flip')
      $('.page3').css('z-index', '30')
      $('.page3 .head-2').delay(500).fadeOut(1000)
      $('.page3').css('border-raduis', '0px 12px 22px 0px')
    }, 2000)
  })

  //PROJET #3
  $('.projet').click(function () {
    setTimeout(function () {
      $('.page2').addClass('flip')
      $('.page2 .head-1').delay(500).fadeOut(1000)
      $('.page2').css('border-raduis', '0px 12px 22px 0px')

      $('.page2 .back-1').show(3500)

      $('.page2 .head-1').hide(2500)
    }, 1000)

    setTimeout(function () {
      $('.page3').addClass('flip')
      $('.page3').css('z-index', '30')
      $('.page3 .head-2').delay(500).fadeOut(1000)
      $('.page3').css('border-raduis', '0px 12px 22px 0px')
    }, 2000)

    setTimeout(function () {
      $('.page4').addClass('flip')
      $('.page4').css('z-index', '50')
      $('.page4 .Head-3').delay(500).fadeOut(1000)
      $('.page4').css('border-raduis', '0px 12px 22px 0px')
    }, 3000)
  })

  //coordonnées #4
  $('.contact').click(function () {
    setTimeout(function () {
      $('.page2').addClass('flip')
      $('.page2 .head-1').delay(500).fadeOut(1000)
      $('.page2').css('border-raduis', '0px 12px 22px 0px')

      $('.page2 .back-1').show(3500)

      $('.page2 .head-1').hide(2500)
    }, 1000)

    setTimeout(function () {
      $('.page3').addClass('flip')
      $('.page3').css('z-index', '30')
      $('.page3 .head-2').delay(500).fadeOut(1000)
      $('.page3').css('border-raduis', '0px 12px 22px 0px')
    }, 2000)

    setTimeout(function () {
      $('.page4').addClass('flip')
      $('.page4').css('z-index', '50')
      $('.page4 .Head-3').delay(500).fadeOut(1000)
      $('.page4').css('border-raduis', '0px 12px 22px 0px')
    }, 3000)
    setTimeout(function () {
      $('.page5').addClass('flip')
      $('.page5').css('z-index', '70')
      $('.page5 .head-4').delay(500).fadeOut(1000)
      $('.page5').css('border-raduis', '0px 12px 22px 0px')
    }, 4000)
  })

})
