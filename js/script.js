var el = document.getElementById('btn-play');
var playing = false; // текущее состояние плеера

var player = new Audio('js/sound.mp3');
player.preload = "auto";
player.addEventListener('ended', function(){ // слушаем окончание трека
  el.innerText = "Done";
  playing = false;
});
el.addEventListener('click', playPause); // слушаем нажатие на кнопку

function playPause() {
  if( playing) {
    player.pause();

  } else {
    player.play();
  }
  playing = !playing;
}
var target1 = $('#first');
var targetPos1 = target1.offset().top;
var winHeight1 = $(window).height();
var scrollToElem1 = targetPos1 - 30;

$(window).scroll(function () {
    var winScrollTop1 = $(this).scrollTop();
    if (winScrollTop1 > scrollToElem1) {
        document.getElementById("imgan1").className  = "first active";
        document.getElementById("imgan2").className  = "second noactive";
        document.getElementById("imgan3").className = "third noactive";
        document.getElementById("bg").className = "bg one";

    }
});      
var target = $('#second');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - 30;

$(window).scroll(function () {
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollToElem) {
        document.getElementById("imgan1").className  = "first noactive";
        document.getElementById("imgan2").className  = "second active";
        document.getElementById("imgan3").className = "third noactive";
        document.getElementById("bg").className = "bg two";

    } 
});      

var target3 = $('#third');
var targetPos3 = target3.offset().top;
var winHeight3 = $(window).height();
var scrollToElem3 = targetPos3 - 30;

$(window).scroll(function () {
    var winScrollTop3 = $(this).scrollTop();
    if (winScrollTop3 > scrollToElem3) {
        document.getElementById("imgan1").className = "first noactive";
        document.getElementById("imgan2").className = "second noactive";
        document.getElementById("imgan3").className = "third active";
        document.getElementById("bg").className = "bg three";

    }
});      
var i = 1;
function open1() {
    i++;
 
    i % 2 == 0 ? document.getElementById("links1").className = "links-container" : document.getElementById("links1").className = "links-container hidden";
    i % 2 == 0 ? document.getElementById("frg16").className = " " : document.getElementById("frg16").className = "hidden";
};
$(function() {
  window.addEventListener("scroll", function(event){

    var top = this.pageYOffset;

    var layers = $(".site");
    var speed, yPos;
    layers.each(function() {
      speed = $(this).attr('data-speed');
        var yPos = -((top - $('.iPAD').offset().top + 500) * speed / 100);
      $(this).attr('style','transform: translate3d(0px, ' + yPos + 'px, 0px)');
    });
  });
});
$(function () {
    window.addEventListener("scroll", function (event) {

        var top1 = this.pageYOffset;

        var layers1 = $(".module");
        var speed1, yPos1;
        layers1.each(function () {     
            var yPos1 = ((top1 - $('.news').offset().top) / 10);
            if (yPos1 > 0 && yPos1 < 70) {
                $(this).attr('style', 'transform: rotateX(' + (70 - yPos1) + 'deg)');
            }
            if (yPos1 < 0) {
                $(this).attr('style', 'transform: rotateX(' + 70 + 'deg)');
            }
            if (yPos1 > 70) {
                $(this).attr('style', 'transform: rotateX(' + 0 + 'deg)');
            }
            //$(this).attr('style', 'transform: translate3d(0px, ' + yPos1 + 'px, 0px)');
        });
    });
});

