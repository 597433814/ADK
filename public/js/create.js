$(function() {
	//下拉菜单
	$('.toggleDown').click(function() {
		$('.downBar').slideToggle(150);
	})
	
	var useryz=false;
	var passyz=false;
	var nameyz=false;
	//用户名验证
	$("input[name='username']").blur(function() {
		var reg = /^[a-zA-Z0-9_-]{6,16}$/;
		var value = $("input[name='username']").val();
		if(reg.test(value)&&value!='') {
			//验证数据库用户是否已经存在
			$.get('/users/checkUsername', { username: value }, function(msg) {
				if(msg.success == 0) {
					$('.formInner').text('恭喜您，用户名可用');
					useryz=true;
				} else {
					$('.formInner').text('用户名已经被注册');
					useryz=false;
				}
			});

		} else {
			useryz=false;
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
		if(reg.test(value)&&value!='') {
			$('.formInner').text('恭喜你密码可以使用');
		} else {
			$('.formInner').text('密码不合法，必须是6-18位的字母数字下划线');
			passyz=false;
		}
	})
	$('.pass-ok').blur(function() {
		yzpass()
	})

	//验证密码函数
	function yzpass() {
		var value = $("input[name='password']").eq(0).val();
		var value2 = $('.pass-ok').val();
		if(value == value2&&value!='') {
			var reg = /^[a-z0-9_-]{6,18}$/;
			if(reg.test(value)) {
				$('.formInner').text('恭喜你密码可以使用');
				passyz=true;
			} else {
				$("input[name='password']").eq(0).focus();
				$('.formInner').text('密码不合法');
				passyz=false;
			}

		} else {
			$('.formInner').text('两次密码不一致');
			passyz=false;
		}
	}
	//昵称验证
	$("input[name='user']").blur(function() {
		var value = $("input[name='user']").val();
		var reg = /[a-zA-Z0-9]{1,10}|[\x4e00-\x9fa5]{1,5}/g;
		if(reg.test(value)) {
			$('.formInner').text('昵称可以注册');
			nameyz=true;
		} else {
			$('.formInner').text('昵称不合法');
			nameyz=false;
		}
	})

	//表单提交验证
	$('form').submit(function() {
		yzpass();
		if(useryz==false||passyz==false||nameyz==false) {
			alert('表单填写不合法');
			return false;
		} else {
			return true;
		}
	})
	//其他登录方式的点击
	$('.listBox li').click(function() {
		$(this).css('background', '#FFFFFF')
	})

})