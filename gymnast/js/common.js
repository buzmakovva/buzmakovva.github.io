$(function() {
$('.popup-with-move-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
	});
$(".callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(".success").addClass("visible");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
				$(".success").removeClass("visible");
				$.magnificPopup.close();
			}, 3000);
		});
		return false;
	});
$(".phonemasked").each(function () {
    $(this).mask('+7 (999) 999-99-99');
});
$(".datemasked").each(function () {
    $(this).mask("99.99.9999", {placeholder: "дд.мм.гггг" });
});
const element =  document.querySelector('.text-banner')
element.classList.add('animated', 'fadeInLeft')

});
