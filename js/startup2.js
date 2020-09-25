$(document).ready(function () {
	//Guardamos la posición de pantalla de cada seccion en una variable
	var top = $('#top').offset().top,
		nosotros = $('#nosotros').offset().top,
		servicios = $('#servicios').offset().top,
		team = $('#team').offset().top,
		planes = $('#planes').offset().top;
	reseñas = $('#reseñas').offset().top;
	contacto = $('#contacto').offset().top;

	//Accedemos al elemento a con id="btn-nosotros" para que al darle click ejecuta el callback
	$('#boton-home').on('click', function (e) {
		e.preventDefault(); //Esto para evitar un '#' en nuestra URL al ejecutar el callback
		$('html, body').animate({
			scrollTop: top
		}, 500);
	});

	$('#boton-nosotros').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: nosotros - 60
		}, 500);
	});

	$('#boton-servicios').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: servicios - 60
		}, 500);
	});

	$('#boton-team').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: team - 60
		}, 500);
	});

	$('#boton-planes').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: planes - 60
		}, 500);
	});

	$('#boton-reseñas').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: reseñas - 60
		}, 500);
	});

	$('#boton-contacto').on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto
		}, 500);
	});
});