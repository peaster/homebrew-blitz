define(["jquery","bsp-utils"],function(e,t){var o=e(window),i=e(document);t.onDomInsert(document,"[autofocus], .autoFocus",{insert:function(t){var o=e(t);if(!(o.closest(".dashboard-widget").length>0)){o.closest(".popup").length>0&&o.focus();var i=document.activeElement;i&&i!==document&&i!==document.body||o.focus()}}}),i.ready(function(){e(document.activeElement).focus()}),i.on("focus",":input",function(){function i(){var t,i,s,a,u,c=e(".toolHeader").outerHeight(),f="",r=e(".focusLabel");for(0===r.length&&(r=e("<div/>",{"class":"focusLabel"}),e(document.body).append(r)),t=r.outerHeight(),l.each(function(){e(this).find("> .inputLabel label, > .repeatableLabel").css("visibility","")}),i=l.length-1;i>=0;--i){if(s=e(l[i]),s.offset().top>o.scrollTop()+2*t/3+c){if(f)return r.css({left:n.offset().left,top:c,width:n.outerWidth()}),r.text(f),void r.show();break}a=s.find("> .inputLabel label, > .repeatableLabel"),u=a.text(),u&&(a.css("visibility","hidden"),f&&(f+=" → "),f+=u)}r.hide()}var s=e(this),n=s.closest("form").find(".inputContainer:visible").eq(0),l=s.parentsUntil("form");l.addClass("state-focus"),s.closest(".CodeMirror").length||(i(),o.bind("scroll.focusLabel",t.throttle(50,i)))}),i.on("blur",":input",function(){e(this).parents(".state-focus").each(function(){var t=e(this);t.removeClass("state-focus"),t.find("> .inputLabel label, > .repeatableLabel").css("visibility","")}),e(".focusLabel").hide(),o.unbind(".focusLabel")})});