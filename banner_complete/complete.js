// is(':animated')  true/false 这是防动画混乱的做法
		$(function(){
				var w = $('img').width();
				var nowimg = 0;
				var count = $('img').length;
				console.log(count);
				//注意 这是轮播到第五张图片时采用的处理方法 此处克隆不会影响count的值
                $('.box1 img:first').clone().appendTo($('.box1'));
                //先设置打开页面是的默认效果
				$('.box2 span').eq(0).addClass('current').siblings('span').removeClass('current');

			$('#btntwo').click(function event(){
				if (!$('.box1').is(':animated')){
					if(nowimg<4){
						nowimg++;
					$('.box1').animate({'margin-left':-nowimg*w},1000)
					
					console.log(nowimg);
				}else{
					nowimg = 0;
					$('.box1').animate({
						'margin-left':-5*w
					},1000,function(){
						//回调函数执行的操作非常快，操作前后显示的都是同一张图片，看不出变化，也是利用这一点实现‘无缝轮播’
						$('.box1').css('margin-left',0)
					})
					
				}	
				//不要忘了圆点的状态要跟着同步变化
				$('.box2 span').eq(nowimg).addClass('current').siblings().removeClass('current');
			}
			});


			$('#btnone').click(function(){
				if (!$('.box1').is(':animated')){
					if(nowimg>0){
						nowimg--;
					$('.box1').animate({'margin-left':-nowimg*w},1000);
					
					console.log(nowimg);
				}else{
					nowimg = 4;
					$('.box1').css({'margin-left':-5*w},1000);//
					$('.box1').animate({
						'margin-left':-nowimg*w
					},1000)
					
				}	
				$('.box2 span').eq(nowimg).addClass('current').siblings().removeClass('current');
			}
			});


			$('.box2 span').click(function(){
				console.log($('.box2 span'),nowimg)
				 if(!$('.box1').is(':animated')){
				nowimg = $(this).index();
				$('.box2 span').eq(nowimg).addClass('current').siblings().removeClass('current');
				$('.box1').animate({'margin-left':-nowimg*w},1000)
			}
			})

			var t = setInterval("$('#btntwo').click()",2000);

			//鼠标进入盒子停止轮播；离开，继续轮播
			//mouseover和mouseout  
			$('.bannerbox').mouseover(function(){
				clearInterval(t);
			}).mouseout(function(){
				t = setInterval("$('#btntwo').click()",2000);
			});

});