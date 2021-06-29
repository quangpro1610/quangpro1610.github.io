// This is just a sample script. Paste your real code (javascript or HTML) here.
$(document).ready(function() {
    setInterval(function() {
        $("#mycontent:visible").length || (window.location.href = "https://www.muahanggiamgia.online")
    }, 3e3)
}), window.onload = function() {}, $(function() {
    function t(t, e) {
        for (var a = 0; a < t[e].link.length; a++)
            if ("alternate" == t[e].link[a].rel) {
                var s = t[e].link[a].href;
                break
            }
        return s
    }

    function e(t, e, a) {
        return '<a href="' + a + '">' + t[e].title.$t + "</a>"
    }

    function a(t, e) {
        var a = t[e].published.$t,
            s = a.substring(0, 4),
            i = a.substring(5, 7),
            n = a.substring(8, 10);
        return '<span class="post-date">' + (monthFormat[parseInt(i, 10) - 1] + " " + n + ", " + s) + "</span>"
    }

    function s(t, e) {
        var a = t[e].title.$t,
            s = t[e].content.$t,
            i = $("<div>").html(s);
        if ("media$thumbnail" in t[e]) {
            var n = t[e].media$thumbnail.url,
                o = n.replace("/s72-c", "/w680");
            n.match("img.youtube.com") && (o = n.replace("/default.", "/hqdefault."))
        } else o = s.indexOf("<img") > -1 ? i.find("img:first").attr("src") : noThumbnail;
        return '<img class="post-thumb" alt="' + a + '" src="' + o + '"/>'
    }

    function i(t, e) {
        if (null != t[e].category) var a = '<span class="post-tag">' + t[e].category[0].term + "</span>";
        else a = "";
        return a
    }

    function n(n, o, l, r) {
        if (o.match("mega-menu") || o.match("hot-posts") || o.match("post-list") || o.match("related")) {
            var c = "";
            var affAuthor = "https://go.isclix.com/deep_link/4348613481450415432?url=";
            if ("recent" == r) c = "/feeds/posts/default?alt=json-in-script&max-results=" + l;
            else if ("random" == r) c = "/feeds/posts/default?max-results=" + l + "&start-index=" + (Math.floor(Math.random() * l) + 1) + "&alt=json-in-script";
            else c = "/feeds/posts/default/-/" + r + "?alt=json-in-script&max-results=" + l;
            if ("lazada" == r) {
                o.match("hot-posts") && n.html('<div class="hot-loader"/>').parent().addClass("show-hot").parent().parent().addClass("show-hot-wrap");

                var jsonURL = "https://json.tonghopgiamgia.com/lzd_banners.json";
                $.get(jsonURL, function(respone, status) {
                    var html = '<ul class="hot-posts">';
                    var m = respone;
                    if (null != m) {
                        for (var e = 0, t = m; e < t.length; e++) {
                            html += '<li class="hot-item item-' + e + '"><div class="hot-item-inner"><a class="post-image-link" href="' + affAuthor + t[e].url + '" target="_blank"><img class="post-thumb" alt="' + t[e].title + '" src="' + t[e].src + '"></a><div class="post-info"><h2 class="post-title"><a href="' + affAuthor + t[e].url + '" target="_blank">' + t[e].title + '</a></h2><div class="post-meta"><span class="post-tag">Khuyến mãi Lazada</span><i>-</i><span class="post-date">Hạn KM: ' + t[e].datex + '</span></div></div></div></li>';
                        }
                    }
                    html += '</ul>';
                    n.html(html)
                });
            } else if ("tiki" == r) {
                o.match("hot-posts") && n.html('<div class="hot-loader"/>').parent().addClass("show-hot").parent().parent().addClass("show-hot-wrap");

                var jsonURL = "https://json.tonghopgiamgia.com/tk_banners.json";
                $.get(jsonURL, function(respone, status) {
                    var html = '<ul class="hot-posts">';
                    var m = respone;
                    if (null != m) {
                        for (var e = 0, t = m; e < t.length; e++) {
                            html += '<li class="hot-item item-' + e + '"><div class="hot-item-inner"><a class="post-image-link" href="' + affAuthor + t[e].url + '" target="_blank"><img class="post-thumb" alt="' + t[e].title + '" src="' + t[e].src + '"></a><div class="post-info"><h2 class="post-title"><a href="' + affAuthor + t[e].url + '" target="_blank">' + t[e].title + '</a></h2><div class="post-meta"><span class="post-tag">Khuyến mãi Tiki</span><i>-</i><span class="post-date">Hạn KM: ' + t[e].datex + '</span></div></div></div></li>';
                        }
                    }
                    html += '</ul>';
                    n.html(html)
                });
            } else if ("shopee" == r) {
                o.match("hot-posts") && n.html('<div class="hot-loader"/>').parent().addClass("show-hot").parent().parent().addClass("show-hot-wrap");

                var jsonURL = "https://json.tonghopgiamgia.com/sp_banners.json";
                $.get(jsonURL, function(respone, status) {
                    var html = '<ul class="hot-posts">';
                    var m = respone;
                    if (null != m) {
                        for (var e = 0, t = m; e < t.length; e++) {
                            html += '<li class="hot-item item-' + e + '"><div class="hot-item-inner"><a class="post-image-link" href="' + affAuthor + t[e].url + '" target="_blank"><img class="post-thumb" alt="' + t[e].title + '" src="' + t[e].src + '"></a><div class="post-info"><h2 class="post-title"><a href="' + affAuthor + t[e].url + '" target="_blank">' + t[e].title + '</a></h2><div class="post-meta"><span class="post-tag">Khuyến mãi Shopee</span><i>-</i><span class="post-date">Hạn KM: ' + t[e].datex + '</span></div></div></div></li>';
                        }
                    }
                    html += '</ul>';
                    n.html(html)
                });
            } else {
                $.ajax({
                    url: c,
                    type: "get",
                    dataType: "jsonp",
                    beforeSend: function() {
                        o.match("hot-posts") && n.html('<div class="hot-loader"/>').parent().addClass("show-hot").parent().parent().addClass("show-hot-wrap")
                    },
                    success: function(l) {
                        if (o.match("mega-menu")) var c = '<ul class="mega-menu-inner">';
                        else if (o.match("hot-posts")) c = '<ul class="hot-posts">';
                        else if (o.match("post-list")) c = '<ul class="custom-widget">';
                        else if (o.match("related")) c = '<ul class="related-posts">';
                        var m = l.feed.entry;
                        if (null != m) {
                            for (var d = 0, p = m; d < p.length; d++) {
                                var h = t(p, d),
                                    u = e(p, d, h),
                                    f = s(p, d),
                                    g = i(p, d),
                                    v = a(p, d),
                                    b = "";
                                o.match("mega-menu") ? b += '<div class="mega-item item-' + d + '"><div class="mega-content"><div class="post-image-wrap"><a class="post-image-link" href="' + h + '">' + f + '</a></div><h2 class="post-title">' + u + '</h2><div class="post-meta">' + g + "<i>-</i>" + v + "</div></div></div>" : o.match("hot-posts") ? b += '<li class="hot-item item-' + d + '"><div class="hot-item-inner"><a class="post-image-link" href="' + h + '">' + f + '</a><div class="post-info"><h2 class="post-title">' + u + '</h2><div class="post-meta">' + g + "<i>-</i>" + v + "</div></div></div></li>" : o.match("post-list") ? b += '<li class="item-' + d + '"><a class="post-image-link" href="' + h + '">' + f + '</a><div class="post-info"><h2 class="post-title">' + u + "</h2></div></div></li>" : o.match("related") && (b += '<li class="related-item item-' + d + '"><div class="post-image-wrap"><a class="post-image-link" href="' + h + '">' + f + '</a></div><h2 class="post-title">' + u + '</h2><div class="post-meta">' + g + "<i>-</i>" + v + "</div></li>"), c += b
                            }
                            c += "</ul>"
                        } else c = '<ul class="no-posts">Error: No Posts Found <i class="fa fa-frown"/></ul>';
                        o.match("mega-menu") ? (n.addClass("has-sub mega-menu").append(c), n.find("a:first").attr("href", function(t, e) {
                            return e = "recent" == r || "random" == r ? e.replace(e, "/search/?&max-results=" + postPerPage) : e.replace(e, "/search/label/" + r + "?&max-results=" + postPerPage)
                        })) : o.match("hot-posts") ? n.html(c).parent().addClass("show-hot") : n.html(c)
                    }
                })
            }
        }
    }
    $("#main-menu").each(function() {
        for (var t = $(this).find(".LinkList ul > li").children("a"), e = t.length, a = 0; a < e; a++) {
            var s = t.eq(a),
                i = s.text();
            if ("_" !== i.charAt(0))
                if ("_" === t.eq(a + 1).text().charAt(0)) {
                    var n = s.parent();
                    n.append('<ul class="sub-menu m-sub"/>')
                }
                "_" === i.charAt(0) && (s.text(i.replace("_", "")), s.parent().appendTo(n.children(".sub-menu")))
        }
        for (a = 0; a < e; a++) {
            var o = t.eq(a),
                l = o.text();
            if ("_" !== l.charAt(0))
                if ("_" === t.eq(a + 1).text().charAt(0)) {
                    var r = o.parent();
                    r.append('<ul class="sub-menu2 m-sub"/>')
                }
                "_" === l.charAt(0) && (o.text(l.replace("_", "")), o.parent().appendTo(r.children(".sub-menu2")))
        }
        $("#main-menu ul li ul").parent("li").addClass("has-sub"), $("#main-menu .widget").addClass("show-menu")
    }), $("#main-menu-nav").clone().appendTo(".mobile-menu"), $(".mobile-menu .has-sub").append('<div class="submenu-toggle"/>'), $(".mobile-menu ul > li a").each(function() {
        var t = $(this),
            e = t.attr("href").trim(),
            a = e.toLowerCase(),
            s = e.split("/")[0];
        a.match("mega-menu") && t.attr("href", "/search/label/" + s + "?&max-results=" + postPerPage)
    }), $(".slide-menu-toggle").on("click", function() {
        $("body").toggleClass("nav-active")
    }), $(".mobile-menu ul li .submenu-toggle").on("click", function(t) {
        $(this).parent().hasClass("has-sub") && (t.preventDefault(), $(this).parent().hasClass("show") ? $(this).parent().removeClass("show").find("> .m-sub").slideToggle(170) : $(this).parent().addClass("show").children(".m-sub").slideToggle(170))
    }), $(".Label a, a.b-label").attr("href", function(t, e) {
        return e.replace(e, e + "?&max-results=" + postPerPage)
    }), $(".avatar-image-container img").attr("src", function(t, e) {
        return e = (e = e.replace("/s35-c/", "/s45-c/")).replace("//img1.blogblog.com/img/blank.gif", "//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png")
    }), $(".author-description a").each(function() {
        $(this).attr("target", "_blank")
    }), $(".post-nav").each(function() {
        var t = $("a.prev-post-link").attr("href"),
            e = $("a.next-post-link").attr("href");
        $.ajax({
            url: t,
            type: "get",
            success: function(t) {
                var e = $(t).find(".blog-post h1.post-title").text();
                $(".post-prev a .post-nav-inner p").text(e)
            }
        }), $.ajax({
            url: e,
            type: "get",
            success: function(t) {
                var e = $(t).find(".blog-post h1.post-title").text();
                $(".post-next a .post-nav-inner p").text(e)
            }
        })
    }), $(".post-body strike").each(function() {
        var t = $(this),
            e = t.text();
        e.match("left-sidebar") && t.replaceWith("<style>.item #main-wrapper{float:right}.item #sidebar-wrapper{float:left}</style>"), e.match("right-sidebar") && t.replaceWith("<style>.item #main-wrapper{float:left}.item #sidebar-wrapper{float:right}</style>"), e.match("full-width") && t.replaceWith("<style>.item #main-wrapper{width:100%}.item #sidebar-wrapper{display:none}</style>")
    }), $(".post-body strike").each(function() {
        var t = $(this),
            e = t.text().trim(),
            a = e.split("/"),
            s = a[0].replace("[getcode]", ""),
            i = a[1];
        e.match("getcode") && (t.replaceWith('<div class="get-code"><span class="code-show">' + i + '</span><span class="code-code">##########</span></div>'), $(".get-code").each(function() {
            var t = $(this);
            t.find(".code-show").on("click", function() {
                t.find(".code-code").text(s)
            })
        }))
    }), $(".post-body a").each(function() {
        var t = $(this),
            e = t.text(),
            a = e.split("/")[0];
        e.match("download-btn") && t.text(a).addClass("post-btn")
    }), $("#main-wrapper, #sidebar-wrapper").each(function() {
        1 == fixedSidebar && $(this).theiaStickySidebar({
            additionalMarginTop: 30,
            additionalMarginBottom: 30
        })
    }), $(".back-top").each(function() {
        var t = $(this);
        $(window).on("scroll", function() {
            $(this).scrollTop() >= 100 ? t.fadeIn(250) : t.fadeOut(250)
        }), t.click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 500)
        })
    }), $("#main-menu #main-menu-nav li").each(function() {
        var t = $(this),
            e = t.find("a").attr("href").trim();
        n(t, e.toLowerCase(), 4, e.split("/")[0])
    }), $("#hot-section .widget-content").each(function() {
        var t = $(this),
            e = t.text().trim();
        n(t, e.toLowerCase(), 4, e.split("/")[0])
    }), $(".common-widget .widget-content").each(function() {
        var t = $(this),
            e = t.text().trim(),
            a = e.toLowerCase(),
            s = e.split("/");
        n(t, a, s[0], s[1])
    }), $(".related-ready").each(function() {
        var t = $(this),
            e = t.find(".related-tag").data("label");
        n(t, "related", 3, e)
    }), $(".blog-post-comments").each(function() {
        var t, e = commentsSystem,
            a = (disqus_blogger_current_url, '<div class="fb-comments" data-width="100%" data-href="' + $(location).attr("href") + '" data-numposts="5"></div>'),
            s = "comments-system-" + e;
        "blogger" == e ? $(this).addClass(s).show() : "disqus" == e ? ((t = document.createElement("script")).type = "text/javascript", t.async = !0, t.src = "//" + disqusShortname + ".disqus.com/embed.js", (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(t), $("#comments, #gpluscomments").remove(), $(this).append('<div id="disqus_thread"/>').addClass(s).show()) : "facebook" == e ? ($("#comments, #gpluscomments").remove(), $(this).append(a).addClass(s).show()) : "hide" == e ? $(this).hide() : $(this).addClass("comments-system-default").show()
    })
});
