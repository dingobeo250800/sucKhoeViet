! function(j) {
    function f() { j[k].glbl || (b = { $wndw: j(window), $html: j("html"), $body: j("body") }, c = {}, d = {}, h = {}, j.each([c, d, h], function(i, a) { a.add = function(m) { m = m.split(" "); for (var o = 0, l = m.length; l > o; o++) { a[m[o]] = a.mm(m[o]) } } }), c.mm = function(a) { return "mm-" + a }, c.add("wrapper menu panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"), c.umm = function(a) { return "mm-" == a.slice(0, 3) && (a = a.slice(3)), a }, d.mm = function(a) { return "mm-" + a }, d.add("parent sub"), h.mm = function(a) { return a + ".mm" }, h.add("transitionend webkitTransitionEnd mousedown mouseup touchstart touchmove touchend click keydown"), j[k]._c = c, j[k]._d = d, j[k]._e = h, j[k].glbl = b) } var k = "mmenu",
        g = "5.3.4"; if (!j[k]) { j[k] = function(l, a, m) { this.$menu = l, this._api = ["bind", "init", "update", "setSelected", "getInstance", "openPanel", "closePanel", "closeAllPanels"], this.opts = a, this.conf = m, this.vars = {}, this.cbck = {}, "function" == typeof this.___deprecated && this.___deprecated(), this._initMenu(), this._initAnchors(); var i = this.$menu.children(this.conf.panelNodetype); return this._initAddons(), this.init(i), "function" == typeof this.___debug && this.___debug(), this }, j[k].version = g, j[k].addons = {}, j[k].uniqueId = 0, j[k].defaults = { extensions: [], navbar: { add: !0, title: "Menu", titleLink: "panel" }, onClick: { setSelected: !0 }, slidingSubmenus: !0 }, j[k].configuration = { classNames: { divider: "Divider", inset: "Inset", panel: "Panel", selected: "Selected", spacer: "Spacer", vertical: "Vertical" }, clone: !1, openingInterval: 25, panelNodetype: "ul, ol, div", transitionDuration: 400 }, j[k].prototype = { init: function(a) { a = a.not("." + c.nopanel), a = this._initPanels(a), this.trigger("init", a), this.trigger("update") }, update: function() { this.trigger("update") }, setSelected: function(a) { this.$menu.find("." + c.listview).children().removeClass(c.selected), a.addClass(c.selected), this.trigger("setSelected", a) }, openPanel: function(m) { var n = m.parent(); if (n.hasClass(c.vertical)) { var e = n.parents("." + c.subopened); if (e.length) { return this.openPanel(e.first()) }
                    n.addClass(c.opened) } else { if (m.hasClass(c.current)) { return } var o = this.$menu.children("." + c.panel),
                        a = o.filter("." + c.current);
                    o.removeClass(c.highest).removeClass(c.current).not(m).not(a).not("." + c.vertical).addClass(c.hidden), j[k].support.csstransitions || a.addClass(c.hidden), m.hasClass(c.opened) ? m.nextAll("." + c.opened).addClass(c.highest).removeClass(c.opened).removeClass(c.subopened) : (m.addClass(c.highest), a.addClass(c.subopened)), m.removeClass(c.hidden).addClass(c.current), setTimeout(function() { m.removeClass(c.subopened).addClass(c.opened) }, this.conf.openingInterval) }
                this.trigger("openPanel", m) }, closePanel: function(i) { var a = i.parent();
                a.hasClass(c.vertical) && (a.removeClass(c.opened), this.trigger("closePanel", i)) }, closeAllPanels: function() { this.$menu.find("." + c.listview).children().removeClass(c.selected).filter("." + c.vertical).removeClass(c.opened); var i = this.$menu.children("." + c.panel),
                    a = i.first();
                this.$menu.children("." + c.panel).not(a).removeClass(c.subopened).removeClass(c.opened).removeClass(c.current).removeClass(c.highest).addClass(c.hidden), this.openPanel(a) }, togglePanel: function(i) { var a = i.parent();
                a.hasClass(c.vertical) && this[a.hasClass(c.opened) ? "closePanel" : "openPanel"](i) }, getInstance: function() { return this }, bind: function(i, a) { this.cbck[i] = this.cbck[i] || [], this.cbck[i].push(a) }, trigger: function() { var o = this,
                    l = Array.prototype.slice.call(arguments),
                    p = l.shift(); if (this.cbck[p]) { for (var m = 0, i = this.cbck[p].length; i > m; m++) { this.cbck[p][m].apply(o, l) } } }, _initMenu: function() { this.opts.offCanvas && this.conf.clone && (this.$menu = this.$menu.clone(!0), this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function() { j(this).attr("id", c.mm(j(this).attr("id"))) })), this.$menu.contents().each(function() { 3 == j(this)[0].nodeType && j(this).remove() }), this.$menu.parent().addClass(c.wrapper); var a = [c.menu];
                this.opts.slidingSubmenus || a.push(c.vertical), this.opts.extensions = this.opts.extensions.length ? "mm-" + this.opts.extensions.join(" mm-") : "", this.opts.extensions && a.push(this.opts.extensions), this.$menu.addClass(a.join(" ")) }, _initPanels: function(w) { var i = this,
                    x = this.__findAddBack(w, "ul, ol");
                this.__refactorClass(x, this.conf.classNames.inset, "inset").addClass(c.nolistview + " " + c.nopanel), x.not("." + c.nolistview).addClass(c.listview); var a = this.__findAddBack(w, "." + c.listview).children();
                this.__refactorClass(a, this.conf.classNames.selected, "selected"), this.__refactorClass(a, this.conf.classNames.divider, "divider"), this.__refactorClass(a, this.conf.classNames.spacer, "spacer"), this.__refactorClass(this.__findAddBack(w, "." + this.conf.classNames.panel), this.conf.classNames.panel, "panel"); var m = j(),
                    p = w.add(w.find("." + c.panel)).add(this.__findAddBack(w, "." + c.listview).children().children(this.conf.panelNodetype)).not("." + c.nopanel);
                this.__refactorClass(p, this.conf.classNames.vertical, "vertical"), this.opts.slidingSubmenus || p.addClass(c.vertical), p.each(function() { var n = j(this),
                        o = n;
                    n.is("ul, ol") ? (n.wrap('<div class="' + c.panel + '" />'), o = n.parent()) : o.addClass(c.panel); var l = n.attr("id");
                    n.removeAttr("id"), o.attr("id", l || i.__getUniqueId()), n.hasClass(c.vertical) && (n.removeClass(i.conf.classNames.vertical), o.add(o.parent()).addClass(c.vertical)), m = m.add(o) }); var e = j("." + c.panel, this.$menu);
                m.each(function() { var u = j(this),
                        y = u.parent(),
                        z = y.children("a, span").first(); if (y.is("." + c.menu) || (y.data(d.sub, u), u.data(d.parent, y)), !y.children("." + c.next).length && y.parent().is("." + c.listview)) { var n = u.attr("id"),
                            B = j('<a class="' + c.next + '" href="#' + n + '" data-target="#' + n + '" />').insertBefore(z);
                        z.is("span") && B.addClass(c.fullsubopen) } if (!u.children("." + c.navbar).length && !y.hasClass(c.vertical)) { if (y.parent().is("." + c.listview)) { var y = y.closest("." + c.panel) } else { var z = y.closest("." + c.panel).find('a[href="#' + u.attr("id") + '"]').first(),
                                y = z.closest("." + c.panel) } var A = j('<div class="' + c.navbar + '" />'); if (y.length) { var n = y.attr("id"); switch (i.opts.navbar.titleLink) {
                                case "anchor":
                                    _url = z.attr("href"); break;
                                case "panel":
                                case "parent":
                                    _url = "#" + n; break;
                                case "none":
                                default:
                                    _url = !1 }
                            A.append('<a class="' + c.btn + " " + c.prev + '" href="#' + n + '" data-target="#' + n + '"></a>').append('<a class="' + c.title + '"' + (_url ? ' href="' + _url + '"' : "") + ">" + z.text() + "</a>").prependTo(u), i.opts.navbar.add && u.addClass(c.hasnavbar) } else { i.opts.navbar.title && (A.append('<a class="' + c.title + '">' + i.opts.navbar.title + "</a>").prependTo(u), i.opts.navbar.add && u.addClass(c.hasnavbar)) } } }); var q = this.__findAddBack(w, "." + c.listview).children("." + c.selected).removeClass(c.selected).last().addClass(c.selected);
                q.add(q.parentsUntil("." + c.menu, "li")).filter("." + c.vertical).addClass(c.opened).end().not("." + c.vertical).each(function() { j(this).parentsUntil("." + c.menu, "." + c.panel).not("." + c.vertical).first().addClass(c.opened).parentsUntil("." + c.menu, "." + c.panel).not("." + c.vertical).first().addClass(c.opened).addClass(c.subopened) }), q.children("." + c.panel).not("." + c.vertical).addClass(c.opened).parentsUntil("." + c.menu, "." + c.panel).not("." + c.vertical).first().addClass(c.opened).addClass(c.subopened); var v = e.filter("." + c.opened); return v.length || (v = m.first()), v.addClass(c.opened).last().addClass(c.current), m.not("." + c.vertical).not(v.last()).addClass(c.hidden).end().appendTo(this.$menu), m }, _initAnchors: function() { var a = this;
                b.$body.on(h.click + "-oncanvas", "a[href]", function(x) { var n = j(this),
                        e = !1,
                        t = a.$menu.find(n).length; for (var m in j[k].addons) { if (e = j[k].addons[m].clickAnchor.call(a, n, t)) { break } } if (!e && t) { var v = n.attr("href"); if (v.length > 1 && "#" == v.slice(0, 1)) { try { var w = j(v, a.$menu);
                                w.is("." + c.panel) && (e = !0, a[n.parent().hasClass(c.vertical) ? "togglePanel" : "openPanel"](w)) } catch (q) {} } } if (e && x.preventDefault(), !e && t && n.is("." + c.listview + " > li > a") && !n.is('[rel="external"]') && !n.is('[target="_blank"]')) { a.__valueOrFn(a.opts.onClick.setSelected, n) && a.setSelected(j(x.target).parent()); var l = a.__valueOrFn(a.opts.onClick.preventDefault, n, "#" == v.slice(0, 1));
                        l && x.preventDefault(), a.__valueOrFn(a.opts.onClick.blockUI, n, !l) && b.$html.addClass(c.blocking), a.__valueOrFn(a.opts.onClick.close, n, l) && a.close() } }) }, _initAddons: function() { for (var a in j[k].addons) { j[k].addons[a].add.call(this), j[k].addons[a].add = function() {} } for (var a in j[k].addons) { j[k].addons[a].setup.call(this) } }, __api: function() { var a = this,
                    e = {}; return j.each(this._api, function() { var i = this;
                    e[i] = function() { var l = a[i].apply(a, arguments); return "undefined" == typeof l ? e : l } }), e }, __valueOrFn: function(i, a, l) { return "function" == typeof i ? i.call(a[0]) : "undefined" == typeof i && "undefined" != typeof l ? l : i }, __refactorClass: function(i, a, l) { return i.filter("." + a).removeClass(a).addClass(c[l]) }, __findAddBack: function(i, a) { return i.find(a).add(i.filter(a)) }, __filterListItems: function(a) { return a.not("." + c.divider).not("." + c.hidden) }, __transitionend: function(o, l, p) { var m = !1,
                    i = function() { m || l.call(o[0]), m = !0 };
                o.one(h.transitionend, i), o.one(h.webkitTransitionEnd, i), setTimeout(i, 1.1 * p) }, __getUniqueId: function() { return c.mm(j[k].uniqueId++) } }, j.fn[k] = function(i, e) { return f(), i = j.extend(!0, {}, j[k].defaults, i), e = j.extend(!0, {}, j[k].configuration, e), this.each(function() { var l = j(this); if (!l.data(k)) { var a = new j[k](l, i, e);
                    l.data(k, a.__api()) } }) }, j[k].support = { touch: "ontouchstart" in window || navigator.msMaxTouchPoints, csstransitions: function() { if ("undefined" != typeof Modernizr) { return Modernizr.csstransitions } var o = document.body || document.documentElement,
                    l = o.style,
                    p = "transition"; if ("string" == typeof l[p]) { return !0 } var m = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"];
                p = p.charAt(0).toUpperCase() + p.substr(1); for (var i = 0; i < m.length; i++) { if ("string" == typeof l[m[i] + p]) { return !0 } } return !1 }() }; var c, d, h, b } }(jQuery);
