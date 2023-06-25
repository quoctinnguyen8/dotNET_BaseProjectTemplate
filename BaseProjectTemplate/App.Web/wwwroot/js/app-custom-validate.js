// Đặt file này sau unobtrusive.js

$.validator.addMethod(
	"min",
	function (value, element) {
		let minVal = element.getAttribute("data-min");
		return Number(value) >= Number(minVal);
	}
);
$.validator.unobtrusive.adapters.addBool('min');

$.validator.addMethod(
	"max",
	function (value, element) {
		let maxVal = element.getAttribute("data-max");
		return Number(value) <= Number(maxVal);
	}
);
$.validator.unobtrusive.adapters.addBool('max');
