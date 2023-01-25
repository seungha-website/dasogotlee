$(function(){
    $('.bg1_inner a').click(function(){
        $('.adultbg').fadeIn();//show();
    });
    $('.adultbg> .adult> form> a').click(function(){
        $('.adultbg').fadeOut();//hide();
    });


    $('.first').click(function(){
        $('.pop1').fadeIn();//show();
    });
    $('.second').click(function(){
        $('.pop2').fadeIn();//show();
    });
    $('.third').click(function(){
        $('.pop3').fadeIn();//show();
    });


    
    $('.popup a').click(function(){
        $('.popup').fadeOut();//hide();
    });
});