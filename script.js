$(document).ready(function(){
  var arr=$('img');
    var current=0;
  setInterval(function () {
    $(arr[current]).fadeOut(1000,function(){
            if(current==arr.length-1)
             {
               current=0;
             }
             else
             {
             current=current+1;
             }
             $(arr[current]).fadeIn(2000);           
             } )}   
          , 4000);
     

});





