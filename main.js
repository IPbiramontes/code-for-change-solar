/* global $ */

$(document).ready(function(){

    $("#moreinfo").click(function(){
        $("#popup").removeClass("hide");
    });
    $("#popup").click(function(){
        $("#popup").addClass("hide");
    });
    
});
