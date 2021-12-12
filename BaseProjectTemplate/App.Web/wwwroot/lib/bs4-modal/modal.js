/*
 * Bootstrap modal library based on jQuery & Bootstrap 4
 * tinnq
 * 2021-03-08 (y-m-d)
 */

/**
 * 
 * @param {string} _evType Event type: click, keypress,.
 * @param {function} _event Function of the event
 */
var ModalButtonEvent = function (_evType, _event) {
	this.evType = _evType;
	this.event = _event;
};

/**
 * 
 * @param {string} _bsStyle Bootstrap style: primary, success, danger
 * @param {string} _text Display text of button
 * @param {ModalButtonEvent}  _events Array of ModalButtonEvent or ModalButtonEvent
 */
var ModalButton = function (_bsStyle, _text, _events) {
	this.btnStyle = _bsStyle;
	this.text = _text;
	this.events = [];
	this.events = (_events && _events.evType) ? this.events = [_events] : this.events = _events;
};

/**
 * 
 * @param {string} _title Tiêu đề của modal
 */
var Modal = function (_name, _title) {
	if (!_name) throw "Can't initialize an undefined modal";
	this.name = "modal-" + _name;
	this.modalConfig = {
		show: false,
		backdrop: true,
		keyboard: true,
	};
	this.hideShowingModals = false;
	var _modal = $("#" + this.name);
	if (_modal.length) {
		this.modal = _modal;
		this.modalTitle = this.modal.find("h5.modal-title");
		this.modalBody = this.modal.find(".modal-body");
		this.modalFooter = this.modal.find(".modal-footer");

		this.modalDialog = this.modal.find(".modal-dialog");
		this.modalContent = this.modalDialog.find(".modal-content");
		this.modalTitle.text(_title);
	}
	else {
		this.modal = $('<div id="' + this.name
			+ '" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="'
			+ this.name + '-title" aria-hidden="true">'
			+ '<div class="modal-dialog" role="document">'
			+ '<div class="modal-content">');
		var mTitle = $('<div class="modal-header">'
			+ '<h5 class="modal-title" id="' + this.name + '-title">' + _title + '</h5>'
			+ '<button class="close" data-dismiss="modal" aria-label="Close">'
			+ '<span aria-hidden="true">&times;</span>');
		this.modalTitle = mTitle.find("h5.modal-title");
		this.modalBody = $('<div class="modal-body">');
		this.modalFooter = $('<div class="modal-footer"></div>');

		this.modalDialog = this.modal.find(".modal-dialog");
		this.modalContent = this.modalDialog.find(".modal-content");
		this.modalContent.append(mTitle, this.modalBody);
		$('body').append(this.modal);
	}

	this.show = function () {
		var openingModals = $('.modal.show');
		if (this.hideShowingModals) {
			for (var i = 0; i < openingModals.length; i++) {
				var oModal = openingModals[i];
				if (this.modal != oModal) {
					$(oModal).modal('hide');
				}
			}
		}
		this.modal.modal('show');
	};

	this.hide = function () {
		this.modal.modal('hide');
	}

	this.setTitle = function (title) {
		this.modalTitle.text(title);
	}

	this.appendBody = function () {
		for (var i = 0; i < arguments.length; i++) {
			this.modalBody.append(arguments[i]);
		}
	}

	this.clearBody = function () {
		this.modalBody.empty();
	}

	this.destroy = function () {
		this.modal.modal('dispose');
	}

	this.toggle = function () {
		this.modal.modal('toggle')
	}

	this.setOption = function (_backdrop, _keyboard) {
		this.modalConfig.keyboard = _keyboard;
		this.modalConfig.backdrop = _backdrop;
		this.modal.modal(this.modalConfig);
	}

	this.resetOptions = function () {
		this.modalConfig = {
			backdrop: true,
			keyboard: true
		};
		this.modal.modal(this.modalConfig);
	}

	this.setFooterButton = function (_arrButton) {
		if (!_arrButton) return;
		if (!_arrButton.length) _arrButton = [_arrButton];
		var footerBtn = this.modalFooter.find("button");
		if (!footerBtn || !footerBtn.length) {
			for (var i = 0; i < _arrButton.length; i++) {
				var item = _arrButton[i];
				if (item == null) continue;
				var btn = $('<button class="btn">').addClass("btn-" + item.btnStyle).text(item.text);
				if (item.events) {
					for (var j = 0; j < item.events.length; j++) {
						if (item.events[j].event) {
							btn.on(item.events[j].evType, item.events[j].event);
						}
					}
				}
				this.modalFooter.append(btn);
			}
			this.modalContent.append(this.modalFooter);
		}
	}

	this.setDefaultFooterButton = function (_primaryText, _secondaryText, _primaryEvent) {
		var footerBtn = this.modalFooter.find("button");
		if (!footerBtn || !footerBtn.length) {
			var primaryBtn = new ModalButton(
				'primary',
				_primaryText,
				new ModalButtonEvent('click', _primaryEvent)
			);
			var secondaryBtn = null;
			if (_secondaryText != null) {
				secondaryBtn = new ModalButton(
					'light',
					_secondaryText,
					new ModalButtonEvent('click', this.hide.bind(this))
				);
			}
			var modalFooterButton = [primaryBtn, secondaryBtn];
			this.setFooterButton(modalFooterButton);
		}
	}

	this.hideModalAfterEndPrimaryEvent = false;
	this.setPrimaryButtonEvent = function () {
		var eventType = arguments.length == 1 ? "click" : arguments[0];
		var evt = arguments.length == 2 ? arguments[1] : arguments[0];
		var modal = this;
		var hideModal = this.hideModalAfterEndPrimaryEvent;
		evt = evt ? evt : function () { };
		this.modalFooter.off(eventType, "button:first-child");
		this.modalFooter.on(eventType, "button:first-child", function (ev) {
			evt(ev);
			if (hideModal === true) {
				modal.hide();
			}
		});
	}

	this.useButtonOnTheLeft = function () {
		var className = 'justify-content-start';
		if (!this.modalFooter.hasClass(className))
			this.modalFooter.addClass(className);
	}

	this.useFullScreenSize = function () {
		this.modalDialog.css({
			maxWidth: '100%',
			marginTop: '0',
			marginBottom: '0'
		});
		this.modalContent.css({
			height: '100vh'
		});
		this.modalBody.css({
			overflow: "auto"
		});
	}
	this.useNormalSize = function () {
		this.modalDialog.removeClass('modal-sm modal-lg');
	}
	this.useLargeSize = function () {
		this.modalDialog.removeClass('modal-sm').addClass('modal-lg');
	}
	this.useSmallSize = function () {
		this.modalDialog.removeClass('modal-lg').addClass('modal-sm');
	}
	this.useBoxShadow = function (_isUsed) {
		var _shadowVal = _isUsed === true || _isUsed == undefined ? '0 0 20px rgba(0, 0, 0, 0.3)' : '';
		this.modalDialog.css({
			boxShadow: _shadowVal
		});
	}

	/**
	 * Modal events
	 */

	this.afterShow = function (evt) {
		this.modal.on("shown.bs.modal", evt);
	}

	this.afterHide = function (evt) {
		this.modal.on("hidden.bs.modal", evt);
	}
};

