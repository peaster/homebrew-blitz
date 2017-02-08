(function(){var r,n,u,t,e,l,h,o,f,c,i,a,s,v,g,p,b,y,d,x,M,m,z;if(v=.95047,g=1,p=1.08883,a=4*v/(v+15*g+3*p),s=9*g/(v+15*g+3*p),o={R:[3.240454162114103,-1.537138512797715,-.49853140955601],G:[-.96926603050518,1.876010845446694,.041556017530349],B:[.055643430959114,-.20402591351675,1.057225188223179]},f={X:[.41245643908969,.3575760776439,.18043748326639],Y:[.21267285140562,.71515215528781,.072174993306559],Z:[.019333895582329,.1191920258813,.95030407853636]},h=24389/27,e=216/24389,z=function(r,n){var u,t,l,f,c;return t=n/360*2*Math.PI,l=Math.sin(t),u=Math.cos(t),f=Math.pow(r+16,3)/1560896,c=f>e?f:r/h,function(n){var t,e,h,f,i,a,s,v;return v=o[n],h=v[0],f=v[1],i=v[2],s=(12739311*i+117e5*f+11120499*h)*c,a=9608480*i-1921696*f,e=1441272*i-4323816*h,t=(a*l+e*u)*c,function(n){return r*(s-117e5*n)/(t+1921696*l*n)}}},m=function(r){var n,u,t;return n=(Math.pow(r,3)+48*Math.pow(r,2)+768*r+4096)/1560896,u=e,t=n>u?n:r/h,function(r,n){var u,e,l,h,f,c,i;return i=o[r],l=i[0],h=i[1],f=i[2],c=(20*f-4*h)*t+4*n,u=(3*f-9*l)*t,e=Math.atan2(c,u),1===n&&(e+=Math.PI),e}},c=function(r,n){var u,t,e,l,h,o,f,c,i,a,s,v;for(o=1/0,l=z(r,n),s=["R","G","B"],f=0,i=s.length;i>f;f++)for(t=s[f],h=l(t),v=[0,1],c=0,a=v.length;a>c;c++)e=v[c],u=h(e),u>0&&o>u&&(o=u);return o},i=function(r){var n,u,t,e,l,h,o,f,i,a,s,v;for(h=[],t=m(r),s=["R","G","B"],o=0,i=s.length;i>o;o++)for(u=s[o],v=[0,1],f=0,a=v.length;a>f;f++)l=v[f],e=t(u,l),n=c(r,180*e/Math.PI),h.push(n);return Math.min.apply(Math,h)},t=function(r,n){var u,t,e,l;for(t=0,u=e=0,l=r.length-1;l>=0?l>=e:e>=l;u=l>=0?++e:--e)t+=r[u]*n[u];return t},d=function(r,n){var u;return u=Math.pow(10,n),Math.round(r*u)/u},l=function(r){return.0031308>=r?12.92*r:1.055*Math.pow(r,1/2.4)-.055},M=function(r){var n;return n=.055,r>.04045?Math.pow((r+n)/(1+n),2.4):r/12.92},b=function(r){var n,u,t,e,l,h,o;for(r=function(){var n,t,e;for(e=[],n=0,t=r.length;t>n;n++)u=r[n],e.push(d(u,3));return e}(),t=0,l=r.length;l>t;t++){if(n=r[t],-1e-4>n||n>1.0001)throw new Error("Illegal rgb value: "+n);0>n&&(n=0),n>1&&(n=1)}for(o=[],e=0,h=r.length;h>e;e++)n=r[e],o.push(Math.round(255*n));return o},u={xyz:{},luv:{},lch:{},husl:{},huslp:{},rgb:{},hex:{}},u.xyz.rgb=function(r){var n,u,e;return e=l(t(o.R,r)),u=l(t(o.G,r)),n=l(t(o.B,r)),[e,u,n]},u.rgb.xyz=function(r){var n,u,e,l,h,o,c;return e=r[0],u=r[1],n=r[2],c=[M(e),M(u),M(n)],l=t(f.X,c),h=t(f.Y,c),o=t(f.Z,c),[l,h,o]},n=function(r){return e>=r?r/g*h:116*Math.pow(r/g,1/3)-16},r=function(r){return 8>=r?g*r/h:g*Math.pow((r+16)/116,3)},u.xyz.luv=function(r){var u,t,e,l,h,o,f,c;return l=r[0],h=r[1],o=r[2],f=4*l/(l+15*h+3*o),c=9*h/(l+15*h+3*o),u=n(h),0===u?[0,0,0]:(t=13*u*(f-a),e=13*u*(c-s),[u,t,e])},u.luv.xyz=function(n){var u,t,e,l,h,o,f,c;return u=n[0],t=n[1],e=n[2],0===u?[0,0,0]:(f=t/(13*u)+a,c=e/(13*u)+s,h=r(u),l=0-9*h*f/((f-4)*c-f*c),o=(9*h-15*c*h-c*l)/(3*c),[l,h,o])},u.luv.lch=function(r){var n,u,t,e,l,h;return e=r[0],l=r[1],h=r[2],n=Math.pow(Math.pow(l,2)+Math.pow(h,2),.5),t=Math.atan2(h,l),u=360*t/2/Math.PI,0>u&&(u=360+u),[e,n,u]},u.lch.luv=function(r){var n,u,t,e,l,h;return e=r[0],n=r[1],u=r[2],t=u/360*2*Math.PI,l=Math.cos(t)*n,h=Math.sin(t)*n,[e,l,h]},u.husl.lch=function(r){var n,u,t,e,l;return u=r[0],e=r[1],t=r[2],t>99.9999999?[100,0,u]:1e-8>t?[0,0,u]:(l=c(t,u),n=l/100*e,[t,n,u])},u.lch.husl=function(r){var n,u,t,e,l;return t=r[0],n=r[1],u=r[2],t>99.9999999?[u,0,100]:1e-8>t?[u,0,0]:(l=c(t,u),e=n/l*100,[u,e,t])},u.huslp.lch=function(r){var n,u,t,e,l;return u=r[0],e=r[1],t=r[2],t>99.9999999?[100,0,u]:1e-8>t?[0,0,u]:(l=i(t),n=l/100*e,[t,n,u])},u.lch.huslp=function(r){var n,u,t,e,l;return t=r[0],n=r[1],u=r[2],t>99.9999999?[u,0,100]:1e-8>t?[u,0,0]:(l=i(t),e=n/l*100,[u,e,t])},u.rgb.hex=function(r){var n,u,t,e;for(u="#",r=b(r),t=0,e=r.length;e>t;t++)n=r[t],n=n.toString(16),1===n.length&&(n="0"+n),u+=n;return u},u.hex.rgb=function(r){var n,u,t;return"#"===r.charAt(0)&&(r=r.substring(1,7)),t=r.substring(0,2),u=r.substring(2,4),n=r.substring(4,6),[t,u,n].map(function(r){return parseInt(r,16)/255})},u.lch.rgb=function(r){return u.xyz.rgb(u.luv.xyz(u.lch.luv(r)))},u.rgb.lch=function(r){return u.luv.lch(u.xyz.luv(u.rgb.xyz(r)))},u.husl.rgb=function(r){return u.lch.rgb(u.husl.lch(r))},u.rgb.husl=function(r){return u.lch.husl(u.rgb.lch(r))},u.huslp.rgb=function(r){return u.lch.rgb(u.huslp.lch(r))},u.rgb.huslp=function(r){return u.lch.huslp(u.rgb.lch(r))},y={},"undefined"!=typeof require&&null!==require)try{x=require("stylus"),y=function(){return function(r){return r.define("husl",function(r,n,t,e){var l,h,o,f;return f=b(u.husl.rgb([r.val,n.val,t.val])),o=f[0],h=f[1],l=f[2],new x.nodes.RGBA(o,h,l,null!=e?e.val:1)}),r.define("huslp",function(r,n,t,e){var l,h,o,f;return f=b(u.huslp.rgb([r.val,n.val,t.val])),o=f[0],h=f[1],l=f[2],new x.nodes.RGBA(o,h,l,null!=e?e.val:1)})}}}catch(w){}y.fromRGB=function(r,n,t){return u.rgb.husl([r,n,t])},y.fromHex=function(r){return u.rgb.husl(u.hex.rgb(r))},y.toRGB=function(r,n,t){return u.husl.rgb([r,n,t])},y.toHex=function(r,n,t){return u.rgb.hex(u.husl.rgb([r,n,t]))},y.p={},y.p.toRGB=function(r,n,t){return u.xyz.rgb(u.luv.xyz(u.lch.luv(u.huslp.lch([r,n,t]))))},y.p.toHex=function(r,n,t){return u.rgb.hex(u.xyz.rgb(u.luv.xyz(u.lch.luv(u.huslp.lch([r,n,t])))))},y.p.fromRGB=function(r,n,t){return u.lch.huslp(u.luv.lch(u.xyz.luv(u.rgb.xyz([r,n,t]))))},y.p.fromHex=function(r){return u.lch.huslp(u.luv.lch(u.xyz.luv(u.rgb.xyz(u.hex.rgb(r)))))},y._conv=u,y._round=d,y._maxChroma=c,y._maxChromaD=i,y._hradExtremum=m,y._rgbPrepare=b,"undefined"!=typeof module&&null!==module||"undefined"!=typeof jQuery&&null!==jQuery||"undefined"!=typeof requirejs&&null!==requirejs||(this.HUSL=y),"undefined"!=typeof module&&null!==module&&(module.exports=y),"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.husl=y),"undefined"!=typeof requirejs&&null!==requirejs&&"undefined"!=typeof define&&null!==define&&define(y)}).call(this);