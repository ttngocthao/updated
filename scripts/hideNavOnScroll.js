$(document).ready(function(){
    var preScrollPos = 0;
    $(window).scroll(function(event){
        var curScrollPos = $(window).scrollTop();
        var headerHeight = $('header').height();

        if( curScrollPos > headerHeight && preScrollPos < curScrollPos){
            $('header').addClass('scrollUp');
        }else{
            $('header').removeClass('scrollUp');
        }
        preScrollPos = curScrollPos;
    })
})