! function(d) { var g = "mmenu",
        h = "offCanvas";
    d[g].addons[h] = { setup: function() { if (this.opts[h]) { var k = this.opts[h],
                    a = this.conf[h];
                b = d[g].glbl, this._api = d.merge(this._api, ["open", "close", "setPage"]), ("top" == k.position || "bottom" == k.position) && (k.zposition = "front"), "string" != typeof a.pageSelector && (a.pageSelector = "> " + a.pageNodetype), b.$allMenus = (b.$allMenus || d()).add(this.$menu), this.vars.opened = !1; var e = [f.offcanvas]; "left" != k.position && e.push(f.mm(k.position)), "back" != k.zposition && e.push(f.mm(k.zposition)), this.$menu.addClass(e.join(" ")).parent().removeClass(f.wrapper), this.setPage(b.$page), this._initBlocker(), this["_initWindow_" + h](), this.$menu[a.menuInjectMethod + "To"](a.menuWrapperSelector) } }, add: function() { f = d[g]._c, j = d[g]._d, c = d[g]._e, f.add("offcanvas slideout modal background opening blocker page"), j.add("style"), c.add("resize") }, clickAnchor: function(a) { if (!this.opts[h]) { return !1 } var i = this.$menu.attr("id"); if (i && i.length && (this.conf.clone && (i = f.umm(i)), a.is('[href="#' + i + '"]'))) { return this.open(), !0 } if (b.$page) { var i = b.$page.first().attr("id"); return i && i.length && a.is('[href="#' + i + '"]') ? (this.close(), !0) : !1 } } }, d[g].defaults[h] = { position: "left", zposition: "back", modal: !1, moveBackground: !0 }, d[g].configuration[h] = { pageNodetype: "div", pageSelector: null, wrapPageIfNeeded: !0, menuWrapperSelector: "body", menuInjectMethod: "prepend" }, d[g].prototype.open = function() { if (!this.vars.opened) { var a = this;
            this._openSetup(), setTimeout(function() { a._openFinish() }, this.conf.openingInterval), this.trigger("open") } }, d[g].prototype._openSetup = function() { var i = this;
        this.closeAllOthers(), b.$page.each(function() { d(this).data(j.style, d(this).attr("style") || "") }), b.$wndw.trigger(c.resize + "-offcanvas", [!0]); var a = [f.opened];
        this.opts[h].modal && a.push(f.modal), this.opts[h].moveBackground && a.push(f.background), "left" != this.opts[h].position && a.push(f.mm(this.opts[h].position)), "back" != this.opts[h].zposition && a.push(f.mm(this.opts[h].zposition)), this.opts.extensions && a.push(this.opts.extensions), b.$html.addClass(a.join(" ")), setTimeout(function() { i.vars.opened = !0 }, this.conf.openingInterval), this.$menu.addClass(f.current + " " + f.opened) }, d[g].prototype._openFinish = function() { var a = this;
        this.__transitionend(b.$page.first(), function() { a.trigger("opened") }, this.conf.transitionDuration), b.$html.addClass(f.opening), this.trigger("opening") }, d[g].prototype.close = function() { if (this.vars.opened) { var a = this;
            this.__transitionend(b.$page.first(), function() { a.$menu.removeClass(f.current).removeClass(f.opened), b.$html.removeClass(f.opened).removeClass(f.modal).removeClass(f.background).removeClass(f.mm(a.opts[h].position)).removeClass(f.mm(a.opts[h].zposition)), a.opts.extensions && b.$html.removeClass(a.opts.extensions), b.$page.each(function() { d(this).attr("style", d(this).data(j.style)) }), a.vars.opened = !1, a.trigger("closed") }, this.conf.transitionDuration), b.$html.removeClass(f.opening), this.trigger("close"), this.trigger("closing") } }, d[g].prototype.closeAllOthers = function() { b.$allMenus.not(this.$menu).each(function() { var a = d(this).data(g);
            a && a.close && a.close() }) }, d[g].prototype.setPage = function(k) { var l = this,
            a = this.conf[h];
        k && k.length || (k = b.$body.find(a.pageSelector), k.length > 1 && a.wrapPageIfNeeded && (k = k.wrapAll("<" + this.conf[h].pageNodetype + " />").parent())), k.each(function() { d(this).attr("id", d(this).attr("id") || l.__getUniqueId()) }), k.addClass(f.page + " " + f.slideout), b.$page = k, this.trigger("setPage", k) }, d[g].prototype["_initWindow_" + h] = function() { b.$wndw.off(c.keydown + "-offcanvas").on(c.keydown + "-offcanvas", function(e) { return b.$html.hasClass(f.opened) && 9 == e.keyCode ? (e.preventDefault(), !1) : void 0 }); var a = 0;
        b.$wndw.off(c.resize + "-offcanvas").on(c.resize + "-offcanvas", function(i, k) { if (1 == b.$page.length && (k || b.$html.hasClass(f.opened))) { var l = b.$wndw.height();
                (k || l != a) && (a = l, b.$page.css("minHeight", l)) } }) }, d[g].prototype._initBlocker = function() { var a = this;
        b.$blck || (b.$blck = d('<div id="' + f.blocker + '" class="' + f.slideout + '" />')), b.$blck.appendTo(b.$body).off(c.touchstart + "-offcanvas " + c.touchmove + "-offcanvas").on(c.touchstart + "-offcanvas " + c.touchmove + "-offcanvas", function(e) { e.preventDefault(), e.stopPropagation(), b.$blck.trigger(c.mousedown + "-offcanvas") }).off(c.mousedown + "-offcanvas").on(c.mousedown + "-offcanvas", function(e) { e.preventDefault(), b.$html.hasClass(f.modal) || (a.closeAllOthers(), a.close()) }) }; var f, j, c, b }(jQuery);
