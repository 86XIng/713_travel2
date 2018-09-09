

 
$('.hide-password').on('click', function(){
    var $this= $(this),
        $password_field = $this.prev('input');
        
        ( 'password' == $password_field.attr('type') ) ? $password_field.attr('type', 'text') : $password_field.attr('type', 'password');
        ( 'Hide' == $this.text() ) ? $this.text('Show') : $this.text('Hide');
        //focus and move cursor to the end of input field
        $password_field.putCursorAtEnd();
});



$('#login').click(function(){
    $('#user').removeClass('hidden');
    $(this).addClass('hidden');
    $('#signup').addClass('hidden');
});
$('#signup').click(function(){
    $('#user').removeClass('hidden');
    $(this).addClass('hidden');
    $('#login').addClass('hidden');
})


$('.carousel_control li:nth-child(1)').click(function(e){
    var left = $('.section_6_carousel').position().left;
    console.log(left);
    e.preventDefault();
});
$('#section_1_button').click(function(){
    // document.getElementById('section_3').scrollIntoView();
    $("html, body").animate({
                scrollTop: $('.section_3').offset().top + "px"
            }, {
                duration: 500,
                easing: "linear"
            });
    return false;
})

$(document).ready(function(){
    $('.navbar-right li').click(function(){
        $(this).addClass('active').siblings('li').removeClass('active');
    });
    countDown(10000);
})
$(document).scroll(function(){
    var articleHeight = $('.section_4').offset().top-$('.section_4').height();
    var content = $('.section_4_content')
    var top=$(document).scrollTop();
    // console.log(articleHeight);
    // console.log(top)
    if(top > 0 && top >= articleHeight){
        content.addClass('section_4_flyin');
    } else if (top > 0 && top < articleHeight){
        content.removeClass('section_4_flyin');
    }
})

function countDown(times){
        // var timer=null;
        timer=setInterval(function(){
            // var day=0,
            // hour=0,
            // minute=0,
            // second=0;//时间默认值
            // if(times > 0){
            // day = Math.floor(times / (60 * 60 * 24));
            // hour = Math.floor(times / (60 * 60)) - (day * 24);
            // minute = Math.floor(times / 60) - (day * 24 * 60) - (hour * 60);
            // second = Math.floor(times) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
            // }
            // if (day <= 9) day = '0' + day;
            // if (hour <= 9) hour = '0' + hour;
            // if (minute <= 9) minute = '0' + minute;
            // if (second <= 9) second = '0' + second;
            // //
            // $('#day').text(day);
            // $('#hour').text(hour);
            // $('#minute').text(minute);
            // $('#second').text(second);
            // // console.log(day+"天:"+hour+"小时："+minute+"分钟："+second+"秒");
            // times++;
            $('#people').text(times);
            // console.log(times);
            times++;
        },1000);
}



$(".section_8_msg").bootstrapNews({
    newsPerPage: 2,
    autoplay: true,
    pauseOnHover: true,
    navigation: false,
    direction: 'down',
    newsTickerInterval: 1500,
    onToDo: function () {
        //console.log(this);
    }
});

$(function(){
    MessagePlugin.init({
        elem: "#message",
        msgData: [{text: "信息1", id: 1, readStatus: 1},
            {text: "信息2", id: 2, readStatus: 0},
            {text: "信息3", id: 3, readStatus: 0},
            {text: "信息4", id: 4, readStatus: 0},
            {text: "信息5", id: 5, readStatus: 0},
            {text: "信息6", id: 6, readStatus: 0}],
            msgUnReadData: 99,
            msgClick: function(obj) {
                console.log(this);
            },
            allRead: function(obj) {
                this.msgData.forEach(i => {
                    // console.log(i);
                    i.readStatus=1;    
                });
            },
            getNodeHtml: function(obj, node) {
                if (obj.readStatus == 1) {
                    node.isRead = true;
                } else {
                    node.isRead = false;
                }
                var html = "<p>"+ obj.text +"</p>";

                node.html = html;

                return node;
            }
    });
    
});



$('#section_6_gallery_1').owlCarousel({
    items:1,
    autoplay:true,
    smartSpeed:1000,
    loop:true,
    
});
$('#section_6_gallery_2').owlCarousel({
    items:1,
    autoplay:true,
    smartSpeed:1000,
    loop:true,
    
});

$('#testemonial-carousel').owlCarousel({
    items:3,
    margin:0,

    loop:true,
    autoplay:true,
    smartSpeed:1000,

    // nav:false,
    // navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],

    dots:true,
    autoplayHoverPause:true,

responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        640:{
            items:1
        },
        767:{
            items:2
        },
        992:{
            items:3
        }
    }


});
