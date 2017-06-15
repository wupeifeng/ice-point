$(function(){
	//底部滚动开始
	$(document).on('scroll',function(){
		if($(document).scrollTop() > ($(document).height()-$(window).height())*0.7){
			$('.footer-bottom').css("bottom","0");
		}else{
			$('.footer-bottom').css("bottom","-278px");
		}
	});
	//底部滚动结束
	
	//背景滚动开始
	$(document).on('mousemove',function(e){
		var w = $(document).width()/2;
		var k = (w-e.clientX)/3.3;
		$(".banner").css("background-position-x",k+"px");
	});
	//背景滚动结束
});
