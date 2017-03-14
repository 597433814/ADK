$(function() {
	//下拉菜单
	$('.toggleDown').click(function() {
		$('.downBar').slideToggle(150);
	})
	
	var yz = 0;
	//用户名验证
	$("input[name='username']").blur(function() {
		var reg = /^[a-z0-9_-]{6,16}$/;
		var value = $("input[name='username']").val();
		if(reg.test(value)) {
			//验证数据库用户是否已经存在
			$.get('/users/checkUsername', { username: value }, function(msg) {
				if(msg.success == 0) {
					$('.formInner').text('恭喜您，用户名可用');
				} else {
					$('.formInner').text('用户名已经被注册');
					zy = 0;
				}
			});

		} else {
			yz = 0;
			if(value == '') {
				$('.formInner').text('用户名不能为空')
			} else {
				$('.formInner').text('用户名必须是6-16位的字母数字下划线')

			}
		}
	})
	//密码验证
	$("input[name='password']").eq(0).blur(function() {
		var reg = /^[a-z0-9_-]{6,18}$/;
		var value = $("input[name='password']").val();
		if(reg.test(value)) {
			$('.formInner').text('恭喜你密码可以使用');
		} else {
			$('.formInner').text('密码不合法，必须是6-18位的字母数字下划线');
			yz = 0;
		}
	})
	$('.pass-ok').blur(function() {
		yzpass()
	})

	//验证密码函数
	function yzpass() {
		var value = $("input[name='password']").eq(0).val();
		var value2 = $('.pass-ok').val();
		if(value == value2) {
			var reg = /^[a-z0-9_-]{6,18}$/;
			if(reg.test(value)) {
				$('.formInner').text('恭喜你密码可以使用');
				yz = 1;
			} else {
				$("input[name='password']").eq(0).focus();
				$('.formInner').text('密码不合法');
			}

		} else {
			$('.formInner').text('两次密码不一致');
			yz = 0;
		}
	}
	//昵称验证
	$("input[name='user']").blur(function() {
		var value = $("input[name='user']").val();
		var reg = /[a-zA-Z0-9]{1,10}|[\x4e00-\x9fa5]{1,5}/g;
		if(reg.test(value)) {
			$('.formInner').text('昵称可以注册');
			yz = 1;
		} else {
			$('.formInner').text('昵称不合法');
			yz = 0;
		}
	})

	//表单提交验证
	$('form').submit(function() {
		yzpass();
		for(var i = 0; i < $('input').length - 2; i++) {
			if($('input').eq(i).val() == '') {
				yz = 0;
			}
		}
		if(yz == 0) {
			alert('表单填写不合法');
			return false;
		} else {
			alert('通过验证');
		}
	})
	//其他登录方式的点击
	$('.listBox li').click(function() {
		$(this).css('background', '#FFFFFF')
	})

})