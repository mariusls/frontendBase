$(document).ready(function() {
    $('.btn-primary').click(function(){
        $('.box').each(function() {		
            $(this).toggleClass('clicked');		
        });
    });
    
    $('.btn-danger').click(function() {
        $('.jebba').toggleClass('shown');
    });
});



