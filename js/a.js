define('a',['lib/jquery.min'],function(jQuery){
	function testa(){
		console.log("加载a模块成功");
		console.log(jQuery);
	}	
	testa();
	return{
		a:testa
	}
});