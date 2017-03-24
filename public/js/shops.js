$(function(){
	//下拉菜单
	$('.toggleDown').click(function(){
		$('.downBar').slideToggle(150);	
	})
	
	$('.jian').click(function(){
		var res=$('.num').val();
		res--;
		if(res<1)return
		$('.num').val(res)
	})
	$('.jia').click(function(){
		var res=$('.num').val();
		res++;
		if(res>=99)return
		$('.num').val(res)
	})
	$('.size').children('span').click(function(){
		$(this).addClass('jiabian').siblings().removeClass('jiabian')
	})
	
	var shopobj={};
	$('.join').click(function(){
		shopobj.title=$('.logo').html()
		shopobj.price=$('.vip').eq(0).children('span').eq(1).html();
		shopobj.size=$('.jiabian').html();
		shopobj.num=$('.num').val();
	shopobj.img=$('.shopimg img').attr('src');
		
		$.post('/show/lists',shopobj,function(msg){
			console.log(msg)
		})
})
		


})

