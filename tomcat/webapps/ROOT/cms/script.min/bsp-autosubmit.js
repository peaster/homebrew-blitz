!function(t,i){"function"==typeof define&&define.amd?define(["jquery","bsp-utils"],i):i(t.jQuery,t.bsp_utils,t)}(this,function(t,i,e){return i.plugin(e,"bsp","autoSubmit",{_defaultOptions:{disableAutocomplete:!0,inputSubmitDelay:100,submitThrottle:500},_each:function(e){var o,n,u=this,l=t(e),p=l.closest("form");o=i.throttle(u.option(e,"submitThrottle"),function(){var t=p.serialize();n!==t&&(n=t,p.submit())});var s,f,a=u.option(e,"inputSubmitDelay");s=0>=a?o:function(){clearTimeout(f),f=setTimeout(function(){f=null,o()},a)},u.option(e,"disableAutoComplete")&&(e===p[0]?p.find(":input"):l).prop("autocomplete","off"),u._on(e,"change",o),u._on(e,"input",s)}})});