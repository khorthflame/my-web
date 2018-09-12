//获取提示框的盒子
var box = document.getElementById('elem');
// console.log(box);
var title_obj = box.querySelector('.title');
var msg_obj = box.querySelector('.msg');
var btns_obj = box.querySelector('.btns');



//定义一个对象:包含了对提示框的操作方法
// 1)显示功能: show
// 2)隐藏功能: hide
// 3)处理信息显示: showMsg
// 4)提示框:  alert(msg)
// 5)询问框:  confirm(msg,callback)
var showTip = {
  show:function(){//显示
    // console.log('显示');
    box.style.display = 'block';    
  },
  hide:function(){//隐藏
    // console.log('隐藏');
    box.style.display = 'none';
  },
  showMsg:function(){//处理信息
    // console.log('开始处理信息');
    console.log(arguments[0]);
    //1)显示信息框
    showTip.show();
    //2)自己定义信息框的内容,title,msg,buttons
    title_obj.innerHTML = arguments[0]['title'];
    msg_obj.innerHTML = arguments[0]['msg'];
    //先清除按钮,再添加新按钮
    btns_obj.innerHTML = '';
    var btn = arguments[0]["buttons"];
    for(key in btn){
      btns_obj.innerHTML += "<input type=button class="+key+" value="+btn[key]+" onclick='showTip.hide()'>";
    }

    //3)如果有回调函数,当我们点击确认按钮,要执行回调函数
    // console.log(arguments[0].fn);
    if(arguments[0].fn){//有回调函数
      //点了确认按钮:才可以执行回调函数
      //第一件事是:隐藏 第二件事是:处理回调
      btns_obj.querySelector('input.yes').addEventListener('click',arguments[0].fn);

    }

  },
  alert:function(msg){//提示框
    // console.log('提示框');    
    this.showMsg({title:'警告',msg:msg,buttons:{yes:'确认'}});
  },
  confirm:function(msg,callback){//询问框
    // console.log('询问框');
    this.showMsg({title:'询问',msg:msg,buttons:{yes:'确认',no:'取消'},fn:callback});
  }
};

//页面初始化:先隐藏一下盒子
showTip.hide();


//点击按钮:弹框
var btn1_obj = document.getElementById('btn1');
var btn2_obj = document.getElementById('btn2');

btn1_obj.onclick = function(){
  showTip.alert('请先登录或者注册');
}
btn2_obj.onclick = function(){
  showTip.confirm('是否要删除购物车商品?',function(){
    console.log('正在删除....');
    //清空购物车
    var myCar = document.getElementById('car');
    myCar.remove();
  });
}
