(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["marketing"],{48035:(e,t,n)=>{"use strict";n(69146);var r=n(3729),i=n(36071),s=n(59753);let o="row-is-visible";(0,i.N7)(".js-type-in, .js-type-in-item",e=>{(0,r.Gx)(e)||c(e)});let a=new IntersectionObserver(l,{rootMargin:`-${r.Al}% 0% -${r.B2}% 0%`,threshold:r.t6});function l(e){for(let t of e)if(t.isIntersecting?u(t.target):c(t.target),t.target.classList.contains("js-type-in-trigger"))for(let e of t.target.querySelectorAll(".js-type-in-item, .js-build-number"))t.isIntersecting?u(e):c(e)}function c(e){if(e.classList.contains("js-type-in")||e.classList.contains("js-type-in-trigger")){for(let t of e.querySelectorAll(".js-type-row, .js-type-letters"))t.classList.contains("js-type-letters")&&t.children.length>0?function(e){for(let t of e.childNodes)if("#text"===t.nodeName){let e=document.createElement("span");e.textContent=t.textContent,t.replaceWith(e)}for(let t of e.querySelectorAll("*"))t.classList.add("js-type-letters"),t.style.visibility="hidden";e.classList.remove("js-type-letters")}(t):(t.style.visibility="hidden",t.classList.remove(o));e.classList.remove(r.$M)}}function u(e){if(e.classList.contains(r.$M)||!e.classList.contains("js-type-in")&&!e.classList.contains("js-type-in-trigger"))return;e.classList.add(r.$M);let t=e.querySelectorAll(".js-type-row, .js-type-letters"),n=Number(e.getAttribute("data-type-delay")||20),i=Number(e.getAttribute("data-type-row-delay")||200);e.classList.contains("js-build-number")?setTimeout(()=>(function e(t,n,r){r%1!=0?(n+=Math.max(.1,r/20),n=Number(n.toFixed(1))):(n+=Math.max(1,Number(r/35)),n=Number(n.toFixed(0))),n>r&&(n=r),t.textContent=n.toString(),n>=r||setTimeout(()=>e(t,n,r),Number(t.getAttribute("data-increment-speed")||75))})(e,0,Number(e.textContent)),n):setTimeout(()=>(function e(t,n,i,s,a){if(i>=n.length)return;let l=n[i];if(!t.classList.contains(r.$M)){""!==s&&(l.textContent=s);return}if(l.classList.contains("js-type-row")){let r=Number(l.getAttribute("data-type-row-delay")||a);l.style.visibility="visible",l.classList.add(o),i++,setTimeout(()=>e(t,n,i,"",r),r);return}"hidden"===l.style.visibility&&null!=l.textContent&&(s=l.textContent,l.textContent="",l.style.visibility="visible",l.classList.add("animation-is-typing")),null!=l.textContent&&s.length>l.textContent.length?l.textContent=s.substr(0,l.textContent.length+1):++i<n.length&&l.classList.remove("animation-is-typing"),setTimeout(()=>e(t,n,i,s,a),20)})(e,t,0,"",i),n)}(0,i.N7)(".js-type-in, .js-type-in-trigger",e=>{if((0,r.Gx)(e)){(0,r.L)(e);return}let t=(0,r.jG)(e);if(t.isDefault)return a.observe(e);new IntersectionObserver(l,{rootMargin:`-${t.marginTop}% 0% -${t.marginBottom}% 0%`,threshold:t.threshold}).observe(e)}),(0,s.on)("click",".js-type-restart",e=>{!function(e){c(e),u(e)}(e.currentTarget.closest(".js-type-in"))}),(0,i.N7)(".js-dialog-close-on-focusout",e=>{e.addEventListener("focusout",t=>{let n=t.relatedTarget;n&&!e.contains(n)&&(e.open=!1)})});let d=new IntersectionObserver(function(e){for(let t of e)if(t.isIntersecting)for(let e of document.querySelectorAll(".js-scrollnav-item"))e.classList.toggle("selected",e.getAttribute("href")===`#${t.target.id}`)},{root:null,rootMargin:"0px",threshold:.1});(0,i.N7)(".js-section",e=>d.observe(e));let m=new IntersectionObserver(([e])=>{if(e){if(window.scrollY<=0&&e.isIntersecting){e.target.classList.remove("is-stuck");return}e.target.classList.toggle("is-stuck",e.intersectionRatio<1)}},{threshold:[1]});(0,i.N7)(".js-sticky-state",{add(e){m.observe(e)},remove(e){m.unobserve(e)}}),n(35165);let h=class SlideShow extends HTMLElement{onTouchStart(e){this.touchStartX=e.changedTouches[0].screenX}onTouchEnd(e){this.touchEndX=e.changedTouches[0].screenX,this.touchEndX<this.touchStartX-this.swipeLengthMod&&(this.pause(),this.nextSlide()),this.touchEndX>this.touchStartX+this.swipeLengthMod&&(this.pause(),this.prevSlide())}pause(){this.interval&&window.clearInterval(this.interval)}play(){this.pause(),this.interval=window.setInterval(this.nextSlide.bind(this),this.intervalTime)}nextSlide(){this.current++,this.current>this.slideIds.length-1&&(this.current=0),this.goToSlide(this.slideIds[this.current])}prevSlide(){this.current--,this.current<0&&(this.current=this.slideIds.length-1),this.goToSlide(this.slideIds[this.current])}bulletOnClick(e){e.preventDefault();let t=e.target,n=t?.getAttribute("aria-controls");n&&this.goToSlide(n),this.pause()}goToSlide(e){let t=this.querySelector(`.js-slide-show-slide[id="${e}"]`),n=this.querySelector(`.js-slide-show-bullet[aria-controls="${e}"]`),r=this.querySelectorAll(`.js-slide-show-goto[aria-controls="${e}"]`),i=this.querySelector('.js-slide-show-slide:not([aria-hidden="true"])'),s=this.querySelector('.js-slide-show-bullet[aria-selected="true"]'),o=this.querySelectorAll('.js-slide-show-goto[aria-selected="true"]');i?.setAttribute("aria-hidden","true"),s?.setAttribute("aria-selected","false");for(let e=0;e<o.length;e++)o[e].setAttribute("aria-selected","false");t?.removeAttribute("aria-hidden"),n?.setAttribute("aria-selected","true");for(let e=0;e<r.length;e++)r[e].setAttribute("aria-selected","true")}constructor(){super();let e=this.getAttribute("data-slide-show-autoplay"),t=this.getAttribute("data-threshold")||"0.2";if(this.intervalTime=6e3,this.bullets=this.querySelectorAll(".js-slide-show-bullet[aria-controls]"),this.gotos=this.querySelectorAll(".js-slide-show-goto[aria-controls]"),this.slideIds=[],this.interval=null,this.current=0,this.currentSlideId=null,this.swipeArea=this.querySelector(".js-slide-show-swipe-area"),this.touchStartX=0,this.touchEndX=0,this.swipeLengthMod=20,e&&!(0,r.Gx)(this)){let n=parseInt(e,10);isNaN(n)||(this.intervalTime=n),new IntersectionObserver(e=>{for(let t of e){let e=t.target;t.isIntersecting?e.play():e.pause()}},{threshold:Number(t)}).observe(this)}for(let e=0;e<this.bullets.length;e++){let t=this.bullets[e],n=t.getAttribute("aria-controls"),r=t.getAttribute("aria-selected");n&&this.slideIds.push(n),r&&(this.current=e,this.currentSlideId=n),t.addEventListener("click",this.bulletOnClick.bind(this))}for(let e=0;e<this.gotos.length;e++){let t=this.gotos[e],n=t.getAttribute("aria-controls");this.currentSlideId===n&&t.setAttribute("aria-selected","true"),t.addEventListener("click",this.bulletOnClick.bind(this))}this.swipeArea&&(this.swipeArea.addEventListener("touchstart",this.onTouchStart.bind(this),{passive:!0}),this.swipeArea.addEventListener("touchend",this.onTouchEnd.bind(this)))}};window&&"customElements"in window&&!window.customElements.get("slide-show")&&window.customElements.define("slide-show",h),n(46783),(0,s.on)("click",".sub-nav-mktg.on",e=>{let t=e.currentTarget;t.querySelector(".sub-nav-mktg-wrapper").contains(e.target)||t.classList.remove("on")}),(0,s.on)("click",".js-toggler-container .js-toggler-target",function(e){let t=e.currentTarget.closest(".js-toggler-container"),n=t?t.querySelector(".sub-nav-mktg-toggle"):null;n&&n.setAttribute("aria-expanded",String("true"!==n.getAttribute("aria-expanded")))}),(0,s.on)("click",".sub-nav-mktg.scrollnav.on .sub-nav-mktg-link",e=>{e.currentTarget.closest(".sub-nav-mktg").classList.remove("on")}),(0,s.on)("click",".sub-nav-mktg:not(.on) .sub-nav-mktg-link",e=>{window.innerWidth>=1280||(e.preventDefault(),e.currentTarget.closest(".sub-nav-mktg").classList.add("on"))}),(0,s.on)("click",".js-video-play, .js-video-close",function(e){let t=e.currentTarget.closest(".js-video-container"),n=t.querySelector(".js-video");"details"===t.tagName.toLowerCase()&&t.addEventListener("details-dialog-close",function(){n instanceof HTMLIFrameElement&&n.removeAttribute("src"),n instanceof HTMLMediaElement&&n.pause(),window.setTimeout(function(){t.classList.remove("is-expanded")},10)}),t.classList.contains("is-expanded")?(n instanceof HTMLIFrameElement&&n.removeAttribute("src"),t.classList.remove("is-expanded"),n instanceof HTMLMediaElement&&n.pause()):(n instanceof HTMLIFrameElement&&(n.src=n.getAttribute("data-src")||""),n instanceof HTMLMediaElement&&n.play(),t.classList.add("is-expanded")),function(e,t=0){let n=e.getBoundingClientRect(),r=n.top-t,i=n.bottom-window.innerHeight+t;r<0?window.scrollBy(0,r):i>0&&window.scrollBy(0,i)}(n,20)});var f=n(76006);(0,f.nW)("active-global-banners",()=>n.e("app_assets_modules_marketing_active-global-banners_ts").then(n.bind(n,27640))),(0,f.nW)("audio-player",()=>n.e("app_assets_modules_marketing_audio-player_ts").then(n.bind(n,93536))),(0,f.nW)("before-after",()=>n.e("app_assets_modules_marketing_before-after_ts").then(n.bind(n,96585))),(0,f.nW)("card-skew",()=>n.e("app_assets_modules_marketing_card-skew_ts").then(n.bind(n,10418))),(0,f.nW)("confetti-container",()=>n.e("app_assets_modules_marketing_confetti-on-scroll_ts-_383b1").then(n.bind(n,23513))),(0,f.nW)("global-banner",()=>n.e("app_assets_modules_marketing_global-banner_ts").then(n.bind(n,67457))),(0,f.nW)("segmented-nav",()=>n.e("app_assets_modules_marketing_segmented-nav_ts").then(n.bind(n,16006))),(0,f.nW)("story-body",()=>n.e("app_assets_modules_marketing_story-body-element_ts").then(n.bind(n,6864))),(0,f.nW)("testimonials-carousel",()=>n.e("app_assets_modules_marketing_testimonials-carousel-element_ts").then(n.bind(n,64194))),(0,f.nW)("unveil-container",()=>n.e("app_assets_modules_marketing_unveil_ts").then(n.bind(n,7753))),(0,f.nW)("video-player",()=>n.e("app_assets_modules_marketing_video-player_ts").then(n.bind(n,32603)))},35165:(e,t,n)=>{"use strict";var r=n(59753),i=n(36071),s=n(65809),o=n(79697);let a="data-analytics-event",l="data-analytics-visible",c=`a:not([${a}]), button:not([${a}]), [${a}]`,u=`[${l}]`;function d(e,t){return e.tagName.toLowerCase()===t}function m(e){return{text:e.innerText||e.getAttribute("aria-label")||"",target:e.href}}function h(e){let t=e.closest("form");return{text:e.innerText||e.getAttribute("aria-label")||"",role:e.getAttribute("type")||e.getAttribute("role")||"button",...e.value&&{value:e.value},...t&&{formAction:t.getAttribute("action")||""}}}function f(e){let{top:t,left:n}=e.getBoundingClientRect(),r=document.body,i=document.documentElement,s=Math.max(r.scrollHeight,r.offsetHeight,i.clientHeight,i.scrollHeight,i.offsetHeight),o=Math.max(r.scrollWidth,r.offsetWidth,i.clientWidth,i.scrollWidth,i.offsetWidth);return{ref_loc:JSON.stringify({top:((t+window.pageYOffset)/s).toFixed(3),left:((n+window.pageXOffset)/o).toFixed(3)})}}function g(e){if(!e)return{};let{category:t,action:n,label:r}=JSON.parse(e);return{category:t,action:n,...function(e){if(!e)return{};let t={};for(let n of e.split(";").map(e=>e.trim())){let[e,r]=n.split(":");e&&(t[e.trim()]=r?.trim()||e.trim())}return t}(r)}}(0,r.on)("click",c,e=>{if(e&&e.currentTarget)try{(0,o.qP)("analytics.click",function(e){return{...d(e,"a")&&m(e),...d(e,"button")&&h(e),...f(e),...g(e.getAttribute(a))}}(e.currentTarget)),d(e.currentTarget,"details")&&e.currentTarget.removeAttribute(a)}catch(e){(0,s.eK)(e)}});let p=new IntersectionObserver(function(e){for(let n of e)if(n.isIntersecting)try{var t;(0,o.qP)("analytics.visible",(t=n.target,{...d(t,"a")&&m(t),...d(t,"button")&&h(t),...f(t),...g(t.getAttribute(l))})),p.unobserve(n.target)}catch(e){(0,s.eK)(e)}},{rootMargin:"0% 0% -30% 0%",threshold:0});(0,i.N7)(u,e=>{p.observe(e)})},3729:(e,t,n)=>{"use strict";n.d(t,{$M:()=>i,Al:()=>a,B2:()=>o,Gx:()=>d,L:()=>m,jG:()=>h,t6:()=>l});var r=n(36071);let i="build-in-animate",s="build-in-reduced",o=30,a=0,l=0;(0,r.N7)(".js-build-in-trigger[data-build-in-stagger], .js-build-in-group[data-build-in-stagger]",e=>{let t=parseInt(e.getAttribute("data-build-in-stagger")),n=e.querySelectorAll(".js-build-in-item");for(let e=0;e<n.length;e++)n[e].style.transitionDelay=`${e*t}ms`});let c=new IntersectionObserver(u,{rootMargin:`-${a}% 0% -${o}% 0%`,threshold:l});function u(e){for(let t of e)if(t.target.classList.toggle(i,t.isIntersecting),t.target.classList.contains("js-build-in-trigger"))for(let e of t.target.querySelectorAll(".js-build-in-item"))e.classList.toggle(i,t.isIntersecting)}function d(e){let t=window.matchMedia("(prefers-reduced-motion: reduce)"),n=e.getAttribute("data-build-non-decorative")||"false";return t.matches&&"false"===n}function m(e){for(let t of(e.classList.add(s),e.classList.add(i),e.querySelectorAll(".js-build-in-item, .js-type-in-item")))t.classList.add(s),t.classList.add(i)}function h(e){let t=Number(e.getAttribute("data-build-margin-bottom")||o),n=Number(e.getAttribute("data-build-margin-top")||a),r=Number(e.getAttribute("data-build-threshold")||l);return{marginBottom:t,marginTop:n,threshold:r,isDefault:t===o&&n===a&&r===l}}(0,r.N7)(".js-build-in-item[data-build-delay]",e=>{let t=Number(e.getAttribute("data-build-delay")||0);e instanceof HTMLElement&&(e.style.transitionDelay=`${t}ms`)}),(0,r.N7)(".js-build-in, .js-build-in-trigger",e=>{if(d(e)){m(e);return}let t=h(e);if(t.isDefault)return c.observe(e);new IntersectionObserver(u,{rootMargin:`-${t.marginTop}% 0% -${t.marginBottom}% 0%`,threshold:t.threshold}).observe(e)}),(0,r.N7)(".js-viewport-aware-video",{constructor:HTMLMediaElement,add(e){(e=>{let t=e.getAttribute("aria-label"),n=e.getAttribute("data-play-label"),r=e.getAttribute("data-pause-label");if(!n||!r)return;let i=t?`${t} ${n}`:n,s=t?`${t} ${r}`:r;e.setAttribute("aria-label",e.paused?i:s),e.addEventListener("play",()=>{e.setAttribute("aria-label",s)}),e.addEventListener("pause",()=>{e.setAttribute("aria-label",i)})})(e);let t=e=>{e.paused?e.play():e.pause()};if(e.addEventListener("play",()=>{e.classList.remove("looping-paused-mktg")}),e.addEventListener("pause",()=>{e.classList.add("looping-paused-mktg")}),e.addEventListener("click",()=>{t(e)}),e.addEventListener("keydown",n=>{"Space"===n.code&&(n.preventDefault(),t(e))}),d(e)){e.pause(),e.classList.add("looping-paused-mktg");return}let n=e.getAttribute("data-threshold")||l,r=e.getAttribute("data-build-margin-bottom")||20;new IntersectionObserver(t=>{for(let n of t)n.isIntersecting?e.play():e.pause()},{rootMargin:`-${a}% 0% -${r}% 0%`,threshold:Number(n)}).observe(e)}})},46783:()=>{if(window.location.hash){let e=document.querySelector(`.faq-mktg-item${window.location.hash} details`);e&&(e.open=!0)}},69146:()=>{new class QueryParamOverrider{collectParams(){for(let e of this.paramsToOverride){let t=RegExp(`${e}=([^=&]*)`,"i"),n=t.exec(this.queryString);t.lastIndex=0,n&&n[1]&&(this.collectedParamsMap[e]=n[1],this.collectedParams.push(`${e}=${n[1]}`))}}overrideParams(e){let t=e.getAttribute("href"),n="";if(!(!t||/^javascript:|^mailto:|^tel:|^#/.test(t))){if(-1!==t.indexOf("#")){let e=t.split("#");if(2!==e.length)return;e[0]&&(t=e[0]),e[1]&&(n=`#${e[1]}`)}if(-1===t.indexOf("?"))t+=`?${this.collectedParams.join("&")}`;else for(let e of this.paramsToOverride){if(!this.collectedParamsMap.hasOwnProperty(e))continue;let n=RegExp(`${e}=([^=&]*)`,"i"),r=n.exec(t);if(n.lastIndex=0,!r){this.collectedParamsMap.hasOwnProperty(e)&&(t+=`&${e}=${this.collectedParamsMap[e]}`);continue}t=t.replace(n,`${e}=${this.collectedParamsMap[e]}`)}t+=n,e.setAttribute("data-override-applied","true"),e.setAttribute("href",t)}}eventReaction(e){let t=e.target;!t||"A"!==t.tagName||t.hasAttribute("data-override-applied")||this.overrideParams(t)}bindEvents(){document.body.addEventListener("mouseenter",this.eventReaction.bind(this),!0),document.body.addEventListener("touchstart",this.eventReaction.bind(this),{passive:!0,capture:!0})}constructor(){if(this.paramsToOverride=["utm_campaign","utm_medium","utm_source","ocid"],this.queryString=document.location.search,this.collectedParamsMap={},this.collectedParams=[],this.queryRe=RegExp(`(${this.paramsToOverride.join("|")})=([^=&]*)`,"gi"),!this.queryString||!this.queryRe.test(this.queryString))return;this.collectParams(),this.bindEvents()}}},40578:(e,t,n)=>{"use strict";let r;function i(){if(!r)throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");return r}function s(){return r?.locale??"en-US"}n.d(t,{Kd:()=>s,dU:()=>i}),function(){if("undefined"!=typeof document){let e=document.getElementById("client-env");if(e)try{r=JSON.parse(e.textContent||"")}catch(e){console.error("Error parsing client-env",e)}}}()},87274:(e,t,n)=>{"use strict";n.d(t,{C:()=>s,x:()=>i});var r=n(71207);let i=r.n4?.readyState==="interactive"||r.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.n4?.addEventListener("DOMContentLoaded",()=>{e()})}),s=r.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.iG?.addEventListener("load",e)})},65809:(e,t,n)=>{"use strict";n.d(t,{eK:()=>p});var r=n(82918),i=n(21630),s=n(28382);function o(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}var a=n(54508),l=n(71207),c=n(18515),u=n(58374);let d=!1,m=0,h=Date.now(),f=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function g(e){return!!("AbortError"===e.name||"TypeError"===e.name&&f.has(e.message)||e.name.startsWith("ApiError")&&f.has(e.message))}function p(e,t={}){if((0,c.cr)("FAILBOT_HANDLE_NON_ERRORS")){if(!(e instanceof Error||"object"==typeof e&&null!==e&&"name"in e&&"string"==typeof e.name&&"message"in e&&"string"==typeof e.message)){if(function(e){if(!e||"boolean"==typeof e||"number"==typeof e)return!0;if("string"==typeof e){if(_.some(t=>e.includes(t)))return!0}else if("object"==typeof e&&"string"==typeof e.message&&"number"==typeof e.code)return!0;return!1}(e))return;let n=Error(),r=function(e){try{return JSON.stringify(e)}catch{return"Unserializable"}}(e);b(v({type:"UnknownError",value:`Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${r}`,stacktrace:w(n),catalogService:void 0},t));return}g(e)||b(v(y(e),t))}else g(e)||b(v(y(e),t))}async function b(e){if(!(!L&&!d&&m<10&&(0,i.Gb)()))return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(e.error.stacktrace.some(e=>S.test(e.filename)||S.test(e.function))){d=!0;return}m++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function y(e){return{type:e.name,value:e.message,stacktrace:w(e),catalogService:e.catalogService}}function v(e,t={}){return Object.assign({error:e,sanitizedUrl:`${window.location.protocol}//${window.location.host}${function(){let e=o("meta[name=analytics-location]");return e?e.content:window.location.pathname}()+function(){let e=o("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=o("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${n[0]}($|=)`,"g"),`$1${n[1]}$2`)}return t}()}`||window.location.href,readyState:document.readyState,referrer:(0,u.wP)(),timeSinceLoad:Math.round(Date.now()-h),user:function(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,r.b)();return`anonymous-${t}`}()||void 0,bundler:a.A,ui:!!document.querySelector('meta[name="ui"]')},t)}function w(e){return(0,s.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let S=/(chrome|moz|safari)-extension:\/\//,L=!1;l.iG?.addEventListener("pageshow",()=>L=!1),l.iG?.addEventListener("pagehide",()=>L=!0),"function"==typeof BroadcastChannel&&new BroadcastChannel("shared-worker-error").addEventListener("message",e=>{p(e.data.error)});let _=["Object Not Found Matching Id","Not implemented on this platform","provider because it's not your default extension"]},18515:(e,t,n)=>{"use strict";n.d(t,{$m:()=>c,KM:()=>a,cr:()=>l});var r=n(15205),i=n(40578);function s(){return new Set((0,i.dU)().featureFlags.map(e=>e.toLowerCase()))}let o=n(71207).W6?s:(0,r.Z)(s);function a(){return Array.from(o())}function l(e){return o().has(e.toLowerCase())}let c={isFeatureEnabled:l}},79697:(e,t,n)=>{"use strict";let r;n.d(t,{YT:()=>m,qP:()=>h,yM:()=>f});var i=n(88149),s=n(86058),o=n(56363),a=n(43786);let{getItem:l}=(0,o.Z)("localStorage"),c="dimension_",u=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,i.n)("octolytics");delete e.baseContext,r=new s.R(e)}catch(e){}function d(e){let t=(0,i.n)("octolytics").baseContext||{};if(t)for(let[e,n]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(c)&&(t[e.replace(c,"")]=n,delete t[e]);let n=document.querySelector("meta[name=visitor-payload]");for(let[e,r]of(n&&Object.assign(t,JSON.parse(atob(n.content))),new URLSearchParams(window.location.search)))u.includes(e.toLowerCase())&&(t[e]=r);return t.staff=(0,a.B)().toString(),Object.assign(t,e)}function m(e){r?.sendPageView(d(e))}function h(e,t={}){let n=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,i=n?{service:n}:{};for(let[e,n]of Object.entries(t))null!=n&&(i[e]=`${n}`);r&&(d(i),r.sendEvent(e||"unknown",d(i)))}function f(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},54508:(e,t,n)=>{"use strict";n.d(t,{A:()=>a,k:()=>o});var r=n(15205),i=n(71207);let s=(0,r.Z)(function(){return i.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}),o=(0,r.Z)(function(){return"enterprise"===s()}),a="webpack-react-next"},56363:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o,_:()=>a});var r=n(71207),i=n(43786);let s=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function o(e,t={throwQuotaErrorsOnSet:!1},n=r.iG,o=e=>e,a=e=>e){let l;try{if(!n)throw Error();l=n[e]||new s}catch{l=new s}let{throwQuotaErrorsOnSet:c}=t;function u(e){t.sendCacheStats&&(0,i.b)({incrementKey:e})}function d(e){try{if(l.removeItem(e),t.ttl){let t=`${e}:expiry`;l.removeItem(t)}}catch(e){}}return{getItem:function(e,t=new Date().getTime()){try{let n=l.getItem(e);if(!n)return null;let r=`${e}:expiry`,i=Number(l.getItem(r));if(i&&t>i)return d(e),d(r),u("SAFE_STORAGE_VALUE_EXPIRED"),null;return u("SAFE_STORAGE_VALUE_WITHIN_TTL"),o(n)}catch(e){return null}},setItem:function(e,n,r=new Date().getTime()){try{if(l.setItem(e,a(n)),t.ttl){let n=`${e}:expiry`,i=r+t.ttl;l.setItem(n,i.toString())}}catch(e){if(c&&e instanceof Error&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:d,clear:l.clear,key:l.key,get length(){return l.length}}}function a(e){return o(e,{throwQuotaErrorsOnSet:!1},r.iG,JSON.parse,JSON.stringify)}},65706:(e,t,n)=>{"use strict";n.d(t,{LS:()=>i,cl:()=>s,rV:()=>r});let{getItem:r,setItem:i,removeItem:s}=(0,n(56363).Z)("sessionStorage")},58374:(e,t,n)=>{"use strict";n.d(t,{Ak:()=>y,CI:()=>L,Gj:()=>g,J$:()=>S,Nb:()=>_,Nt:()=>v,OE:()=>p,U6:()=>m,Wl:()=>b,XL:()=>d,jN:()=>i,pS:()=>h,sj:()=>f,vu:()=>A,wG:()=>E,wP:()=>w});var r=n(65706);let i="reload",s="soft-nav:fail",o="soft-nav:fail-referrer",a="soft-nav:referrer",l="soft-nav:marker",c="soft-nav:react-app-name",u="soft-nav:latest-mechanism";function d(){(0,r.LS)(l,"0"),(0,r.cl)(a),(0,r.cl)(s),(0,r.cl)(o),(0,r.cl)(c),(0,r.cl)(u)}function m(e){(0,r.LS)(l,e)}function h(){(0,r.LS)(l,"0")}function f(){let e=(0,r.rV)(l);return e&&"0"!==e}function g(){return(0,r.rV)(l)}function p(){return!!b()}function b(){return(0,r.rV)(s)}function y(e){(0,r.LS)(s,e||i),(0,r.LS)(o,window.location.href)}function v(){(0,r.LS)(a,window.location.href)}function w(){return(0,r.rV)(a)||document.referrer}function S(){let e=_();e?(0,r.LS)(c,e):(0,r.cl)(c)}function L(){return(0,r.rV)(c)}function _(){return document.querySelector('meta[name="ui"]')?"ui":document.querySelector("react-app")?.getAttribute("app-name")}function A(e){(0,r.LS)(u,e)}function E(){return(0,r.rV)(u)}},71207:(e,t,n)=>{"use strict";n.d(t,{Qg:()=>r.Qg,W6:()=>r.W6,cF:()=>r.cF,iG:()=>i.iG,n4:()=>i.n4,ssrSafeLocation:()=>i.jX,zu:()=>i.zu});var r=n(60327),i=n(66199)},66199:(e,t,n)=>{"use strict";n.d(t,{iG:()=>i,jX:()=>o,n4:()=>r,zu:()=>s});let r="undefined"==typeof document?void 0:document,i="undefined"==typeof window?void 0:window,s="undefined"==typeof history?void 0:history,o="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:""}:location},60327:(e,t,n)=>{"use strict";n.d(t,{Qg:()=>s,W6:()=>i,cF:()=>o});var r=n(66199);let i=void 0===r.n4,s=!i;function o(){return!!i||!!r.n4.querySelector('react-app[data-ssr="true"]')}},43786:(e,t,n)=>{"use strict";n.d(t,{B:()=>m,b:()=>l});var r=n(71207),i=n(87274),s=n(54508),o=n(18515);let a=[];function l(e,t=!1,n=.5){if(!0!==(0,o.cr)("BROWSER_STATS_DISABLED")){if(n<0||n>1)throw RangeError("Sampling probability must be between 0 and 1");void 0===e.timestamp&&(e.timestamp=new Date().getTime()),e.loggedIn=!!r.n4?.head?.querySelector('meta[name="user-login"]')?.content,e.staff=m(),e.bundler=s.A,Math.random()<n&&a.push(e),t?d():u()}}let c=null;async function u(){await i.C,null==c&&(c=window.requestIdleCallback(d))}function d(){if(c=null,!a.length)return;let e=r.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(e){for(let t of function(e){let t=[],n=e.map(e=>JSON.stringify(e));for(;n.length>0;)t.push(function(e){let t=e.shift(),n=[t],r=t.length;for(;e.length>0&&r<=65536;){let t=e[0].length;if(r+t<=65536){let i=e.shift();n.push(i),r+=t}else break}return n}(n));return t}(a))!function(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}(e,`{"stats": [${t.join(",")}] }`);a=[]}}function m(){return!!r.n4?.head?.querySelector('meta[name="user-staff"]')?.content}r.n4?.addEventListener("pagehide",d),r.n4?.addEventListener("visibilitychange",d)}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_delegated-events_dist_index_js-node_modules_stacktrace-parser_dist_stack-8189f0"],()=>t(48035)),e.O()}]);
//# sourceMappingURL=marketing-eb9ac878545d.js.map