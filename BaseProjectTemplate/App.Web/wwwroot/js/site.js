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

$(document).on("click", ".js-GetIdUserLock", function (ev) {
	ev.preventDefault();
	var id = $(ev.currentTarget).attr("data-id");
	var form = $("#formBlockUser");

	$(".js-lock-user").on("click", (ev) => {
		ev.preventDefault();
		var model = {
			Minute: form.find("#Minute").val(),
			Hour: form.find("#Hour").val(),
			Day: form.find("#Day").val(),
			Month: form.find("#Month").val(),
			Year: form.find("#Year").val(),
			IdUserBlock: id
		}
		$.ajax({
			type: "POST",
			url: "/User/BlockUser",
			data: model,
			dataType: "json",
			success: function (res) {
				if (res == true) {
					location.href = "/User";
				}
				else {
					SetErrorMesg("Tài khoản không tồn tại hoặc đã được khóa trước đó");
					location.href = "/User"
				}
			}

		});
	})
});