$(function(){
	$(".home").click(function(){
		$.scrollTo('.carousel',500);
	});
	$(".pb").click(function(){
		$.scrollTo('.privateBroadcast',800);
		$(".navbar-toggler").click();
	});
	$(".fs").click(function(){
		$.scrollTo('.friendSoc',1000);
		$(".navbar-toggler").click();
	});
	$(".rc").click(function(){
		$.scrollTo('.roadConditions',1200);
		$(".navbar-toggler").click();
	});
	$(".pw").click(function(){
		$.scrollTo('.photowall',1200);
		$(".navbar-toggler").click();
	});
	$(".cu").click(function(){
		$.scrollTo('.contactUs',1200);
		$(".navbar-toggler").click();
	});
	$("#animation_1").click(function(){
		$.scrollTo('.privateBroadcast',800);
	});
	$("#animation_2").click(function(){
		$.scrollTo('.friendSoc',1000);
	});
	$("#animation_3").click(function(){
		$.scrollTo('.roadConditions',1200);
	});
	$("#animation_4").click(function(){
		$.scrollTo('.photowall',1200);
	});
});