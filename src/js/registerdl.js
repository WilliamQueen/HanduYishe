function dl(){
	$admtxt = $('#hdadmin #admintxt');
	console.log($admtxt)
	$admtxt.eq(0).focus(function(){
		$(this).val('');
	})
	$admtxt.eq(0).blur(function(){
		var $emailreg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
		var $phonereg = /^1(3|5|7|8)[0-9]{9}/;
		if($emailreg || $phonereg != $(this).val()){
			alert('格式错误')
		}else{
			alert('登录成功')
		}
	})
	$admtxt.eq(1).blur(function(){
		var $pwdreg = /^[\w!~#%^&*]{6,16}$/;
		if($pwdreg != $(this).val()){
			alert('格式错误')
		}else{
			alert('登录成功')
		}
	})
}dl();
