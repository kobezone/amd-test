// define({
// 	color:'black',
// 	size:'unisize'
// })
//

//采用 var a = require('a');获取文件模块
define(function(){
	return {
		color:"black",
		size:'28',
		add:function(a,b){
			console.log(a+"+"+b+"="+(a+b));
		}
	}
})