
// Changes the color of header on scroll

$(document).on('scroll', function(){
    if ($(window).scrollTop() > 50) {
        $('#head').addClass('change-color');
    } else {
        $('#head').removeClass('change-color');
    }
});
