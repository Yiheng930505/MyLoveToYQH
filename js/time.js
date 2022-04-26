function showTime() { 
	var currentDate = new Date(); 
	var startDate = new Date(2022, 02, 30);
	var date3 = currentDate-startDate;
	var days=Math.floor(date3/(24*3600*1000));
	var leave1=date3%(24*3600*1000);     //计算天数后剩余的毫秒数
	var hours=Math.floor(leave1/(3600*1000));
	var leave2=leave1%(3600*1000);        //计算小时数后剩余的毫秒数
	var minutes=Math.floor(leave2/(60*1000));
	var leave3=leave2%(60*1000);          //计算分钟数后剩余的毫秒数
	var seconds=Math.round(leave3/1000);
	if (minutes < 10) 
	minutes = "0" + minutes; 
	if (seconds < 10) 
	seconds = "0" + seconds; 
	var currentTimeString = "<c style=\"color: #FFFFF; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:14px\"><br> <br> <br> <br> Dear Qinghe:<br>"
		+ "&nbsp&nbsp&nbsp&nbsp&nbsp &nbspI have been in love with you for:<br> "
		+ "&nbsp&nbsp&nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"
		+ "<c style=\"color: #E33593; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:15px\" >" + days +" </c>day "
		+ "<c style=\"color: #E33593; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:15px\" >" + hours+" </c>hour "
		+"<c style=\"color: #E33593; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:15px\" >" + minutes+" </c>min "
		+"<c style=\"color: #E33593; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:15px\" >" +seconds+" </c>sec<br>"
		+ "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"
		+	"<c style=\"color: #FFFFF; text-shadow:2px 3px 3px #222; font-family:Microsoft YaHei; font-size:14px\" >——Yiheng, 2022-03-30</c>";
	document.getElementById("show").innerHTML=currentTimeString;  //改这地方
	window.setTimeout("showTime()", 1000); 
} 
