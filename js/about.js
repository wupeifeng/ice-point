window.onload= function () {
    var oBtn=document.getElementsByClassName("btn");
    var oBtn1=document.getElementsByClassName("btn1");
    var oDiv1=document.getElementsByClassName("text1");
    var oDiv2=document.getElementsByClassName("text2");
    
    for(var i=0;i<oBtn.length;i++){
        oBtn[i].index=i;
        oBtn[i].onclick= function () {
            for(var i=0;i<oBtn.length;i++){
                oDiv1[this.index].style.display = 'block';
                oDiv2[this.index].style.display = 'none';
                oBtn[this.index].style.background="url(../img/member_tool.png) 0px -40px"
                oBtn1[this.index].style.background="url(../img/member_tool.png) -48px 0px"
            }
        }
    }
    
    for(var i=0;i<oBtn1.length;i++){
        oBtn1[i].index=i;
        oBtn1[i].onclick= function () {
            for(var i=0;i<oBtn1.length;i++){
                oDiv1[this.index].style.display = 'none';
                oDiv2[this.index].style.display = 'block';
                oBtn[this.index].style.background="url(../img/member_tool.png) 0px 0px"
                oBtn1[this.index].style.background="url(../img/member_tool.png) -48px -40px"
            }
        }
    }
}