var obj;
! function(t) {
    "use strict";

    function e(t) {
        return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
    }
    var r, n, i;

    function a(t, a) {
        (r(t, a) ? i : n)(t, a)
    }
    i = "classList" in document.documentElement ? (r = function(t, a) {
        return t.classList.contains(a)
    }, n = function(t, a) {
        t.classList.add(a)
    }, function(t, a) {
        t.classList.remove(a)
    }) : (r = function(t, a) {
        return e(a).test(t.className)
    }, n = function(t, a) {
        r(t, a) || (t.className = t.className + " " + a)
    }, function(t, a) {
        t.className = t.className.replace(e(a), " ")
    });
    var o = {
        hasClass: r,
        addClass: n,
        removeClass: i,
        toggleClass: a,
        has: r,
        add: n,
        remove: i,
        toggle: a
    };
    "function" == typeof define && define.amd ? define(o) : t.classie = o
}(window), $(".order-but").on("click", function(t) {
    var a = $(".httpserver").text();
    t.preventDefault();
    var e = $(this).attr("data-href");
    return obj = {
        proid: $(this).attr("data-proid"),
        group: $(this).attr("data-group"),
        code: $(this).attr("data-code"),
        name: $(this).attr("data-name"),
        brief: $(this).attr("data-brief"),
        ref: $(this).attr("data-ref"),
        price: $(this).attr("data-price"),
        image: $(this).attr("data-image"),
        url: $(this).attr("data-url")
    }, $.ajax({
        type: "POST",
        data: "pro_id=" + $(this).attr("data-proid") + "&pro_type=" + $(this).attr("data-type") + "&pro_sku=" + $(this).attr("data-code"),
        url: a + "add-cart.html",
        cache: !1,
        success: function(t) {
            $(".container, .header, .footer, .go-top").animate({
                opacity: 0
            }, 300, "linear"), window.location = e
        }
    }), !1
}), $(".quick-add").on("click", function(t) {
    t.preventDefault(), obj = {
        proid: $(this).attr("data-proid"),
        group: $(this).attr("data-group"),
        code: $(this).attr("data-code"),
        name: $(this).attr("data-name"),
        brief: $(this).attr("data-brief"),
        ref: $(this).attr("data-ref"),
        price: $(this).attr("data-price"),
        image: $(this).attr("data-image")
    }, $(".cart-text").addClass("color"), 1 == FirstLoad && classie.add(cart, "animate"), onEndAnimation(cartNum, function() {
        classie.remove(cart, "animate")
    });
    var a = parseInt(cartNum.innerHTML);
    return cartNum.innerHTML = a + 1, $.ajax({
        type: "POST",
        data: "pro_id=" + $(this).attr("data-proid") + "&pro_type=" + $(this).attr("data-type") + "&pro_sku=" + $(this).attr("data-code"),
        url: httpserver + "add-cart.html",
        cache: !1,
        success: function(t) {}
    }), !1
});
var cartDel, cartUp, cartDown, cartIpts, httpserver = $(".httpserver").text(),
    FirstLoad = 1,
    onEndAnimation = function(t, a) {
        var e = function(t) {
            t.target == this && (this.removeEventListener("webkitAnimationEnd", e), this.removeEventListener("animationend", e), a && "function" == typeof a && a.call())
        };
        t.addEventListener("webkitAnimationEnd", e), t.addEventListener("animationend", e)
    },
    cart = document.querySelector(".cart-shopping"),
    cartNum = document.querySelector(".cart-text"),
    $itemPage = $(".cart-box .append-item");

function loadCart() {
    var t = Number($(".append-item ul").length) || 0;
    $(".append-item ul").length && (cartNum.innerHTML = t);
    var a = $(".append-item").html() || "";
    $itemPage.html(a), delEvents(), upEvents(), downEvents(), keyupEvents(), updateCart(!1)
}

function ready(t) {
    t.proid;
    var a = t.group,
        e = t.code;
    checkCode(e) ? update_quantity(e) : checkGroup(a) ? addRowToGroup(t) : addRow(t), delEvents(), upEvents(), downEvents(), keyupEvents()
}

function checkCode(t) {
    return $itemPage.find(".cart-quantity[data-code=" + t + "]").length
}

function checkGroup(t) {
    return $itemPage.find('.cart-group[data-group="' + t + '"]').length
}

