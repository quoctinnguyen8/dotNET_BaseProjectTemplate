$(document).ready(function () {
	let inpListIdPer = $('#listCheckedPermission');
	let arrIdPer = [];
	$('.check-permission').change(ev => {
		let idPer = $(ev.currentTarget).attr('data-id');
		if (arrIdPer.includes(idPer)) {
			arrIdPer = arrIdPer.filter(item => item !== idPer);
		}
		else {
			arrIdPer.push(idPer);
		}
		inpListIdPer.val(arrIdPer.join(','));
	});
});