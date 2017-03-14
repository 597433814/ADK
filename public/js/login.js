$(function(){
	//下拉菜单
	$('.toggleDown').click(function(){
		$('.downBar').slideToggle(150);	
	})
	
	//其他登录方式的点击
	$('.listBox li').click(function(){
		   $(this).css('background','#FFFFFF')
	})
	
})
