window.onload=function(){
	/*背景图的移动start*/
	var bgBannerbig=document.getElementsByClassName("banner-big")[0];
	var sumBg=0;
	document.onmousemove=function(event){
		var event=event||window.event;
		var xBanner=event.clientX;
		sumBg=parseFloat((document.body.clientWidth/2-xBanner)/3.5);
		bgBannerbig.style.backgroundPositionX=(sumBg)+"px";
	}
	/*背景图的移动end*/
	/*轮播图start，补充：JS控制CSS3，出现有小小的延迟问题，未解决，日后处理*/
	var bg=document.getElementById("banner-gun-ul");//获取要滚动的ul
	var bannerBtn=document.getElementById("banner-button-ul");//获取滚动button的ul
	var bannerBtnlis=bannerBtn.children;//获取所有的滚动button
	var timer1=null;
	var num1=0;
	timer1=setInterval(startBannerSlider,1000);//开启定时器
	for(var i=0;i<bannerBtnlis.length;i++){//for循环遍历所有的滚动button，给每个button一个点击事件
		bannerBtnlis[i].index=i;//设置一个当前button的索引
		bannerBtnlis[i].onclick=function(){
			clearInterval(timer1);//鼠标点击某一个button我们需要清除定时器。
			num1=this.index;//得到我们的索引然后再开启定时器
			timer1=setInterval(startBannerSlider,1000);
			bianLiSliderButton();//遍历所有的滚动button给每个初始一个背景
			this.style.backgroundPosition=this.index*(-23)+"px -23px";//将当前这个button设置成绿背景
		}
	}
	
	function bianLiSliderButton(){
		for (var i=0;i<bannerBtnlis.length;i++) {
			bannerBtnlis[i].style.backgroundPosition=i*(-23)+"px 0";
		}
	}
	
    function startBannerSlider(){
    	var x=0;
    	bianLiSliderButton();
    	if(num1<9){
    		bannerBtnlis[num1].style.backgroundPosition=num1*(-23)+"px -23px";
    		x=-1943*num1;
    		bg.style.transition="-webkit-transform 500ms linear";
            bg.style.webkitTransform="translate("+x+"px) scale(1) translateZ(0px)";
            num1++;
    	}else{
    		num1=0;
    		bannerBtnlis[num1].style.backgroundPosition="0 0";
    		bg.style.transition="-webkit-transform 500ms linear";
            bg.style.webkitTransform="translate("+(num1)+"px)";
    	}
    }
    /*轮播图end*/
    /*内容动画start*/
   	var i_1s=document.getElementsByClassName("i-1");
   	var i_2s=document.getElementsByClassName("i-2");
   	var maskingParent=document.getElementsByClassName("parent-marsking");
   	var masking=document.getElementsByClassName("masking");
  
   	for(var i=0;i<maskingParent.length;i++){
   		maskingParent[i].index=i;
   		maskingParent[i].onmouseover=function(){
	   		for(var i=0;i<maskingParent.length;i++){
	   			masking[i].style.visibility="hidden";
	   			
	   		}
	   		masking[this.index].style.visibility="visible";
	   		i_1s[this.index].style.left="60px";
	   		i_1s[this.index].style.transition="left 1s";
	   		i_1s[this.index].style.webkitTransition="left 1s";
	   		i_2s[this.index].style.right="60px";
	   		i_2s[this.index].style.transition="right 1s";
	   		i_2s[this.index].style.webkitTransition="right 1s";
   		}
   		
   		maskingParent[i].onmouseout=function(){
	   		for(var i=0;i<maskingParent.length;i++){
	   			masking[i].style.visibility="hidden";
	   		}
	   		i_1s[this.index].style.left="0";
	   		i_1s[this.index].style.transition="left 1s";
	   		i_1s[this.index].style.webkitTransition="left 1s";
	   		i_2s[this.index].style.right="0";
	   		i_2s[this.index].style.transition="right 1s";
	   		i_2s[this.index].style.webkitTransition="right 1s";
   		}
   	}
}
