$(document).ready(function(){
  var arr=jQuery.makeArray(document.getElementsByTagName('img'));
    var current=0;
  setInterval(function () {
    $(arr[current]).fadeOut(1000,function(){
             current=current+1;
             $(arr[current]).fadeIn(2000);
             $(arr[current]).fadeOut(2000);
             if(current==arr.length)
             {
             	current=0;
             }
             } )}   
          , 4000);
     

});





