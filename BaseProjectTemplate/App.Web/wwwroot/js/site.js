$(function () {
	// tinnq
	// Tự động ẩn cảnh báo sau 4 giây
	$(".alert.js-alert").delay(4000).slideUp(300, function () {
		$(this).alert('close');
	});
});