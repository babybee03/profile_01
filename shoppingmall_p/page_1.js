
$(function(){
    $(".expand_down").on("click", function(){
        $(".inventory_info").css({
            "display" : "block"
        })
    })
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