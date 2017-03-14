$(function() {
	//轮播图
	var mySwiper = new Swiper('.swiper-container', {
		// 方向：垂直
		// direction: 'vertical',
		// 循环
		loop: true,
		autoplay: 3000,
		// 如果需要分页器
		pagination: '.swiper-pagination',
	})
	
	//AJAX 男鞋
	$.get('js/1.json',function(msg){
		var str='';
		for(var i=0;i<6;i++){
			str+='<div class="tbl-cell">';
			str+='<a href="/shops" >';
			str+='<img src='+msg[i].img+'>';
			str+='</a>';
			str+='<span>';
			str+='<a href="/shops">'+msg[i].title+'</a>'
			str+='</span>';
			str+='<span>';
			str+='<a href="/shops">￥'+msg[i].price+'</a>'
			str+='</span>';
			str+='</div>';
		}
		$('.theme-pavilion').eq(0).append(str);
	},'json')
	
	$('.clickload:eq(0)').click(function(){
		$('.clickload:eq(0)').hide();
		$('.lady-footer:eq(0)').show();
		$('.theme-pavilion').eq(1).show();
		$('.clickload').eq(1).show();
		$.get('js/1.json',function(msg){
				var str='';
				for(var i=6;i<12;i++){
					str+='<div class="tbl-cell">';
					str+='<a href="" >';
					str+='<img src='+msg[i].img+'>';
					str+='</a>';
					str+='<span>';
					str+='<a href="">'+msg[i].title+'</a>'
					str+='</span>';
					str+='<span>';
					str+='<a href="">￥'+msg[i].price+'</a>'
					str+='</span>';
					str+='</div>';
				}
				$('.theme-pavilion').eq(1).append(str);
				
			},'json')	
	})
	$('.clickload:eq(1)').click(function(){
		$('.clickload').eq(1).hide();
		$('.lady-footer').eq(1).show();
		$('.theme-pavilion').eq(2).show();
		$('.clickload').eq(2).show();
		$.get('js/1.json',function(msg){
				var str='';
				for(var i=12;i<18;i++){
					str+='<div class="tbl-cell">';
					str+='<a href="" >';
					str+='<img src='+msg[i].img+'>';
					str+='</a>';
					str+='<span>';
					str+='<a href="">'+msg[i].title+'</a>'
					str+='</span>';
					str+='<span>';
					str+='<a href="">￥'+msg[i].price+'</a>'
					str+='</span>';
					str+='</div>';
				}
				$('.theme-pavilion').eq(2).append(str);
			},'json')	
	})
	$('.clickload:eq(2)').click(function(){
		$('.clickload').eq(2).hide();
		$('.lady-footer').eq(2).show();
		$('.theme-pavilion').eq(3).show();
		$('.footer').show();	
		$.get('js/1.json',function(msg){
				var str='';
				for(var i=18;i<msg.length;i++){
					str+='<div class="tbl-cell">';
					str+='<a href="" >';
					str+='<img src='+msg[i].img+'>';
					str+='</a>';
					str+='<span>';
					str+='<a href="">'+msg[i].title+'</a>'
					str+='</span>';
					str+='<span>';
					str+='<a href="">￥'+msg[i].price+'</a>'
					str+='</span>';
					str+='</div>';
				}
				$('.theme-pavilion').eq(3).append(str);
			},'json')	
	})
	
	$('.backTop').click(function(){
		$('body').animate({'scrollTop':'0px'},1000)
	})
	
	
	
})

var TestModule=angular.module('TestModule',[]);
	TestModule.controller('TestController',function($scope,$ht){
		
	})