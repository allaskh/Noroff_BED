function action1(){
$("div p").wrap('<a href="https://www.youtube.com"></a>');
}

function action2(){
        $("a").hover(hoverToggle);
}
function hoverToggle(){
    $(this).css("font-size", "20px");
}

function action3(){
    $("p").fadeOut("slow", "linear");
    $("button").slideUp("slow", "linear");
}