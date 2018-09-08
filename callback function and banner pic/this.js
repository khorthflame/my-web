         var imgobj = document.querySelectorAll('img');
        var spanobj = document.querySelectorAll('span');
        for(var i = 0;i<spanobj.length;i++){
            (function(index){
                spanobj[index].onclick = function(){
                    for(var j = 0;j<spanobj.length;j++){
                        imgobj[j].style.display = 'none';
                    }
                   imgobj[index].style.display = 'block';
                   console.log(index);
                }
            })(i);
        }