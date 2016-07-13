$(function(){
    //gnb open
    $(".btn_nav").click(function(){
        $("nav").css({"position":"fixed", "top":"0", "left":"0","visibility":"visible"});
        $(".gnb").fadeIn(300);
        setTimeout(function(){
            $(".gnb_list").css({"-webkit-transform":"translateY(0px)", "transform":"translateY(0px)"},1000);
        },200);
    });

    //gnb close
    $(".close").click(function(){
        $(".gnb").fadeOut(1200);
        $(".gnb_list").css({"-webkit-transform":"translateY(-1400px)", "transform":"translateY(-1400px)"},700);
        $("nav").css({"position":"none","visibility":"hidden"});
    });    


    //window scrolltop 계산 후 스크롤링
        // var flag = true;
        // var prevPosition = 0;

        // $(window).scroll(function() {
        //     var currentPosition = $(window).scrollTop();
        //     if (prevPosition >= currentPosition) {
        //             prevPosition = currentPosition;
        //         return;
        //     }
        //     prevPosition = currentPosition;
        //         if ($(window).scrollTop() > $("#hidden-position")
        //             .offset().top - 10 && $(window).scrollTop() < $(
        //                 "#hidden-position").offset().top + $("#hidden-position").height()) {
        //             if (flag) {
        //                 $("html,body").stop(true, false).animate(
        //                 {
        //                    scrollTop : $(".photo").offset().top- $("header").height()
        //                 }, 500);
        //                 $("header").css({"height":"200px"});
        //                 $(".top").css({"margin-top":"30px"});
        //                 flag = !flag;
        //             }else{
                        
        //             }
                   
        //         }else if($(window).scrollTop() === 0){
        //             // $("header").css({"height":"60px"});
        //             // $(".top").css({"margin-top":"0px"});
        //             alert("Dd");
        //         } else{
        //             flag = true;
                    
        //         }
             
        // });
       
        // $(".top").slideUp();
        $(window).scroll(function() {
           if($(window).scrollTop() == 0) {
                // $(".top").slideUp();
           }else{
            // $(".top").slideDown();
           }
        });

        $(".top").click(function(){
            // $('html, body').animate({scrollTop: 0});
            // $(".top").slideUp();
            // console.log("클릭 닫혀라");
        });



});
