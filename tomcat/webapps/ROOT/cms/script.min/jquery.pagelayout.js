!function(t,e,n){var i=e.document,a=t(e);t.plugin2("pageLayout",{_create:function(e){var n,c,s,o=t(e),d=o.attr("data-pageid"),l=!1,p=t("<div/>",{"class":"pageLayout-visual"});p.bind("updateJson",function(){o.val(JSON.stringify(n,null,2))});var r=function(){p.empty(),s(p,n.outermostSection),p.find(".section > .hat").hide(),p.trigger("updateJson")};p.mousemove(t.throttle(100,function(e){if(!l){var n,c=p.find(".section > .hat"),s=i.elementFromPoint(e.pageX-a.scrollLeft(),e.pageY-a.scrollTop());s&&(n=t(s).closest(".section").find("> .hat"),c=c.not(n)),c.hide(),n&&n.show()}})),s=function(e,n,i){var a=t("<div/>",{"class":"section","data-flex":1});n.page=n.page||d,a.data("definition",n);var o=t("<div/>",{"class":"hat"}),l=t("<div/>",{"class":"heading"}),v=t("<div/>",{"class":"content","data-flex":1});if(i){var u=i.children;if(u){var m=u.length;if(m>1){var h={};t.each(["Up","Down","Left","Right"],function(e,n){o.append(h[n]=t("<span/>",{"class":"move"+n+"Button",text:n}))}),h.Up.add(h.Left).click(function(){for(var t=1;m>t;++t)if(u[t]===n){var e=u[t-1];u[t-1]=n,u[t]=e,r();break}}),h.Down.add(h.Right).click(function(){for(var t=0;m-1>t;++t)if(u[t]===n){var e=u[t+1];u[t+1]=n,u[t]=e,r();break}})}}}o.append(t("<a/>",{"class":"settingsButton",text:"Settings",click:function(){return c(t(this),n),!1}}));var g=t("<span/>",{"class":"removeButton",text:"Remove",click:function(){a.is(".toBeRemoved")?(n._isIgnore=!1,p.trigger("updateJson"),a.removeClass("toBeRemoved"),t(this).text("Remove").attr("src",CONTEXT_PATH+"style/icon/delete.png")):(n._isIgnore=!0,p.trigger("updateJson"),a.addClass("toBeRemoved"),t(this).text("Restore").attr("src",CONTEXT_PATH+"style/icon/add.png"))}});o.append(g),n._isIgnore&&g.click();var S=!0;"com.psddev.cms.db.HorizontalContainerSection"===n._type?a.add(v).addClass("horizontal"):"com.psddev.cms.db.VerticalContainerSection"===n._type?a.add(v).addClass("vertical"):("com.psddev.cms.db.MainSection"===n._type&&a.addClass("main"),S=!1),n.isShareable&&a.addClass("shared");var b=t("<div/>",{"class":"name"});if(n.name?b.text(n.name):(b.addClass("anonymous"),b.text("Unnamed "+(S?"Container":"Section"))),l.append(b),"com.psddev.cms.db.ContentSection"===n._type){var f=t("<a/>",{"class":"contentButton",text:n.contentTypeLabel&&n.contentLabel?n.contentTypeLabel+": "+n.contentLabel:"Select Content"});if(e.closest(".contentForm").length>0&&n.content){var C=location.href.replace(/&contentId=[^&]*/,"");C=C.replace(/\?contentId=[^&]*/,"?"),C+="&contentId="+n.content,f.attr("href",C),f.attr("target","_top")}else f.attr("href",CONTEXT_PATH+"content/sectionContent.jsp?id="+(n.content||"")),f.attr("target","contentSectionContent");l.append(f),n.contentTypeLabel&&n.contentLabel&&l.append(t("<a/>",{"class":"removeContentButton",text:"Remove",click:function(){n.content=null,n.contentTypeLabel=null,n.contentLabel=null,r()}}))}a.append(o),a.append(l),a.append(v),e.append(a),S&&(l.append(t("<span/>",{"class":"addButton",click:function(){var t={_type:"com.psddev.cms.db.ScriptSection"};(n.children=n.children||[]).push(t),r()}})),n.children&&t.each(n.children,function(t,e){s(v,e,n)})),"com.psddev.cms.db.MainSection"===n._type&&a.parentsUntil(".pageLayout-visual").add(a).filter("[data-flex]").attr("data-flex",2.5)},c=function(e,n){var i=t("#sectionSettings");if(0===i.length){var a='<option value=""></option><option value="JSP">JSP</option><option value="RawText">Raw Text</option>';i=t('<div id="sectionSettings"><h1>Section: <strong class="name"></strong></h1><div class="inputContainer"><div class="inputLabel">Shareable?</div><div class="inputSmall"><input name="isShareable" type="checkbox"></div></div><div class="inputContainer"><div class="inputLabel">Cache Duration (in Milliseconds)</div><div class="inputSmall"><input name="cacheDuration" type="text"></div></div><div class="inputContainer"><div class="inputLabel">Type</div><div class="inputSmall"><select class="toggleable" name="_type"><option data-hide="#sectionSettings .i" data-show="#sectionSettings .hc" value="com.psddev.cms.db.HorizontalContainerSection">Container (Horizontal)</option><option data-hide="#sectionSettings .i" data-show="#sectionSettings .vc" value="com.psddev.cms.db.VerticalContainerSection">Container (Vertical)</option><option data-hide="#sectionSettings .i" data-show="#sectionSettings .s" value="com.psddev.cms.db.ScriptSection">Script</option><option data-hide="#sectionSettings .i" data-show="#sectionSettings .c" value="com.psddev.cms.db.ContentSection">Script (with Content)</option><option data-hide="#sectionSettings .i" data-show="#sectionSettings .s" value="com.psddev.cms.db.MainSection">Script (with Main Content)</option></select></div></div><div class="inputContainer i hc vc s c"><div class="inputLabel">Name</div><div class="inputSmall"><input name="name" type="text"></div></div><div class="inputContainer i s c"><div class="inputLabel">Engine</div><div class="inputSmall"><select name="engine">'+a+'</select></div></div><div class="inputContainer i s c"><div class="inputLabel">Script</div><div class="inputSmall"><input name="script" type="text"></div></div><div class="inputContainer i hc vc"><div class="inputLabel">Begin Engine</div><div class="inputSmall"><select name="beginEngine">'+a+'</select></div></div><div class="inputContainer i hc vc"><div class="inputLabel">Begin Script</div><div class="inputSmall"><input name="beginScript" type="text"></div></div><div class="inputContainer i hc vc"><div class="inputLabel">End Engine</div><div class="inputSmall"><select name="endEngine">'+a+'</select></div></div><div class="inputContainer i hc vc"><div class="inputLabel">End Script</div><div class="inputSmall"><input name="endScript" type="text"></div></div><div class="buttons"><a class="button continueButton" href="#">Continue Editing</a></div></div>'),i.find(".continueButton").click(function(){return i.popup("close"),!1}),t("body").append(i),i.popup()}i.popup("source",e),i.popup("open"),l=!0,i.find("> h1 > .name").text(n.name||"Unnamed"),t.each("isShareable cacheDuration _type name engine script beginEngine beginScript endEngine endScript".split(" "),function(t,e){var a=i.find(":input[name="+e+"]");a.is(":checkbox")?n[e]?a.attr("checked","checked"):a.removeAttr("checked"):a.val(n[e]||""),a.change()});var c=i.popup("container");c.unbind("close.section"),c.bind("close.section",function(){t.each("isShareable cacheDuration _type name engine script beginEngine beginScript endEngine endScript".split(" "),function(t,e){var a=i.find(":input[name="+e+"]");a.is(":checkbox")?n[e]=a.is(":checked"):"cacheDuration"===e?n[e]=a.val()||0:n[e]=a.val()}),r(),l=!1})};var v=t("<div/>",{"class":"pageLayout-tabs"}),u=t("<span/>",{"class":"visualButton",text:"Visual",click:function(){try{n=t.parseJSON(o.val())}catch(e){}n=t.extend(!0,{outermostSection:{_type:"com.psddev.cms.db.ScriptSection"}},n),o.hide(),m.removeClass("selected"),p.show(),u.addClass("selected"),r()}}),m=t("<span/>",{"class":"jsonButton",text:"JSON",click:function(){p.hide(),u.removeClass("selected"),o.show(),m.addClass("selected")}});v.append(u),v.append(m),o.before(v),o.before(p),u.click()}})}(jQuery,window);