"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_custom-properties-editing_hooks_use-edit-custom-properties_ts-ui_packages_custom--8ee586"],{83709:(e,t,r)=>{r.d(t,{ff:()=>d,b2:()=>m,vk:()=>p,TQ:()=>u,ik:()=>y});let n=["true","false"];var a=r(54332),o=r(22326),i=r(73249);let s=async(e,t)=>!(e?.length&&t?.length)||await (0,i.e)({pattern:e,value:t},(0,o.kn)()),l=/[^a-zA-Z0-9_#$-]/gu,c=/[^ -!#-~]/gu;function u(e,t){if(e.length>75)return"Name cannot be longer than 75 characters";if(0===e.length)return"Name is required";for(let r of t)if(r.toLowerCase()===e.toLowerCase())return"Name already exists";let r=g(e,l);if(r)return`Name contains invalid characters: ${r}`}function d(e,t){if(e.length>75)return"Option cannot be longer than 75 characters";if(0===e.length)return"Option cannot be empty";if(t.has(e))return"Option already exists";let r=g(e,c);if(r)return`Option contains invalid characters: ${r}`}function p(e){if(e.length>255)return"Description cannot be longer than 255 characters"}let f="Invalid value type",h="Default value should be a valid option";async function m(e,t,r,o=[],i){if(r){if(!e.length)return"Cannot be empty for a required property";switch(t){case"single_select":if((0,a.Fz)(e))return f;if(!o.includes(e))return h;break;case"true_false":if((0,a.Fz)(e))return f;if(!n.includes(e))return h;break;case"multi_select":if(!(0,a.Fz)(e))return f;if(!e.every(e=>o.includes(e)))return h;break;case"string":if((0,a.Fz)(e))return f;return await y(e,i)}}}async function y(e,t){if(!e)return;if(e.length>75)return"Cannot be longer than 75 characters";let r=g(e,c);return r?`Contains invalid characters: ${r}`:t&&!await s(t,e)?"Value does not match pattern":void 0}function g(e,t){let r=Array.from(e.matchAll(t));return r?Array.from(new Set(r.map(e=>" "===e[0]?"whitespace":e[0]))).join(", "):""}},44670:(e,t,r)=>{r.d(t,{Q:()=>l,R:()=>s});var n=r(46263),a=r(54332),o=r(58081),i=r(83709);function s(e,t,r=[]){let s=(0,o.useMemo)(()=>(function(e){let t={},r={};for(let n of e)for(let[e,o]of Object.entries(n)){let n=t[e];n?(0,a.x4)(n.value,o)||(t[e]={mixed:!0}):t[e]={value:o},r[e]||(r[e]=0),r[e]++}for(let[n,a]of Object.entries(r))t[n]&&a<e.length&&(t[n]={mixed:!0});return t})(e),[]),l=(0,o.useMemo)(()=>new Map(t.map(e=>[e.propertyName,e.regex||void 0])),[t]),[c,u]=(0,o.useState)({}),[d,p]=(0,o.useState)({});(0,o.useEffect)(()=>p({}),r);let f=(0,o.useCallback)((0,n.D)(async(e,t)=>{let r=t&&!(0,a.Fz)(t)&&await (0,i.ik)(t,l.get(e)),n={...c};delete n[e],r&&(n[e]=r),u(n)},300),[c,l]);return{propertyValuesMap:(0,o.useMemo)(()=>{let e=Object.entries({...s,...d}).reduce((e,[t,r])=>{let n=s[t],o=t in d;if(!o&&n?.mixed)e[t]={propertyName:t,changed:!1,mixed:!0};else{let i=o&&(n?.mixed||!(0,a.x4)(n?.value,r.value)),s=o?r.value:n?.value;e[t]={value:s,changed:i,propertyName:t,mixed:!1}}return e},{});for(let t of Object.entries(c)){let[r,n]=t,a=e[r];a&&(a.error=n)}return e},[d,s,c]),setPropertyValue:function(e,t){p({...d,[e]:{value:t}}),f(e,t)},revertPropertyValue:function(e){let t={...d};delete t[e],p(t);let r={...c};delete r[e],u(r)},discardChanges:function(){p({})}}}function l(e,t){return e.reduce((e,r)=>{let n=t[r.propertyName];return n?.changed&&(e[r.propertyName]=n.value||(0,a.ag)(r.valueType)),e},{})}},59158:(e,t,r)=>{r.d(t,{Z:()=>f,bU:()=>_});var n=r(48055),a=r(54332),o=r(85529),i=r(95136),s=r(88216),l=r(79902),c=r(58081);let u="(Mixed)",d={leadingVisual:o.CircleSlashIcon,text:"No matches",disabled:!0,selected:void 0,key:"no-matches",id:"no-matches"};function p({propertyDefinition:e,propertyValue:t,mixed:r,onChange:a,hideDefaultPlaceholder:o}){let s=h(e,r,t?[t]:[],o),l=s.items.find(e=>e.text&&t===e.text);return(0,n.jsx)(i.b,{...s,onSelectedChange:e=>a(e?.text||""),selected:l})}function f({anchorRef:e,propertyDefinition:t,propertyValue:r,mixed:a,onChange:o,hideDefaultPlaceholder:s}){let l=h(t,a,r,s),c=l.items.filter(e=>e.selected);return(0,n.jsx)(i.b,{...l,anchorRef:e,onSelectedChange:e=>{let{filterValue:t}=l,n=e.map(e=>e.text||"");t?o([...r.filter(e=>!e.toLowerCase().includes(t.toLowerCase())),...n]):o(n)},selected:c})}function h(e,t,r,i){var p;let{propertyName:f,defaultValue:h}=e,[y,g]=(0,c.useState)(!1),[w,b]=(0,c.useState)(""),x=function(e,t){let r=t?e.filter(e=>(e.text||"").toLowerCase().includes(t)):e;return 0===r.length?[d]:r}((0,c.useMemo)(()=>(e.allowedValues||[]).map(e=>({id:e,text:e,selected:r.includes(e)})),[e,r]),w.toLowerCase()),v=x.length>7?"medium":"auto",S=(p=i?null:h,t?u:(0,a.it)(r)?(0,a.it)(p)?"Choose an option":`default (${m(p||"")})`:m(r));return{items:x,renderAnchor:e=>(0,n.jsx)(s.r,{block:!0,alignContent:"start","aria-label":t?u:`Select ${f}`,trailingAction:o.TriangleDownIcon,sx:{minWidth:0,'>span[data-component="buttonContent"]':{flex:1}},...e,children:(0,n.jsx)(l.Z,{maxWidth:"100%",title:S,children:S})}),placeholderText:"Search for values",filterValue:w,open:y,onFilterChange:b,onOpenChange:e=>{g(e),b("")},overlayProps:{height:v,width:"medium"}}}function m(e){return(0,a.Fz)(e)?e.length<=1?e[0]||"":`${e.length} selected`:e}try{p.displayName||(p.displayName="CustomPropertySingleSelectPanel")}catch{}try{f.displayName||(f.displayName="CustomPropertyMultiSelectPanel")}catch{}var y=r(22326),g=r(42483),w=r(97011),b=r(73290),x=r(9770),v=r(51526),S=r(84817),T=r(45677),j=r(50919),L=r(14786);function _(e){let{definitions:t,propertyValuesMap:r,orgName:a,showLockMessages:o=!0,showUndo:i=!0}=e,{editableDefinitions:s}=e,l=(0,c.useMemo)(()=>new Set((s||[]).map(e=>e.propertyName)),[s]),u=(0,c.useMemo)(()=>e.border?{border:"1px solid",borderColor:"border.muted",borderRadius:2}:{},[e.border]);return 0===t.length?null:(0,n.jsx)(g.Z,{sx:{"div:last-child":{borderBottomWidth:0},...u},"data-testid":"custom-property-values-table",children:t.map(t=>{let{propertyName:s}=t,c=r[s],u="editableDefinitions"in e&&l.has(s);return(0,n.jsx)(g.Z,{sx:{px:3,borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"border.default"},"data-testid":"property-row",children:u?(0,n.jsx)(C,{changed:!!c?.changed,mixed:!!c?.mixed,propertyValue:c?.value,definition:t,error:c?.error,onChange:t=>e.setPropertyValue(s,t),onReset:()=>e.revertPropertyValue(s),showUndo:i},s):(0,n.jsx)(E,{propertyValue:c?.value||t.defaultValue||"",definition:t,showLockMessages:o,orgName:a},s)},s)})})}function E({propertyValue:e,definition:t,showLockMessages:r,orgName:a}){let{description:i}=t;return(0,n.jsx)(N,{label:q(t),description:i,value:(0,n.jsx)(k,{propertyValue:e,definition:t}),bottomMessage:r&&(0,n.jsxs)(g.Z,{sx:{display:"inline"},children:[(0,n.jsxs)(w.Z,{sx:{color:"fg.subtle"},children:[(0,n.jsx)(o.ShieldLockIcon,{size:"small"})," Managed by"," "]}),(0,n.jsx)(b.Z,{inline:!0,href:(0,y.lr)({owner:a}),children:a})]})})}function C({propertyValue:e,definition:t,changed:r,mixed:a=!1,error:o,onChange:i,onReset:s,showUndo:l}){let{propertyName:c,description:u}=t;return(0,n.jsx)(N,{label:q(t),description:u,value:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.Z,{sx:{display:"flex",gap:2},children:(0,n.jsx)(R,{propertyDefinition:t,propertyValue:e,mixed:a,block:!0,onChange:i})}),o&&(0,n.jsx)(x.Z.Validation,{variant:"error",sx:{pt:2},children:o})]}),trailing:(0,n.jsx)(O,{required:t.required,propertyName:c,changed:r,onReset:s,onChange:i,showUndo:l})})}let P={display:"grid",flex:1,py:3,gridTemplateColumns:["1fr auto","1fr auto","1fr 220px minmax(39px, auto)"],gridTemplateRows:["auto auto auto auto","auto auto auto auto","min-content min-content 1fr"],gridTemplateAreas:['"name trailing" "description trailing" "value trailing" "bottomMessage trailing"','"name trailing" "description trailing" "value trailing" "bottomMessage trailing"','"name value trailing" "description value trailing" "bottomMessage value trailing"']};function N({label:e,description:t,bottomMessage:r,value:a,trailing:o}){return(0,n.jsxs)(x.Z,{sx:P,children:[(0,n.jsx)(x.Z.Label,{sx:{gridArea:"name",pr:3,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},"data-testid":"property-name",children:e}),(0,n.jsx)(g.Z,{sx:{gridArea:"value",mt:[1,1,0]},children:a}),o&&(0,n.jsx)(g.Z,{sx:{gridArea:"trailing",pl:2,mt:0},children:o}),t&&(0,n.jsx)(x.Z.Caption,{sx:{gridArea:"description",pr:3},children:t}),r&&(0,n.jsx)(g.Z,{sx:{gridArea:"bottomMessage",mt:1},children:r})]})}function R(e){let{valueType:t}=e.propertyDefinition,r=e.propertyValue||(0,a.ag)(t);switch(t){case"single_select":return(0,n.jsx)(p,{...e,propertyValue:r});case"multi_select":return(0,n.jsx)(f,{...e,propertyValue:r});case"true_false":return(0,n.jsx)(p,{...e,propertyDefinition:{...e.propertyDefinition,allowedValues:["true","false"]},propertyValue:r});case"string":return(0,n.jsx)(A,{...e,propertyValue:r});default:return null}}function A({propertyDefinition:e,propertyValue:t,mixed:r,block:a,onChange:o,hideDefaultPlaceholder:i}){let{defaultValue:s,propertyName:l}=e;return(0,n.jsx)(v.Z,{block:a,"aria-label":l,onChange:e=>o(e.target.value),value:t,placeholder:r?u:i?"":s||""})}function k({propertyValue:e,definition:t}){if((0,a.it)(e))return(0,n.jsx)(n.Fragment,{children:"(Empty)"});switch(t.valueType){case"single_select":case"true_false":return(0,n.jsx)(S.Z,{sx:{color:"fg.default"},text:(0,n.jsx)(l.Z,{title:e,maxWidth:"100%",children:e})});case"multi_select":return(0,n.jsx)(n.Fragment,{children:e.map(e=>(0,n.jsx)(S.Z,{sx:{color:"fg.default",mr:1},text:(0,n.jsx)(l.Z,{title:e,maxWidth:"100%",children:e})},e))});case"string":return(0,n.jsx)(l.Z,{title:e,maxWidth:"100%",children:e})}}function q({propertyName:e,required:t}){return`${e}${t?" *":""}`}function O({propertyName:e,required:t,changed:r,showUndo:a=!0,onReset:i,onChange:s}){let l=`Undo ${e} changes`,c=`Reset ${e} to default value`;return(0,n.jsxs)(T.P,{children:[(0,n.jsx)(T.P.Anchor,{children:(0,n.jsx)(j.h,{icon:o.KebabHorizontalIcon,variant:"invisible","aria-label":`Open reset options for ${e}`})}),(0,n.jsx)(T.P.Overlay,{width:"small",children:(0,n.jsxs)(L.S,{children:[a&&(0,n.jsxs)(L.S.Item,{onSelect:i,"aria-label":l,inactiveText:r?void 0:"No change to undo",children:[(0,n.jsx)(L.S.LeadingVisual,{children:(0,n.jsx)(o.UndoIcon,{})}),(0,n.jsx)(w.Z,{sx:{fontWeight:"bold",display:"block"},children:"Undo"}),(0,n.jsx)(w.Z,{sx:{fontSize:"small",color:"fg.subtle"},children:"Reset to the last used value"})]}),t&&(0,n.jsxs)(L.S.Item,{onSelect:()=>s(""),"aria-label":c,children:[(0,n.jsx)(L.S.LeadingVisual,{children:(0,n.jsx)(o.SyncIcon,{})}),(0,n.jsx)(w.Z,{sx:{fontWeight:"bold",display:"block"},children:"Reset to default"}),(0,n.jsx)(w.Z,{sx:{fontSize:"small",color:"fg.subtle"},children:"Use the default value defined by the organization"})]})]})})]})}try{_.displayName||(_.displayName="CustomPropertyValuesTable")}catch{}try{E.displayName||(E.displayName="CustomPropertyReadValueRow")}catch{}try{C.displayName||(C.displayName="CustomPropertyEditValueRow")}catch{}try{N.displayName||(N.displayName="DataTableRow")}catch{}try{R.displayName||(R.displayName="CustomPropertyInput")}catch{}try{A.displayName||(A.displayName="StringPropertyInput")}catch{}try{k.displayName||(k.displayName="DisplayPropertyValue")}catch{}try{O.displayName||(O.displayName="ResetDropdown")}catch{}},54332:(e,t,r)=>{function n(e){return Array.isArray(e)}function a(e){return!e||0===e.length}function o(e){return"multi_select"===e?[]:""}function i(e,t){return Array.isArray(e)&&Array.isArray(t)?e.length===t.length&&e.every((e,r)=>e===t[r]):e===t}r.d(t,{Fz:()=>n,ag:()=>o,it:()=>a,x4:()=>i})},12040:(e,t,r)=>{r.d(t,{W:()=>a});var n=r(59753);async function a(e){let t=document.querySelector("#site-details-dialog").content.cloneNode(!0),r=t.querySelector("details"),a=r.querySelector("details-dialog"),o=r.querySelector(".js-details-dialog-spinner");e.detailsClass&&r.classList.add(...e.detailsClass.split(" ")),e.dialogClass&&a.classList.add(...e.dialogClass.split(" ")),e.label?a.setAttribute("aria-label",e.label):e.labelledBy&&a.setAttribute("aria-labelledby",e.labelledBy),document.body.append(t);try{let t=await e.content;o.remove(),a.prepend(t)}catch(r){o.remove();let t=document.createElement("span");t.textContent=e.errorMessage||"Couldn't load the content",t.classList.add("my-6"),t.classList.add("mx-4"),a.prepend(t)}return r.addEventListener("toggle",()=>{r.hasAttribute("open")||((0,n.f)(a,"dialog:remove"),r.remove())}),a}},65809:(e,t,r)=>{r.d(t,{eK:()=>y});var n=r(82918),a=r(21630),o=r(28382);function i(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}var s=r(54508),l=r(71207),c=r(18515),u=r(58374);let d=!1,p=0,f=Date.now(),h=new Set(["Failed to fetch","NetworkError when attempting to fetch resource."]);function m(e){return!!("AbortError"===e.name||"TypeError"===e.name&&h.has(e.message)||e.name.startsWith("ApiError")&&h.has(e.message))}function y(e,t={}){if((0,c.cr)("FAILBOT_HANDLE_NON_ERRORS")){if(!(e instanceof Error||"object"==typeof e&&null!==e&&"name"in e&&"string"==typeof e.name&&"message"in e&&"string"==typeof e.message)){if(function(e){if(!e||"boolean"==typeof e||"number"==typeof e)return!0;if("string"==typeof e){if(T.some(t=>e.includes(t)))return!0}else if("object"==typeof e&&"string"==typeof e.message&&"number"==typeof e.code)return!0;return!1}(e))return;let r=Error(),n=function(e){try{return JSON.stringify(e)}catch{return"Unserializable"}}(e);g(b({type:"UnknownError",value:`Unable to report error, due to a thrown non-Error type: ${typeof e}, with value ${n}`,stacktrace:x(r),catalogService:void 0},t));return}m(e)||g(b(w(e),t))}else m(e)||g(b(w(e),t))}async function g(e){if(!(!S&&!d&&p<10&&(0,a.Gb)()))return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(e.error.stacktrace.some(e=>v.test(e.filename)||v.test(e.function))){d=!0;return}p++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function w(e){return{type:e.name,value:e.message,stacktrace:x(e),catalogService:e.catalogService}}function b(e,t={}){return Object.assign({error:e,sanitizedUrl:`${window.location.protocol}//${window.location.host}${function(){let e=i("meta[name=analytics-location]");return e?e.content:window.location.pathname}()+function(){let e=i("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let r=i("meta[name=analytics-location-params]");for(let e of(r&&(t+=(t?"&":"?")+r.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let r=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${r[0]}($|=)`,"g"),`$1${r[1]}$2`)}return t}()}`||window.location.href,readyState:document.readyState,referrer:(0,u.wP)(),timeSinceLoad:Math.round(Date.now()-f),user:function(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,n.b)();return`anonymous-${t}`}()||void 0,bundler:s.A,ui:!!document.querySelector('meta[name="ui"]')},t)}function x(e){return(0,o.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let v=/(chrome|moz|safari)-extension:\/\//,S=!1;l.iG?.addEventListener("pageshow",()=>S=!1),l.iG?.addEventListener("pagehide",()=>S=!0),"function"==typeof BroadcastChannel&&new BroadcastChannel("shared-worker-error").addEventListener("message",e=>{y(e.data.error)});let T=["Object Not Found Matching Id","Not implemented on this platform","provider because it's not your default extension"]},34532:(e,t,r)=>{r.d(t,{DF:()=>u,Fr:()=>d,a_:()=>c});var n=r(5223);let a=class ResponseError extends Error{constructor(e,t){super(`${e} for HTTP ${t.status}`),this.response=t}};var o=r(47940),i=r(50655);let s="server-x-safe-html",l=o.ZO.createPolicy(s,{createHTML:(e,t)=>i.O.apply({policy:()=>(!function(e,t,r=!1){let n=t.headers.get("content-type")||"";if(!r&&!n.startsWith("text/html"))throw new a(`expected response with text/html, but was ${n}`,t);if(r&&!(n.startsWith("text/html")||n.startsWith("application/json")))throw new a(`expected response with text/html or application/json, but was ${n}`,t);let o=t.headers.get("x-html-safe");if(o){if(!e.includes(o))throw new a("response X-HTML-Safe nonce did not match",t)}else throw new a("missing X-HTML-Safe nonce",t)}(function(e){let t=[...e.querySelectorAll("meta[name=html-safe-nonce]")].map(e=>e.content);if(t.length<1)throw Error("could not find html-safe-nonce on document");return t}(document),t),e),policyName:s,fallback:e,silenceErrorReporting:!0})});async function c(e,t,r){let a=new Request(t,r);a.headers.append("X-Requested-With","XMLHttpRequest");let o=await self.fetch(a);if(o.status<200||o.status>=300)throw Error(`HTTP ${o.status}${o.statusText||""}`);let i=l.createHTML(await o.text(),o);return(0,n.r)(e,i)}function u(e,t,r=1e3,n=[200],a=[202]){return async function r(o){let i=new Request(e,t);i.headers.append("X-Requested-With","XMLHttpRequest");let s=await self.fetch(i);if(a.includes(s.status))return await new Promise(e=>setTimeout(e,o)),r(1.5*o);if(n.includes(s.status))return s;if(s.status<200||s.status>=300)throw Error(`HTTP ${s.status}${s.statusText||""}`);throw Error(`Unexpected ${s.status} response status from poll endpoint`)}(r)}async function d(e,t,r){let{wait:n=500,acceptedStatusCodes:a=[200],max:o=3,attempt:i=0}=r||{},s=async()=>new Promise((r,s)=>{setTimeout(async()=>{try{let n=new Request(e,t);n.headers.append("X-Requested-With","XMLHttpRequest");let s=await self.fetch(n);if(a.includes(s.status)||i+1===o)return r(s);r("retry")}catch(e){s(e)}},n*i)}),l=await s();return"retry"!==l?l:d(e,t,{wait:n,acceptedStatusCodes:a,max:o,attempt:i+1})}},91534:(e,t,r)=>{r.d(t,{Z:()=>n});let n=(e,t)=>{let r=new URL(e,window.location.origin),n=new URL(t,window.location.origin);return n.href.includes("#")&&r.host===n.host&&r.pathname===n.pathname&&r.search===n.search}},5223:(e,t,r)=>{r.d(t,{r:()=>s});var n=r(47940),a=r(50655);let o="parse-html-no-op",i=n.ZO.createPolicy(o,{createHTML:e=>a.O.apply({policy:()=>e,policyName:o,fallback:e,sanitize:!1,fallbackOnError:!0})});function s(e,t){let r=e.createElement("template");return r.innerHTML=i.createHTML(t),e.importNode(r.content,!0)}},7949:(e,t,r)=>{r.d(t,{g:()=>a,y:()=>o});var n=r(12008);let a=()=>n.M()?.enabled_features??{},o=e=>!!a()[e]},73249:(e,t,r)=>{r.d(t,{E:()=>i,e:()=>c});var n,a=r(87623),o=r(58081);function i(e,t){let[r,n]=(0,o.useState)(2);return{isValid:1===r,showError:0===r,validate:async(r,a={})=>{if(n(2),!t)return!0;let o=await s(r,`${e}/${t}`,a);return n(o),l(o)},reset:(e=!1)=>{n(e?1:2)}}}!function(e){e[e.INVALID=0]="INVALID",e[e.VALID=1]="VALID",e[e.UNKNOWN=2]="UNKNOWN"}(n||(n={}));let s=async(e,t,r)=>{let n=await (0,a.v)(t,{...r,method:"POST",body:e});if(n.ok){let{valid:e}=await n.json();return e?1:0}return 400===n.status?0:2},l=e=>{switch(e){case 1:case 2:return!0;case 0:return!1}},c=async(e,t)=>l(await s(e,t))},74428:(e,t,r)=>{r.d(t,{JR:()=>u,ZP:()=>p,qG:()=>f});var n=r(12040),a=r(34532),o=r(65935),i=r(20161);let s=!1;async function l(){let e=document.querySelector("link[rel=sudo-modal]"),t=document.querySelector(".js-sudo-prompt");if(t instanceof HTMLTemplateElement)return t;if(e){let t=await (0,a.a_)(document,function(e){let t=new URL(e,window.location.origin),r=new URLSearchParams(t.search.slice(1));return r.set("webauthn-support",(0,i.T)()),t.search=r.toString(),t.toString()}(e.href));return document.body.appendChild(t),document.querySelector(".js-sudo-prompt")}throw Error("couldn't load sudo prompt")}let c=!1;async function u(e){if(s)return!1;s=!0,c=!1;let t=(await l()).content.cloneNode(!0),r=await (0,n.W)({content:t}),a=e?.closest("details[open]");return a&&a.removeAttribute("open"),await new Promise(e=>{r.addEventListener("dialog:remove",function(){a&&a.setAttribute("open","open"),s=!1,e()},{once:!0})}),c}async function d(e,t,r="Sudo authentication failed.",n="Too many authentication attempts. Please try again later.",a=".js-sudo-error",o){try{await t.text()}catch(i){let t;if(!i.response)throw i;switch(i.response.status){case 401:t=r;break;case 429:t=n;break;default:t="An unknown error occurred. Please try again later."}if(e.querySelector(a).textContent=t,e.querySelector(a).hidden=!1,o&&(e.querySelector(o).value=""),401!==i.response.status&&429!==i.response.status)throw i;return}c=!0,e.closest("details").removeAttribute("open")}async function p(e){let t=await fetch("/sessions/in_sudo",{headers:{accept:"application/json","X-Requested-With":"XMLHttpRequest"}});return!!t.ok&&"true"===await t.text()||u(e)}async function f(){let e=await fetch("/sessions/in_sudo",{headers:{accept:"application/json","X-Requested-With":"XMLHttpRequest"}});return!!e.ok&&"true"===await e.text()}(0,o.AC)(".js-sudo-webauthn-form",async function(e,t){await d(e,t)}),(0,o.AC)(".js-sudo-github-mobile-form",async function(e,t){await d(e,t)}),(0,o.AC)(".js-sudo-totp-form",async function(e,t){await d(e,t,void 0,void 0,".flash-error","#totp")}),(0,o.AC)(".js-sudo-password-form",async function(e,t){await d(e,t,"Incorrect password.","Too many password attempts. Please wait and try again.",void 0,".js-sudo-password")})},50655:(e,t,r)=>{r.d(t,{O:()=>c,d:()=>TrustedTypesPolicyError});var n=r(18515),a=r(43786),o=r(65809),i=r(27856),s=r.n(i),l=r(79697);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};let c={apply:function({policy:e,policyName:t,fallback:r,fallbackOnError:i=!1,sanitize:c,silenceErrorReporting:u=!1}){try{if((0,n.cr)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return r;(0,a.b)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:t},!1,.1);let o=e();return c&&new Promise(e=>{let r=window.performance.now(),n=s().sanitize(o,{FORBID_ATTR:[]}),a=window.performance.now();if(o.length!==n.length){let i=Error("Trusted Types policy output sanitized"),s=i.stack?.slice(0,1e3),c=o.slice(0,250);(0,l.qP)("trusted_types_policy.sanitize",{policyName:t,output:c,stack:s,outputLength:o.length,sanitizedLength:n.length,executionTime:a-r}),e(o)}}),o}catch(e){if(e instanceof TrustedTypesPolicyError||(u||(0,o.eK)(e),(0,a.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!i))throw e}return r}}},47940:(e,t,r)=>{r.d(t,{ZO:()=>u});var n,a=r(71207),o=r(43786);function i(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let s={createHTML:i("createHTML"),createScript:i("createScript"),createScriptURL:i("createScriptURL")},l=(n=globalThis).__TRUSTED_TYPE_POLICIES__??(n.__TRUSTED_TYPE_POLICIES__=new Map),c=globalThis.trustedTypes??{createPolicy:(e,t)=>({name:e,...s,...t})},u={createPolicy:(e,t)=>{if(l.has(e))return(0,o.b)({incrementKey:"TRUSTED_TYPES_POLICY_INITIALIZED_TWICE"}),l.get(e);{let r=Object.freeze(c.createPolicy(e,t));return l.set(e,r),r}}},d=!1;a.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||d||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #prodsec-engineering if you have any additional questions about Trusted Types or CSP.`),d=!0)})},85193:(e,t,r)=>{r.d(t,{l:()=>p,s:()=>d});var n=r(58081),a=r(89250),o=r(12599),i=r(79655),s=r(91534),l=r(40940),c=r(10394),u=r(42439);let d=()=>{let{routes:e,history:t}=n.useContext(l.I),i=(0,a.s0)();return n.useCallback((n,a)=>{let l=(0,o.i3)(n).pathname;if((0,o.fp)(e,l))(0,s.Z)(location.href,n.toString())||(0,c.LD)("react"),(0,u.X)(()=>{i(n,a);let{turbo:e,...t}=window.history.state;window.history.replaceState({...t,skipTurbo:!0},"",location.href)});else{let e=t.createHref(n);(async()=>{let{softNavigate:t}=await Promise.all([r.e("vendors-node_modules_github_turbo_dist_turbo_es2017-esm_js"),r.e("ui_packages_soft-navigate_soft-navigate_ts")]).then(r.bind(r,12272));t(e)})()}},[t,i,e])},p=()=>{let[e]=(0,i.lr)(),t=d(),{pathname:r}=(0,a.TH)(),o=n.useCallback((n,a)=>{t({pathname:r,search:(0,i.fW)("function"==typeof n?n(e):n).toString()},a)},[e,t,r]);return[e,o]}},87623:(e,t,r)=>{function n(e,t={}){!function(e){if(new URL(e,window.location.origin).origin!==window.location.origin)throw Error("Can not make cross-origin requests from verifiedFetch")}(e);let r={...t.headers,"GitHub-Verified-Fetch":"true","X-Requested-With":"XMLHttpRequest"};return fetch(e,{...t,headers:r})}function a(e,t){let r={...t?.headers??{},Accept:"application/json","Content-Type":"application/json"},a=t?.body?JSON.stringify(t.body):void 0;return n(e,{...t,body:a,headers:r})}r.d(t,{Q:()=>n,v:()=>a})},20161:(e,t,r)=>{r.d(t,{T:()=>a,k:()=>o});var n=r(8433);function a(){return(0,n.Zh)()?"supported":"unsupported"}async function o(){return await window.PublicKeyCredential?.isUserVerifyingPlatformAuthenticatorAvailable()?"supported":"unsupported"}},79804:(e,t,r)=>{r.d(t,{O:()=>s});var n=r(48055),a=r(58081),o=r(26012),i=r(71207);let s=(0,a.forwardRef)(function({src:e,size:t=20,...r},s){let l=(0,a.useMemo)(()=>{let r=new URL(e,i.ssrSafeLocation.origin);return r.searchParams.has("size")||r.searchParams.has("s")||r.searchParams.set("size",String(2*Number(t))),r.toString()},[e,t]);return(0,n.jsx)(o.Z,{ref:s,src:l,size:t,"data-testid":"github-avatar",...r})});try{s.displayName||(s.displayName="GitHubAvatar")}catch{}},5475:(e,t,r)=>{r.d(t,{g:()=>n});function n({path:e,Component:t,shouldNavigateOnError:r,transitionType:n,children:a}){return{path:e,Component:t,coreLoader:async function({location:e}){let t;try{let r=`${e.pathname}${e.search}`;t=await window.fetch(r,{headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest","X-GitHub-Target":"dotcom"}})}catch(e){return{type:r?"route-handled-error":"error",error:{type:"fetchError"}}}if(t.redirected)return{type:"redirect",url:t.url};if(!t.ok)return{type:r?"route-handled-error":"error",error:{type:"httpError",httpStatus:t.status}};try{let e=await t.json();return{type:"loaded",data:e,title:e.title}}catch(e){return{type:r?"route-handled-error":"error",error:{type:"badResponseError"}}}},loadFromEmbeddedData:function({embeddedData:e}){return{data:e,title:e.title}},transitionType:n,children:a}}}}]);
//# sourceMappingURL=ui_packages_custom-properties-editing_hooks_use-edit-custom-properties_ts-ui_packages_custom--8ee586-9d65103578d2.js.map