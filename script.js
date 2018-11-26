$(document).ready(function(){
	
	var pages = $('.page').length;
	$('.page').each(function(index){
		$(this).css('z-index', pages--);
	});
	$('.front').on('click', function(){
		var pageLength = $('.page').length;
		$(this).parent().css({'transform': 'rotateY(-180deg)', 'z-index': pageLength});
		$(this).parent().nextAll().each(function(index){
			$(this).css('z-index', pageLength-- -1);
		});
		var pageLength = $('.page').length;
		$(this).parent().prevAll().each(function(index){
			$(this).css('z-index', pageLength-- -1);
		});
	});
	
	$('.back').on('click', function(){
		var pageLength = $('.page').length;
		$(this).parent().css({'transform': 'rotateY(0)', 'z-index': pageLength});
		$(this).parent().nextAll().each(function(index){
			$(this).css('z-index', pageLength-- -1);
		});
		var pageLength = $('.page').length;
		$(this).parent().prevAll().each(function(index){
			$(this).css('z-index', pageLength-- -1);
		});
	});
});