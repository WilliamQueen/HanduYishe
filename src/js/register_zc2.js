$(function(){
	/* 有账号直接登录按钮  */
	var $hddlbtn = $('#hdbtn');
	$hddlbtn.click(function(){
		location.href = 'register.html';
	})
	
	//验证文本框内容
	var $hdinput = $('.hdinput');
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
	
	//点击发送验证码 弹框
	$('.hdyzm').click(function(){
		$('.sendyzm').css('display','block');
	});
	//验证码图片
	var arr = ['DCM6','G5YP','3VFW','QG6X','67YG','VECE','WSA8','JP34'];
	$('.randyzm').css('background' , 'url("../images/imgzc/yzm/img0'+rand(1,8) +'.png") no-repeat');
	//点击确定按钮判断验证码是否一致
	$('.sure').click(function(){
		for(var i=0 ; i<arr.length ; i++){
			console.log(arr[i])
			if($('#inport').val().indexOf(arr[i]) == -1 ){
				console.log(arr[i])
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
	//点击同意并注册按钮
	$('.hdbtn').click(function(){
		$input = $('.hdinput').val();//获取所有文本框
		//获取cookie
		var $cookie = $.cookie('cookiephone') ? $.cookie('cookiephone') : "";
		//将cookie转为对象
		var cookieObj = strToObj($cookie);
		console.log(cookieObj);
		if($hdinput.eq(0) in cookieObj){
			alert("您注册的用户已存在！");
		}else{
			//将新用户添加到对象中
			cookieObj[$hdinput.eq(0)] = pass;
			//创建cookie
			$.cookie('cookiephone', 'cookieValue', { expires: 7, path: '/' });
			alert('注册成功')
		}
	})
	
	
	
	//将字符串转对象
	function strToObj(str){
		if(!str){
			return {};
		}else{
			return JSON.parse(str);
		}
	}
	//将对象转字符串
	function objToStr(obj){
		if(!obj){
			return "";
		}else{
			return JSON.stringify(obj);
		}
	}
	
	//随机数
	function rand(min,max){
		return Math.floor(Math.random()*(max - min) + min);		
	}
})