! function(d) { var j = "mmenu",
        c = "autoHeight";
    d[j].addons[c] = { setup: function() { if (this.opts.offCanvas) { switch (this.opts.offCanvas.position) {
                    case "left":
                    case "right":
                        return } var h = this,
                    e = this.opts[c]; if (this.conf[c], f = d[j].glbl, "boolean" == typeof e && e && (e = { height: "auto" }), "object" != typeof e && (e = {}), e = this.opts[c] = d.extend(!0, {}, d[j].defaults[c], e), "auto" == e.height) { this.$menu.addClass(g.autoheight); var a = function(i) { var l = this.$menu.children("." + g.current);
                        _top = parseInt(l.css("top"), 10) || 0, _bot = parseInt(l.css("bottom"), 10) || 0, this.$menu.addClass(g.measureheight), i = i || this.$menu.children("." + g.current), i.is("." + g.vertical) && (i = i.parents("." + g.panel).not("." + g.vertical).first()), this.$menu.height(i.outerHeight() + _top + _bot).removeClass(g.measureheight) };
                    this.bind("update", a), this.bind("openPanel", a), this.bind("closePanel", a), this.bind("open", a), f.$wndw.off(b.resize + "-autoheight").on(b.resize + "-autoheight", function() { a.call(h) }) } } }, add: function() { g = d[j]._c, k = d[j]._d, b = d[j]._e, g.add("autoheight measureheight"), b.add("resize") }, clickAnchor: function() {} }, d[j].defaults[c] = { height: "default" }; var g, k, b, f }(jQuery);
