$(document).ready(function () {
    $('a[href^="#"]').click(function () {
        var anchor = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(anchor).offset().top - 65.6
        }, 500);
    });
});