var sticky = document.querySelector('.pesonality');
var bg_tg = document.querySelector('.tg_bg');
var bg_img = document.querySelector('.tg_img');
var text_area = document.querySelector('#textarea');
var fir = "<span style='border-radius: 10px; color:rgb(231,182,114); border: 1px solid rgb(231,182,114); padding: 1.5vh 4vh 1.5vh 4vh;'>1</span><br> <br>  <span  id='first' class='frg12'>Music destribution</span> <br /><br /> You upload your music and it goes into the shop immediately. Unlike distributors in web2, you don't have to wait a month for approval to download. ";
var sec = "<span style='border-radius: 10px; color:rgb(231,182,114); border: 1px solid rgb(231,182,114); padding: 1.5vh 4vh 1.5vh 4vh;'>2</span><br> <br>  <span class='frg12'>Buying/Selling music</span> <br /><br /> You upload your music and it goes into the shop immediately. Unlike distributors in web2, you don't have to wait a month for approval to download. ";
var thr = "<span style='border-radius: 10px; color:rgb(231,182,114); border: 1px solid rgb(231,182,114); padding: 1.5vh 4vh 1.5vh 4vh;'>3</span><br> <br> <span class='frg12'>Music licensing</span> <br /><br /> In our marketplace you can license your track and make it available for rent.Thanks to Blockchain and NFT technology, the musician will be granted the status of a real author, which simplifies the licensing system. <br><br> Thanks to the licensing system, we make it easier to rent music for businesses:";
var origOffsetY = sticky.offsetTop;
var phone = document.querySelector('.phone');
var site = document.querySelector('.site');
console.log(window.screen.height)
function onScroll(e) {

    if (window.scrollY > origOffsetY && window.scrollY < origOffsetY + (document.getElementById('parallax').clientHeight - window.screen.height)) {
        sticky.classList.add('fixed123');
        }
    else {
        sticky.classList.remove('fixed123');
        }

    window.scrollY > origOffsetY + (document.getElementById('parallax').clientHeight - window.screen.height)  ? sticky.classList.add('fouly') :
        sticky.classList.remove('fouly');
    window.scrollY < origOffsetY + (document.getElementById('parallax').clientHeight / 3) ? bg_tg.classList.add('fir') :
        bg_tg.classList.remove('fir');
    window.scrollY < origOffsetY + (document.getElementById('parallax').clientHeight / 3) ? bg_img.classList.add('fir_img') :
        bg_img.classList.remove('fir_img');
    window.scrollY > origOffsetY + (document.getElementById('parallax').clientHeight/3) && window.scrollY < origOffsetY + (2*document.getElementById('parallax').clientHeight/3) ? bg_tg.classList.add('sec') :
        bg_tg.classList.remove('sec');
    window.scrollY > origOffsetY + (document.getElementById('parallax').clientHeight/3) && window.scrollY < origOffsetY + (2*document.getElementById('parallax').clientHeight/3) ? bg_img.classList.add('sec_img') :
        bg_img.classList.remove('sec_img');
    window.scrollY > origOffsetY + (2 * document.getElementById('parallax').clientHeight / 3) ? bg_tg.classList.add('thr') :
        bg_tg.classList.remove('thr');
    window.scrollY > origOffsetY + (2 * document.getElementById('parallax').clientHeight / 3)  ? bg_img.classList.add('thr_img') :
        bg_img.classList.remove('thr_img');
    bg_tg.classList.contains('fir') ? text_area.innerHTML = fir : bg_tg.classList.contains('sec') ? text_area.innerHTML = sec : text_area.innerHTML = thr;
    bg_tg.classList.contains('fir') ? text_area.setAttribute("style", "margin-top:-35vh") : bg_tg.classList.contains('sec') ? text_area.setAttribute("style", "margin-top:-35vh") : text_area.setAttribute("style", "margin-top:-50vh");

    $(window).width() < 600 ? phone.setAttribute("src", "img/Frame_95440.png") : phone.setAttribute("src", "img/iPad Pro 11.png");
    $(window).width() < 600 ? site.setAttribute("src", "img/154.png") : site.setAttribute("src", "img/market-tablet-full.png");
}

document.addEventListener('scroll', onScroll);

