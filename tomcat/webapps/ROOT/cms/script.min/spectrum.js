!function(e,t,r){function a(e,t,r,a){for(var n=[],o=0;o<e.length;o++){var s=e[o];if(s){var i=tinycolor(s),l=i.toHsl().l<.5?"sp-thumb-el sp-thumb-dark":"sp-thumb-el sp-thumb-light";l+=tinycolor.equals(t,s)?" sp-thumb-active":"";var c=i.toString(a||"rgb"),f=b?"background-color:"+i.toRgbString():"filter:"+i.toFilter();n.push('<span title="'+c+'" data-color="'+i.toRgbString()+'" class="'+l+'"><span class="sp-thumb-inner" style="'+f+';" /></span>')}else{var u="sp-clear-display";n.push('<span title="No Color Selected" data-color="" style="background-color:transparent;" class="'+u+'"></span>')}}return"<div class='sp-cf "+r+"'>"+n.join("")+"</div>"}function n(){for(var e=0;e<g.length;e++)g[e]&&g[e].hide()}function o(e,r){var a=t.extend({},p,e);return a.callbacks={move:u(a.move,r),change:u(a.change,r),show:u(a.show,r),hide:u(a.hide,r),beforeShow:u(a.beforeShow,r)},a}function s(s,c){function u(){if(L.showPaletteOnly&&(L.showPalette=!0),L.palette){ue=L.palette.slice(0),de=t.isArray(ue[0])?ue:[ue],he={};for(var e=0;e<de.length;e++)for(var r=0;r<de[e].length;r++){var a=tinycolor(de[e][r]).toRgbString();he[a]=!0}}xe.toggleClass("sp-flat",W),xe.toggleClass("sp-input-disabled",!L.showInput),xe.toggleClass("sp-alpha-enabled",L.showAlpha),xe.toggleClass("sp-clear-enabled",Ye),xe.toggleClass("sp-buttons-disabled",!L.showButtons),xe.toggleClass("sp-palette-disabled",!L.showPalette),xe.toggleClass("sp-palette-only",L.showPaletteOnly),xe.toggleClass("sp-initial-disabled",!L.showInitial),xe.addClass(L.className).addClass(L.containerClassName),K()}function p(){function e(e){return e.data&&e.data.ignore?(N(t(this).data("color")),j()):(N(t(this).data("color")),j(),z(!0),O()),!1}if(v&&xe.find("*:not(input)").attr("unselectable","on"),u(),De&&ye.after(Ie).hide(),Ye||Ne.hide(),W)ye.after(xe).hide();else{var r="parent"===L.appendTo?ye.parent():t(L.appendTo);1!==r.length&&(r=t("body")),r.append(xe)}x(),ze.bind("click.spectrum touchstart.spectrum",function(e){we||R(),e.stopPropagation(),t(e.target).is("input")||e.preventDefault()}),(ye.is(":disabled")||L.disabled===!0)&&X(),xe.click(f),Re.change(F),Re.bind("paste",function(){setTimeout(F,1)}),Re.keydown(function(e){13==e.keyCode&&F()}),Te.text(L.cancelText),Te.bind("click.spectrum",function(e){e.stopPropagation(),e.preventDefault(),O("cancel")}),Ne.attr("title",L.clearText),Ne.bind("click.spectrum",function(e){e.stopPropagation(),e.preventDefault(),We=!0,j(),W&&z(!0)}),qe.text(L.chooseText),qe.bind("click.spectrum",function(e){e.stopPropagation(),e.preventDefault(),E()&&(z(!0),O())}),d(Ae,function(e,t,r){fe=e/ne,We=!1,r.shiftKey&&(fe=Math.round(10*fe)/10),j()},H,A),d(Ce,function(e,t){ie=parseFloat(t/re),We=!1,L.showAlpha||(fe=1),j()},H,A),d(ke,function(e,t,r){if(r.shiftKey){if(!be){var a=le*Z,n=ee-ce*ee,o=Math.abs(e-a)>Math.abs(t-n);be=o?"x":"y"}}else be=null;var s=!be||"x"===be,i=!be||"y"===be;s&&(le=parseFloat(e/Z)),i&&(ce=parseFloat((ee-t)/ee)),We=!1,L.showAlpha||(fe=1),j()},H,A),$e?(N($e),D(),Xe=Be||tinycolor($e).format,k($e)):D(),W&&M();var a=v?"mousedown.spectrum":"click.spectrum touchstart.spectrum";Me.delegate(".sp-thumb-el",a,e),Oe.delegate(".sp-thumb-el:nth-child(1)",a,{ignore:!0},e)}function x(){if(G&&e.localStorage){try{var r=e.localStorage[G].split(",#");r.length>1&&(delete e.localStorage[G],t.each(r,function(e,t){k(t)}))}catch(a){}try{pe=e.localStorage[G].split(";")}catch(a){}}}function k(r){if(Y){var a=tinycolor(r).toRgbString();if(!he[a]&&-1===t.inArray(a,pe))for(pe.push(a);pe.length>ge;)pe.shift();if(G&&e.localStorage)try{e.localStorage[G]=pe.join(";")}catch(n){}}}function S(){var e=[];if(L.showPalette)for(i=0;i<pe.length;i++){var t=tinycolor(pe[i]).toRgbString();he[t]||e.push(pe[i])}return e.reverse().slice(0,L.maxSelectionSize)}function C(){var e=q(),r=t.map(de,function(t,r){return a(t,e,"sp-palette-row sp-palette-row-"+r,L.preferredFormat)});x(),pe&&r.push(a(S(),e,"sp-palette-row sp-palette-row-selection",L.preferredFormat)),Me.html(r.join(""))}function P(){if(L.showInitial){var e=_e,t=q();Oe.html(a([e,t],t,"sp-palette-row-initial",L.preferredFormat))}}function H(){(0>=ee||0>=Z||0>=re)&&K(),xe.addClass(ve),be=null,ye.trigger("dragstart.spectrum",[q()])}function A(){xe.removeClass(ve),ye.trigger("dragstop.spectrum",[q()])}function F(){var e=Re.val();if(null!==e&&""!==e||!Ye){var t=tinycolor(e);t.ok?(N(t),z(!0)):Re.addClass("sp-validation-error")}else N(null),z(!0)}function R(){U?O():M()}function M(){var r=t.Event("beforeShow.spectrum");return U?void K():(ye.trigger(r,[q()]),void(V.beforeShow(q())===!1||r.isDefaultPrevented()||(n(),U=!0,t(me).bind("click.spectrum",O),t(e).bind("resize.spectrum",J),Ie.addClass("sp-active"),xe.removeClass("sp-hidden"),K(),D(),_e=q(),P(),V.show(_e),ye.trigger("show.spectrum",[_e]))))}function O(r){if((!r||"click"!=r.type||2!=r.button)&&U&&!W){U=!1,t(me).unbind("click.spectrum",O),t(e).unbind("resize.spectrum",J),Ie.removeClass("sp-active"),xe.addClass("sp-hidden");var a=!tinycolor.equals(q(),_e);a&&(Le&&"cancel"!==r?z(!0):T()),V.hide(q()),ye.trigger("hide.spectrum",[q()])}}function T(){N(_e,!0)}function N(e,t){if(tinycolor.equals(e,q()))return void D();var r,a;!e&&Ye?We=!0:(We=!1,r=tinycolor(e),a=r.toHsv(),ie=a.h%360/360,le=a.s,ce=a.v,fe=a.a),D(),r&&r.ok&&!t&&(Xe=Be||r.format)}function q(e){return e=e||{},Ye&&We?null:tinycolor.fromRatio({h:ie,s:le,v:ce,a:Math.round(100*fe)/100},{format:e.format||Xe})}function E(){return!Re.hasClass("sp-validation-error")}function j(){D(),V.move(q()),ye.trigger("move.spectrum",[q()])}function D(){Re.removeClass("sp-validation-error"),I();var e=tinycolor.fromRatio({h:ie,s:1,v:1});ke.css("background-color",e.toHexString());var t=Xe;1>fe&&(0!==fe||"name"!==t)&&("hex"===t||"hex3"===t||"hex6"===t||"name"===t)&&(t="rgb");var r=q({format:t}),a="";if(Ke.removeClass("sp-clear-display"),Ke.css("background-color","transparent"),!r&&Ye)Ke.addClass("sp-clear-display");else{var n=r.toHexString(),o=r.toRgbString();if(b||1===r.alpha?Ke.css("background-color",o):(Ke.css("background-color","transparent"),Ke.css("filter",r.toFilter())),L.showAlpha){var s=r.toRgb();s.a=0;var i=tinycolor(s).toRgbString(),l="linear-gradient(left, "+i+", "+n+")";v?He.css("filter",tinycolor(i).toFilter({gradientType:1},n)):(He.css("background","-webkit-"+l),He.css("background","-moz-"+l),He.css("background","-ms-"+l),He.css("background","linear-gradient(to right, "+i+", "+n+")"))}a=r.toString(t)}L.showInput&&Re.val(a),L.showPalette&&C(),P()}function I(){var e=le,t=ce;if(Ye&&We)Fe.hide(),Pe.hide(),Se.hide();else{Fe.show(),Pe.show(),Se.show();var r=e*Z,a=ee-t*ee;r=Math.max(-te,Math.min(Z-te,r-te)),a=Math.max(-te,Math.min(ee-te,a-te)),Se.css({top:a+"px",left:r+"px"});var n=fe*ne;Fe.css({left:n-oe/2+"px"});var o=ie*re;Pe.css({top:o-se+"px"})}}function z(e){var t=q(),r="",a=!tinycolor.equals(t,_e);t&&(r=t.toString(Xe),k(t)),Ee&&ye.val(r),_e=t,e&&a&&(V.change(t),ye.trigger("change",[t]))}function K(){Z=ke.width(),ee=ke.height(),te=Se.height(),ae=Ce.width(),re=Ce.height(),se=Pe.height(),ne=Ae.width(),oe=Fe.width(),W||(xe.css("position","absolute"),xe.offset(l(xe,ze))),I(),L.showPalette&&C(),ye.trigger("reflow.spectrum")}function $(){ye.show(),ze.unbind("click.spectrum touchstart.spectrum"),xe.remove(),Ie.remove(),g[Ge.id]=null}function _(e,a){return e===r?t.extend({},L):a===r?L[e]:(L[e]=a,void u())}function B(){we=!1,ye.attr("disabled",!1),ze.removeClass("sp-disabled")}function X(){O(),we=!0,ye.attr("disabled",!0),ze.addClass("sp-disabled")}var L=o(c,s),W=L.flat,Y=L.showSelectionPalette,G=L.localStorageKey,Q=L.theme,V=L.callbacks,J=h(K,10),U=!1,Z=0,ee=0,te=0,re=0,ae=0,ne=0,oe=0,se=0,ie=0,le=0,ce=0,fe=1,ue=[],de=[],he={},pe=L.selectionPalette.slice(0),ge=L.maxSelectionSize,ve="sp-dragging",be=null,me=s.ownerDocument,ye=(me.body,t(s)),we=!1,xe=t(w,me).addClass(Q),ke=xe.find(".sp-color"),Se=xe.find(".sp-dragger"),Ce=xe.find(".sp-hue"),Pe=xe.find(".sp-slider"),He=xe.find(".sp-alpha-inner"),Ae=xe.find(".sp-alpha"),Fe=xe.find(".sp-alpha-handle"),Re=xe.find(".sp-input"),Me=xe.find(".sp-palette"),Oe=xe.find(".sp-initial"),Te=xe.find(".sp-cancel"),Ne=xe.find(".sp-clear"),qe=xe.find(".sp-choose"),Ee=ye.is("input"),je=Ee&&m&&"color"===ye.attr("type"),De=Ee&&!W,Ie=De?t(y).addClass(Q).addClass(L.className).addClass(L.replacerClassName):t([]),ze=De?Ie:ye,Ke=Ie.find(".sp-preview-inner"),$e=L.color||Ee&&ye.val(),_e=!1,Be=L.preferredFormat,Xe=Be,Le=!L.showButtons||L.clickoutFiresChange,We=!$e,Ye=L.allowEmpty&&!je;p();var Ge={show:M,hide:O,toggle:R,reflow:K,option:_,enable:B,disable:X,set:function(e){N(e),z()},get:q,destroy:$,container:xe};return Ge.id=g.push(Ge)-1,Ge}function l(e,r){var a=0,n=e.outerWidth(),o=e.outerHeight(),s=r.outerHeight(),i=e[0].ownerDocument,l=i.documentElement,c=l.clientWidth+t(i).scrollLeft(),f=l.clientHeight+t(i).scrollTop(),u=r.offset();return u.top+=s,u.left-=Math.min(u.left,u.left+n>c&&c>n?Math.abs(u.left+n-c):0),u.top-=Math.min(u.top,u.top+o>f&&f>o?Math.abs(o+s-a):a),u}function c(){}function f(e){e.stopPropagation()}function u(e,t){var r=Array.prototype.slice,a=r.call(arguments,2);return function(){return e.apply(t,a.concat(r.call(arguments)))}}function d(r,a,n,o){function s(e){e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),e.returnValue=!1}function i(e){if(u){if(v&&document.documentMode<9&&!e.button)return c();var t=e.originalEvent.touches,n=t?t[0].pageX:e.pageX,o=t?t[0].pageY:e.pageY,i=Math.max(0,Math.min(n-d.left,p)),l=Math.max(0,Math.min(o-d.top,h));g&&s(e),a.apply(r,[i,l,e])}}function l(e){var a=e.which?3==e.which:2==e.button;e.originalEvent.touches;a||u||n.apply(r,arguments)!==!1&&(u=!0,h=t(r).height(),p=t(r).width(),d=t(r).offset(),t(f).bind(b),t(f.body).addClass("sp-dragging"),g||i(e),s(e))}function c(){u&&(t(f).unbind(b),t(f.body).removeClass("sp-dragging"),o.apply(r,arguments)),u=!1}a=a||function(){},n=n||function(){},o=o||function(){};var f=r.ownerDocument||document,u=!1,d={},h=0,p=0,g="ontouchstart"in e,b={};b.selectstart=s,b.dragstart=s,b["touchmove mousemove"]=i,b["touchend mouseup"]=c,t(r).bind("touchstart mousedown",l)}function h(e,t,r){var a;return function(){var n=this,o=arguments,s=function(){a=null,e.apply(n,o)};r&&clearTimeout(a),(r||!a)&&(a=setTimeout(s,t))}}var p={beforeShow:c,move:c,change:c,show:c,hide:c,color:!1,flat:!1,showInput:!1,allowEmpty:!1,showButtons:!0,clickoutFiresChange:!1,showInitial:!1,showPalette:!1,showPaletteOnly:!1,showSelectionPalette:!0,localStorageKey:!1,appendTo:"body",maxSelectionSize:7,cancelText:"cancel",chooseText:"choose",clearText:"Clear Color Selection",preferredFormat:!1,className:"",containerClassName:"",replacerClassName:"",showAlpha:!1,theme:"sp-light",palette:[["#ffffff","#000000","#ff0000","#ff8000","#ffff00","#008000","#0000ff","#4b0082","#9400d3"]],selectionPalette:[],disabled:!1},g=[],v=!!/msie/i.exec(e.navigator.userAgent),b=function(){function e(e,t){return!!~(""+e).indexOf(t)}var t=document.createElement("div"),r=t.style;return r.cssText="background-color:rgba(0,0,0,.5)",e(r.backgroundColor,"rgba")||e(r.backgroundColor,"hsla")}(),m=function(){var e=t("<input type='color' value='!' />")[0];return"color"===e.type&&"!"!==e.value}(),y=["<div class='sp-replacer'>","<div class='sp-preview'><div class='sp-preview-inner'></div></div>","<div class='sp-dd'>&#9660;</div>","</div>"].join(""),w=function(){var e="";if(v)for(var t=1;6>=t;t++)e+="<div class='sp-"+t+"'></div>";return["<div class='sp-container sp-hidden'>","<div class='sp-palette-container'>","<div class='sp-palette sp-thumb sp-cf'></div>","</div>","<div class='sp-picker-container'>","<div class='sp-top sp-cf'>","<div class='sp-fill'></div>","<div class='sp-top-inner'>","<div class='sp-color'>","<div class='sp-sat'>","<div class='sp-val'>","<div class='sp-dragger'></div>","</div>","</div>","</div>","<div class='sp-clear sp-clear-display'>","</div>","<div class='sp-hue'>","<div class='sp-slider'></div>",e,"</div>","</div>","<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>","</div>","<div class='sp-input-container sp-cf'>","<input class='sp-input' type='text' spellcheck='false'  />","</div>","<div class='sp-initial sp-thumb sp-cf'></div>","<div class='sp-button-container sp-cf'>","<a class='sp-cancel' href='#'></a>","<button type='button' class='sp-choose'></button>","</div>","</div>","</div>"].join("")}(),x="spectrum.id";t.fn.spectrum=function(e,r){if("string"==typeof e){var a=this,n=Array.prototype.slice.call(arguments,1);return this.each(function(){var r=g[t(this).data(x)];if(r){var o=r[e];if(!o)throw new Error("Spectrum: no such method: '"+e+"'");"get"==e?a=r.get():"container"==e?a=r.container:"option"==e?a=r.option.apply(r,n):"destroy"==e?(r.destroy(),t(this).removeData(x)):o.apply(r,n)}}),a}return this.spectrum("destroy").each(function(){var r=t.extend({},e,t(this).data()),a=s(this,r);t(this).data(x,a.id)})},t.fn.spectrum.load=!0,t.fn.spectrum.loadOpts={},t.fn.spectrum.draggable=d,t.fn.spectrum.defaults=p,t.spectrum={},t.spectrum.localization={},t.spectrum.palettes={},t.fn.spectrum.processNativeColorInputs=function(){m||t("input[type=color]").spectrum({preferredFormat:"hex6"})},function(){function t(e,a){if(e=e?e:"",a=a||{},"object"==typeof e&&e.hasOwnProperty("_tc_id"))return e;var o=r(e),i=o.r,f=o.g,h=o.b,p=o.a,g=H(100*p)/100,v=a.format||o.format;return 1>i&&(i=H(i)),1>f&&(f=H(f)),1>h&&(h=H(h)),{ok:o.ok,format:v,_tc_id:C++,alpha:p,getAlpha:function(){return p},setAlpha:function(e){p=u(e),g=H(100*p)/100},toHsv:function(){var e=s(i,f,h);return{h:360*e.h,s:e.s,v:e.v,a:p}},toHsvString:function(){var e=s(i,f,h),t=H(360*e.h),r=H(100*e.s),a=H(100*e.v);return 1==p?"hsv("+t+", "+r+"%, "+a+"%)":"hsva("+t+", "+r+"%, "+a+"%, "+g+")"},toHsl:function(){var e=n(i,f,h);return{h:360*e.h,s:e.s,l:e.l,a:p}},toHslString:function(){var e=n(i,f,h),t=H(360*e.h),r=H(100*e.s),a=H(100*e.l);return 1==p?"hsl("+t+", "+r+"%, "+a+"%)":"hsla("+t+", "+r+"%, "+a+"%, "+g+")"},toHex:function(e){return l(i,f,h,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(){return c(i,f,h,p)},toHex8String:function(){return"#"+this.toHex8()},toRgb:function(){return{r:H(i),g:H(f),b:H(h),a:p}},toRgbString:function(){return 1==p?"rgb("+H(i)+", "+H(f)+", "+H(h)+")":"rgba("+H(i)+", "+H(f)+", "+H(h)+", "+g+")"},toPercentageRgb:function(){return{r:H(100*d(i,255))+"%",g:H(100*d(f,255))+"%",b:H(100*d(h,255))+"%",a:p}},toPercentageRgbString:function(){return 1==p?"rgb("+H(100*d(i,255))+"%, "+H(100*d(f,255))+"%, "+H(100*d(h,255))+"%)":"rgba("+H(100*d(i,255))+"%, "+H(100*d(f,255))+"%, "+H(100*d(h,255))+"%, "+g+")"},toName:function(){return 0===p?"transparent":O[l(i,f,h,!0)]||!1},toFilter:function(e){var r="#"+c(i,f,h,p),n=r,o=a&&a.gradientType?"GradientType = 1, ":"";if(e){var s=t(e);n=s.toHex8String()}return"progid:DXImageTransform.Microsoft.gradient("+o+"startColorstr="+r+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this.format;var r=!1,a=!t&&1>p&&p>0,n=a&&("hex"===e||"hex6"===e||"hex3"===e||"name"===e);return"rgb"===e&&(r=this.toRgbString()),"prgb"===e&&(r=this.toPercentageRgbString()),("hex"===e||"hex6"===e)&&(r=this.toHexString()),"hex3"===e&&(r=this.toHexString(!0)),"hex8"===e&&(r=this.toHex8String()),"name"===e&&(r=this.toName()),"hsl"===e&&(r=this.toHslString()),"hsv"===e&&(r=this.toHsvString()),n?this.toRgbString():r||this.toHexString()}}}function r(e){var t={r:0,g:0,b:0},r=1,n=!1,s=!1;return"string"==typeof e&&(e=x(e)),"object"==typeof e&&(e.hasOwnProperty("r")&&e.hasOwnProperty("g")&&e.hasOwnProperty("b")?(t=a(e.r,e.g,e.b),n=!0,s="%"===String(e.r).substr(-1)?"prgb":"rgb"):e.hasOwnProperty("h")&&e.hasOwnProperty("s")&&e.hasOwnProperty("v")?(e.s=m(e.s),e.v=m(e.v),t=i(e.h,e.s,e.v),n=!0,s="hsv"):e.hasOwnProperty("h")&&e.hasOwnProperty("s")&&e.hasOwnProperty("l")&&(e.s=m(e.s),e.l=m(e.l),t=o(e.h,e.s,e.l),n=!0,s="hsl"),e.hasOwnProperty("a")&&(r=e.a)),r=u(r),{ok:n,format:e.format||s,r:A(255,F(t.r,0)),g:A(255,F(t.g,0)),b:A(255,F(t.b,0)),a:r}}function a(e,t,r){return{r:255*d(e,255),g:255*d(t,255),b:255*d(r,255)}}function n(e,t,r){e=d(e,255),t=d(t,255),r=d(r,255);var a,n,o=F(e,t,r),s=A(e,t,r),i=(o+s)/2;if(o==s)a=n=0;else{var l=o-s;switch(n=i>.5?l/(2-o-s):l/(o+s),o){case e:a=(t-r)/l+(r>t?6:0);break;case t:a=(r-e)/l+2;break;case r:a=(e-t)/l+4}a/=6}return{h:a,s:n,l:i}}function o(e,t,r){function a(e,t,r){return 0>r&&(r+=1),r>1&&(r-=1),1/6>r?e+6*(t-e)*r:.5>r?t:2/3>r?e+(t-e)*(2/3-r)*6:e}var n,o,s;if(e=d(e,360),t=d(t,100),r=d(r,100),0===t)n=o=s=r;else{var i=.5>r?r*(1+t):r+t-r*t,l=2*r-i;n=a(l,i,e+1/3),o=a(l,i,e),s=a(l,i,e-1/3)}return{r:255*n,g:255*o,b:255*s}}function s(e,t,r){e=d(e,255),t=d(t,255),r=d(r,255);var a,n,o=F(e,t,r),s=A(e,t,r),i=o,l=o-s;if(n=0===o?0:l/o,o==s)a=0;else{switch(o){case e:a=(t-r)/l+(r>t?6:0);break;case t:a=(r-e)/l+2;break;case r:a=(e-t)/l+4}a/=6}return{h:a,s:n,v:i}}function i(e,t,r){e=6*d(e,360),t=d(t,100),r=d(r,100);var a=P.floor(e),n=e-a,o=r*(1-t),s=r*(1-n*t),i=r*(1-(1-n)*t),l=a%6,c=[r,s,o,o,i,r][l],f=[i,r,r,s,o,o][l],u=[o,o,i,r,r,s][l];return{r:255*c,g:255*f,b:255*u}}function l(e,t,r,a){var n=[b(H(e).toString(16)),b(H(t).toString(16)),b(H(r).toString(16))];return a&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function c(e,t,r,a){var n=[b(y(a)),b(H(e).toString(16)),b(H(t).toString(16)),b(H(r).toString(16))];return n.join("")}function f(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}function u(e){return e=parseFloat(e),(isNaN(e)||0>e||e>1)&&(e=1),e}function d(e,t){g(e)&&(e="100%");var r=v(e);return e=A(t,F(0,parseFloat(e))),r&&(e=parseInt(e*t,10)/100),P.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function h(e){return A(1,F(0,e))}function p(e){return parseInt(e,16)}function g(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)}function v(e){return"string"==typeof e&&-1!=e.indexOf("%")}function b(e){return 1==e.length?"0"+e:""+e}function m(e){return 1>=e&&(e=100*e+"%"),e}function y(e){return Math.round(255*parseFloat(e)).toString(16)}function w(e){return p(e)/255}function x(e){e=e.replace(k,"").replace(S,"").toLowerCase();var t=!1;if(M[e])e=M[e],t=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};var r;return(r=T.rgb.exec(e))?{r:r[1],g:r[2],b:r[3]}:(r=T.rgba.exec(e))?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=T.hsl.exec(e))?{h:r[1],s:r[2],l:r[3]}:(r=T.hsla.exec(e))?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=T.hsv.exec(e))?{h:r[1],s:r[2],v:r[3]}:(r=T.hex8.exec(e))?{a:w(r[1]),r:p(r[2]),g:p(r[3]),b:p(r[4]),format:t?"name":"hex8"}:(r=T.hex6.exec(e))?{r:p(r[1]),g:p(r[2]),b:p(r[3]),format:t?"name":"hex"}:(r=T.hex3.exec(e))?{r:p(r[1]+""+r[1]),g:p(r[2]+""+r[2]),b:p(r[3]+""+r[3]),format:t?"name":"hex"}:!1}var k=/^[\s,#]+/,S=/\s+$/,C=0,P=Math,H=P.round,A=P.min,F=P.max,R=P.random;t.fromRatio=function(e,r){if("object"==typeof e){var a={};for(var n in e)e.hasOwnProperty(n)&&("a"===n?a[n]=e[n]:a[n]=m(e[n]));e=a}return t(e,r)},t.equals=function(e,r){return e&&r?t(e).toRgbString()==t(r).toRgbString():!1},t.random=function(){return t.fromRatio({r:R(),g:R(),b:R()})},t.desaturate=function(e,r){r=0===r?0:r||10;var a=t(e).toHsl();return a.s-=r/100,a.s=h(a.s),t(a)},t.saturate=function(e,r){r=0===r?0:r||10;var a=t(e).toHsl();return a.s+=r/100,a.s=h(a.s),t(a)},t.greyscale=function(e){return t.desaturate(e,100)},t.lighten=function(e,r){r=0===r?0:r||10;var a=t(e).toHsl();return a.l+=r/100,a.l=h(a.l),t(a)},t.darken=function(e,r){r=0===r?0:r||10;var a=t(e).toHsl();return a.l-=r/100,a.l=h(a.l),t(a)},t.complement=function(e){var r=t(e).toHsl();return r.h=(r.h+180)%360,t(r)},t.triad=function(e){var r=t(e).toHsl(),a=r.h;return[t(e),t({h:(a+120)%360,s:r.s,l:r.l}),t({h:(a+240)%360,s:r.s,l:r.l})]},t.tetrad=function(e){var r=t(e).toHsl(),a=r.h;return[t(e),t({h:(a+90)%360,s:r.s,l:r.l}),t({h:(a+180)%360,s:r.s,l:r.l}),t({h:(a+270)%360,s:r.s,l:r.l})]},t.splitcomplement=function(e){var r=t(e).toHsl(),a=r.h;return[t(e),t({h:(a+72)%360,s:r.s,l:r.l}),t({h:(a+216)%360,s:r.s,l:r.l})]},t.analogous=function(e,r,a){r=r||6,a=a||30;var n=t(e).toHsl(),o=360/a,s=[t(e)];for(n.h=(n.h-(o*r>>1)+720)%360;--r;)n.h=(n.h+o)%360,s.push(t(n));return s},t.monochromatic=function(e,r){r=r||6;for(var a=t(e).toHsv(),n=a.h,o=a.s,s=a.v,i=[],l=1/r;r--;)i.push(t({h:n,s:o,v:s})),s=(s+l)%1;return i},t.readability=function(e,r){var a=t(e).toRgb(),n=t(r).toRgb(),o=(299*a.r+587*a.g+114*a.b)/1e3,s=(299*n.r+587*n.g+114*n.b)/1e3,i=Math.max(a.r,n.r)-Math.min(a.r,n.r)+Math.max(a.g,n.g)-Math.min(a.g,n.g)+Math.max(a.b,n.b)-Math.min(a.b,n.b);return{brightness:Math.abs(o-s),color:i}},t.readable=function(e,r){var a=t.readability(e,r);return a.brightness>125&&a.color>500},t.mostReadable=function(e,r){for(var a=null,n=0,o=!1,s=0;s<r.length;s++){var i=t.readability(e,r[s]),l=i.brightness>125&&i.color>500,c=3*(i.brightness/125)+i.color/500;(l&&!o||l&&o&&c>n||!l&&!o&&c>n)&&(o=l,n=c,a=t(r[s]))}return a};var M=t.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},O=t.hexNames=f(M),T=function(){var e="[-\\+]?\\d+%?",t="[-\\+]?\\d*\\.\\d+%?",r="(?:"+t+")|(?:"+e+")",a="[\\s|\\(]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?",n="[\\s|\\(]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")[,|\\s]+("+r+")\\s*\\)?";return{rgb:new RegExp("rgb"+a),rgba:new RegExp("rgba"+n),hsl:new RegExp("hsl"+a),hsla:new RegExp("hsla"+n),hsv:new RegExp("hsv"+a),hex3:/^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex8:/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();e.tinycolor=t}(),t(function(){t.fn.spectrum.load&&t.fn.spectrum.processNativeColorInputs()})}(window,jQuery);