function hdregister(){
	/* 有账号直接登录按钮  */
	var $hddlbtn = $('#hdbtn');
	$hddlbtn.click(function(){
		location.href = 'register.html';
	})
	/*  切换卡片  */
	/*var $regbtn = $('.register_p , .register_e');
	var $change = $('.regiforphone , .regiforemail');
	$change.eq(1).addClass('hide');
	$regbtn.click(function(){
		console.log($(this).index())
		var index = $(this).index();
		$regbtn.removeClass().addClass('register_e');
		$(this).removeClass().addClass('register_p');
		$change.eq().removeClass().addClass('show');
		$change.removeClass().addClass('hide');
	})*/
	var $hdinput = $('.hdinput');
	var arr = ['DCM6','G5YP','3VFW','QG6X','67YG','VECE','WSA8','JP34'];
	var flag = false;
	$hdinput.each(function(index){
		/*验证手机号*/
		$hdinput.eq(0).blur(function(){
			var hdname = /^1(3|5|7|8)[0-9]{9}/
			var hdnameval = $(this).val();
			var hdhtml = $('.hdprom')
			if(!hdname.test(hdnameval)){
				hdhtml.css('display' , 'block');
				flag == false;
			}else{
				hdhtml.css('display' , 'none');
				flag = true;
			}
		});
		/*验证密码:6-16位字符，可使用字母、数字或符号的组合*/
		$hdinput.eq(2).blur(function(){
			var hdpwd = /^[\w!~#%^&*]{6,16}$/
			var hdpwdval = $(this).val();
			var hdpwdtxt = $('.hdpwd');
			if(!hdpwd.test(hdpwdval)){
				hdpwdtxt.css('display' , 'block');
				flag == false;
			}else{
				hdpwdtxt.css('display' , 'none');
				flag = true;
			}
		});
		/*确认密码*/
		$hdinput.eq(3).blur(function(){
			var hdqrpwdval = $(this).val();
			var hdqrpwdtxt = $('.qrmima');
			if($(this).val() != $hdinput.eq(2).val()){
				hdqrpwdtxt.css('display' , 'block');
				flag == false;
			}else{
				hdqrpwdtxt.css('display' , 'none');
				flag = true;
			}
		});
		
	});
	$('.hdyzm').click(function(){
		$('.sendyzm').css('display','block');
	});
	$('.apic img').click(function(){
		$('.sendyzm').css('display' , 'none');
	})
	$('.randyzm').css('background' , 'url("../images/imgzc/yzm/img0'+rand(1,8) +'.png") no-repeat');
	$('.sure').click(function(){
		for(var i=0,n=arr.length ; i<n ; i++){
			if($('#inport').val().indexOf(arr[i]) == -1 ){
				alert('验证码错误')
				return false;
				flag == false;
			}else{
				$('.sendyzm').css('display' , 'none');
				$('.value').val($('#inport').val());
				flag = true;
			}
		}
	})
	$('.hdbtn').click(function(){
		if(flag == false){
			location.href = 'register_zc.html';
			return false;
		}else{
			alert('注册成功！跳转至首页')
			location.href = '../index.html';
		}
	})
	
	function rand(min,max){
		return Math.floor(Math.random()*(max - min) + min);		
	}
}hdregister()
