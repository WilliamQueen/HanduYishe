$(function(){
	$.getJSON('../src/json/product.json',function(hddata){
		var hdstr = "";
		var hddatat = hddata.top;
		for(var hdatt in hddatat){
			hdstr += `<li>
						<a href="product_01.html"><img src="${hddatat[hdatt].yimg}"/></a>
						<p class="discribe"><a href="javascript:;">${hddatat[hdatt].discribe}</a></p>
						<p><span>￥${hddatat[hdatt].hdprice}</span><s>${hddatat[hdatt].hdyj}</s></p>
					</li>`;
		}
		$('.prolistt').html(hdstr);
		var hddatab = hddata.bottom;
		for(var hdatb in hddatab){
			hdstr += `<li>
						<a href="javascript:;"><img src="${hddatab[hdatb].yimg}"/></a>
						<p class="discribe"><a href="javascript:;">${hddatab[hdatb].discribe}</a></p>
						<p><span>￥${hddatab[hdatb].hdprice}</span><s>${hddatab[hdatb].hdyj}</s></p>
					</li>`;
		}
		$('.prolistb').html(hdstr);
	})
	function hdfdj(){
		var index = 0;
		var $small_pic = $('#small_pic img');
		var $middle_pic = $('#middle_pic img');
		var $big_pic = $('#big_pic img');
		$small_pic.click(function(){
			var index = $(this).index();
			$middle_pic.eq(index).show().siblings().hide();
			$big_pic.eq(index).show().siblings().hide();
		})
		$('#middle_pic').mouseenter(function(e){
			$('#mask').css('display' , 'block');
			$('#big_pic').css('display' , 'block')
			$('#middle_box').mousemove(function(e){
				let left = e.pageX - $(this).offset().left - $('#mask').width()/2;
				let top = e.pageY - $(this).offset().top -  $('#mask').height()/2;
				if(left <= 0){
					left = 0;
				}else if(left >= $middle_pic.width() - $('#mask').width()){
					left = $middle_pic.width() - $('#mask').width();
				}
				if(top <= 0){
					top = 0;
				}else if(top >= $middle_pic.height() - $('#mask').height()){
					top = $middle_pic.height() - $('#mask').height();
				}
				$('#mask').css({left : left,top : top})
				var x = left * (($big_pic.width() - $('#big_pic').width())/($middle_pic.width() - $('#mask').width()));
				var y = top * (($big_pic.height() - $('#big_pic').height())/($middle_pic.height() - $('#mask').height()));
				var ind = $small_pic.index();
				$big_pic.css({left : -x,top :-y});
			})
			$('#middle_box').mouseleave(function(){
				$('#mask').hide(30);
				$('#big_pic').hide(30);
			})
		})
	}hdfdj()
	/* 拖拽插件 */
})
