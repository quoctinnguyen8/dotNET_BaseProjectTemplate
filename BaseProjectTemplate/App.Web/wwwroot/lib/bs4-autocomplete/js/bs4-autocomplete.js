$.fn.extend({
	autocomplete(_setting) {
		this.setting = {
			zIndex: 1035,
			minLength: 3,
			maxHeight: 300,
			placeholder: ["Chọn 1 giá trị", "Nhập gì đó để tìm kiếm..."],
			notFound: "Không có dữ liệu",
			getDropdownContainer() {
				return `<div class="dropdown-content" style="max-height: ${this.maxHeight}px"></div>`;
			},
		};
		// Setting
		for (const key in _setting) {
			if (Object.hasOwnProperty.call(this.setting, key)) {
				this.setting[key] = _setting[key];
			}
		}
		// Chuyển nội dung từ thẻ select sang dropdown
		function mapValue(select, dropdownContent, setting) {
			let optionEles = select.find("option");
			$.each(optionEles, function (i, option) {
				option = $(option);
				let text = option.text();
				let noneAccent = text
					.normalize("NFD")
					.replace(/[\u0300-\u036f]/g, "")
					.toLowerCase();
				let ele = $("<a href='#'>")
					.attr({
						"data-value": option.attr("value"),
						"data-none-accent": noneAccent,
						"title": text,
						"class": "dropdown-item"
					})
					.append($("<span>").text(text), $('<button type="button">&times;</button>'));
				dropdownContent.append(ele);
			});
			if (optionEles.length == 0) {
				dropdownContent.append(`<a href="#" class="dropdown-item disabled">${setting.notFound}</a>`);
			}
			var selectedOption = select.find("option[selected]");
			if (selectedOption.length > 0) {
				let dropdownContainer = select.prev();
				let btnDropdown = dropdownContainer.find("button.bs4-dropdown");
				btnDropdown.text(selectedOption.text());
				select.val(selectedOption.val()).change();
				dropdownContent.find(`a[data-value=${selectedOption.val()}]`).addClass("active");
			}
		}

		let selectEles = this;
		let htmlInput = `<div class="bs4-dropdown-container position-relative">
							<button type="button" class="form-control text-left bs4-dropdown" data-toggle="dropdown">${this.setting.placeholder[0]}</button>
							<div class="dropdown-menu w-100" style="z-index:${this.setting.zIndex}">
								<div class="px-3 mb-2">
									<input type="search" class="form-control" placeholder="${this.setting.placeholder[1]}" />
								</div>
							</div>
						</div>`;

		selectEles.each((i, selectEle) => {
			selectEle.selectedIndex = -1;	// Xóa giá trị ban đầu của thẻ select
			selectEle = $(selectEle);
			selectEle.before(htmlInput);
			selectEle.addClass('select-none');   //  Ẩn thẻ select ban đầu

			let container = selectEle.prev();
			let inputTextEle = container.find(".dropdown-menu input[type=search]");
			let dropdownlist = container.find(".dropdown-menu");
			let btnDropdown = container.find("button.bs4-dropdown");

			let dropdownContainer = $(this.setting.getDropdownContainer());
			dropdownlist.append(dropdownContainer);
			mapValue(selectEle, dropdownContainer, selectEles.setting);

			// Sự kiện khi click vào item của dropdown
			dropdownlist.on("click", "a:not(.disabled)", function (ev) {
				ev.preventDefault();
				let aEle = $(this);
				let value = aEle.attr("data-value");
				if (value) {
					aEle.closest(".dropdown-menu").find("a.active").removeClass("active");
					aEle.addClass("active");
					btnDropdown.text(aEle.find('span').text());
					selectEle.val(value).change();
				}
			});
			// Sự kiện khi click vào nút xóa chọn của một phần tử
			dropdownlist.on("click", "a:not(.disabled)>button", function (ev) {
				let aEle = $(this);
				ev.stopPropagation();
				btnDropdown.text(selectEles.setting.placeholder[0]);
				aEle.closest(".dropdown-menu").find("a.active").removeClass("active");
				selectEle[0].selectedIndex = -1;
				dropdownlist.removeClass('show');
			});
			// Sự kiện nhập ở ô tìm kiếm
			inputTextEle.on("input", function (ev) {
				let inputVal = $(this).val().toLowerCase();
				let drnItems = dropdownlist.find("a:not(.disabled)");
				if (inputVal.length >= selectEles.setting.minLength) {
					drnItems.each(function (i, item) {
						item = $(item);
						let text = item.text().toLowerCase();
						let noneAccentText = item.attr("data-none-accent");
						if (text.indexOf(inputVal) >= 0 || noneAccentText.indexOf(inputVal) >= 0) {
							item.show();
						} else {
							item.hide();
						}
					});
				}
				else {
					drnItems.each(function (i, item) {
						$(item).show();
					});
				}
			});
		});

		// Chức năng get/set giá trị cho dropdown
		this.autocompleteVal = function (data) {
			if (data || data == '0') {
				selectEles
					.prev()
					.find(`a:not(.disabled)[data-value="${data}"]`)
					.trigger('click');
			} else {
				let item = selectEles.prev().find(`a.active`);
				if (item.length) {
					return item.attr('data-value');
				}
			}
		}

		// Chức năng xóa giá trị của dropdown
		this.removeAutocompleteVal = function () {
			let activeItem = selectEles.prev().find('.active');
			if (activeItem.length) {
				activeItem.find("button").trigger('click');
			}
		}

		// Sự kiện reset của form
		this.closest('form').on('reset', function () {
			let selectedItems = selectEles.find('option[selected]');
			if (selectedItems.length) {
				$.each(selectedItems, function (i, el) {
					selectEles.prev()
						.find(`a:not(.disabled)[data-value="${$(el).val()}"]`)
						.trigger('click');
				});
			} else {
				selectEles.removeAutocompleteVal();
			}
		});
		return this;
	}
});