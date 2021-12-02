import{o as Ar,c as Br}from"./vendor.434dc5a9.js";import{_ as jr}from"./index.7cc57ad0.js";var lr={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Q={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},_r=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],N={CSS:{},springs:{}};function D(r,e,n){return Math.min(Math.max(r,e),n)}function z(r,e){return r.indexOf(e)>-1}function K(r,e){return r.apply(null,e)}var c={arr:function(r){return Array.isArray(r)},obj:function(r){return z(Object.prototype.toString.call(r),"Object")},pth:function(r){return c.obj(r)&&r.hasOwnProperty("totalLength")},svg:function(r){return r instanceof SVGElement},inp:function(r){return r instanceof HTMLInputElement},dom:function(r){return r.nodeType||c.svg(r)},str:function(r){return typeof r=="string"},fnc:function(r){return typeof r=="function"},und:function(r){return typeof r=="undefined"},nil:function(r){return c.und(r)||r===null},hex:function(r){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r)},rgb:function(r){return/^rgb/.test(r)},hsl:function(r){return/^hsl/.test(r)},col:function(r){return c.hex(r)||c.rgb(r)||c.hsl(r)},key:function(r){return!lr.hasOwnProperty(r)&&!Q.hasOwnProperty(r)&&r!=="targets"&&r!=="keyframes"}};function vr(r){var e=/\(([^)]+)\)/.exec(r);return e?e[1].split(",").map(function(n){return parseFloat(n)}):[]}function dr(r,e){var n=vr(r),a=D(c.und(n[0])?1:n[0],.1,100),t=D(c.und(n[1])?100:n[1],.1,100),u=D(c.und(n[2])?10:n[2],.1,100),o=D(c.und(n[3])?0:n[3],.1,100),s=Math.sqrt(t/a),i=u/(2*Math.sqrt(t*a)),m=i<1?s*Math.sqrt(1-i*i):0,f=1,l=i<1?(i*s+-o)/m:-o+s;function h(p){var v=e?e*p/1e3:p;return i<1?v=Math.exp(-v*i*s)*(f*Math.cos(m*v)+l*Math.sin(m*v)):v=(f+l*v)*Math.exp(-v*s),p===0||p===1?p:1-v}function w(){var p=N.springs[r];if(p)return p;for(var v=1/6,b=0,M=0;;)if(b+=v,h(b)===1){if(M++,M>=16)break}else M=0;var g=b*v*1e3;return N.springs[r]=g,g}return e?h:w}function zr(r){return r===void 0&&(r=10),function(e){return Math.ceil(D(e,1e-6,1)*r)*(1/r)}}var Hr=function(){var r=11,e=1/(r-1);function n(f,l){return 1-3*l+3*f}function a(f,l){return 3*l-6*f}function t(f){return 3*f}function u(f,l,h){return((n(l,h)*f+a(l,h))*f+t(l))*f}function o(f,l,h){return 3*n(l,h)*f*f+2*a(l,h)*f+t(l)}function s(f,l,h,w,p){var v,b,M=0;do b=l+(h-l)/2,v=u(b,w,p)-f,v>0?h=b:l=b;while(Math.abs(v)>1e-7&&++M<10);return b}function i(f,l,h,w){for(var p=0;p<4;++p){var v=o(l,h,w);if(v===0)return l;var b=u(l,h,w)-f;l-=b/v}return l}function m(f,l,h,w){if(!(0<=f&&f<=1&&0<=h&&h<=1))return;var p=new Float32Array(r);if(f!==l||h!==w)for(var v=0;v<r;++v)p[v]=u(v*e,f,h);function b(M){for(var g=0,d=1,P=r-1;d!==P&&p[d]<=M;++d)g+=e;--d;var O=(M-p[d])/(p[d+1]-p[d]),x=g+O*e,S=o(x,f,h);return S>=.001?i(M,x,f,h):S===0?x:s(M,g,g+e,f,h)}return function(M){return f===l&&h===w||M===0||M===1?M:u(b(M),l,w)}}return m}(),gr=function(){var r={linear:function(){return function(a){return a}}},e={Sine:function(){return function(a){return 1-Math.cos(a*Math.PI/2)}},Circ:function(){return function(a){return 1-Math.sqrt(1-a*a)}},Back:function(){return function(a){return a*a*(3*a-2)}},Bounce:function(){return function(a){for(var t,u=4;a<((t=Math.pow(2,--u))-1)/11;);return 1/Math.pow(4,3-u)-7.5625*Math.pow((t*3-2)/22-a,2)}},Elastic:function(a,t){a===void 0&&(a=1),t===void 0&&(t=.5);var u=D(a,1,10),o=D(t,.1,2);return function(s){return s===0||s===1?s:-u*Math.pow(2,10*(s-1))*Math.sin((s-1-o/(Math.PI*2)*Math.asin(1/u))*(Math.PI*2)/o)}}},n=["Quad","Cubic","Quart","Quint","Expo"];return n.forEach(function(a,t){e[a]=function(){return function(u){return Math.pow(u,t+2)}}}),Object.keys(e).forEach(function(a){var t=e[a];r["easeIn"+a]=t,r["easeOut"+a]=function(u,o){return function(s){return 1-t(u,o)(1-s)}},r["easeInOut"+a]=function(u,o){return function(s){return s<.5?t(u,o)(s*2)/2:1-t(u,o)(s*-2+2)/2}},r["easeOutIn"+a]=function(u,o){return function(s){return s<.5?(1-t(u,o)(1-s*2))/2:(t(u,o)(s*2-1)+1)/2}}}),r}();function J(r,e){if(c.fnc(r))return r;var n=r.split("(")[0],a=gr[n],t=vr(r);switch(n){case"spring":return dr(r,e);case"cubicBezier":return K(Hr,t);case"steps":return K(zr,t);default:return K(a,t)}}function hr(r){try{var e=document.querySelectorAll(r);return e}catch{return}}function R(r,e){for(var n=r.length,a=arguments.length>=2?arguments[1]:void 0,t=[],u=0;u<n;u++)if(u in r){var o=r[u];e.call(a,o,u,r)&&t.push(o)}return t}function U(r){return r.reduce(function(e,n){return e.concat(c.arr(n)?U(n):n)},[])}function mr(r){return c.arr(r)?r:(c.str(r)&&(r=hr(r)||r),r instanceof NodeList||r instanceof HTMLCollection?[].slice.call(r):[r])}function Y(r,e){return r.some(function(n){return n===e})}function G(r){var e={};for(var n in r)e[n]=r[n];return e}function X(r,e){var n=G(r);for(var a in r)n[a]=e.hasOwnProperty(a)?e[a]:r[a];return n}function W(r,e){var n=G(r);for(var a in e)n[a]=c.und(r[a])?e[a]:r[a];return n}function Nr(r){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);return e?"rgba("+e[1]+",1)":r}function Rr(r){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=r.replace(e,function(s,i,m,f){return i+i+m+m+f+f}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),t=parseInt(a[1],16),u=parseInt(a[2],16),o=parseInt(a[3],16);return"rgba("+t+","+u+","+o+",1)"}function Ur(r){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(r)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(r),n=parseInt(e[1],10)/360,a=parseInt(e[2],10)/100,t=parseInt(e[3],10)/100,u=e[4]||1;function o(h,w,p){return p<0&&(p+=1),p>1&&(p-=1),p<1/6?h+(w-h)*6*p:p<1/2?w:p<2/3?h+(w-h)*(2/3-p)*6:h}var s,i,m;if(a==0)s=i=m=t;else{var f=t<.5?t*(1+a):t+a-t*a,l=2*t-f;s=o(l,f,n+1/3),i=o(l,f,n),m=o(l,f,n-1/3)}return"rgba("+s*255+","+i*255+","+m*255+","+u+")"}function Wr(r){if(c.rgb(r))return Nr(r);if(c.hex(r))return Rr(r);if(c.hsl(r))return Ur(r)}function E(r){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(r);if(e)return e[1]}function $r(r){if(z(r,"translate")||r==="perspective")return"px";if(z(r,"rotate")||z(r,"skew"))return"deg"}function rr(r,e){return c.fnc(r)?r(e.target,e.id,e.total):r}function k(r,e){return r.getAttribute(e)}function er(r,e,n){var a=E(e);if(Y([n,"deg","rad","turn"],a))return e;var t=N.CSS[e+n];if(!c.und(t))return t;var u=100,o=document.createElement(r.tagName),s=r.parentNode&&r.parentNode!==document?r.parentNode:document.body;s.appendChild(o),o.style.position="absolute",o.style.width=u+n;var i=u/o.offsetWidth;s.removeChild(o);var m=i*parseFloat(e);return N.CSS[e+n]=m,m}function pr(r,e,n){if(e in r.style){var a=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),t=r.style[e]||getComputedStyle(r).getPropertyValue(a)||"0";return n?er(r,t,n):t}}function nr(r,e){if(c.dom(r)&&!c.inp(r)&&(!c.nil(k(r,e))||c.svg(r)&&r[e]))return"attribute";if(c.dom(r)&&Y(_r,e))return"transform";if(c.dom(r)&&e!=="transform"&&pr(r,e))return"css";if(r[e]!=null)return"object"}function yr(r){if(!!c.dom(r)){for(var e=r.style.transform||"",n=/(\w+)\(([^)]*)\)/g,a=new Map,t;t=n.exec(e);)a.set(t[1],t[2]);return a}}function qr(r,e,n,a){var t=z(e,"scale")?1:0+$r(e),u=yr(r).get(e)||t;return n&&(n.transforms.list.set(e,u),n.transforms.last=e),a?er(r,u,a):u}function tr(r,e,n,a){switch(nr(r,e)){case"transform":return qr(r,e,a,n);case"css":return pr(r,e,n);case"attribute":return k(r,e);default:return r[e]||0}}function ar(r,e){var n=/^(\*=|\+=|-=)/.exec(r);if(!n)return r;var a=E(r)||0,t=parseFloat(e),u=parseFloat(r.replace(n[0],""));switch(n[0][0]){case"+":return t+u+a;case"-":return t-u+a;case"*":return t*u+a}}function br(r,e){if(c.col(r))return Wr(r);if(/\s/g.test(r))return r;var n=E(r),a=n?r.substr(0,r.length-n.length):r;return e?a+e:a}function ir(r,e){return Math.sqrt(Math.pow(e.x-r.x,2)+Math.pow(e.y-r.y,2))}function Zr(r){return Math.PI*2*k(r,"r")}function Qr(r){return k(r,"width")*2+k(r,"height")*2}function Kr(r){return ir({x:k(r,"x1"),y:k(r,"y1")},{x:k(r,"x2"),y:k(r,"y2")})}function xr(r){for(var e=r.points,n=0,a,t=0;t<e.numberOfItems;t++){var u=e.getItem(t);t>0&&(n+=ir(a,u)),a=u}return n}function Jr(r){var e=r.points;return xr(r)+ir(e.getItem(e.numberOfItems-1),e.getItem(0))}function Mr(r){if(r.getTotalLength)return r.getTotalLength();switch(r.tagName.toLowerCase()){case"circle":return Zr(r);case"rect":return Qr(r);case"line":return Kr(r);case"polyline":return xr(r);case"polygon":return Jr(r)}}function Yr(r){var e=Mr(r);return r.setAttribute("stroke-dasharray",e),e}function Gr(r){for(var e=r.parentNode;c.svg(e)&&c.svg(e.parentNode);)e=e.parentNode;return e}function Tr(r,e){var n=e||{},a=n.el||Gr(r),t=a.getBoundingClientRect(),u=k(a,"viewBox"),o=t.width,s=t.height,i=n.viewBox||(u?u.split(" "):[0,0,o,s]);return{el:a,viewBox:i,x:i[0]/1,y:i[1]/1,w:o,h:s,vW:i[2],vH:i[3]}}function Xr(r,e){var n=c.str(r)?hr(r)[0]:r,a=e||100;return function(t){return{property:t,el:n,svg:Tr(n),totalLength:Mr(n)*(a/100)}}}function re(r,e,n){function a(f){f===void 0&&(f=0);var l=e+f>=1?e+f:0;return r.el.getPointAtLength(l)}var t=Tr(r.el,r.svg),u=a(),o=a(-1),s=a(1),i=n?1:t.w/t.vW,m=n?1:t.h/t.vH;switch(r.property){case"x":return(u.x-t.x)*i;case"y":return(u.y-t.y)*m;case"angle":return Math.atan2(s.y-o.y,s.x-o.x)*180/Math.PI}}function wr(r,e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,a=br(c.pth(r)?r.totalLength:r,e)+"";return{original:a,numbers:a.match(n)?a.match(n).map(Number):[0],strings:c.str(r)||e?a.split(n):[]}}function ur(r){var e=r?U(c.arr(r)?r.map(mr):mr(r)):[];return R(e,function(n,a,t){return t.indexOf(n)===a})}function Pr(r){var e=ur(r);return e.map(function(n,a){return{target:n,id:a,total:e.length,transforms:{list:yr(n)}}})}function ee(r,e){var n=G(e);if(/^spring/.test(n.easing)&&(n.duration=dr(n.easing)),c.arr(r)){var a=r.length,t=a===2&&!c.obj(r[0]);t?r={value:r}:c.fnc(e.duration)||(n.duration=e.duration/a)}var u=c.arr(r)?r:[r];return u.map(function(o,s){var i=c.obj(o)&&!c.pth(o)?o:{value:o};return c.und(i.delay)&&(i.delay=s?0:e.delay),c.und(i.endDelay)&&(i.endDelay=s===u.length-1?e.endDelay:0),i}).map(function(o){return W(o,n)})}function ne(r){for(var e=R(U(r.map(function(u){return Object.keys(u)})),function(u){return c.key(u)}).reduce(function(u,o){return u.indexOf(o)<0&&u.push(o),u},[]),n={},a=function(u){var o=e[u];n[o]=r.map(function(s){var i={};for(var m in s)c.key(m)?m==o&&(i.value=s[m]):i[m]=s[m];return i})},t=0;t<e.length;t++)a(t);return n}function te(r,e){var n=[],a=e.keyframes;a&&(e=W(ne(a),e));for(var t in e)c.key(t)&&n.push({name:t,tweens:ee(e[t],r)});return n}function ae(r,e){var n={};for(var a in r){var t=rr(r[a],e);c.arr(t)&&(t=t.map(function(u){return rr(u,e)}),t.length===1&&(t=t[0])),n[a]=t}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function ie(r,e){var n;return r.tweens.map(function(a){var t=ae(a,e),u=t.value,o=c.arr(u)?u[1]:u,s=E(o),i=tr(e.target,r.name,s,e),m=n?n.to.original:i,f=c.arr(u)?u[0]:m,l=E(f)||E(i),h=s||l;return c.und(o)&&(o=m),t.from=wr(f,h),t.to=wr(ar(o,f),h),t.start=n?n.end:0,t.end=t.start+t.delay+t.duration+t.endDelay,t.easing=J(t.easing,t.duration),t.isPath=c.pth(u),t.isPathTargetInsideSVG=t.isPath&&c.svg(e.target),t.isColor=c.col(t.from.original),t.isColor&&(t.round=1),n=t,t})}var Ir={css:function(r,e,n){return r.style[e]=n},attribute:function(r,e,n){return r.setAttribute(e,n)},object:function(r,e,n){return r[e]=n},transform:function(r,e,n,a,t){if(a.list.set(e,n),e===a.last||t){var u="";a.list.forEach(function(o,s){u+=s+"("+o+") "}),r.style.transform=u}}};function Cr(r,e){var n=Pr(r);n.forEach(function(a){for(var t in e){var u=rr(e[t],a),o=a.target,s=E(u),i=tr(o,t,s,a),m=s||E(i),f=ar(br(u,m),i),l=nr(o,t);Ir[l](o,t,f,a.transforms,!0)}})}function ue(r,e){var n=nr(r.target,e.name);if(n){var a=ie(e,r),t=a[a.length-1];return{type:n,property:e.name,animatable:r,tweens:a,duration:t.end,delay:a[0].delay,endDelay:t.endDelay}}}function oe(r,e){return R(U(r.map(function(n){return e.map(function(a){return ue(n,a)})})),function(n){return!c.und(n)})}function Dr(r,e){var n=r.length,a=function(u){return u.timelineOffset?u.timelineOffset:0},t={};return t.duration=n?Math.max.apply(Math,r.map(function(u){return a(u)+u.duration})):e.duration,t.delay=n?Math.min.apply(Math,r.map(function(u){return a(u)+u.delay})):e.delay,t.endDelay=n?t.duration-Math.max.apply(Math,r.map(function(u){return a(u)+u.duration-u.endDelay})):e.endDelay,t}var kr=0;function se(r){var e=X(lr,r),n=X(Q,r),a=te(n,r),t=Pr(r.targets),u=oe(t,a),o=Dr(u,n),s=kr;return kr++,W(e,{id:s,children:[],animatables:t,animations:u,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var C=[],Er=function(){var r;function e(){!r&&(!Or()||!y.suspendWhenDocumentHidden)&&C.length>0&&(r=requestAnimationFrame(n))}function n(t){for(var u=C.length,o=0;o<u;){var s=C[o];s.paused?(C.splice(o,1),u--):(s.tick(t),o++)}r=o>0?requestAnimationFrame(n):void 0}function a(){!y.suspendWhenDocumentHidden||(Or()?r=cancelAnimationFrame(r):(C.forEach(function(t){return t._onDocumentVisibility()}),Er()))}return typeof document!="undefined"&&document.addEventListener("visibilitychange",a),e}();function Or(){return!!document&&document.hidden}function y(r){r===void 0&&(r={});var e=0,n=0,a=0,t,u=0,o=null;function s(g){var d=window.Promise&&new Promise(function(P){return o=P});return g.finished=d,d}var i=se(r);s(i);function m(){var g=i.direction;g!=="alternate"&&(i.direction=g!=="normal"?"normal":"reverse"),i.reversed=!i.reversed,t.forEach(function(d){return d.reversed=i.reversed})}function f(g){return i.reversed?i.duration-g:g}function l(){e=0,n=f(i.currentTime)*(1/y.speed)}function h(g,d){d&&d.seek(g-d.timelineOffset)}function w(g){if(i.reversePlayback)for(var P=u;P--;)h(g,t[P]);else for(var d=0;d<u;d++)h(g,t[d])}function p(g){for(var d=0,P=i.animations,O=P.length;d<O;){var x=P[d],S=x.animatable,A=x.tweens,V=A.length-1,T=A[V];V&&(T=R(A,function(Lr){return g<Lr.end})[0]||T);for(var F=D(g-T.start-T.delay,0,T.duration)/T.duration,H=isNaN(F)?1:T.easing(F),I=T.to.strings,$=T.round,q=[],Fr=T.to.numbers.length,L=void 0,B=0;B<Fr;B++){var j=void 0,or=T.to.numbers[B],sr=T.from.numbers[B]||0;T.isPath?j=re(T.value,H*or,T.isPathTargetInsideSVG):j=sr+H*(or-sr),$&&(T.isColor&&B>2||(j=Math.round(j*$)/$)),q.push(j)}var fr=I.length;if(!fr)L=q[0];else{L=I[0];for(var _=0;_<fr;_++){I[_];var cr=I[_+1],Z=q[_];isNaN(Z)||(cr?L+=Z+cr:L+=Z+" ")}}Ir[x.type](S.target,x.property,L,S.transforms),x.currentValue=L,d++}}function v(g){i[g]&&!i.passThrough&&i[g](i)}function b(){i.remaining&&i.remaining!==!0&&i.remaining--}function M(g){var d=i.duration,P=i.delay,O=d-i.endDelay,x=f(g);i.progress=D(x/d*100,0,100),i.reversePlayback=x<i.currentTime,t&&w(x),!i.began&&i.currentTime>0&&(i.began=!0,v("begin")),!i.loopBegan&&i.currentTime>0&&(i.loopBegan=!0,v("loopBegin")),x<=P&&i.currentTime!==0&&p(0),(x>=O&&i.currentTime!==d||!d)&&p(d),x>P&&x<O?(i.changeBegan||(i.changeBegan=!0,i.changeCompleted=!1,v("changeBegin")),v("change"),p(x)):i.changeBegan&&(i.changeCompleted=!0,i.changeBegan=!1,v("changeComplete")),i.currentTime=D(x,0,d),i.began&&v("update"),g>=d&&(n=0,b(),i.remaining?(e=a,v("loopComplete"),i.loopBegan=!1,i.direction==="alternate"&&m()):(i.paused=!0,i.completed||(i.completed=!0,v("loopComplete"),v("complete"),!i.passThrough&&"Promise"in window&&(o(),s(i)))))}return i.reset=function(){var g=i.direction;i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.loopBegan=!1,i.changeBegan=!1,i.completed=!1,i.changeCompleted=!1,i.reversePlayback=!1,i.reversed=g==="reverse",i.remaining=i.loop,t=i.children,u=t.length;for(var d=u;d--;)i.children[d].reset();(i.reversed&&i.loop!==!0||g==="alternate"&&i.loop===1)&&i.remaining++,p(i.reversed?i.duration:0)},i._onDocumentVisibility=l,i.set=function(g,d){return Cr(g,d),i},i.tick=function(g){a=g,e||(e=a),M((a+(n-e))*y.speed)},i.seek=function(g){M(f(g))},i.pause=function(){i.paused=!0,l()},i.play=function(){!i.paused||(i.completed&&i.reset(),i.paused=!1,C.push(i),l(),Er())},i.reverse=function(){m(),i.completed=!i.reversed,l()},i.restart=function(){i.reset(),i.play()},i.remove=function(g){var d=ur(g);Vr(d,i)},i.reset(),i.autoplay&&i.play(),i}function Sr(r,e){for(var n=e.length;n--;)Y(r,e[n].animatable.target)&&e.splice(n,1)}function Vr(r,e){var n=e.animations,a=e.children;Sr(r,n);for(var t=a.length;t--;){var u=a[t],o=u.animations;Sr(r,o),!o.length&&!u.children.length&&a.splice(t,1)}!n.length&&!a.length&&e.pause()}function fe(r){for(var e=ur(r),n=C.length;n--;){var a=C[n];Vr(e,a)}}function ce(r,e){e===void 0&&(e={});var n=e.direction||"normal",a=e.easing?J(e.easing):null,t=e.grid,u=e.axis,o=e.from||0,s=o==="first",i=o==="center",m=o==="last",f=c.arr(r),l=parseFloat(f?r[0]:r),h=f?parseFloat(r[1]):0,w=E(f?r[1]:r)||0,p=e.start||0+(f?l:0),v=[],b=0;return function(M,g,d){if(s&&(o=0),i&&(o=(d-1)/2),m&&(o=d-1),!v.length){for(var P=0;P<d;P++){if(!t)v.push(Math.abs(o-P));else{var O=i?(t[0]-1)/2:o%t[0],x=i?(t[1]-1)/2:Math.floor(o/t[0]),S=P%t[0],A=Math.floor(P/t[0]),V=O-S,T=x-A,F=Math.sqrt(V*V+T*T);u==="x"&&(F=-V),u==="y"&&(F=-T),v.push(F)}b=Math.max.apply(Math,v)}a&&(v=v.map(function(I){return a(I/b)*b})),n==="reverse"&&(v=v.map(function(I){return u?I<0?I*-1:-I:Math.abs(b-I)}))}var H=f?(h-l)/b:l;return p+H*(Math.round(v[g]*100)/100)+w}}function le(r){r===void 0&&(r={});var e=y(r);return e.duration=0,e.add=function(n,a){var t=C.indexOf(e),u=e.children;t>-1&&C.splice(t,1);function o(h){h.passThrough=!0}for(var s=0;s<u.length;s++)o(u[s]);var i=W(n,X(Q,r));i.targets=i.targets||r.targets;var m=e.duration;i.autoplay=!1,i.direction=e.direction,i.timelineOffset=c.und(a)?m:ar(a,m),o(e),e.seek(i.timelineOffset);var f=y(i);o(f),u.push(f);var l=Dr(u,r);return e.delay=l.delay,e.endDelay=l.endDelay,e.duration=l.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}y.version="3.2.1";y.speed=1;y.suspendWhenDocumentHidden=!0;y.running=C;y.remove=fe;y.get=tr;y.set=Cr;y.convertPx=er;y.path=Xr;y.setDashoffset=Yr;y.stagger=ce;y.timeline=le;y.easing=J;y.penner=gr;y.random=function(r,e){return Math.floor(Math.random()*(e-r+1))+r};const ve={props:{value:{type:[Number,String],default:"0",required:!0},formatValue:{type:Function,default:r=>r},easing:{type:String,default:"linear"},duration:{type:Number,default:1e3},update:Function,begin:Function,complete:Function,run:Function,delay:{type:Number,default:0},round:{default:null}},data(){return{animatedValue:0}},mounted(){this.animateValue(this.value)},watch:{value(r){this.animateValue(r)}},methods:{animateValue(r){const{begin:e,easing:n,duration:a,complete:t,update:u,run:o,delay:s,round:i}=this;y({targets:this,animatedValue:r,duration:a,easing:n,update:u,begin:e,complete:t,run:o,delay:s,round:i})}}},de=["innerHTML"];function ge(r,e,n,a,t,u){return Ar(),Br("span",{innerHTML:n.formatValue(Number(t.animatedValue))},null,8,de)}var pe=jr(ve,[["render",ge]]);export{pe as A};