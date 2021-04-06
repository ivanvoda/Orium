$(document).ready(function() {
	if(window.location.href.indexOf("account#customer_orders") > 0){
		$("[data-link='account/orders']").addClass("active");
	}
});

$('.ik-marquee h2').marquee({
	speed: 120,
	gap: 0,
	delayBeforeStart: 0,
	direction: 'left',
	duplicated: true,
	pauseOnHover: false
});

$('.home-slider-wrapper .main-pane').slick({
	dots: false,
	arrows: true,
	infinite: true,
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 4,
	centerMode: true,
	centerPadding: '70px',
	adaptiveHeight: true,
	prevArrow: '<button class="slick-prev slick-arrow"><svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.475 12.5362L35.475 12.6362H35.375L3.50593 12.6362L14.3299 22.1198L14.4053 22.1859L14.339 22.2612L13.6298 23.0661L13.5638 23.1409L13.4888 23.0752L0.934097 12.0755L0.848251 12.0003L0.934093 11.9251L13.4888 0.924787L13.5639 0.859026L13.6298 0.933939L14.3391 1.73993L14.4053 1.81516L14.3299 1.88121L3.50594 11.3643L35.375 11.3643H35.475L35.475 11.4643L35.475 12.5362Z" fill="#1D1D1D" stroke="#1D1D1D" stroke-width="0.2"/></svg></button>',
	nextArrow: '<button class="slick-next slick-arrow"><svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.275 12.5362L0.275 12.6362H0.375L32.2441 12.6362L21.4201 22.1198L21.3447 22.1859L21.411 22.2612L22.1202 23.0661L22.1862 23.1409L22.2612 23.0752L34.8159 12.0755L34.9017 12.0003L34.8159 11.9251L22.2612 0.924787L22.1861 0.859026L22.1202 0.933939L21.4109 1.73993L21.3447 1.81516L21.4201 1.88121L32.2441 11.3643L0.375 11.3643H0.275L0.275 11.4643L0.275 12.5362Z" fill="#1D1D1D" stroke="#1D1D1D" stroke-width="0.2"/></svg></button>',
	responsive: [
		{
			breakpoint: 990,
			settings: {
				arrows: true,
				centerPadding: '15px',
				slidesToShow: 1
			}
		}
	]
});

$(".ik-product-accord .item-title").click(function () {
	$(this).next().slideToggle();
	$(this).toggleClass("is--active");
});

$(".ik-product-landing .img_slider").slick({
	dots: false,
	arrows: false,
	infinite: true,
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 1,
	centerMode: true,
	centerPadding: '70px',
	adaptiveHeight: true,
	responsive: [
		{
			breakpoint: 990,
			settings: {
				centerPadding: '30px',
				slidesToShow: 1
			}
		}
	]
})

$(".ik-sub-wrap .ik-item .wrapper").click(function() {
	$(this).closest(".ik-sub-wrap").find(".ik-item").removeClass("is_active");;
	$(this).closest(".ik-item").addClass("is_active");
	// subscription_item
	// onetime_item
	if($(this).closest(".ik-item").attr("id") == "subscription_item") {
		$("[data-selector-subsave]").find(".rc_widget__option__label").click();
	} else {
		$("[data-selector-onetime]").find(".rc_widget__option__label").click();
	}
});

$(".variant_wrap .variant_item").click(function() {
	$(this).closest(".variant_wrap").find(".input_option").removeClass("is_active");;
	$(this).find(".input_option").addClass("is_active");
});

$(document).on('change', '.variant_wrap select', function() {
	var option_value = $(this).closest("select").val();
	console.log(option_value);
	$("[data-plans-dropdown] option").each(function(i, item) {
		console.log(option_value + ", " + $(this).html());
		if($(this).html() == option_value) {
			$("[data-plans-dropdown]").find("option").removeAttr("selected");
			$(this).attr("selected", "selected");
		}
	});
});

$(".faq-block-item .block-item-title").click(function() {
	if($(this).hasClass("is-active")) {
		$(".faq-block-item").find(".block-item-title").removeClass("is-active");
		$(".faq-block-item").find(".block-item-title").next().slideUp();
	} else {
		$(".faq-block-item").find(".block-item-title").removeClass("is-active");
		$(".faq-block-item").find(".block-item-title").next().slideUp();
		$(this).toggleClass("is-active");
		$(this).next().slideToggle();
	}
});