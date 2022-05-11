window.onload = function () {

	$(".header-search-btn").click(function (e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".body-header__search").slideToggle().find('input').focus();
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