function addRow(t) {
    var a = Number($itemPage.find(".cart-no").last().html()) + 1 || 1,
        e = '<ul class="cart-group" data-group="' + t.group + '" data-ref="' + t.ref + '">';
    e += '<li class="cart-no" data-group="' + t.group + '" rowspan="1">' + a + "</li>", e += '<li class="cart-name" data-group="' + t.group + '" rowspan="1"><input type="hidden" id="proid' + t.proid + '" value="' + t.proid + '" name="proid[]"><h3>' + t.name + "</h3><p>" + t.brief + "</p></li>", e += '<li class="cart-img" data-group="' + t.group + '"><a href=' + t.url + "><img src=" + t.image + ' alt="' + t.name + '"></a></li>', e += '<li class="cart-quantity" data-code=' + t.code + '><span class="cart-down"></span><input type="text" class="input-quantity" name="proquantity[]" value="1" /><span class="cart-up"></span></li>', e += '<li class="cart-price" data-price=' + t.price + ">" + t.price + "</li>", e += '<li class="cart-delete"><span></span></li>', e += "</ul>", $itemPage.append(e), updateCart()
}

function update_quantity(t) {
    var a = Number($itemPage.find(".cart-quantity[data-code=" + t + "] input").val()) + 1;
    $itemPage.find(".cart-quantity[data-code=" + t + "] input").val(a), updateCart()
}

function addRowToGroup(t) {
    var a = Number($itemPage.find('.cart-name[data-group="' + t.group + '"]').attr("rowspan")) + 1;
    $itemPage.find('.cart-name[data-group="' + t.group + '"]').attr("rowspan", a), $itemPage.find('.cart-no[data-group="' + t.group + '"]').attr("rowspan", a);
    var e = '<ul class="cart-group" data-group="' + t.group + '" data-ref="' + t.ref + '">';
    e += '<li class="cart-img" data-group="' + t.group + '"><input type="hidden" id="proid' + t.proid + '" value="' + t.proid + '" name="proid[]"><a href=' + t.url + "><img src=" + t.image + ' alt="' + t.name + '"></a></li>', e += '<li class="cart-quantity" data-code=' + t.code + '><span class="cart-down"></span><input type="text" value="1" /><span class="cart-up"></span></li>', e += '<li class="cart-price" data-price=' + t.price + ">" + t.price + "</li>", e += '<li class="cart-delete"><span></span></li>', e += "</ul>", $(e).insertAfter($itemPage.find('.cart-group[data-group="' + t.group + '"]').last()), updateCart()
}

function keyupEvents() {
    cartIpts = [].slice.call(document.querySelectorAll(".cart-quantity input"));
    var a = 0;
    cartIpts.forEach(function(t) {
        t.onfocus = function() {
            a = $(this).parent().parent().index(), this.value == this.getAttribute("value") && (this.value = "")
        }, t.onblur = function() {
            a = $(this).parent().parent().index(), "" == this.value ? this.value = this.getAttribute("value") : this.setAttribute("value", this.value), $(".cart-box .append-item ul:eq(" + a + ") .cart-quantity input").val(this.value), $(".cart-box .append-item ul:eq(" + a + ") .cart-quantity input").attr("value", this.value), updateCart()
        }, t.onkeydown = function(t) {
            if (a = $(this).parent().parent().index(), 13 == t.keyCode) return t.stopPropagation(), document.activeElement.blur(), updateCart(), !1
        }, t.onkeyup = function(t) {
            t.stopPropagation();
            this.value;
            for (var a, e = "0123456789", r = 0; r < this.value.length; r++) {
                a = !1;
                for (var n = 0; n < e.length; n++) this.value.charAt(r) == e.charAt(n) && (a = !0);
                0 == a && (this.value = this.value.replace(this.value.charAt(r), ""), r--)
            }
            return !0
        }
    })
}

