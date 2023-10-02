
// Changes the color of header on scroll

$(document).on('scroll', function(){
    if ($(window).scrollTop() > 50) {
        $('#head').addClass('change-color');
        $('#head').removeClass('change-color2');

    } else {
        $('#head').removeClass('change-color');
        $('#head').addClass('change-color2');
    }
});
