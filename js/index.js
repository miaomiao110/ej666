$(function(){
	// 为栏目绑定事件

	$("ul.left_nav").on("click","li",function(){
		var url = $(this).attr("url");
<<<<<<< HEAD
		$("#wrapper").load(url+"?time="+Math.random());
=======
		$("#wrapper").load(url+"?time="+Math.random())
>>>>>>> 873ba814d27369c9bc25ea08a91f1c410bbf798d
	})
});