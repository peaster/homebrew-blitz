define(["jquery","bsp-utils"],function(e,t){t.onDomInsert(document,"select:not([multiple])",{insert:function(t){var n=e(t).find("option");if(n.length>0){var i=e(t),o=!1;if(i.find("option").each(function(){return this.defaultSelected?(o=!0,!1):void 0}),!o){var a=i.val();n.eq(0).prop("defaultSelected",!0),i.val(a)}}}}),e(document).on("change",".inputContainer",function(){var t=e(this),n=!1;t.find("input, textarea").each(function(){return this.defaultValue!==this.value?(n=!0,!1):void 0}),n||t.find("option").each(function(){return this.defaultSelected!==this.selected?(n=!0,!1):void 0}),t.toggleClass("state-changed",n)})});