$(function () {
	// tinnq
	// Tự động ẩn cảnh báo sau 4 giây
	$(".alert.js-alert").delay(4000).slideUp(300, function () {
		$(this).alert('close');
	});
});

$(document).on("click", ".js-delete-confirm", function (ev) {
	ev.preventDefault();
	let btnDelete = $(this);
	let msg = btnDelete.data('msg');
	let mode = btnDelete.data('mode');
	if (!msg) {
		msg = 'Xác nhận xóa?';
	}

	confirm(msg, () => {
		if (mode == "submit") {
			let form = btnDelete.closest("form");
			if (form.valid()) {
				form.submit();
			}
		}
		else {
			location.href = $(this).attr("href");
		}
	});
});