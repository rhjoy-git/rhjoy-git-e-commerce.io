$(document).ready(function () {
	"use strict";
	// i. client (carousel)
	$('#client').owlCarousel({
		items: 4,
		loop: true,
		smartSpeed: 1000,
		autoplay: true,
		dots: false,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			400: {
				items: 2
			},
			450: {
				items: 3
			},
			576: {
				items: 4
			},
			768: {
				items: 5
			},
			1000: {
				items: 3

			},
			1200: {
				items: 4
			}
		}
	});


	$('.play').on('click', function () {
		owl.trigger('play.owl.autoplay', [1000])
	})
	$('.stop').on('click', function () {
		owl.trigger('stop.owl.autoplay')
	});

	// i. serviceOffer (carousel)
	$('#service').owlCarousel({
		items: 4,
		loop: true,
		smartSpeed: 1000,
		autoplay: true,
		dots: false,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			415: {
				items: 2
			},
			600: {
				items: 3

			},
			1200: {
				items: 4
			}
		}
	});


	$('.play').on('click', function () {
		owl.trigger('play.owl.autoplay', [1000])
	})
	$('.stop').on('click', function () {
		owl.trigger('stop.owl.autoplay')
	})
});