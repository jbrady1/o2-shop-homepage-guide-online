var o2=o2||{};o2.NavPrimary=function(){"use strict";var f,h,i,k,s,t,a={},b=1100,c=0,d=5,e=2,g=jQuery(window),j=0,l=0,m=!0,n=jQuery("#header-consumer"),o=jQuery(".nav-primary"),p=n.find(".mobile-nav-toggle"),q=n.find(".nav-consumer"),r=q.children("ul"),u=100,v="ontouchstart"in document.documentElement?"click":"mouseenter",w=function(){if(q.on("click",".show-more",F),s){var a=s.find(".show-more");a.on("mouseenter focusin",G),a.on("mouseleave",H),a.on("focusout","a",I)}f?(h&&(h.on("click","span",tb),o.on("click","a",tb)),p.on("click",jb),q.on("click","a",kb)):(s&&s.on("click",".show-more>a",J),Modernizr.touch||(v="ontouchstart"in document.documentElement?"mouseover":"mouseenter"),q.on(v,"li",O),Modernizr.touch?(jQuery("#o2-page-wrapper").on("click",U),q.click(function(a){a.stopPropagation()})):q.on("mouseleave",U)),jQuery(window).on("unload",vb),jQuery(window).on("pagehide",function(){U(),p.hasClass("is-visible")&&p.trigger("click")})},x=function(){q.off("click",".show-more",F),f?(s&&s.off("click",".show-more>a",J),h&&(h.off("click","span",tb),o.off("click","a",tb)),q.off(v,"li",O),jQuery("#o2-page-wrapper").off("click",U),q.off("mouseleave",U)):(p.off("click",jb),q.off("click","a",kb)),jQuery(window).off("unload",vb),jQuery(window).off("pagehide")},y=function(){q.find("li").has("ul").each(function(){var a=jQuery(this);f?jQuery(this).addClass("has-submenu"):a.parents("ul").length<3&&jQuery(this).addClass("has-submenu")}),f?q.addClass("is-mobile"):q.removeClass("is-mobile")},z=function(){q.removeClass("is-mobile"),q.find(".has-submenu").removeClass("has-submenu"),p.removeClass("is-visible")},A=function(){q.find("ul").removeAttr("style"),n.find("input").removeAttr("style")},B=function(){f?q.find("ul").css({width:b,left:0}):q.find(".has-submenu").children("ul").css({})},C=function(){f?q.find(".has-submenu").each(function(){var a=jQuery(this).closest("ul").siblings("a"),b=a.has("dt").length>0?jQuery.trim(a.find("dt").text()):a.html();b||(b="Main Menu"),jQuery(this).children("ul").prepend('<li class="js-injection"><a href="#" class="back">Back to '+b+"</a></li>")}):W()},D=function(){q.find(".js-injection").remove(),n.find("#nav-secondary").remove()},E=function(){q.find(".view-limited").hide(),q.find(".show-more").closest("li").show()},F=function(a){a.preventDefault(),a.stopPropagation();var b=jQuery(a.currentTarget),c=b.closest("ul");c.show(),c.children("li").show(),b.parent().hide()},G=function(a){a.preventDefault(),a.stopPropagation(),jQuery(".overflow-menu").css({"margin-left":0});var b=jQuery(".overflow-menu"),c=jQuery(a.currentTarget),d=c.children("ul"),e=b.find("li a");e.attr("tabIndex",0),c.addClass("is-hover"),d.show();var f=b.innerWidth(),g=jQuery("#nav-secondary").find(".show-more").innerWidth()-2;b.css({"margin-left":-f+g+"px"})},H=function(a){a.preventDefault(),a.stopPropagation();var b=jQuery(a.currentTarget),c=b.children("ul");b.removeClass("is-hover"),c.hide()},I=function(){window.setTimeout(function(){var a=$(document.activeElement).parents(),b=s.find(".show-more");a.is(".show-more")||b.trigger("mouseleave")},50)},J=function(a){a.preventDefault()},K=function(){var a=document.location.href,b=q.find('[href="'+a+'"]');if(-1===a.indexOf("errors/404")&&b.size()>0){var c=b.last();if(c.size()>0){var d=c.closest("li"),e=d.closest("ul");for(d.addClass("is-active");d.size()>0;)e=d.closest("ul"),d=e.closest("li"),d.addClass("is-active")}}},L=function(){q.find("ul").css({left:0}),r.find("ul").hide(),c=0},M=function(){q.find('.header-tool-search input[type="text"]').val("")},N=function(a){var b=V(a);return b.parents(".has-submenu").length},O=function(a){var b=$(this),c=b.children("a").next("ul");"none"===c.css("display")&&a.preventDefault(),b.outerWidth()>c.outerWidth()&&c.css("min-width",b.outerWidth()-2),clearTimeout(t),l=0,j+=1,$(this).parent().parent().hasClass("nav-consumer")?(l=0,1===j&&(q.find("li").removeClass("is-hover"),q.find(".has-submenu").children("ul").hide()),j=0):l=250,Modernizr.touch?(S(b),P(b)):t=setTimeout(function(){S(b),P(b)},l)},P=function(a){var b=a.children("ul");a.addClass("is-hover"),b.size()>0&&a.hasClass("has-submenu")&&(b=T(b),b.hasClass("reverse-menu")&&R(b),b.show(),Q(b)&&R(b))},Q=function(a){var b=$(window).scrollTop(),c=a.offset().top,d=a.outerHeight(),e=c+d,f=c-(d-d/a.find("li").length),g=b+$(window).height();return f>b&&e>g},R=function(a){a.toggleClass("reverse-menu").append(a.children("li").get().reverse())},S=function(a){a.siblings(".is-hover").removeClass("is-hover").children("ul").hide()},T=function(a){a.removeClass("display-opposite"),a.css("visibility","hidden").show();var c=a.outerWidth(),d=a.offset().left;return a.css("visibility","").hide(),a.removeClass("display-opposite"),d+c>b&&a.addClass("display-opposite"),a},U=function(){clearTimeout(t),t=setTimeout(function(){q.find("li").removeClass("is-hover"),q.find(".has-submenu").children("ul").hide()},l)},V=function(a){var b,c=a.indexOf("#");return b=q.find('a[href="'+a+'"]').first(),c>0&&0===b.size()&&(b=q.find('a[href="'+a.substr(0,c)+'"]').first()),b},W=function(){var c,d,a=document.location.href,b=V(a),e="main-element",f="has-shadow",g=N(a);if(g>0&&3>=g&&-1===a.indexOf("errors/404")){0===n.find("#nav-secondary").length&&o.after('<nav id="nav-secondary" class="js-injection"><div class="grid-inner"><ul></ul></div></nav>'),s=n.find("#nav-secondary").find("ul:first"),s.closest("nav").show(),s=n.find("#nav-secondary").find("ul:first").after('<ul class="header-basket-icon"><li><a href="'+linksContext+'basket/"><span>Basket</span></a></li></ul>'),u=$(".header-basket-icon").outerWidth()+3,c=b.siblings("ul").children("li").children("a");var h,i;3===g||0===c.size()?(i=b.closest("ul").find("a").first(),h=hb(i.attr("href"),i.text(),e),gb(h),d=b.closest("ul").children("li").children("a"),d.each(function(b){if(0!==b){var c=jQuery(this).attr("href")===a?"is-active":"",d=1===b?" "+f:"",e=hb(jQuery(this).attr("href"),jQuery(this).text(),c+d);gb(e)}})):(i=1===g?b.siblings("ul").find("a:first"):b.parent().closest("li").find("a:first"),h=hb(i.attr("href"),i.text(),e),gb(h),c.each(function(a){if(0!==a){var b=1===a?" "+f:"";h=hb(jQuery(this).attr("href"),jQuery(this).text(),b),gb(h)}})),X()}},X=function(){var a=s.children("li");if(a.size()>d){s.append('<li class="js-injection show-more"><a class="" href="#">More</a><span></span><ul class="overflow-menu"></ul></li>'),a.slice(d).appendTo(".overflow-menu").closest("ul");var b=jQuery(".overflow-menu").children("li").last();"More"===b.text()&&b.remove(),jQuery(".overflow-menu").hide(),Y()}},Y=function(){s&&(cb()<fb()?Z():ab())},Z=function(){for(var a=s.children("li"),b=a.length;b>e;b--){if(a=s.children("li"),!(cb()<fb()))return;_(a,b-1)}},_=function(a,b){a.eq(b-1).prependTo(".overflow-menu")},ab=function(){for(var b,c,a=s.find(".overflow-menu").children("li").length,e=40,f=a;f>1;f--)b=s.children("li").length,c=s.find(".overflow-menu").first("li").first("a").width(),cb()>fb()+c+e&&d>=b&&bb()},bb=function(){jQuery(".overflow-menu").children("li:first").insertBefore(jQuery("#nav-secondary").find(".show-more:first"))},cb=function(){var a=jQuery(".grid-inner").width();if(db()||eb())return a;var b=jQuery("body").width(),c=Math.min(a,b)-u;return c},db=function(){return jQuery(".migrated-content-container").length>0},eb=function(){return $("html").hasClass("legacy")},fb=function(){var a=0;return s.children("li").each(function(){a+=jQuery(this).outerWidth(!0)}),a},gb=function(a){s.append(a)},hb=function(a,b,c){var d=jQuery("<li>").addClass(c);return d.append(jQuery("<a>").attr("href",a).text(b)),d},ib=function(){var a=c*b;q.find("ul:visible").css({left:b}),a=a>0?-1*a:a,q.children("ul").css({left:a})},jb=function(a){a.preventDefault();var b=jQuery(this);b.blur(),b.toggleClass("is-visible"),b.hasClass("is-visible")?r.show():(r.hide(),L(),E(),M())},kb=function(a){var b=jQuery(this),d=jQuery(this).parent();if(!b.hasClass("show-more"))if(b.hasClass("back"))a.preventDefault(),c--,nb(),jQuery(this).addClass("js-back-clicked");else{c++;var e=jQuery(this).parent().hasClass("has-submenu");e?(a.preventDefault(),lb(d)):this.blur()}},lb=function(a){jQuery("html, body").animate({scrollTop:0},100),mb(a.children("ul")),nb()},mb=function(a){a.show().css({left:b})},nb=function(){Modernizr.csstransitions?r.css({left:-(b*c)}).on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",ob):r.animate({left:-(b*c)},ob)},ob=function(){jQuery(".js-back-clicked").removeClass("js-back-clicked").closest("ul").removeAttr("style")},pb=function(){var a=f;rb(),B(),!f&&s&&Y(),a===f?f&&ib():(sb(),vb(),ub())},qb=function(){g.on("load",pb)},rb=function(){if(jQuery("html").hasClass("migrated-consumer-mobile"))b=320,f=!0;else if(jQuery("html").hasClass("mobile-only-nav"))b=jQuery("body").innerWidth(),f=!0;else if(jQuery("html").hasClass("desktop-only-nav")){b=jQuery("body").innerWidth();var a=jQuery(".nav-primary .grid-inner").first().innerWidth();b=a>b?a:b,f=!1}else b=jQuery("body").innerWidth(),f=o2.Global.isMobile()},sb=function(){var a=0,b=0,c=jQuery("html").height();f&&!o2.Global.getCookie("burgerSeen")&&(0===n.find(".burger-overlay").length&&n.addClass("burger-help").append('<div class="burger-overlay" />').append('<div class="burger-copy"><b>Helpful tooltip:</b><br>Select the menu icon to access other areas of the site.<span></span></div>'),h=n.find(".burger-copy"),i=n.find(".burger-overlay"),i.css("height",c+"px"),b=parseInt(h.css("top"),10)-10,k=setTimeout(tb,5e3),jQuery(window).on("scroll",function(){a=jQuery(window).scrollTop(),a>b?h.addClass("fixed"):h.removeClass("fixed")}))},tb=function(){n.removeClass("burger-help"),n.find(".burger-overlay").remove(),n.find(".burger-copy").remove(),clearTimeout(k),m&&o2.Global.setCookie("burgerSeen",!0,1e3)},ub=function(){y(),C(),K(),B(),sb(),w()},vb=function(){L(),A(),z(),D(),x()};return a.init=function(){rb(),db()||eb()||g.on("resize",pb),qb(),ub()},a}();