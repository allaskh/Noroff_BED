$(function() {
    $('#onButton').click(function() {
        $('.classB').css('font-size', '30px');
    });
    $('#offButton').click(function() {
        $('.classB').removeAttr('style');
    });
})