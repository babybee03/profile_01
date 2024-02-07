var check = $(".inventory_check");

$(function(){
    $(".expand_down").on("click", function(){
        $(".inventory_info").slideToggle(800);

        if(check.hasClass("open")) {
            check.delay(800).queue(function(){
                $(this).removeClass("open");
            });
        } else {
            check.addClass("open");
        }
    });
})


/*배송안내 버튼*/
$(function(){
    $(".delivery_button_2").on('click', function(){
        $(".delivery_way").css({
            "display": "none"
        })
        $(".exchange_way").css({
            "display": "block"
        })
        $(".payment_way").css({
            "display": "none"
        })
        
        $(".delivery_button_1").removeClass("color_change");
        $(".delivery_button_3").removeClass("color_change");
        $(this).addClass("color_change");
    })

    $(".delivery_button_1").on('click', function(){
        $(".delivery_way").css({
            "display": "block"
        })
        $(".exchange_way").css({
            "display": "none"
        })
        $(".payment_way").css({
            "display": "none"
        })
        $(".delivery_button_2").removeClass("color_change");
        $(".delivery_button_3").removeClass("color_change");
        $(this).addClass("color_change");
    })

    $(".delivery_button_3").on('click', function(){
        $(".delivery_way").css({
            "display": "none"
        })
        $(".exchange_way").css({
            "display": "none"
        })
        $(".payment_way").css({
            "display": "block"
        })
        $(".delivery_button_1").removeClass("color_change");
        $(".delivery_button_2").removeClass("color_change");
        $(this).addClass("color_change");
    })
})