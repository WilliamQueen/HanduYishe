/*显示*/
function show(id){
	let oDiv = document.getElementById(id);
	oDiv.style.display = 'block';
}
/*隐藏*/
function hide(id){
	let oDiv = document.getElementById(id);
	oDiv.style.display = 'none';
}
window.onscroll = function(){
	var top = document.documentElement.scrollTop || document.body.scrollTop;
	var $sear = $('#xf_search');
	if(top > 760){
		$('#xf_search').slideDown();
	}else{
		$('#xf_search').slideUp();
	}
}
/*  悬浮搜索框结束  */

function foc(){
	var $inp = $('#search_input input,.search input:first')
	var $inp1 = $('#search_input input');
	var $inp2 = $('.search input:first');
	$inp.focus(function(){
		$(this).val('')
	})
}foc();
/*   得焦清空文本框      */


var $div = $('.help_right');
var $li = $('.help_right ul:first-child>li:last-child');
var $box = $('navigation');
$li.mouseover(function(){
	show('navigation');
})
$li.mouseout(function(){
	hide('navigation');
})
/*$div.on('mouseover',$li,function(){
	show('navigation');
})
$div.on('mouseout',$box,function(){
	hide('navigation');
})*/
/*---------------------------------------网站导航结束------------------------------------*/
function hover(){
	var $lis = $('#hidedh ul li');
	$lis.each(function(){
		$(this).mouseover(function(){
			var index = $(this).index();
			var $a = $(this).children();
			var $i = $(this).children('p').children('i');
			var $p = $(this).children('p');
			var $img = $(this).children('p').children('img');
			$(this).css('background','#000000');
			$p.stop().animate({'left':10},500)
			$a.css('color','#fff')
			$i.css('color','#fff')
			$('.listOne').stop().show(500)
		})
		$(this).mouseout(function(){
			var $a = $(this).children();
			var $i = $(this).children('p').children('i');
			var $p = $(this).children('p');
			var $div = $(this).children('.listOne')
			$p.stop().animate({'left':0},200)
			$(this).css('background','');
			$a.css('color','')
			$i.css('color','')
			$div.stop().hide(200)
		
		})
	})
	var $list = $('.listOne ')
}hover();
/*--------------------------------左导航结束--------------------------------------------------*/

function leftewm(){
	window.onscroll = function(){
		var top = document.documentElement.scrollTop || document.body.scrollTop;
		top > 800 ? $('.xfewm').fadeIn() : $('.xfewm').fadeOut()
	}
}leftewm();

/*---------------------左悬浮二维码结束---------------------------*/

/*function sele(){
//	var $as = $('#sort a s');
	var $aa = $('#sort a')
//	var $fa = $as.parent();
	$aa.eq(1).css('background','#ff0');
	$aa.css('background','#fff')
	$aa.click(function(){
		$(this).css('background','#ff0').siblings().css('background','#fff');
//		$aa.css('background','#fff')
	})
}sele();*/

/*---------------------------------选择按钮结束----------------------------------*/
function listjson(){
	$.getJSON('../src/js/page.json',function(data){
		var li = "";
		for(var attr in data){
			li += `<li><a href="product_01.html"><img src="${data[attr].img}"/></a>
				<p><i>￥</i>${data[attr].p}<span>${data[attr].span}</span></p>
			</li>`
		}
//		var $imgs = $('#product_list ul li')
		$('#product_list ul').html(li)
//		console.log($imgs)
	})
}listjson()

function flippage(){
	var $flip = $('#number ol .page');
	var $flipli = $('#number ol li');
	$flip.eq(0).css({'background' : '#eee'})
	$flip.click(function(){
		$(this).css({'background' : '#eee'}).siblings().css({'background' : '#fff'})
		if($(this).index() <= 1){
			$flipli.eq(0).hide(30);
		}else{
			$flipli.eq(0).show(30);
			
		}
	})
}flippage();

/*     底部翻页按钮       */