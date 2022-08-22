
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
				$(".selectedImages").html('');
				$(".selectedImages").append(`<img class="image-review" src ="${resultPath}" />`);
				if (files.mime != 'directory') {
					$(".image-input-path").val(resultPath);
					$(".image-input-thumbnailPath").val(thumbnailPath);
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
		console.log(fm)
	});
});
