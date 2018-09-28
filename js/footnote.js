/******************** this is the js code for footnote *******************************************/
$(document).ready(function(){
    $(".footnote_link").hover(
        function(){
            $(this).find(".footnote").stop().fadeIn(500);
        },
        function(){
            $(this).find(".footnote").stop().fadeOut(500);
        });
});