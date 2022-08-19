function remove_unicode(t) {
    return t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = t.toLowerCase()).replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")).replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e")).replace(/ì|í|ị|ỉ|ĩ/g, "i")).replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o")).replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u")).replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y")).replace(/đ/g, "d")).replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, "-")).replace(/-+-/g, "-")).replace(/^\-+|\-+$/g, "")
}

function BackgroundNode(t) {
    var n = t.node,
        o = t.loadedClassName,
        s = n.getAttribute("data-background");
    return {
        node: n,
        load: function(t) {
            var e, i = new Image;
            i.onload = (e = t, void requestAnimationFrame(function() {
                n.style.backgroundImage = "url(".concat(s, ")"), n.classList.add(o), e()
            })), i.src = s
        }
    }
}! function(t, n) {
    "use strict";
    "function" != typeof t.CustomEvent && (t.CustomEvent = function(t, e) {
        e = e || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var i = n.createEvent("CustomEvent");
        return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i
    }, t.CustomEvent.prototype = t.Event.prototype), n.addEventListener("touchstart", i, !1), n.addEventListener("touchmove", o, !1), n.addEventListener("touchend", e, !1), n.addEventListener("mousedown", i, !1), n.addEventListener("mousemove", o, !1), n.addEventListener("mouseup", e, !1);
    var s = null,
        a = null,
        r = null,
        h = null,
        l = null,
        c = null;

    function e(t) {
        if (c === t.target) {
            var e = parseInt(c.getAttribute("data-swipe-threshold") || "20", 10),
                i = parseInt(c.getAttribute("data-swipe-timeout") || "500", 10),
                n = Date.now() - l,
                o = "";
            Math.abs(r) > Math.abs(h) ? Math.abs(r) > e && n < i && (o = 0 < r ? "swipeleft" : "swiperight") : Math.abs(h) > e && n < i && (o = 0 < h ? "swipeup" : "swipedown"), "" !== o && c.dispatchEvent(new CustomEvent(o, {
                bubbles: !0,
                cancelable: !0
            })), l = a = s = null
        }
    }

    function i(t) {
        "true" !== t.target.getAttribute("data-swipe-ignore") && (c = t.target, l = Date.now(), s = t.touches ? t.touches[0].clientX : t.clientX, a = t.touches ? t.touches[0].clientY : t.clientY, h = r = 0)
    }

    function o(t) {
        if (s && a) {
            var e = t.touches ? t.touches[0].clientX : t.clientX,
                i = t.touches ? t.touches[0].clientY : t.clientY;
            r = s - e, h = a - i
        }
    }
}(window, document),
function(a) {
    function e(t, e, i, n) {
        var o = t.text().split(e),
            s = "";
        o.length && (a(o).each(function(t, e) {
            s += '<span class="' + i + (t + 1) + '">' + e + "</span>" + n
        }), t.empty().append(s))
    }
    var i = {
        init: function() {
            return this.each(function() {
                e(a(this), "", "char", "")
            })
        },
        words: function() {
            return this.each(function() {
                e(a(this), " ", "word", " ")
            })
        },
        lines: function() {
            return this.each(function() {
                var t = "eefec303079ad17405c889e092e105b0";
                e(a(this).children("br").replaceWith(t).end(), t, "line", "")
            })
        }
    };
    a.fn.lettering = function(t) {
        return t && i[t] ? i[t].apply(this, [].slice.call(arguments, 1)) : "letters" !== t && t ? (a.error("Method " + t + " does not exist on jQuery.lettering"), this) : i.init.apply(this, [].slice.call(arguments, 0))
    }
}(jQuery), jQuery.fn.focusTextToEnd = function() {
        this.focus();
        var t = this.val();
        return this.val("").val(t), this
    },
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t : t(jQuery)
    }(function(c) {
        var f, u, t = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
            e = "onwheel" in window.document || 9 <= window.document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            d = Array.prototype.slice;
        if (c.event.fixHooks)
            for (var i = t.length; i;) c.event.fixHooks[t[--i]] = c.event.mouseHooks;
        var m = c.event.special.mousewheel = {
            version: "3.1.12",
            setup: function() {
                if (this.addEventListener)
                    for (var t = e.length; t;) this.addEventListener(e[--t], n, {
                        passive: !1
                    });
                else this.onmousewheel = n;
                c.data(this, "mousewheel-line-height", m.getLineHeight(this)), c.data(this, "mousewheel-page-height", m.getPageHeight(this))
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var t = e.length; t;) this.removeEventListener(e[--t], n, {
                        passive: !1
                    });
                else this.onmousewheel = null;
                c.removeData(this, "mousewheel-line-height"), c.removeData(this, "mousewheel-page-height")
            },
            getLineHeight: function(t) {
                var e = c(t),
                    i = e["offsetParent" in c.fn ? "offsetParent" : "parent"]();
                return i.length || (i = c("body")), parseInt(i.css("fontSize"), 10) || parseInt(e.css("fontSize"), 10) || 16
            },
            getPageHeight: function(t) {
                return c(t).height()
            },
            settings: {
                adjustOldDeltas: !0,
                normalizeOffset: !0
            }
        };

        function n(t) {
            var e, i = t || window.event,
                n = d.call(arguments, 1),
                o = 0,
                s = 0,
                a = 0;
            if ((t = c.event.fix(i)).type = "mousewheel", "detail" in i && (a = -1 * i.detail), "wheelDelta" in i && (a = i.wheelDelta), "wheelDeltaY" in i && (a = i.wheelDeltaY), "wheelDeltaX" in i && (s = -1 * i.wheelDeltaX), "axis" in i && i.axis === i.HORIZONTAL_AXIS && (s = -1 * a, a = 0), o = 0 === a ? s : a, "deltaY" in i && (o = a = -1 * i.deltaY), "deltaX" in i && (s = i.deltaX, 0 === a && (o = -1 * s)), 0 !== a || 0 !== s) {
                if (1 === i.deltaMode) {
                    var r = c.data(this, "mousewheel-line-height");
                    o *= r, a *= r, s *= r
                } else if (2 === i.deltaMode) {
                    var h = c.data(this, "mousewheel-page-height");
                    o *= h, a *= h, s *= h
                }
                if (e = Math.max(Math.abs(a), Math.abs(s)), (!u || e < u) && g(i, u = e) && (u /= 40), g(i, e) && (o /= 40, s /= 40, a /= 40), o = Math[1 <= o ? "floor" : "ceil"](o / u), s = Math[1 <= s ? "floor" : "ceil"](s / u), a = Math[1 <= a ? "floor" : "ceil"](a / u), m.settings.normalizeOffset && this.getBoundingClientRect) {
                    var l = this.getBoundingClientRect();
                    t.offsetX = t.clientX - l.left, t.offsetY = t.clientY - l.top
                }
                return t.deltaX = s, t.deltaY = a, t.deltaFactor = u, t.deltaMode = 0, n.unshift(t, o, s, a), f && window.clearTimeout(f), f = window.setTimeout(p, 200), (c.event.dispatch || c.event.handle).apply(this, n)
            }
        }

        function p() {
            u = null
        }

        function g(t, e) {
            return m.settings.adjustOldDeltas && "mousewheel" === t.type && e % 120 == 0
        }
        c.fn.extend({
            mousewheel: function(t) {
                return t ? this.on("mousewheel", t) : this.trigger("mousewheel")
            },
            unmousewheel: function(t) {
                return this.off("mousewheel", t)
            }
        })
    }),
    function(t, e) {
        if ("function" == typeof define && define.amd) define(["exports"], e);
        else if ("undefined" != typeof exports) e(exports);
        else {
            var i = {};
            e(i), t.PinchZoom = i
        }
    }(this, function(t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
            value: function(t, e) {
                if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                for (var i = Object(t), n = 1; n < arguments.length; n++) {
                    var o = arguments[n];
                    if (null != o)
                        for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (i[s] = o[s])
                }
                return i
            },
            writable: !0,
            configurable: !0
        }), "function" != typeof Array.from && (Array.from = function(t) {
            return [].slice.call(t)
        });
        var s = function(t, e) {
                var i = document.createEvent("HTMLEvents");
                i.initEvent(e, !0, !1), t.dispatchEvent(i)
            },
            e = function() {
                var t = function(t, e) {
                        this.el = t, this.zoomFactor = 1, this.lastScale = 1, this.offset = {
                            x: 0,
                            y: 0
                        }, this.initialOffset = {
                            x: 0,
                            y: 0
                        }, this.options = Object.assign({}, this.defaults, e), this.setupMarkup(), this.bindEvents(), this.update(), this.isImageLoaded(this.el) && (this.updateAspectRatio(), this.setupOffsets()), this.enable()
                    },
                    e = function(t, e) {
                        return t + e
                    };
                t.prototype = {
                    defaults: {
                        tapZoomFactor: 2,
                        zoomOutFactor: 1.3,
                        animationDuration: 300,
                        maxZoom: 4,
                        minZoom: 1,
                        draggableUnzoomed: !0,
                        lockDragAxis: !1,
                        setOffsetsOnce: !1,
                        use2d: !0,
                        zoomStartEventName: "pz_zoomstart",
                        zoomUpdateEventName: "pz_zoomupdate",
                        zoomEndEventName: "pz_zoomend",
                        dragStartEventName: "pz_dragstart",
                        dragUpdateEventName: "pz_dragupdate",
                        dragEndEventName: "pz_dragend",
                        doubleTapEventName: "pz_doubletap",
                        verticalPadding: 0,
                        horizontalPadding: 0,
                        onZoomStart: null,
                        onZoomEnd: null,
                        onZoomUpdate: null,
                        onDragStart: null,
                        onDragEnd: null,
                        onDragUpdate: null,
                        onDoubleTap: null
                    },
                    handleDragStart: function(t) {
                        s(this.el, this.options.dragStartEventName), "function" == typeof this.options.onDragStart && this.options.onDragStart(this, t), this.stopAnimation(), this.lastDragPosition = !1, this.hasInteraction = !0, this.handleDrag(t)
                    },
                    handleDrag: function(t) {
                        var e = this.getTouches(t)[0];
                        this.drag(e, this.lastDragPosition), this.offset = this.sanitizeOffset(this.offset), this.lastDragPosition = e
                    },
                    handleDragEnd: function() {
                        s(this.el, this.options.dragEndEventName), "function" == typeof this.options.onDragEnd && this.options.onDragEnd(this, event), this.end()
                    },
                    handleZoomStart: function(t) {
                        s(this.el, this.options.zoomStartEventName), "function" == typeof this.options.onZoomStart && this.options.onZoomStart(this, t), this.stopAnimation(), this.lastScale = 1, this.nthZoom = 0, this.lastZoomCenter = !1, this.hasInteraction = !0
                    },
                    handleZoom: function(t, e) {
                        var i = this.getTouchCenter(this.getTouches(t)),
                            n = e / this.lastScale;
                        this.lastScale = e, this.nthZoom += 1, 3 < this.nthZoom && (this.scale(n, i), this.drag(i, this.lastZoomCenter)), this.lastZoomCenter = i
                    },
                    handleZoomEnd: function() {
                        s(this.el, this.options.zoomEndEventName), "function" == typeof this.options.onZoomEnd && this.options.onZoomEnd(this, event), this.end()
                    },
                    handleDoubleTap: function(t) {
                        var e = this.getTouches(t)[0],
                            i = 1 < this.zoomFactor ? 1 : this.options.tapZoomFactor,
                            n = this.zoomFactor,
                            o = function(t) {
                                this.scaleTo(n + t * (i - n), e)
                            }.bind(this);
                        this.hasInteraction || (this.isDoubleTap = !0, i < n && (e = this.getCurrentZoomCenter()), this.animate(this.options.animationDuration, o, this.swing), s(this.el, this.options.doubleTapEventName), "function" == typeof this.options.onDoubleTap && this.options.onDoubleTap(this, t))
                    },
                    computeInitialOffset: function() {
                        this.initialOffset = {
                            x: -Math.abs(this.el.offsetWidth * this.getInitialZoomFactor() - this.containPinch.offsetWidth) / 2,
                            y: -Math.abs(this.el.offsetHeight * this.getInitialZoomFactor() - this.containPinch.offsetHeight) / 2
                        }
                    },
                    resetOffset: function() {
                        this.offset.x = this.initialOffset.x, this.offset.y = this.initialOffset.y
                    },
                    isImageLoaded: function(t) {
                        return "IMG" === t.nodeName ? t.complete && 0 !== t.naturalHeight : Array.from(t.querySelectorAll("img")).every(this.isImageLoaded)
                    },
                    setupOffsets: function() {
                        this.options.setOffsetsOnce && this._isOffsetsSet || (this._isOffsetsSet = !0, this.computeInitialOffset(), this.resetOffset())
                    },
                    sanitizeOffset: function(t) {
                        var e = this.el.offsetWidth * this.getInitialZoomFactor() * this.zoomFactor,
                            i = this.el.offsetHeight * this.getInitialZoomFactor() * this.zoomFactor,
                            n = e - this.getContainerX() + this.options.horizontalPadding,
                            o = i - this.getContainerY() + this.options.verticalPadding,
                            s = Math.max(n, 0),
                            a = Math.max(o, 0),
                            r = Math.min(n, 0) - this.options.horizontalPadding,
                            h = Math.min(o, 0) - this.options.verticalPadding;
                        return {
                            x: Math.min(Math.max(t.x, r), s),
                            y: Math.min(Math.max(t.y, h), a)
                        }
                    },
                    scaleTo: function(t, e) {
                        this.scale(t / this.zoomFactor, e)
                    },
                    scale: function(t, e) {
                        t = this.scaleZoomFactor(t), this.addOffset({
                            x: (t - 1) * (e.x + this.offset.x),
                            y: (t - 1) * (e.y + this.offset.y)
                        }), s(this.el, this.options.zoomUpdateEventName), "function" == typeof this.options.onZoomUpdate && this.options.onZoomUpdate(this, event)
                    },
                    scaleZoomFactor: function(t) {
                        var e = this.zoomFactor;
                        return this.zoomFactor *= t, this.zoomFactor = Math.min(this.options.maxZoom, Math.max(this.zoomFactor, this.options.minZoom)), this.zoomFactor / e
                    },
                    canDrag: function() {
                        return this.options.draggableUnzoomed || (t = this.zoomFactor, !((e = 1) - .01 < t && t < e + .01));
                        var t, e
                    },
                    drag: function(t, e) {
                        e && (this.options.lockDragAxis ? Math.abs(t.x - e.x) > Math.abs(t.y - e.y) ? this.addOffset({
                            x: -(t.x - e.x),
                            y: 0
                        }) : this.addOffset({
                            y: -(t.y - e.y),
                            x: 0
                        }) : this.addOffset({
                            y: -(t.y - e.y),
                            x: -(t.x - e.x)
                        }), s(this.el, this.options.dragUpdateEventName), "function" == typeof this.options.onDragUpdate && this.options.onDragUpdate(this, event))
                    },
                    getTouchCenter: function(t) {
                        return this.getVectorAvg(t)
                    },
                    getVectorAvg: function(t) {
                        return {
                            x: t.map(function(t) {
                                return t.x
                            }).reduce(e) / t.length,
                            y: t.map(function(t) {
                                return t.y
                            }).reduce(e) / t.length
                        }
                    },
                    addOffset: function(t) {
                        this.offset = {
                            x: this.offset.x + t.x,
                            y: this.offset.y + t.y
                        }
                    },
                    sanitize: function() {
                        this.zoomFactor < this.options.zoomOutFactor ? this.zoomOutAnimation() : this.isInsaneOffset(this.offset) && this.sanitizeOffsetAnimation()
                    },
                    isInsaneOffset: function(t) {
                        var e = this.sanitizeOffset(t);
                        return e.x !== t.x || e.y !== t.y
                    },
                    sanitizeOffsetAnimation: function() {
                        var e = this.sanitizeOffset(this.offset),
                            i = this.offset.x,
                            n = this.offset.y,
                            t = function(t) {
                                this.offset.x = i + t * (e.x - i), this.offset.y = n + t * (e.y - n), this.update()
                            }.bind(this);
                        this.animate(this.options.animationDuration, t, this.swing)
                    },
                    zoomOutAnimation: function() {
                        if (1 !== this.zoomFactor) {
                            var e = this.zoomFactor,
                                i = this.getCurrentZoomCenter(),
                                t = function(t) {
                                    this.scaleTo(e + t * (1 - e), i)
                                }.bind(this);
                            this.animate(this.options.animationDuration, t, this.swing)
                        }
                    },
                    updateAspectRatio: function() {
                        this.unsetContainerY(), null !== document.querySelector(".pinch-zoom-container") && this.setContainerY(this.containPinch.parentNode.offsetHeight)
                    },
                    getInitialZoomFactor: function() {
                        var t = this.containPinch.offsetWidth / this.el.offsetWidth,
                            e = this.containPinch.offsetHeight / this.el.offsetHeight;
                        return Math.min(t, e)
                    },
                    getAspectRatio: function() {
                        return this.el.offsetWidth / this.el.offsetHeight
                    },
                    getCurrentZoomCenter: function() {
                        var t = this.offset.x - this.initialOffset.x,
                            e = -1 * this.offset.x - t / (1 / this.zoomFactor - 1),
                            i = this.offset.y - this.initialOffset.y;
                        return {
                            x: e,
                            y: -1 * this.offset.y - i / (1 / this.zoomFactor - 1)
                        }
                    },
                    getTouches: function(t) {
                        var e = this.containPinch.getBoundingClientRect(),
                            i = document.documentElement.scrollTop || document.body.scrollTop,
                            n = document.documentElement.scrollLeft || document.body.scrollLeft,
                            o = e.top + i,
                            s = e.left + n;
                        return Array.prototype.slice.call(t.touches).map(function(t) {
                            return {
                                x: t.pageX - s,
                                y: t.pageY - o
                            }
                        })
                    },
                    animate: function(i, n, o, s) {
                        var a = (new Date).getTime(),
                            r = function() {
                                if (this.inAnimation) {
                                    var t = (new Date).getTime() - a,
                                        e = t / i;
                                    i <= t ? (n(1), s && s(), this.update(), this.stopAnimation(), this.update()) : (o && (e = o(e)), n(e), this.update(), requestAnimationFrame(r))
                                }
                            }.bind(this);
                        this.inAnimation = !0, requestAnimationFrame(r)
                    },
                    stopAnimation: function() {
                        this.inAnimation = !1
                    },
                    swing: function(t) {
                        return -Math.cos(t * Math.PI) / 2 + .5
                    },
                    getContainerX: function() {
                        return this.containPinch.offsetWidth
                    },
                    getContainerY: function() {
                        return this.containPinch.offsetHeight
                    },
                    setContainerY: function(t) {
                        return this.containPinch.style.height = t + "px"
                    },
                    unsetContainerY: function() {
                        this.containPinch.style.height = null
                    },
                    setupMarkup: function() {
                        var t, e;
                        this.containPinch = (t = '<div class="pinch-zoom-container"></div>', (e = document.implementation.createHTMLDocument("")).body.innerHTML = t, Array.from(e.body.children)[0]), this.el.parentNode.insertBefore(this.containPinch, this.el), this.containPinch.appendChild(this.el), this.containPinch.style.position = "relative", this.el.style.webkitTransformOrigin = "0% 0%", this.el.style.mozTransformOrigin = "0% 0%", this.el.style.msTransformOrigin = "0% 0%", this.el.style.oTransformOrigin = "0% 0%", this.el.style.transformOrigin = "0% 0%", this.el.style.position = "absolute"
                    },
                    end: function() {
                        this.hasInteraction = !1, this.sanitize(), this.update()
                    },
                    bindEvents: function() {
                        var e = this;
                        i(this.containPinch, this), window.addEventListener("resize", this.update.bind(this)), Array.from(this.el.querySelectorAll("img")).forEach(function(t) {
                            t.addEventListener("load", e.update.bind(e))
                        }), "IMG" === this.el.nodeName && this.el.addEventListener("load", this.update.bind(this))
                    },
                    update: function(a) {
                        this.updatePlaned || (this.updatePlaned = !0, window.setTimeout(function() {
                            this.updatePlaned = !1, a && "resize" === a.type && (this.updateAspectRatio(), this.setupOffsets()), a && "load" === a.type && (this.updateAspectRatio(), this.setupOffsets());
                            var t = this.getInitialZoomFactor() * this.zoomFactor,
                                e = -this.offset.x / t,
                                i = -this.offset.y / t,
                                n = "scale3d(" + t + ", " + t + ",1) translate3d(" + e + "px," + i + "px,0px)",
                                o = "scale(" + t + ", " + t + ") translate(" + e + "px," + i + "px)",
                                s = function() {
                                    this.clone && (this.clone.parentNode.removeChild(this.clone), delete this.clone)
                                }.bind(this);
                            !this.options.use2d || this.hasInteraction || this.inAnimation ? (this.is3d = !0, s(), this.el.style.webkitTransform = n, this.el.style.mozTransform = o, this.el.style.msTransform = o, this.el.style.oTransform = o, this.el.style.transform = n) : (this.is3d && (this.clone = this.el.cloneNode(!0), this.clone.style.pointerEvents = "none", this.clone.style.display = "none", this.containPinch.appendChild(this.clone), window.setTimeout(s, 100)), this.el.style.webkitTransform = o, this.el.style.mozTransform = o, this.el.style.msTransform = o, this.el.style.oTransform = o, this.el.style.transform = o, this.is3d = !1)
                        }.bind(this), 0))
                    },
                    enable: function() {
                        this.enabled = !0
                    },
                    disable: function() {
                        this.enabled = !1
                    }
                };
                var i = function(t, o) {
                    var s = null,
                        i = 0,
                        n = null,
                        a = null,
                        e = function(t, e) {
                            if (s !== t) {
                                if (s && !t) switch (s) {
                                    case "zoom":
                                        o.handleZoomEnd(e);
                                        break;
                                    case "drag":
                                        o.handleDragEnd(e)
                                }
                                switch (t) {
                                    case "zoom":
                                        o.handleZoomStart(e);
                                        break;
                                    case "drag":
                                        o.handleDragStart(e)
                                }
                            }
                            s = t
                        },
                        r = function(t) {
                            2 === i ? e("zoom") : 1 === i && o.canDrag() ? e("drag", t) : e(null, t)
                        },
                        h = function(t) {
                            return Array.from(t).map(function(t) {
                                return {
                                    x: t.pageX,
                                    y: t.pageY
                                }
                            })
                        },
                        l = function(t, e) {
                            var i, n;
                            return i = t.x - e.x, n = t.y - e.y, Math.sqrt(i * i + n * n)
                        },
                        c = function(t) {
                            t.stopPropagation(), t.preventDefault()
                        },
                        f = !0;
                    t.addEventListener("touchstart", function(t) {
                        o.enabled && (f = !0, i = t.touches.length, function(t) {
                            var e = (new Date).getTime();
                            if (1 < i && (n = null), e - n < 300) switch (c(t), o.handleDoubleTap(t), s) {
                                case "zoom":
                                    o.handleZoomEnd(t);
                                    break;
                                case "drag":
                                    o.handleDragEnd(t)
                            } else o.isDoubleTap = !1;
                            1 === i && (n = e)
                        }(t))
                    }, {
                        passive: !0
                    }), t.addEventListener("touchmove", function(t) {
                        if (o.enabled && !o.isDoubleTap) {
                            if (f) r(t), s && c(t), a = h(t.touches);
                            else {
                                switch (s) {
                                    case "zoom":
                                        2 == a.length && 2 == t.touches.length && o.handleZoom(t, (e = a, i = h(t.touches), n = l(e[0], e[1]), l(i[0], i[1]) / n));
                                        break;
                                    case "drag":
                                        o.handleDrag(t)
                                }
                                s && (c(t), o.update())
                            }
                            f = !1
                        }
                        var e, i, n
                    }, {
                        passive: !0
                    }), t.addEventListener("touchend", function(t) {
                        o.enabled && (i = t.touches.length, r(t))
                    })
                };
                return t
            }();
        t.default = e
    });
