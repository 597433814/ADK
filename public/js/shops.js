$(function(){
	//下拉菜单
	$('.toggleDown').click(function(){
		$('.downBar').slideToggle(150);	
	})
	
	$('.jian').click(function(){
		var res=$('.num').val();
		res--;
		if(res<=1)return
		$('.num').val(res)
	})
	$('.jia').click(function(){
		var res=$('.num').val();
		res++;
		if(res>=99)return
		$('.num').val(res)
	})
})

