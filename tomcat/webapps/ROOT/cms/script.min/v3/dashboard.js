define(["jquery","v3/rtc"],function(e,t){function a(){e(".dashboard-widget").each(function(){var t=e(this),a=t.attr("data-dashboard-widget-url");a&&e.ajax({cache:!1,type:"get",url:a,complete:function(e){t.html(e.responseText),t.trigger("create"),t.trigger("load"),t.trigger("frame-load")}})})}var r;t.receive("com.psddev.cms.tool.page.content.PublishBroadcast",function(){r&&clearTimeout(a),r=setTimeout(function(){r=null,a()},5e3)})});