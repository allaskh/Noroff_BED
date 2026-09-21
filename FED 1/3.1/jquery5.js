$("document").ready(function() {
    let elem = $("#para3");
    elem.prev().css("background-color", "yellow");
    elem.next().next().css("background-color", "blue");
});