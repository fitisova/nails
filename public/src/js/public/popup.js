import Inputmask from "inputmask";

$(document).ready(function ($) {
	$('.popup-open').click(function () {
		$('.popup-fade').fadeIn();
		return false;
	});

	$('.popup-close').click(function () {
		$(this).parents('.popup-fade').fadeOut();
		return false;
	});

	$(document).keydown(function (e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.popup-fade').fadeOut();
		}
	});

	$('.popup-fade').click(function (e) {
		if ($(e.target).closest('.popup').length == 0) {
			$(this).fadeOut();
		}
	});
});

const im = new Inputmask("+7 (999) 999-99-99");
im.mask(document.querySelector(".inputPhone"));


document.querySelector(".popup__btn").onclick = () => {
	let phone = document.querySelector(".inputPhone").value;
	let id_price = document.querySelector(".popup-select").value;
	let name = document.querySelector(".inputFIO").value;
	if (phone.length == 18 && phone.indexOf( '_' ) == -1 ) {
		fetch("/addUser", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json;charset=utf-8'
			},
			body: JSON.stringify({
				phone: phone,
				name:name,
				id_price:id_price
			})
		}).then(res => {
			if (res.status == 200) {
				alert("Операция завершина успешно");
				document.location.reload();
			} else {
				alert("Что-то пошло не так");
				document.location.reload();
			}
		});
	} else {
		alert("Пожалуйста убедитесь в правильности написания номера");
	}
	
}