! function(h) { var d = "mmenu",
        j = "backButton";
    h[d].addons[j] = { setup: function() { if (this.opts.offCanvas) { var a = this,
                    k = this.opts[j]; if (this.conf[j], b = h[d].glbl, "boolean" == typeof k && (k = { close: k }), "object" != typeof k && (k = {}), k = h.extend(!0, {}, h[d].defaults[j], k), k.close) { var l = "#" + a.$menu.attr("id");
                    this.bind("opened", function() { location.hash != l && history.pushState(null, document.title, l) }), h(window).on("popstate", function(e) { b.$html.hasClass(f.opened) ? (e.stopPropagation(), a.close()) : location.hash == l && (e.stopPropagation(), a.open()) }) } } }, add: function() { return window.history && window.history.pushState ? (f = h[d]._c, c = h[d]._d, g = h[d]._e, void 0) : (h[d].addons[j].setup = function() {}, void 0) }, clickAnchor: function() {} }, h[d].defaults[j] = { close: !1 }; var f, c, g, b }(jQuery);
! function(f) { var k = "mmenu",
        h = "counters";
    f[k].addons[h] = { setup: function() { var e = this,
                a = this.opts[h];
            this.conf[h], g = f[k].glbl, "boolean" == typeof a && (a = { add: a, update: a }), "object" != typeof a && (a = {}), a = this.opts[h] = f.extend(!0, {}, f[k].defaults[h], a), this.bind("init", function(c) { this.__refactorClass(f("em", c), this.conf.classNames[h].counter, "counter") }), a.add && this.bind("init", function(c) { c.each(function() { var i = f(this).data(b.parent);
                    i && (i.children("em." + d.counter).length || i.prepend(f('<em class="' + d.counter + '" />'))) }) }), a.update && this.bind("update", function() { this.$menu.find("." + d.panel).each(function() { var l = f(this),
                        i = l.data(b.parent); if (i) { var c = i.children("em." + d.counter);
                        c.length && (l = l.children("." + d.listview), l.length && c.html(e.__filterListItems(l.children()).length)) } }) }) }, add: function() { d = f[k]._c, b = f[k]._d, j = f[k]._e, d.add("counter search noresultsmsg") }, clickAnchor: function() {} }, f[k].defaults[h] = { add: !1, update: !1 }, f[k].configuration.classNames[h] = { counter: "Counter" }; var d, b, j, g }(jQuery);
