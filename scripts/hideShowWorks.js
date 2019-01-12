$(document).ready(function(){
    $('.moreBtn').click(function(){
        $(this).siblings('.timeline-event-text').slideToggle();
        $(this).children('i').toggleClass('clickedBtn');
        var textBtn=$(this).children('.text');
        textBtn.text(textBtn.text() == 'Show less' ? 'Click for details':'Show less');
    })
    

})