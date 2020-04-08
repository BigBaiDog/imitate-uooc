$(function(){
	$("totop").click(function(e){
		var oEvent=ev||event;
		$("html,body").animate({
			scrolltop:0
		},100)
	})
}
