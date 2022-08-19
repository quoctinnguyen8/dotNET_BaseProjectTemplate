
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
				let resultPath = files.url.replace(domain, "/");
				let thumbnailPath = files.tmb.replace(domain, "/");
				document.getElementById('selectedImages').innerHTML = "";
				$('#selectedImages').append(`<img class="image-review" src ="${resultPath}" />`);
				if (files.mime != 'directory') {
					$("#CoverImgPath").val(resultPath);
					$("#CoverImgThumbnailPath").val(thumbnailPath);
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
