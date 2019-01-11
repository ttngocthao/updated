$(document).ready(function(){
    $('.moreBtn').click(function(){
        $(this).siblings('.timeline-event-text').slideToggle();

        $(this).children('i').toggleClass('clickedBtn')
    })
    

})