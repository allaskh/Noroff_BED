$(function(){
 $("#button1").dblclick(function(){
    $(this).fadeTo("slow", 0.4);
 });
 $("#button1").hover(function(){
    $(this).slideUp();
 })
 $("#button2").click(function(){
    $(this).animate({
        width: '200px'
    }, 5000);
 })
});