! function(c) { var g = "mmenu",
        f = "dividers";
    c[g].addons[f] = { setup: function() { var i = this,
                d = this.opts[f]; if (this.conf[f], a = c[g].glbl, "boolean" == typeof d && (d = { add: d, fixed: d }), "object" != typeof d && (d = {}), d = this.opts[f] = c.extend(!0, {}, c[g].defaults[f], d), this.bind("init", function() { this.__refactorClass(c("li", this.$menu), this.conf.classNames[f].collapsed, "collapsed") }), d.add && this.bind("init", function(l) { switch (d.addTo) {
                        case "panels":
                            var k = l; break;
                        default:
                            var k = c(d.addTo, this.$menu).filter("." + h.panel) }
                    c("." + h.divider, k).remove(), k.find("." + h.listview).not("." + h.vertical).each(function() { var m = "";
                        i.__filterListItems(c(this).children()).each(function() { var n = c.trim(c(this).children("a, span").text()).slice(0, 1).toLowerCase();
                            n != m && n.length && (m = n, c('<li class="' + h.divider + '">' + n + "</li>").insertBefore(this)) }) }) }), d.collapse && this.bind("init", function(k) { c("." + h.divider, k).each(function() { var m = c(this),
                            l = m.nextUntil("." + h.divider, "." + h.collapsed);
                        l.length && (m.children("." + h.subopen).length || (m.wrapInner("<span />"), m.prepend('<a href="#" class="' + h.subopen + " " + h.fullsubopen + '" />'))) }) }), d.fixed) { var e = function(m) { m = m || this.$menu.children("." + h.current); var l = m.find("." + h.divider).not("." + h.hidden); if (l.length) { this.$menu.addClass(h.hasdividers); var o = m.scrollTop() || 0,
                            k = "";
                        m.is(":visible") && m.find("." + h.divider).not("." + h.hidden).each(function() { c(this).position().top + o < o + 1 && (k = c(this).text()) }), this.$fixeddivider.text(k) } else { this.$menu.removeClass(h.hasdividers) } };
                this.$fixeddivider = c('<ul class="' + h.listview + " " + h.fixeddivider + '"><li class="' + h.divider + '"></li></ul>').prependTo(this.$menu).children(), this.bind("openPanel", e), this.bind("init", function(k) { k.off(b.scroll + "-dividers " + b.touchmove + "-dividers").on(b.scroll + "-dividers " + b.touchmove + "-dividers", function() { e.call(i, c(this)) }) }) } }, add: function() { h = c[g]._c, j = c[g]._d, b = c[g]._e, h.add("collapsed uncollapsed fixeddivider hasdividers"), b.add("scroll") }, clickAnchor: function(k, l) { if (this.opts[f].collapse && l) { var m = k.parent(); if (m.is("." + h.divider)) { var d = m.nextUntil("." + h.divider, "." + h.collapsed); return m.toggleClass(h.opened), d[m.hasClass(h.opened) ? "addClass" : "removeClass"](h.uncollapsed), !0 } } return !1 } }, c[g].defaults[f] = { add: !1, addTo: "panels", fixed: !1, collapse: !1 }, c[g].configuration.classNames[f] = { collapsed: "Collapsed" }; var h, j, b, a }(jQuery);
! function(h) {
    function d(i, a, l) { return a > i && (i = a), i > l && (i = l), i } var k = "mmenu",
        j = "dragOpen";
    h[k].addons[j] = { setup: function() { if (this.opts.offCanvas) { var q = this,
                    C = this.opts[j],
                    e = this.conf[j]; if (g = h[k].glbl, "boolean" == typeof C && (C = { open: C }), "object" != typeof C && (C = {}), C = this.opts[j] = h.extend(!0, {}, h[k].defaults[j], C), C.open) { var x, t, z, G, r, o = {},
                        n = 0,
                        s = !1,
                        F = !1,
                        D = 0,
                        E = 0; switch (this.opts.offCanvas.position) {
                        case "left":
                        case "right":
                            o.events = "panleft panright", o.typeLower = "x", o.typeUpper = "X", F = "width"; break;
                        case "top":
                        case "bottom":
                            o.events = "panup pandown", o.typeLower = "y", o.typeUpper = "Y", F = "height" } switch (this.opts.offCanvas.position) {
                        case "right":
                        case "bottom":
                            o.negative = !0, G = function(a) { a >= g.$wndw[F]() - C.maxStartPos && (n = 1) }; break;
                        default:
                            o.negative = !1, G = function(a) { a <= C.maxStartPos && (n = 1) } } switch (this.opts.offCanvas.position) {
                        case "left":
                            o.open_dir = "right", o.close_dir = "left"; break;
                        case "right":
                            o.open_dir = "left", o.close_dir = "right"; break;
                        case "top":
                            o.open_dir = "down", o.close_dir = "up"; break;
                        case "bottom":
                            o.open_dir = "up", o.close_dir = "down" } switch (this.opts.offCanvas.zposition) {
                        case "front":
                            r = function() { return this.$menu }; break;
                        default:
                            r = function() { return h("." + f.slideout) } } var B = this.__valueOrFn(C.pageNode, this.$menu, g.$page); "string" == typeof B && (B = h(B)); var A = new Hammer(B[0], C.vendors.hammer);
                    A.on("panstart", function(a) { G(a.center[o.typeLower]), g.$slideOutNodes = r(), s = o.open_dir }).on(o.events + " panend", function(a) { n > 0 && a.preventDefault() }).on(o.events, function(a) { if (x = a["delta" + o.typeUpper], o.negative && (x = -x), x != D && (s = x >= D ? o.open_dir : o.close_dir), D = x, D > C.threshold && 1 == n) { if (g.$html.hasClass(f.opened)) { return }
                            n = 2, q._openSetup(), q.trigger("opening"), g.$html.addClass(f.dragging), E = d(g.$wndw[F]() * e[F].perc, e[F].min, e[F].max) }
                        2 == n && (t = d(D, 10, E) - ("front" == q.opts.offCanvas.zposition ? E : 0), o.negative && (t = -t), z = "translate" + o.typeUpper + "(" + t + "px )", g.$slideOutNodes.css({ "-webkit-transform": "-webkit-" + z, transform: z })) }).on("panend", function() { 2 == n && (g.$html.removeClass(f.dragging), g.$slideOutNodes.css("transform", ""), q[s == o.open_dir ? "_openFinish" : "close"]()), n = 0 }) } } }, add: function() { return "function" != typeof Hammer || Hammer.VERSION < 2 ? (h[k].addons[j].setup = function() {}, void 0) : (f = h[k]._c, c = h[k]._d, b = h[k]._e, f.add("dragging"), void 0) }, clickAnchor: function() {} }, h[k].defaults[j] = { open: !1, maxStartPos: 100, threshold: 50, vendors: { hammer: {} } }, h[k].configuration[j] = { width: { perc: 0.8, min: 140, max: 440 }, height: { perc: 0.8, min: 140, max: 880 } }; var f, c, b, g }(jQuery);
