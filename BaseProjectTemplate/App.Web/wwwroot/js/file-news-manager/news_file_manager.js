
$(document).ready(function () {
	$('.btn-elfinder').click(function (e) {
		var fm = $('<div/>').dialogelfinder({
			url: '/file-manager/connector',
			baseUrl: "/lib/elfinder/",
			lang: 'vi',
			width: 840,
			height: 450,
			destroyOnClose: true,
			getFileCallback: function (files, fm) {
				var domain = window.location.origin + "/";
				let result = files.url.replace(domain, "/");
				let maskLink = files.tmb.replace(domain, "/");

				document.getElementById('selectedImages').innerHTML = "";
				$('#selectedImages').append(`<img class="image-review" src ="${result}" />`);

				if (files.mime != 'directory') {
					$("#PathImagePost").val(result);
					$("#StampLink").val(maskLink);
					fm.destroy();
					return false;
				}
			},
			commandsOptions: {
				getfile: {
					oncomplete: 'close',
					folders: false
				}
			}
		}).dialogelfinder('instance');
	});
});
