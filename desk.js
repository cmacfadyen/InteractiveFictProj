

var audio = new Audio('birch.mp3');
audio.loop=true;
audio.play();

$('.searchlight')
    .on('mousemove', function(event) {
        $(this).addClass('on').css({'margin-left': event.pageX - 150, 'margin-top': event.pageY - 150});
    })
    .on('mouseout', function(event) {
        $(this).removeClass('on');
    })
    .on('click', function() {
        $(this).fadeOut(function() {
            $(this).remove();
        });
    })
;
