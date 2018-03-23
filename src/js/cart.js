function hdcart(){
	$.getJSON('../src/js/cart.json',function(hdata){
		var hdli = ""
		for(var hdys in hdata){
			hdli += `<ul>
						<li><img src="${hdata[hdys].img}"/></li>
						<li><a href="javascript:;">${hdata[hdys].hdp}</a></li>
						<li><span>${hdata[hdys].hdprice}</span></li>
					 </ul>`
		}
		$('.hdrecommend .tuijian').html(hdli)
	})
}hdcart();


$(function(){
	
})
