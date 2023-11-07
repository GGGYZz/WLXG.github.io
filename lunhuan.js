$(function(){
    var index=0;
    var f;
    dinghies();
    function dinghies(){
        f=setInterval(function(){
        if(index==$(".box-img").length-1){
            index=0;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");
            $(".button").css("background-color","#ccc");
            $(".button").eq(index).css("background-color","#fff");

        }
        else{
            index++;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");
            $(".button").css("background-color","#ccc");
            $(".button").eq(index).css("background-color","#fff");
        }
        
    },4000)
    }
    $(".box-left").click(function(){
        clearInterval(f);
        if(index==0){
            index=$(".box-img").length-1;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");
            $(".button").css("background-color","#ccc");
            $(".button").eq(index).css("background-color","#fff");
            dinghies();

          }
        else{
            index--;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");
            $(".button").css("background-color","#ccc");
            $(".button").eq(index).css("background-color","#fff");
            dinghies();

        }
    })
    $(".box-right").click(function(){
        clearInterval(f);
        if(index==$(".box-img").length-1){
            index=0;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");
            $(".button").css("background-color","#ccc");
            $(".button").eq(index).css("background-color","#fff");
            dinghies();

        }
        else{
            index++;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");
            $(".button").css("background-color","#ccc");
            $(".button").eq(index).css("background-color","#fff");
            dinghies();

        }
    })
        $(".button").click(function(){
            clearInterval(f);
            var idexx=$(this).index();
            index=idexx;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");
            $(".button").css("background-color","#ccc");
            $(".button").eq(index).css("background-color","#fff");
            dinghies();
        })

})