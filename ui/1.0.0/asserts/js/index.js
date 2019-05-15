/*! index page by wade 2019-5-15 14:03:54 */
$(function(){
    //顶部新闻滚动
    setInterval(function () {
        var args = "#j-tipsScroll";
        $(args).find("ul:first").animate({
                marginTop: "-22px"
            },
            500,
            function() {
                $(this).css({
                    marginTop: "0px"
                }).find("li:first").appendTo(this);
            });
    }, 4000)


    //左侧小导航栏
    $(".j-banner .container .nav .list li").hover(function(){
        $(this).addClass("actived");
        $(this).find(".block-item-detail").show();
    },function(){
        $(this).removeClass("actived");
        $(this).find(".block-item-detail").fadeOut(250);
    })
    //中间轮播图
    var bannerSwiper = new Swiper ('.swiper-container', {
        centeredSlides: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true, // 循环模式选项
    })


})