function delEvents() {
    (cartDel = [].slice.call(document.querySelectorAll("li.cart-delete"))).forEach(function(t) {
        t.onclick = function() {
            var t = $(this).parent().attr("data-group"),
                a = $(this).parent().attr("data-ref"),
                e = Number($itemPage.find('.cart-name[data-group="' + t + '"]').attr("rowspan")) - 1,
                r = Number($itemPage.find('ul[data-group="' + t + '"]').first().find(".cart-no").html()),
                n = $(this).parent().index();
            if ($(".cart-box .append-item ul:eq(" + n + ")").remove(), $itemPage.find('.cart-name[data-group="' + t + '"]').length) $itemPage.find('.cart-name[data-group="' + t + '"]').attr("rowspan", e), $itemPage.find('.cart-no[data-group="' + t + '"]').attr("rowspan", e);
            else {
                var i = '<li class="cart-no" data-group="' + t + '" rowspan=' + e + ">" + r + "</li>",
                    o = '<li class="cart-name" data-group=' + t + " rowspan=" + e + ">" + a + "</li>";
                $itemPage.find("ul[data-group=" + t + "]").first().prepend(i), $(o).insertBefore($itemPage.find('ul[data-group="' + t + '"]').first().find(".cart-img"))
            }
            updateCart()
        }
    })
}

function upEvents() {
    (cartUp = [].slice.call(document.querySelectorAll(".cart-up"))).forEach(function(t) {
        t.onclick = function() {
            var t = $(this).parent().parent().index(),
                a = Number($(this).parent().find("input").val()) + 1;
            $(".cart-box .append-item ul:eq(" + t + ")").find(".cart-quantity input").val(a), $(".cart-box .append-item ul:eq(" + t + ")").find(".cart-quantity input").attr("value", a), updateCart()
        }
    })
}

function downEvents() {
    (cartDown = [].slice.call(document.querySelectorAll(".cart-down"))).forEach(function(t) {
        t.onclick = function() {
            var t = $(this).parent().parent().index(),
                a = Number($(this).parent().find("input").val()) - 1;
            0 == a && (a = 1), $(".cart-box .append-item ul:eq(" + t + ")").find(".cart-quantity input").val(a), $(".cart-box .append-item ul:eq(" + t + ")").find(".cart-quantity input").attr("value", a), updateCart()
        }
    })
}

function updateCart(t) {
    var o = 0,
        c = 0;
    if ($itemPage.find("ul").each(function(t, a) {
            var e = Number($(a).find(".cart-quantity input").val()),
                r = Number($(a).find(".cart-price").attr("data-price"));
            $(a).find(".cart-quantity input").val(e), $(a).find(".cart-quantity input").attr("value", e);
            var n = e * r;
            o += e, c += n, n = n.formatMoney(0, ",", "."), r = r.formatMoney(0, ",", ".");
            var i = $(this).index();
            $(".cart-box .append-item ul:eq(" + i + ")").find(".cart-price").html(r)
        }), 0 == c ? ($(".cart-mess").remove(), $(".cart-content").addClass("cart-empty").append(cartMess), $(".cart-box").remove(), $(".cart-text").removeClass("color"), $(".other-but-cart").removeClass("display-none")) : ($(".cart-mess").remove(), $(".other-but-cart").addClass("display-none"), c = c.formatMoney(0, ",", "."), $(".cart-text").html(o), $(".cart-text").addClass("color"), $(".cart-sub-total").html(c + " <small>" + $(".cart-sub-total").attr("data-dvt") + "</small>"), $(".cart-total").html(c + " <small>" + $(".cart-total").attr("data-dvt") + "</small>"), 1 == FirstLoad && classie.add(cart, "animate"), onEndAnimation(cartNum, function() {
            classie.remove(cart, "animate")
        })), !1 !== t) {
        var a = $("#frm-update").serialize();
        $.ajax({
            type: "POST",
            url: httpserver + "update-cart.html",
            data: a,
            success: function(t) {
                var a = JSON.parse(t);
                $("#vpc_Amount").val(a.total)
            }
        })
    }
}

