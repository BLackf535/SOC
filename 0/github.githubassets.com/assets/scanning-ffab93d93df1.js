"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["scanning","ui_packages_trusted-types-policies_policy_ts-ui_packages_trusted-types_trusted-types_ts"],{42870:(e,t,n)=>{function r(){document.removeEventListener("turbo:load",r);let e=document.querySelector('[data-target="secret-scanning-filter.clearButton"]');if(null!==e){if(e?.hidden){let e=document.querySelectorAll(".js-change-open-close-state"),t=e[e.length-2];t?.focus();return}document.title=document.title.concat(" (filters applied)"),e.focus()}}(0,n(59753).on)("click",".js-change-open-close-state",function(){document.addEventListener("turbo:load",r)})},99049:(e,t,n)=>{n(70883);var r=n(59753),o=n(9238),i=n(69567),s=n(46263),a=n(36071),l=n(5223),c=n(54868),u=n(48683);function d(e){return e.currentTarget}function m(e){e.textContent=e.getAttribute("data-disable-with")||"",e.disabled=!0}function f(e){e.textContent=e.getAttribute("data-original-text")||"",e.disabled=!1}function p(){return document.querySelector(".js-custom-secret-scanning-pattern-form")}(0,a.N7)(".js-add-secret-format-button",{add(){window.postProcessingExpressionCount=0;let e=document.querySelector(".js-post-processing-expression-count");e&&e.textContent&&(window.postProcessingExpressionCount=parseInt(e.textContent))}}),(0,r.on)("click",".js-add-secret-format-button",e=>{let t=e.currentTarget;if(t&&window.postProcessingExpressionCount<w()){let e=document.querySelectorAll(".js-additional-secret-format");if(!e)return;for(let n of e)if(n.classList.contains("has-removed-contents")){n.classList.toggle("has-removed-contents",!1),window.postProcessingExpressionCount++,window.postProcessingExpressionCount===w()&&(t.hidden=!0);break}}}),(0,r.on)("click",".js-remove-secret-format-button",e=>{let t=document.querySelector(".js-add-secret-format-button");if(!t)return;let n=e.currentTarget;if(!n)return;let r=n.closest(".js-additional-secret-format");if(!r)return;r.classList.toggle("has-removed-contents",!0);let o=r.getElementsByClassName("js-post-processing-input")[0];if(!o)return;o.value="";let i=Array.from(r.getElementsByClassName("js-post-processing-input-rule")),s=r.getElementsByClassName("errored")[0];for(let e of(s&&s.classList.toggle("errored",!1),i))document.getElementById(`${e.id}_hidden`)?.remove();document.getElementById(`${o.id}_hidden`)?.remove(),g(window.codeEditor.getValue()),window.postProcessingExpressionCount--,window.postProcessingExpressionCount<w()&&(t.hidden=!1)}),(0,a.N7)(".js-test-code",{async add(){let e=document.querySelector(".js-test-code");if(!e)return;let t=e.clientHeight,r=await n.e("vendors-node_modules_codemirror_lib_codemirror_js").then(n.t.bind(n,4631,23));if(!r)return;if(window.codeEditor=r.default.fromTextArea(e,{lineNumbers:!1,lineWrapping:!0,mode:"text/x-yaml",inputStyle:"contenteditable",value:e.value,lineSeparator:"\r\n",theme:"github-light"}),0!==t){let e=document.querySelector(".CodeMirror");e&&(e.style.height=`${t}px`,e.style.border="1px solid #e1e4e8",e.style.borderRadius="6px")}window.codeEditor.save();let o=document.querySelector(".js-test-custom-secret-scanning-pattern");if(!o)return;let i=g;o.hasAttribute("data-source-is-readonly")&&(i=T),window.codeEditor.on("change",()=>{i(window.codeEditor.getValue())})}}),(0,r.on)("change",".js-post-processing-input-rule",async function(){/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&window.codeEditor&&g(window.codeEditor.getValue())}),(0,o.q6)(".js-custom-secret-scanning-pattern-form *",async function(){window.codeEditor&&g(window.codeEditor.getValue())}),(0,r.on)("click",".js-repo-selector-dialog-summary-button.disabled",e=>{e.preventDefault()}),(0,o.q6)(".js-description-input",async function(){let e=document.querySelector(".js-description-input");if(!e)return;S(e.parentElement);let t=e.getAttribute("aria-describedby");t&&document.querySelector(`#${t}`)?.remove()}),(0,r.on)("click",".js-generated-expression-use",async e=>{let t=document.querySelector(".js-secret-format");if(!t)return;let n=document.querySelector(".js-generate-expression-examples");if(!n)return;let r=e.currentTarget;if(!r)return;let o=r.attributes.getNamedItem("for")?.value,i=document.getElementById(o);i&&(t.value=i.textContent,window.codeEditor.setValue(n.value.replaceAll(`
`," ")),t.focus())}),(0,r.on)("click",".js-generate-expressions-form-submit-button",async e=>{let t;e.preventDefault();let n=document.querySelector(".js-description-input");if(!n)return;if(""===n.value){_(n.parentElement),v(n,"description_empty","Field cannot be blank");return}let r=document.querySelector(".js-generated-expressions-section");if(!r)return;let o=document.querySelector(".js-generated-expressions-error-section");if(!o)return;let i=document.querySelector(".js-generated-expressions-warning-section");if(!i)return;r.hidden=!0,o.hidden=!0,i.hidden=!0;let s=document.querySelectorAll(".js-generated-expression-box");if(!s)return;for(let e=0;e<s.length;e++)s[e].toggleAttribute("hidden",!0);let a=d(e);if(!a)return;m(a);let l=document.querySelector(".js-generate-expressions-form");if(l){try{let e=await fetch(l.action,{method:l.method,body:new FormData(l),headers:{Accept:"application/json"}});if((t=await e.json()).error_msg){t=await e.json(),o.textContent=t.error_msg,o.hidden=!1,f(a);return}}catch(e){o.textContent="Something went wrong. Please try again later.",o.hidden=!1,f(a);return}if(t&&t.generated_expressions){if(0===t.generated_expressions.length)i.textContent="No expressions were generated. Please retry with a different description.",i.hidden=!1;else{let e=document.querySelectorAll(".js-generated-expression");if(!e)return;let n=document.querySelectorAll(".js-generated-expression-explanation");if(!n)return;for(let r=0;r<t.generated_expressions.length;r++)e[r].textContent=t.generated_expressions[r].regex,n[r].textContent=t.generated_expressions[r].explanation;for(let r=t.generated_expressions.length;r<e.length;r++)e[r].textContent="",n[r].textContent="";for(let e=0;e<t.generated_expressions.length;e++)s[e].removeAttribute("hidden");o.hidden=!0,i.hidden=!0,r.hidden=!1}}f(a)}}),(0,r.on)("click",".js-save-and-dry-run-button, .js-custom-pattern-submit-button, .js-org-repo-selector-dialog-dry-run-button",e=>{e.preventDefault();let t=d(e);if(!t)return;m(t);let n=p();n&&((t.className.includes("js-save-and-dry-run-button")||t.className.includes("js-org-repo-selector-dialog-dry-run-button"))&&y(n,"submit_type","save_and_dry_run"),(0,r.f)(n,"submit"))});let y=(e,t,n)=>{let r=document.createElement("input");r.type="hidden",r.name=t,r.id=`${t}_hidden`,r.value=n,e.appendChild(r),r.required=!0},g=(0,s.D)(function(e){let t=document.querySelector(".js-custom-pattern-submit-button"),n=document.querySelector(".js-save-and-dry-run-button"),r=document.querySelector(".js-repo-selector-dialog-summary-button"),o=document.querySelector(".js-update-pattern-info"),i=document.querySelector(".js-test-pattern-matches");if(i){if(0===e.length){let e=document.querySelector(".js-dry-run-status");if(!e)return;e.textContent?.toLowerCase()==="queued"||e.textContent?.toLowerCase()==="inprogress"||t?.setAttribute("disabled","true"),n?.setAttribute("disabled","true"),r?.classList.add("disabled"),i.textContent=""}else{window.codeEditor.save();let e=document.querySelector(".js-test-custom-secret-scanning-pattern");if(!(e instanceof HTMLFormElement))return;let s=p();if(!s)return;for(let t of s.elements)if(t instanceof HTMLInputElement&&t.name&&("text"===t.type||"radio"===t.type&&t.checked)){let n=document.getElementById(`${t.name}_hidden`);null!==n&&n.remove(),y(e,t.name,t.value)}i.textContent=" - Finding matches..",j(e,b(s,t,n,r,o),h(i))}}},300),h=e=>t=>{if(0===t.length)e.textContent=" - No matches";else if(1===t.length)e.textContent=" - 1 match";else{let n=[];for(let e of t)n.push(JSON.stringify(e));let r=[...new Set(n)];e.textContent=` - ${r.length} matches`}},b=(e,t,n,r,o)=>i=>{if(function(e){for(let t of(document.querySelector(".js-error-banner").hidden=!0,e.getElementsByTagName("input")))if(t.parentElement?.classList.contains("errored")){S(t.parentElement);let e=t.getAttribute("aria-describedby");document.querySelector(`#${e}`)?.remove()}}(e),i?.message){if(t?.setAttribute("disabled","true"),n?.setAttribute("disabled","true"),r?.classList.add("disabled"),o)o.hidden=!0;else if(i?.error_type==="START_DELIMITER"||i?.error_type==="END_DELIMITER"||i?.error_type==="MUST_MATCH"||i?.error_type==="MUST_NOT_MATCH"){let e=document.querySelector(".js-more-options.js-details-container");e&&(0,u.O4)(e)}return function(e,t){if("MUST_MATCH"===t.error_type||"MUST_NOT_MATCH"===t.error_type){let n=0;for(let r of e.getElementsByClassName("js-additional-secret-format")){if(n>(t.error_index||0))return;let e=[...r.getElementsByTagName("input")].filter(e=>e.checked),o=e&&e[0]?.value.toUpperCase(),i=o===t.error_type&&n===t.error_index,s=[...r.getElementsByTagName("input")].filter(e=>"text"===e.type);if(!s||0===s.length)continue;let a=s[0];if(""!==a.value){if(i){let e=a.id;a&&a.parentElement&&(_(a.parentElement),v(a,e,t.message,!0,"mt-6"));return}o===t.error_type&&n++}}}else{let e=x[t.error_type],n=document.querySelector(`#${e}`);n&&n.parentElement&&(_(n.parentElement),v(n,e,t.message,!0))}}(e,i),!1}{let e=document.querySelector(".js-mode");if(!e)return!1;let i=document.querySelector(".js-dry-run-status");return!!i&&(i.textContent?.toLowerCase()!=="cancelled"&&i.textContent?.toLowerCase()!=="skipped"&&(e.textContent?.toLowerCase()==="unpublished"||e.textContent?.toLowerCase()==="published")||t?.removeAttribute("disabled"),r?.classList.remove("disabled"),n?.removeAttribute("disabled"),o&&(o.hidden=!1),!0)}};function w(){let e=document.querySelector(".js-post-processing-expression-max-count");if(!e)return 10;let t=e.textContent;return t?parseInt(t):10}function _(e){e?.classList.add("form-group","errored","my-0")}function S(e){e?.classList.remove("form-group","errored","my-0")}function v(e,t,n,r=!1,o="mt-4"){let i=document.createElement("p"),s=`${t}_error_message`;i.classList.add("note","error"),r&&i.classList.add(o),i.id=s,i.textContent=n,e.setAttribute("aria-describedby",s),e.insertAdjacentElement("afterend",i)}function E(){if(!window.codeEditor)return;let e=window.codeEditor.posFromIndex(0),t=window.codeEditor.posFromIndex(window.codeEditor.getValue().length);for(let n of window.codeEditor.findMarks(e,t))n.clear()}let x={NONE:"",CONFIG_LOAD:"secret_format",COMPILE_DB:"secret_format",START_DELIMITER:"before_secret",END_DELIMITER:"after_secret",DISPLAY_NAME:"display_name",DB_SIZE:"secret_format",DB_SIZE_CALCULATION:"secret_format"};async function j(e,t,n){let r;try{let t=await fetch(e.action,{method:e.method,body:new FormData(e),headers:{Accept:"application/json"}});t.ok&&(r=await t.json())}catch(e){}if(r){if(t(r.error)){if(r.has_matches){let e=JSON.parse(r.matches);for(let t of(E(),n(e),e))!function(e,t,n){let r=e.getValue();if(t=(0,c.yb)(r,t),n=(0,c.yb)(r,n),-1===t||-1===n)return;let o=e.posFromIndex(t),i=e.posFromIndex(n);e.markText(o,i,{className:"text-bold hx_keyword-hl rounded-2 d-inline-block"})}(window.codeEditor,t.start,t.end)}else n([]),E()}!function(e){let t=document.querySelector(".js-wildcards-warning");t&&(t.hidden=!e)}(r.has_wildcard_warning)}}let T=(0,s.D)(function(e){let t=document.querySelector(".js-test-custom-secret-scanning-pattern");if(!(t instanceof HTMLFormElement))return;let n=document.querySelector(".js-test-pattern-matches");if(n){if(0===e.length)n.textContent="";else{if(!window.codeEditor)return;window.codeEditor.save(),j(t,()=>!0,h(n))}}},300);async function C(e){let t=e.currentTarget;e.preventDefault(),q(t,parseInt(t.remove_repo_id.value),!1)}async function L(e,t=!1){let n=document.getElementById("selected_repo_ids");if(!n)return;let r=new Set(JSON.parse(n.value));r.clear(),n.value=JSON.stringify(Array.from(r));let o=document.querySelector(".js-org-repo-selector-dialog-dry-run-button");if(!o)return;t?o.removeAttribute("disabled"):o.setAttribute("disabled","true");let s=new FormData(e);s.append("selected_repo_ids",n.value);let a=await fetch(e.action,{method:e.method,body:s,headers:{Accept:"text/fragment+html"}});if(a.status>=400){let e=document.querySelector("template.js-flash-template");e.after(new i.R(e,{className:"flash-error",message:"An unknown error occurred."}))}else if(!t){let e=document.querySelector(".js-dry-run-selected-repos"),t=(0,l.r)(document,await a.text());e.replaceWith(t)}}async function q(e,t,n){let r=document.getElementById("selected_repo_ids");if(!r)return;let o=document.querySelector(".js-org-repo-selector-dialog-dry-run-button");if(!o)return;let s=new Set(JSON.parse(r.value));n?s.size<function(){let e=document.querySelector(".js-dry-run-selected-repos-max-count");if(!e)return 10;let t=e.textContent;return t?parseInt(t):10}()&&s.add(t):s.delete(t),r.value=JSON.stringify(Array.from(s)),s.size>0?o.removeAttribute("disabled"):o.setAttribute("disabled","true");let a=new FormData(e);a.append("selected_repo_ids",r.value);let c=await fetch(e.action,{method:e.method,body:a,headers:{Accept:"text/fragment+html"}});if(c.status>=400){let e=document.querySelector("template.js-flash-template");e.after(new i.R(e,{className:"flash-error",message:"An unknown error occurred."}))}else{let e=document.querySelector(".js-dry-run-selected-repos"),t=(0,l.r)(document,await c.text());e.replaceWith(t)}}(0,r.on)("click",".js-remove-dry-run-repo-form",C),(0,r.on)("auto-complete-change",".js-dry-run-repo-autocomplete",function(e){let t=e.target;if(!t.value)return;if(t.value.includes("No repositories found.")){t.value="";return}let n=t.closest("form");n&&(q(n,parseInt(n.repo_id.value),!0),t.value="")}),(0,r.on)("click",".js-clear-selected-repositories-button",function(){let e=document.querySelector(".js-add-dry-run-repo-form");e&&L(e)}),(0,a.N7)('input[type="radio"][name="dry_run_repo_selection"]',e=>{let t=document.querySelector(".js-dry-run-repo-selection-component");t&&e&&!0===e.checked&&("all_repos"===e.value?t.hidden=!0:"selected_repos"===e.value&&(t.hidden=!1))}),(0,r.on)("click",'input[type="radio"][name="dry_run_repo_selection"]',function(e){let t=e.currentTarget,n=document.querySelector(".js-dry-run-repo-selection-component");if(n){if("all_repos"===t.value){n.hidden=!0;let e=n.querySelector("form");if(!e)return;L(e,!0)}else if("selected_repos"===t.value){n.hidden=!1;let e=document.querySelector(".js-org-repo-selector-dialog-dry-run-button");if(!e||!document.getElementById("selected_repo_ids"))return;n.children[1].childElementCount<=1?e.setAttribute("disabled","true"):e.removeAttribute("disabled")}}}),(0,o.w4)("keydown",".js-dry-run-repo-autocomplete-input",function(e){"Enter"===e.key&&e.preventDefault()}),n(42870)},80810:(e,t,n)=>{n.d(t,{N:()=>o,x:()=>i});var r=n(71207);function o(e,t){i((e.getAttribute("aria-label")||e.innerText||"").trim(),t)}function i(e,t){let{assertive:n,selector:o}=t??{};!function(e,t,n){let o=r.n4?.querySelector(n||(t?"#js-global-screen-reader-notice-assertive":"#js-global-screen-reader-notice"));o&&(o.textContent===e?o.textContent=`${e}\u00A0`:o.textContent=e)}(e,n,o)}},40578:(e,t,n)=>{let r;function o(){if(!r)throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");return r}function i(){return r?.locale??"en-US"}n.d(t,{Kd:()=>i,dU:()=>o}),function(){if("undefined"!=typeof document){let e=document.getElementById("client-env");if(e)try{r=JSON.parse(e.textContent||"")}catch(e){console.error("Error parsing client-env",e)}}}()},87274:(e,t,n)=>{n.d(t,{C:()=>i,x:()=>o});var r=n(71207);let o=r.n4?.readyState==="interactive"||r.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.n4?.addEventListener("DOMContentLoaded",()=>{e()})}),i=r.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.iG?.addEventListener("load",e)})},65809:(e,t,n)=>{n.d(t,{eK:()=>g});var r=n(82918),o=n(21630),i=n(28382);function s(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}var a=n(54508),l=n(71207),c=n(18515),u=n(58374);let d=!1,m=0,f=Date.now(),p=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function y(e){return!!("AbortError"===e.name||"TypeError"===e.name&&p.has(e.message)||e.name.startsWith("ApiError")&&p.has(e.message))}function g(e,t={}){if((0,c.cr)("FAILBOT_HANDLE_NON_ERRORS")){if(!(e instanceof Error||"object"==typeof e&&null!==e&&"name"in e&&"string"==typeof e.name&&"message"in e&&"string"==typeof e.message)){if(function(e){if(!e||"boolean"==typeof e||"number"==typeof e)return!0;if("string"==typeof e){if(E.some(t=>e.includes(t)))return!0}else if("object"==typeof e&&"string"==typeof e.message&&"number"==typeof e.code)return!0;return!1}(e))return;let n=Error(),r=function(e){try{return JSON.stringify(e)}catch{return"Unserializable"}}(e);h(w({type:"UnknownError",value:`Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${r}`,stacktrace:_(n),catalogService:void 0},t));return}y(e)||h(w(b(e),t))}else y(e)||h(w(b(e),t))}async function h(e){if(!(!v&&!d&&m<10&&(0,o.Gb)()))return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(e.error.stacktrace.some(e=>S.test(e.filename)||S.test(e.function))){d=!0;return}m++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function b(e){return{type:e.name,value:e.message,stacktrace:_(e),catalogService:e.catalogService}}function w(e,t={}){return Object.assign({error:e,sanitizedUrl:`${window.location.protocol}//${window.location.host}${function(){let e=s("meta[name=analytics-location]");return e?e.content:window.location.pathname}()+function(){let e=s("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=s("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${n[0]}($|=)`,"g"),`$1${n[1]}$2`)}return t}()}`||window.location.href,readyState:document.readyState,referrer:(0,u.wP)(),timeSinceLoad:Math.round(Date.now()-f),user:function(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,r.b)();return`anonymous-${t}`}()||void 0,bundler:a.A,ui:!!document.querySelector('meta[name="ui"]')},t)}function _(e){return(0,i.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let S=/(chrome|moz|safari)-extension:\/\//,v=!1;l.iG?.addEventListener("pageshow",()=>v=!1),l.iG?.addEventListener("pagehide",()=>v=!0),"function"==typeof BroadcastChannel&&new BroadcastChannel("shared-worker-error").addEventListener("message",e=>{g(e.data.error)});let E=["Object Not Found Matching Id","Not implemented on this platform","provider because it's not your default extension"]},18515:(e,t,n)=>{n.d(t,{$m:()=>c,KM:()=>a,cr:()=>l});var r=n(15205),o=n(40578);function i(){return new Set((0,o.dU)().featureFlags.map(e=>e.toLowerCase()))}let s=n(71207).W6?i:(0,r.Z)(i);function a(){return Array.from(s())}function l(e){return s().has(e.toLowerCase())}let c={isFeatureEnabled:l}},79697:(e,t,n)=>{let r;n.d(t,{YT:()=>m,qP:()=>f,yM:()=>p});var o=n(88149),i=n(86058),s=n(56363),a=n(43786);let{getItem:l}=(0,s.Z)("localStorage"),c="dimension_",u=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,o.n)("octolytics");delete e.baseContext,r=new i.R(e)}catch(e){}function d(e){let t=(0,o.n)("octolytics").baseContext||{};if(t)for(let[e,n]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(c)&&(t[e.replace(c,"")]=n,delete t[e]);let n=document.querySelector("meta[name=visitor-payload]");for(let[e,r]of(n&&Object.assign(t,JSON.parse(atob(n.content))),new URLSearchParams(window.location.search)))u.includes(e.toLowerCase())&&(t[e]=r);return t.staff=(0,a.B)().toString(),Object.assign(t,e)}function m(e){r?.sendPageView(d(e))}function f(e,t={}){let n=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,o=n?{service:n}:{};for(let[e,n]of Object.entries(t))null!=n&&(o[e]=`${n}`);r&&(d(o),r.sendEvent(e||"unknown",d(o)))}function p(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},5223:(e,t,n)=>{n.d(t,{r:()=>a});var r=n(47940),o=n(50655);let i="parse-html-no-op",s=r.ZO.createPolicy(i,{createHTML:e=>o.O.apply({policy:()=>e,policyName:i,fallback:e,sanitize:!1,fallbackOnError:!0})});function a(e,t){let n=e.createElement("template");return n.innerHTML=s.createHTML(t),e.importNode(n.content,!0)}},54508:(e,t,n)=>{n.d(t,{A:()=>a,k:()=>s});var r=n(15205),o=n(71207);let i=(0,r.Z)(function(){return o.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}),s=(0,r.Z)(function(){return"enterprise"===i()}),a="webpack-react-next"},56363:(e,t,n)=>{n.d(t,{Z:()=>s,_:()=>a});var r=n(71207),o=n(43786);let i=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function s(e,t={throwQuotaErrorsOnSet:!1},n=r.iG,s=e=>e,a=e=>e){let l;try{if(!n)throw Error();l=n[e]||new i}catch{l=new i}let{throwQuotaErrorsOnSet:c}=t;function u(e){t.sendCacheStats&&(0,o.b)({incrementKey:e})}function d(e){try{if(l.removeItem(e),t.ttl){let t=`${e}:expiry`;l.removeItem(t)}}catch(e){}}return{getItem:function(e,t=new Date().getTime()){try{let n=l.getItem(e);if(!n)return null;let r=`${e}:expiry`,o=Number(l.getItem(r));if(o&&t>o)return d(e),d(r),u("SAFE_STORAGE_VALUE_EXPIRED"),null;return u("SAFE_STORAGE_VALUE_WITHIN_TTL"),s(n)}catch(e){return null}},setItem:function(e,n,r=new Date().getTime()){try{if(l.setItem(e,a(n)),t.ttl){let n=`${e}:expiry`,o=r+t.ttl;l.setItem(n,o.toString())}}catch(e){if(c&&e instanceof Error&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:d,clear:l.clear,key:l.key,get length(){return l.length}}}function a(e){return s(e,{throwQuotaErrorsOnSet:!1},r.iG,JSON.parse,JSON.stringify)}},65706:(e,t,n)=>{n.d(t,{LS:()=>o,cl:()=>i,rV:()=>r});let{getItem:r,setItem:o,removeItem:i}=(0,n(56363).Z)("sessionStorage")},58374:(e,t,n)=>{n.d(t,{Ak:()=>b,CI:()=>v,Gj:()=>y,J$:()=>S,Nb:()=>E,Nt:()=>w,OE:()=>g,U6:()=>m,Wl:()=>h,XL:()=>d,jN:()=>o,pS:()=>f,sj:()=>p,vu:()=>x,wG:()=>j,wP:()=>_});var r=n(65706);let o="reload",i="soft-nav:fail",s="soft-nav:fail-referrer",a="soft-nav:referrer",l="soft-nav:marker",c="soft-nav:react-app-name",u="soft-nav:latest-mechanism";function d(){(0,r.LS)(l,"0"),(0,r.cl)(a),(0,r.cl)(i),(0,r.cl)(s),(0,r.cl)(c),(0,r.cl)(u)}function m(e){(0,r.LS)(l,e)}function f(){(0,r.LS)(l,"0")}function p(){let e=(0,r.rV)(l);return e&&"0"!==e}function y(){return(0,r.rV)(l)}function g(){return!!h()}function h(){return(0,r.rV)(i)}function b(e){(0,r.LS)(i,e||o),(0,r.LS)(s,window.location.href)}function w(){(0,r.LS)(a,window.location.href)}function _(){return(0,r.rV)(a)||document.referrer}function S(){let e=E();e?(0,r.LS)(c,e):(0,r.cl)(c)}function v(){return(0,r.rV)(c)}function E(){return document.querySelector('meta[name="ui"]')?"ui":document.querySelector("react-app")?.getAttribute("app-name")}function x(e){(0,r.LS)(u,e)}function j(){return(0,r.rV)(u)}},71207:(e,t,n)=>{n.d(t,{Qg:()=>r.Qg,W6:()=>r.W6,cF:()=>r.cF,iG:()=>o.iG,n4:()=>o.n4,ssrSafeLocation:()=>o.jX,zu:()=>o.zu});var r=n(60327),o=n(66199)},66199:(e,t,n)=>{n.d(t,{iG:()=>o,jX:()=>s,n4:()=>r,zu:()=>i});let r="undefined"==typeof document?void 0:document,o="undefined"==typeof window?void 0:window,i="undefined"==typeof history?void 0:history,s="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:""}:location},60327:(e,t,n)=>{n.d(t,{Qg:()=>i,W6:()=>o,cF:()=>s});var r=n(66199);let o=void 0===r.n4,i=!o;function s(){return!!o||!!r.n4.querySelector('react-app[data-ssr="true"]')}},43786:(e,t,n)=>{n.d(t,{B:()=>m,b:()=>l});var r=n(71207),o=n(87274),i=n(54508),s=n(18515);let a=[];function l(e,t=!1,n=.5){if(!0!==(0,s.cr)("BROWSER_STATS_DISABLED")){if(n<0||n>1)throw RangeError("Sampling probability must be between 0 and 1");void 0===e.timestamp&&(e.timestamp=new Date().getTime()),e.loggedIn=!!r.n4?.head?.querySelector('meta[name="user-login"]')?.content,e.staff=m(),e.bundler=i.A,Math.random()<n&&a.push(e),t?d():u()}}let c=null;async function u(){await o.C,null==c&&(c=window.requestIdleCallback(d))}function d(){if(c=null,!a.length)return;let e=r.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(e){for(let t of function(e){let t=[],n=e.map(e=>JSON.stringify(e));for(;n.length>0;)t.push(function(e){let t=e.shift(),n=[t],r=t.length;for(;e.length>0&&r<=65536;){let t=e[0].length;if(r+t<=65536){let o=e.shift();n.push(o),r+=t}else break}return n}(n));return t}(a))!function(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}(e,`{"stats": [${t.join(",")}] }`);a=[]}}function m(){return!!r.n4?.head?.querySelector('meta[name="user-staff"]')?.content}r.n4?.addEventListener("pagehide",d),r.n4?.addEventListener("visibilitychange",d)},54868:(e,t,n)=>{function r(e){let t=e.split("\u200D"),n=0;for(let e of t)n+=Array.from(e.split(/[\ufe00-\ufe0f]/).join("")).length;return n/t.length}function o(e,t,n,r=!0){let o=e.value.substring(0,e.selectionEnd||0),i=e.value.substring(e.selectionEnd||0);return a(e,(o=o.replace(t,n))+(i=i.replace(t,n)),o.length,r),n}function i(e,t,n){if(null===e.selectionStart||null===e.selectionEnd)return o(e,t,n);let r=e.value.substring(0,e.selectionStart),i=e.value.substring(e.selectionEnd);return a(e,r+n+i,r.length),n}function s(e,t,n={}){let r=e.selectionEnd||0,o=e.value.substring(0,r),i=e.value.substring(r),s=(""===e.value||o.match(/\n$/)?"":"\n")+t+(n.appendNewline?"\n":"");e.value=o+s+i;let a=r+s.length;return e.selectionStart=a,e.selectionEnd=a,e.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1})),e.focus(),s}function a(e,t,n,r=!0){e.value=t,r&&(e.selectionStart=n,e.selectionEnd=n),e.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!1}))}function l(e,t){let n=[...e],r=new TextEncoder,o=new Uint8Array(4);for(let e=0;e<n.length;e++){let i=n[e],{written:s,read:a}=r.encodeInto(i,o);if(!s||!a)return -1;let l=s-a;if(0!==l&&(e<t&&(t-=l),e>=t))break}return t}n.d(t,{Om:()=>s,lp:()=>o,rq:()=>r,t4:()=>i,yb:()=>l})},50655:(e,t,n)=>{n.d(t,{O:()=>c,d:()=>TrustedTypesPolicyError});var r=n(18515),o=n(43786),i=n(65809),s=n(27856),a=n.n(s),l=n(79697);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};let c={apply:function({policy:e,policyName:t,fallback:n,fallbackOnError:s=!1,sanitize:c,silenceErrorReporting:u=!1}){try{if((0,r.cr)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return n;(0,o.b)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:t},!1,.1);let i=e();return c&&new Promise(e=>{let n=window.performance.now(),r=a().sanitize(i,{FORBID_ATTR:[]}),o=window.performance.now();if(i.length!==r.length){let s=Error("Trusted Types policy output sanitized"),a=s.stack?.slice(0,1e3),c=i.slice(0,250);(0,l.qP)("trusted_types_policy.sanitize",{policyName:t,output:c,stack:a,outputLength:i.length,sanitizedLength:r.length,executionTime:o-n}),e(i)}}),i}catch(e){if(e instanceof TrustedTypesPolicyError||(u||(0,i.eK)(e),(0,o.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!s))throw e}return n}}},47940:(e,t,n)=>{n.d(t,{ZO:()=>u});var r,o=n(71207),i=n(43786);function s(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let a={createHTML:s("createHTML"),createScript:s("createScript"),createScriptURL:s("createScriptURL")},l=(r=globalThis).__TRUSTED_TYPE_POLICIES__??(r.__TRUSTED_TYPE_POLICIES__=new Map),c=globalThis.trustedTypes??{createPolicy:(e,t)=>({name:e,...a,...t})},u={createPolicy:(e,t)=>{if(l.has(e))return(0,i.b)({incrementKey:"TRUSTED_TYPES_POLICY_INITIALIZED_TWICE"}),l.get(e);{let n=Object.freeze(c.createPolicy(e,t));return l.set(e,n),n}}},d=!1;o.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||d||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #prodsec-engineering if you have any additional questions about Trusted Types or CSP.`),d=!0)})}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_dompurify_dist_purify_js","vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_delegated-events_dist_in-f50a45","app_assets_modules_github_behaviors_details_ts-app_assets_modules_github_onfocus_ts-app_asset-079aeb"],()=>t(99049)),e.O()}]);
//# sourceMappingURL=scanning-00e798e41bdb.js.map