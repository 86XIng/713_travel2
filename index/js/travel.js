//景点门票预订
var scenics=[]
scenics[0] = ["黄鹤楼","湖北省博物馆","归元寺"]
scenics[1] = ["锦里","杜甫草堂","宽窄巷子"]
scenics[2] = ["大理古城","洱海","苍山"]

function changeCity(val){
	var selectScenic = document.getElementById("scenic");
	selectScenic.options.length = 1;
	
	
	for(var i = 0;i < scenics[val].length;i ++){
		var optObj = document.createElement("option");
		optObj.text = scenics[val][i];
		selectScenic.appendChild(optObj);
	}
	
}
