$(function(){
			var i = 1;
			$('.span span').eq(0).addClass('current').siblings().removeClass('current');
			 function left(){
			 	  if(!$('.son').is(':animated')){
			 	if(i<5){
				$('.son').animate({
				'margin-left':-i*400
			   },1000)
				i++;
				$('.span span').eq(i-1).addClass('current').siblings().removeClass('current');
		    }else{
			$('.son img:first').clone().insertAfter($('.son img:last'));
			$('.son').animate({
				'margin-left':-i*400
			},1000,function(){
				$('.son').css('margin-left',0);
				$('.son img:last').remove();
			})
			
			i=1;
			$('.span span').eq(i-1).addClass('current').siblings().removeClass('current');
		//}
		
		document.title=i;

	}
}
}
		 

		 $('.span span').click(function(){
		   	if(!$('.son').is(':animated')){
		   	var index = $(this).index();
		  	$('.son').animate({'margin-left':-400*index},1000);
		  	// i=index+1;
		  	$('.span span').eq(index).addClass('current').siblings().removeClass('current');
		  	i=index+1;
			}
		   })
		left();
		var t  = setInterval(left,2000);
		$('.son').mouseover(function(){
				clearInterval(t);
			}).mouseout(function(){
				t = setInterval(left,2000);
			});
		   
		})
