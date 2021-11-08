$(function () {
	// tinnq
	// Tự động ẩn cảnh báo sau 5 giây
	$(".alert.js-alert").delay(5000).slideUp(500, function () {
		$(this).alert('close');
	});
});