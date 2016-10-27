$(function(){
	var index;
	$('.box li').on('click',function(){
		$('.mask').css('display','block');
		$(".mask img").attr("src",$(this).find("img").attr("src"));
		index=$(this).index();
	})

	$('.mask').on('click','img',function(e){
		var w=$(window).outerWidth(true)
		if(e.pageX<w/2){
			$('.mask .btnbox .leftbtn').trigger('click')
		}else{
			$('.mask .btnbox .rightbtn').trigger('click')
		}
	})

	$('.mask .click').on('click',function(){
		$(".mask").css("display","none");
	})

	$(".mask .close").on("click",function(){
		$(".mask").css("display","none");
	})


	$('.mask .btnbox .rightbtn').on('click',function(){
		index++;
		if(index==$('.box li img').length){index=0}
		$('.mask img').attr('src',$('.box li img').eq(index).attr('src'))

	})


	$('.mask .btnbox .leftbtn').on('click',function(){
		index--;
		if(index==-1){index=$('.box li img').length-1}
		$('.mask img').attr('src',$('.box li img').eq(index).attr('src'))
	})

	
})
	