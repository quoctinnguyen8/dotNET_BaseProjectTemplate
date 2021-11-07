/**
 * @author Script47 (https://github.com/Script47/Toast)
 * @description Toast - A Bootstrap 4.2+ jQuery plugin for the toast component
 * @version 1.2.0
 * Modified by tinnq 06/2021
/ **/
const TOAST_CONTAINER_HTML = `<div id="toast-container" class="toast-container" aria-live="polite" aria-atomic="true"></div>`;

const TOAST_DELAY_DEFAULT = 5000;

// 'top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center'
const TOAST_POSITION_DEFAULT = 'bottom-left';

const NotifyOption = {
	position: null,
	dismissible: true,
	stackable: true,
	pauseDelayOnHover: true,
	style: {
		toast: null,
		info: null,
		success: null,
		warning: null,
		error: null,
	},
	type: '',
	title: '',
	subtitle: null,
	content: null,
	delay: TOAST_DELAY_DEFAULT,
	img: null
};

window.toastRunningCount = 0;

$('body').on('hidden.bs.toast', '.toast', function () {
	$(this).remove();
});

function renderNotify() {
	/** No container, create our own **/
	if (!$('#toast-container').length) {
		const position = ['top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center'].includes(NotifyOption.position) ? NotifyOption.position : TOAST_POSITION_DEFAULT;

		$('body').prepend(TOAST_CONTAINER_HTML);
		$('#toast-container').addClass(position);
	}

	const EXPECTED_TYPE=['primary', 'info', 'success', 'warning', 'danger'];

	let toastContainer = $('#toast-container');
	let html = '';
	let classes = {
		header: {
			fg: '',
			bg: ''
		},
		subtitle: 'text-white',
		dismiss: 'text-white',
		bodyBorder:''
	};
	let id = NotifyOption.id || `toast-${window.toastRunningCount}`;
	let type = NotifyOption.type;
	let title = NotifyOption.title;
	let subtitle = NotifyOption.subtitle;
	let content = NotifyOption.content;
	let img = NotifyOption.img;
	let delayOrAutohide = NotifyOption.delay ? `data-delay="${NotifyOption.delay}"` : `data-autohide="false"`;
	let hideAfter = ``;
	let dismissible = NotifyOption.dismissible;
	let globalToastStyles = NotifyOption.style.toast;
	let paused = false;

	if (typeof NotifyOption.dismissible !== 'undefined') {
		dismissible = NotifyOption.dismissible;
	}

	if (EXPECTED_TYPE.includes(type)){
		classes.bodyBorder = type;
		classes.header.bg = NotifyOption.style.primary || `bg-${type}`;
		classes.header.fg = NotifyOption.style.primary || 'text-white';
	}
	else{
		classes.header.bg = NotifyOption.style.primary || 'bg-secondary';
		classes.header.fg = NotifyOption.style.primary || 'text-white';
	}

	if (NotifyOption.pauseDelayOnHover && NotifyOption.delay) {
		delayOrAutohide = `data-autohide="false"`;
		hideAfter = `data-hide-after="${Math.floor(Date.now() / 1000) + (NotifyOption.delay / 1000)}"`;
	}

	html = `<div id="${id}" class="toast ${globalToastStyles} overflow-hidden" role="alert" aria-live="assertive" aria-atomic="true" ${delayOrAutohide} ${hideAfter}>`;
	html += `<div class="toast-header ${classes.header.bg} ${classes.header.fg}">`;

	if (img) {
		html += `<img src="${img.src}" class="mr-2 ${img.class || ''}" alt="${img.alt || 'Image'}">`;
	}

	html += `<strong class="mr-auto">${title}</strong>`;

	if (subtitle) {
		html += `<small class="${classes.subtitle}">${subtitle}</small>`;
	}

	if (dismissible) {
		html += `<button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
					<span aria-hidden="true" class="${classes.dismiss}">&times;</span>
				</button>`;
	}

	html += `</div>`;

	if (content) {
		html += `<div class="toast-body border border-${classes.bodyBorder} rounded-bottom">
					${content}
				</div>`;
	}

	html += `</div>`;

	if (!NotifyOption.stackable) {
		toastContainer.find('.toast').each(function () {
			$(this).remove();
		});

		toastContainer.append(html);
		toastContainer.find('.toast:last').toast('show');
	} else {
		toastContainer.append(html);
		toastContainer.find('.toast:last').toast('show');
	}

	if (NotifyOption.pauseDelayOnHover) {
		setTimeout(function () {
			if (!paused) {
				$(`#${id}`).toast('hide');
			}
		}, NotifyOption.delay);

		$('body').on('mouseover', `#${id}`, function () {
			paused = true;
		});

		$(document).on('mouseleave', '#' + id, function () {
			const current = Math.floor(Date.now() / 1000),
				future = parseInt($(this).data('hideAfter'));

			paused = false;

			if (current >= future) {
				$(this).toast('hide');
			}
		});
	}

	window.toastRunningCount++;
}

const Toast = {
	show: (content, title, delay, position) => {
		NotifyOption.content = content;
		NotifyOption.title = !title || title == '' ? "Thông báo" : title;
		NotifyOption.delay = delay ? delay : TOAST_DELAY_DEFAULT;
		if (!position && position != '') {
			NotifyOption.position = position;
		}
		renderNotify();
		NotifyOption.type = '';
	},

	primary: (content, title, delay, position) => {
		NotifyOption.type = 'primary';
		Toast.show(content, title, delay, position);
	},
	success: (content, title, delay, position) => {
		NotifyOption.type = 'success';
		Toast.show(content, title, delay, position);
	},
	info: (content, title, delay, position) => {
		NotifyOption.type = 'info';
		Toast.show(content, title, delay, position);
	},
	warning: (content, title, delay, position) => {
		NotifyOption.type = 'warning';
		Toast.show(content, title, delay, position);
	},
	danger: (content, title, delay, position) => {
		NotifyOption.type = 'danger';
		Toast.show(content, title, delay, position);
	}
};

const SnackBar = {
	show: (content, delay, position) => {
		NotifyOption.content = null;
		NotifyOption.title = content;
		NotifyOption.delay = delay ? delay : TOAST_DELAY_DEFAULT;
		if (!position && position != '') {
			NotifyOption.position = position;
		}
		renderNotify();
		NotifyOption.type = '';
	},

	primary: (content, delay, position) => {
		NotifyOption.type = 'primary';
		SnackBar.show(content, delay, position);
	},
	success: (content, delay, position) => {
		NotifyOption.type = 'success';
		SnackBar.show(content, delay, position);
	},
	info: (content, delay, position) => {
		NotifyOption.type = 'info';
		SnackBar.show(content, delay, position);
	},
	warning: (content, delay, position) => {
		NotifyOption.type = 'warning';
		SnackBar.show(content, delay, position);
	},
	danger: (content, delay, position) => {
		NotifyOption.type = 'danger';
		SnackBar.show(content, delay, position);
	}
};
