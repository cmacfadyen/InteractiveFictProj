
var message=0;

$('.rect').on('click',(function(){
 if(message==0){
  $('#intro').fadeOut("slow",function(){
    $('#intro2').fadeIn();
    message++;
});

}
else if(message==1){
  $('#intro2').fadeOut("slow",function(){
    $('#intro3').fadeIn();
    message++;
});
}
else{
  $('#intro3').fadeOut("slow",function(){
  window.location.href="desk.html";
});
}
}));