(function () {
    var $left_arrow, $right_arrow, animate_next, animate_previous;

    $right_arrow = $('#right-arrow');

    $left_arrow = $('#left-arrow');

    $right_arrow.click(function (e) {
        e.preventDefault();
        $('.slide-holder').velocity('finish');
        animate_next('#slide-right');
        animate_next('#slide-center', 175);
        return animate_next('#slide-left', 350);
    });

    $left_arrow.click(function (e) {
        e.preventDefault();
        $('.slide-holder').velocity('finish');
        animate_previous('#slide-left');
        animate_previous('#slide-center', 175);
        return animate_previous('#slide-right', 350);
    });

    animate_next = function (selector, delay = 0, cb = null) {
        return setTimeout(function () {
            var $bg_curr, $bg_next, $bg_prev, $el;
            $el = $(`${selector} .slide-holder`);
            $bg_prev = $el.find('.bg-previous');
            $bg_curr = $el.find('.bg-current');
            $bg_next = $el.find('.bg-next');
            $.Velocity.hook($el, "translateX", `-${100 / 3}%`);
            return $.Velocity.animate($el, {
                translateX: `-${200 / 3}%`,
                duration: 350
            }).then(function (elms) {
                var next_bg_image;
                next_bg_image = $.Velocity.hook($bg_prev, "background-image");
                $.Velocity.hook($bg_prev, "background-image", $.Velocity.hook($bg_curr, "background-image"));
                $.Velocity.hook($bg_curr, "background-image", $.Velocity.hook($bg_next, "background-image"));
                $.Velocity.hook($el, "translateX", `-${100 / 3}%`);
                $.Velocity.hook($bg_next, "background-image", next_bg_image);
                if (typeof cb === 'function') {
                    return cb(elms);
                }
            });
        }, delay);
    };

    animate_previous = function (selector, delay, cb) {
        return setTimeout(function () {
            var $bg_curr, $bg_next, $bg_prev, $el;
            $el = $(`${selector} .slide-holder`);
            $bg_prev = $el.find('.bg-previous');
            $bg_curr = $el.find('.bg-current');
            $bg_next = $el.find('.bg-next');
            $.Velocity.hook($el, "translateX", `-${100 / 3}%`);
            return $.Velocity.animate($el, {
                translateX: "0",
                duration: 350
            }).then(function (elms) {
                var prev_bg_image;
                prev_bg_image = $.Velocity.hook($bg_next, "background-image");
                $.Velocity.hook($bg_next, "background-image", $.Velocity.hook($bg_curr, "background-image"));
                $.Velocity.hook($bg_curr, "background-image", $.Velocity.hook($bg_prev, "background-image"));
                $.Velocity.hook($el, "translateX", `-${100 / 3}%`);
                $.Velocity.hook($bg_prev, "background-image", prev_bg_image);
                if (typeof cb === 'function') {
                    return cb(elms);
                }
            });
        }, delay);
    };

}).call(this);

$(function () {
    var $speed = 200;
    var $class = 'opened';
    var $class_open = '.faq-answer';

    $(document).ready(function () {
        $('.faq-question').on('click', function () {
            $ul = $(this).closest('ul');
            $answer = $(this).closest('li').find($class_open);

            if (!$(this).closest('li').hasClass($class)) {

                $ul.find('li').each(function () {
                    if ($(this).hasClass($class))
                        $(this).removeClass($class).find($class_open).slideUp($speed);
                });
            }

            $answer
                .slideToggle($speed)
                .closest('li')
                .toggleClass($class);
        });
    });
});
function openjl() {
    document.querySelector('.faq-questions').style.color = "#E7B672";
}
$(document).ready(function () {
    $('a[href^="#"], *[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('href') ? $(this).attr('href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top }, t);
    });
});
console.log(window.screen.width - $('.mars').width());
console.log($('.mars').width());
document.querySelector('.about-marketplace').setAttribute("style", "height:" + $('.img-marketplace ').height() * 1.5 + "px");
document.querySelector('.mars').setAttribute("style", "margin-left: " + (window.screen.width - $('.mars').width()) + "px");
