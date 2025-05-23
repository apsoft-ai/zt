mui.init({swipeBack: false
,gestureConfig: {tap:true,doubletap:true,longtap:true,hold:true,release:true}});

var 标题栏1 = new 标题栏("标题栏1",null,标题栏1_右侧图标被单击,null);
var 标签_最下广告 = new 标签("标签_最下广告",标签_最下广告_被单击);
var 按钮1 = new 按钮("按钮1",按钮1_被单击,null,null);
var 编辑框1 = new 编辑框("编辑框1",null,null,null,null,null);
var 弹出提示1 = new 弹出提示("弹出提示1");
var 菜单1 = new 菜单("菜单1",菜单1_菜单项被单击);
var 对话框1 = new 对话框("对话框1",null,null,null);
if(mui.os.plus){
    mui.plusReady(function() {
        窗口_首窗_创建完毕();
        
    });
}else{
    window.onload=function(){ 
        窗口_首窗_创建完毕();
        
    }
}

function 窗口_首窗_创建完毕(){





	添加菜单();
	var tstr;
	tstr = 公用模块.str_verticalbar("中国图书馆分类号查询智能体功能说明文档|一、系统概述|中国图书馆分类号查询智能体是基于《中国图书馆分类法》（简称《中图法》）构建的智能化检索工具，整合了分类法数据库、自然语言处理技术及多维度检索算法。该系统可快速响应「关键词检索」「层级导航」「学科映射」等查询需求，支持学术研究、出版发行、图书馆编目等场景的分类号精准匹配，满足用户对文献分类的标准化需求。|二、核心功能模块|1. 智能检索系统|多模态输入：支持文本关键词、学科术语、文献主题词输入，例如输入“激光器”可直接返回TN248类号。|语义解析：采用NLP技术识别用户查询意图，如“人工智能理论”自动关联TP18大类及下属细分类目。|交叉推荐：在显示主分类号的同时，推荐关联分类号（如TP391.4与TN919.82的交叉应用场景）。|2. 层级导航系统|22大类结构：按《中图法》基础部类（马列、哲学、社会科学等）划分一级入口，逐层展开至五级类目。|动态路径回溯：例如从“Z831 各类型目录”可回溯至“Z8 目录学”，辅助用户理解分类逻辑。|3. 智能辅助工具|分类号验证：自动检测用户填写的类号是否符合规范（如I206.2需简化为I206提交）。|学科对照表：提供《中图法》与《国际十进分类法》（UDC）的映射关系，便于国际学术交流。|三、技术架构|1. 数据层|分类法数据库：收录《中图法》全部类目及注释，包含超过5万个类目节点。|更新机制：实时同步国家图书馆发布的分类法修订信息（如新增“人工智能伦理”类目）。|2. 算法层|混合检索模型：结合TF-IDF权重计算与深度学习语义匹配，提升查准率（实验数据显示准确率达98.7%）。|知识图谱：构建类目间的“属种关系”“交叉关系”图谱，例如“TP18 人工智能理论”与“TP181 自动推理”的层级关联。|3. 应用层|多端适配：提供Web端、API接口、移动端应用（参考国家数字图书馆APP架构）。|用户行为分析：记录高频查询词，优化算法推荐策略。|四、操作指南（以Web端为例）|步骤1：选择检索模式|快速检索：输入关键词（如“古籍目录”）→ 系统返回Z842.1类号及相关注释。|高级检索：组合学科领域+文献类型+地域/时代限定条件。|步骤2：结果解析|类号展示：显示完整分类号及上位类路径（例：TQ177 → TQ177.1+5需简化为TQ177）。|类目说明：附带《中图法》官方定义（如“Z83 各类型目录”包含丛书目录、禁毁书目录等）。|步骤3：结果导出|支持BibTeX、EndNote格式导出，自动生成标准化参考文献条目。|五、应用场景|1. 学术研究|论文标注：帮助研究者按《中图法》规范标注学科分类号（如医学论文标注R类号）。|课题申报：快速确定研究方向在分类体系中的位置。|2. 图书馆管理|编目自动化：与图书馆管理系统（如智慧图书档案管理系统）对接，实现书目数据批量分类。|排架优化：根据分类号分布分析馆藏结构。|3. 出版行业|CIP数据核验：验证出版社提交的分类号准确性，降低出版审核成本。|六、系统优势|权威性：严格遵循国家图书馆发布的《中图法》标准。|高效性：查询响应时间<0.5秒，较人工检索效率提升90%。|扩展性：支持API对接第三方系统（如高校图书馆OPAC系统）。|七、未来发展|AI增强：引入类似“湘图AI馆员”的智能对话功能，实现自然语言交互。|多语种支持：开发《中图法》与LC、DDC分类体系的自动转换模块。|注：本系统当前版本功能已覆盖《中图法》全部22大类，详细类目查询请访问等官方资源站。");
	编辑框1.置内容(tstr);

}





function 标签_最下广告_被单击(){

	窗口操作.打开指定网址("https://affiliate.bazhuayu.com/M8lKUC", 2);

}





function 标题栏1_右侧图标被单击(){

	菜单1.显示菜单();

}

function 添加菜单(){

	菜单1.清空菜单项();



	菜单1.添加菜单项("爬虫");



	菜单1.添加菜单项("更多");

}

function 菜单1_菜单项被单击(菜单项标题){

	switch(菜单项标题){





		case "更多" :

			窗口操作.打开指定网址("https://affiliate.bazhuayu.com/M8lKUC", 2);

		break;
		case "爬虫" :

			窗口操作.打开指定网址("https://affiliate.bazhuayu.com/M8lKUC", 2);

		break;
	}

}






function 按钮1_被单击(){

	窗口操作.打开指定网址("https://chatglm.cn/share/1FqHcIRL", 1);
}