var defaultOptions = {
    selector: "[data-background]",
    loadedClassName: "load-done"
};

function BackgroundLazyLoader() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : defaultOptions,
        e = t.selector,
        i = t.loadedClassName,
        o = [].slice.apply(document.querySelectorAll(e)).map(function(t) {
            return new BackgroundNode({
                node: t,
                loadedClassName: i
            })
        }),
        n = new IntersectionObserver(function(t, n) {
            t.forEach(function(t) {
                var e = t.target;
                if (t.isIntersecting) {
                    var i = o.find(function(t) {
                        return t.node.isSameNode(e)
                    });
                    i && i.load(function() {
                        n.unobserve(e), (o = o.filter(function(t) {
                            return !t.node.isSameNode(e)
                        })).length || n.disconnect()
                    })
                }
            })
        });
    o.forEach(function(t) {
        return n.observe(t.node)
    })
}! function(a) {
    a.fn.scale = function(t) {
        var e, i, n, o = a(this),
            s = ((i = (e = o).data("_ARS_data")) || (i = {
                scale: 1
            }, e.data("_ARS_data", i)), i);
        return void 0 === t ? s.scale : (s.scale = t, n = s, o.css("transform", "scale(" + n.scale + "," + n.scale + ")"), this)
    };
    var t = a.fx.prototype.cur;
    a.fx.prototype.cur = function() {
        return "scale" == this.prop ? parseFloat(a(this.elem).scale()) : t.apply(this, arguments)
    }, a.fx.step.scale = function(t) {
        a(t.elem).scale(t.now)
    }
}(jQuery),
function(P) {
    P.fn.magnify = function(M) {
        M = P.extend({
            src: "",
            speed: 100,
            timeout: -1,
            touchBottomOffset: 0,
            finalWidth: null,
            finalHeight: null,
            magnifiedWidth: null,
            magnifiedHeight: null,
            limitBounds: !1,
            Full: !1,
            mobileCloseEvent: "touchstart",
            afterLoad: function() {}
        }, M);
        var t = this,
            T = P("html"),
            e = 0,
            A = function() {
                clearTimeout(e), e = setTimeout(function() {
                    t.destroy(), t.magnify(M)
                }, 100)
            };
        return this.destroy = function() {
            return this.each(function() {
                var t = P(this),
                    e = t.prev("div.magnify-lens"),
                    i = t.data("originalStyle");
                t.parent("div.magnify").length && e.length && (i ? t.attr("style", i) : t.removeAttr("style"), t.unwrap(), e.remove())
            }), P(window).off("resize", A), t
        }, P(window).resize(A), this.each(function() {
            ! function(t) {
                var a = P(t),
                    e = a.closest("a"),
                    n = {};
                for (var i in M) n[i] = a.attr("data-magnify-" + i.toLowerCase());
                var o = n.src || M.src || e.attr("href") || "";
                if (o) {
                    var s, r, h, l, c, f, u, d, m, p, g, v, y, b, w = 0,
                        x = 0,
                        E = function() {
                            var t = s.offset();
                            return b = {
                                top: a.offset().top - t.top + parseInt(a.css("border-top-width")) + parseInt(a.css("padding-top")),
                                left: a.offset().left - t.left + parseInt(a.css("border-left-width")) + parseInt(a.css("padding-left"))
                            }, t.top += b.top, t.left += b.left, t
                        },
                        z = function() {
                            r.is(":visible") && r.fadeOut(M.speed, function() {
                                T.removeClass("magnifying").trigger("magnifyend")
                            })
                        },
                        O = function(t) {
                            if (l) {
                                if (t ? (t.preventDefault(), m = t.pageX || t.originalEvent.touches[0].pageX, p = t.pageY || t.originalEvent.touches[0].pageY, a.data("lastPos", {
                                        x: m,
                                        y: p
                                    })) : (m = a.data("lastPos").x, p = a.data("lastPos").y), g = m - y.left, v = p - y.top - M.touchBottomOffset, r.is(":animated") || (w < g && g < h - w && x < v && v < l - x ? r.is(":hidden") && (T.addClass("magnifying").trigger("magnifystart"), r.fadeIn(M.speed)) : z()), r.is(":visible")) {
                                    var e = "";
                                    if (c && f) {
                                        var i = -Math.round(g / h * c - u / 2),
                                            n = -Math.round(v / l * f - d / 2);
                                        if (M.limitBounds) {
                                            var o = -Math.round((h - w) / h * c - u / 2),
                                                s = -Math.round((l - x) / l * f - d / 2);
                                            0 < i ? i = 0 : i < o && (i = o), 0 < n ? n = 0 : n < s && (n = s)
                                        }
                                        e = i + "px " + n + "px"
                                    }
                                    r.css({
                                        top: Math.round(v - d / 2) + b.top + "px",
                                        left: Math.round(g - u / 2) + b.left + "px",
                                        "background-position": e
                                    })
                                }
                            } else A()
                        };
                    isNaN(+n.speed) || (M.speed = +n.speed), isNaN(+n.timeout) || (M.timeout = +n.timeout), isNaN(+n.finalWidth) || (M.finalWidth = +n.finalWidth), isNaN(+n.finalHeight) || (M.finalHeight = +n.finalHeight), isNaN(+n.magnifiedWidth) || (M.magnifiedWidth = +n.magnifiedWidth), isNaN(+n.magnifiedHeight) || (M.magnifiedHeight = +n.magnifiedHeight), "true" === n.limitBounds && (M.limitBounds = !0), "function" == typeof window[n.afterLoad] && (M.afterLoad = window[n.afterLoad]), /\b(Android|BlackBerry|IEMobile|iPad|iPhone|Mobile|Opera Mini)\b/.test(navigator.userAgent) ? isNaN(+n.touchBottomOffset) || (M.touchBottomOffset = +n.touchBottomOffset) : M.touchBottomOffset = 0, a.data("originalStyle", a.attr("style"));
                    var D = new Image;
                    P(D).on({
                        load: function() {
                            a.css("display", "block"), a.parent(".magnify").length || a.wrap('<div class="magnify"></div>'), s = a.parent(".magnify"), a.prev(".magnify-lens").length ? s.children(".magnify-lens").css("background-image", "url('" + o + "')") : a.before('<div class="magnify-lens loading" style="background:url(\'' + o + "') 0 0 no-repeat\"></div>"), (r = s.children(".magnify-lens")).removeClass("loading"), h = M.finalWidth || a.width(), l = M.finalHeight || a.height(), c = M.magnifiedWidth || D.width, f = M.magnifiedHeight || D.height, u = r.width(), d = r.height(), y = E(), M.limitBounds && (w = u / 2 / (c / h), x = d / 2 / (f / l)), c === D.width && f === D.height || r.css("background-size", c + "px " + f + "px"), a.data("zoomSize", {
                                width: c,
                                height: f
                            }), s.data("mobileCloseEvent", n.mobileCloseEvent || M.mobileCloseEvent), D = null, M.afterLoad(), r.is(":visible") && O(), s.off().on({
                                "mousemove touchmove": O,
                                mouseenter: function() {
                                    y = E()
                                },
                                mouseleave: z
                            }), 0 <= M.timeout && s.on("touchend", function() {
                                setTimeout(z, M.timeout)
                            }), P("body").not(s).on("touchstart", z);
                            var t = a.attr("usemap");
                            if (t) {
                                var i = P("map[name=" + t.slice(1) + "]");
                                a.after(i), s.click(function(t) {
                                    if (t.clientX || t.clientY) {
                                        r.hide();
                                        var e = document.elementFromPoint(t.clientX || t.originalEvent.touches[0].clientX, t.clientY || t.originalEvent.touches[0].clientY);
                                        "AREA" === e.nodeName ? e.click() : P("area", i).each(function() {
                                            var t = P(this).attr("coords").split(",");
                                            if (g >= t[0] && g <= t[2] && v >= t[1] && v <= t[3]) return this.click(), !1
                                        })
                                    }
                                })
                            }
                            e.length && (e.css("display", "inline-block"), !e.attr("href") || n.src || M.src || e.click(function(t) {
                                t.preventDefault()
                            }))
                        },
                        error: function() {
                            D = null
                        }
                    }), D.src = o
                }
            }(this)
        })
    }
}(jQuery);
! function(h, i, n, o) {
    function l(t, e) {
        this.settings = null, this.options = h.extend({}, l.Defaults, e), this.$element = h(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, h.each(["onResize", "onThrottledResize"], h.proxy(function(t, e) {
            this._handlers[e] = h.proxy(this[e], this)
        }, this)), h.each(l.Plugins, h.proxy(function(t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)), h.each(l.Workers, h.proxy(function(t, e) {
            this._pipe.push({
                filter: e.filter,
                run: h.proxy(e.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    l.Defaults = {
        items: 5,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: i,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "slide-refresh",
        loadedClass: "slide-slidebox",
        loadingClass: "slide-loading",
        rtlClass: "slide-rtl",
        responsiveClass: "slide-responsive",
        dragClass: "slide-drag",
        itemClass: "slide-item",
        stageClass: "slide-wrapper",
        stageOuterClass: "slide-wrapper-outer",
        grabClass: "grabbing"
    }, l.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, l.Type = {
        Event: "event",
        State: "state"
    }, l.Plugins = {}, l.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this.settings.margin || "",
                i = !this.settings.autoWidth,
                s = this.settings.rtl,
                n = {
                    width: "auto",
                    "margin-left": s ? e : "",
                    "margin-right": s ? "" : e
                };
            !i && this.$stage.children().css(n), t.css = n
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                i = null,
                s = this._items.length,
                n = !this.settings.autoWidth,
                o = [];
            for (t.items = {
                    merge: !1,
                    width: e
                }; s--;) i = this._mergers[s], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = 1 < i || t.items.merge, o[s] = n ? e * i : this._items[s].width();
            this._widths = o
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t = [],
                e = this._items,
                i = this.settings,
                s = Math.max(2 * i.items, 4),
                n = 2 * Math.ceil(e.length / 2),
                o = i.loop && e.length ? i.rewind ? s : Math.max(s, n) : 0,
                r = "",
                a = "";
            for (o /= 2; o--;) t.push(this.normalize(t.length / 2, !0)), r += e[t[t.length - 1]][0].outerHTML, t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)), a = e[t[t.length - 1]][0].outerHTML + a;
            this._clones = t, h(r).addClass("cloned").appendTo(this.$stage), h(a).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, s = 0, n = 0, o = []; ++i < e;) s = o[i - 1] || 0, n = this._widths[this.relative(i)] + this.settings.margin, o.push(s + n * t);
            this._coordinates = o
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t = this.settings.stagePadding,
                e = this._coordinates,
                i = {
                    width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                    "padding-left": t || "",
                    "padding-right": t || ""
                };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this._coordinates.length,
                i = !this.settings.autoWidth,
                s = this.$stage.children();
            if (i && t.items.merge)
                for (; e--;) t.css.width = this._widths[this.relative(e)], s.eq(e).css(t.css);
            else i && (t.css.width = t.items.width, s.css(t.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, i, s, n = this.settings.rtl ? 1 : -1,
                o = 2 * this.settings.stagePadding,
                r = this.coordinates(this.current()) + o,
                a = r + this.width() * n,
                h = [];
            for (i = 0, s = this._coordinates.length; i < s; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * n, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && h.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + h.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).next().addClass("item-next").removeClass("item-prev"), this.$stage.children().eq(this.current()).prev().addClass("item-prev").removeClass("item-next"), this.$stage.children().eq(this.current()).addClass("center").removeClass("item-next item-prev"))
        }
    }], l.prototype.initialize = function() {
        var t, e, i;
        (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : o, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t));
        this.$element.addClass(this.options.loadingClass), this.$stage = h("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, l.prototype.setup = function() {
        var e = this.viewport(),
            t = this.options.responsive,
            i = -1,
            s = null;
        t ? (h.each(t, function(t) {
            t <= e && i < t && (i = Number(t))
        }), delete(s = h.extend({}, this.options, t[i])).responsive, s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : s = h.extend({}, this.options), null !== this.settings && this._breakpoint === i || (this.trigger("change", {
            property: {
                name: "settings",
                value: s
            }
        }), this._breakpoint = i, this.settings = s, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, l.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, l.prototype.prepare = function(t) {
        var e = this.trigger("prepare", {
            content: t
        });
        return e.data || (e.data = h("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {
            content: e.data
        }), e.data
    }, l.prototype.update = function() {
        for (var t = 0, e = this._pipe.length, i = h.proxy(function(t) {
                return this[t]
            }, this._invalidated), s = {}; t < e;)(this._invalidated.all || 0 < h.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(s), t++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, l.prototype.width = function(t) {
        switch (t = t || l.Width.Default) {
            case l.Width.Inner:
            case l.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, l.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, l.prototype.onThrottledResize = function() {
        i.clearTimeout(this.resizeTimer), this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, l.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, l.prototype.registerEventHandlers = function() {
        h.support.transition && this.$stage.on(h.support.transition.end + ".btq.core", h.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.btq.core", h.proxy(this.onDragStart, this)), this.$stage.on("dragstart.btq.core selectstart.btq.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.btq.core", h.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.btq.core", h.proxy(this.onDragEnd, this)))
    }, l.prototype.onDragStart = function(t) {
        var e = null;
        3 !== t.which && (e = h.support.transform ? {
            x: (e = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === e.length ? 12 : 4],
            y: e[16 === e.length ? 13 : 5]
        } : (e = this.$stage.position(), {
            x: this.settings.rtl ? e.left + this.$stage.width() - this.width() + this.settings.margin : e.left,
            y: e.top
        }), this.is("animating") && (h.support.transform ? this.animate(e.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = h(t.target), this._drag.stage.start = e, this._drag.stage.current = e, this._drag.pointer = this.pointer(t), h(n).on("mouseup.btq.core touchend.btq.core", h.proxy(this.onDragEnd, this)), h(n).one("mousemove.btq.core touchmove.btq.core", h.proxy(function(t) {
            t.preventDefault();
            var e = this.difference(this._drag.pointer, this.pointer(t));
            h(n).on("mousemove.btq.core touchmove.btq.core", h.proxy(this.onDragMove, this)), Math.abs(e.x) < Math.abs(e.y) && this.is("valid") || (this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, l.prototype.onDragMove = function(t) {
        var e = null,
            i = null,
            s = null,
            n = this.difference(this._drag.pointer, this.pointer(t)),
            o = this.difference(this._drag.stage.start, n);
        this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), s = this.settings.pullDrag ? -1 * n.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + s), i + s)), this._drag.stage.current = o, this.animate(o.x))
    }, l.prototype.onDragEnd = function(t) {
        var e = this.difference(this._drag.pointer, this.pointer(t)),
            i = this._drag.stage.current,
            s = 0 < e.x ^ this.settings.rtl ? "left" : "right";
        h(n).off(".btq.core"), this.$element.removeClass(this.options.grabClass), (0 !== e.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(i.x, 0 !== e.x ? s : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = s, (3 < Math.abs(e.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.btq.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, l.prototype.closest = function(i, s) {
        var n = -1,
            o = this.width(),
            r = this.coordinates();
        return this.settings.freeDrag || h.each(r, h.proxy(function(t, e) {
            return "left" === s && e - 30 < i && i < e + 30 ? n = t : "right" === s && e - o - 30 < i && i < e - o + 30 ? n = t + 1 : this.op(i, "<", e) && this.op(i, ">", r[t + 1] || e - o) && (n = "left" === s ? t + 1 : t), -1 === n
        }, this)), this.settings.loop || (this.op(i, ">", r[this.minimum()]) ? n = i = this.minimum() : this.op(i, "<", r[this.maximum()]) && (n = i = this.maximum())), n
    }, l.prototype.animate = function(t) {
        var e = 0 < this.speed();
        this.is("animating") && this.onTransitionEnd(), e && (this.enter("animating"), this.trigger("translate")), this.$stage.css({
            transform: "translate3d(" + t + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        })
    }, l.prototype.is = function(t) {
        return this._states.current[t] && 0 < this._states.current[t]
    }, l.prototype.current = function(t) {
        if (t === o) return this._current;
        if (0 === this._items.length) return o;
        if (t = this.normalize(t), this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== o && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, l.prototype.invalidate = function(t) {
        return "string" === h.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), h.map(this._invalidated, function(t, e) {
            return e
        })
    }, l.prototype.reset = function(t) {
        (t = this.normalize(t)) !== o && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
    }, l.prototype.normalize = function(t, e) {
        var i = this._items.length,
            s = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || i < 1 ? t = o : (t < 0 || i + s <= t) && (t = ((t - s / 2) % i + i) % i + s / 2), t
    }, l.prototype.relative = function(t) {
        return t -= this._clones.length / 2, this.normalize(t, !0)
    }, l.prototype.maximum = function(t) {
        var e, i = this.settings,
            s = this._coordinates.length,
            n = Math.abs(this._coordinates[s - 1]) - this._width,
            o = -1;
        if (i.loop) s = this._clones.length / 2 + this._items.length - 1;
        else if (i.autoWidth || i.merge)
            for (; 1 < s - o;) Math.abs(this._coordinates[e = s + o >> 1]) < n ? o = e : s = e;
        else s = i.center ? this._items.length - 1 : this._items.length - i.items;
        return t && (s -= this._clones.length / 2), Math.max(s, 0)
    }, l.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }, l.prototype.items = function(t) {
        return t === o ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
    }, l.prototype.mergers = function(t) {
        return t === o ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
    }, l.prototype.clones = function(i) {
        var e = this._clones.length / 2,
            s = e + this._items.length,
            n = function(t) {
                return t % 2 == 0 ? s + t / 2 : e - (t + 1) / 2
            };
        return i === o ? h.map(this._clones, function(t, e) {
            return n(e)
        }) : h.map(this._clones, function(t, e) {
            return t === i ? n(e) : null
        })
    }, l.prototype.speed = function(t) {
        return t !== o && (this._speed = t), this._speed
    }, l.prototype.coordinates = function(t) {
        var e, i = 1,
            s = t - 1;
        return t === o ? h.map(this._coordinates, h.proxy(function(t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (i = -1, s = t + 1), e = this._coordinates[t], e += (this.width() - e + (this._coordinates[s] || 0)) / 2 * i) : e = this._coordinates[s] || 0, e = Math.ceil(e))
    }, l.prototype.duration = function(t, e, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, l.prototype.to = function(t, e) {
        var i = this.current(),
            s = null,
            n = t - this.relative(i),
            o = (0 < n) - (n < 0),
            r = this._items.length,
            a = this.minimum(),
            h = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(n) > r / 2 && (n += -1 * o * r), (s = (((t = i + n) - a) % r + r) % r + a) !== t && s - n <= h && 0 < s - n && (i = s - n, t = s, this.reset(i))) : t = this.settings.rewind ? (t % (h += 1) + h) % h : Math.max(a, Math.min(h, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
    }, l.prototype.next = function(t) {
        t = t || !1, this.to(this.relative(this.current()) + 1, t)
    }, l.prototype.prev = function(t) {
        t = t || !1, this.to(this.relative(this.current()) - 1, t)
    }, l.prototype.onTransitionEnd = function(t) {
        if (t !== o && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, l.prototype.viewport = function() {
        var t;
        if (this.options.responsiveBaseElement !== i) t = h(this.options.responsiveBaseElement).width();
        else if (i.innerWidth) t = i.innerWidth;
        else {
            if (!n.documentElement || !n.documentElement.clientWidth) throw "Can not detect viewport width.";
            t = n.documentElement.clientWidth
        }
        return t
    }, l.prototype.replace = function(t) {
        this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : h(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function() {
            return 1 === this.nodeType
        }).each(h.proxy(function(t, e) {
            e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, l.prototype.add = function(t, e) {
        var i = this.relative(this._current);
        e = e === o ? this._items.length : this.normalize(e, !0), t = t instanceof jQuery ? t : h(t), this.trigger("add", {
            content: t,
            position: e
        }), t = this.prepare(t), 0 === this._items.length || e === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[e - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").attr("data-merge") || 1)), this._items[i] && this.reset(this._items[i].index()), this.invalidate("items"), this.trigger("added", {
            content: t,
            position: e
        })
    }, l.prototype.remove = function(t) {
        (t = this.normalize(t, !0)) !== o && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: t
        }))
    }, l.prototype.preloadAutoWidthImages = function(t) {
        t.each(h.proxy(function(t, e) {
            this.enter("pre-loading"), e = h(e), h(new Image).one("load", h.proxy(function(t) {
                e.attr("src", t.target.src), e.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"))
        }, this))
    }, l.prototype.destroy = function() {
        for (var t in this.$element.off(".btq.core"), this.$stage.off(".btq.core"), h(n).off(".btq.core"), !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer), this.off(i, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[t].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("btq.slidebox")
    }, l.prototype.op = function(t, e, i) {
        var s = this.settings.rtl;
        switch (e) {
            case "<":
                return s ? i < t : t < i;
            case ">":
                return s ? t < i : i < t;
            case ">=":
                return s ? t <= i : i <= t;
            case "<=":
                return s ? i <= t : t <= i
        }
    }, l.prototype.on = function(t, e, i, s) {
        t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent && t.attachEvent("on" + e, i)
    }, l.prototype.off = function(t, e, i, s) {
        t.removeEventListener ? t.removeEventListener(e, i, s) : t.detachEvent && t.detachEvent("on" + e, i)
    }, l.prototype.trigger = function(t, e, i, s, n) {
        var o = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            r = h.camelCase(h.grep(["on", t, i], function(t) {
                return t
            }).join("-").toLowerCase()),
            a = h.Event([t, "btq", i || "slidebox"].join(".").toLowerCase(), h.extend({
                relatedTarget: this
            }, o, e));
        return this._supress[t] || (h.each(this._plugins, function(t, e) {
            e.onTrigger && e.onTrigger(a)
        }), this.register({
            type: l.Type.Event,
            name: t
        }), this.$element.trigger(a), this.settings && "function" == typeof this.settings[r] && this.settings[r].call(this, a)), a
    }, l.prototype.enter = function(t) {
        h.each([t].concat(this._states.tags[t] || []), h.proxy(function(t, e) {
            this._states.current[e] === o && (this._states.current[e] = 0), this._states.current[e]++
        }, this))
    }, l.prototype.leave = function(t) {
        h.each([t].concat(this._states.tags[t] || []), h.proxy(function(t, e) {
            this._states.current[e]--
        }, this))
    }, l.prototype.register = function(i) {
        if (i.type === l.Type.Event) {
            if (h.event.special[i.name] || (h.event.special[i.name] = {}), !h.event.special[i.name].btq) {
                var e = h.event.special[i.name]._default;
                h.event.special[i.name]._default = function(t) {
                    return !e || !e.apply || t.namespace && -1 !== t.namespace.indexOf("btq") ? t.namespace && -1 < t.namespace.indexOf("btq") : e.apply(this, arguments)
                }, h.event.special[i.name].btq = !0
            }
        } else i.type === l.Type.State && (this._states.tags[i.name] ? this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags) : this._states.tags[i.name] = i.tags, this._states.tags[i.name] = h.grep(this._states.tags[i.name], h.proxy(function(t, e) {
            return h.inArray(t, this._states.tags[i.name]) === e
        }, this)))
    }, l.prototype.suppress = function(t) {
        h.each(t, h.proxy(function(t, e) {
            this._supress[e] = !0
        }, this))
    }, l.prototype.release = function(t) {
        h.each(t, h.proxy(function(t, e) {
            delete this._supress[e]
        }, this))
    }, l.prototype.pointer = function(t) {
        var e = {
            x: null,
            y: null
        };
        return (t = (t = t.originalEvent || t || i.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e
    }, l.prototype.isNumeric = function(t) {
        return !isNaN(parseFloat(t))
    }, l.prototype.difference = function(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }, h.fn.BTQSlider = function(e) {
        var s = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var t = h(this),
                i = t.data("btq.slidebox");
            i || (i = new l(this, "object" == typeof e && e), t.data("btq.slidebox", i), h.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, e) {
                i.register({
                    type: l.Type.Event,
                    name: e
                }), i.$element.on(e + ".btq.slidebox.core", h.proxy(function(t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([e]), i[e].apply(this, [].slice.call(arguments, 1)), this.release([e]))
                }, i))
            })), "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, s)
        })
    }, h.fn.BTQSlider.Constructor = l
}(window.Zepto || window.jQuery, window, document),
function(e, i, t, s) {
    var n = function(t) {
        this._core = t, this._interval = null, this._visible = null, this._handlers = {
            "initialized.btq.slidebox": e.proxy(function(t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = e.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    n.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, n.prototype.watch = function() {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = i.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, n.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("slide-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, n.prototype.destroy = function() {
        var t, e;
        for (t in i.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, e.fn.BTQSlider.Constructor.Plugins.AutoRefresh = n
}(window.Zepto || window.jQuery, window, document),
function(a, o, t, e) {
    var i = function(t) {
        this._core = t, this._loaded = [], this._handlers = {
            "initialized.btq.slidebox change.btq.slidebox resized.btq.slidebox": a.proxy(function(t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type)) {
                    var e = this._core.settings,
                        i = e.center && Math.ceil(e.items / 2) || e.items,
                        s = e.center && -1 * i || 0,
                        n = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + s,
                        o = this._core.clones().length,
                        r = a.proxy(function(t, e) {
                            this.load(e)
                        }, this);
                    for (0 < e.lazyLoadEager && (i += e.lazyLoadEager, e.loop && (n -= e.lazyLoadEager, i++)); s++ < i;) this.load(o / 2 + this._core.relative(n)), o && a.each(this._core.clones(this._core.relative(n)), r), n++
                }
            }, this)
        }, this._core.options = a.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = {
        lazyLoad: !1,
        lazyLoadEager: 0
    }, i.prototype.load = function(t) {
        var e = this._core.$stage.children().children(),
            i = this._core.$stage.children().eq(t),
            s = i && i.find(".lazyload");
        !s || -1 < a.inArray(i.get(0), this._loaded) || (s && e.each(function(t, e) {
            a(e).parent().addClass("loading")
        }), s.each(a.proxy(function(t, e) {
            var i, s = a(e),
                n = 1 < o.devicePixelRatio && s.attr("data-src-retina") || s.attr("data-src") || s.attr("data-srcset");
            this._core.trigger("load", {
                element: s,
                url: n
            }, "lazy"), s.is("img") ? (s.one("load.btq.lazy", a.proxy(function() {
                s.css("opacity", 1), this._core.trigger("loaded", {
                    element: s,
                    url: n
                }, "lazy")
            }, this)).attr("src", n), s.parent().parent().addClass("done")) : s.is("source") ? (s.one("load.btq.lazy", a.proxy(function() {
                this._core.trigger("loaded", {
                    element: s,
                    url: n
                }, "lazy")
            }, this)).attr("srcset", n), s.parent().parent().addClass("done")) : ((i = new Image).onload = a.proxy(function() {
                s.css({
                    "background-image": 'url("' + n + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: s,
                    url: n
                }, "lazy")
            }, this), i.src = n, s.parent().addClass("done"))
        }, this)), this._loaded.push(i.get(0)))
    }, i.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, a.fn.BTQSlider.Constructor.Plugins.Lazy = i
}(window.Zepto || window.jQuery, window, document),
function(r, i, t, e) {
    var s = function(t) {
        this._core = t, this._previousHeight = null, this._handlers = {
            "initialized.btq.slidebox refreshed.btq.slidebox": r.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.btq.slidebox": r.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
            }, this),
            "loaded.btq.lazy": r.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = r.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
        var e = this;
        r(i).on("load", function() {
            e._core.settings.autoHeight && e.update()
        }), r(i).resize(function() {
            e._core.settings.autoHeight && (null != e._intervalId && clearTimeout(e._intervalId), e._intervalId = setTimeout(function() {
                e.update()
            }, 250))
        })
    };
    s.Defaults = {
        autoHeight: !1,
        autoHeightClass: "autoheight"
    }, s.prototype.update = function() {
        var t = this._core._current,
            e = t + this._core.settings.items,
            i = this._core.settings.lazyLoad,
            s = this._core.$stage.children().toArray().slice(t, e),
            n = [],
            o = 0;
        r.each(s, function(t, e) {
            n.push(r(e).height())
        }), (o = Math.max.apply(null, n)) <= 1 && i && this._previousHeight && (o = this._previousHeight), this._previousHeight = o, this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass)
    }, s.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, r.fn.BTQSlider.Constructor.Plugins.AutoHeight = s
}(window.Zepto || window.jQuery, window, document),
function(d, t, l, e) {
    var i = function(t) {
        this._core = t, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.btq.slidebox": d.proxy(function(t) {
                t.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.btq.slidebox": d.proxy(function(t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this),
            "refreshed.btq.slidebox": d.proxy(function(t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .slide-video-frame").remove()
            }, this),
            "changed.btq.slidebox": d.proxy(function(t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this),
            "prepared.btq.slidebox": d.proxy(function(t) {
                if (t.namespace) {
                    var e = d(t.content).find(".slide-video");
                    e.length && (e.css("display", "none"), this.fetch(e, d(t.content)))
                }
            }, this)
        }, this._core.options = d.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    i.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, i.prototype.fetch = function(t, e) {
        var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
            s = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
            n = t.attr("data-width") || this._core.settings.videoWidth,
            o = t.attr("data-height") || this._core.settings.videoHeight,
            r = t.attr("href");
        if (0 < t.length) {
            if (!d("#youtube_js").length) {
                var a = l.createElement("script");

                function h(t) {
                    Mobile.matches && t.target.mute(), t.target.playVideo();
                    var e = t.target;
                    if (d(e.getIframe()).bind("InView", {
                            Player: e
                        }, function(t, e) {
                            1 == e ? t.data.Player.playVideo() : t.data.Player.pauseVideo()
                        }), d(".play-button").on("click", function(t) {
                            t.preventDefault(), e.playVideo()
                        }), d(".pause-button").on("click", function(t) {
                            t.preventDefault(), e.pauseVideo()
                        }), 1 < e.getPlayerState()) {
                        var i = e.getVideoData().title;
                        d(".slide-video-frame iframe").attr("title", i)
                    }
                }
                a.id = "youtube_js", a.setAttribute("rel", "preload"), a.setAttribute("as", "script"), a.src = "https://www.youtube.com/iframe_api", l.body.appendChild(a)
            }
            d(this._core).find(".slide-video");
            this._core.$element.on("click.btq.video", ".slide-video-play-icon", d.proxy(function(t) {
                this.play(t), d("#youtube_js").length && setTimeout(function() {
                    new YT.Player("VYT", {
                        events: {
                            onReady: h
                        }
                    })
                }, 500)
            }, this))
        }
        if (!r) throw new Error("Missing video URL.");
        if (-1 < (s = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) i = "youtube";
        else if (-1 < s[3].indexOf("vimeo")) i = "vimeo";
        else {
            if (!(-1 < s[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        s = s[6], this._videos[r] = {
            type: i,
            id: s,
            width: n,
            height: o
        }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
    }, i.prototype.thumbnail = function(e, t) {
        var i, s, n = t.width && t.height ? 'style="width:' + t.width + "px;height:" + t.height + 'px;"' : "",
            o = e.find("img"),
            r = "src",
            a = "",
            h = this._core.settings,
            l = function(t) {
                '<div class="slide-video-play-icon"></div>',
                i = h.lazyLoad ? '<div class="slide-video-tn ' + a + '" ' + r + '="' + t + '"></div>' : '<div class="slide-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>',
                e.after(i),
                e.after('<div class="slide-video-play-icon"></div>')
            };
        if (e.wrap('<div class="slide-video-wrapper"' + n + "></div>"), this._core.settings.lazyLoad && (r = "data-src", a = "lazyload"), o.length) return l(o.attr(r)), o.remove(), !1;
        "youtube" === t.type ? (s = "//img.youtube.com/pages/" + t.id + "/sddefault.jpg", l(s)) : "vimeo" === t.type ? d.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + t.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                s = t[0].thumbnail_large, l(s)
            }
        }) : "vzaar" === t.type && d.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + t.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                s = t.framegrab_url, l(s)
            }
        })
    }, i.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".slide-video-frame").remove(), this._playing.removeClass("slide-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, i.prototype.play = function(t) {
        var e, i = d(t.target).closest("." + this._core.settings.itemClass),
            s = this._videos[i.attr("data-video")];
        s.width, s.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), "youtube" === s.type ? e = (Mobile.matches, '<iframe id="VYT" title="video" src="https://www.youtube.com/embed/' + s.id + "?autoplay=1&enablejsapi=1&controls=1&loop=1&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=" + s.id + '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>') : "vimeo" === s.type ? e = '<iframe src="//player.vimeo.com/video/' + s.id + '?autoplay=1" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === s.type && (e = '<iframe frameborder="0"height="100%"width="100%" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + s.id + '/player?autoplay=true"></iframe>'), d('<div class="slide-video-frame">' + e + "</div>").insertAfter(i.find(".slide-video")), this._playing = i.addClass("slide-video-playing"))
    }, i.prototype.isInFullScreen = function() {
        var t = l.fullscreenElement || l.mozFullScreenElement || l.webkitFullscreenElement;
        return t && d(t).parent().hasClass("slide-video-frame")
    }, i.prototype.destroy = function() {
        var t, e;
        for (t in this._core.$element.off("click.btq.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, d.fn.BTQSlider.Constructor.Plugins.Video = i
}(window.Zepto || window.jQuery, window, document),
function(r, t, e, i) {
    var s = function(t) {
        this.core = t, this.core.options = r.extend({}, s.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
            "change.btq.slidebox": r.proxy(function(t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
            }, this),
            "drag.btq.slidebox dragged.btq.slidebox translated.btq.slidebox": r.proxy(function(t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this),
            "translate.btq.slidebox": r.proxy(function(t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    s.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, s.prototype.swap = function() {
        if (1 === this.core.settings.items && r.support.animation && r.support.transition) {
            this.core.speed(0);
            var t, e = r.proxy(this.clear, this),
                i = this.core.$stage.children().eq(this.previous),
                s = this.core.$stage.children().eq(this.next),
                n = this.core.settings.animateIn,
                o = this.core.settings.animateOut;
            this.core.current() !== this.previous && (o && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(r.support.animation.end, e).css({
                left: t + "px"
            }).addClass("animated animated-out").addClass(o)), n && s.one(r.support.animation.end, e).addClass("animated animated-in").addClass(n))
        }
    }, s.prototype.clear = function(t) {
        r(t.target).css({
            left: ""
        }).removeClass("animated animated-out animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, s.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, r.fn.BTQSlider.Constructor.Plugins.Animate = s
}(window.Zepto || window.jQuery, window, document),
function(i, s, n, t) {
    var e = function(t) {
        this._core = t, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.btq.slidebox": i.proxy(function(t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this),
            "initialized.btq.slidebox": i.proxy(function(t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.btq.autoplay": i.proxy(function(t, e, i) {
                t.namespace && this.play(e, i)
            }, this),
            "stop.btq.autoplay": i.proxy(function(t) {
                t.namespace && this.stop()
            }, this),
            "mouseover.btq.autoplay": i.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.btq.autoplay": i.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.btq.core": i.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.btq.core": i.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = i.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, e.prototype.play = function(t, e) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, e.prototype._getNextTimeout = function(t, e) {
        return this._timeout && s.clearTimeout(this._timeout), s.setTimeout(i.proxy(function() {
            this._paused || this._core.is("busy") || this._core.is("interacting") || n.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
        }, this), t || this._core.settings.autoplayTimeout)
    }, e.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout()
    }, e.prototype.stop = function() {
        this._core.is("rotating") && (s.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, e.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0)
    }, e.prototype.destroy = function() {
        var t, e;
        for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
    }, i.fn.BTQSlider.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(o, t, e, i) {
    "use strict";
    var s = function(t) {
        this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.btq.slidebox": o.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + o(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.btq.slidebox": o.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this),
            "remove.btq.slidebox": o.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "changed.btq.slidebox": o.proxy(function(t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this),
            "initialized.btq.slidebox": o.proxy(function(t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.btq.slidebox": o.proxy(function(t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = o.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    s.Defaults = {
        nav: !1,
        navText: ["", ""],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "slide-buttons",
        navClass: ["slide-prev", "slide-next"],
        slideBy: 1,
        dotClass: "slide-page",
        dotsClass: "slide-pagination",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        dotNum: !1,
        dotSvg: !1
    }, s.prototype.initialize = function() {
        var t, i = this._core.settings;
        for (t in this._controls.$relative = (i.navContainer ? o(i.navContainer) : o("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = o("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", o.proxy(function(t) {
                this.prev(i.navSpeed)
            }, this)), this._controls.$next = o("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", o.proxy(function(t) {
                this.next(i.navSpeed)
            }, this)), i.dotsData || (this._templates = [o("<div>").addClass(i.dotClass).append(o("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? o(i.dotsContainer) : o("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", o.proxy(function(t) {
                var e = o(t.target).parent().is(this._controls.$absolute) ? o(t.target).index() : o(t.target).parent().index();
                t.preventDefault(), this.to(e, i.dotsSpeed)
            }, this)), this._overrides) this._core[t] = o.proxy(this[t], this)
    }, s.prototype.destroy = function() {
        var t, e, i, s;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (s in this.overides) this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, s.prototype.update = function() {
        var t, e, i = this._core.clones().length / 2,
            s = i + this._core.items().length,
            n = this._core.maximum(!0),
            o = this._core.settings,
            r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
            for (this._pages = [], t = i, e = 0; t < s; t++) {
                if (r <= e || 0 === e) {
                    if (this._pages.push({
                            start: Math.min(n, t - i),
                            end: t - i + r - 1
                        }), Math.min(n, t - i) === n) break;
                    e = 0, 0
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }, s.prototype.draw = function() {
        var t, e = this._core.settings,
            i = this._core.items().length <= e.items,
            s = this._core.relative(this._core.current()),
            n = e.loop || e.rewind;
        this._controls.$relative.toggleClass("disabled", !e.nav || i), e.nav && (this._controls.$previous.toggleClass("disabled", !n && s <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !n && s >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !e.dots || i), e.dots && (t = this._pages.length - this._controls.$absolute.children().length, e.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : 0 < t ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), 1 == e.dotNum && 0 !== t && this._controls.$absolute.children().each(function(t, e) {
            o(e).children().addClass("dot-number"), o(this).children().text(t + 1)
        }), e.dotSvg && 0 !== t && this._controls.$absolute.children().each(function(t, e) {
            o(e).children().append('<svg><circle class="circle-outer" cx="15" cy="15" r="12"/></svg>')
        }), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(o.inArray(this.current(), this._pages)).addClass("active"))
    }, s.prototype.onTrigger = function(t) {
        var e = this._core.settings;
        t.page = {
            index: o.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items)
        }
    }, s.prototype.current = function() {
        var i = this._core.relative(this._core.current());
        return o.grep(this._pages, o.proxy(function(t, e) {
            return t.start <= i && t.end >= i
        }, this)).pop()
    }, s.prototype.getPosition = function(t) {
        var e, i, s = this._core.settings;
        return "page" == s.slideBy ? (e = o.inArray(this.current(), this._pages), i = this._pages.length, t ? ++e : --e, e = this._pages[(e % i + i) % i].start) : (e = this._core.relative(this._core.current()), i = this._core.items().length, t ? e += s.slideBy : e -= s.slideBy), e
    }, s.prototype.next = function(t) {
        o.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
    }, s.prototype.prev = function(t) {
        o.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
    }, s.prototype.to = function(t, e, i) {
        var s;
        !i && this._pages.length ? (s = this._pages.length, o.proxy(this._overrides.to, this._core)(this._pages[(t % s + s) % s].start, e)) : o.proxy(this._overrides.to, this._core)(t, e)
    }, o.fn.BTQSlider.Constructor.Plugins.Navigation = s
}(window.Zepto || window.jQuery, window, document),
function(n, t, e, o) {
    var r = n("<support>").get(0).style,
        a = "Webkit Moz O ms".split(" "),
        i = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        s = function() {
            return !!d("transform")
        },
        h = function() {
            return !!d("perspective")
        },
        l = function() {
            return !!d("animation")
        };

    function d(t, i) {
        var s = !1,
            e = t.charAt(0).toUpperCase() + t.slice(1);
        return n.each((t + " " + a.join(e + " ") + e).split(" "), function(t, e) {
            if (r[e] !== o) return s = !i || e, !1
        }), s
    }

    function c(t) {
        return d(t, !0)
    }(function() {
        return !!d("transition")
    })() && (n.support.transition = new String(c("transition")), n.support.transition.end = i.transition.end[n.support.transition]), l() && (n.support.animation = new String(c("animation")), n.support.animation.end = i.animation.end[n.support.animation]), s() && (n.support.transform = new String(c("transform")), n.support.transform3d = h())
}(window.Zepto || window.jQuery, window, document);
var UA = navigator.userAgent,
    HTML = document.documentElement,
    isFirefox = "undefined" != typeof InstallTrigger,
    isSafari = /constructor/i.test(window.HTMLElement) || "[object SafariRemoteNotification]" === (!window.safari || safari.pushNotification).toString(),
    isIE9 = /MSIE 9/i.test(UA),
    isIE10 = /MSIE 10/i.test(UA),
    isIE11 = /rv:11.0/i.test(UA),
    isIE = !!document.documentMode,
    isEdge = !isIE && !!window.StyleMedia && !isIE11,
    isChrome = -1 < UA.indexOf("Chrome") || !!window.chrome && !!window.chrome.webstore,
    Mobile = window.matchMedia("(max-width: 1024px)"),
    Touch = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "ontouchstart" in document.documentElement,
    iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
iOS && HTML.classList.add("is-iOS"), 1 == Touch && HTML.classList.add("is-touch"), isFirefox ? HTML.classList.add("is-Firefox") : isEdge ? HTML.classList.add("is-Edge") : isSafari ? HTML.classList.add("is-Safari") : isChrome && HTML.classList.add("is-Chrome");
var NotSupport = isIE9 || isIE10 || isIE11 || isIE || isEdge;

function changeUrl(e, t, i, o, n, a, l) {
    void 0 !== window.history.pushState && (document.URL != e && "" != e && window.history.pushState({
        path: e,
        dataName: n,
        title: t,
        keyword: o,
        description: i,
        titleog: a,
        descriptionog: l
    }, "", e));
    "" != t && ($("#hdtitle").html(t), $('meta[property="og:description"]').remove(), $("#hdtitle").after('<meta property="og:description" content="' + l + '">'), $('meta[property="og:title"]').remove(), $("#hdtitle").after('<meta property="og:title" content="' + a + '">'), $('meta[property="og:url"]').remove(), $("#hdtitle").after('<meta property="og:url" content="' + e + '">'), $("meta[name=keywords]").remove(), $("#hdtitle").after('<meta name="keywords" content="' + o + '">'), $("meta[name=description]").remove(), $("#hdtitle").after('<meta name="description" content="' + i + '">')), $("#changlanguage_redirect").val(e)
}
var Loadx = 0,
    Portrait = $(window).height() >= $(window).width(),
    Landscape = $(window).height() < $(window).width();

function ResizeWindows() {
    $(".bg-home img, .mobile-bg img, .bg-picture img"), $(".bg-inner img");
    var e = $(window).width(),
        t = $(window).height(),
        i = .5625;
    if (i < t / e ? t / i : (e * i, e), Mobile.matches ? HTML.classList.add("is-mobile") : HTML.classList.remove("is-mobile"), $(".news-load").css({
            "min-height": t / 2
        }), $(".scroll-down").css({
            top: t - 160
        }), $(".general-box").each(function(e, t) {
            $(t).children().length < 3 && $(t).children().addClass("no-three")
        }), $(".ulti-box").each(function(e, t) {
            $(t).children().length <= 0 && $(t).addClass("display-none")
        }), $(".choose-color").each(function(e, t) {
            $(t).find(".item-color").length <= 1 && $(t).addClass("display-none")
        }), $(".breadcrumb li").each(function(e, t) {
            "" == $(t).find("a").attr("href") && $(t).addClass("display-none")
        }), $(".rate-slider").each(function(e, t) {
            var i = $(t).find(".product-item").length;
            i < 1 ? $(t).parent().parent().addClass("display-none") : i <= 2 && $(t).addClass("inline align-center")
        }), $(".comment-list").hasClass("active")) {
        var o = $(".all-comment").innerHeight();
        $(".comment-list").css({
            height: o
        })
    }
    if (Mobile.matches) e <= 440 ? $(".bg-home, .slider-home").css({
        height: e * i
    }) : 440 < e && e <= 840 ? $(".bg-home, .slider-home").css({
        height: e * i
    }) : $(".bg-home, .slider-home").css({
        height: (e + 50) * i
    }), Portrait ? $(".bg-inner").css({
        height: (e + 150) * (550 / 1440)
    }) : $(".bg-inner").css({
        height: .385 * (e + 100)
    }), $(".detail-pic").removeAttr("style"), $(".tab-content").length && ($(".all-tab-content, .tab-content").css({
        width: "100%",
        left: "auto"
    }), $(".all-tab-content").height("auto"));
    else if ($(".detail-info").each(function(e, t) {
            var i = $(t).innerHeight();
            $(".detail-pic").height(i)
        }), $(".bg-home").css({
            height: t
        }), $(".bg-inner").css({
            height: .385 * e
        }), $(".tab-content").length) {
        var n = $(".info-details-products .wrap-content").width();
        $(".tab-content").width(n), $(".tab-content.active").length || $(".tab-des li:first-child button").trigger("click")
    }
}

function Done() {
    setTimeout(function() {
        ContentLoad(), SlidePicture(), $(".container").stop().animate({
            opacity: 1
        }, 400, "linear")
    }, 300), onScroll()
}

function PrintShare() {
    var e = $(".save-but");
    $(e).on("click", function() {
        return window.sidebar && window.sidebar.addPanel ? window.sidebar.addPanel(document.title, window.location.href, "") : window.external && "AddFavorite" in window.external ? window.external.AddFavorite(location.href, document.title) : alert("Nhấn " + (-1 != navigator.userAgent.toLowerCase().indexOf("mac") ? "Command/Cmd" : "CTRL") + " + D để tạo bookmark cho trang này."), !1
    }), $(".print-but").on("click", function() {
        window.print()
    }), $(".share-but").on("mouseenter", function() {
        $(this).addClass("active")
    }), $(".save-but, .print-but").on("mouseenter", function() {
        $(".share-but").removeClass("active")
    }), $(".print-box").on("mouseleave", function() {
        $(".share-but").removeClass("active")
    })
}
var httpserver = $(".httpserver").text(),
    httptemplate = $(".httptemplate").text();

function CallFilter(e) {
    $(".loadx").length || $("body").append('<div class="loadx l-center" style="display:block"></div>');
    var t = $(".product-list-content").offset().top - 65;
    $("html, body").stop().animate({
        scrollTop: t
    }, 1e3, "linear", function() {
        $(".product-load").children().removeClass("on-show"), $(".product-load").stop().animate({
            opacity: 0
        }, 300, "linear", function() {
            $(".product-load").removeClass("show"), $(".open-button").trigger("click"), "color-select" == e || "price-select" == e ? SearchProductByColorAndPrice() : "material-select" == e && SearchProductByMaterial()
        })
    })
}

function CustomeSelect() {
    var e, t, i, o, n, a, l, r, s, c, d;
    for (o = (e = document.getElementsByClassName("custom-select")).length, t = 0; t < o; t++)
        if (a = e[t].getElementsByTagName("select")[0], !e[t].querySelector(".select-items")) {
            n = a.length, l = document.createElement("DIV");
            var u = a.className;
            for (l.setAttribute("class", "select-selected"), (c = document.createElement("DIV")).setAttribute("class", "drop-down-select"), (d = document.createElement("DIV")).setAttribute("class", "wrap-drop-down-select"), l.innerHTML = a.options[a.selectedIndex].innerHTML, e[t].appendChild(l), (r = document.createElement("DIV")).setAttribute("class", "select-items select-hide " + u + " "), i = 1; i < n; i++) {
                (s = document.createElement("DIV")).className = "select-div", s.innerHTML = a.options[i].innerHTML;
                var p = a.options[i].getAttribute("value"),
                    m = a.options[i].getAttribute("data-name");
                s.setAttribute("data-value", p), s.setAttribute("data-name", m), s.addEventListener("click", function(e) {
                    var t, i, o, n, a, l, r;
                    for (l = (n = this.parentNode.parentNode.parentNode.parentNode.getElementsByTagName("select")[0]).length, a = this.parentNode.parentNode.parentNode.previousSibling, i = 0; i < l; i++)
                        if (n.options[i].innerHTML == this.innerHTML) {
                            for (n.selectedIndex = i, a.innerHTML = this.innerHTML, r = (t = this.parentNode.parentNode.parentNode.getElementsByClassName("same-as-selected")).length, o = 0; o < r; o++) t[o].removeAttribute("class");
                            this.setAttribute("class", "same-as-selected");
                            break
                        }
                    a.click()
                }), c.appendChild(s), d.appendChild(c), r.appendChild(d)
            }
            e[t].appendChild(r), l.addEventListener("click", function(e) {
                e.stopPropagation(), h(this), this.nextSibling.classList.toggle("select-hide"), this.classList.toggle("select-arrow-active"), this.parentNode.classList.toggle("level-index-in")
            })
        }

    function h(e) {
        var t, i, o, n, a, l = [];
        for (t = document.getElementsByClassName("select-items"), i = document.getElementsByClassName("select-selected"), n = t.length, a = i.length, o = 0; o < a; o++) e == i[o] ? l.push(o) : (i[o].classList.remove("select-arrow-active"), i[o].parentNode.classList.remove("level-index-in"));
        for (o = 0; o < n; o++) l.indexOf(o) && t[o].classList.add("select-hide")
    }
    document.addEventListener("click", h)
}
$("#comment").length && document.getElementById("comment").reset(), $(".filter-outer").length && $(".filter-outer").prepend('<button class="open-button" aria-label="open-button"><svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70"><rect  fill="currentColor" x="15" y="45.9"  class="st0" width="40" height="5.1"/><rect  fill="currentColor" x="15" y="32.4" class="st0" width="40" height="5.1"/><rect  fill="currentColor" x="15" y="19" class="st0" width="40" height="5.1"/></svg><span>filter</span></button>'), $("#type-select").length && $("#type-select").change(function() {
    $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>');
    var e = $(".detail-wrap").offset().top - 108;
    $("html, body").stop().animate({
        scrollTop: e
    }, 1e3, "linear", function() {
        $(".detail-pics").children().removeClass("on-show"), $(".detail-pics").stop().animate({
            opacity: 0
        }, 300, "linear", function() {
            SearchType()
        })
    })
}), $("#category-select").length && $("#category-select").change(function() {
    if ($(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'), isFirst) SearchProduct();
    else {
        var e = $(".product-list-content").offset().top - 108;
        $("html, body").stop().animate({
            scrollTop: e
        }, 1e3, "linear", function() {
            $(".product-load").children().removeClass("on-show"), $(".product-load").stop().animate({
                opacity: 0
            }, 300, "linear", function() {
                $(".product-load").removeClass("show"), SearchProduct()
            })
        })
    }
}), $(".open-button").length && $(".open-button").bind("click", function(e) {
    return e.preventDefault(), $(".open-button").hasClass("active") ? ($(".open-button").removeClass("active"), $(".filter-outer").removeClass("show"), $(".go-top").removeClass("index-out")) : ($(".open-button").addClass("active"), $(".filter-outer").addClass("show"), $(".go-top").addClass("index-out")), !1
}), $(".filter-outer").length && $(".input-select .cate-title:not(.category-filter)").bind("click", function(e) {
    if (e.preventDefault(), $(this).hasClass("active")) $(this).removeClass("active"), $(this).parent().find(".height-fil-trans").removeAttr("style"), $(this).parent().find(".filter").scrollTop(0);
    else {
        $(this).addClass("active");
        var t = $(this).parent().find(".filter").innerHeight();
        $(this).parent().find(".height-fil-trans").css({
            "max-height": t + "px"
        }), $(this).parent().find(".filter").scrollTop(0)
    }
    return !1
}), $(".filter").each(function(e, o) {
    $(o).find("li");
    $(o).on("click", "li", function(e) {
        e.preventDefault(), $(".reset-filter").addClass("show");
        var t = $(this).find("input"),
            i = $(o).attr("id");
        return $(t).is(":checked") ? ($(this).find("input").attr("checked", !1), $(this).find("input").parent().removeClass("current")) : ("price-select" == i && ($(o).find("li").removeClass("current"), $(o).find("input").attr("checked", !1)), $(this).find("input").attr("checked", !0), $(this).find("input").parent().addClass("current")), CallFilter(i), !1
    })
}), $(".reset-filter").on("click", function(e) {
    e.preventDefault(), $(".filter li").find("input").attr("checked", !1), $(".filter li").removeClass("current"), $(".category-filter li.current").trigger("click")
}), $(".login-but").on("click", function() {
    $(".login-overlay").hasClass("active") ? ($(".login-box").removeClass("active"), $(".login-overlay").stop().animate({
        opacity: 0
    }, 300, "linear", function() {
        $(".login-overlay").removeClass("active")
    })) : ($(".login-overlay").addClass("active"), $(".login-overlay").stop().animate({
        opacity: 1
    }, 300, "linear", function() {
        $(".login-box").addClass("active")
    })), $(".search-form.active").length && $(".search-form, .search-but").removeClass("active")
}), $(document).on("click", ".login-overlay", function() {
    $(".login-box").removeClass("active"), $(".login-overlay").stop().animate({
        opacity: 0
    }, 300, "linear", function() {
        $(".login-overlay").removeClass("active")
    })
}), $(".product-content").length && $(".product-content").on("click", ".like-but", function() {
    return $(".like-but").attr("disabled", "disabled"), $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'), $.ajax({
        type: "POST",
        url: httpserver + "send-like-item.html",
        data: "type=" + $(".like-circle").attr("data-type") + "&id=" + $(".like-circle").attr("data-id"),
        dataType: "json",
        success: function(e) {
            if ($(".loadx").fadeOut(300, "linear", function() {
                    $(".loadx").remove()
                }), "200" == e.status) {
                var t = Number($(".like-circle").attr("data-like")) + 1,
                    i = t.formatMoney(0, ",", ",");
                $(".like-circle").attr("data-like", t);
                var o = i.split(",").length,
                    n = "",
                    a = i.split(",")[0];
                2 == o ? (n = "K", a = t / 1e3) : 3 == o ? (n = "M", a = t / 1e6) : 4 == o && (n = "B", a = t / 1e9);
                var l = (a = a.toString().split("."))[0];
                if (1 < a.length) {
                    var r = a[1][0];
                    "0" != r && (l = l + "," + r)
                }
                l += n, $(".like-circle").html(l)
            } else $(".overlay-dark").after("<div  class='contact-success color-red'>" + e.message + "</div>");
            $(".like-but").removeAttr("disabled"), setTimeout(hidemsg, 5e3)
        }
    }), !1
}), $("#new-arrival-page").length && ($(".box-color-point").length && $(".box-color-point").each(function(e, t) {
    var i = $(t).attr("data-color");
    $(t).css({
        color: i
    })
}), $(".box-color-point").on("click", function(e) {
    e.preventDefault(), $(".box-color-point").removeClass("active"), $(".box-color-point").removeClass("current"), $(this).addClass("active");
    var t = $(this).attr("data-href");
    changeUrl($(this).attr("data-link"), "", "", "", "", "", ""), $(".detail-slider").animate({
        opacity: 0
    }, 300, "linear", function() {
        SliderDetailsLoad(t)
    })
}), $(".box-material").on("click", function() {
    $(".box-material").removeClass("active");
    var e = $(this).attr("data-material");
    $(this).addClass("active"), $(".list-color").removeClass("active"), $('.list-tab-color .list-color[data-tab= "' + e + '"]').addClass("active"), $(".box-color-point.current").length ? $(".box-color-point.current").trigger("click") : $('.list-tab-color .list-color[data-tab= "' + e + '"] .box-color-point:first-child').trigger("click")
}), $(".box-material").length ? $(".box-material.current").length ? $(".box-material.current").trigger("click") : $(".box-material:first-child").trigger("click") : $(".box-color-point").length && ($(".box-color-point.current").length ? $(".box-color-point.current").trigger("click") : $(".box-color-point:first-child").trigger("click"))), $(".container").on("click", function() {
    $(".search-but").hasClass("active") && $(".search-form, .search-but").removeClass("active")
}), document.addEventListener("DOMContentLoaded", function() {
    Done(), Loadx = 1, ResizeWindows();
    var e = $(".title-page h1, .title-page h2, .title-page h3, .title-page .sp-title").text(),
        t = document.createElement("DIV");
    t.className = "title-clone", t.innerHTML = e, $(".title-page").append(t), $(".title-page h1, .title-page h2, .title-page h3, .title-page .sp-title").css({
        display: "none"
    }), $(".title-page > .title-clone").lettering("words").children("span").lettering().children("span").lettering()
});
var inlineVideo = document.getElementById("inline-video"),
    youtubeVideo = document.getElementById("youtube-video");
if (inlineVideo || youtubeVideo) {
    var timeX, player, timeupdate = 0,
        supportsVideo = !!document.createElement("video").canPlayType,
        BgVideo = document.querySelector(".bg-video"),
        videoFull = document.querySelector(".video-cover"),
        controlYoutube = document.querySelector(".control-youtube"),
        videoControls = document.querySelector(".controls"),
        playBack = document.querySelector(".playback-button"),
        playbackAnimation = document.querySelector(".player-vid"),
        videoTime = document.querySelector(".video-time"),
        timeElapsed = document.querySelector(".time-elapsed"),
        duration = document.querySelector(".duration"),
        progressBar = document.querySelector(".progressbar"),
        Seek = document.querySelector(".seek"),
        volumeButton = document.querySelector(".volume-button"),
        volumeMute = document.querySelector(".volume-mute"),
        volumeHigh = document.querySelector(".volume-high"),
        fullscreenButton = document.querySelector(".fullscreen-button");
    if (playBack) var playIcon = playBack.querySelector(".play-icon"),
        pauseIcon = playBack.querySelector(".pause-icon");
    if (playbackAnimation) var playAni = playbackAnimation.querySelector(".play-icon"),
        pauseAni = playbackAnimation.querySelector(".pause-icon");
    if (fullscreenButton) var goFullscreen = fullscreenButton.querySelector(".fullscreen-icon"),
        exitFullscreen = fullscreenButton.querySelector(".fullscreen-exit-icon");

    function formatTime(e) {
        e = Math.round(e);
        var t = Math.floor(e / 60),
            i = e - 60 * t;
        return t + ":" + (i = i < 10 ? "0" + i : i)
    }

    function getTimeVideo() {
        if (youtubeVideo) var e = Math.round(player.getDuration());
        else e = Math.round(inlineVideo.duration);
        Seek.setAttribute("max", e), progressBar.setAttribute("max", e)
    }

    function animatePlayback() {
        playbackAnimation.animate([{
            opacity: 1,
            transform: "scale(1)"
        }, {
            opacity: 0,
            transform: "scale(1.3)"
        }], {
            duration: 500
        })
    }

    function toggleFullScreen() {
        document.fullscreenElement ? document.exitFullscreen() : document.webkitFullscreenElement ? document.webkitExitFullscreen() : videoFull.webkitRequestFullscreen ? videoFull.webkitRequestFullscreen() : videoFull.requestFullscreen()
    }

    function updateFullscreenButton() {
        document.fullscreenElement ? (fullscreenButton.setAttribute("data-state", "cancel-fullscreen"), videoFull.classList.add("full-frame"), document.body.classList.add("no-scroll", "fullscreen"), goFullscreen.classList.add("display-none"), exitFullscreen.classList.remove("display-none")) : (fullscreenButton.setAttribute("data-state", "go-fullscreen"), videoFull.classList.remove("full-frame"), document.body.classList.remove("no-scroll", "fullscreen"), goFullscreen.classList.remove("display-none"), exitFullscreen.classList.add("display-none"))
    }

    function hideControls() {
        if (youtubeVideo) {
            if (YT.PlayerState.PAUSED) return
        } else if (inlineVideo.paused) return;
        videoControls.classList.add("hide")
    }

    function showControls() {
        videoControls.classList.remove("hide"), clearInterval(timeX), timeX = setInterval(function() {
            Mobile.matches || videoControls.classList.add("hide")
        }, 5e3)
    }

    function StopPlay(e) {
        youtubeVideo ? YT.PlayerState.PAUSED && YT.PlayerState.ENDED || player.pauseVideo() : inlineVideo.paused && inlineVideo.ended || inlineVideo.pause()
    }

    function StartPlay(e) {
        BgVideo && BgVideo.classList.add("hide"), youtubeVideo ? (YT.PlayerState.PAUSED || YT.PlayerState.ENDED) && player.playVideo() : (inlineVideo.paused || inlineVideo.ended) && inlineVideo.play()
    }

    function togglePlay() {
        "play" == playBack.getAttribute("data-state") ? (youtubeVideo ? player.playVideo() : inlineVideo.play(), playBack.setAttribute("data-state", "pause"), playIcon.classList.add("display-none"), pauseIcon.classList.remove("display-none"), playAni.classList.add("display-none"), pauseAni.classList.remove("display-none")) : (youtubeVideo ? player.pauseVideo() : inlineVideo.pause(), playBack.setAttribute("data-state", "play"), playIcon.classList.remove("display-none"), pauseIcon.classList.add("display-none"), playAni.classList.remove("display-none"), pauseAni.classList.add("display-none"))
    }

    function toggleMute() {
        "unmute" == volumeButton.getAttribute("data-state") ? (youtubeVideo ? player.unMute() : inlineVideo.muted = !1, volumeButton.setAttribute("data-state", "mute"), volumeMute.classList.add("display-none"), volumeHigh.classList.remove("display-none")) : (youtubeVideo ? player.mute() : inlineVideo.muted = !0, volumeButton.setAttribute("data-state", "unmute"), volumeMute.classList.remove("display-none"), volumeHigh.classList.add("display-none"))
    }

    function updateTimerDisplay() {
        youtubeVideo ? (timeElapsed.innerHTML = formatTime(player.getCurrentTime()), duration.innerHTML = formatTime(player.getDuration())) : (timeElapsed.innerHTML = formatTime(inlineVideo.currentTime), duration.innerHTML = formatTime(inlineVideo.duration))
    }

    function updateProgress() {
        youtubeVideo ? (Seek.value = Math.floor(player.getCurrentTime()), progressBar.value = Math.floor(player.getCurrentTime())) : (Seek.value = Math.floor(inlineVideo.currentTime), progressBar.value = Math.floor(inlineVideo.currentTime))
    }

    function trackSkip(e) {
        var t = e.target.dataset.seek ? e.target.dataset.seek : e.target.value;
        youtubeVideo ? player.seekTo(t) : inlineVideo.currentTime = t, progressBar.value = t, Seek.value = t
    }

    function keyboardShortcuts(e) {
        switch (e.key) {
            case "k":
                togglePlay(), animatePlayback();
                break;
            case "m":
                toggleMute();
                break;
            case "f":
                toggleFullScreen()
        }
    }
}
if (youtubeVideo) {
    var IDscript = document.getElementById("youtube_js");
    if (!IDscript) {
        var script = document.createElement("script");
        script.id = "youtube_js", script.src = "https://www.youtube.com/iframe_api", document.body.appendChild(script)
    }
    if (youtubeVideo && !IDscript) {
        var youTubeId, youTubeUrl = youtubeVideo.getAttribute("data-embed"),
            regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,
            match = youTubeUrl.match(regExp);
        if (youTubeId = match && 11 == match[2].length ? match[2] : "no video found", Mobile.matches) var SRC = '<iframe id="VYT" title="video" src="https://www.youtube.com/embed/' + youTubeId + "?autoplay=1&enablejsapi=1&controls=1&loop=1&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=" + youTubeId + '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>';
        else SRC = '<iframe id="VYT" title="video" src="https://www.youtube.com/embed/' + youTubeId + "?autoplay=1&enablejsapi=1&controls=0&loop=1&playsinline=1&color=white&rel=0&cc_load_policy=1&playlist=" + youTubeId + '" frameborder="0"  allow="autoplay" allowfullscreen></iframe>';

        function onYouTubePlayerAPIReady() {
            player = new YT.Player("VYT", {
                events: {
                    onReady: onPlayerReady,
                    onStateChange: onPlayerStateChange
                }
            })
        }

        function onPlayerStateChange(e) {
            switch (e.data) {
                case YT.PlayerState.PLAYING:
                    clearInterval(timeupdate), timeupdate = setInterval(function() {
                        updateTimerDisplay(), updateProgress()
                    }, 200);
                    break;
                case YT.PlayerState.PAUSED:
                case YT.PlayerState.ENDED:
            }
        }

        function onPlayerReady(e) {
            e.target.mute();
            var t = youtubeVideo.querySelector("iframe");
            if (player.getPlayerState()) {
                var i = player.getVideoData().title;
                t.setAttribute("title", i)
            }
            getTimeVideo(), controlVideo(), setTimeout(function() {
                player.pauseVideo(), updateTimerDisplay(), updateProgress(), videoTime.classList.remove("display-none")
            }, 200)
        }
        youtubeVideo.innerHTML = SRC, youtubeVideo.addEventListener("click", togglePlay), youtubeVideo.addEventListener("click", animatePlayback), youtubeVideo.addEventListener("onStateChange", updateTimerDisplay), youtubeVideo.addEventListener("onStateChange", updateProgress)
    }
}

function controlVideo() {
    Seek.addEventListener("input", trackSkip), playBack.addEventListener("click", togglePlay), volumeButton.addEventListener("click", toggleMute), fullscreenButton.addEventListener("click", toggleFullScreen), videoFull.addEventListener("fullscreenchange", updateFullscreenButton), videoFull.addEventListener("mouseenter", showControls), videoFull.addEventListener("mousemove", showControls), videoFull.addEventListener("mouseleave", hideControls), videoControls.addEventListener("mouseenter", showControls), videoControls.addEventListener("mousemove", showControls), videoControls.addEventListener("mouseleave", hideControls), document.addEventListener("keyup", keyboardShortcuts)
}

function ViewMoreText() {
    $(".view-more-text").length && $(".details-content-products") && ($("body").append($(".details-content-products")), $(".view-more-text").on("click", function(e) {
        e.preventDefault();
        var t = $(this).attr("data-detailid");
        $(".overlay-dark").addClass("show"), $("html").addClass("no-scroll"), $('.details-content-products[data-detailid="' + t + '"]').addClass("show")
    })), $(".details-content-products .close-popup, .details-content-products > span").on("click", function(e) {
        e.preventDefault(), $(".overlay-dark").removeClass("show"), $("html").removeClass("no-scroll"), $(".details-content-products").removeClass("show")
    })
}

function HideFilter() {
    setTimeout(function() {
        var e = document.querySelectorAll(".filter");
        e && e.forEach(function(e) {
            null == e.querySelector("li") && e.parentNode.parentNode.remove()
        })
    }, 500)
}
inlineVideo && (Mobile.matches ? (inlineVideo.controls = !0, videoControls.classList.add("display-none")) : (inlineVideo.controls = !1, videoControls.classList.remove("display-none")), inlineVideo.addEventListener("timeupdate", updateTimerDisplay), inlineVideo.addEventListener("timeupdate", updateProgress), inlineVideo.addEventListener("click", togglePlay), inlineVideo.addEventListener("click", animatePlayback), inlineVideo.addEventListener("loadedmetadata", getTimeVideo), inlineVideo.onloadedmetadata = function() {
        controlVideo(), setTimeout(function() {
            updateTimerDisplay(), updateProgress(), StopPlay(), videoTime.classList.remove("display-none")
        }, 300)
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(d) {
        var u, p, o, m = [],
            h = document,
            v = window,
            f = h.documentElement;

        function t() {
            if (m.length) {
                var e, t, i, o = 0,
                    n = d.map(m, function(e) {
                        var t = e.data.selector,
                            i = e.$element;
                        return t ? i.find(t) : i
                    });
                for (u = u || ((i = {
                        height: v.innerHeight,
                        width: v.innerWidth
                    }).height || !(e = h.compatMode) && d.support.boxModel || (i = {
                        height: (t = "CSS1Compat" === e ? f : h.body).clientHeight,
                        width: t.clientWidth
                    }), i), p = p || {
                        top: v.pageYOffset || f.scrollTop || h.body.scrollTop,
                        left: v.pageXOffset || f.scrollLeft || h.body.scrollLeft
                    }; o < m.length; o++)
                    if (d.contains(f, n[o][0])) {
                        var a = d(n[o]),
                            l = a[0].offsetHeight,
                            r = a[0].offsetWidth,
                            s = a.offset(),
                            c = a.data("InView");
                        if (!p || !u) return;
                        s.top + l > p.top && s.top < p.top + u.height && s.left + r > p.left && s.left < p.left + u.width ? c || a.data("InView", !0).trigger("InView", [!0]) : c && a.data("InView", !1).trigger("InView", [!1])
                    }
            }
        }
        d.event.special.InView = {
            add: function(e) {
                m.push({
                    data: e,
                    $element: d(this),
                    element: this
                }), !o && m.length && (o = setInterval(t, 250))
            },
            remove: function(e) {
                for (var t = 0; t < m.length; t++) {
                    var i = m[t];
                    if (i.element === this && i.data.guid === e.guid) {
                        m.splice(t, 1);
                        break
                    }
                }
                m.length || (clearInterval(o), o = null)
            }
        }, d(v).on("scroll resize scrollstop", function() {
            u = p = null
        }), !f.addEventListener && f.attachEvent && f.attachEvent("onfocusin", function() {
            p = null
        })
    }), window.onbeforeunload = function() {
        window.scrollTo(0, 0)
    };
! function(e) {
    var l = {
        on: e.fn.on,
        bind: e.fn.bind
    };
    e.each(l, function(t) {
        e.fn[t] = function() {
            var a, e = [].slice.call(arguments),
                i = e.pop(),
                o = e.pop();
            return e.push(function() {
                var e = this,
                    t = arguments;
                clearTimeout(a), a = setTimeout(function() {
                    o.apply(e, [].slice.call(t))
                }, i)
            }), l[t].apply(this, isNaN(i) ? arguments : e)
        }
    })
}(jQuery);
var timex, timerf, Details = 0;

function onScroll() {
    var e = $(".title, .ani-item,  .line-intro, .product-list .product-item, .bottom, .footer-content");
    $(e).each(function() {
        $(this).isInViewport() && $(this).addClass("on-show")
    }), $("div[data-background]").length && $("div[data-background]").each(function() {
        $(this).isInViewport() && BackgroundLazyLoader()
    })
}
$.fn.isInViewport = function() {
    var e = $(this).offset().top,
        t = e + $(this).outerHeight(),
        a = $(window).scrollTop(),
        i = a + $(window).height();
    return a < t && e < i
};
var scrolling = !(Number.prototype.formatMoney = function(e, t, a) {
        var i = this,
            o = (e = isNaN(e = Math.abs(e)) ? 2 : e, t = null == t ? "." : t, a = null == a ? "," : a, i < 0 ? "-" : ""),
            l = parseInt(i = Math.abs(+i || 0).toFixed(e)) + "",
            n = 3 < (n = l.length) ? n % 3 : 0;
        return o + (n ? l.substr(0, n) + a : "") + l.substr(n).replace(/(\d{3})(?=\d)/g, "$1" + a) + (e ? t + Math.abs(i - l).toFixed(e).slice(2) : "")
    }),
    doWheel = !0,
    doTouch = !0,
    isFirst = !0,
    login = !1,
    ftpVideo = [],
    windscroll = $(document).scrollTop(),
    zoomPC = !1,
    httpserver = $(".httpserver").text();

function validatelogin() {
    hidemsg();
    var e = !0,
        t = checkNull("username", $("#username").attr("data-error"), $("#username").attr("data-default"), "40", "-270"),
        a = checkNull("password", $("#password").attr("data-error"), $("#password").attr("data-default"), "40", "-270");
    return t && a || (e = !1, setTimeout(hideerror, 5e3)), e
}

function execSearch() {
    var e = $("#qsearch").val(),
        t = $("#href_search").val(),
        a = $("#defaultvalue").val(),
        i = (a = $("#defaultvalue").val(), $("#errorsearch").val());
    if (hidemsg(), e == a || "" == e) return !1;
    if (e.length <= 1) return $(".overlay-dark").after("<div  class='contact-success color-red'>" + i + "</div>"), setTimeout(hidemsg, 5e3), !1;
    if ("" != e) {
        var o = t + "?qsearch=" + encodeURIComponent(e);
        return window.location = o, !1
    }
}

function Search() {
    $(document).on("click", ".search-but", function(e) {
        if ($(this).hasClass("active")) $(".search-form, .search-but").removeClass("active"), execSearch();
        else {
            $(".search-form, .search-but").addClass("active");
            var t = $('.form-row-search input[type="text"]').attr("data-holder");
            $('.form-row-search input[type="text"]').val(t)
        }
        $(".login-overlay.active").length && $(".login-overlay, .login-box").removeClass("active")
    }), $("#search").keydown(function(e) {
        13 == e.keyCode && execSearch(), 27 == keyCode && (e.preventDefault(), $(".close-popup").trigger("click"))
    })
}

function NavClick() {
    $(".nav-but").on("click", function(e) {
        return $(this).hasClass("active") ? ($(".nav-overlay, .navigation, .nav-but").removeClass("active"), $("html, body").removeClass("no-scroll"), $(".nav").scrollTop(0)) : ($(".nav").scrollTop(0), $(".nav-overlay, .navigation, .nav-but").addClass("active"), $("html, body").addClass("no-scroll")), !1
    }), $(".nav-overlay").on("click", function(e) {
        $(".nav-but").trigger("click")
    })
}

function StopTime() {
    0 < timex && (clearTimeout(timex), timex = 0), 0 < timerf && (clearTimeout(timerf), timerf = 0)
}

function addMove() {
    $(".left-box").removeClass("play"), $(".left-box span.move").removeClass("move"), StopTime(), $(".move .left-box").hasClass("type-01") ? timerf = setTimeout(function() {
        $(".type-01").addClass("play")
    }, 0) : $(".move .left-box").hasClass("type-02") && (timerf = setTimeout(function() {
        $(".type-02").addClass("play")
    }, 900)), $(".move .left-box span").each(function(e) {
        var t = $(this);
        timex = setTimeout(function() {
            $(t).addClass("move")
        }, 40 * (e + 1))
    })
}

function AniText() {
    $(".title-page").addClass("show"), $(".title-page .title-clone").children().children().each(function(e) {
        var t = $(this);
        setTimeout(function() {
            $(t).addClass("move")
        }, 80 * (e + 1))
    })
}

function SlidePicture() {
    if ($(".slide-popup-mod").length) {
        $(".slide-popup-mod, .details-center").addClass("show");
        var e = $(".slide-popup-mod").attr("data-time") || 5e3;
        $(".slide-popup-mod").BTQSlider({
            animateOut: "fade-Out",
            animateIn: "fade-In",
            mouseDrag: !1,
            touchDrag: !1,
            pullDrag: !1,
            rewind: !0,
            margin: 0,
            autoplay: !0,
            autoplayTimeout: e,
            smartSpeed: 1e3,
            items: 1,
            nav: !1,
            dots: !1,
            dotNum: !1,
            dotSvg: !1,
            autoHeight: !1,
            responsiveRefreshRate: 150,
            responsive: {
                0: {
                    autoHeight: !0
                },
                1024: {
                    autoHeight: !0
                },
                1100: {
                    autoHeight: !1
                }
            }
        }), $(".slide-popup-mod").on("translate.btq.slidebox", function(e) {
            $(".slide-popup-mod").find(".slide-item").removeClass("ani-text")
        }), $(".slide-popup-mod").on("translated.btq.slidebox", function(e) {
            $(".slide-popup-mod").find(".slide-item.active").addClass("ani-text"), $(".slide-popup-mod").find(".slide-item.active").removeClass("animated animated-in fade-In animated-out fade-Out")
        })
    }
    if ($(".slide-modify").length && !$(".slide-modify").hasClass("already")) {
        if ($(".slide-modify").addClass("show"), $(".slide-modify").addClass("already"), 1 < $(".banner-home, .banner-inner, .image-list-bg-pic").length) {
            e = $(".slide-modify").attr("data-time");
            $(".stop-mask").length || $(".slide-modify").parent().prepend('<button class="stop-mask" aria-label="stop" style="display:none"></button><button class="play-mask" aria-label="play" style="display:none"></button>')
        } else e = !1;
        if ($(".slide-modify").BTQSlider({
                animateOut: "fade-Out",
                animateIn: "fade-In",
                mouseDrag: !1,
                touchDrag: !1,
                pullDrag: !1,
                rewind: !0,
                margin: 0,
                autoplay: !0,
                autoplayTimeout: e,
                smartSpeed: 1e3,
                items: 1,
                nav: !0,
                dots: !0,
                dotNum: !0,
                dotSvg: !0,
                autoHeight: !1,
                responsiveRefreshRate: 150,
                responsive: {
                    0: {
                        autoHeight: !0
                    },
                    1024: {
                        autoHeight: !0
                    },
                    1100: {
                        autoHeight: !1
                    }
                }
            }).on("initialize.btq.slidebox", function() {
                $(".slide-modify").find(".slide-item.active").addClass("ani-text"), $(".slide-modify  .arrow").length || ($(".slide-modify .slide-next").append('<svg viewBox="0 0 60 60"><path class="arrow" fill="currentColor" d="M23.2,48.8 23.2,43.2 36.4,30 23.2,16.7 23.2,11.2 42,30z"/></svg>'), $(".slide-modify .slide-prev").append('<svg viewBox="0 0 60 60"><path class="arrow" fill="currentColor" d="M36,48.8 36,43.2 22.8,30 36,16.7 36,11.2 17.2,30z"/></svg>'));
                $(".circle-outer").css({
                    "animation-duration": 8 * e + "ms"
                })
            }()), $(".slide-modify").on("translate.btq.slidebox", function(e) {
                $(".slide-modify").find(".slide-item").removeClass("ani-text")
            }), $(".slide-modify").on("translated.btq.slidebox", function(e) {
                $(".slide-modify").find(".slide-item.active").addClass("ani-text"), $(".slide-modify").find(".slide-item.active").removeClass("animated animated-in fade-In animated-out fade-Out")
            }), $(".slide-modify").on("swipeleft", function(e, t) {
                doTouch && (doTouch = !1, 1 < $(".slide-modify").find(".slide-item").length && $(".slide-modify").trigger("next.btq.slidebox"), setTimeout(turnWheelTouch, 500))
            }).on("swiperight", function(e) {
                doTouch && (doTouch = !1, 1 < $(".slide-modify").find(".slide-item").length && $(".slide-modify").trigger("prev.btq.slidebox"), setTimeout(turnWheelTouch, 500))
            }), $(".play-mask").on("click", function() {
                return $(".slide-modify").trigger("play.btq.autoplay", [e]), !1
            }), $(".stop-mask").on("click", function() {
                return $(".slide-modify").trigger("stop.btq.autoplay"), !1
            }), $("#home-page")) {
            var t = 0,
                a = document.querySelectorAll(".slider-home .slide-page");
            for (i = 0; i < a.length; i++) t = t + a[i].clientWidth + 6;
            t += 160, $(".slider-home .slide-buttons").width(t)
        }
    }
    $(".inspi-slider").length && !$(".inspi-slider").hasClass("already") && ($(".inspi-slider").addClass("already"), $(".inspi-slider").BTQSlider({
        rewind: !0,
        margin: 40,
        smartSpeed: 600,
        items: 2,
        nav: !0,
        dots: !0,
        dotNum: !1,
        dotSvg: !1,
        responsiveRefreshRate: 150,
        responsive: {
            0: {
                items: 1,
                nav: !1,
                margin: 0
            },
            600: {
                items: 1,
                nav: !1,
                margin: 10
            },
            1e3: {
                items: 2,
                nav: !1,
                margin: 30
            },
            1100: {
                items: 2,
                nav: !0,
                margin: 40
            }
        }
    })), $(".why-aconcept-box").length && !$(".why-aconcept-box").hasClass("already") && ($(".why-aconcept-box").addClass("already"), $(".why-aconcept-slider").BTQSlider({
        rewind: !0,
        margin: 0,
        smartSpeed: 600,
        items: 2,
        nav: !0,
        dots: !0,
        dotNum: !1,
        dotSvg: !1,
        autoHeight: !0,
        responsiveRefreshRate: 150,
        responsive: {
            0: {
                items: 1,
                nav: !1,
                margin: 0
            },
            600: {
                items: 1,
                nav: !1,
                margin: 10
            },
            1e3: {
                items: 2,
                nav: !1,
                margin: 30
            },
            1100: {
                items: 2,
                nav: !0,
                margin: 40
            }
        }
    })), $(".our-design-box").length && !$(".our-design-box").hasClass("already") && ($(".our-design-box").addClass("already"), $(".our-design-slider").BTQSlider({
        rewind: !0,
        margin: 0,
        smartSpeed: 600,
        items: 1,
        nav: !0,
        dots: !0,
        dotNum: !1,
        dotSvg: !1,
        responsiveRefreshRate: 150
    })), $(".catalogue-box").length && !$(".catalogue-box").hasClass("already") && ($(".catalogue-box").addClass("already"), $(".catalogue-slider").BTQSlider({
        rewind: !0,
        margin: 20,
        smartSpeed: 600,
        items: 1,
        nav: !0,
        dots: !0,
        dotNum: !1,
        dotSvg: !1,
        responsiveRefreshRate: 150,
        responsive: {
            0: {
                items: 1,
                nav: !1,
                margin: 0
            },
            600: {
                items: 1,
                nav: !1,
                margin: 0
            },
            700: {
                items: 2,
                nav: !1,
                margin: 10
            },
            1100: {
                items: 2,
                nav: !0,
                margin: 20
            }
        }
    })), $(".video-box").length && $(".video-slider").each(function(e, t) {
        $(t).on("initialized.btq.slidebox", function() {
            $(t).prepend('<button class="pause-button" aria-label="pause"></button><button class="play-button" aria-label="play"></button>');
            var e = $(t).find(".slide-video").css("background-image");
            e = e.replace(/.*\s?url\([\'\"]?/, "").replace(/[\'\"]?\).*/, ""), $(t).find(".slide-video").append('<img src ="' + e + '" alt="pic">')
        }).BTQSlider({
            items: 1,
            margin: 0,
            video: !0,
            center: !0,
            smartSpeed: 600,
            responsiveRefreshRate: 150,
            loop: !0,
            nav: !0,
            dots: !0,
            dotNum: !1,
            dotSvg: !1
        })
    }), $(".interior-list-slider").length && $(".interior-list-slider").each(function(e, t) {
        $(t).BTQSlider({
            rewind: !0,
            margin: 2,
            smartSpeed: 600,
            items: 5,
            nav: !0,
            dots: !0,
            dotNum: !1,
            dotSvg: !1,
            responsiveRefreshRate: 150,
            responsive: {
                0: {
                    items: 1,
                    nav: !1
                },
                600: {
                    items: 2,
                    nav: !1
                },
                800: {
                    items: 3,
                    nav: !1
                },
                1e3: {
                    items: 4,
                    nav: !1
                },
                1100: {
                    items: 5,
                    nav: !0
                }
            }
        })
    }), $(".service-outer").length && $(".service-slider").BTQSlider({
        rewind: !0,
        margin: 0,
        smartSpeed: 600,
        items: 1,
        nav: !0,
        dots: !0,
        dotNum: !1,
        dotSvg: !1,
        autoHeight: !0,
        responsiveRefreshRate: 150
    }), $(".detail-pics").length && ($(".detail-slider").addClass("black-color"), $(".detail-slider").BTQSlider({
        rewind: !0,
        margin: 0,
        smartSpeed: 600,
        items: 1,
        nav: !0,
        dots: !0,
        dotNum: !1,
        dotSvg: !1,
        mouseDrag: !1,
        responsiveRefreshRate: 150
    })), $(".wishclick-box").length && ($(".wishclick-slider").addClass("black-color"), $(".wishclick-slider").BTQSlider({
        rewind: !0,
        margin: 0,
        smartSpeed: 600,
        items: 4,
        nav: !0,
        dots: !0,
        dotNum: !1,
        dotSvg: !1,
        responsiveRefreshRate: 150,
        responsive: {
            0: {
                items: 2,
                nav: !1
            },
            600: {
                items: 3,
                nav: !1
            },
            1e3: {
                items: 4,
                nav: !1
            },
            1100: {
                items: 5,
                nav: !0
            }
        }
    })), $(".news-link").length && (Mobile.matches || $(".news-link").each(function(e, t) {
        $(t).addClass("black-color"), $(t).on("initialized.btq.slidebox", function() {
            $(t).find(".slide-item").length <= 3 ? $(t).addClass("center-slidebox") : $(t).removeClass("center-slidebox")
        }).BTQSlider({
            items: 3,
            smartSpeed: 600,
            margin: 5,
            nav: !0,
            dots: !1,
            dotNum: !1,
            dotSvg: !1
        })
    })), $(".color-slider").length && $(".color-slider").BTQSlider({
        rewind: !0,
        items: 2,
        margin: 5,
        smartSpeed: 600,
        nav: !0,
        dots: !1,
        dotNum: !1,
        dotSvg: !1
    }), $(".slide-list-youtube").length && 1100 < $(window).width() && $(".slide-list-youtube").each(function(e, t) {
        $(t).on("initialized.btq.slidebox", function() {}).BTQSlider({
            items: 3,
            smartSpeed: 600,
            margin: 30,
            dots: !0,
            dotNum: !1,
            dotSvg: !1,
            nav: !0,
            autoHeight: !0
        })
    })
}

function VideoLoad(e) {
    $.ajax({
        url: e,
        cache: !1,
        success: function(e) {
            if ($(".allvideo").append(e), $("#view-video").length) {
                var t = document.getElementById("view-video")
            }
            $(".loadx").fadeOut(300, "linear", function() {
                $("#view-video").length && t.play(), $(".loadx").remove()
            });
            var a = $("#view-video").length;
            $(".close-video").on("click", function() {
                0 != a && t.pause(), $(".allvideo").fadeOut(500, "linear", function() {
                    if ($(".overlay-dark").removeClass("show"), $(".allvideo .video-list").remove(), $("html, body").removeClass("no-scroll"), $(".to-scrollV").length) {
                        var e = $(".to-scrollV").offset().top;
                        $(".to-scrollV").removeClass("to-scrollV"), Mobile.matches && $("html, body").scrollTop(e - 60)
                    }
                })
            })
        }
    })
}

function AlbumLoad(e, a) {
    $.ajax({
        url: e,
        cache: !1,
        success: function(e) {
            function t() {
                clearTimeout(timex), $(".pic-name").removeClass("move"), $(".pic-name h3").children().children().removeClass("move"), $(".selected").find(".pic-name").addClass("move"), $(".move h3").children().children().each(function(e) {
                    var t = $(this);
                    setTimeout(function() {
                        $(t).addClass("move")
                    }, 100 * (e + 1))
                })
            }
            $(".all-album").append(e), 1 < $(".all-album .album-load").length && $(".all-album .album-load").last().remove(), $(".pic-name > h3").lettering("words").children("span").lettering().children("span").lettering(), $(".album-center").on("initialized.btq.slidebox", function() {
                $(".container-zoom").each(function(e, t) {
                    new PinchZoom.default(t, {
                        draggableUnzoomed: !1
                    })
                }), $(".album-center").find(".slide-item.active").addClass("selected"), t()
            }).BTQSlider({
                items: 1,
                margin: 0,
                smartSpeed: 600,
                loop: !1,
                dots: !1,
                nav: !0,
                responsiveRefreshRate: 200
            }).on("changed.btq.slidebox", function(e) {
                $(".thumbs").length && function(e) {
                    var t = e.item.Count - 1,
                        a = e.item.index;
                    a < 0 && (a = t);
                    t < a && (a = 0);
                    $(".thumbs").find(".slide-item").removeClass("current").eq(a).addClass("current");
                    var i = $(".thumbs").find(".slide-item.active").length - 1,
                        o = $(".thumbs").find(".slide-item.active").first().index(),
                        l = $(".thumbs").find(".slide-item.active").last().index();
                    l - 1 <= a && $(".thumbs").data("btq.slidebox").to(a, 300, !0);
                    a <= o && $(".thumbs").data("btq.slidebox").to(a - i, 300, !0)
                }(e)
            }).on("translate.btq.slidebox", function(e) {
                $(".album-center").find(".slide-item").removeClass("selected")
            }).on("translated.btq.slidebox", function(e) {
                $(".album-center").find(".slide-item.active").addClass("selected"), t()
            }), $(".thumbs").on("initialized.btq.slidebox", function() {
                var e = $(".thumbs").find(".slide-item").length;
                600 <= $(window).width() ? e <= 6 ? $(".thumbs").addClass("center-slidebox") : $(".thumbs").removeClass("center-slidebox") : e <= 3 ? $(".thumbs").addClass("center-slidebox") : $(".thumbs").removeClass("center-slidebox"), $(".thumbs").find(".slide-item").eq(0).addClass("current")
            }).BTQSlider({
                margin: 5,
                smartSpeed: 300,
                dots: !1,
                nav: !1,
                responsiveRefreshRate: 100,
                responsive: {
                    0: {
                        items: 3,
                        slideBy: 3
                    },
                    600: {
                        items: 6,
                        slideBy: 6
                    }
                }
            }), a && $(".album-center").data("btq.slidebox").to(a, 5, !0), $(".thumbs").on("click", ".slide-item", function(e) {
                e.preventDefault();
                var t = $(this).index();
                $(".album-center").data("btq.slidebox").to(t, 1e3, !0)
            }), $(".all-album").on("mousewheel", ".album-center", function(e) {
                if (0 < e.deltaY) {
                    if (!doWheel) return;
                    doWheel = !1, $(".album-center").trigger("prev.btq.slidebox"), setTimeout(turnWheelTouch, 500)
                } else {
                    if (!doWheel) return;
                    doWheel = !1, $(".album-center").trigger("next.btq.slidebox"), setTimeout(turnWheelTouch, 500)
                }
                e.preventDefault()
            }), $(".album-load").animate({
                opacity: 1
            }, 100, "linear", function() {
                $(".loadx").fadeOut(400, "linear", function() {
                    $(".loadx").remove()
                })
            }), $(".close-album").on("click", function() {
                return $(".all-album").fadeOut(500, "linear", function() {
                    $(".overlay-dark").removeClass("show"), $(".album-load").remove()
                }), $("html, body").removeClass("no-scroll"), !1
            })
        }
    })
}

function newsCommentCommon() {
    $(".review").bind("click", function() {
        if ($(".comment-list").hasClass("active")) $(".comment-list, .review").removeClass("active"), $(".comment-list").css({
            height: 0
        });
        else {
            var e = $(".all-comment").innerHeight();
            $(".comment-list").css({
                height: e
            }), $(".review, .comment-list").addClass("active")
        }
    }), $(".star-handle .star-item").each(function(e, t) {
        $(t).on("click", function() {
            $(".star-handle .star-item").removeClass("show");
            var e = $(this).index();
            $("#star").val(e);
            for (var t = -1; t < e; t++) $(".star-handle .star-item[data-show='" + (t + 1) + "']").addClass("show")
        })
    }), $(".star-commment.star-commment-already").each(function(e, t) {
        var a = $(t).attr("data-star");
        $(t).find(".star-item").each(function(e, t) {
            e < a && $(t).addClass("show")
        })
    }), $(".login-click").on("click", function(e) {
        e.preventDefault(), $(".login-but").trigger("click")
    })
}

function newsLikeCommon() {
    $(".load-details").on("click", ".like-but", function() {
        return $(".like-but").attr("disabled", "disabled"), $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'), $.ajax({
            type: "POST",
            url: httpserver + "send-like-item.html",
            data: "type=" + $(".like-circle").attr("data-type") + "&id=" + $(".like-circle").attr("data-id"),
            dataType: "json",
            success: function(e) {
                if ($(".loadx").fadeOut(300, "linear", function() {
                        $(".loadx").remove()
                    }), "200" == e.status) {
                    var t = Number($(".like-circle").attr("data-like")) + 1,
                        a = t.formatMoney(0, ",", ",");
                    $(".like-circle").attr("data-like", t);
                    var i = a.split(",").length,
                        o = "",
                        l = a.split(",")[0];
                    2 == i ? (o = "K", l = t / 1e3) : 3 == i ? (o = "M", l = t / 1e6) : 4 == i && (o = "B", l = t / 1e9);
                    var n = (l = l.toString().split("."))[0];
                    if (1 < l.length) {
                        var s = l[1][0];
                        "0" != s && (n = n + "," + s)
                    }
                    n += o, $(".like-circle").html(n)
                } else $(".overlay-dark").after("<div  class='contact-success color-red'>" + e.message + "</div>");
                $(".like-but").removeAttr("disabled"), setTimeout(hidemsg, 5e3)
            }
        }), !1
    })
}

function NewsLoad(e, t) {
    $.ajax({
        url: e,
        cache: !1,
        success: function(e) {
            $(".load-data").html(e), commentSubmit(), FocusText(), $(".load-text a, .load-text p a").click(function(e) {
                e.preventDefault();
                var t = $(this).attr("href");
                return window.open(t, "_blank"), !1
            }), newsCommentCommon(), $(".load-text img").addClass("zoom-pic"), ZoomPic(), newsLikeCommon(), $(".load-bg").stop().animate({
                opacity: 1
            }, 300, "linear", function() {
                $(".load-details").addClass("fadeinup"), $(".news-link").removeClass("no-link"), $(".load-data").css({
                    "min-height": $(window).height() / 2
                }), isFirst = !1, Mobile.matches ? detectBut() : $(".news-link").each(function(e, t) {
                    var a = $(t).find(".link-page.current").parent().index();
                    $(t).data("btq.slidebox").to(a, 300, !0)
                }), $(".loadx").fadeOut(300, "linear", function() {
                    $(".loadx").remove()
                })
            })
        }
    })
}

function SliderDetailsLoad(e, t) {
    $(".detail-slider").remove(), $.ajax({
        url: e,
        cache: !1,
        success: function(e) {
            $(".detail-info .price-info").html(), $(".detail-pics").html(e);
            var t = $(".code-price-ajax .code-ajax").text(),
                a = $(".code-price-ajax .price-ajax").html(),
                i = $(".code-price-ajax .info-prod").html().split("|||"),
                o = $(".feature-ajax").html(),
                l = $(".feature-title").html(),
                n = $(".selected-color-ajax").html();
            "" != i[4] && ("1" == i[4] ? ($(".order-but, .quick-add").attr("disabled", "disabled"), $(".order-but, .quick-add").addClass("display-order-but")) : ($(".order-but, .quick-add").removeAttr("disabled"), $(".order-but, .quick-add").removeClass("display-order-but"))), "" != i[3] && $(".order-but, .quick-add").attr("data-url", i[3]), "" != i[2] && $(".order-but, .quick-add").attr("data-price", i[2]), "" != i[1] && $(".order-but, .quick-add").attr("data-image", i[1]), "" != i[0] && $(".order-but, .quick-add").attr("data-code", i[0]), $(".detail-info .price-info").html(a), $(".detail-name .sub-name").text(t), $(".detail-info .feature").html(o), $(".detail-info .feature-title").html(l), $(".selected-color").html(n), $(".zoom-but").on("click", function(e) {
                return e.preventDefault(), Zoom($(this).parent().find("img")), !1
            }), SlidePicture(), $(".detail-slider").stop().animate({
                opacity: 1
            }, 300, "linear", function() {
                $(".magnify-image").each(function(e, t) {
                    $(t).magnify({
                        Full: !1
                    })
                }), $(".loadx").fadeOut(300, "linear", function() {
                    $(".loadx").remove()
                })
            })
        }
    })
}

function AjaxPDf(e, t) {
    $.ajax({
        url: e,
        cache: !1,
        success: function(e) {
            $("body").append(e), FocusText();
            var t = $("#fb5-ajax").attr("data-pdf");
            PDFLoad(t), $("#fb5-ajax").animate({
                opacity: 1
            }, 500, "linear", function() {
                $(".close").addClass("show")
            });
            $(document).on("keypress", ".fb5-goto input", function(e) {
                var t = e;
                0 != t.charCode && (-1 != "0123456789 ".indexOf(t.key) || t.preventDefault())
            }), $(".close").on("click", function() {
                var e = $(document).scrollTop();
                document.location.hash = "", $("html, body").scrollTop(e), $(".full-screen-html").length && document.exitFullscreen(), $("#fb5-ajax").animate({
                    opacity: 0
                }, 500, "linear", function() {
                    $("#fb5-ajax").remove(), $(".container, .header, .social-facilities , .footer").removeClass("blur"), $(".overlay-dark").removeClass("show"), $("html, body").removeClass("no-scroll")
                })
            })
        }
    })
}

function validateAccount() {
    var e = !0,
        t = checkNull("account_name", $("#account_name").attr("data-error"), $("#account_name").attr("data-default"), "40", "-298"),
        a = checkNull("account_city", $("#account_city").attr("data-error"), $("#account_city").attr("data-default"), "40", "-298"),
        i = checkNull("account_phone", $("#account_phone").attr("data-error"), $("#account_phone").attr("data-default"), "40", "-298"),
        o = checkNull("account_postcode", $("#account_postcode").attr("data-error"), $("#account_postcode").attr("data-default"), "40", "-298"),
        l = password = password_old = !0;
    "" == $("#account_password").val() || $("#account_password").val() == $("#account_password").attr("data-default") || "" == $("#account_password_old").val() || $("#account_password_old").val() == $("#account_password_old").attr("data-default") || (password_old = checkNull("account_password_old", $("#account_password_old").attr("data-error"), $("#account_password_old").attr("data-default"), "40", "-298"), password = checkNull("account_password", $("#account_password").attr("data-error"), $("#account_password").attr("data-default"), "40", "-298")), l = checkNull("account_username", $("#account_username").attr("data-error"), $("#account_username").attr("data-default"), "40", "-298");
    var n = checkMail("account_email", $("#account_email").attr("data-error"), $("#account_email").attr("data-default"), "40", "-298");
    return t && n && i && a && o && l && password && password_old || (e = !1, setTimeout(hideerror, 5e3)), e
}

function popupLoad(e) {
    $(".details-content").remove(), $.ajax({
        url: e,
        cache: !1,
        success: function(e) {
            $("body").prepend(e);
            $("#account-page").length && (FocusText(), $("#account_phone").numeric(), $("#order_product").click(function() {
                if (1 != validateAccount()) return $(".formError").click(function() {
                    $(this).remove()
                }), !1;
                $("#order_product").attr("disabled", "disabled"), $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>');
                var e = $("#account-info").serialize();
                return $.ajax({
                    type: "POST",
                    url: httpserver + "send-member-update.html",
                    data: e,
                    dataType: "json",
                    success: function(e) {
                        $(".loadx").fadeOut(300, "linear", function() {
                            $(".loadx").remove()
                        }), "200" == e.status ? (document.getElementById("account-info").reset(), $(".close-popup").trigger("click"), $(".overlay-dark").after("<div  class='contact-success color-blue'>" + e.message + "</div>")) : $(".overlay-dark").after("<div  class='contact-success color-red'>" + e.message + "</div>"), $("#order_product").removeAttr("disabled"), setTimeout(hidemsg, 5e3)
                    }
                }), !1
            }), $("#account-info").keydown(function(e) {
                $("textarea").is(":focus") || 13 == e.keyCode && $("#order_product").trigger("click")
            })), $(".details-content").scrollTop(0), $(".details-content").stop().animate({
                opacity: 1
            }, 600, "linear", function() {
                $(".popup-home").length || $(".details-center").addClass("fadeinup"), $(".slide-popup-mod").length && SlidePicture(), $(".loadx").fadeOut(300, "linear", function() {
                    $(".loadx").remove()
                })
            }), $(".close-popup, .details-content span").on("click", function() {
                return $(".details-content").stop().animate({
                    opacity: 0
                }, 600, "linear", function() {
                    $(".details-content").remove(), $(".overlay-dark").removeClass("show"), $("html, body").removeClass("no-scroll")
                }), !1
            })
        }
    })
}

function SearchProductByColorAndPrice() {
    $(".httpserver").text();
    var e = $("#price-select").val(),
        t = $("#material-select").val(),
        a = $("#color-select").val(),
        i = ($("#category-select").val(), $(".category-filter li.current").attr("data-name"));
    $(".item-sub li").removeClass("active"), $(".item-sub li a[data-name='" + i + "']").parent().addClass("active");
    var o = $("#category-select option:selected").attr("data-href"),
        l = $("#category-select option:selected").attr("data-title"),
        n = $("#category-select option:selected").attr("data-keyword"),
        s = $("#category-select option:selected").attr("data-description"),
        r = $("#category-select option:selected").attr("data-details");
    changeUrl(o, l, s, n, r, l, s);
    var c = $("#category-select").val();
    "0" != t && (c = c + "&productmaterial_id=" + t), "0" != a && (c = c + "&productcolor_id=" + a), "" != e && (c = c + "&productprice_id=" + e), $.ajax({
        url: c,
        data: $("#filter-pro").serialize(),
        type: "POST",
        cache: !1,
        success: function(e) {
            $(".product-load").html(e), $(".product-load").children().removeClass("on-show"), isFirst = !1, $(".loadx").fadeOut(300, "linear", function() {
                $(".loadx").remove()
            }), $(".product-load").stop().animate({
                opacity: 1
            }, 300, "linear", function() {
                $(".product-load").addClass("show"), onScroll()
            }), HideFilter(), LinkPage(), ViewMoreText()
        }
    })
}

function SearchProductByMaterial() {

}

function SearchProduct() {
    $(".httpserver").text(), $("#price-select").val(), $("#material-select").val(), $("#color-select").val(), $("#category-select").val();
    var e = $(".category-filter li.current").attr("data-name");
    $(".item-sub li").removeClass("active"), $(".item-sub li a[data-name='" + e + "']").parent().addClass("active");
    $("#category-select option:selected").attr("data-href"), $("#category-select option:selected").attr("data-title"), $("#category-select option:selected").attr("data-keyword"), $("#category-select option:selected").attr("data-description"), $("#category-select option:selected").attr("data-details");
    var t = $("#category-select").val();
    $.ajax({
        url: t + "?isfilter=1",
        data: $("#filter-pro").serialize(),
        type: "POST",
        cache: !1,
        dataType: "json",
        success: function(e) {
            if (0 < e.info[0].length) {
                $("#material-select").parent().css("display", "block");
                for (var t = "", a = 0; a < e.info[0].length; a++) t += '<li data-val="', t += e.info[0][a].id, t += '"><input  aria-label="material-cbx" type="checkbox" class="material-cbx" name="groupmaterial[]" id="groupmaterial-', t += e.info[0][a].id, t += '" value="', t += e.info[0][a].id, t += '">', t += e.info[0][a].name, t += "</li>";
                $("#material-select").html(t)
            } else $("#material-select").parent().css("display", "none"), $("#material-select").html("");
            if (0 < e.info[1].length) {
                $("#color-select").parent().css("display", "block");
                var i = "";
                for (a = 0; a < e.info[1].length; a++) i += '<li data-val="', i += e.info[1][a].id, i += '"><input  aria-label="color-cbx" type="checkbox" class="color-cbx" name="groupcolor[]" id="groupcolor-', i += e.info[1][a].id, i += '" value="', i += e.info[1][a].id, i += '">', i += e.info[1][a].name, i += "</li>";
                $("#color-select").html(i)
            } else $("#color-select").parent().css("display", "none"), $("#color-select").html("");
            if (0 < e.info[2].length) {
                $("#price-select").parent().css("display", "block");
                var o = "";
                for (a = 0; a < e.info[2].length; a++) o += '<li data-val="', o += e.info[2][a].id, o += '"><input  aria-label="price-cbx" type="checkbox" class="price-cbx" name="groupprice[]" id="groupprice-', o += e.info[2][a].id, o += '" value="', o += e.info[2][a].id, o += '">', o += e.info[2][a].name, o += "</li>";
                $("#price-select").html(o)
            } else $("#price-select").parent().css("display", "none"), $("#price-select").html("");
            HideFilter()
        }
    })
}

function colorDetail() {
    $(".choose-color .item-color").length && $(".choose-color .item-color").on("click", function() {
        $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>');
        var e = $(".detail-wrap").offset().top - 108,
            t = $(this).attr("data-href");
        $(".choose-color .item-color").removeClass("current"), $(this).addClass("current"), $("html, body").stop().animate({
            scrollTop: e
        }, 500, "linear", function() {
            $(".detail-pics").children().removeClass("on-show"), $(".detail-pics").stop().animate({
                opacity: 0
            }, 300, "linear", function() {
                SearchColor(t)
            })
        })
    })
}

function SearchType() {
    var m = $(".httpserver").text();
    $("#type-select").val(), $("#type-select option:selected").attr("data-name");
    if ($("#type-select option:selected").length) var e = $("#type-select option:selected").attr("data-href") + "?type=" + $("#type-select option:selected").val();
    else e = $("#type-select option:nth-child(1)").attr("data-href") + "?type=" + $("#type-select option:selected").val();
    $.ajax({
        url: e,
        cache: !1,
        dataType: "json",
        success: function(e) {
            var t, a, i, o, l, n, s, r = "";
            i = e.info.masp, o = e.info.giaban, l = e.info.giakhuyenmai, n = e.info.gia_default, s = e.info.giakhuyenmai_default, t = e.info.images, a = e.info.images_colors, e.id, image = e.info.image, $(".detail-name h3").html($(".detail-name h3").attr("data-title") + " " + i), "" != l ? ("" != o && (r += '<div class="price-default"><div class="product-price del-price"><strong>' + o + "</strong> " + $(".price-info").attr("data-vnd") + "</div></div>"), r += '<div class="price"><p><strong>' + l + "</strong> " + $(".price-info").attr("data-vnd") + "</p></div>") : "" != o && (r += '<div class="price"><p><strong>' + o + "</strong> " + $(".price-info").attr("data-vnd") + "</p></div>"), $(".price-info").html(r), "" != s ? $(".order-but, .quick-add").attr("data-price", s) : $(".order-but, .quick-add").attr("data-price", n), $(".order-but, .quick-add").attr("data-code", i), $(".order-but, .quick-add").attr("data-type", e.type), $(".order-but, .quick-add").attr("data-proid", e.info.id), $(".order-but, .quick-add").attr("data-url", e.info.href), $(".choose-color").attr("data-proid", e.info.id);
            r = "";
            if (r += '<div class="detail-slider">', 0 < t.length)
                for (var c = 0; c < t.length; c++) "" != t[c].image && "" != t[c].image1 && (r = r + '<div class="detail-pic"><img src="' + t[c].image1 + '" alt="' + t[c].name + '"><span class="zoom-but" data-src="' + t[c].image1 + '"></span></div>');
            else "" != image && (r = r + '<div class="detail-pic"><img src="' + image + '" alt="' + i + '"><span class="zoom-but" data-src="' + image + '"></span></div>');
            if (r += "</div>", r += "</div>", $(".detail-pics").html(r), r = "", 0 < a.length) {
                r = r + '<div class="title-color">' + $(".choose-color").attr("data-title") + "</div>";
                var d = 0;
                for (c = 0; c < a.length; c++)
                    if ("" != a[c].image && "" != a[c].image1) {
                        var u = "";
                        0 == d && (u = "current"), r = r + '<a href="javascript:void(0);" class="item-color pic-img ' + u + '" data-href="' + m + "view-color-detail-ajax.html?proid=" + $(".choose-color").attr("data-proid") + "&groupid=" + a[c].image_color + '" style="background-image: url(' + a[c].image + ');"><img src="' + a[c].image + '" alt=""></a>', d++
                    }
                $(".choose-color").html(r)
            }
            if (colorDetail(), r = "", 0 < t.length) {
                r += '<div class="color-slider">';
                for (c = 0; c < t.length; c++) "" != t[c].image && (r = r + '<div class="color-pic" style="background-color:' + t[c].image_color + '"></div>');
                r += "</div>", $(".color-thumbs").html(r)
            }
            SlidePicture(), $(".zoom-but").on("click", function(e) {
                return e.preventDefault(), Zoom($(this).parent().find("img")), !1
            }), $(".detail-pic").each(function(e, t) {
                $(t).on("click", function(e) {
                    e.preventDefault(), $(t).find(".zoom-but").trigger("click")
                })
            }), $(".loadx").fadeOut(300, "linear", function() {
                $(".loadx").remove()
            }), $(".detail-pics").stop().animate({
                opacity: 1
            }, 300, "linear", function() {
                onScroll()
            }), LinkPage()
        }
    })
}

function SearchColor(e) {
    $(".httpserver").text();
    $.ajax({
        url: e,
        cache: !1,
        dataType: "json",
        type: "GET",
        success: function(e) {
            var t, a = "";
            if (a += '<div class="detail-slider">', 0 < (t = e.info).length)
                for (var i = 0; i < t.length; i++) "" != t[i].image && "" != t[i].image1 && (a = a + '<div class="detail-pic"><img src="' + t[i].image1 + '" alt="' + t[i].name + '"><span class="zoom-but" data-src="' + t[i].image1 + '"></span></div>');
            if (a += "</div>", a += "</div>", $(".detail-pics").html(a), a = "", 0 < t.length) {
                a += '<div class="color-slider">';
                for (i = 0; i < t.length; i++) "" != t[i].image && (a = a + '<div class="color-pic" style="background-color:' + t[i].image_color + '"></div>');
                a += "</div>", $(".color-thumbs").html(a)
            }
            SlidePicture(), $(".zoom-but").on("click", function(e) {
                return e.preventDefault(), Zoom($(this).parent().find("img")), !1
            }), $(".detail-pic").each(function(e, t) {
                $(t).on("click", function(e) {
                    e.preventDefault(), $(t).find(".zoom-but").trigger("click")
                })
            }), $(".loadx").fadeOut(300, "linear", function() {
                $(".loadx").remove()
            }), $(".detail-pics").stop().animate({
                opacity: 1
            }, 300, "linear", function() {
                onScroll()
            }), LinkPage()
        }
    })
}

function FocusText() {
    $(".pass-mask").on("click", function() {
        $(this).addClass("hide"), $(this).next().focus()
    }), $("input, textarea").focus(function(e) {
        $(this).attr("data-holder") == $(this).val() && $(this).val("")
    }).focusout(function(e) {
        "" == $(this).val() && ($(this).prev().removeClass("hide"), $(this).val($(this).attr("data-holder")))
    })
}

function subNav() {
    $(".sub-nav li").on("click", function(e) {
        e.preventDefault();
        var t = $(this).find(".sub-item").attr("data-name");
        $(this).find(".sub-item").attr("data-href"), $(this).find(".sub-item").attr("data-title"), $(this).find(".sub-item").attr("data-keyword"), $(this).find(".sub-item").attr("data-description"), $(this).find(".sub-item").attr("data-details");
        if (!t) return !0;
        if (doWheel) {
            doWheel = !1, $(".sub-nav li").removeClass("current"), $(this).addClass("current"), $(".second li a[data-name='" + t + "']").parent().addClass("current");
            var a = $(".set-post[data-post='" + t + "']").offset().top - 70;
            return $("html, body").stop().animate({
                scrollTop: a
            }, 1500, "linear", function() {
                setTimeout(turnWheelTouch, 100)
            }), !1
        }
    }), $(".sub-nav li.current").length
}

function LoadIframeMap(e) {
    $.ajax({
        url: e,
        cache: !1,
        success: function(e) {
            $(".map-viewer").html(e), $(".loadx").fadeOut(300, "linear", function() {
                $(".loadx").remove(), Details = 1
            })
        }
    })
}

function agencyMap() {
    $(".list-result li").bind("click", function(e) {
        e.preventDefault(), $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'), $(".list-result li").removeClass("active"), $(this).addClass("active");
        var t = $(this).find(".link-load-map").attr("data-href");
        if (Mobile.matches && 1 == Details) {
            var a = $(".map-viewer").offset().top - 50;
            $("html, body").stop().animate({
                scrollTop: a
            }, 1e3, "linear")
        }
        $(".map-viewer").html(""), LoadIframeMap(t)
    }), setTimeout(function() {
        $(".list-result li:first-child").trigger("click")
    }, 500)
}

function LinkPage() {

}

function userChange(e) {
    if (e.value) {
        var t = e.value.substr(e.value.lastIndexOf(".") + 1);
        if ("png" == (t = t.toLowerCase()) || "jpg" == t || "gif" == t || "jpeg" == t) {
            var a = new FileReader;
            a.onload = function(e) {
                $(".user-pic").css({
                    "background-image": "url(" + e.target.result + ")"
                })
            }, a.readAsDataURL(e.files[0])
        } else {
            $("body").prepend("<div class='message-overlay'><div class='message-box'><h3>File Upload phải là hình !</h3></div></div>"), setTimeout(function() {
                $(".message-overlay").stop().animate({
                    opacity: 0
                }, 300, "linear", function() {
                    $(".message-overlay").remove()
                })
            }, 5e3)
        }
    }
}

function onChange(e) {
    if (e.value) {
        var t = e.value.substr(e.value.lastIndexOf(".") + 1);
        if ("png" == (t = t.toLowerCase()) || "jpg" == t || "gif" == t || "jpeg" == t) {
            $(e).parent().hide();
            $(".client-up").append('<div class="client-item"><span class="client-del">x</span></div>');
            var a = new FileReader;
            a.onload = function(e) {
                $(".client-item:last-child").css({
                    "background-image": "url(" + e.target.result + ")"
                })
            }, a.readAsDataURL(e.files[0]), $(".appendInput").append('<div class="file-up"><input aria-label="file" name="fileInput[]" type="file" onchange="onChange(this);"><span class="file-name">Chọn ảnh</span><span class="file-mark">Brown</span></div>')
        } else {
            $("body").prepend("<div class='message-overlay'><div class='message-box'><h3>File Upload phải là hình !</h3></div></div>"), setTimeout(function() {
                $(".message-overlay").stop().animate({
                    opacity: 0
                }, 300, "linear", function() {
                    $(".message-overlay").remove()
                })
            }, 5e3)
        }
    }
}

function ContentLoad() {
    ResizeWindows(), PrintShare(), ViewMoreText(), CustomeSelect(), ResizeWindows(), LinkPage(), FocusText(), Search(), NavClick(), Option();
    $("body").attr("id");
    if ($(".box-add-list .drop-down-select > div:first-child").click(), $(".log-out").on("click", function() {
            $.ajax({
                type: "POST",
                url: httpserver + "send-member-logout.html",
                data: "",
                dataType: "json",
                success: function(e) {
                    "200" == e.status ? ($(".overlay-dark").after("<div  class='contact-success color-blue'>" + e.message + "</div>"), window.location = httpserver) : $(".overlay-dark").after("<div  class='contact-success color-red'>" + e.message + "</div>"), setTimeout(hidemsg, 5e3)
                }
            })
        }), $(".custom-select-agency .drop-down-select div").on("click", function() {
            $.ajax({
                url: $(".httpserver").html() + "get-agency-ajax.html?id=" + $(this).attr("data-value"),
                dataType: "json",
                cache: !1,
                success: function(e) {
                    $(".custom-select-address p").text(e.info.address)
                }
            })
        }), $(".slide-modify, .slider-inner").addClass("show"), setTimeout(function() {
            $(".header").addClass("show"), $(".header, section, .slider-inner + .outer-nav").addClass("show-sp"), AniText(), 0 < $(".cart-text").html() && $(".cart-text").addClass("color")
        }, 1e3), $("#home-page").length) {
        if ($(".item-news-home").on("click", function() {
                $(this).find(".view-more").trigger("click")
            }), $(".home-popup").length) {
            setTimeout(function() {
                var e = $(".home-popup").attr("data-href");
                return $("html, body").addClass("no-scroll"), $(".overlay-dark").addClass("show"), popupLoad(e), !1
            }, 3e3)
        }
        setTimeout(function() {
            $(".scroll-down").addClass("play").addClass("show")
        }, 400), $(".scroll-down").on("click", function() {
            if (!Mobile.matches) {
                var e = $(".slide-modify").innerHeight();
                $("html, body").stop().animate({
                    scrollTop: e
                }, 500, "linear")
            }
        })
    } else $(".logo").css({
        cursor: "pointer"
    }), $(".logo").on("click", function() {
        $(".nav > ul > li:first-child a").trigger("click")
    });
    if ($("#furniture-page, #accessories-page, #dining-tables-page, #dining-chairs-page, #barstools-page, #sideboards-page, #sofa-page, #sofa-beds-page, #armchairs-page, #coffee-side-tables-page, #beds-page, #night-stands-page, #storing-working-page, #coming-soon-page, #new-arrival-page, #floor-lamps-page, #table-lamps-page, #pendant-page, #glass-art-page, #painting-page, #canvas-print-page, #cushions-throw-page, #rugs-page, #tealight-holder-page, #others-page").length) {
        if (colorDetail(), $(".zoom-but").on("click", function(e) {
                return e.preventDefault(), Zoom($(this).parent().find("img")), !1
            }), $(".detail-pic").each(function(e, t) {
                $(t).on("click", function(e) {
                    e.preventDefault(), $(t).find(".zoom-but").trigger("click")
                })
            }), $(".item-sub li.current").length) {
            var e = $('#category-select option[data-name="' + $(".item-sub li.current a").attr("data-name") + '"]').index();
            $("#category-select").prop("selectedIndex", e).change()
        } else $("#category-select").prop("selectedIndex", 0).change();
        $("#furniture-page, #accessories-page").length && ($(".product-item").each(function(e, t) {
            if ($(this).attr("data-proid") == $(".back_product_id").html()) {
                var a = $(this).offset().top - 100;
                $("html, body").stop().animate({
                    scrollTop: a
                }, 500, "linear", function() {})
            }
        }), $(".loadx").fadeOut(300, "linear", function() {
            $(".loadx").remove()
        }), $(".product-load").stop().animate({
            opacity: 1
        }, 300, "linear", function() {
            $(".product-load").addClass("show"), onScroll()
        }))
    }
    if ($("#new-arrival-page").length && ($(".star-handle .star-item").each(function(e, t) {
            $(t).on("click", function() {
                $(".star-handle .star-item").removeClass("show");
                var e = $(this).index();
                $("#star").val(e);
                for (var t = -1; t < e; t++) $(".star-handle .star-item[data-show='" + (t + 1) + "']").addClass("show")
            })
        }), $(".star-commment.star-commment-already").each(function(e, t) {
            var a = $(t).attr("data-star");
            $(t).find(".star-item").each(function(e, t) {
                e < a && $(t).addClass("show")
            })
        }), $(".tab-des li button").on("click", function() {
            $(".tab-des li").removeClass("current");
            var e = $(this).attr("data-target");
            $(this).parent().addClass("current"), $(".tab-content").removeClass("active");
            var t = $(".tab-content").length,
                a = $(".tab-content").width(),
                i = $('.all-tab-content .tab-content[data-tab= "' + e + '"]').innerHeight();
            $(".all-tab-content").width(t * a);
            var o = $(".all-tab-content").offset().left,
                l = $('.tab-content[data-tab= "' + e + '"]').offset().left;
            $(".all-tab-content").stop().animate({
                left: o - l,
                height: i
            }, 500, "linear", function() {
                $('.all-tab-content .tab-content[data-tab= "' + e + '"]').addClass("active")
            })
        }), Mobile.matches || setTimeout(function() {
            if ($(".tab-content").length) {
                var e = $(".info-details-products .wrap-content").width();
                $(".tab-content").width(e)
            }
            $(".tab-des li:first-child button").trigger("click")
        }, 1e3), $(".review").bind("click", function() {
            if ($(".comment-list").hasClass("active")) $(".comment-list, .review").removeClass("active"), $(".comment-list").css({
                height: 0
            });
            else {
                var e = $(".all-comment").innerHeight();
                $(".comment-list").css({
                    height: e
                }), $(".review, .comment-list").addClass("active")
            }
        }), $(".login-click").on("click", function(e) {
            e.preventDefault(), $(".login-but").trigger("click")
        }), $(".log-out").length && $(".breadcrumb").addClass("padding-right")), $("#our-designer-page").length && $(".designer-go").on("click", function(e) {
            e.preventDefault();
            var t = $(".register-content").offset().top - 108;
            return $("html, body").stop().animate({
                scrollTop: t
            }, 500, "linear"), !1
        }), $("#about-page").length && (youtubeVideo || inlineVideo) && (timer = setTimeout(function() {
            StartPlay()
        }, 1500)), $("#service-page").length && $(".sub-nav li.current").length) {
        var t = 108,
            a = $('.service-box[data-post="' + $(".sub-nav li.current a").attr("data-name") + '"]').offset().top - t;
        $("html, body").stop().animate({
            scrollTop: a
        }, 500, "linear")
    }
    if ($("#inspiration-page").length && ($(".item-news").on("click", function() {
            $(this).find(".view-more").trigger("click")
        }), $(".load-pdf").on("click", function(e) {
            e.preventDefault(), $(".container, .header, .social-facilities , .footer").addClass("blur"), $("html, body").addClass("no-scroll");
            var t = $(this).attr("data-href"),
                a = $(this).attr("data-pdf");
            return $(".loadx").length || ($("body").append('<div class="loadx" style="display:block"></div>'), $(".overlay-dark").addClass("show"), AjaxPDf(t, a)), !1
        })), $("#our-designer-page").length && $(".sub-nav li.current").length) {
        if ("desinger-5" == $(".sub-nav li.current a").attr("data-name")) t = 108, a = $(".register-content").offset().top - t;
        else t = 228, a = $('.designer-box[data-post="' + $(".sub-nav li.current a").attr("data-name") + '"]').offset().top - t;
        $("html, body").stop().animate({
            scrollTop: a
        }, 500, "linear")
    }
    if ($("#news-page").length && $(".item-news").on("click", function() {
            $(this).find("a").trigger("click")
        }), $("#news-details-page, #project-details-page, #policy-details-page").length && ($(".link-page").on("click", function(e) {
            e.preventDefault(), $(".news-link").addClass("no-link"), $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'), $(".link-page").removeClass("current"), $(this).addClass("current");
            var t = $(this).find("a").attr("data-details");
            $(".link-page a[data-details='" + t + "']").parent().addClass("current");
            var a = $(this).find("a").attr("href"),
                i = $(this).find("a").attr("href"),
                o = $(this).find("a").attr("data-title"),
                l = $(this).find("a").attr("data-keyword"),
                n = $(this).find("a").attr("data-description"),
                s = $(this).find("a").attr("data-details");
            if (changeUrl(i, o, n, l, s, o, n), $(".news-content").length && 0 == isFirst) {
                var r = $(".relation-wrap").offset().top - 108;
                $("html, body").stop().animate({
                    scrollTop: r
                }, 500, "linear", function() {
                    $(".load-data").css({
                        "min-height": $(".load-data").innerHeight()
                    }), $(".load-bg").animate({
                        opacity: 0
                    }, 300, "linear", function() {
                        NewsLoad(a)
                    })
                })
            } else $(".load-bg").animate({
                opacity: 0
            }, 300, "linear", function() {
                NewsLoad(a)
            });
            return !1
        }), $(".load-text a, .load-text p a").click(function(e) {
            e.preventDefault();
            var t = $(this).attr("href");
            return window.open(t, "_blank"), !1
        }), newsCommentCommon(), FocusText(), $(".load-text img").addClass("zoom-pic"), ZoomPic(), newsLikeCommon(), $(".load-bg").stop().animate({
            opacity: 1
        }, 300, "linear", function() {
            $(".load-details").addClass("fadeinup"), $(".news-link").removeClass("no-link"), $(".load-data").css({
                "min-height": $(window).height() / 2
            }), isFirst = !1, $("html, body").stop().animate({
                scrollTop: 0
            }, 500, "linear", function() {
                Mobile.matches ? detectBut() : $(".news-link").each(function(e, t) {
                    var a = $(t).find(".link-page.current").parent().index();
                    $(t).data("btq.slidebox").to(a, 300, !0)
                })
            }), $(".loadx").fadeOut(300, "linear", function() {
                $(".loadx").remove()
            })
        }), $(".link-page.current").length), $(".sub-nav li button.sub-item").on("click", function(e) {
            e.preventDefault();
            var t = 108;
            $("#our-designer-page").length && (t = 380);
            var a = $(this).attr("data-name");
            $(".sub-nav li").removeClass("current"), $(this).parent().addClass("current"), $(".scroll-post").removeClass("active");
            var i = $(".scroll-post[data-post='" + a + "']").offset().top - t;
            return $('.scroll-post[data-post= "' + a + '"]').addClass("active"), $("html, body").animate({
                scrollTop: i
            }, 1e3, "linear", function() {
                scrolling = !0
            }), !1
        }), $("#search-page").length, $("#our-stores-page").length) {
        function l() {
            $(".district-combo .select-div").on("click", function() {
                $.ajax({
                    url: $(".httpserver").html() + "get-agencys-by-city.html?cate=" + $(".agency-combo .same-as-selected").attr("data-value") + "&city=" + $(this).attr("data-value"),
                    dataType: "json",
                    cache: !1,
                    success: function(e) {
                        $(".list-view ul").children().remove();
                        var i = "",
                            o = "";
                        $.each(e, function(e, t) {
                            $.each(t.child, function(e, t) {
                                var a = "";
                                "" != t.address && (a += $(".hidden_dia_chi").val() + ": " + t.address + "<br>"), "" != t.phone_str && (a += $(".hidden_dien_thoai").val() + ": " + t.phone_str + "<br>"), "" != t.fax_str && (a += $(".hidden_fax").val() + ": " + t.fax_str + "<br>"), "" != t.email_str && (a += $(".hidden_email").val() + ": " + t.email_str), o = "<h3>" + t.name + "</h3><p>" + a + '</p><button class="no-display link-load-map" data-href="' + $(".httpserver").html() + "view-iframe-map.html?id=" + t.id + '"></button>', i = '<li class="agen_map" agen-id="agen_' + t.id + '">', i += o, i += "</li>", $(".list-view ul").append(i)
                            })
                        }), agencyMap()
                    }
                })
            })
        }
        $(".footer").addClass("has-our-stores"), $(".content-collapse").hide(), $(".a-collapse").on("click", function() {
            $(this).parent().find(".content-collapse").slideToggle(), $(this).toggleClass("active")
        }), agencyMap(), $(".agency-combo .select-div").on("click", function() {
            $.ajax({
                url: $(".httpserver").html() + "get-agencys.html?id=" + $(this).attr("data-value"),
                dataType: "json",
                cache: !1,
                success: function(e) {
                    $(".district-combo").children("option:not(:first)").remove(), $(".select-items.district-combo").prev().remove(), $(".select-items.district-combo").remove(), $(".list-view ul").children().remove();
                    var i = "",
                        o = "";
                    $.each(e, function(e, t) {
                        $(".district-combo").append($("<option>", {
                            value: t.city_id,
                            text: t.name
                        })), $.each(t.child, function(e, t) {
                            var a = "";
                            "" != t.address && (a += $(".hidden_dia_chi").val() + ": " + t.address + "<br>"), "" != t.phone_str && (a += $(".hidden_dien_thoai").val() + ": " + t.phone_str + "<br>"), "" != t.fax_str && (a += $(".hidden_fax").val() + ": " + t.fax_str + "<br>"), "" != t.email_str && (a += $(".hidden_email").val() + ": " + t.email_str), o = "<h3>" + t.name + "</h3><p>" + a + '</p><button class="no-display link-load-map" data-href="' + $(".httpserver").html() + "view-iframe-map.html?id=" + t.id + '"></button>', i = '<li  class="agen_map" agen-id="agen_' + t.id + '">', i += o, i += "</li>", $(".list-view ul").append(i)
                        })
                    }), CustomeSelect(), l(), agencyMap()
                }
            })
        }), l()
    }
    $("#register-page").length && $(".btnRegis").remove(), $("#account-page").length && $(".update-account").on("click", function(e) {
        e.preventDefault();
        var t = $(this).attr("data-href");
        return $("html, body").addClass("no-scroll"), $(".loadx").length || ($("body").append('<div class="loadx" style="display:block"></div>'), $(".overlay-dark").addClass("show"), popupLoad(t)), !1
    }), $("#login_but").on("click", function(e) {
        e.preventDefault();
        var t = document.URL;
        if (1 != validatelogin()) return $(".formError").click(function() {
            $(this).remove()
        }), !1;
        $("#login_but").attr("disabled", "disabled"), $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>');
        var a = $("#login_form").serialize();
        return $.ajax({
            type: "POST",
            url: httpserver + "send-member-login.html",
            data: a,
            dataType: "json",
            success: function(e) {
                $(".loadx").fadeOut(300, "linear", function() {
                    200 == e.status ? window.location = t : $(".overlay-dark").after("<div  class='contact-success color-red'>" + e.message + "</div>"), $("#login_but").removeAttr("disabled"), $(".loadx").remove()
                }), setTimeout(hidemsg, 5e3)
            }
        }), !1
    }), scrolling = !0, $(".review").length && $(".review").trigger("click")
}

function Zoom(e) {
    $("html, body").addClass("no-scroll"), zoomPC = !0, $(this).parent().addClass("to-scrollZ"), $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'), $(".all-pics").addClass("show"), $(".all-pics").append('<div class="full size-large"></div>'), $(".overlay-dark").addClass("show");
    var t = $(e).attr("src");
    $(".all-pics").find(".full").append('<img src ="' + t + '" alt="pic" />'), $(".all-pics").find(".full").append("<span></span>"), $("body").append('<div class="close-pics"></div>'), $(".all-pics").append('<div class="close-pics-small"></div>'), $(".all-pics img").on("load", function() {
        $(".all-pics").addClass("show"), Mobile.matches && ($(".full").addClass("pinch-zoom"), $(".pinch-zoom").each(function(e, t) {
            new PinchZoom.default(t, {
                draggableUnzoomed: !1
            })
        })), 1 < $(".full img").length && $(".full img").last().remove(), $(".loadx").fadeOut(300, "linear", function() {
            Mobile.matches || detectMargin(), $(".full img").addClass("fadein"), $(".loadx").remove()
        })
    }), Mobile.matches || $(".full span").on("click", function() {
        $(".close-pics").trigger("click")
    }), $(".close-pics-small, .close-pics").on("click", function() {
        zoomPC = !1, $(".loadx").remove(), $(".full").fadeOut(300, "linear", function() {
            if ($(".overlay-dark").removeClass("show"), $(".all-pics .full,  .all-pics .pinch-zoom-container").remove(), $(".close-pics-small, .close-pics").remove(), $(".all-pics").removeClass("show"), !$(".house").length && ($("html, body").removeClass("no-scroll"), $(".to-scrollZ").length)) {
                var e = $(".to-scrollZ").offset().top;
                $(".to-scrollZ").removeClass("to-scrollZ"), Mobile.matches && $("html, body").scrollTop(e - 60)
            }
        })
    })
}

function ZoomPic() {
    $("img").on("click", function() {
        if ($(this).hasClass("zoom-pic")) {
            if (740 < $(window).width()) return;
            $("html, body").addClass("no-scroll"), $(this).parent().addClass("to-scrollZ"), $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'), $(".all-pics").addClass("show"), $(".all-pics").append('<div class="full"></div>'), $(".overlay-dark").addClass("show");
            var e = $(this).attr("src");
            $(".all-pics").find(".full").append('<img src ="' + e + '" alt="pic" />'), $(".all-pics").find(".full").append("<span></span>"), $("body").append('<div class="close-pics"></div>'), $(".all-pics").append('<div class="close-pics-small"></div>'), $(".all-pics img").on("load", function() {
                $(".all-pics").addClass("show"), Mobile.matches && ($(".full").addClass("pinch-zoom"), $(".pinch-zoom").each(function(e, t) {
                    new PinchZoom.default(t, {
                        draggableUnzoomed: !1
                    })
                })), 1 < $(".full img").length && $(".full img").last().remove(), $(".loadx").fadeOut(300, "linear", function() {
                    Mobile.matches || detectMargin(), $(".full img").addClass("fadein"), $(".loadx").remove()
                })
            }), Mobile.matches || $(".full span").on("click", function() {
                $(".close-pics").trigger("click")
            }), $(".close-pics-small, .close-pics").on("click", function() {
                $(".loadx").remove(), $(".full").fadeOut(300, "linear", function() {
                    if ($(".overlay-dark").removeClass("show"), $(".all-pics .full,  .all-pics .pinch-zoom-container").remove(), $(".close-pics-small, .close-pics").remove(), $(".all-pics").removeClass("show"), !$(".house").length && ($("html, body").removeClass("no-scroll"), $(".to-scrollZ").length)) {
                        var e = $(".to-scrollZ").offset().top;
                        $(".to-scrollZ").removeClass("to-scrollZ"), Mobile.matches && $("html, body").scrollTop(e - 60)
                    }
                })
            })
        }
        return !1
    })
}

function Option() {
    $(".service-txt a, .load-text a").on("click", function(e) {
        e.preventDefault();
        var t = $(this).attr("href");
        return window.open(t, "_blank"), !1
    }), $("a.player, .view-video").on("click", function(e) {
        e.preventDefault(), $(this).parent().addClass("to-scrollV"), $(".popup-video img").length && ($(".popup-pics, .popup-video").removeClass("fadeinup").addClass("fadeout"), $(".close-popup").removeClass("fadeinup").addClass("fadeout"));
        var t = $(this).attr("data-href");
        return $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'), $("html, body").addClass("no-scroll"), $(".overlay-dark").addClass("show"), $(".allvideo").fadeIn(700, "linear", function() {
            VideoLoad(t)
        }), !1
    }), $(".all-album, .allvideo").mousewheel(function() {}), $(".view-album, .album-view, .zoom-album").on("click", function(e) {
        e.preventDefault();
        var t = $(this).attr("data-href"),
            a = $(this).attr("data-go") || -1;
        return $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'), $("html, body").addClass("no-scroll"), $(".overlay-dark").addClass("show"), $(".all-album").fadeIn(700, "linear", function() {
            AlbumLoad(t, a)
        }), !1
    }), $(".zoom:not(.album), .zoom-mobile").on("click", function() {
        $(this).hasClass("zoom-pc") && (zoomPC = !0), $("html, body").addClass("no-scroll"), $(".loadx").length || $("body").append('<div class="loadx" style="display:block"></div>'), $(".all-pics").addClass("show"), $(".all-pics").append('<div class="full"></div>'), $(".overlay-dark").addClass("show");
        var e = $(this).parent().find("img").attr("src") || $(this).parent().find("img").attr("data-src");
        if ($(this).attr("data-src")) var t = $(this).attr("data-src");
        else t = e;
        return $(".all-pics").find(".full").append('<img src ="' + t + '" alt="pic" />'), $(".all-pics").find(".full").append("<span></span>"), $("body").append('<div class="close-pics"></div>'), $(".all-pics").append('<div class="close-pics-small"></div>'), $(".all-pics img").on("load", function() {
            $(".all-pics").addClass("show"), Mobile.matches && ($(".full").addClass("pinch-zoom"), $(".pinch-zoom").each(function(e, t) {
                new PinchZoom.default(t, {
                    draggableUnzoomed: !1
                })
            })), 1 < $(".full img").length && $(".full img").last().remove(), $(".loadx").fadeOut(300, "linear", function() {
                Mobile.matches || detectMargin(), $(".full img").addClass("fadein"), $(".loadx").remove()
            })
        }), Mobile.matches || $(".full span").on("click", function() {
            $(".close-pics").trigger("click")
        }), $(".close-pics, .close-pics-small").on("click", function() {
            zoomPC = !1, $(".loadx").remove(), $(".full").fadeOut(300, "linear", function() {
                $(".overlay-dark").removeClass("show"), $(".all-pics .full, .all-pics .text-length, .all-pics .pinch-zoom-container").remove(), $(".close-pics, .close-pics-small").remove(), $(".all-pics").removeClass("show"), $("html, body").removeClass("no-scroll")
            })
        }), !1
    }), $(".go-top").on("click", function() {
        $("html, body").stop().animate({
            scrollTop: 0
        }, "slow")
    })
}

function turnWheelTouch() {
    doTouch = doWheel = !0
}

function detectBut() {
    if (Mobile.matches && $(".sub-nav li.current").length) {
        var e = $(".sub-nav ul").offset().left,
            t = $(".sub-nav li.current").offset().left,
            a = ($(window).width(), $(window).width() / 2 - $(".sub-nav li.current").width() / 2);
        $(".sub-nav").stop().animate({
            scrollLeft: t - a - e
        }, "slow")
    }
    if (Mobile.matches && $(".link-page").hasClass("current")) {
        var i = $(".link-page.current").parent().parent(),
            o = (e = $(".news-link").offset().left, t = $(".link-page.current").offset().left, $(".scroll-slide").width() / 2 - $(".link-page.current").width() / 2);
        $(i).stop().animate({
            scrollLeft: t - o - e
        }, "slow")
    }
    Mobile.matches && $(".sub-inner li.current").length && $(".sub-inner li.current").each(function(e, t) {
        var a = $(t).parent().offset().left,
            i = $(t).offset().left,
            o = ($(window).width(), $(window).width() / 2 - $(t).width() / 2);
        $(t).parent().parent().stop().animate({
            scrollLeft: i - o - a
        }, "slow")
    })
}

function detectMargin() {
    var e = $(".full img").width(),
        t = $(".full  img").height(),
        a = $(window).height(),
        i = $(window).width();
    e < i ? $(".full img").css({
        "margin-left": i / 2 - e / 2
    }) : $(".full img").css({
        "margin-left": 0
    }), t < a ? $(".full img").css({
        "margin-top": a / 2 - t / 2
    }) : $(".full img").css({
        "margin-top": 0
    })
}
document.addEventListener("scroll", function() {
        $(window).scrollTop();
        var t = $(document).scrollTop();
        $(".bottom").offset().top, $(".slide-modify").innerHeight();
        if (80 <= t ? $(".header, .scroll-down").addClass("hide") : $(".header, .scroll-down").removeClass("hide"), t >= $(window).height() / 2 ? $(".go-top").addClass("show") : $(".go-top").removeClass("show"), $(".youtube-video iframe").length && $(".youtube-video iframe").each(function(e, t) {
                $(t).isInViewport() ? StartPlay() : StopPlay()
            }), $(".slide-modify:not(.image-illus)").length && (t >= $(window).height() / 2 ? $(".stop-mask").trigger("click") : $(".play-mask").trigger("click")), !Mobile.matches && $("#our-stores-page").length && ($(".list-view").length && $(".list-view").isInViewport() ? $(".header-widget").addClass("hide") : $(".header-widget").removeClass("hide")), $(".outer-nav, .filter-outer").length) {
            var e = $(".slide-modify, .box-video-center").innerHeight() - 66;
            e <= t ? $(".outer-nav").addClass("fixed") : $(".outer-nav").removeClass("fixed"), e <= t ? $(".filter-outer").addClass("fixed") : $(".filter-outer").removeClass("fixed")
        }
        scrolling && $(".scroll-post").length && $(".scroll-post").each(function() {
            if ($(this).offset().top - t < $(window).height() - 40) {
                $(this).addClass("active");
                var e = $(".scroll-post.active").last().attr("data-post");
                e && ($(".sub-nav li").removeClass("current"), $('.sub-nav li .sub-item[data-name="' + e + '"]').parent().addClass("current"), detectBut())
            } else $(this).removeClass("active")
        }), window.requestAnimationFrame(function() {
            onScroll()
        }), windscroll = t
    }, {
        passive: !0
    }), window.addEventListener("orientationchange", function(e) {
        ResizeWindows(), Mobile.matches && setTimeout(function() {
            detectBut()
        }, 500)
    }), $(window).resize(function() {
        ResizeWindows(), $(".full img").length && (Mobile.matches || detectMargin())
    }), $(window).on("resize", function() {
        ResizeWindows(), Mobile.matches ? ($(".nav-but").hasClass("active") && $("html, body").addClass("no-scroll"), $(".news-link").length && $(".news-link").hasClass("slide-slidebox") && $(".news-link").each(function(e, t) {
            $(t).data("btq.slidebox").destroy()
        }), $(".slide-list-youtube").length && $(".slide-list-youtube").hasClass("slide-slidebox") && $(".slide-list-youtube").each(function(e, t) {
            $(t).data("btq.slidebox").destroy()
        })) : ($(".nav-but").hasClass("active") && $("html, body").removeClass("no-scroll"), $(".slide-list-youtube").length && ($(".slide-list-youtube").hasClass("slide-slidebox") || SlidePicture()), $(".news-link").length && ($(".news-link").hasClass("slide-slidebox") || (SlidePicture(), setTimeout(function() {
            var e = $(".news-link .slide-item").index($(".link-page.current").parent());
            $(".news-link").data("btq.slidebox").to(e, 100, !0)
        }, 300))))
    }, 250), $(window).bind("popstate", function(e) {
        Mobile.matches || e.preventDefault();
        var t = $(".httpserver").text();
        if (Mobile.matches) {
            if (null !== e.originalEvent.state) a = e.originalEvent.state.path;
            else a = document.URL;
            a.replace(t, "").split("/");
            $("#requiment-page").length && ($(".close-popup").length ? $(".close-popup").trigger("click") : ($(".nav li a").each(function(e, t) {
                $(t).attr("href") == a && window.history.back()
            }), $(".view-requiment").each(function(e, t) {
                $(t).attr("href") == a && $(t).trigger("click")
            }))), $("#news-details-page, #project-details-page, #policy-details-page").length && ($(".nav li a").each(function(e, t) {
                $(t).attr("href") == a && window.history.back()
            }), $(".sub-nav li .sub-item").each(function(e, t) {
                $(t).attr("href") == a && window.history.back()
            }), $(".link-page a").each(function(e, t) {
                $(t).attr("href") == a && (window.location = a)
            }))
        } else if (null !== e.originalEvent.state) {
            var a = e.originalEvent.state.path,
                i = e.originalEvent.state.dataName,
                o = e.originalEvent.state.title,
                l = document.URL;
            changeUrl(a, o, "", "", i, "", "");
            a.replace(t, "").split("/");
            $("#requiment-page").length && ($(".close-popup").length ? $(".close-popup").trigger("click") : ($(".nav li a").each(function(e, t) {
                $(t).attr("href") == a && window.history.back()
            }), $(".view-requiment").each(function(e, t) {
                $(t).attr("href") == a && $(t).trigger("click")
            }))), $("#news-details-page, #project-details-page, #policy-details-page").length && ($(".nav li a").each(function(e, t) {
                $(t).attr("href") == a && window.history.back()
            }), $(".sub-nav li .sub-item").each(function(e, t) {
                $(t).attr("href") == a && window.history.back()
            }), $(".link-page a").each(function(e, t) {
                $(t).attr("href") == a && $(t).trigger("click")
            }))
        } else {
            (l = document.URL).replace(t, "").split("/");
            $("#requiment-page").length && ($(".close-popup").length ? $(".close-popup").trigger("click") : ($(".nav li a").each(function(e, t) {
                $(t).attr("href") == l && window.history.back()
            }), $(".view-requiment").each(function(e, t) {
                $(t).attr("href") == l && $(t).trigger("click")
            }))), $("#news-details-page, #project-details-page, #policy-details-page").length && ($(".nav li a").each(function(e, t) {
                $(t).attr("href") == l && window.history.back()
            }), $(".sub-nav li .sub-item").each(function(e, t) {
                $(t).attr("href") == l && window.history.back()
            }), $(".link-page a").each(function(e, t) {
                $(t).attr("href") == l && $(t).trigger("click")
            }))
        }
    }),
    function(p, o) {
        ! function() {
            for (var l = 0, e = ["ms", "moz", "webkit", "o"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[t] + "CancelAnimationFrame"] || window[e[t] + "CancelRequestAnimationFrame"];
            window.requestAnimationFrame || (window.requestAnimationFrame = function(e, t) {
                var a = (new Date).getTime(),
                    i = Math.max(0, 16 - Math.abs(a - l)),
                    o = window.setTimeout(function() {
                        e(a + i)
                    }, i);
                return l = a + i, o
            }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(e) {
                clearTimeout(e)
            })
        }();
        var l = "flurry";

        function $(e, t) {
            return Math.floor(Math.random() * (t - e + 1) + e)
        }

        function d(e, t, a) {
            var i = 1 === e.character.length ? e.character : e.character.charAt(Math.round($(0, e.character.length - 1))),
                o = $(-Math.abs(e.wind), a + Math.abs(e.wind)),
                l = o + $(e.wind - e.windVariance, e.wind + e.windVariance),
                n = $(e.small, e.large),
                s = e.speed / (($(1.2 * n, .8 * n) - e.small) / (e.large - e.small) + .5),
                r = e.height - n,
                c = $(e.rotation - e.rotationVariance, e.rotation + e.rotationVariance),
                d = Array.isArray(e.color) ? e.color[Math.floor(Math.random() * e.color.length)] : e.color,
                u = {
                    transform: "translateX(" + l + "px) translateY(" + r + "px) rotateZ(" + c + "deg)",
                    opacity: 0
                },
                m = p("<span></span>");
            m.html(i).css({
                color: e.blur && n < (e.large + e.small) / 2 ? "transparent" : d,
                "text-shadow": e.blur && n < (e.large + e.small) / 2 ? "0 0 1px " + d : "none",
                display: "inline-block",
                "line-height": 1,
                margin: 0,
                padding: "2px",
                "pointer-events": "none",
                "font-size": n + "px",
                opacity: e.startTransparency,
                position: "absolute",
                top: "-" + 1.2 * e.large + "px",
                transform: "translateX(" + o + "px) translateY(0px) rotateZ(" + e.startRotation + "deg)",
                transition: "transform " + s / 1e3 + "s linear, opacity " + s / 1e3 + "s " + e.opacityEasing,
                "z-index": e.zIndex
            }).appendTo(t), m.on("transitionend.flurry", function(e) {
                p(e.target).remove()
            }), window.requestAnimationFrame(function() {
                m.css(u)
            })
        }

        function n(e, n) {
            var s = this,
                t = e,
                r = p(e);

            function c(e) {
                n[e] !== o && n[e].call(t)
            }
            return n = p.extend({
                    height: 200 < r.height() ? 200 : r.height(),
                    useRelative: !r.is("body")
                }, p.fn[l].defaults, n), p.each(n, function(e, t) {
                    parseInt(t) && (n[e] = parseInt(t))
                }),
                function() {
                    !0 === n.useRelative && "static" === r.css("position") && r.css({
                        position: "relative"
                    });
                    var a, i, o, l, e = p(document.createElement("div")).addClass("flurry-container").css({
                            margin: 0,
                            padding: 0,
                            position: "absolute",
                            top: 0,
                            right: 0,
                            left: 0,
                            height: n.height,
                            overflow: n.overflow,
                            "pointer-events": "none",
                            "z-index": 99999
                        }).prependTo(r),
                        t = e.width();
                    p(window).resize(function() {
                        t = e.width()
                    }), s.flakeInterval = (a = function() {
                        d(n, e, t)
                    }, i = n.frequency, o = (new Date).getTime(), (l = new Object).value = window.requestAnimationFrame(function e() {
                        var t = (new Date).getTime();
                        i <= t - o && (a.call(), o = (new Date).getTime()), l.value = window.requestAnimationFrame(e)
                    }), l), c("onInit")
                }(), {
                    option: function(e, t) {
                        if (!t) return n[e];
                        n[e] = parseInt(t) || t
                    },
                    destroy: function() {
                        r.each(function() {
                            var e, t = p(this);
                            e = s.flakeInterval, window.cancelAnimationFrame ? window.cancelAnimationFrame(e.value) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(e.value) : window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(e.value) : window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(e.value) : window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(e.value) : window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(e.value) : clearInterval(e), t.find(".flurry-container").remove(), c("onDestroy"), t.removeData("plugin_" + l)
                        })
                    }
                }
        }
        p.fn[l] = function(e) {
            if ("string" == typeof e) {
                var t, a = e,
                    i = Array.prototype.slice.call(arguments, 1);
                return this.each(function() {
                    if (!p.data(this, "plugin_" + l) || "function" != typeof p.data(this, "plugin_" + l)[a]) throw new Error("Method " + a + " does not exist on jQuery." + l);
                    t = p.data(this, "plugin_" + l)[a].apply(this, i)
                }), t !== o ? t : this
            }
            if ("object" == typeof e || !e) return this.each(function() {
                p.data(this, "plugin_" + l) || p.data(this, "plugin_" + l, new n(this, e))
            })
        }, p.fn[l].defaults = {
            onInit: function() {},
            onDestroy: function() {},
            character: "❀",
            height: 500,
            color: "#ffff66",
            frequency: 300,
            speed: 5e3,
            small: 8,
            large: 50,
            wind: 80,
            windVariance: 100,
            rotation: 90,
            rotationVariance: 180,
            startRotation: 0,
            startOpacity: 1,
            endOpacity: 0,
            opacityEasing: "cubic-bezier(1,.3,.6,.74)",
            blur: !0,
            overflow: "hidden",
            zIndex: 9999
        }
    }(jQuery);