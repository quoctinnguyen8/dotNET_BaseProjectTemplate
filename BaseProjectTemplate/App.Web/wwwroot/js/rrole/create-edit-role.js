var isUpdatePage = false;
var inpListIdPer = $('#PermissionIds');
var arrIdPer = [];

var inpDeletedId = $('#DeletedPermissionIds');
var inpAddedId = $('#AddedPermissionIds');
var deletedIds = [];
var addedIds = [];

$(document).ready(function () {
	// khởi tạo layout masonry
	$('.js-masonry').masonry({
		itemSelector: '.js-group-permission',
		columnWidth: '.js-group-permission',
		percentPosition: true,
	});

	// Logic ở trang update
	if (inpListIdPer.val()) {
		isUpdatePage = true;		// nếu có dữ liệu thì đánh dấu là trang sửa
		arrIdPer = inpListIdPer.val().split(',');
		arrIdPer.forEach((id, i) => {
			var checkbox = $(`.check-permission[data-id="${id}"]`).prop('checked', true);
			autoChangeCheckAll(checkbox);
		});
	}
});

// Sự kiện check cho cả trang thêm và sửa
$('.check-permission').change(function (ev) {
	let idPer = $(ev.currentTarget).attr('data-id');
	if (isUpdatePage) {
		// Xóa item trong mảng added và deleted nếu có
		function removeUpdatedId() {
			let i_addedId = addedIds.indexOf(idPer);
			if (i_addedId >= 0) {
				addedIds.splice(i_addedId, 1);
			}
			let i_deletedId = deletedIds.indexOf(idPer);
			if (i_deletedId >= 0) {
				deletedIds.splice(i_deletedId, 1);
			}
		}

		if (arrIdPer.includes(idPer)) {
			removeUpdatedId();
			if (!$(this).is(':checked')) {
				deletedIds.push(idPer);
			}
		} else {
			removeUpdatedId();
			if ($(this).is(':checked')) {
				addedIds.push(idPer);
			}
		}
		inpDeletedId.val(deletedIds.join(','));
		inpAddedId.val(addedIds.join(','));
	}
	else {
		if ($(this).is(':checked') && arrIdPer.indexOf(idPer) < 0) {
			arrIdPer.push(idPer);
		}
		else {
			arrIdPer.splice(arrIdPer.indexOf(idPer), 1);
		}
		inpListIdPer.val(arrIdPer.join(','));
	}
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