window.onload = function(){
	var cases = document.getElementsByClassName("case")[0];
	
	function $(class_name,tag_name){
		return document.getElementsByClassName(class_name)[0].getElementsByTagName(tag_name);
	}
	
//	图标切换开始
	for(var i=0;i<$("center-top-t","a").length;i++){
		$("center-top-t","a")[i].index = i;
		$("center-top-t","a")[i].onclick = function(){
			for(var i=0;i<$("center-top-t","a").length;i++){
				$("center-top-t","a")[i].style.height = "65px";
				$("center-top-t","a")[i].style.backgroundPositionY = "0";
				$("tubiao-box","div")[i].style.display = "none";
			}
			this.style.height = "96px";
			this.style.backgroundPositionY = "-100px";
			$("tubiao-box","div")[this.index].style.display = "block";
			cases.style.display = "none";
			for(var j=0;j<$("color-box","div").length;j++){
				$("color-box","div")[j].style.display = "none";
			}
		}
	}
//	图标切换结束

//	颜色切换开始
	for(var j=0;j<$("center-top-b","a").length;j++){
		$("center-top-b","a")[j].index = j;
		$("center-top-b","a")[j].onclick = function(){
			for(var j=0;j<$("center-top-b","a").length;j++){
				$("color-box","div")[j].style.display = "none";
			}
			$("color-box","div")[this.index].style.display = "block";
			cases.style.display = "none";
			for(var i=0;i<$("tubiao-box","div").length;i++){
				$("center-top-t","a")[i].style.height = "65px";
				$("center-top-t","a")[i].style.backgroundPositionY = "0";
				$("tubiao-box","div")[i].style.display = "none";
			}
		}
	}
//	颜色切换结束

//	鼠标悬停开始
	for(var s=0;s<$("center-bottom","li").length;s++){
		$("center-bottom","li")[s].index = s;
		$("center-bottom","li")[s].onmouseover = function(){
			this.style.bottom = "52px";
			this.style.transition = "1s";
			this.style.WebKitTransition = "1s";
			this.style.MozTransition = "1s";
			$("center-bottom","a")[this.index].style.opacity = "1";
			$("center-bottom","a")[this.index].style.top = "63px";
			$("center-bottom","a")[this.index].style.transition = "top 1s";
			$("center-bottom","a")[this.index].style.WebKitTransition = "top 1s";
			$("center-bottom","a")[this.index].style.MozTransition = "top 1s";
		}
		
		$("center-bottom","li")[s].onmouseout = function(){
			this.style.bottom = "32px";
			this.style.transition = "1s";
			this.style.WebKitTransition = "1s";
			this.style.MozTransition = "1s";
			$("center-bottom","a")[this.index].style.opacity = "0";
			$("center-bottom","a")[this.index].style.top = "20px";
			$("center-bottom","a")[this.index].style.transition = "top 1s";
			$("center-bottom","a")[this.index].style.WebKitTransition = "top 1s";
			$("center-bottom","a")[this.index].style.MozTransition = "top 1s";
		}
	}
//	鼠标悬停结束
}
