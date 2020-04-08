$(function(){
	$("#u1-1").attr("class","active");
//	基本介绍
	$("#u1-1").click(function(){
		$("#u1").find("p").attr("class","");
		$("#u1-1").attr("class","active");
		$("#box").find("div").css("display","none");
		$("#u1-1-1").css("display","block");
	});
//	基本介绍结束

//  章节目录
	$("#u2-1").click(function(){
		$("#u1").find("p").attr("class","");
		$("#u2-1").attr("class","active");
		$("#box").find("div").css("display","none");
		$("#u2-1-1").css("display","block");
	});
//	章节目录结束

//考核标准
	$("#u3-1").click(function(){
		$("#u1").find("p").attr("class","");
		$("#u3-1").attr("class","active");
		$("#box").find("div").css("display","none");
		$("#u3-1-1").css("display","block");
		
	});
//	考核标准结束

//教学计划
	$("#u4-1").click(function(){
		$("#u1").find("p").attr("class","");
		$("#u4-1").attr("class","active");
		$("#box").find("div").css("display","none");
		$("#u4-1-1").css("display","block");
	});
//	教学计划结束

//认证情况
	$("#u5-1").click(function(){
		$("#u1").find("p").attr("class","");
		$("#u5-1").attr("class","active");
		$("#box").find("div").css("display","none");
		$("#u5-1-1").css("display","block");
	});
//	认证情况结束
})