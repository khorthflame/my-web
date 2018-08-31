var input = document.querySelector('input');
		var pattern=/^[a-zA-Z][a-zA-Z0-9_]{4,19}$/
		var reg1 = new RegExp(pattern);
		input.onblur=function(){
			alert(reg1.test(input.value));
		}