!function(t,o,n){function s(){var o=[];d.find(".cms-objectBegin-hasControls").each(function(){var n,s,i,e,l=t(this),r=t.data(this,"inlineEditor-$controls"),c=!1,d=Number.MAX_VALUE,a=0,h=Number.MAX_VALUE,u=0;for(n=l,s=0,i=1;i>s;n=n.next(),++s)n.nextUntil(".cms-objectEnd").each(function(){var o=t(this),s=o.offset(),e=s.left,l=e+o.outerWidth(),r=s.top,C=r+o.outerHeight();return n=o,o.is(".cms-objectBegin")?void++i:void(o.is(":visible")&&(c=!0,d>e&&(d=e),l>a&&(a=l),h>r&&(h=r),C>u&&(u=C)))});if(c){if(37>h&&(h=37),e={$controls:r,controlsCss:{left:d,top:h},controlsDimension:{height:r.outerHeight()+5,width:r.outerWidth()},outlineCss:{height:u-h,top:0,width:a-d}},t.data(l[0],"inlineEditor-box",e),o.length>0)do retry=!1,t.each(o,function(t,o){return o.controlsCss.left<=e.controlsCss.left+e.controlsDimension.width&&e.controlsCss.left<=o.controlsCss.left+o.controlsDimension.width&&o.controlsCss.top<=e.controlsCss.top+e.controlsDimension.height&&e.controlsCss.top<=o.controlsCss.top+o.controlsDimension.height?(retry=!0,e.controlsCss.top+=1,e.outlineCss.top-=1,!1):void 0});while(retry);o.push(e),r.css(e.controlsCss),r.find(".inlineEditorOutline").css(e.outlineCss),r.show()}else r.hide()})}function i(){a.height(Math.max(e.height(),d.height())),a.css({border:"none",left:0,margin:0,position:"absolute",top:0,width:"100%","z-index":1e6})}var e=t(o.document),l=t(e[0].body),r=t(o.parent),c=t(r[0].document),d=t(c[0].body),a=d.find(".cms-inlineEditor"),h=t.parseJSON(d.find(".cms-mainObject").attr("data-object")),u=[h.id];d.find(".cms-objectBegin").each(function(){var o,n,s,i=t(this),e=t.parseJSON(i.attr("data-object")),r=e.id;t.inArray(r,u)>-1||(u.push(r),o=t("<div/>",{"class":"inlineEditorOutline"}),n=t("<a/>",{"class":"icon icon-action-edit",href:CONTEXT_PATH+"/content/edit.jsp?id="+e.id,target:"_blank",text:e.typeLabel,mouseenter:function(){var o=t.data(i[0],"inlineEditor-box");s.addClass("inlineEditorControls-hover"),d.find(".cms-objectBegin-hasControls").each(function(){var n=t.data(this,"inlineEditor-box");n&&n!==o&&n.controlsCss.left<=o.controlsCss.left+o.outlineCss.width&&o.controlsCss.left<=n.controlsCss.left+n.controlsDimension.width&&n.controlsCss.top+n.outlineCss.top<=o.controlsCss.top+o.outlineCss.top+o.outlineCss.height&&o.controlsCss.top+o.outlineCss.top<=n.controlsCss.top+n.outlineCss.top+n.controlsDimension.height&&n.$controls.addClass("inlineEditorControls-under")})},mouseleave:function(){s.removeClass("inlineEditorControls-hover"),l.find(".inlineEditorControls").removeClass("inlineEditorControls-under")}}),s=t("<ul/>",{"class":"inlineEditorControls",html:t("<li/>",{html:[o,n]})}),t.data(this,"inlineEditor-$controls",s),l.append(s),i.addClass("cms-objectBegin-hasControls"))}),s(),setInterval(s,2e3),c.on("mousemove",function(o){t(e[0].elementFromPoint(o.pageX,o.pageY)).closest(".inlineEditorControls").length>0&&a.css("pointer-events","auto")}),e.on("mousemove",function(o){0===l.find(".popup:visible").length&&0===t(e[0].elementFromPoint(o.pageX,o.pageY)).closest(".inlineEditorControls").length&&a.css("pointer-events","none")}),e.on("click","a[target]",function(){a.css("pointer-events","auto")}),e.on("contextmenu",function(t){var o=l.find(".inlineEditorLogo");a.css({"max-height":o.outerHeight(!0),"max-width":o.outerWidth(!0)}),o.find("a").one("click",function(){return a.css({"max-height":"","max-width":""}),!1})}),i(),setInterval(i,100),r.scroll(function(){t(".inlineEditorControls-main").css("top",r.scrollTop())})}(jQuery,window);