! function(d) { var f = "mmenu",
        j = "fixedElements";
    d[f].addons[j] = { setup: function() { if (this.opts.offCanvas) { this.opts[j], this.conf[j], h = d[f].glbl; var e = function(a) { var k = this.conf.classNames[j].fixed;
                    this.__refactorClass(a.find("." + k), k, "slideout").appendTo(h.$body) };
                e.call(this, h.$page), this.bind("setPage", e) } }, add: function() { b = d[f]._c, c = d[f]._d, g = d[f]._e, b.add("fixed") }, clickAnchor: function() {} }, d[f].configuration.classNames[j] = { fixed: "Fixed" }; var b, c, g, h }(jQuery);
! function(h) { var k = "mmenu",
        f = "iconPanels";
    h[k].addons[f] = { setup: function() { var e = this,
                d = this.opts[f]; if (this.conf[f], j = h[k].glbl, "boolean" == typeof d && (d = { add: d }), "number" == typeof d && (d = { add: !0, visible: d }), "object" != typeof d && (d = {}), d = this.opts[f] = h.extend(!0, {}, h[k].defaults[f], d), d.visible++, d.add) { this.$menu.addClass(g.iconpanel); for (var i = [], m = 0; m <= d.visible; m++) { i.push(g.iconpanel + "-" + m) }
                i = i.join(" "); var n = function(o) { var a = e.$menu.children("." + g.panel).removeClass(i),
                        l = a.filter("." + g.subopened);
                    l.removeClass(g.hidden).add(o).slice(-d.visible).each(function(p) { h(this).addClass(g.iconpanel + "-" + p) }) };
                this.bind("openPanel", n), this.bind("init", function(a) { n.call(e, e.$menu.children("." + g.current)), d.hideNavbars && a.removeClass(g.hasnavbar), a.each(function() { h(this).children("." + g.subblocker).length || h(this).prepend('<a href="#' + h(this).closest("." + g.panel).attr("id") + '" class="' + g.subblocker + '" />') }) }) } }, add: function() { g = h[k]._c, c = h[k]._d, b = h[k]._e, g.add("iconpanel subblocker") }, clickAnchor: function() {} }, h[k].defaults[f] = { add: !1, visible: 3, hideNavbars: !1 }; var g, c, b, j }(jQuery);
! function(j) { var b = "mmenu",
        h = "navbars";
    j[b].addons[h] = { setup: function() { var e = this,
                a = this.opts[h],
                m = this.conf[h]; if (f = j[b].glbl, "undefined" != typeof a) { a instanceof Array || (a = [a]); var l = {};
                j.each(a, function(z) { var n = a[z]; "boolean" == typeof n && n && (n = {}), "object" != typeof n && (n = {}), "undefined" == typeof n.content && (n.content = ["prev", "title"]), n.content instanceof Array || (n.content = [n.content]), n = j.extend(!0, {}, e.opts.navbar, n); var q = n.position,
                        r = n.height; "number" != typeof r && (r = 1), r = Math.min(4, Math.max(1, r)), "bottom" != q && (q = "top"), l[q] || (l[q] = 0), l[q]++; var t = j("<div />").addClass(d.navbar + " " + d.navbar + "-" + q + " " + d.navbar + "-" + q + "-" + l[q] + " " + d.navbar + "-size-" + r);
                    l[q] += r - 1; for (var x = 0, y = n.content.length; y > x; x++) { var i = j[b].addons[h][n.content[x]] || !1;
                        i ? i.call(e, t, n, m) : (i = n.content[x], i instanceof j || (i = j(n.content[x])), i.each(function() { t.append(j(this)) })) } var w = Math.ceil(t.children().not("." + d.btn).length / r);
                    w > 1 && t.addClass(d.navbar + "-content-" + w), t.children("." + d.btn).length && t.addClass(d.hasbtns), t.prependTo(e.$menu) }); for (var k in l) { e.$menu.addClass(d.hasnavbar + "-" + k + "-" + l[k]) } } }, add: function() { d = j[b]._c, g = j[b]._d, c = j[b]._e, d.add("close hasbtns") }, clickAnchor: function() {} }, j[b].configuration[h] = { breadcrumbSeparator: "/" }, j[b].configuration.classNames[h] = { panelTitle: "Title", panelNext: "Next", panelPrev: "Prev" }; var d, g, c, f }(jQuery),
function(f) { var b = "mmenu",
        d = "navbars",
        c = "breadcrumbs";
    f[b].addons[d][c] = function(k, g, j) { var a = f[b]._c,
            h = f[b]._d;
        a.add("breadcrumbs separator"), k.append('<span class="' + a.breadcrumbs + '"></span>'), this.bind("init", function(e) { e.removeClass(a.hasnavbar).each(function() { for (var i = [], n = f(this), m = f('<span class="' + a.breadcrumbs + '"></span>'), r = f(this).children().first(), q = !0; r && r.length;) { r.is("." + a.panel) || (r = r.closest("." + a.panel)); var p = r.children("." + a.navbar).children("." + a.title).text();
                    i.unshift(q ? "<span>" + p + "</span>" : '<a href="#' + r.attr("id") + '">' + p + "</a>"), q = !1, r = r.data(h.parent) }
                m.append(i.join('<span class="' + a.separator + '">' + j.breadcrumbSeparator + "</span>")).appendTo(n.children("." + a.navbar)) }) }); var l = function() { var m = this.$menu.children("." + a.current),
                e = k.find("." + a.breadcrumbs),
                i = m.children("." + a.navbar).children("." + a.breadcrumbs);
            e.html(i.html()) };
        this.bind("openPanel", l), this.bind("init", l) } }(jQuery),
