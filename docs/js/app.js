window.onload = function () {

	// Кнопки в шапке

	$(".header-search-btn").click(function (e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".body-header__search").slideToggle().find('input').focus();
	});

	$(".mob-phone-js").click(function (e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".body-header__column--info--js").slideToggle();
	});

	$(".catalog-btn-js").click(function (e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".catalog-header__content").slideToggle();
	});

	$(".catalog-header__close-btn--js").click(function (e) {
		e.preventDefault();
		$(".catalog-header__content").slideToggle();
	});

	// Слайдеры

	const swiper = new Swiper('.top-slider__swiper', {
		loop: true,
		autoplay: {
			delay: 5000,
		  },

		pagination: {
		  el: '.top-slider__pagination',
		  clickable: true,
		},
		slidesPerView: 1,
	  });

	  const swiperNew = new Swiper('.products-slider__swiper', {
		slidesPerView: 1,		
		loop: true,		
		breakpoints: {
			1401: {
				slidesPerView: 5,
				spaceBetween: 30,
				autoHeight: true,
			},
			1199: {
				slidesPerView: 4,
				spaceBetween: 20,
				autoHeight: true,
			},
			991: {
				slidesPerView: 3,
				autoHeight: true,
			},
			767: {
				slidesPerView: 2,
			}
		},
		
		navigation: {
			hide: false,
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		  },
		scrollbar: {
		hide: false,
		el: '.products-slider__scrollbar',
		draggable: true,

		},

	  });

	  const swiperExpertHelp = new Swiper('.expert-help__swiper', {

		slidesPerView: 1,

		pagination: {
		  el: '.expert-help__pagination',
		  clickable: true,
		},

	  });


// Аккардион FAQ


	//   $('.faq__btn').click(function () {
	// 	$(this).toggleClass("active");
	// 	$(this).parent().next().slideToggle();
	// });

		$('.faq__btn').click(function(){
			if(!$(this).hasClass('active')){	
				$(this).parents('.faq__wrapper').find('.faq__btn').removeClass('active'); 
				$(this).parents('.faq__wrapper').find('.faq__answer').slideUp(); 
				$(this).addClass('active');	
				$(this).parent().next().slideDown();	
			} else {	
				$(this).removeClass('active');
				$(this).parent().next().slideUp();
			}
		});
	

// Фильтр категории


    $('.category-filter__title').click(function () {
		$(this).toggleClass("active");
		let parent = $(this).parents('.category-filter__item');
		parent.children(".category-filter__body").slideToggle();
	});


	function currencyFormat(num) {
		return num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
	} // currencyFormat(num)

	$(".range-wrap").each(function () {
		let _this = $(this);

		var $range = _this.find(".range-slider-js");
		var $inputFrom = _this.find(".input_from");
		var $inputTo = _this.find(".input_to");

		var instance,
				from,
				to,
				min = $range.data('min'),
				max = $range.data('max');
		$range.ionRangeSlider({
			skin: "round",
			type: "double",
			grid: false,
			grid_snap: false,
			hide_min_max: true,
			hide_from_to: true,
			onStart: updateInputs,
			onChange: updateInputs,
			onFinish: updateInputs
		});
		instance = $range.data("ionRangeSlider");

		function updateInputs(data) {
			from = data.from;
			to = data.to;
			$inputFrom.prop("value", currencyFormat(from));
			$inputTo.prop("value", currencyFormat(to)); // InputFormat();
		}

		$inputFrom.on("change input ", function () {
			var val = +$(this).prop("value").replace(/\s/g, ''); // validate

			if (val < min) {
				val = min;
			} else if (val > to) {
				val = to;
			}

			instance.update({
				from: val
			});
			$(this).prop("value", currencyFormat(val));
			console.log(val);
		});
		$inputTo.on("change input ", function () {
			var val = +$(this).prop("value").replace(/\s/g, ''); // validate

			if (val < from) {
				val = from;
			} else if (val > max) {
				val = max;
			}

			instance.update({
				to: val
			});
			$(this).prop("value", currencyFormat(val));
		});
	});

}