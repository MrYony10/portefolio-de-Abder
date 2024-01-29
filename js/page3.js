$(document).ready(function() {
$("#button-3").click(function(){
    $(".page2 .back-1").append("<img src='../img/page2 back/GIRL.png' class='girl'/>") 
    $(".girl").css({
        'position': 'absolute',
        "width" : "197px",
        "height": "291px",
        "left": "152px",
        "top": "-31px",
        "z-index": "0",
       "filter": "grayscale(100%)",
    })

    
})
$(".button-4").click(function(){
    console.log("hello");
    $(" .girl").css("filter","")


})

})

