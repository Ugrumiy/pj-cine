//Модальная форма
$('.show-modal-form').on('click',function(){
	$('#modal-block').show()
})
$('#modal-block').on('click', function(event){
	$(this).hide();
})
$('#modal-form').on('click', function(event){
	event.stopPropagation();
})
$('#modal-form').on('submit', function(event){
	$('#modal-block').hide();
})

$(document).ready(function(){
    $(document).keyup(function(event) { 
        if (event.keyCode == 27 && $('#modal-block').is(':visible') ) { // esc keycode
           $('#modal-block').hide()
        }
    });
});

//Инициализация мобильного меню
	$(function(){
		$('#menu').slicknav({
			prependTo:'#page-header'

			
		});
	});
  
/*
//Отправка формы через PHPmailer
$('form').on('submit',function(){

 	var formData = $(this).serialize();

 	$.ajax({
	    type: 'POST',
	    url: 'phpmailer/examples/gmail.php',
	    data: formData,
	    success: function(){
	    	showHideFormSendResult($('#message-submit-success'))
	    },
	    error: function(){
	    	showHideFormSendResult($('#message-submit-error'))
	    }
	});
 	return false;
 })
//Подтверждение отправки
function showHideFormSendResult(item){
	    	item.animate({
	    		left: '+=407'
	    	})
	    	.delay(4000)
	    	.animate({
	    		left: '-=407'
	    	})
}
*/
//Валидация телефонов и маска
jQuery(function($){
   $('input[name="phonenumber"]').mask("+7 (999) 999-9999");
});