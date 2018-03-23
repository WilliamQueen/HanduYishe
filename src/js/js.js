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


let $div = $('.help_right');
let $li = $('.help_right ul:first-child>li:last-child');
let $box = $('navigation');
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
	let $lis = $('#hidedh ul li');
	$lis.each(function(){
		$(this).mouseover(function(){
			var index = $(this).index();
			let $a = $(this).children();
			let $i = $(this).children('p').children('i');
			let $p = $(this).children('p');
			let $img = $(this).children('p').children('img');
			$(this).css('background','#000000');
			$p.stop().animate({'left':10},500)
			$a.css('color','#fff')
			$i.css('color','#fff')
			$('.listOne').stop().show(500)
		})
		$(this).mouseout(function(){
			let $a = $(this).children();
			let $i = $(this).children('p').children('i');
			let $p = $(this).children('p');
			let $div = $(this).children('.listOne')
			$p.stop().animate({'left':0},200)
			$(this).css('background','');
			$a.css('color','')
			$i.css('color','')
			$div.stop().hide(200)
		
		})
	})
	let $list = $('.listOne ')
}hover();
/*--------------------------------左导航结束--------------------------------------------------*/

function banner(){
	var index = 0;
	var timer= setInterval(autoPlay,3000);
	var $lis = $("#banner ul li");
	var $img = $('#banner .ban_pic')
	function autoPlay(){
		index++;
		if( index == $lis.size()){
			index = 0;
		}
		$lis.removeClass().addClass('out');
		$lis[index].className = 'over';
		$img.stop().fadeOut(2000);
		$img.eq(index).fadeIn(2000);
	}
	$("#banner").mouseenter(function(){
		clearInterval(timer);
	})
	$("#banner").mouseleave(function(){
		timer= setInterval(autoPlay,3000);
	})
	$("#banner ul li").mouseenter(function(){
		index =$(this).index()-1;
		autoPlay();
	});
}banner();

/*--------------------------轮播图结束-----------------------------------------------------*/

function cart(){
	$lis = $('.title ul li');
	$p = $('#new,#family,#mtbd,#flo');
	$lis.removeClass().addClass('border');
	$lis.eq(0).removeClass().addClass('enter');
	$p.removeClass().addClass('hide');
	$p.eq(0).removeClass().addClass('show')
	$lis.each(function(){
		$(this).hover(function(){
			let index = $(this).index();
			$lis.removeClass().addClass('border');
			$lis.eq(index).removeClass().addClass('enter');
			$p.removeClass().addClass('hide');
			$p.eq(index).removeClass().addClass('show')
		})
	})
}cart();

/*-----------------------------右边选项卡结束--------------------------------------------*/

function vidio(){
	var $v = $('#hd_zpp .zpp_right .vidio img');
	$v.hover(function(){
		$(this).animate({width : 35,height : 35},500)
	},function(){
		$(this).animate({width : 40,height : 40},500)
	})
}vidio();
/*---------------------短视频暂停标志结束--------------------------------*/
function prolb(){
	$a = $('#pro_lb>ul>li>a')
//	console.log($a)
	$uls = $('#lb_product>ul')
	var index = 0;
	var timer= setInterval(autoPlay,3000);
	$a.removeClass().addClass('out')
	$a.eq(0).removeClass().addClass('hov');
	$uls.addClass('hide')
	$uls.eq(0).removeClass()
	function autoPlay(){
		index ++;
		if( index === $a.size()){
			index = 0;
		}
		$a.addClass('out');
		$a.eq(index).removeClass('out') ;
		$uls.eq(index).fadeIn().siblings().stop().fadeOut();
	}
	$("#pro_lb").mouseenter(function(){
		clearInterval(timer);
	})
	$("#pro_lb").mouseleave(function(){
		timer= setInterval(autoPlay,3000);
	})
	$("#pro_lb ul li a").mouseenter(function(){
		index =$(this).index()-1;
		autoPlay();
	});
}prolb()

/*--------------------产品轮播图结束------------------------*/
function cartList(){
		$h = $('.sell_right>ul>li');
		$a = $('.sell_right>ul>li>a');
		$d = $('.sell_right li:has(ul) ul');
		$h.each(function(){
			$h.eq(0).find($d).show();
			$(this).siblings().find($d).hide();
			$h.eq(0).find($a).hide();
			$(this).siblings().find($a).show();
			$(this).hover(function(){
				$(this).find($d).show();
				$(this).find($a).hide();
				$(this).siblings().find($d).hide();
				$(this).siblings().find($a).show();
			})
		})
}cartList()
/*  -----------右产品选项卡结束------------  */

function pplist(){
	var $ppimg = $('#add_left ul li img')
	$ppimg.each(function(){
		$(this).hover(function(){
			$(this).css({'width':'135'})
		},function(){
			$(this).css({'width':'130'})
		})
	})
}pplist()
