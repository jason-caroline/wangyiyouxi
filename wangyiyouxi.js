/**
 * Created by oaec on 2017/7/2.
 */
$(function () {

    var db=openDatabase("feedback","1.0","myfirstwebsqldemo",function(){
        console.log("web sql works");
    });


    ////导航条图片显示隐藏///////////////
    $(".logoright").hover(function(){
        //alert(111)
        $(this).css({opacity:"0"});
        $(".logobottom").css({"display":"block"});
    },function(){
        $(".logobottom").css({"display":"none"});
        $(this).css({opacity:"1"});
    });
    /////////////////////////////
    $(".wybx").hover(function(){

        $(".logoGm").css({"display":"block"});

    },function(){
        $(".logoGm").css({"display":"none"});
    });
//// 导航条背景图/////////
    $(".content>nav>ul li:not(.lis)").hover(function(){
        $(this).find("ul").slideDown();
        $(this).css({"background-position-y":"-120px"});
        $(this).find("span").css({"background-position":"0 0"});
    },function(){

        $(this).find("ul").slideUp();
        $(this).css({"background-position-y":"-60px"});
        $(this).find("span").css({"background-position":"0 -34px"});
    });

    // f1 //////////
    $(".f1 ul li i ").each( function (index) {

        $(".f1 .list li i").eq(index).hover(function(){
           $(".f1 .list li i ").eq(index).animate({"margin-top":"10px"},300);
           $(".f1 .list li span ").eq(index).animate({"margin-top":"-25px"},400);

        },function(){

            $(".f1 .list li i ").eq(index).animate({"margin-top":"30px"},300);
           $(".f1 .list li span ").eq(index).animate({"margin-top":"-30px"},400);
        });
    });


    // f1 //////

 //.list3///////////
   $(".list3 >li  ").each(function (index) {
       $(".list3 >li").eq(index).hover(function(){
           $(" .list3 >li i  ").eq(index).animate({"margin-top":"-10px"},300);
       },function(){
           $(" .list3 >li i  ").eq(index).animate({"margin-top":"5px"},300);
       });
   });



    ////////////tab页////
       // $("#mytab a").tab("show");
    $("#myTab a").each(function (index) {
        $("#myTab a").eq(index).mouseover(function () {
            //evt.preventDefault();
            $("#myTab a").eq(index).tab("show");
        });
    });

    /////第二个tab页/////////////////////////
    $("#myTab2 a").each(function (index) {
        $("#myTab2 a").eq(index).mouseover(function () {
            $("#myTab2 a").eq(index).tab("show");
        });
    });

    /////点击切换tab页///////////////////////
    $("#id1").click(function () {
        $(".first").css({"display":"block"});
        $(".second").css({"display":"none"});
    });

    $("#id2").click(function () {
        $(".first").css({"display":"none"});
        $(".second").css({"display":"block"});
    })





    ///////////////////////////////////
    $(".guidebox-1 ul li i ").each( function (index) {

        $(".guidebox-1 ul li i").eq(index).hover(function(){
            $(".guidebox-1 ul li i ").eq(index).animate({"margin-top":"5px"},300);
            $(".guidebox-1 ul li span ").eq(index).animate({"margin-top":"-5px"},400);
        },function(){
            $(".guidebox-1 ul li i ").eq(index).animate({"margin-top":"20px"},300);
            $(".guidebox-1 ul li span").eq(index).animate({"margin-top":"5px"},400);
        });
    });
    // careerbox////////////////////////////
    $("#myCareer a").each(function (index) {
        $("#myCareer  a").eq(index).mouseover(function () {
            $("#myCareer a").eq(index).tab("show");
        });
    });
    // careerbox/////////////////////////////////////////
    ///#one
    $(".carrerbox .one").mouseover(function(){

        $("#one .male").animate({"background-position-x":"600px"},10);
        $(".carrerbox #one .name").animate({"margin-top":"100px","opacity":"0"},10);
        $(".carrerbox  #one .dingwei").animate({"margin-top":"120px","opacity": "0"},10);
        $(".carrerbox #one .detail_btn").animate({"margin-top":"120px","opacity": "0"},10)
        $(".carrerbox #one .leida").animate({"opacity": "0"},10)

       $(" #one .male").animate({"background-position-x":"30px"},500)
        $(".carrerbox #one .name").animate({"margin-top":"60px","opacity":"1"},300)
        $(".carrerbox #one .dingwei").delay(600).animate({"margin-top":"50px","opacity": "1"},200)
        $(".carrerbox #one .detail_btn").delay(600).animate({"margin-top":"50px","opacity": "1"},200)
        $(".carrerbox #one .leida").delay(800).animate({"opacity": "1"},200)
    });

        //#two/////////////////////////////////
    $(".carrerbox .two").mouseover(function(){

        $("#two .male").animate({"background-position-x":"500px"},50);
        $(".carrerbox #two .name").animate({"margin-top":"30px","opacity":"0"},50);
        $(".carrerbox  #two .dingwei").animate({"margin-top":"120px","opacity": "0"},50);
        $(".carrerbox #two .detail_btn").animate({"margin-top":"120px","opacity": "0"},50)
        $(".carrerbox #two .leida").animate({"opacity": "0"},50)

        $(" #two .male").animate({"background-position-x":"50px"},500)
        $(".carrerbox #two .name").animate({"margin-top":"0px","opacity":"1"},300)
        $(".carrerbox #two .dingwei").delay(600).animate({"margin-top":"50px","opacity": "1"},200)
        $(".carrerbox #two .detail_btn").delay(600).animate({"margin-top":"50px","opacity": "1"},200)
        $(".carrerbox #two .leida").delay(800).animate({"opacity": "1"},200)
    //},function(){

    });


    //#three/////////////////////////////////

    $(".carrerbox .three").mouseover(function(){

        $("#three .male").animate({"background-position-x":"500px"},50);
        $(".carrerbox #three .name").animate({"margin-top":"30px","opacity":"0"},50);
        $(".carrerbox  #three .dingwei").animate({"margin-top":"120px","opacity": "0"},50);
        $(".carrerbox #three .detail_btn").animate({"margin-top":"120px","opacity": "0"},50)
        $(".carrerbox #three .leida").animate({"opacity": "0"},50)

        $(" #three .male").animate({"background-position-x":"50px"},500)
        $(".carrerbox #three .name").animate({"margin-top":"0px","opacity":"1"},200)
        $(".carrerbox #three .dingwei").delay(600).animate({"margin-top":"50px","opacity": "1"},200)
        $(".carrerbox #three .detail_btn").delay(600).animate({"margin-top":"50px","opacity": "1"},200)
        $(".carrerbox #three .leida").delay(800).animate({"opacity": "1"},200)
    //},function(){

    });

    //#four/////////////////////////////////

    $(".carrerbox .four").mouseover(function(){

        $("#four .male").animate({"background-position-x":"500px"},50);
        $(".carrerbox #four .name").animate({"margin-top":"30px","opacity":"0"},50);
        $(".carrerbox  #four .dingwei").animate({"margin-top":"120px","opacity": "0"},50);
        $(".carrerbox #four .detail_btn").animate({"margin-top":"120px","opacity": "0"},50)
        $(".carrerbox #four .leida").animate({"opacity": "0"},50)

        $(" #four .male").animate({"background-position-x":"50px"},500)
        $(".carrerbox #four .name").animate({"margin-top":"0px","opacity":"1"},200)
        $(".carrerbox #four .dingwei").delay(600).animate({"margin-top":"50px","opacity": "1"},200)
        $(".carrerbox #four .detail_btn").delay(600).animate({"margin-top":"50px","opacity": "1"},200)
        $(".carrerbox #four .leida").delay(800).animate({"opacity": "1"},200)
    //},function(){

    });

    //#five/////////////////////////////////
    $(".carrerbox .five").mouseover(function(){

        $("#five .male").animate({"background-position-x":"500px"},50);
        $(".carrerbox #five .name").animate({"margin-top":"30px","opacity":"0"},50);
        $(".carrerbox  #five .dingwei").animate({"margin-top":"120px","opacity": "0"},50);
        $(".carrerbox #five .detail_btn").animate({"margin-top":"120px","opacity": "0"},50)
        $(".carrerbox #five .leida").animate({"opacity": "0"},50)

        $(" #five .male").animate({"background-position-x":"50px"},500)
        $(".carrerbox #five .name").animate({"margin-top":"0px","opacity":"1"},200)
        $(".carrerbox #five .dingwei").delay(600).animate({"margin-top":"50px","opacity": "1"},200)
        $(".carrerbox #five .detail_btn").delay(600).animate({"margin-top":"50px","opacity": "1"},200)
        $(".carrerbox #five .leida").delay(800).animate({"opacity": "1"},200)
    //},function(){

    });


        //#six/////////////////////////////////
    $(".carrerbox .six").mouseover(function(){

        $("#six .male").animate({"background-position-x":"500px"},50);
        $(".carrerbox #six .name").animate({"margin-top":"30px","opacity":"0"},50);
        $(".carrerbox  #six .dingwei").animate({"margin-top":"120px","opacity": "0"},50);
        $(".carrerbox #six .detail_btn").animate({"margin-top":"120px","opacity": "0"},50)
        $(".carrerbox #six .leida").animate({"opacity": "0"},50)

        $(" #six .male").animate({"background-position-x":"50px"},500)
        $(".carrerbox #six .name").animate({"margin-top":"0px","opacity":"1"},200)
        $(".carrerbox #six .dingwei").delay(600).animate({"margin-top":"50px","opacity": "1"},200)
        $(".carrerbox #six .detail_btn").delay(600).animate({"margin-top":"50px","opacity": "1"},200)
        $(".carrerbox #six .leida").delay(800).animate({"opacity": "1"},200)
    //},function(){

    });

    //#seven/////////////////////////////////

    $(".carrerbox .seven").mouseover(function(){

        $("#seven .male").animate({"background-position-x":"500px"},50);
        $(".carrerbox #seven .name").animate({"margin-top":"30px","opacity":"0"},50);
        $(".carrerbox  #seven .dingwei").animate({"margin-top":"120px","opacity": "0"},50);
        $(".carrerbox #seven .detail_btn").animate({"margin-top":"120px","opacity": "0"},50)
        $(".carrerbox #seven .leida").animate({"opacity": "0"},50)

        $(" #seven .male").animate({"background-position-x":"50px"},500)
        $(".carrerbox #seven .name").animate({"margin-top":"0px","opacity":"1"},200)
        $(".carrerbox #seven .dingwei").delay(600).animate({"margin-top":"50px","opacity": "1"},200)
        $(".carrerbox #seven .detail_btn").delay(600).animate({"margin-top":"50px","opacity": "1"},200)
        $(".carrerbox #seven .leida").delay(800).animate({"opacity": "1"},200)
    //},function(){

    });

    //#eight/////////////////////////////////
    $(".carrerbox .eight").mouseover(function(){

        $("#eight .male").animate({"background-position-x":"500px"},50);
        $(".carrerbox #eight .name").animate({"margin-top":"30px","opacity":"0"},50);
        $(".carrerbox  #eight .dingwei").animate({"margin-top":"120px","opacity": "0"},50);
        $(".carrerbox #eight .detail_btn").animate({"margin-top":"120px","opacity": "0"},50)
        $(".carrerbox #eight .leida").animate({"opacity": "0"},50)

        $(" #eight .male").animate({"background-position-x":"-160px"},300)
        $(".carrerbox #eight .name").animate({"margin-top":"0px","opacity":"1"},200)
        $(".carrerbox #eight .dingwei").delay(600).animate({"margin-top":"50px","opacity": "1"},200)
        $(".carrerbox #eight .detail_btn").delay(600).animate({"margin-top":"50px","opacity": "1"},200)
        $(".carrerbox #eight .leida").delay(800).animate({"opacity": "1"},200)
    //},function(){

    });


    //#nine/////////////////////////////////
    $(".carrerbox .nine").mouseover(function(){

        $("#nine .male").animate({"background-position-x":"500px"},50);
        $(".carrerbox #nine .name").animate({"margin-top":"30px","opacity":"0"},50);
        $(".carrerbox  #nine .dingwei").animate({"margin-top":"120px","opacity": "0"},50);
        $(".carrerbox #nine .detail_btn").animate({"margin-top":"120px","opacity": "0"},50)
        $(".carrerbox #nine .leida").animate({"opacity": "0"},50)

        $(" #nine .male").animate({"background-position-x":"20px"},500)
        $(".carrerbox #nine .name").animate({"margin-top":"0px","opacity":"1"},200)
        $(".carrerbox #nine .dingwei").delay(600).animate({"margin-top":"50px","opacity": "1"},200)
        $(".carrerbox #nine .detail_btn").delay(600).animate({"margin-top":"50px","opacity": "1"},200)
        $(".carrerbox #nine .leida").delay(800).animate({"opacity": "1"},50)
    //},function(){

    });


    //#ten/////////////////////////////////
    $(".carrerbox .ten").mouseover(function(){

        $("#ten .male").animate({"background-position-x":"500px"},50);
        $(".carrerbox #ten .name").animate({"margin-top":"30px","opacity":"0"},50);
        $(".carrerbox  #ten .dingwei").animate({"margin-top":"120px","opacity": "0"},50);
        $(".carrerbox #ten .detail_btn").animate({"margin-top":"120px","opacity": "0"},50)
        $(".carrerbox #ten .leida").animate({"opacity": "0"},50)


       $(" #ten .male").animate({"background-position-x":"20px"},500)
      $(".carrerbox #ten .name").animate({"margin-top":"0px","opacity":"1"},200)
       $(".carrerbox #ten .dingwei").delay(600).animate({"margin-top":"60px","opacity": "1"},200)
       $(".carrerbox #ten .detail_btn").delay(600).animate({"margin-top":"60px","opacity": "1"},200)
       $(".carrerbox #ten .leida").delay(800).animate({"opacity": "1"},200)
    //},function(){

    });

    //f3 tab页？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？？

    $(".tab>ul>li").each(function(index){
        //console.log($(".tab>ul>li"))
        $(this).mouseover(function(){
            //console.log(index)
            //console.log($(this))

          $(".tab>ul>li").removeClass("active").eq(index).addClass("active")
          //console.log(index)
           $(".tab .newsbox").animate({"left":-320*index+"px"},300)
            //console.log(index)
            //console.log($(".tab .newsbox"))
        });
    });

///video tab 页/////////////////////////////////////

    $(".videobox-hd li").each(function (index) {
        $(this).click(function () {
            //console.log(this)
            $(".videobox-hd li").removeClass("light").eq(index).addClass("light");
           // console.log($(".video .media").eq(index));
           $(".video .media").css({"display":"none"}).eq(index).css({"display":"block"});
            $(".videobox-desc span").html($(".videobox-hd li").eq(index).html())
            //console.log($(".videobox-hd li").eq(index).html());
            //console.log(index)
        });
    });

////手风琴//////////////////////////////////////
    $(".accordion>ul> li ").click(function(){
        $(this).stop().animate({"width":"500px"},300).siblings().stop().animate({"width":"100px"},300);

    });


    //侧边栏////////////////
    $(".list2 li").each(function (index) {
        $(this).hover(function(){
            $(".list2 li i:not(.new)").eq(index).stop().animate({"margin-top":"0"},300)
            $(".list2 li span").eq(index).delay(100).stop().animate({"margin-top":"-10px"},300)
        },function(){
            $(".list2 li i:not(.new)").eq(index).animate({"margin-top":"10px"},300)
            $(".list2 li span").eq(index).delay(100).stop().animate({"margin-top":"0px"},300)
        });
    });

    //侧边栏二维码
    $(".slider .sliderbox .tittle").each(function (index) {
       $(this).mouseover(function () {
           $(".slider .code").css({"display":"none"}).eq(index).css({"display":"block"});
       });
    });
    //sliderTop 返回顶部
    $(".sliderTop").click(function () {
        $('body').animate({ scrollTop: 0 }, 600);
    })

    //侧边栏收起与展开
    $(".sliderBtn").click(function () {
        if($(".slider").width()==150){
            $(".slider ").animate({"width":0},300);
            $(".slider  .sliderBtn").css({"background":"#e7cf8e","color":"#ae844f"});
            $(".slider .sliderBtn>span").html("展开");
            $(".slider .sliderBtn>i").html(" &lt;");
        }
        if($(".slider").width()==0){
            $(".slider").animate({"width":"150px"},300);
            $(".slider .sliderBtn>span").html(" 收起");
            $(".slider  .sliderBtn").css({"background":"#e7cf8e","color":"#fff"});
            //alert(33),
            $(".slider .sliderBtn> i").html("&gt;");
        }
    });

        //sessionStorage.getItem("username1");
        //console.log($(".username1").val());
         $(".loginReg").html("注册  登陆");

    if(sessionStorage.getItem("username1")){
        $(".memberusername").html( sessionStorage.getItem("username1"));
        $(".loginReg").html("注销");
        //alert(3333);

    }else{
        $(".memberusername").html( sessionStorage.getItem("username5"));
        $(".loginReg").html("注销");
        //alert(4444);

    }
      // $(".memberusername").html( sessionStorage.getItem("username"));

});
