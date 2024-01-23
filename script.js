
function myFunction() {
    let element = document.body;
    let button = document.querySelector('.site-nav_item2');

    element.classList.toggle("light");

        if (element.classList.contains("light")) {
            button.innerHTML = "☾";
        } 
        else {
            button.innerHTML = "☀︎";
        }
}

$(document).ready(function() {
    $('.site-header').animate({ opacity: 1 }, 1000);

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        $('.site-header').css({
            opacity: 1 - Math.min(scroll / 400, 1)
        });
    });
});