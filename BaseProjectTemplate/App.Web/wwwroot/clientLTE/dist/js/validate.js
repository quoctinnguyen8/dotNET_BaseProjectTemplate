function hideerror() {
    $(".formError").remove()
}

function hidemsg() {
    $(".contact-success").remove(), $(".register-success").remove()
}

function checkEmail(e) {
    var r = document.getElementById(e);
    return !!/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(r.value.trim())
}

function checkNull(e, r, t, a, i) {
    var o = $("#" + e).val().trim();
    return "" != o && o != t || (0 < $("#error_" + e).length ? $("#error_" + e).html(r) : $("#" + e).after('<div class="nameformError parentFormfrm_contact formError"><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"), !1)
}

function checkPhone(e, r, t, a, i) {
    var o = $("#" + e).val().trim();
    return !("" == o || o == t || o.length < 10 || 11 < o.length) || (0 < $("#error_" + e).length ? $("#error_" + e).html(r) : $("#" + e).after('<div class="nameformError parentFormfrm_contact formError"><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"), !1)
}

function checkMail(e, r, t, a, i) {
    return !!checkEmail(e) || (0 < $("#error_" + e).length ? $("#error_" + e).html(r) : $("#" + e).after('<div class="nameformError parentFormfrm_contact formError" ><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"), !1)
}

function checkCaptcha(e, r, t, a, i) {
    return $("#" + e).val().trim() == $("#" + e + "_bk").val().trim() || (0 < $("#error_" + e).length ? $("#error_" + e).html(r) : $("#" + e).after('<div class="nameformError parentFormfrm_contact formError" ><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"), !1)
}

function checkNullTwo(e, r, t, a, i, o, n) {
    var l = $("#" + e).val().trim(),
        s = $("#" + r).val().trim();
    return "" != l && l != a && "" != s && s != i || (0 < $("#error_" + e).length ? $("#error_" + e).html(t) : $("#" + e).after('<div class="nameformError parentFormfrm_contact formError" ><div id="error_' + e + '" class="formErrorContent">' + t + "</div></div>"), !1)
}

function checkSelect(e, r, t, a, i) {
    var o = $("#" + e).val();
    return "" != o && o != t && 0 != o || (0 < $("#error_" + e).length ? $("#error_" + e).html(r) : $("#" + e).after('<div class="nameformError parentFormfrm_contact formError"><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"), !1)
}

function checkComment(e, r, t, a, i) {
    var o = $("#" + e).val().trim();
    return !$("#other-check:checked").length || "" != o && o != t || (0 < $("#error_" + e).length ? $("#error_" + e).html(r) : $("#" + e).after('<div class="nameformError parentFormfrm_contact formError"><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"), !1)
}

function checkNhucau(e, r, t, a, i) {
    return !(!$("#other-check:checked").length && !$("." + e + ":checked").length) || (0 < $("#error_" + e).length ? $("#error_" + e).html(r) : $("." + e + ":first").after('<div class="nameformError parentFormfrm_contact formError"><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"), !1)
}

function checkCheckbox(e, r, t, a, i) {
    return !!$("." + e + ":checked").length || (0 < $("#error_" + e).length ? $("#error_" + e).html(r) : $("." + e + ":first").after('<div class="nameformError parentFormfrm_contact formError"><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"), !1)
}

function checkQuocTich(e, r, t, a, i) {
    return !!$("." + e + ":checked").length || (0 < $("#error_" + e).length ? $("#error_" + e).html(r) : $("." + e + ":first").parent().after('<div class="nameformError parentFormfrm_contact formError"><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"), !1)
}

function checkCMND(e, r, t, a, i) {
    var o = $("#" + e).val().trim();
    return "" != o && o != t && (9 == o.length || 12 == o.length) || (0 < $("#error_" + e).length ? $("#error_" + e).html(r) : $("#" + e).after('<div class="nameformError parentFormfrm_contact formError"><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"), !1)
}

function checkPassport(e, r, t, a, i) {
    var o = $("#" + e).val().trim();
    return !("" == o || o == t || 12 < o.length) || (0 < $("#error_" + e).length ? $("#error_" + e).html(r) : $("#" + e).after('<div class="nameformError parentFormfrm_contact formError"><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"), !1)
}

function parseDate(e) {
    var r = e.split("/");
    return new Date(r[2], r[1], r[0])
}

function checkDate(e, r, t, a, i, o) {
    var n = $("#" + e).val().trim(),
        l = n.split("/"),
        s = l[0] + "/" + l[1] + "/" + (parseInt(l[2]) + 2),
        d = new Date,
        c = parseDate(s).getTime(),
        u = parseDate(d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear()).getTime();
    return "" == n || n == t ? (0 < $("#error_" + e).length ? $("#error_" + e).html(r) : $("#" + e).after('<div class="nameformError parentFormfrm_contact formError"><div id="error_' + e + '" class="formErrorContent">' + r + "</div></div>"), !1) : !(u < c) || (0 < $("#error_" + e).length ? $("#error_" + e).html(o) : $("#" + e).after('<div class="nameformError parentFormfrm_contact formError"><div id="error_' + e + '" class="formErrorContent">' + o + "</div></div>"), !1)
}! function(_) {
    var b = {
        init: function(e) {
            return this.data("jqv") && null != this.data("jqv") || (e = b._saveOptions(this, e), _(".formError").live("click", function() {
                _(this).fadeOut(150, function() {
                    _(this).parent(".formErrorOuter").remove(), _(this).remove()
                })
            })), this
        },
        attach: function(e) {
            var r, t = this;
            r = e ? b._saveOptions(t, e) : t.data("jqv");
            t.find("[data-validation-engine*=validate]");
            return r.binded || ("bind" == r.bindMethod ? (t.find("[class*=validate]").not("[type=checkbox]").not("[type=radio]").not(".datepicker").bind(r.validationEventTrigger, b._onFieldEvent), t.find("[class*=validate][type=checkbox],[class*=validate][type=radio]").bind("click", b._onFieldEvent), t.find("[class*=validate][class*=datepicker]").bind(r.validationEventTrigger, {
                delay: 300
            }, b._onFieldEvent), t.bind("submit", b._onSubmitEvent)) : "live" == r.bindMethod && (t.find("[class*=validate]").not("[type=checkbox]").not(".datepicker").live(r.validationEventTrigger, b._onFieldEvent), t.find("[class*=validate][type=checkbox]").live("click", b._onFieldEvent), t.find("[class*=validate][class*=datepicker]").live(r.validationEventTrigger, {
                delay: 300
            }, b._onFieldEvent), t.live("submit", b._onSubmitEvent)), r.binded = !0, r.autoPositionUpdate && _(window).bind("resize", {
                noAnimation: !0,
                formElem: t
            }, b.updatePromptsPosition)), this
        },
        detach: function() {
            var e = this,
                r = e.data("jqv");
            return r.binded && (e.find("[class*=validate]").not("[type=checkbox]").unbind(r.validationEventTrigger, b._onFieldEvent), e.find("[class*=validate][type=checkbox],[class*=validate][type=radio]").unbind("click", b._onFieldEvent), e.unbind("submit", b.onAjaxFormComplete), e.find("[class*=validate]").not("[type=checkbox]").die(r.validationEventTrigger, b._onFieldEvent), e.find("[class*=validate][type=checkbox]").die("click", b._onFieldEvent), e.die("submit", b.onAjaxFormComplete), e.removeData("jqv"), r.autoPositionUpdate && _(window).unbind("resize", b.updatePromptsPosition)), this
        },
        validate: function() {
            return b._validateFields(this)
        },
        validateField: function(e) {
            var r = _(this).data("jqv"),
                t = b._validateField(_(e), r);
            return r.onSuccess && 0 == r.InvalidFields.length ? r.onSuccess() : r.onFailure && 0 < r.InvalidFields.length && r.onFailure(), t
        },
        validateform: function() {
            return b._onSubmitEvent.call(this)
        },
        updatePromptsPosition: function(e) {
            if (e && this == window) var r = e.data.formElem,
                a = e.data.noAnimation;
            else r = _(this.closest("form"));
            var i = r.data("jqv");
            return r.find("[class*=validate]").not(":hidden").not(":disabled").each(function() {
                var e = _(this),
                    r = b._getPrompt(e),
                    t = _(r).find(".formErrorContent").html();
                r && b._updatePrompt(e, _(r), t, void 0, !1, i, a)
            }), this
        },
        showPrompt: function(e, r, t, a) {
            var i = this.closest("form").data("jqv");
            return i || (i = b._saveOptions(this, i)), t && (i.promptPosition = t), i.showArrow = 1 == a, b._showPrompt(this, e, r, !1, i), this
        },
        hidePrompt: function() {
            var e = "." + b._getClassName(_(this).attr("id")) + "formError";
            return _(e).fadeTo("fast", .3, function() {
                _(this).parent(".formErrorOuter").remove(), _(this).remove()
            }), this
        },
        hide: function() {
            var e;
            return e = _(this).is("form") ? "parentForm" + b._getClassName(_(this).attr("id")) : b._getClassName(_(this).attr("id")) + "formError", _("." + e).fadeTo("fast", .3, function() {
                _(this).parent(".formErrorOuter").remove(), _(this).remove()
            }), this
        },
        hideAll: function() {
            return _(".formError").fadeTo("fast", .3, function() {
                _(this).parent(".formErrorOuter").remove(), _(this).remove()
            }), this
        },
        _onFieldEvent: function(e) {
            var r = _(this),
                t = r.closest("form").data("jqv");
            window.setTimeout(function() {
                b._validateField(r, t), 0 == t.InvalidFields.length && t.onSuccess ? t.onSuccess() : 0 < t.InvalidFields.length && t.onFailure && t.onFailure()
            }, e.data ? e.data.delay : 0)
        },
        _onSubmitEvent: function() {
            var e = _(this),
                r = e.data("jqv"),
                t = b._validateFields(e, !0);
            return t && r.ajaxFormValidation ? (b._validateFormWithAjax(e, r), !1) : r.onValidationComplete ? (r.onValidationComplete(e, t), !1) : t
        },
        _checkAjaxStatus: function(e) {
            var t = !0;
            return _.each(e.ajaxValidCache, function(e, r) {
                if (!r) return t = !1
            }), t
        },
        _validateFields: function(e, r) {
            var t = e.data("jqv"),
                a = !1;
            e.trigger("jqv.form.validating");
            var i = null;
            if (e.find("[class*=validate]").not(":hidden").not(":disabled").each(function() {
                    var e = _(this);
                    if (a |= b._validateField(e, t, r), e.focus(), t.doNotShowAllErrosOnSubmit) return !1;
                    a && null == i && (i = e)
                }), e.trigger("jqv.form.result", [a]), a) {
                if (t.scroll) {
                    var o = i.offset().top,
                        n = i.offset().left,
                        l = t.promptPosition;
                    if ("string" == typeof l && -1 != l.indexOf(":") && (l = l.substring(0, l.indexOf(":"))), "bottomRight" != l && "bottomLeft" != l) o = b._getPrompt(i).offset().top;
                    if (t.isOverflown) {
                        var s = _(t.overflownDIV);
                        if (!s.length) return !1;
                        o += s.scrollTop() + -parseInt(s.offset().top) - 5, _(t.overflownDIV + ":not(:animated)").animate({
                            scrollTop: o
                        }, 500)
                    } else _("html:not(:animated),body:not(:animated)").animate({
                        scrollTop: o,
                        scrollLeft: n
                    }, 500, function() {
                        t.focusFirstField && i.focus()
                    })
                } else t.focusFirstField && i.focus();
                return !1
            }
            return !0
        },
        _validateFormWithAjax: function(s, d) {
            var e = s.serialize(),
                r = d.ajaxFormValidationURL ? d.ajaxFormValidationURL : s.attr("action");
            _.ajax({
                type: "GET",
                url: r,
                cache: !1,
                dataType: "json",
                data: e,
                form: s,
                methods: b,
                options: d,
                beforeSend: function() {
                    return d.onBeforeAjaxFormValidation(s, d)
                },
                error: function(e, r) {
                    b._ajaxError(e, r)
                },
                success: function(e) {
                    if (!0 !== e) {
                        for (var r = !1, t = 0; t < e.length; t++) {
                            var a = e[t],
                                i = a[0],
                                o = _(_("#" + i)[0]);
                            if (1 == o.length) {
                                var n = a[2];
                                if (1 == a[1])
                                    if ("" != n && n) {
                                        if (d.allrules[n])(l = d.allrules[n].alertTextOk) && (n = l);
                                        b._showPrompt(o, n, "pass", !1, d, !0)
                                    } else b._closePrompt(o);
                                else {
                                    var l;
                                    if (r |= !0, d.allrules[n])(l = d.allrules[n].alertText) && (n = l);
                                    b._showPrompt(o, n, "", !1, d, !0)
                                }
                            }
                        }
                        d.onAjaxFormComplete(!r, s, e, d)
                    } else d.onAjaxFormComplete(!0, s, "", d)
                }
            })
        },
        _validateField: function(e, r, t) {
            e.attr("id") || _.error("jQueryValidate: an ID attribute is required for this field: " + e.attr("name") + " class:" + e.attr("class"));
            var a = e.attr("class"),
                i = /validate\[(.*)\]/.exec(a);
            if (!i) return !1;
            var o = i[1].split(/\[|,|\]/),
                n = !1,
                l = e.attr("name"),
                s = "",
                d = !1;
            r.isError = !1, r.showArrow = !0;
            for (var c = _(e.closest("form")), u = 0; u < o.length; u++) {
                o[u] = o[u].replace(" ", "");
                var m = void 0;
                switch (o[u]) {
                    case "required":
                        d = !0, m = b._required(e, o, u, r);
                        break;
                    case "custom":
                        m = b._customRegex(e, o, u, r);
                        break;
                    case "groupRequired":
                        var f = "[class*=" + o[u + 1] + "]";
                        if ((v = c.find(f).eq(0))[0] != e[0]) {
                            b._validateField(v, r, t), r.showArrow = !0;
                            continue
                        }(m = b._groupRequired(e, o, u, r)) && (d = !0), r.showArrow = !1;
                        break;
                    case "ajax":
                        t || (b._ajax(e, o, u, r), n = !0);
                        break;
                    case "minSize":
                        m = b._minSize(e, o, u, r);
                        break;
                    case "maxSize":
                        m = b._maxSize(e, o, u, r);
                        break;
                    case "min":
                        m = b._min(e, o, u, r);
                        break;
                    case "max":
                        m = b._max(e, o, u, r);
                        break;
                    case "past":
                        m = b._past(e, o, u, r);
                        break;
                    case "future":
                        m = b._future(e, o, u, r);
                        break;
                    case "dateRange":
                        f = "[class*=" + o[u + 1] + "]";
                        var v = c.find(f).eq(0),
                            p = c.find(f).eq(1);
                        (v[0].value || p[0].value) && (m = b._dateRange(v, p, o, u, r)), m && (d = !0), r.showArrow = !1;
                        break;
                    case "dateTimeRange":
                        f = "[class*=" + o[u + 1] + "]", v = c.find(f).eq(0), p = c.find(f).eq(1);
                        (v[0].value || p[0].value) && (m = b._dateTimeRange(v, p, o, u, r)), m && (d = !0), r.showArrow = !1;
                        break;
                    case "maxCheckbox":
                        m = b._maxCheckbox(c, e, o, u, r), e = _(c.find("input[name='" + l + "']"));
                        break;
                    case "minCheckbox":
                        m = b._minCheckbox(c, e, o, u, r), e = _(c.find("input[name='" + l + "']"));
                        break;
                    case "equals":
                        m = b._equals(e, o, u, r);
                        break;
                    case "funcCall":
                        m = b._funcCall(e, o, u, r);
                        break;
                    case "creditCard":
                        m = b._creditCard(e, o, u, r)
                }
                void 0 !== m && (s += m + "<br/>", r.isError = !0)
            }
            d || "" != e.val() || (r.isError = !1);
            var h = e.prop("type");
            ("radio" == h || "checkbox" == h) && 1 < c.find("input[name='" + l + "']").size() && (e = _(c.find("input[name='" + l + "'][type!=hidden]:first")), r.showArrow = !1), "text" == h && 1 < c.find("input[name='" + l + "']").size() && (e = _(c.find("input[name='" + l + "'][type!=hidden]:first")), r.showArrow = !1), r.isError ? b._showPrompt(e, s, "", !1, r) : n || b._closePrompt(e), n || e.trigger("jqv.field.result", [e, r.isError, s]);
            var g = _.inArray(e[0], r.InvalidFields);
            return -1 == g ? r.isError && r.InvalidFields.push(e[0]) : r.isError || r.InvalidFields.splice(g, 1), r.isError
        },
        _required: function(e, r, t, a) {
            switch (e.prop("type")) {
                case "text":
                case "password":
                case "textarea":
                case "file":
                default:
                    if (!e.val()) return a.allrules[r[t]].alertText;
                    break;
                case "radio":
                case "checkbox":
                    var i = e.closest("form"),
                        o = e.attr("name");
                    if (0 == i.find("input[name='" + o + "']:checked").size()) return 1 == i.find("input[name='" + o + "']").size() ? a.allrules[r[t]].alertTextCheckboxe : a.allrules[r[t]].alertTextCheckboxMultiple;
                    break;
                case "select-one":
                    if (!e.val()) return a.allrules[r[t]].alertText;
                    break;
                case "select-multiple":
                    if (!e.find("option:selected").val()) return a.allrules[r[t]].alertText
            }
        },
        _groupRequired: function(e, r, t, a) {
            var i = "[class*=" + r[t + 1] + "]",
                o = !1;
            if (e.closest("form").find(i).each(function() {
                    if (!b._required(_(this), r, t, a)) return !(o = !0)
                }), !o) return a.allrules[r[t]].alertText
        },
        _customRegex: function(e, r, t, a) {
            var i = r[t + 1],
                o = a.allrules[i];
            if (o) {
                var n = o.regex;
                if (n) return new RegExp(n).test(e.val()) ? void 0 : a.allrules[i].alertText;
                alert("jqv:custom regex not found " + i)
            } else alert("jqv:custom rule not found " + i)
        },
        _funcCall: function(e, r, t, a) {
            var i = r[t + 1],
                o = window[i] || a.customFunctions[i];
            if ("function" == typeof o) return o(e, r, t, a)
        },
        _equals: function(e, r, t, a) {
            var i = r[t + 1];
            if (e.val() != _("#" + i).val()) return a.allrules.equals.alertText
        },
        _maxSize: function(e, r, t, a) {
            var i = r[t + 1];
            if (i < e.val().length) {
                var o = a.allrules.maxSize;
                return o.alertText + i + o.alertText2
            }
        },
        _minSize: function(e, r, t, a) {
            var i = r[t + 1];
            if (e.val().length < i) {
                var o = a.allrules.minSize;
                return o.alertText + i + o.alertText2
            }
        },
        _min: function(e, r, t, a) {
            var i = parseFloat(r[t + 1]);
            if (parseFloat(e.val()) < i) {
                var o = a.allrules.min;
                return o.alertText2 ? o.alertText + i + o.alertText2 : o.alertText + i
            }
        },
        _max: function(e, r, t, a) {
            var i = parseFloat(r[t + 1]);
            if (i < parseFloat(e.val())) {
                var o = a.allrules.max;
                return o.alertText2 ? o.alertText + i + o.alertText2 : o.alertText + i
            }
        },
        _past: function(e, r, t, a) {
            var i = r[t + 1],
                o = "now" == i.toLowerCase() ? new Date : b._parseDate(i);
            if (o < b._parseDate(e.val())) {
                var n = a.allrules.past;
                return n.alertText2 ? n.alertText + b._dateToString(o) + n.alertText2 : n.alertText + b._dateToString(o)
            }
        },
        _future: function(e, r, t, a) {
            var i = r[t + 1],
                o = "now" == i.toLowerCase() ? new Date : b._parseDate(i);
            if (b._parseDate(e.val()) < o) {
                var n = a.allrules.future;
                return n.alertText2 ? n.alertText + b._dateToString(o) + n.alertText2 : n.alertText + b._dateToString(o)
            }
        },
        _isDate: function(e) {
            return !!new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/).test(e)
        },
        _isDateTime: function(e) {
            return !!new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/).test(e)
        },
        _dateCompare: function(e, r) {
            return new Date(e.toString()) < new Date(r.toString())
        },
        _dateRange: function(e, r, t, a, i) {
            return !e[0].value && r[0].value || e[0].value && !r[0].value ? i.allrules[t[a]].alertText + i.allrules[t[a]].alertText2 : b._isDate(e[0].value) && b._isDate(r[0].value) && b._dateCompare(e[0].value, r[0].value) ? void 0 : i.allrules[t[a]].alertText + i.allrules[t[a]].alertText2
        },
        _dateTimeRange: function(e, r, t, a, i) {
            return !e[0].value && r[0].value || e[0].value && !r[0].value ? i.allrules[t[a]].alertText + i.allrules[t[a]].alertText2 : b._isDateTime(e[0].value) && b._isDateTime(r[0].value) && b._dateCompare(e[0].value, r[0].value) ? void 0 : i.allrules[t[a]].alertText + i.allrules[t[a]].alertText2
        },
        _maxCheckbox: function(e, r, t, a, i) {
            var o = t[a + 1],
                n = r.attr("name");
            if (o < e.find("input[name='" + n + "']:checked").size()) return i.showArrow = !1, i.allrules.maxCheckbox.alertText2 ? i.allrules.maxCheckbox.alertText + " " + o + " " + i.allrules.maxCheckbox.alertText2 : i.allrules.maxCheckbox.alertText
        },
        _minCheckbox: function(e, r, t, a, i) {
            var o = t[a + 1],
                n = r.attr("name");
            if (e.find("input[name='" + n + "']:checked").size() < o) return i.showArrow = !1, i.allrules.minCheckbox.alertText + " " + o + " " + i.allrules.minCheckbox.alertText2
        },
        _creditCard: function(e, r, t, a) {
            var i = !1,
                o = e.val().replace(/ +/g, "").replace(/-+/g, ""),
                n = o.length;
            if (14 <= n && n <= 16 && 0 < parseInt(o)) {
                for (var l, s = 0, d = (t = n - 1, 1), c = new String; l = parseInt(o.charAt(t)), c += d++ % 2 == 0 ? 2 * l : l, 0 <= --t;);
                for (t = 0; t < c.length; t++) s += parseInt(c.charAt(t));
                i = s % 10 == 0
            }
            if (!i) return a.allrules.creditCard.alertText
        },
        _ajax: function(r, e, t, n) {
            var a = e[t + 1],
                l = n.allrules[a],
                i = l.extraData,
                o = l.extraDataDynamic;
            if (i || (i = ""), o) {
                var s = [],
                    d = String(o).split(",");
                for (t = 0; t < d.length; t++) {
                    var c = d[t];
                    if (_(c).length) {
                        var u = r.closest("form").find(c).val(),
                            m = c.replace("#", "") + "=" + escape(u);
                        s.push(m)
                    }
                }
                o = s.join("&")
            } else o = "";
            n.isError || _.ajax({
                type: "GET",
                url: l.url,
                cache: !1,
                dataType: "json",
                data: "fieldId=" + r.attr("id") + "&fieldValue=" + r.val() + "&extraData=" + i + "&" + o,
                field: r,
                rule: l,
                methods: b,
                options: n,
                beforeSend: function() {
                    var e = l.alertTextLoad;
                    e && b._showPrompt(r, e, "load", !0, n)
                },
                error: function(e, r) {
                    b._ajaxError(e, r)
                },
                success: function(e) {
                    var r = e[0],
                        t = _(_("#" + r)[0]);
                    if (1 == t.length) {
                        var a = e[1],
                            i = e[2];
                        if (a) {
                            if (void 0 !== n.ajaxValidCache[r] && (n.ajaxValidCache[r] = !0), i) {
                                if (n.allrules[i])(o = n.allrules[i].alertTextOk) && (i = o)
                            } else i = l.alertTextOk;
                            i ? b._showPrompt(t, i, "pass", !0, n) : b._closePrompt(t)
                        } else {
                            var o;
                            if (n.ajaxValidCache[r] = !1, n.isError = !0, i) {
                                if (n.allrules[i])(o = n.allrules[i].alertText) && (i = o)
                            } else i = l.alertText;
                            b._showPrompt(t, i, "", !0, n)
                        }
                    }
                    t.trigger("jqv.field.result", [t, !n.isError, i])
                }
            })
        },
        _ajaxError: function(e, r) {
            0 == e.status && null == r ? alert("The page is not served from a server! ajax call failed") : "undefined" != typeof console && console.log("Ajax error: " + e.status + " " + r)
        },
        _dateToString: function(e) {
            return e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate()
        },
        _parseDate: function(e) {
            var r = e.split("-");
            return r == e && (r = e.split("/")), new Date(r[0], r[1] - 1, r[2])
        },
        _showPrompt: function(e, r, t, a, i, o) {
            var n = b._getPrompt(e);
            o && (n = !1), n ? b._updatePrompt(e, n, r, t, a, i) : b._buildPrompt(e, r, t, a, i)
        },
        _buildPrompt: function(e, r, t, a, i) {
            var o = _("<div>");
            switch (o.addClass(b._getClassName(e.attr("id")) + "formError"), e.is(":input") && o.addClass("parentForm" + b._getClassName(e.parents("form").attr("id"))), o.addClass("formError"), t) {
                case "pass":
                    o.addClass("greenPopup");
                    break;
                case "load":
                    o.addClass("blackPopup");
                    break;
                default:
                    i.InvalidCount++
            }
            a && o.addClass("ajaxed");
            _("<div>").addClass("formErrorContent").html(r).appendTo(o);
            if (i.showArrow) {
                _("<div>").addClass("formErrorArrow");
                var n = e.data("promptPosition") || i.promptPosition;
                "string" == typeof n && -1 != n.indexOf(":") && (n = n.substring(0, n.indexOf(":")))
            }
            if (i.relative) {
                var l = _("<span>").css("position", "relative").css("vertical-align", "top").addClass("formErrorOuter").append(o.css("position", "absolute"));
                e.before(l)
            } else i.isOverflown ? e.before(o) : _("body").append(o);
            var s = b._calculatePosition(e, o, i);
            return o.css({
                top: s.callerTopPosition,
                left: s.callerleftPosition,
                marginTop: s.marginTopSize,
                opacity: 0
            }).data("callerField", e), i.autoHidePrompt && setTimeout(function() {
                o.animate({
                    opacity: 0
                }, function() {
                    o.closest(".formErrorOuter").remove(), o.remove()
                })
            }, i.autoHideDelay), o.animate({
                opacity: .87
            })
        },
        _updatePrompt: function(e, r, t, a, i, o, n) {
            if (r) {
                void 0 !== a && ("pass" == a ? r.addClass("greenPopup") : r.removeClass("greenPopup"), "load" == a ? r.addClass("blackPopup") : r.removeClass("blackPopup")), i ? r.addClass("ajaxed") : r.removeClass("ajaxed"), r.find(".formErrorContent").html(t);
                var l = b._calculatePosition(e, r, o);
                css = {
                    top: l.callerTopPosition,
                    left: l.callerleftPosition,
                    marginTop: l.marginTopSize
                }, n ? r.css(css) : r.animate(css)
            }
        },
        _closePrompt: function(e) {
            var r = b._getPrompt(e);
            r && r.fadeTo("fast", 0, function() {
                r.parent(".formErrorOuter").remove(), r.remove()
            })
        },
        closePrompt: function(e) {
            return b._closePrompt(e)
        },
        _getPrompt: function(e) {
            var r = b._getClassName(e.attr("id")) + "formError",
                t = _("." + b._escapeExpression(r))[0];
            if (t) return _(t)
        },
        _escapeExpression: function(e) {
            return e.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g, "\\$1")
        },
        isRTL: function(e) {
            var r = _(document),
                t = _("body"),
                a = e && e.hasClass("rtl") || e && "rtl" === (e.attr("dir") || "").toLowerCase() || r.hasClass("rtl") || "rtl" === (r.attr("dir") || "").toLowerCase() || t.hasClass("rtl") || "rtl" === (t.attr("dir") || "").toLowerCase();
            return Boolean(a)
        },
        _calculatePosition: function(e, r, t) {
            var a, i, o, n = e.width(),
                l = r.height(),
                s = t.isOverflown || t.relative;
            if (s) a = i = 0, o = -l;
            else {
                var d = e.offset();
                a = d.top, i = d.left, o = 0
            }
            var c = e.data("promptPosition") || t.promptPosition,
                u = "",
                m = "",
                f = 0,
                v = 0;
            if ("string" == typeof c && -1 != c.indexOf(":") && (u = c.substring(c.indexOf(":") + 1), c = c.substring(0, c.indexOf(":")), -1 != u.indexOf(",") && (m = u.substring(u.indexOf(",") + 1), u = u.substring(0, u.indexOf(",")), v = parseInt(m), isNaN(v) && (v = 0)), f = parseInt(u), isNaN(u) && (u = 0)), b.isRTL(e)) switch (c) {
                default:
                    case "topLeft":
                    s ? i -= r.width() - 30 : (i -= r.width() - 30, a += -l - 2);
                break;
                case "topRight":
                        s ? i += n - r.width() : (i += n - r.width(), a += -l - 2);
                    break;
                case "centerRight":
                        s ? (a = e.outerHeight(), i = e.outerWidth(1) + 5) : i += e.outerWidth() + 5;
                    break;
                case "centerLeft":
                        i -= r.width() + 2;
                    break;
                case "bottomLeft":
                        i += 30 - r.width(),
                    a = a + e.height() + 15;
                    break;
                case "bottomRight":
                        i += n - r.width(),
                    a += e.height() + 15
            }
            else switch (c) {
                default:
                    case "topRight":
                    s ? i += n - 30 : (i += n - 30, a += -l - 2);
                break;
                case "topLeft":
                        a += -l - 10;
                    break;
                case "centerRight":
                        s ? (a = e.outerHeight(), i = e.outerWidth(1) + 5) : i += e.outerWidth() + 5;
                    break;
                case "centerLeft":
                        i -= r.width() + 2;
                    break;
                case "bottomLeft":
                        a = a + e.height() + 15;
                    break;
                case "bottomRight":
                        i += n - 30,
                    a += e.height() + 5
            }
            return {
                callerTopPosition: (a += v) + "px",
                callerleftPosition: (i += f) + "px",
                marginTopSize: o + "px"
            }
        },
        _saveOptions: function(e, r) {
            if (_.validationEngineLanguage) var t = _.validationEngineLanguage.allRules;
            else _.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page");
            _.validationEngine.defaults.allrules = t;
            var a = _.extend(!0, {}, _.validationEngine.defaults, r);
            return (jim = a).isOverflown && (a.relative = !0), a.relative && (a.isOverflown = !0), e.data("jqv", a), a
        },
        _getClassName: function(e) {
            if (e) return e.replace(/:/g, "_").replace(/\./g, "_")
        }
    };
    _.fn.validationEngine = function(e) {
        var r = _(this);
        return !!r[0] && ("string" == typeof e && "_" != e.charAt(0) && b[e] ? ("showPrompt" != e && "hidePrompt" != e && "hide" != e && "hideAll" != e && b.init.apply(r), b[e].apply(r, Array.prototype.slice.call(arguments, 1))) : "object" != typeof e && e ? void _.error("Method " + e + " does not exist in jQuery.validationEngine") : (b.init.apply(r, arguments), b.attach.apply(r)))
    }, _.validationEngine = {
        defaults: {
            validationEventTrigger: "blur",
            scroll: !0,
            focusFirstField: !0,
            promptPosition: "topRight",
            bindMethod: "bind",
            inlineAjax: !1,
            ajaxFormValidation: !1,
            ajaxFormValidationURL: !1,
            onAjaxFormComplete: _.noop,
            onBeforeAjaxFormValidation: _.noop,
            onValidationComplete: !1,
            relative: !1,
            isOverflown: !1,
            overflownDIV: "",
            doNotShowAllErrosOnSubmit: !1,
            binded: !1,
            showArrow: !0,
            isError: !1,
            ajaxValidCache: {},
            autoPositionUpdate: !1,
            InvalidFields: [],
            onSuccess: !1,
            onFailure: !1,
            autoHidePrompt: !1,
            autoHideDelay: 1e4
        }
    }, _(function() {
        _.validationEngine.defaults.promptPosition = b.isRTL() ? "topLeft" : "topRight"
    })
}(jQuery), eval(function(e, r, t, a, i, o) {
    if (i = function(e) {
            return (e < 53 ? "" : i(parseInt(e / 53))) + (35 < (e %= 53) ? String.fromCharCode(e + 29) : e.toString(36))
        }, !"".replace(/^/, String)) {
        for (; t--;) o[i(t)] = a[t] || i(t);
        a = [function(e) {
            return o[e]
        }], i = function() {
            return "\\w+"
        }, t = 1
    }
    for (; t--;) a[t] && (e = e.replace(new RegExp("\\b" + i(t) + "\\b", "g"), a[t]));
    return e
}('(2($){$.c.f=2(p){p=$.d({g:"!@#$%^&*()+=[]\\\\\\\';,/{}|\\":<>?~`.- ",4:"",9:""},p);7 3.b(2(){5(p.G)p.4+="Q";5(p.w)p.4+="n";s=p.9.z(\'\');x(i=0;i<s.y;i++)5(p.g.h(s[i])!=-1)s[i]="\\\\"+s[i];p.9=s.O(\'|\');6 l=N M(p.9,\'E\');6 a=p.g+p.4;a=a.H(l,\'\');$(3).J(2(e){5(!e.r)k=o.q(e.K);L k=o.q(e.r);5(a.h(k)!=-1)e.j();5(e.u&&k==\'v\')e.j()});$(3).B(\'D\',2(){7 F})})};$.c.I=2(p){6 8="n";8+=8.P();p=$.d({4:8},p);7 3.b(2(){$(3).f(p)})};$.c.t=2(p){6 m="A";p=$.d({4:m},p);7 3.b(2(){$(3).f(p)})}})(C);', 0, 53, "||function|this|nchars|if|var|return|az|allow|ch|each|fn|extend||alphanumeric|ichars|indexOf||preventDefault||reg|nm|abcdefghijklmnopqrstuvwxyz|String||fromCharCode|charCode||alpha|ctrlKey||allcaps|for|length|split|1234567890|bind|jQuery|contextmenu|gi|false|nocaps|replace|numeric|keypress|which|else|RegExp|new|join|toUpperCase|ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("|"), 0, {}));
var httpserver = $(".httpserver").text();

function validatecontact() {
    hidemsg();
    var e = !0,
        r = checkNull("name", $("#name").attr("data-error"), $("#name").attr("data-default"), "40", "-270"),
        t = checkNull("comments", $("#comments").attr("data-error"), $("#comments").attr("data-default"), "40", "-270"),
        a = checkPhone("phone", $("#phone").attr("data-error"), $("#phone").attr("data-default"), "40", "-270"),
        i = checkMail("email", $("#email").attr("data-error"), $("#email").attr("data-default"), "40", "-270");
    if (!(r && t && a && i)) {
        if ($(".form-box").length) {
            var o = $(".form-box").offset().top - 80;
            $("html, body").stop().animate({
                scrollTop: o
            }, 500, "linear")
        }
        e = !1, setTimeout(hideerror, 5e3)
    }
    return e
}

function validatesignup() {
    hidemsg();
    var e = !0,
        r = checkNull("namesignup", $("#namesignup").attr("data-error"), $("#namesignup").attr("data-default"), "40", "-270"),
        t = checkNull("commentssignup", $("#commentssignup").attr("data-error"), $("#commentssignup").attr("data-default"), "40", "-270"),
        a = checkPhone("phonesignup", $("#phonesignup").attr("data-error"), $("#phonesignup").attr("data-default"), "40", "-270"),
        i = checkMail("emailsignup", $("#emailsignup").attr("data-error"), $("#emailsignup").attr("data-default"), "40", "-270");
    if (!(r && t && a && i)) {
        if ($(".register-box").length) {
            var o = $(".register-box").offset().top - 80;
            $("html, body").stop().animate({
                scrollTop: o
            }, 500, "linear")
        }
        e = !1, setTimeout(hideerror, 5e3)
    }
    return e
}

function validateregister() {
    hidemsg();
    var e = !0;
    return checkMail("emailregister", $("#emailregister").attr("data-error"), $("#emailregister").attr("data-default"), "40", "-270") || (e = !1, setTimeout(hideerror, 5e3)), e
}

function validatecomment() {
    hidemsg();
    var e = !0,
        r = checkNull("star", $("#star").attr("data-error"), $("#star").attr("data-default"), "40", "-270"),
        t = checkNull("commentcomment", $("#commentcomment").attr("data-error"), $("#commentcomment").attr("data-default"), "40", "-270");
    if (!r || !t) {
        if ($(".comment-box").length) {
            var a = $(".comment-box").offset().top - 80;
            $("html, body").stop().animate({
                scrollTop: a
            }, 500, "linear")
        }
        e = !1, setTimeout(hideerror, 5e3)
    }
    return e
}

function commentSubmit() {
    $("#btn-comment-submit").click(function() {
        if (1 != validatecomment()) return $(".formError").click(function() {
            $(this).remove()
        }), !1;
        $("#btn-comment-submit").attr("disabled", "disabled"), $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>');
        var e = $("#commentForm").serialize();
        return $.ajax({
            type: "POST",
            url: httpserver + "send-comment-ajax.html",
            data: e,
            dataType: "json",
            success: function(e) {
                $(".loadx").fadeOut(300, "linear", function() {
                    $(".loadx").remove()
                }), "200" == e.status ? (document.getElementById("commentForm").reset(), $(".star-handle .star-item").removeClass("show"), $("#star").val(""), $(".overlay-dark").after("<div  class='contact-success color-blue'>" + e.message + "</div>")) : $(".overlay-dark").after("<div  class='contact-success color-red'>" + e.message + "</div>"), $("#btn-comment-submit").removeAttr("disabled"), setTimeout(hidemsg, 5e3)
            }
        }), !1
    }), $("#btn-comment-reset").click(function() {
        hidemsg(), hideerror()
    }), $("#commentForm").keydown(function(e) {
        $("textarea").is(":focus") || 13 == e.keyCode && $("#btn-comment-submit").trigger("click")
    })
}
$("#btn-contact-submit").click(function() {
    if (1 != validatecontact()) return $(".formError").click(function() {
        $(this).remove()
    }), !1;
    $("#btn-contact-submit").attr("disabled", "disabled"), $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>');
    var e = $("#contact_form").serialize();
    return $.ajax({
        type: "POST",
        url: httpserver + "send-contact.html",
        data: e,
        dataType: "json",
        success: function(e) {
            $(".loadx").fadeOut(300, "linear", function() {
                $(".loadx").remove()
            }), "200" == e.status ? (document.getElementById("contact_form").reset(), $(".overlay-dark").after("<div  class='contact-success color-blue'>" + e.message + "</div>")) : $(".overlay-dark").after("<div  class='contact-success color-red'>" + e.message + "</div>"), $("#btn-contact-submit").removeAttr("disabled"), setTimeout(hidemsg, 5e3)
        }
    }), !1
}), $("#btn-contact-reset").click(function() {
    hidemsg(), hideerror()
}), $("#phone").numeric(), $("#contact_form").keydown(function(e) {
    $("textarea").is(":focus") || 13 == e.keyCode && $("#btn-contact-submit").trigger("click")
}), $("#btn-signup-submit").click(function() {
    if (1 != validatesignup()) return $(".formError").click(function() {
        $(this).remove()
    }), !1;
    $("#btn-signup-submit").attr("disabled", "disabled"), $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>');
    var e = $("#signup_register_id").serialize();
    return $.ajax({
        type: "POST",
        url: httpserver + "send-signup.html",
        data: e,
        dataType: "json",
        success: function(e) {
            $(".loadx").fadeOut(300, "linear", function() {
                $(".loadx").remove()
            }), "200" == e.status ? (document.getElementById("signup_register_id").reset(), $(".overlay-dark").after("<div  class='contact-success color-blue'>" + e.message + "</div>")) : $(".overlay-dark").after("<div  class='contact-success color-red'>" + e.message + "</div>"), grecaptcha.reset(), $("#btn-signup-submit").removeAttr("disabled"), setTimeout(hidemsg, 5e3)
        }
    }), !1
}), $("#btn-signup-reset").click(function() {
    hidemsg(), hideerror()
}), $("#phonesignup").numeric(), $("#signup_register_id").keydown(function(e) {
    $("textarea").is(":focus") || 13 == e.keyCode && $("#btn-signup-submit").trigger("click")
}), $("#btn-register-submit").click(function(e) {
    if (1 != validateregister()) return $(".formError").click(function() {
        $(this).remove()
    }), !1;
    $("#btn-register-submit").attr("disabled", "disabled"), $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>');
    var r = $("#register_id").serialize();
    return $.ajax({
        type: "POST",
        url: httpserver + "send-register.html",
        data: r,
        dataType: "json",
        success: function(e) {
            $(".loadx").fadeOut(300, "linear", function() {
                $(".loadx").remove()
            }), "200" == e.status ? (document.getElementById("register_id").reset(), $(".overlay-dark").after("<div  class='contact-success color-blue'>" + e.message + "</div>")) : $(".overlay-dark").after("<div  class='contact-success color-red'>" + e.message + "</div>"), $("#btn-register-submit").removeAttr("disabled"), setTimeout(hidemsg, 5e3)
        }
    }), !1
}), $("#btn-register-reset").click(function() {
    hidemsg(), hideerror()
}), $("#register_id").keydown(function(e) {
    if (!$("textarea").is(":focus") && 13 == e.keyCode) return e.preventDefault(), $("#btn-register-submit").trigger("click"), !1
}), commentSubmit();