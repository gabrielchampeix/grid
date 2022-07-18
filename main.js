$('.headerFixed').on('click', function() {
 $('menu').toggleClass('open')
 $('body').toggleClass('noScroll')
 $('.headerFixed').toggleClass('headerFixedActive')
 return false
})

var image = 1
console.log(image)

$('.arrow').on('click', function (){

    if (image = 1) {
    $('.slider').css('transform','translateX(-54.5vw)')
    var image = 2
    console.log(image)
    }

    else if (image = 2) {
    $('.slider').css('transform','translateX(-94.5vw)')
    var image = 3
    console.log(image)
    }

    return false

})