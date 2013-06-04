
$(document).read(function(){
var elems=document.getElementsByTagName("img");
    var rotate=jQuery.makeArray(elems);   
     for(var i=0;i<=rotate.length;i++)
     {
    $(rotate).fadeIn('slow').delay(1000).fadeOut('slow');
     }

});







