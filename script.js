$(document).ready(function(){
  var arr=jQuery.makeArray(document.getElementsByTagName('img'));
    var current=0;
  setInterval(function () {
    $(arr[current]).fadeOut(1000,function(){
             
             $(arr[current+1]).fadeIn(2000);
             $(arr[current+1]).fadeOut(2000);
             if(current==arr.length)
             {
             	current=0;
             }
             } )}   
          , 4000);
     

});





