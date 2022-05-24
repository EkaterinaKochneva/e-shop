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

	  const swiperProductThumbs = new Swiper('.product-thumbs__swiper', {

		slidesPerView: 'auto',
		spaceBetween: 15,

	  });

	  const swiperProduct = new Swiper('.product-slider__swiper', {

		slidesPerView: 1,
		draggable: true,

		thumbs: {
			swiper: swiperProductThumbs,
		  },
	  });


// Аккардион FAQ

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


// Tabs

		$('.tabs__caption').on('click', '.tabs__btn:not(.active)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.tabs').find('.tabs__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

		});

// Фильтр категории

	$('.filter-btn-js').click(function () {
		$('.category-filter').addClass('active');
	});
	$('.category-filter__close-btn--js').click(function () {
		$('.category-filter').removeClass('active');
	});

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

// Прокрутка наверх страницы
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 100) {
    $('.button-up').addClass('scroll');
    } else {
    $('.button-up').removeClass('scroll');
    }
    });
    $('.button-up').click(function(){
    $('body,html').animate({
    scrollTop: 0
    }, 500);
    return false;
});