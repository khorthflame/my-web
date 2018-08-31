$(function(){
		//表单提交事件 
		//return false;阻止提交
		//return true;允许提交
		$("form[name=login]").submit(function(){
			//检验用户名
			if(validateName() == "ok" && validatePass()&&checkPass()&&checkSex()){//验证成功允许提交
				return true;

			}else{
				return false;
			}
			
		});

		//1)验证用户名
		// 验证成功:return 'ok';
		// 验证失败:return 'no';
		function validateName(){
			var uName = $("input[name=uname]").val();
			if(uName == ""){
				$(".mess_1").html("<font color=red>用户名不能为空</font>");
				return 'no';
			}else if(uName.length > 10){
				$(".mess_1").html("<font color=red>用户名不能超过10个字符</font>");
				return 'no';
			}else if(uName.indexOf('@') != -1){
				$(".mess_1").html("<font color=red>用户名不能包含@符号</font>");
				return 'no';
			}else{
				$(".mess_1").html("<font color=blue>用户名正确</font>");
				return 'ok';
			}
		}

		//2)验证密码
		// 验证成功:return true;
		// 验证失败:return false;
		// 1)不能为空 2)只能为6位密码 3)不能包含$/#/@
		function validatePass(){
			var uPass = $("input[name=upass]").val();
			if(uPass == ""){	
				$(".mess_2").html("<font color=red>密码不能为空</font>");
				return false;
			}else if(uPass.length != 6){
				$(".mess_2").html("<font color=red>密码只能为6位</font>");
				return false;
			}else if(uPass.indexOf('@')!=-1 ||
							 uPass.indexOf('$')!=-1 ||
							 uPass.indexOf('#')!=-1){
				$(".mess_2").html("<font color=red>密码不能包含$/#/@</font>");
				return false;
			}else{
				$(".mess_2").html("<font color=blue>密码正确</font>");
				return true;
			}
		}

		//3)验证确认密码
		//1)不能为空 2)必须保持一致
		function checkPass(){
			var repass = $('input[name=repass]').val();
			if(repass == ""){	
				$(".mess_3").html("<font color=red>密码不能为空</font>");
				return false;
			}else if(repass!==$("input[name=upass]").val()){
				$(".mess_3").html("<font color=red>密码不一样，重新输入</font>");
				return false;
			}else{
				$(".mess_3").html("<font color=blue>密码验证成功</font>");
				return true;
			}
		}

		//4)验证性别
		//1)性别不能为空
		function checkSex(){
			var male = $('.pobj input:checked').eq(0).val();
			var fem = $('.pobj input:checked').eq(1).val();
			var non = $('.pobj input:checked').eq(2).val();
			if(male==null&&fem==null&&non==null){
				$(".mess_4").html("<font color=red>性别不能为空</font>");
				return false;
			}else{
				return true;
			}
	  }
	})