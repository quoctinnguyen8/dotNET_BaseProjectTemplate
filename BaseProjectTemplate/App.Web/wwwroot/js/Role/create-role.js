$(document).ready(function () {
	let inpListIdPer = $('#PermissionIds');
	let arrIdPer = [];

	$('.check-permission').change(function(ev) {
		let idPer = $(ev.currentTarget).attr('data-id');
		if ($(this).is(':checked') && arrIdPer.indexOf(idPer) < 0) {
			arrIdPer.push(idPer);
		}
		else {
			arrIdPer.splice(arrIdPer.indexOf(idPer), 1 );
		}
		inpListIdPer.val(arrIdPer.join(','));
		autoChangeCheckAll(this);
	});

	// sự kiện cho checkbox 'chọn tất cả'
	$('.check-all').change(function (ev) {
		let parent = $(this).closest('.js-group-permission');
		let checkboxes = parent.find('.check-permission');
		if ($(this).is(':checked')) {
			checkboxes.prop('checked', true).change();
		} else {
			checkboxes.prop('checked', false).change();
		}
	});

	// khởi tạo layout masonry
	$('.js-masonry').masonry({
		itemSelector: '.js-group-permission',
		columnWidth: '.col-xl-3',
		percentPosition: true,
	});
});

// tự thay đổi trạng thái checkbox 'chọn tất cả'
function autoChangeCheckAll(checkbox) {
	let parent = $(checkbox).closest('.js-group-permission');
	let checkboxes = parent.find('.check-permission');
	let checkAll = parent.find('.check-all');
	for (var i = 0; i < checkboxes.length; i++) {
		if (!$(checkboxes[i]).is(':checked')) {
			if (checkAll.is(':checked')) {
				checkAll.prop('checked', false);
			}
			return;
		}
	}
	checkAll.prop('checked', true);
}