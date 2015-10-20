$(document).ready(function() {
		//Button Functions
		$('#add-furniture').click(function() {
			$('.customize-furniture').toggle();
		});
		$('#change-room').click(function() {
			$('.room-changer').toggle();
		});
	//Room Image Changer
		$('#room-form').submit(function(event) {
    		$('.room-photo').attr("src", $('#room-url').val());
    		event.preventDefault();
    		$('#room-url').val("");
    		$('.room-changer').css('display','none')
    	});
    //Furniture Image Changer
	
		$('#furniture-changer').submit(function(event) {
    		$('#furniture-piece-index').attr("src", $('.customize-furniture-input').val());
    		event.preventDefault();
    		$('#room-url').val("");
    		$('.room-changer').css('display','none')
    	});	


		//Furniture Manipulation
		$('#furniture-box-index').resizable({alsoResize: '#furniture-piece-index'});
		$('#furniture-box-index').draggable();
		
		
	});




/*
$('#add-furniture').click(function(){
		var $furnitureurl = $('.customize-caption').last().clone(true),
			$input = $furnitureurl.find('input'),
			index = $input.data('index') + 1;
		$input.data('index', index);
		$input.val(null);
		$furnitureurl.appendTo('#furniture-url-addition');
		var $furnitureBox = $('.furniture-box').clone(false);
		var $furniturePic = $('#furinture-piece').clone(false);
		$furnitureBox.attr('id', 'furniture-box-' + index);
		$furnitureBox.css('top', 0).css('left', 0);
		$furnitureBox.appendTo('.room-box');
		$furniturePic.attr('class', 'furniture-piece-' + index)
	})
*/