  $(function(){
           //单击左右按钮，背景透明度变为1
           $('.item span').click(function(){
               $(this).addClass('current').siblings('span').removeClass('current');
           })
           //点击item盒子，加一个边框/投影
           $('.item').click(function(){
               $(this).addClass('current');
           })
           //如何解决事件冒泡的影响
           //从内到外
           //阻止里面的元素的事件冒泡
           //方法1：
            //  $('.item span').click(function(event){
            //     event.stopPropagation();
            //  })
           //方法2：
              $('.item span').click(function(event){
                return false;
              })
             //方法3：发现不支持。。。。
            // $('.item span').click(function(event){
              //  event.preventDefault();
            // })
        })