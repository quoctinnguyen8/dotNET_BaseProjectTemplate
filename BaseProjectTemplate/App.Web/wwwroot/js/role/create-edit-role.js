var inpListIdPer = $('#PermissionIds');
var arrIdPer = [];

var inpDeletedId = $('#DeletedPermissionIds');
var inpAddedId = $('#AddedPermissionIds');
var deletedIds = [];
var addedIds = [];

const IS_UPDATE_PAGE = inpDeletedId.length;

if (IS_UPDATE_PAGE) {
	// Ràng buộc dữ liệu đặc biệt cho trang update
	// Nếu xóa hết permission thì không cho lưu
	$.validator.addMethod(
		"deleteAllPermission",
		function (value, element) {
			deletedIds.sort();
			arrIdPer.sort();
			if (addedIds.length > 0) {
				return true;
			}
			return !(deletedIds.length === arrIdPer.length && deletedIds.every((value, index) => value === arrIdPer[index]));
		}
	);
	$.validator.unobtrusive.adapters.addBool('deleteAllPermission');
}


$(document).ready(function () {
	// khởi tạo layout masonry
	$('.js-masonry').masonry({
		itemSelector: '.js-group-permission',
		columnWidth: '.js-group-permission',
		percentPosition: true,
	});

	// Logic ở trang update
	if (IS_UPDATE_PAGE) {
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
	if (IS_UPDATE_PAGE) {
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
		inpListIdPer.val(arrIdPer.join(',')).valid();
	}
	autoChangeCheckAll(this);
});

$("form").on("reset", function (ev) {
	if (IS_UPDATE_PAGE) {
		setTimeout(() => {
			arrIdPer.forEach((id, i) => {
				var checkbox = $(`.check-permission[data-id="${id}"]`).prop('checked', true);
				autoChangeCheckAll(checkbox);
			});
			deletedIds = [];
			addedIds = [];
		}, 0);
	}
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

// tự thay đổi trạng thái checkbox 'chọn tất cả' khi thỏa mãn điều kiện
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