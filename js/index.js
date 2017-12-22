$(function(){
	var $window           = $(window),
	win_height_padded = $window.height() * 1.1;

	$window.on('scroll', revealOnScroll);

	function revealOnScroll() {
	    var scrolled = $window.scrollTop();
	     $(".revealOnScroll:not(.animated)").each(function () {
	       var $this     = $(this),
	           offsetTop = $this.offset().top;
	       if (scrolled + win_height_padded - 150 > offsetTop) {
	         if ($this.data('timeout')) {
	           window.setTimeout(function(){
	             $this.addClass('animated ' + $this.data('animation'));
	           }, parseInt($this.data('timeout'),10));
	         } else {
	           $this.addClass('animated ' + $this.data('animation'));
	         }
	       }
		});
		if(scrolled>450){$(".sidebar").addClass("active");}else{$(".sidebar").removeClass("active");}
		scrolled = scrolled + 20;
		if(scrolled>$("#kcqd").offset().top && scrolled<$("#core-4").offset().top){
			$('.bd-main .sidebar.left ul > li').eq(1).addClass("active").siblings().removeClass('active');
		}else if(scrolled>$("#cgal").offset().top && scrolled<$("#swzl").offset().top){
			$('.bd-main .sidebar.left ul > li').eq(4).addClass("active").siblings().removeClass('active');
		}else if(scrolled>$("#wlkt").offset().top && scrolled<$("#xxff").offset().top){
			$('.bd-main .sidebar.left ul > li').eq(7).addClass("active").siblings().removeClass('active');
		}
	}
	$('.bdpage .navbar-nav > li > a').each(function(i){
		$(this).click(function(){
			if(i == 1){
				$("html,body").animate({scrollTop:$("#kcqd").offset().top},500);
			}else if(i == 2){
				$("html,body").animate({scrollTop:$("#xypj").offset().top},500);
			}else if(i == 3){
				$("html,body").animate({scrollTop:$("#xxff").offset().top},500);
			}else if(i == 4){
				$("html,body").animate({scrollTop:$("#buy").offset().top},500);
			}
		});
	});
	$('.bd-main .sidebar.left ul > li > a').each(function(i){
		$(this).click(function(){
			if(i == 1){
				$("html,body").animate({scrollTop:$("#kcqd").offset().top},500);
			}else if(i == 2){
				$("html,body").animate({scrollTop:$("#core-4").offset().top},500);
			}else if(i == 3){
				$("html,body").animate({scrollTop:$("#mszr").offset().top},500);
			}else if(i == 4){
				$("html,body").animate({scrollTop:$("#cgal").offset().top},500);
			}else if(i == 5){
				$("html,body").animate({scrollTop:$("#swzl").offset().top},500);
			}else if(i == 6){
				$("html,body").animate({scrollTop:$("#kcst").offset().top},500);
			}else if(i == 7){
				$("html,body").animate({scrollTop:$("#wlkt").offset().top},500);
			}else if(i == 8){
				$("html,body").animate({scrollTop:$("#xxff").offset().top},500);
			}else if(i == 9){
				$("html,body").animate({scrollTop:$("#xypj").offset().top},500);
			}else if(i == 10){
				$("html,body").animate({scrollTop:$("#tyk").offset().top},500);
			}else if(i == 11){
				$("html,body").animate({scrollTop:$("#ldcn").offset().top},500);
			}else if(i == 12){
				$("html,body").animate({scrollTop:$("#buy").offset().top},500);
			}
		});
	});
	$("#evCarousel").carousel({pause: true,interval: false});
	if ($('.bd-main .ev-box .carousel-indicators').length>0){
		$('.bd-main .ev-box .carousel-indicators li').click(function(){
			$('.ev-box .carousel-inner > .item').eq($(this).index()).addClass("in").siblings().removeClass('in');
			get_taobao_pingjia(parseInt($(this).attr("data-slide-to")) + 1);
		});
		$('.bd-main .ev-box .carousel-indicators li').eq(0).click();

		$('.bd-main .ev-box .evpage').click(function(){
			if($(this).hasClass("left")){
				$('.ev-box .carousel-inner > .item').eq($('.bd-main .ev-box .carousel-indicators li').filter(".active").index()-1).addClass("in").siblings().removeClass('in');
				get_taobao_pingjia(parseInt($('.bd-main .ev-box .carousel-indicators li').filter(".active").attr("data-slide-to")));
			}else{
				$('.ev-box .carousel-inner > .item').eq($('.bd-main .ev-box .carousel-indicators li').filter(".active").index()+1).addClass("in").siblings().removeClass('in');
				get_taobao_pingjia(parseInt($('.bd-main .ev-box .carousel-indicators li').filter(".active").attr("data-slide-to")) + 2);
			}
		});
	}
	$(".bd-main .mail-box .btn").click(function(){
		ajax_submit_email();
	});

	var speeds=80;
	$('.roll-2').html($(this).find('.roll').html());
	function Marquee1(){
		if($('.roll-2').height()-$('.roll-box').scrollTop()<=0)
			$('.roll-box').scrollTop($('.roll-box').scrollTop()-$('.roll').height());
		else{
			$('.roll-box').scrollTop($('.roll-box').scrollTop()+1);
		}
	}
	var MyMar1=setInterval(Marquee1,speeds);
	$('.data-bg .roll-box').hover(function(){
		clearInterval(MyMar1);
	},function(){
		MyMar1=setInterval(Marquee1,speeds);
	});

	var thScreen = $(".bd-main .teacher-box .screen > li");
	var thLists = $(".bd-main .teacher-box .right .th-lists");
	thScreen.each(function(i){
		$(this).hover(function(){
			$(this).addClass("active").siblings().removeClass('active');
			thLists.eq(i).show().addClass("active").siblings().removeClass('active');
		});
	});
	$('.bd-main .study-box .tab-toggle > li > a').hover(function (e) {
	  e.preventDefault();
	  $(this).tab('show');
	});


	$(".os_x").on("click",function(){
		$(".box_os").hide(2000);
	});



$(".ico_gt").click(//定义返回顶部点击向上滚动的动画
function(){$('html,body').animate({scrollTop:0},1000);
});


 $('#myCarousel').carousel({interval:3000});//每隔5秒自动轮播


// var qq_list = new Array('1198415686', '201290556');
//  qq_i = Math.floor(Math.random()*qq_list.length);
// href = "tencent://message/?uin="+qq_list[qq_i]+"&Site=&menu=yes";

// $(".jumpQQ").click(
// function(){$('.jumpQQ').attr('href', "tencent://message/?uin="+href+"&Site=&menu=yes");
// });




});

function get_taobao_pingjia(page){
	return false;

}
function ajax_submit_email(){
	return false;
}

function ajax_submit_qq_list(fill_email){
	return false;
}

function get_kefu_qq(){
	return false;

}