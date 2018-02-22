jQuery(document).ready(function ($) {
	// fixed navbar on scroll and display backtotop
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 270) {
			$(".navbar, .nav-mobile").addClass('fixed-top');
			$(".backtotop").addClass('visible');

		} else {
			$(".navbar, .nav-mobile").removeClass('fixed-top');
			$(".navbar, .nav-mobile").addClass('was-fixed');
			$(".backtotop").removeClass('visible');
		}
	});
	//init owl carousel
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000

	});
	//display answer faq on click
	$(".q-icon").click(function () {
		if ($(this).parent().is(".active")) $(".question-item.active").removeClass("active"), $(".answer-item.active").hide()
			.removeClass("active"), $(".questions").css("display",
				"block");
		else {
			var e = $(this).parent().index() + 1;
			$(".answers").css("display", "inline-block"), $(".questions").css("display",
					"inline-block"), $(".question-item.active").removeClass(
					"active"), $(this).parent().addClass("active"), $(".answer-item.active")
				.hide().removeClass("active"), $(".answer-item:nth-child(" + e + ")").fadeIn(
					600).addClass("active");
		}
	});
	//toggle nav-mobile  on click
	$(".toggler").click(function () {
		$(".collapse-div").toggle(200, "linear");
	});
	//anchor links
	$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function (event) {
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
				location.hostname == this.hostname
			) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					event.preventDefault();
					$('html, body').animate({
						scrollTop: target.offset().top - 48
					}, 1000);
				}
			}
		});
});