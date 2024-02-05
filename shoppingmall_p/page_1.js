var check = $(".inventory_check");

$(function(){
    $(".expand_down").on("click", function(){
        $(".inventory_info").slideToggle(800);
        
        if(check.hasClass("open")) {
            check.delay(800).queue(function(next){
                $(this).removeClass("open");
                next();
            });
        } else {
            check.addClass("open");
        }
    });
})

$(function(){
    $(".delivery_button_2").on('click', function(){
        $(".delivery_way").css({
            "display": "none"
        })
        $(".payment_way").css({
            "display": "none"
        })
        $(".exchange_way").css({
            "display": "block"
        })
    })
})