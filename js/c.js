define('c',['lib/jquery.min','a'],function($,a){
	function testc(){
		console.log("testc invoke");
		console.log("-----");
		console.log(a.a());

	}
	testc();
})