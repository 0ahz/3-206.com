var Ce=(p,u)=>()=>(u||p((u={exports:{}}).exports,u),u.exports);var Oe=Ce((Le,S)=>{(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))P(v);new MutationObserver(v=>{for(const M of v)if(M.type==="childList")for(const F of M.addedNodes)F.tagName==="LINK"&&F.rel==="modulepreload"&&P(F)}).observe(document,{childList:!0,subtree:!0});function w(v){const M={};return v.integrity&&(M.integrity=v.integrity),v.referrerPolicy&&(M.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?M.credentials="include":v.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function P(v){if(v.ep)return;v.ep=!0;const M=w(v);fetch(v.href,M)}})();var S={};(function p(u,w,P,v){var M=!!(u.Worker&&u.Blob&&u.Promise&&u.OffscreenCanvas&&u.OffscreenCanvasRenderingContext2D&&u.HTMLCanvasElement&&u.HTMLCanvasElement.prototype.transferControlToOffscreen&&u.URL&&u.URL.createObjectURL),F=typeof Path2D=="function"&&typeof DOMMatrix=="function",K=function(){if(!u.OffscreenCanvas)return!1;var r=new OffscreenCanvas(1,1),e=r.getContext("2d");e.fillRect(0,0,1,1);var a=r.transferToImageBitmap();try{e.createPattern(a,"no-repeat")}catch{return!1}return!0}();function W(){}function L(r){var e=w.exports.Promise,a=e!==void 0?e:u.Promise;return typeof a=="function"?new a(r):(r(W,W),null)}var R=function(r,e){return{transform:function(a){if(r)return a;if(e.has(a))return e.get(a);var t=new OffscreenCanvas(a.width,a.height),o=t.getContext("2d");return o.drawImage(a,0,0),e.set(a,t),t},clear:function(){e.clear()}}}(K,new Map),B=function(){var r=Math.floor(16.666666666666668),e,a,t={},o=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(i){var l=Math.random();return t[l]=requestAnimationFrame(function n(s){o===s||o+r-1<s?(o=s,delete t[l],i()):t[l]=requestAnimationFrame(n)}),l},a=function(i){t[i]&&cancelAnimationFrame(t[i])}):(e=function(i){return setTimeout(i,r)},a=function(i){return clearTimeout(i)}),{frame:e,cancel:a}}(),$=function(){var r,e,a={};function t(o){function i(l,n){o.postMessage({options:l||{},callback:n})}o.init=function(n){var s=n.transferControlToOffscreen();o.postMessage({canvas:s},[s])},o.fire=function(n,s,d){if(e)return i(n,null),e;var f=Math.random().toString(36).slice(2);return e=L(function(h){function m(y){y.data.callback===f&&(delete a[f],o.removeEventListener("message",m),e=null,R.clear(),d(),h())}o.addEventListener("message",m),i(n,f),a[f]=m.bind(null,{data:{callback:f}})}),e},o.reset=function(){o.postMessage({reset:!0});for(var n in a)a[n](),delete a[n]}}return function(){if(r)return r;if(!P&&M){var o=["var CONFETTI, SIZE = {}, module = {};","("+p.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([o])))}catch(i){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",i),null}t(r)}return r}}(),G={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function J(r,e){return e?e(r):r}function Q(r){return r!=null}function g(r,e,a){return J(r&&Q(r[e])?r[e]:G[e],a)}function X(r){return r<0?0:Math.floor(r)}function ee(r,e){return Math.floor(Math.random()*(e-r))+r}function A(r){return parseInt(r,16)}function re(r){return r.map(ae)}function ae(r){var e=String(r).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:A(e.substring(0,2)),g:A(e.substring(2,4)),b:A(e.substring(4,6))}}function ne(r){var e=g(r,"origin",Object);return e.x=g(e,"x",Number),e.y=g(e,"y",Number),e}function te(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function oe(r){var e=r.getBoundingClientRect();r.width=e.width,r.height=e.height}function ie(r){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=r,e}function le(r,e,a,t,o,i,l,n,s){r.save(),r.translate(e,a),r.rotate(i),r.scale(t,o),r.arc(0,0,1,l,n,s),r.restore()}function se(r){var e=r.angle*(Math.PI/180),a=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-e+(.5*a-Math.random()*a),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar,flat:r.flat}}function ce(r,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var a=e.tick++/e.totalTicks,t=e.x+e.random*e.tiltCos,o=e.y+e.random*e.tiltSin,i=e.wobbleX+e.random*e.tiltCos,l=e.wobbleY+e.random*e.tiltSin;if(r.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-a)+")",r.beginPath(),F&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))r.fill(de(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(i-t)*.1,Math.abs(l-o)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var n=Math.PI/10*e.wobble,s=Math.abs(i-t)*.1,d=Math.abs(l-o)*.1,f=e.shape.bitmap.width*e.scalar,h=e.shape.bitmap.height*e.scalar,m=new DOMMatrix([Math.cos(n)*s,Math.sin(n)*s,-Math.sin(n)*d,Math.cos(n)*d,e.x,e.y]);m.multiplySelf(new DOMMatrix(e.shape.matrix));var y=r.createPattern(R.transform(e.shape.bitmap),"no-repeat");y.setTransform(m),r.globalAlpha=1-a,r.fillStyle=y,r.fillRect(e.x-f/2,e.y-h/2,f,h),r.globalAlpha=1}else if(e.shape==="circle")r.ellipse?r.ellipse(e.x,e.y,Math.abs(i-t)*e.ovalScalar,Math.abs(l-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):le(r,e.x,e.y,Math.abs(i-t)*e.ovalScalar,Math.abs(l-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var c=Math.PI/2*3,b=4*e.scalar,C=8*e.scalar,I=e.x,E=e.y,x=5,T=Math.PI/x;x--;)I=e.x+Math.cos(c)*C,E=e.y+Math.sin(c)*C,r.lineTo(I,E),c+=T,I=e.x+Math.cos(c)*b,E=e.y+Math.sin(c)*b,r.lineTo(I,E),c+=T;else r.moveTo(Math.floor(e.x),Math.floor(e.y)),r.lineTo(Math.floor(e.wobbleX),Math.floor(o)),r.lineTo(Math.floor(i),Math.floor(l)),r.lineTo(Math.floor(t),Math.floor(e.wobbleY));return r.closePath(),r.fill(),e.tick<e.totalTicks}function ue(r,e,a,t,o){var i=e.slice(),l=r.getContext("2d"),n,s,d=L(function(f){function h(){n=s=null,l.clearRect(0,0,t.width,t.height),R.clear(),o(),f()}function m(){P&&!(t.width===v.width&&t.height===v.height)&&(t.width=r.width=v.width,t.height=r.height=v.height),!t.width&&!t.height&&(a(r),t.width=r.width,t.height=r.height),l.clearRect(0,0,t.width,t.height),i=i.filter(function(y){return ce(l,y)}),i.length?n=B.frame(m):h()}n=B.frame(m),s=h});return{addFettis:function(f){return i=i.concat(f),d},canvas:r,promise:d,reset:function(){n&&B.cancel(n),s&&s()}}}function D(r,e){var a=!r,t=!!g(e||{},"resize"),o=!1,i=g(e,"disableForReducedMotion",Boolean),l=M&&!!g(e||{},"useWorker"),n=l?$():null,s=a?te:oe,d=r&&n?!!r.__confetti_initialized:!1,f=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,h;function m(c,b,C){for(var I=g(c,"particleCount",X),E=g(c,"angle",Number),x=g(c,"spread",Number),T=g(c,"startVelocity",Number),me=g(c,"decay",Number),ve=g(c,"gravity",Number),ge=g(c,"drift",Number),q=g(c,"colors",re),pe=g(c,"ticks",Number),z=g(c,"shapes"),ye=g(c,"scalar"),Me=!!g(c,"flat"),U=ne(c),H=I,k=[],be=r.width*U.x,we=r.height*U.y;H--;)k.push(se({x:be,y:we,angle:E,spread:x,startVelocity:T,color:q[H%q.length],shape:z[ee(0,z.length)],ticks:pe,decay:me,gravity:ve,drift:ge,scalar:ye,flat:Me}));return h?h.addFettis(k):(h=ue(r,k,s,b,C),h.promise)}function y(c){var b=i||g(c,"disableForReducedMotion",Boolean),C=g(c,"zIndex",Number);if(b&&f)return L(function(T){T()});a&&h?r=h.canvas:a&&!r&&(r=ie(C),document.body.appendChild(r)),t&&!d&&s(r);var I={width:r.width,height:r.height};n&&!d&&n.init(r),d=!0,n&&(r.__confetti_initialized=!0);function E(){if(n){var T={getBoundingClientRect:function(){if(!a)return r.getBoundingClientRect()}};s(T),n.postMessage({resize:{width:T.width,height:T.height}});return}I.width=I.height=null}function x(){h=null,t&&(o=!1,u.removeEventListener("resize",E)),a&&r&&(document.body.contains(r)&&document.body.removeChild(r),r=null,d=!1)}return t&&!o&&(o=!0,u.addEventListener("resize",E,!1)),n?n.fire(c,I,x):m(c,I,x)}return y.reset=function(){n&&n.reset(),h&&h.reset()},y}var N;function j(){return N||(N=D(null,{useWorker:!0,resize:!0})),N}function de(r,e,a,t,o,i,l){var n=new Path2D(r),s=new Path2D;s.addPath(n,new DOMMatrix(e));var d=new Path2D;return d.addPath(s,new DOMMatrix([Math.cos(l)*o,Math.sin(l)*o,-Math.sin(l)*i,Math.cos(l)*i,a,t])),d}function he(r){if(!F)throw new Error("path confetti are not supported in this browser");var e,a;typeof r=="string"?e=r:(e=r.path,a=r.matrix);var t=new Path2D(e),o=document.createElement("canvas"),i=o.getContext("2d");if(!a){for(var l=1e3,n=l,s=l,d=0,f=0,h,m,y=0;y<l;y+=2)for(var c=0;c<l;c+=2)i.isPointInPath(t,y,c,"nonzero")&&(n=Math.min(n,y),s=Math.min(s,c),d=Math.max(d,y),f=Math.max(f,c));h=d-n,m=f-s;var b=10,C=Math.min(b/h,b/m);a=[C,0,0,C,-Math.round(h/2+n)*C,-Math.round(m/2+s)*C]}return{type:"path",path:e,matrix:a}}function fe(r){var e,a=1,t="#000000",o='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof r=="string"?e=r:(e=r.text,a="scalar"in r?r.scalar:a,o="fontFamily"in r?r.fontFamily:o,t="color"in r?r.color:t);var i=10*a,l=""+i+"px "+o,n=new OffscreenCanvas(i,i),s=n.getContext("2d");s.font=l;var d=s.measureText(e),f=Math.ceil(d.actualBoundingBoxRight+d.actualBoundingBoxLeft),h=Math.ceil(d.actualBoundingBoxAscent+d.actualBoundingBoxDescent),m=2,y=d.actualBoundingBoxLeft+m,c=d.actualBoundingBoxAscent+m;f+=m+m,h+=m+m,n=new OffscreenCanvas(f,h),s=n.getContext("2d"),s.font=l,s.fillStyle=t,s.fillText(e,y,c);var b=1/a;return{type:"bitmap",bitmap:n.transferToImageBitmap(),matrix:[b,0,0,b,-f*b/2,-h*b/2]}}w.exports=function(){return j().apply(this,arguments)},w.exports.reset=function(){j().reset()},w.exports.create=D,w.exports.shapeFromPath=he,w.exports.shapeFromText=fe})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),S,!1);const Ie=S.exports;S.exports.create;const V=new Date,Te=V.getFullYear(),Z=V.getDay()===5,Pe=document.querySelector("#friday-qustion"),Ee=document.querySelector("#friday-answer"),xe=document.querySelector("#footer");Pe.innerHTML="&nbsp;&nbsp;今天是星期五吗？";Ee.innerHTML=Z?"是的":"不是";xe.innerHTML=`
  <span>2009</span>
  <span> ~ </span>
  <span>${Te}</span>
`;function O(p,u){return Math.random()*(u-p)+p}const _=()=>{const p=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,u=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;return{width:p,height:u}},Y=(p,u)=>{const{width:w,height:P}=_();Ie({angle:O(55,125),spread:O(50,70),particleCount:O(50,100),origin:{x:p/w,y:u/P}})},Fe=()=>{setInterval(()=>{const{width:p,height:u}=_(),w=O(p/3,p-p/4),P=O(u/3,u-u/4);Y(w,P)},3e3)};Z&&Fe();document.body.addEventListener("click",function(p){Y(p.pageX,p.pageY)})});export default Oe();
