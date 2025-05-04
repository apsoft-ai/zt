    (function (){  
        //注册命名空间  
        window["读写设置"] = {}   
        
        function 保存设置(key,value){
            window.localStorage.setItem(key,value);
        }

        function 读取设置(key){ 
            return window.localStorage.getItem(key);
        }
        
        function 删除设置(key){
            window.localStorage.removeItem(key);
        }

        function 清空设置(){
            window.localStorage.clear();
        }

        function 取设置数量(){ 
            return window.localStorage.length;
        }

        function 取设置名称(index){ 
            return window.localStorage.key(index);
        }

        //注册function
        window["读写设置"]["保存设置"]=保存设置;  
        window["读写设置"]["读取设置"]=读取设置;
        window["读写设置"]["删除设置"]=删除设置;  
        window["读写设置"]["清空设置"]=清空设置;  
        window["读写设置"]["取设置数量"]=取设置数量;  
        window["读写设置"]["取设置名称"]=取设置名称;  
    })();
 