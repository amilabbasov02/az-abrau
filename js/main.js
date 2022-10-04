$('.product-slider').owlCarousel({
    loop:true,
    center: true,
    margin:10,
    nav:true,
    navText: ["<img src='../img/left.svg'>","<img src='../img/right.svg'>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$('.news-slider').owlCarousel({
    loop:true,
    center: true,
    margin:50,
    nav:true,
    navText: ["<img src='../img/news-left.svg'> geri","irəli<img src='../img/news-right.svg'>"],
    responsive:{
        0:{
            items:1
        },
        1000:{
            items:3
        }
    }
})
$(".filter-1-first").click(function(){
    $(this).parent().toggleClass('active')
});
$(".filter-2-first").click(function(){
    $(this).parent().toggleClass('active')
});
$('.contact-number').mask('(000) 000 00 00');
$(".text-input").keypress(function (e) {
    var s = new RegExp("^[a-zA-Z_]+$"),
        a = String.fromCharCode(e.charCode ? e.charCode : e.which);
    return !!s.test(a) || (e.preventDefault(), !1);
})
$('.loc-btn').click(function(){
    let child = $(this).parent().data('id');
    $(".maps-iframes iframe").css("display","none");
    $(`.maps-iframes iframe:nth-child(${child})`).css("display","block")
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    // console.log(scroll)
    if (scroll >= 0) {
        var $i = $('#i');
        var $window = $(window);
        var offset = 50;
        var minHeight = 10;
        $window.on('scroll resize', grow);
        function grow() {
            var scrollPercentage = 100 * $window.scrollTop() / ($('html').height() - $window.height());
            var maxHeight = $(window).height() - (offset * 3) - minHeight;
            var newHeight = ((maxHeight / 50) * scrollPercentage) + minHeight;
            $i.css('height', newHeight);
        }
    }
    if (scroll >= 1200) {
        var $i = $('#i2');
        var $window = $(window);
        var offset = 50;
        var minHeight = 10;
        $window.on('scroll resize', grow);
        function grow() {
            var scrollPercentage = 100 * $window.scrollTop() / ($('html').height() - $window.height());
            var maxHeight = $(window).height() - (offset * 3) - minHeight;
            var newHeight = ((maxHeight / 50) * scrollPercentage) + minHeight;
            $i.css('width', newHeight);
        }
    }
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 600) {
        $(".about-page-block:first-child .about-page-text").addClass("active");
    }else{
        $(".about-page-block:first-child .about-page-text").removeClass("active");
    }
    if (scroll >= 1500) {
        $(".about-page-block:nth-child(2) .about-page-text").addClass("active");
    }else{
        $(".about-page-block:nth-child(2) .about-page-text").removeClass("active");
    }
    if (scroll >= 2200) {
        $(".about-page-block:nth-child(3) .about-page-text").addClass("active");
    }else{
        $(".about-page-block:nth-child(3) .about-page-text").removeClass("active");
    }
});
$(".down-img").click(function(event) {
    $("html, body").animate({ scrollTop: "+=650px" }, 800);
});