/**
 * Override alert and confirm function
 */

/**
 * alert
 */
var _alertModal = new Modal("alert", "Thông báo");
_alertModal.setFooterButton(
	new ModalButton('primary', '\u00A0\u00A0OK\u00A0\u00A0',
		new ModalButtonEvent('click', _alertModal.hide.bind(_alertModal))
	)
);
_alertModal.setOption(false, true);
_alertModal.modal.css({ 'z-index': 2000, 'transform': 'scale(0.95)' });

window.alert = function (_mesg) {
	_alertModal.clearBody();
	_alertModal.appendBody(_mesg.replace(/</g, '&lt;'));
	_alertModal.show();
}

/**
 * confirm
 */
var _confirmModal = new Modal("confirm", "Xác nhận");
_confirmModal.setDefaultFooterButton("Đồng ý", 'Hủy');
_confirmModal.hideModalAfterEndPrimaryEvent = true;
_confirmModal.setOption(false, true);
_confirmModal.modal.css({ 'z-index': 2000, 'transform': 'scale(0.95)' });
window.confirm = function (_mesg, _onOK) {
	_confirmModal.setPrimaryButtonEvent(_onOK);
	_confirmModal.clearBody();
	_confirmModal.appendBody(_mesg.replace(/</g, '&lt;'));
	_confirmModal.show();
}