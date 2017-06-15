window.onload = function () {
    var coLabel = document.getElementsByTagName('label');
    var coForm = document.getElementsByClassName('co-form');
    var cofSpan = document.getElementsByClassName('contact-f-span');

    function $(id) {
        return document.getElementById(id);
    }

	//Edit
	$('coEdit').addEventListener('click',function () {
        alert('链接出错！');
    });

	//xuBtn
	$('xuBtn').addEventListener('click',function () {
        alert('链接出错！');
    });
   
    //QQ
    $('coBMbox1').addEventListener('click',function () {
        alert('链接出错！');
    });

    // 表单事件
    for(var j=0; j<5; j++){
        coForm[j].index = j;
        cofSpan[j].index  =j;
        cofSpan[j].addEventListener('click',function () {
            this.style.display = 'none';
            coForm[this.index].focus();
            coLabel[this.index].childNodes[1].style.display = 'inline';
        });
        coForm[j].addEventListener('click',function () {
            cofSpan[this.index].style.display = 'none';
            coLabel[this.index].childNodes[1].style.display = 'inline';
        });
        coForm[j].onblur = function () {
            coLabel[this.index].childNodes[1].style.display = 'none';
            if(this.value == ''){
                cofSpan[this.index].style.display = '';
            }else {
                cofSpan[this.index].style.display = 'none';
            }
        };
    }
    
    // 表单label事件
    for(var i=0; i<5; i++){
        coLabel[i].index = i;
        coLabel[i].addEventListener('click',function () {
            coLabel[this.index].childNodes[1].style.display = 'inline';
        })
    }

    // 表单提交按钮事件
    $('contactBtn').addEventListener('click',function () {
        if($('nick').value == ''){
            alert('填写您的姓名或名称');
        }else {
            alert('填写内容不完整');
        }
    })
}
