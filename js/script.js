$(document).ready(function () {
    $('.search').click(function () {
        $('form').toggleClass('active')
    });
})

$('.arrowUp').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 100);
});