@@include('_webp.js')
@@include('_slick.js')
@@include('_wow.min.js')


$(document).ready(function () {
	new WOW().init();

	// Слайдер 1
	$('.slick-gallery').slick({
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 300,
		lazyLoad: 'ondemand',
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
	// Слайдер 2
	$('.slick-gallery-1').slick({
		dots: true,
		infinite: true,
		arrows: false,
		// autoplay: true,
		autoplaySpeed: 5000,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	// Слайдер 3
	$('.reviews-slider').slick({
		dots: true,
		infinite: true,
		arrows: false,
		speed: 300,
		slidesToShow: 1,
		adaptiveHeight: true
	})

	// Мобильное меню
	$('.hamburger').click(function () {
		$('.hamburger').toggleClass('is-active');
		$('.header__menu').toggleClass('show');
	});
	// Действия при клике на Hamburger-Button
	$('.header__menu a').click(function () {
		$('.hamburger').removeClass('is-active');
		$('.header__menu').removeClass('show');
	});

	// Добавление класса к header при прокрутке
	$(window).scroll(function () {
		if ($(this).scrollTop() > 190) {
			$('.header').addClass('to-fixed');
		} else {
			$('.header').removeClass('to-fixed');
		}
	});

	// Активные ссылки меню
	var sections = $('section')
		, nav = $('#top-menu nav')
		, nav_height = nav.outerHeight();

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop();

		sections.each(function () {
			var top = $(this).offset().top - nav_height -15,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				nav.find('a').removeClass('active');
				sections.removeClass('active');

				$(this).addClass('active');
				nav.find('a[href="/#' + $(this).attr('id') + '"]').addClass('active');
			}
		});
	});

	$("body").on('click', '[href*="#"]', function (e) {
		var fixed_offset = 20;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
		e.preventDefault();
	}); 

});