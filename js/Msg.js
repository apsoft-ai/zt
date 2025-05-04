    function 弹出提示(name){   
        //name表示组件在被创建时的名称，event表示组件拥有的事件
        //如果组件有多个事件，可以在后面继续填写这些事件名称
        //例如：function 弹出提示(name,event1,event2,event3){
        
        //组件内部属性，仅供组件内部使用：
        this.名称 = name;
        
        //组件命令：
        this.弹出成功 = function (newTitle,time){
            Carryout("msg1",newTitle,time)
        } 
        
        //组件命令：
        this.弹出信息 = function (newTitle,time){
            Carryout("msg2",newTitle,time)
        } 
        
        //组件命令：
        this.弹出警告 = function (newTitle,time){
            Carryout("msg3",newTitle,time)
        }
        
        //组件命令：
        this.弹出失败 = function (newTitle,time){
            Carryout("msg4",newTitle,time)
        }
		
		
		
function Carryout(type,value,time){
	var div = document.getElementById("msg")
	div.className = "msg " + type
	
	div.innerHTML = value
	div.style.cssText = "transform: translateY(30%);transition: all 0.3s ease;opacity: 1;"
	div.addEventListener("transitionend", Transitionend(div,time))	
}
function Transitionend(div,time){
	
	if (div.style.opacity == "1"){
		setTimeout(function(){
			div.style.cssText = "transition: all 0.3s ease;"
		},time)
	}
}



    }