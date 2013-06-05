$(document).ready(function(){
  var arr=jQuery.makeArray(document.getElementsByTagName('img'));
    var current=0;
  setInterval(function () {
    $(arr[current]).fadeOut(1000,function(){
            if(current==arr.length)
             {
               current=0;
             }
            current=current+1;
             $(arr[current]).fadeIn(2000);
             $(arr[current]).fadeOut(2000);
             
             } )}   
          , 4000);
     

});





