// $( document ).ready(function() {
//     // $('.buttonTop').hide()
//     $('.buttonTop').css('opacity','0')
//     $('.buttonTop').css('transform','translateY(1em)')
// });

$(document).on('scroll', function(){

    var pixelsfromtop = $(document).scrollTop()
    var documentHeight = $(document).height()
    var windowHeight = $(window).height()
    var difference = documentHeight - windowHeight
    var percentage = 100 * pixelsfromtop / difference  
    // console.log(percentage)
    
      if (percentage > 10 && percentage < 96.5) {
        // console.log('switch')
        $('.buttonTop').css('opacity','1')
        $('.buttonTop').css('transform','translateY(0)')
      } else {
        $('.buttonTop').css('opacity','0')
        $('.buttonTop').css('transform','translateY(1em)')
    }

})
   
    