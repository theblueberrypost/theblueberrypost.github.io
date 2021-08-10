(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
var wl;

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
ldsrcset=function(t){var e,r=document.querySelectorAll(t);for(e=0;e<r.length;e++){var c=r[e].getAttribute("data-srcset");r[e].setAttribute("srcset",c)}},ldsrc=function(t){var e=document.querySelector(t),r=e.getAttribute("data-src");e.setAttribute("src",r)};!function(){if("Promise"in window){var e,t,r=document,n=function(){return r.createElement("link")},o=new Set,a=n(),s=a.relList&&a.relList.supports&&a.relList.supports("prefetch"),i=location.href.replace(/#[^#]+$/,"");o.add(i);var c=function(e){var t=location,r="http:",n="https:";if(e&&e.href&&e.origin==t.origin&&[r,n].includes(e.protocol)&&(e.protocol!=r||t.protocol!=n)){var o=e.pathname;if(!(e.hash&&o+e.search==t.pathname+t.search||"?preload=no"==e.search.substr(-11)||".html"!=o.substr(-5)&&".html"!=o.substr(-5)&&"/"!=o.substr(-1)))return!0}},u=function(e){var t=e.replace(/#[^#]+$/,"");if(!o.has(t)){if(s){var a=n();a.rel="prefetch",a.href=t,r.head.appendChild(a)}else{var i=new XMLHttpRequest;i.open("GET",t,i.withCredentials=!0),i.send()}o.add(t)}},p=function(e){return e.target.closest("a")},f=function(t){var r=t.relatedTarget;r&&p(t)==r.closest("a")||e&&(clearTimeout(e),e=void 0)},l={capture:!0,passive:!0};r.addEventListener("touchstart",function(e){t=performance.now();var r=p(e);c(r)&&u(r.href)},l),r.addEventListener("mouseover",function(r){if(!(performance.now()-t<1200)){var n=p(r);c(n)&&(n.addEventListener("mouseout",f,{passive:!0}),e=setTimeout(function(){u(n.href),e=void 0},80))}},l)}}();

$(function(){
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){var a='data-src';var e=document.querySelector('.js4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/img_6425-1382.jpg':'images/img_6425-691.jpg');
var e=document.querySelector('.js1');e.setAttribute('src',(dpi>1)?'images/img_6440-1738.jpg':'images/img_6440-869.jpg');
var e=document.querySelector('.js2');e.setAttribute('src',(dpi>1)?'images/img_6430-842.jpg':'images/img_6430-421.jpg');
var e=document.querySelector('.js3');e.setAttribute('src',(dpi>1)?'images/img_6433-848.jpg':'images/img_6433-424.jpg');}else if($(window).width()>=960){var a='data-src';var e=document.querySelector('.js4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/img_6425-1104.jpg':'images/img_6425-552.jpg');
var e=document.querySelector('.js1');e.setAttribute('src',(dpi>1)?'images/img_6440-1390.jpg':'images/img_6440-695.jpg');
var e=document.querySelector('.js2');e.setAttribute('src',(dpi>1)?'images/img_6430-674.jpg':'images/img_6430-337.jpg');
var e=document.querySelector('.js3');e.setAttribute('src',(dpi>1)?'images/img_6433-678.jpg':'images/img_6433-339.jpg');}else if($(window).width()>=768){var a='data-src';var e=document.querySelector('.js4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/img_6425-886.jpg':'images/img_6425-443.jpg');
var e=document.querySelector('.js1');e.setAttribute('src',(dpi>1)?'images/img_6440-1112.jpg':'images/img_6440-556.jpg');
var e=document.querySelector('.js2');e.setAttribute('src',(dpi>1)?'images/img_6430-538.jpg':'images/img_6430-269.jpg');
var e=document.querySelector('.js3');e.setAttribute('src',(dpi>1)?'images/img_6433-542.jpg':'images/img_6433-271.jpg');}else if($(window).width()>=480){var a='data-src';var e=document.querySelector('.js4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/img_6425-670.jpg':'images/img_6425-335.jpg');
var e=document.querySelector('.js1');e.setAttribute('src',(dpi>1)?'images/img_6440-960.jpg':'images/img_6440-480.jpg');
var e=document.querySelector('.js2');e.setAttribute('src',(dpi>1)?'images/img_6430-450.jpg':'images/img_6430-225.jpg');
var e=document.querySelector('.js3');e.setAttribute('src',(dpi>1)?'images/img_6433-458.jpg':'images/img_6433-229.jpg');}else{var a='data-src';var e=document.querySelector('.js4');if(e.hasAttribute('src')){a='src';}e.setAttribute(a,(dpi>1)?'images/img_6425-446.jpg':'images/img_6425-223.jpg');
var e=document.querySelector('.js1');e.setAttribute('src',(dpi>1)?'images/img_6440-640.jpg':'images/img_6440-320.jpg');
var e=document.querySelector('.js2');e.setAttribute('src',(dpi>1)?'images/img_6430-302.jpg':'images/img_6430-151.jpg');
var e=document.querySelector('.js3');e.setAttribute('src',(dpi>1)?'images/img_6433-306.jpg':'images/img_6433-153.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]:not(.allowConsent,.noConsent,.denyConsent,.removeConsent)').each(function(i,e){$(e).click(function(){var t=e.hash.length>1?$('[name="'+e.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#m1')[0]);
ldsrc('.js4');ldsrcset('.js21 source');
});