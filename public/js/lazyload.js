"use strict";!function(t,e,i){var a=function(e){this.$doc=t(e),this.init()};a.prototype={init:function(){var e=this;setTimeout(function(){e.$doc.find("noscript[data-lazyload-src]").each(function(i,a){var n=t(a).parent().find("img").first()[0],o=e.removeExtraImageOffset(i,25);e.assemble(a,n,o)})},1e3/60),t(i).on("resize scroll",function(){e.$doc.find("noscript[data-lazyload-src]").each(function(i,a){var n=t(a).parent().find("img").first()[0],o=e.removeExtraImageOffset(i,25);setTimeout(function(){e.makeImageVisible(a,n,o)},1e3/60)})})},assemble:function(e,i,a){this.addAttributes(e,i),t(i).css({position:"static",width:"1px",height:"1px"}),this.makeImageVisible(e,i,a)},makeImageVisible:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;t.hasAttribute("data-lazyload-src")&&this.isInViewport(e,i)&&this.addSource(t,e)},addAttributes:function(e,i){t.each(t(e).prop("attributes"),function(t,e){var a=e.name,n=e.value;if(!a)return!0;0===a.indexOf("data-lazyload-")&&"data-lazyload-src"!==a&&(a=a.replace("data-lazyload-",""));try{i.setAttribute(a,n||"")}catch(o){}})},addSource:function(e,i){t(i).on("load",function(){setTimeout(function(){t(i).removeAttr("data-lazyload-src"),t(i).parents(".module").addBack().filter(".module").trigger("lazyloadFinished")},1e3/60)}),t(i).removeAttr("style"),t(i).attr("src",i.getAttribute("data-lazyload-src")).trigger("load"),e.removeAttribute("data-lazyload-src")},isInViewport:function(t,e){var a=t.getBoundingClientRect();return 0===document.documentElement.scrollTop?a.bottom-e<=(i.innerHeight||document.documentElement.clientHeight):a.top-e>=0&&a.bottom<=(i.innerHeight||document.documentElement.clientHeight)},removeExtraImageOffset:function(t,e){return t*e}},t.fn.monolazyload=function(){var e=this;return this.each(function(){t.data(e,"monolazyload")||t.data(e,"monolazyload",new a(e))})}}(jQuery,Modernizr,window);var _monoLazyload={init:function(){this.setViewport(),$(document).monolazyload()},setViewport:function(){$(window).width()<768?this.vp="sm":$(window).width()<1200?this.vp="md":this.vp="lg"}};_monoLazyload.init();