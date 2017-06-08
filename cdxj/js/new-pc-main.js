$(document).ready(function(){
    var img=new Image();
    img.src=$(".banner_link_item img").eq(0).attr('src');
    img.onload=function(){
        setHeight();
    };
    function setHeight(){
        var clientWidth=document.documentElement.clientWidth;
        var imgHeight=(clientWidth*img.height)/img.width;
        $(".main_image").height(imgHeight);
        $(".banner").height(imgHeight+50);
    }
    $(window).resize(function(){
        setHeight();
    });
    /*轮播 js*/
    $(".banner").hover(function(){
        $(".pre_banner_btn,.next_banner_btn").fadeIn()
    },function(){
        $(".pre_banner_btn,.next_banner_btn").fadeOut()
    });
    $dragBln = false;
    $(".main_image").touchSlider({
        flexible : true,
        speed : 200,
        btn_prev : $(".next_banner_btn"),
        btn_next : $(".pre_banner_btn"),
        paging : $(".banner_dot .dot_item"),
        counter : function (e){
            $(".banner_dot .dot_item").removeClass("dot_active").eq(e.current-1).addClass("dot_active");
        }
    });
    $(".main_image").bind("mousedown", function() {$dragBln = false;});
    $(".main_image").bind("dragstart", function() {$dragBln = true;});
    $(".main_image a").click(function(){
        if($dragBln) {return false;}
    });
    timer = setInterval(function(){
        $(".pre_banner_btn").click();
    }, 5000);
    $(".main_visual").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(function(){
            $(".pre_banner_btn").click();
        },5000);
    });
    /*轮播 js end*/
    /*展会动态 hover js*/
    function appendImg(obj){
        $(".zh_list_img img").attr({'src':obj.attr('data-src'),'alt':obj.attr('data-alt')});
    }
    appendImg($(".zh_pro_item .zh_list_item").eq(0));
    $(".zh_pro_item .zh_list_item").hover(function(){
       appendImg($(this));
    },function(){});
    /*-列表的样式更改-*/
    $(".zh_img_list").eq(2).css('margin-right',0);
    $(".zh_img_list").last().removeClass('zh_img_small').addClass('zh_img_big').css('margin-right',0);
    $(".zh_img_list").eq(3).removeClass('zh_img_small').addClass('zh_img_big');
    /*视频切换 js*/
    function appendVideo(obj){
        $(".expo_video_pro video").attr({'poster':obj.attr('data-poster')});
        $(".expo_video_pro source").attr({'src':obj.attr('data-src')});
        $(".link_index").attr('data-link',obj.attr('data-src'));
        $(".link_index img").attr('src',obj.attr('data-poster'));
    }
    appendVideo($(".expo_video_nav span").eq(0));
    $(".expo_video_nav").on('click','span',function(){
        var index= $(this).index();
        $(".expo_video_active").css('left',index*193);
        appendVideo($(this));
    });
    /*切换新闻列表*/
    $(".expo_sec_pro .expo_sec_list").eq(0).css('display','block');
    $(".expo_sec_nav").on('click','span',function(){
        var index=$(this).index();
        $('.expo_sec_nav span').removeClass('expo_sec_active').eq(index).addClass('expo_sec_active');
        $(".expo_sec_pro .expo_sec_list").hide().eq(index).css('display','block');
    });
    /*品牌推荐 轮播js*/
    var tjWidth=$(".pp_tj_show_pro .pp_tj_show_list").length*$(".pp_tj_show_list").width();
    $(".pp_tj_show_pro").width(tjWidth);
    $("#marquee").kxbdMarquee();
    /*--*/
    $(".link_expo_item_default").eq(1).css('margin-right',0);
    $(".link_expo_item_default").eq(3).css('margin-right',0);
    /*---视频页---*/
    $(".video_news_list_li").each(function(){
        var index=$(this).index();
        if(index%3==2){
            $(".video_news_list_li").eq(index).css('margin-right',0);
        }
    });
    jQuery('.link').click(function () {
        var gethref = jQuery(this).attr('data-hlink');
        console.log(gethref);
        window.open(gethref,"_blank","width=400,height=200");
    });
    jQuery('.link_index').click(function () {
        var gethref = jQuery(this).attr('data-link');
        console.log(gethref);
        window.open(gethref,"_blank","width=400,height=200");
    });

});


