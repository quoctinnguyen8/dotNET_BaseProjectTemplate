$(document).on("click", ".js-block", (ev) => {
	$('#modal-block').html("");
	var id = $(".js-block").attr("data-id");
	$.get("/User/_BlockUser/" + id, (ev) => {
		$('#modal-block').append(ev);
	})
})
$(document).on("click", ".js-succes-block", () => {
	var id = $(".id-user").html();
	var blocktodate = $(".js-date").val();
	var permanentblock = $('.js-check').is(":checked")
	var data = {
		id: id,
		blockedTo: blocktodate,
		permanentblock: permanentblock,
	}
	if (blocktodate == "" && permanentblock == false) {
		$(".js-message").html("Phải chọn 1 trong 2 mục để thực hiện khóa")
	}
	else {
		$.post("/User/_BlockUser", data, (ev) => {
			window.location.reload(true);
		})
    }
})