function validateCart() {
    var t = !0,
        a = checkNull("cus_name", $("#cus_name").attr("data-error"), $("#cus_name").attr("data-default"), "40", "-298"),
        e = checkNull("cus_city", $("#cus_city").attr("data-error"), $("#cus_city").attr("data-default"), "40", "-298"),
        r = checkNull("cus_phone", $("#cus_phone").attr("data-error"), $("#cus_phone").attr("data-default"), "40", "-298"),
        n = checkNull("cus_postcode", $("#cus_postcode").attr("data-error"), $("#cus_postcode").attr("data-default"), "40", "-298"),
        i = password = !0;
    $("#register-page").length && (i = checkNull("cus_username", $("#cus_username").attr("data-error"), $("#cus_username").attr("data-default"), "40", "-298"), password = checkNull("cus_password", $("#cus_password").attr("data-error"), $("#cus_password").attr("data-default"), "40", "-298"));
    var o = checkMail("cus_email", $("#cus_email").attr("data-error"), $("#cus_email").attr("data-default"), "40", "-298");
    if (!(a && o && r && e && n && i && password)) {
        if (t = !1, $(".form-box").length) {
            var c = $(".form-box").offset().top - 175;
            $("html, body").animate({
                scrollTop: c
            }, 500, "linear")
        }
        setTimeout(hideerror, 5e3)
    }
    return t
}
cartMess = '<div class="cart-mess">' + $(".cart-content").attr("data-cart-empty") + "</div>", loadCart(), $(".cart-overlay, .hide-cart").on("click", function(t) {
    return t.preventDefault(), $(".cart-overlay").stop().fadeOut(50, "linear", function() {
        $("html, body").removeClass("no-scroll")
    }), !1
}), $("#cus_phone").numeric(), $(document).ready(function() {
    $(".term-but").on("click", function(t) {
        t.preventDefault();
        var a = $(this).attr("data-href");
        return $("html, body").addClass("no-scroll"), $(".loadx").length || ($("body").append('<div class="loadx" style="display:block"></div>'), $(".overlay-dark").addClass("show"), popupLoad(a)), !1
    }), $("#order_product").on("click", function(t) {
        if (t.preventDefault(), 1 == validateCart()) {
            if ($("#dong-y").is(":checked")) {
                $("#order_product").attr("disabled", "disabled"), $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>');
                var a = (a = $("#frm-update").serialize()) + "&" + $("#cart-info").serialize();
                return $.ajax({
                    type: "POST",
                    url: httpserver + "send-cart-none.html",
                    data: a,
                    dataType: "json",
                    success: function(t) {
                        if ($(".loadx").fadeOut(300, "linear", function() {
                                $(".loadx").remove()
                            }), "200" == t.status) {
                            document.getElementById("frm-update").reset(), document.getElementById("cart-info").reset(), $(".cart-delete").trigger("click");
                            var a = httpserver + "view-pop-thankyou.html";
                            $("html, body").addClass("no-scroll"), $(".loadicon").hasClass("loader") || ($(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'), $(".overlay-dark").addClass("show"), popupLoad(a))
                        } else $(".overlay-dark").after("<div  class='contact-success color-red'>" + t.message + "</div>");
                        $("#order_product").removeAttr("disabled"), setTimeout(hidemsg, 5e3)
                    }
                }), !1
            }
            $(".overlay-dark").after("<div  class='contact-success color-red'>" + $("#dong-y").attr("data-error") + "</div>"), setTimeout(hidemsg, 5e3)
        }
        return $(".formError").click(function() {
            $(this).remove()
        }), !1
    }), $("#btn-register").on("click", function(t) {
        if (t.preventDefault(), 1 == validateCart()) {
            if ($("#dong-y").is(":checked")) {
                $("#btn-register").attr("disabled", "disabled"), $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>');
                var a = $(this).attr("data-reload"),
                    e = $("#cart-info").serialize();
                return $.ajax({
                    type: "POST",
                    url: httpserver + "send-register-none.html",
                    data: e,
                    dataType: "json",
                    success: function(t) {
                        $(".loadx").fadeOut(300, "linear", function() {
                            $(".loadx").remove()
                        }), "200" == t.status ? (document.getElementById("cart-info").reset(), $(".overlay-dark").after("<div  class='contact-success color-blue'>" + t.message + "</div>"), setTimeout(function() {
                            window.location = a
                        }, 500)) : $(".overlay-dark").after("<div  class='contact-success color-red'>" + t.message + "</div>"), $("#btn-register").removeAttr("disabled"), setTimeout(hidemsg, 5e3)
                    }
                }), !1
            }
            $(".overlay-dark").after("<div  class='contact-success color-red'>" + $("#dong-y").attr("data-error") + "</div>"), setTimeout(hidemsg, 5e3)
        }
        return $(".formError").click(function() {
            $(this).remove()
        }), !1
    })
});