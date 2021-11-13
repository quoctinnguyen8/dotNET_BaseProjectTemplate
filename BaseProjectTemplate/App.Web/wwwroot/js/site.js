$(function () {
	// tinnq
	// Tự động ẩn cảnh báo sau 4 giây
	$(".alert.js-alert").delay(4000).slideUp(300, function () {
		$(this).alert('close');
	});
});

$(document).on("click", ".js-delete-confirm", function (ev) {
	ev.preventDefault();
	let msg = $(this).data('msg');
	if (!msg) {
		msg = 'Xác nhận xóa';
	}
	confirm(msg, () => {
		location.href = $(this).attr("href");
	});
});