function(f) { var b = "mmenu",
        d = "navbars",
        c = "close";
    f[b].addons[d][c] = function(j) { var g = f[b]._c,
            h = f[b].glbl;
        j.append('<a class="' + g.close + " " + g.btn + '" href="#"></a>'); var a = function(e) { j.find("." + g.close).attr("href", "#" + e.attr("id")) };
        a.call(this, h.$page), this.bind("setPage", a) } }(jQuery),
function(f) { var b = "mmenu",
        d = "navbars",
        c = "next";
    f[b].addons[d][c] = function(e) { var g = f[b]._c;
        e.append('<a class="' + g.next + " " + g.btn + '" href="#"></a>'); var a = function(m) { m = m || this.$menu.children("." + g.current); var h = e.find("." + g.next),
                j = m.find("." + this.conf.classNames[d].panelNext),
                k = j.attr("href"),
                l = j.html();
            h[k ? "attr" : "removeAttr"]("href", k), h[k || l ? "removeClass" : "addClass"](g.hidden), h.html(l) };
        this.bind("openPanel", a), this.bind("init", function() { a.call(this) }) } }(jQuery),
function(f) { var b = "mmenu",
        d = "navbars",
        c = "prev";
    f[b].addons[d][c] = function(e) { var g = f[b]._c;
        e.append('<a class="' + g.prev + " " + g.btn + '" href="#"></a>'), this.bind("init", function(h) { h.removeClass(g.hasnavbar) }); var a = function() { var m = this.$menu.children("." + g.current),
                h = e.find("." + g.prev),
                j = m.find("." + this.conf.classNames[d].panelPrev);
            j.length || (j = m.children("." + g.navbar).children("." + g.prev)); var k = j.attr("href"),
                l = j.html();
            h[k ? "attr" : "removeAttr"]("href", k), h[k || l ? "removeClass" : "addClass"](g.hidden), h.html(l) };
        this.bind("openPanel", a), this.bind("init", a) } }(jQuery),
function(f) { var b = "mmenu",
        d = "navbars",
        c = "searchfield";
    f[b].addons[d][c] = function(h) { var a = f[b]._c,
            g = f('<div class="' + a.search + '" />').appendTo(h); "object" != typeof this.opts.searchfield && (this.opts.searchfield = {}), this.opts.searchfield.add = !0, this.opts.searchfield.addTo = g } }(jQuery),
function(f) { var b = "mmenu",
        d = "navbars",
        c = "title";
    f[b].addons[d][c] = function(e, h) { var a = f[b]._c;
        e.append('<a class="' + a.title + '"></a>'); var g = function(m) { m = m || this.$menu.children("." + a.current); var i = e.find("." + a.title),
                j = m.find("." + this.conf.classNames[d].panelTitle);
            j.length || (j = m.children("." + a.navbar).children("." + a.title)); var l = j.attr("href"),
                k = j.html() || h.title;
            i[l ? "attr" : "removeAttr"]("href", l), i[l || k ? "removeClass" : "addClass"](a.hidden), i.html(k) };
        this.bind("openPanel", g), this.bind("init", function() { g.call(this) }) } }(jQuery);
! function(j) {
    function g(a) { switch (a) {
            case 9:
            case 16:
            case 17:
            case 18:
            case 37:
            case 38:
            case 39:
            case 40:
                return !0 } return !1 } var k = "mmenu",
        c = "searchfield";
    j[k].addons[c] = { setup: function() { var e = this,
                a = this.opts[c],
                i = this.conf[c];
            h = j[k].glbl, "boolean" == typeof a && (a = { add: a }), "object" != typeof a && (a = {}), a = this.opts[c] = j.extend(!0, {}, j[k].defaults[c], a), this.bind("close", function() { this.$menu.find("." + f.search).find("input").blur() }), this.bind("init", function(m) { if (a.add) { switch (a.addTo) {
                        case "panels":
                            var l = m; break;
                        default:
                            var l = j(a.addTo, this.$menu) }
                    l.each(function() { var t = j(this); if (!t.is("." + f.panel) || !t.is("." + f.vertical)) { if (!t.children("." + f.search).length) { var v = i.form ? "form" : "div",
                                    p = j("<" + v + ' class="' + f.search + '" />'); if (i.form && "object" == typeof i.form) { for (var o in i.form) { p.attr(o, i.form[o]) } }
                                p.append('<input placeholder="' + a.placeholder + '" type="text" autocomplete="off" />'), t.hasClass(f.search) ? t.replaceWith(p) : t.prepend(p).addClass(f.hassearch) } if (a.noResults) { var q = t.closest("." + f.panel).length; if (q || (t = e.$menu.children("." + f.panel).first()), !t.children("." + f.noresultsmsg).length) { var u = t.children("." + f.listview).first();
                                    j('<div class="' + f.noresultsmsg + '" />').append(a.noResults)[u.length ? "insertAfter" : "prependTo"](u.length ? u : t) } } } }), a.search && j("." + f.search, this.$menu).each(function() { var s = j(this),
                            A = s.closest("." + f.panel).length; if (A) { var o = s.closest("." + f.panel),
                                y = o } else { var o = j("." + f.panel, e.$menu),
                                y = e.$menu } var w = s.children("input"),
                            C = e.__findAddBack(o, "." + f.listview).children("li"),
                            x = C.filter("." + f.divider),
                            q = e.__filterListItems(C),
                            B = "> a",
                            t = B + ", > span",
                            z = function() { var n = w.val().toLowerCase();
                                o.scrollTop(0), q.add(x).addClass(f.hidden).find("." + f.fullsubopensearch).removeClass(f.fullsubopen).removeClass(f.fullsubopensearch), q.each(function() { var r = j(this),
                                        p = B;
                                    (a.showTextItems || a.showSubPanels && r.find("." + f.next)) && (p = t), j(p, r).text().toLowerCase().indexOf(n) > -1 && r.add(r.prevAll("." + f.divider).first()).removeClass(f.hidden) }), a.showSubPanels && o.each(function() { var p = j(this);
                                    e.__filterListItems(p.find("." + f.listview).children()).each(function() { var r = j(this),
                                            u = r.data(b.sub);
                                        r.removeClass(f.nosubresults), u && u.find("." + f.listview).children().removeClass(f.hidden) }) }), j(o.get().reverse()).each(function(r) { var u = j(this),
                                        p = u.data(b.parent);
                                    p && (e.__filterListItems(u.find("." + f.listview).children()).length ? (p.hasClass(f.hidden) && p.children("." + f.next).not("." + f.fullsubopen).addClass(f.fullsubopen).addClass(f.fullsubopensearch), p.removeClass(f.hidden).removeClass(f.nosubresults).prevAll("." + f.divider).first().removeClass(f.hidden)) : A || (u.hasClass(f.opened) && setTimeout(function() { e.openPanel(p.closest("." + f.panel)) }, 1.5 * (r + 1) * e.conf.openingInterval), p.addClass(f.nosubresults))) }), y[q.not("." + f.hidden).length ? "removeClass" : "addClass"](f.noresults), this.update() };
                        w.off(d.keyup + "-searchfield " + d.change + "-searchfield").on(d.keyup + "-searchfield", function(n) { g(n.keyCode) || z.call(e) }).on(d.change + "-searchfield", function() { z.call(e) }) }) } }) }, add: function() { f = j[k]._c, b = j[k]._d, d = j[k]._e, f.add("search hassearch noresultsmsg noresults nosubresults fullsubopensearch"), d.add("change keyup") }, clickAnchor: function() {} }, j[k].defaults[c] = { add: !1, addTo: "panels", search: !0, placeholder: "Search", noResults: "No results found.", showTextItems: !1, showSubPanels: !0 }, j[k].configuration[c] = { form: !1 }; var f, b, d, h }(jQuery);
