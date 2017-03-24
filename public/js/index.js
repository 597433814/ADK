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
	
	
	$('.backTop').click(function(){
		$('body').animate({'scrollTop':'0px'},1000)
	})

})

var TestModule=angular.module('TestModule',[]);
	TestModule.controller('TestController',function($scope,$http){
		$http.get('/fuck').then(function(msg){
//			console.log(msg.data)
			$scope.shopone=msg.data.slice(0,6);
			$scope.shoptwo=msg.data.slice(6,12);
			$scope.shopthree=msg.data.slice(12,18);
			$scope.shopfour=msg.data.slice(18,24);
		})
	})