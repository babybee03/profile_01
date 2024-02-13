/*
$(document).ready(function (){
    index_now = 0;
    key_length = $('.keyword_box').children().length;
    box_height = $(".keyword_box_1").height();

    console.log(index_now, key_length);
    
    function slide () {
        var y = -(box_height * index_now);

        $(".keyword_box").css({
            transform: "translateY(" + y + "px)"
        });
    }

    function next_move() {
        index_now += 1;
        index_now = index_now % key_length;

        slide();
    }
    function action () {
        timer = setInterval(next_move, 3000);
    }
    action();
});
*/
$(document).ready(function(){
    index_now = 0;
    box_height = $('.keyword_box_1').height();
    keyword_length = $(".keyword_box").children().length;

    function slide() {
        y = box_height * index_now;
        $(".keyword_box").css({
            transform: "translateY : -"+ +"px"
        })
    }
})