! function(h) { var b = "mmenu",
        g = "sectionIndexer";
    h[b].addons[g] = { setup: function() { var a = this,
                e = this.opts[g];
            this.conf[g], f = h[b].glbl, "boolean" == typeof e && (e = { add: e }), "object" != typeof e && (e = {}), e = this.opts[g] = h.extend(!0, {}, h[b].defaults[g], e), this.bind("init", function(i) { if (e.add) { switch (e.addTo) {
                        case "panels":
                            var l = i; break;
                        default:
                            var l = h(e.addTo, this.$menu).filter("." + j.panel) }
                    l.find("." + j.divider).closest("." + j.panel).addClass(j.hasindexer) } if (!this.$indexer && this.$menu.children("." + j.hasindexer).length) { this.$indexer = h('<div class="' + j.indexer + '" />').prependTo(this.$menu).append('<a href="#a">a</a><a href="#b">b</a><a href="#c">c</a><a href="#d">d</a><a href="#e">e</a><a href="#f">f</a><a href="#g">g</a><a href="#h">h</a><a href="#i">i</a><a href="#j">j</a><a href="#k">k</a><a href="#l">l</a><a href="#m">m</a><a href="#n">n</a><a href="#o">o</a><a href="#p">p</a><a href="#q">q</a><a href="#r">r</a><a href="#s">s</a><a href="#t">t</a><a href="#u">u</a><a href="#v">v</a><a href="#w">w</a><a href="#x">x</a><a href="#y">y</a><a href="#z">z</a>'), this.$indexer.children().on(c.mouseover + "-sectionindexer " + j.touchstart + "-sectionindexer", function() { var m = h(this).attr("href").slice(1),
                            q = a.$menu.children("." + j.current),
                            n = q.find("." + j.listview),
                            p = !1,
                            u = q.scrollTop(),
                            o = n.position().top + parseInt(n.css("margin-top"), 10) + parseInt(n.css("padding-top"), 10) + u;
                        q.scrollTop(0), n.children("." + j.divider).not("." + j.hidden).each(function() { p === !1 && m == h(this).text().slice(0, 1).toLowerCase() && (p = h(this).position().top + o) }), q.scrollTop(p !== !1 ? p : u) }); var k = function(m) { a.$menu[(m.hasClass(j.hasindexer) ? "add" : "remove") + "Class"](j.hasindexer) };
                    this.bind("openPanel", k), k.call(this, this.$menu.children("." + j.current)) } }) }, add: function() { j = h[b]._c, d = h[b]._d, c = h[b]._e, j.add("indexer hasindexer"), c.add("mouseover touchstart") }, clickAnchor: function(a) { return a.parent().is("." + j.indexer) ? !0 : void 0 } }, h[b].defaults[g] = { add: !1, addTo: "panels" }; var j, d, c, f }(jQuery);
! function(d) { var g = "mmenu",
        j = "toggles";
    d[g].addons[j] = { setup: function() { var c = this;
            this.opts[j], this.conf[j], a = d[g].glbl, this.bind("init", function(i) { this.__refactorClass(d("input", i), this.conf.classNames[j].toggle, "toggle"), this.__refactorClass(d("input", i), this.conf.classNames[j].check, "check"), d("input." + f.toggle + ", input." + f.check, i).each(function() { var n = d(this),
                        o = n.closest("li"),
                        m = n.hasClass(f.toggle) ? "toggle" : "check",
                        k = n.attr("id") || c.__getUniqueId();
                    o.children('label[for="' + k + '"]').length || (n.attr("id", k), o.prepend(n), d('<label for="' + k + '" class="' + f[m] + '"></label>').insertBefore(o.children("a, span").last())) }) }) }, add: function() { f = d[g]._c, h = d[g]._d, b = d[g]._e, f.add("toggle check") }, clickAnchor: function() {} }, d[g].configuration.classNames[j] = { toggle: "Toggle", check: "Check" }; var f, h, b, a }(jQuery);