$(document).ready(function(){
    $('#menu-icon').click(function(){
        $('.nav-list').toggleClass('show');
    })
    $('.nav-list').click(function(){
        $('.nav-list').toggleClass('show');
    })
})

//initialise Wow for animated element
new WOW().init();