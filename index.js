mui.init({swipeBack: false
,gestureConfig: {tap:true,doubletap:true,longtap:true,hold:true,release:true}});

var 按钮_进入软件 = new 按钮("按钮_进入软件",null,null,null);
var 图片框_主页图片 = new 图片框("图片框_主页图片",null);
if(mui.os.plus){
    mui.plusReady(function() {
        主窗口_创建完毕();
        
    });
}else{
    window.onload=function(){ 
        主窗口_创建完毕();
        
    }
}

function 主窗口_创建完毕(){
	窗口操作.切换窗口("chuangkou1.html");
}