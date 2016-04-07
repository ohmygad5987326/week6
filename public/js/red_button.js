$(document).ready(function() {
    console.log('running');
    $('.red_btn').click(function(){
        $(this).toggleClass('redClicked');
    });
});
