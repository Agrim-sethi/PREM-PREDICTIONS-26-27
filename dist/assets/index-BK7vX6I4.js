var gp=Object.defineProperty;var mp=(r,e,t)=>e in r?gp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var H=(r,e,t)=>mp(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const ge=["Agrim","Samarth","Dhairya","Luvi","Claude"],nt={captain:{label:"Captain",short:"CAPT",allowance:1,perGameweek:!0,color:"var(--pitch)",needsMatch:!0,needsTarget:!1,desc:"1 available every GW · doubles one match (base+scoreline+unique)"},wildcard:{label:"Wild Card",short:"WILD",allowance:2,perGameweek:!1,color:"var(--gold)",needsMatch:!1,needsTarget:!1,desc:"2 available for the season · doubles your whole GW (stacks: 1=2x, 2=4x)"},chaos:{label:"Chaos Card",short:"CHAOS",allowance:1,perGameweek:!1,color:"var(--red)",needsMatch:!1,needsTarget:!1,desc:"1 available for the season · doubles EVERYONE's GW points"},floor:{label:"Floor Card",short:"FLOOR",allowance:3,perGameweek:!1,color:"var(--blue)",needsMatch:!1,needsTarget:!1,desc:"3 available for the season · guarantees 5 pts minimum for the GW"},mirror:{label:"Mirror",short:"MIRR",allowance:5,perGameweek:!1,color:"var(--violet)",needsMatch:!0,needsTarget:!0,desc:"5 available for the season · forces target's prediction to be overwritten by yours"},nemesis:{label:"Nemesis",short:"NEM",allowance:3,perGameweek:!1,color:"var(--maroon)",needsMatch:!1,needsTarget:!0,desc:"3 available for the season · outscore target this GW, steal 3 pts"}},Ep=()=>{};var xc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},_p=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],B=r[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|B&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Hh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,B=o?r[s+1]:0,l=s+2<r.length,c=l?r[s+2]:0,h=i>>2,C=(i&3)<<4|B>>4;let p=(B&15)<<2|c>>6,_=c&63;l||(_=64,o||(p=64)),n.push(t[h],t[C],t[p],t[_])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Gh(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):_p(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],B=s<r.length?t[r.charAt(s)]:0;++s;const c=s<r.length?t[r.charAt(s)]:64;++s;const C=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||B==null||c==null||C==null)throw new Dp;const p=i<<2|B>>4;if(n.push(p),c!==64){const _=B<<4&240|c>>2;if(n.push(_),C!==64){const A=c<<6&192|C;n.push(A)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class Dp extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yp=function(r){const e=Gh(r);return Hh.encodeByteArray(e,!0)},Uh=function(r){return yp(r).replace(/\./g,"")},Jh=function(r){try{return Hh.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ip=()=>wp().__FIREBASE_DEFAULTS__,Tp=()=>{if(typeof process>"u"||typeof xc>"u")return;const r=xc.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Ap=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Jh(r[1]);return e&&JSON.parse(e)},Fo=()=>{try{return Ep()||Ip()||Tp()||Ap()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},vp=r=>{var e,t;return(t=(e=Fo())==null?void 0:e.emulatorHosts)==null?void 0:t[r]},jh=()=>{var r;return(r=Fo())==null?void 0:r.config},qh=r=>{var e;return(e=Fo())==null?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function bp(){var e;const r=(e=Fo())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Pp(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Sp(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Np(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Op(){const r=We();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Fp(){return!bp()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Lp(){try{return typeof indexedDB=="object"}catch{return!1}}function xp(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp="FirebaseError";class en extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=kp,Object.setPrototypeOf(this,en.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oi.prototype.create)}}class oi{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Vp(i,n):"Error",B=`${this.serviceName}: ${o} (${s}).`;return new en(s,B,n)}}function Vp(r,e){try{let t=0,n="";for(;t<r.length;){const s=r.indexOf("{$",t);if(s===-1){n+=r.substring(t);break}const i=r.indexOf("}",s+2);if(i===-1){n+=r.substring(t);break}const o=r.substring(s+2,i),B=e[o];n+=r.substring(t,s)+(B!=null?String(B):`<${o}?>`),t=i+1}return n}catch{return r}}function Mp(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ir(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(kc(i)&&kc(o)){if(!ir(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function kc(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Is(r){const e={};return r.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[s,i]=n.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ts(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function Gp(r,e){const t=new Hp(r,e);return t.subscribe.bind(t)}class Hp{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");Up(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Pa),s.error===void 0&&(s.error=Pa),s.complete===void 0&&(s.complete=Pa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Up(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Pa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(r){return r&&r._delegate?r._delegate:r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $h(r){return(await fetch(r,{credentials:"include"})).ok}class or{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new Kh;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qp(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const B=this.normalizeInstanceIdentifier(i);n===B&&o.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:jp(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jp(r){return r===zn?void 0:r}function qp(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Jp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var le;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(le||(le={}));const $p={debug:le.DEBUG,verbose:le.VERBOSE,info:le.INFO,warn:le.WARN,error:le.ERROR,silent:le.SILENT},zp=le.INFO,Qp={[le.DEBUG]:"log",[le.VERBOSE]:"log",[le.INFO]:"info",[le.WARN]:"warn",[le.ERROR]:"error"},Wp=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=Qp[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class AB{constructor(e){this.name=e,this._logLevel=zp,this._logHandler=Wp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in le))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$p[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,le.DEBUG,...e),this._logHandler(this,le.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,le.VERBOSE,...e),this._logHandler(this,le.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,le.INFO,...e),this._logHandler(this,le.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,le.WARN,...e),this._logHandler(this,le.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,le.ERROR,...e),this._logHandler(this,le.ERROR,...e)}}const Yp=(r,e)=>e.some(t=>r instanceof t);let Vc,Mc;function Xp(){return Vc||(Vc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zp(){return Mc||(Mc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zh=new WeakMap,Wa=new WeakMap,Qh=new WeakMap,Sa=new WeakMap,vB=new WeakMap;function eg(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(Dn(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&zh.set(t,r)}).catch(()=>{}),vB.set(e,r),e}function tg(r){if(Wa.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});Wa.set(r,e)}let Ya={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Wa.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Qh.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Dn(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function ng(r){Ya=r(Ya)}function rg(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Na(this),e,...t);return Qh.set(n,e.sort?e.sort():[e]),Dn(n)}:Zp().includes(r)?function(...e){return r.apply(Na(this),e),Dn(zh.get(this))}:function(...e){return Dn(r.apply(Na(this),e))}}function sg(r){return typeof r=="function"?rg(r):(r instanceof IDBTransaction&&tg(r),Yp(r,Xp())?new Proxy(r,Ya):r)}function Dn(r){if(r instanceof IDBRequest)return eg(r);if(Sa.has(r))return Sa.get(r);const e=sg(r);return e!==r&&(Sa.set(r,e),vB.set(e,r)),e}const Na=r=>vB.get(r);function ig(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),B=Dn(o);return n&&o.addEventListener("upgradeneeded",l=>{n(Dn(o.result),l.oldVersion,l.newVersion,Dn(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),B.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),B}const og=["get","getKey","getAll","getAllKeys","count"],ag=["put","add","delete","clear"],Oa=new Map;function Gc(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Oa.get(e))return Oa.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=ag.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||og.includes(t)))return;const i=async function(o,...B){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return n&&(c=c.index(B.shift())),(await Promise.all([c[t](...B),s&&l.done]))[0]};return Oa.set(e,i),i}ng(r=>({...r,get:(e,t,n)=>Gc(e,t)||r.get(e,t,n),has:(e,t)=>!!Gc(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(lg(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function lg(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Xa="@firebase/app",Hc="0.16.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt=new AB("@firebase/app"),cg="@firebase/app-compat",ug="@firebase/analytics-compat",hg="@firebase/analytics",dg="@firebase/app-check-compat",Cg="@firebase/app-check",fg="@firebase/auth",pg="@firebase/auth-compat",gg="@firebase/database",mg="@firebase/data-connect",Eg="@firebase/database-compat",_g="@firebase/functions",Dg="@firebase/functions-compat",yg="@firebase/installations",wg="@firebase/installations-compat",Ig="@firebase/messaging",Tg="@firebase/messaging-compat",Ag="@firebase/performance",vg="@firebase/performance-compat",Rg="@firebase/remote-config",bg="@firebase/remote-config-compat",Pg="@firebase/storage",Sg="@firebase/storage-compat",Ng="@firebase/firestore",Og="@firebase/ai",Fg="@firebase/firestore-compat",Lg="firebase",xg="12.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za="[DEFAULT]",kg={[Xa]:"fire-core",[cg]:"fire-core-compat",[hg]:"fire-analytics",[ug]:"fire-analytics-compat",[Cg]:"fire-app-check",[dg]:"fire-app-check-compat",[fg]:"fire-auth",[pg]:"fire-auth-compat",[gg]:"fire-rtdb",[mg]:"fire-data-connect",[Eg]:"fire-rtdb-compat",[_g]:"fire-fn",[Dg]:"fire-fn-compat",[yg]:"fire-iid",[wg]:"fire-iid-compat",[Ig]:"fire-fcm",[Tg]:"fire-fcm-compat",[Ag]:"fire-perf",[vg]:"fire-perf-compat",[Rg]:"fire-rc",[bg]:"fire-rc-compat",[Pg]:"fire-gcs",[Sg]:"fire-gcs-compat",[Ng]:"fire-fst",[Fg]:"fire-fst-compat",[Og]:"fire-vertex","fire-js":"fire-js",[Lg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=new Map,Vg=new Map,eB=new Map;function Uc(r,e){try{r.container.addComponent(e)}catch(t){Wt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function xr(r){const e=r.name;if(eB.has(e))return Wt.debug(`There were multiple attempts to register component ${e}.`),!1;eB.set(e,r);for(const t of uo.values())Uc(t,r);for(const t of Vg.values())Uc(t,r);return!0}function RB(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function At(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qt=new oi("app","Firebase",Mg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new or("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=xg;function Wh(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:Za,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw qt.create("bad-app-name",{appName:String(s)});if(t||(t=jh()),!t)throw qt.create("no-options");const i=uo.get(s);if(i)if(ir(t,i.options)){if(ir(n,i.config))return i;throw qt.create("duplicate-app",{appName:s,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(n)})}else throw qt.create("duplicate-app",{appName:s,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new Kp(s);for(const l of eB.values())o.addComponent(l);const B=new Gg(t,n,o);return uo.set(s,B),B}function Hg(r=Za){const e=uo.get(r);if(!e&&r===Za&&jh())return Wh();if(!e)throw qt.create("no-app",{appName:r});return e}function yn(r,e,t){let n=kg[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${n}" with version "${e}":`];s&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Wt.warn(o.join(" "));return}xr(new or(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug="firebase-heartbeat-database",Jg=1,Gs="firebase-heartbeat-store";let Fa=null;function Yh(){return Fa||(Fa=ig(Ug,Jg,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Gs)}catch(t){console.warn(t)}}}}).catch(r=>{throw qt.create("idb-open",{originalErrorMessage:r.message})})),Fa}async function jg(r){try{const t=(await Yh()).transaction(Gs),n=await t.objectStore(Gs).get(Xh(r));return await t.done,n}catch(e){if(e instanceof en)Wt.warn(e.message);else{const t=qt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Wt.warn(t.message)}}}async function Jc(r,e){try{const n=(await Yh()).transaction(Gs,"readwrite");await n.objectStore(Gs).put(e,Xh(r)),await n.done}catch(t){if(t instanceof en)Wt.warn(t.message);else{const n=qt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Wt.warn(n.message)}}}function Xh(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qg=1024,Kg=30;class $g{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Qg(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=jc();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Kg){const o=Wg(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Wt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=jc(),{heartbeatsToSend:n,unsentEntries:s}=zg(this._heartbeatsCache.heartbeats),i=Uh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Wt.warn(t),""}}}function jc(){return new Date().toISOString().substring(0,10)}function zg(r,e=qg){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),qc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),qc(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Qg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Lp()?xp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await jg(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Jc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Jc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function qc(r){return Uh(JSON.stringify({version:2,heartbeats:r})).length}function Wg(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yg(r){xr(new or("platform-logger",e=>new Bg(e),"PRIVATE")),xr(new or("heartbeat",e=>new $g(e),"PRIVATE")),yn(Xa,Hc,r),yn(Xa,Hc,"esm2020"),yn("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yg("");var Xg="firebase",Zg="12.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn(Xg,Zg,"app");var Kc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wn,Zh;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,E){function y(){}y.prototype=E.prototype,v.F=E.prototype,v.prototype=new y,v.prototype.constructor=v,v.D=function(R,I,P){for(var D=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)D[rt-2]=arguments[rt];return E.prototype[I].apply(R,D)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,E,y){y||(y=0);const R=Array(16);if(typeof E=="string")for(var I=0;I<16;++I)R[I]=E.charCodeAt(y++)|E.charCodeAt(y++)<<8|E.charCodeAt(y++)<<16|E.charCodeAt(y++)<<24;else for(I=0;I<16;++I)R[I]=E[y++]|E[y++]<<8|E[y++]<<16|E[y++]<<24;E=v.g[0],y=v.g[1],I=v.g[2];let P=v.g[3],D;D=E+(P^y&(I^P))+R[0]+3614090360&4294967295,E=y+(D<<7&4294967295|D>>>25),D=P+(I^E&(y^I))+R[1]+3905402710&4294967295,P=E+(D<<12&4294967295|D>>>20),D=I+(y^P&(E^y))+R[2]+606105819&4294967295,I=P+(D<<17&4294967295|D>>>15),D=y+(E^I&(P^E))+R[3]+3250441966&4294967295,y=I+(D<<22&4294967295|D>>>10),D=E+(P^y&(I^P))+R[4]+4118548399&4294967295,E=y+(D<<7&4294967295|D>>>25),D=P+(I^E&(y^I))+R[5]+1200080426&4294967295,P=E+(D<<12&4294967295|D>>>20),D=I+(y^P&(E^y))+R[6]+2821735955&4294967295,I=P+(D<<17&4294967295|D>>>15),D=y+(E^I&(P^E))+R[7]+4249261313&4294967295,y=I+(D<<22&4294967295|D>>>10),D=E+(P^y&(I^P))+R[8]+1770035416&4294967295,E=y+(D<<7&4294967295|D>>>25),D=P+(I^E&(y^I))+R[9]+2336552879&4294967295,P=E+(D<<12&4294967295|D>>>20),D=I+(y^P&(E^y))+R[10]+4294925233&4294967295,I=P+(D<<17&4294967295|D>>>15),D=y+(E^I&(P^E))+R[11]+2304563134&4294967295,y=I+(D<<22&4294967295|D>>>10),D=E+(P^y&(I^P))+R[12]+1804603682&4294967295,E=y+(D<<7&4294967295|D>>>25),D=P+(I^E&(y^I))+R[13]+4254626195&4294967295,P=E+(D<<12&4294967295|D>>>20),D=I+(y^P&(E^y))+R[14]+2792965006&4294967295,I=P+(D<<17&4294967295|D>>>15),D=y+(E^I&(P^E))+R[15]+1236535329&4294967295,y=I+(D<<22&4294967295|D>>>10),D=E+(I^P&(y^I))+R[1]+4129170786&4294967295,E=y+(D<<5&4294967295|D>>>27),D=P+(y^I&(E^y))+R[6]+3225465664&4294967295,P=E+(D<<9&4294967295|D>>>23),D=I+(E^y&(P^E))+R[11]+643717713&4294967295,I=P+(D<<14&4294967295|D>>>18),D=y+(P^E&(I^P))+R[0]+3921069994&4294967295,y=I+(D<<20&4294967295|D>>>12),D=E+(I^P&(y^I))+R[5]+3593408605&4294967295,E=y+(D<<5&4294967295|D>>>27),D=P+(y^I&(E^y))+R[10]+38016083&4294967295,P=E+(D<<9&4294967295|D>>>23),D=I+(E^y&(P^E))+R[15]+3634488961&4294967295,I=P+(D<<14&4294967295|D>>>18),D=y+(P^E&(I^P))+R[4]+3889429448&4294967295,y=I+(D<<20&4294967295|D>>>12),D=E+(I^P&(y^I))+R[9]+568446438&4294967295,E=y+(D<<5&4294967295|D>>>27),D=P+(y^I&(E^y))+R[14]+3275163606&4294967295,P=E+(D<<9&4294967295|D>>>23),D=I+(E^y&(P^E))+R[3]+4107603335&4294967295,I=P+(D<<14&4294967295|D>>>18),D=y+(P^E&(I^P))+R[8]+1163531501&4294967295,y=I+(D<<20&4294967295|D>>>12),D=E+(I^P&(y^I))+R[13]+2850285829&4294967295,E=y+(D<<5&4294967295|D>>>27),D=P+(y^I&(E^y))+R[2]+4243563512&4294967295,P=E+(D<<9&4294967295|D>>>23),D=I+(E^y&(P^E))+R[7]+1735328473&4294967295,I=P+(D<<14&4294967295|D>>>18),D=y+(P^E&(I^P))+R[12]+2368359562&4294967295,y=I+(D<<20&4294967295|D>>>12),D=E+(y^I^P)+R[5]+4294588738&4294967295,E=y+(D<<4&4294967295|D>>>28),D=P+(E^y^I)+R[8]+2272392833&4294967295,P=E+(D<<11&4294967295|D>>>21),D=I+(P^E^y)+R[11]+1839030562&4294967295,I=P+(D<<16&4294967295|D>>>16),D=y+(I^P^E)+R[14]+4259657740&4294967295,y=I+(D<<23&4294967295|D>>>9),D=E+(y^I^P)+R[1]+2763975236&4294967295,E=y+(D<<4&4294967295|D>>>28),D=P+(E^y^I)+R[4]+1272893353&4294967295,P=E+(D<<11&4294967295|D>>>21),D=I+(P^E^y)+R[7]+4139469664&4294967295,I=P+(D<<16&4294967295|D>>>16),D=y+(I^P^E)+R[10]+3200236656&4294967295,y=I+(D<<23&4294967295|D>>>9),D=E+(y^I^P)+R[13]+681279174&4294967295,E=y+(D<<4&4294967295|D>>>28),D=P+(E^y^I)+R[0]+3936430074&4294967295,P=E+(D<<11&4294967295|D>>>21),D=I+(P^E^y)+R[3]+3572445317&4294967295,I=P+(D<<16&4294967295|D>>>16),D=y+(I^P^E)+R[6]+76029189&4294967295,y=I+(D<<23&4294967295|D>>>9),D=E+(y^I^P)+R[9]+3654602809&4294967295,E=y+(D<<4&4294967295|D>>>28),D=P+(E^y^I)+R[12]+3873151461&4294967295,P=E+(D<<11&4294967295|D>>>21),D=I+(P^E^y)+R[15]+530742520&4294967295,I=P+(D<<16&4294967295|D>>>16),D=y+(I^P^E)+R[2]+3299628645&4294967295,y=I+(D<<23&4294967295|D>>>9),D=E+(I^(y|~P))+R[0]+4096336452&4294967295,E=y+(D<<6&4294967295|D>>>26),D=P+(y^(E|~I))+R[7]+1126891415&4294967295,P=E+(D<<10&4294967295|D>>>22),D=I+(E^(P|~y))+R[14]+2878612391&4294967295,I=P+(D<<15&4294967295|D>>>17),D=y+(P^(I|~E))+R[5]+4237533241&4294967295,y=I+(D<<21&4294967295|D>>>11),D=E+(I^(y|~P))+R[12]+1700485571&4294967295,E=y+(D<<6&4294967295|D>>>26),D=P+(y^(E|~I))+R[3]+2399980690&4294967295,P=E+(D<<10&4294967295|D>>>22),D=I+(E^(P|~y))+R[10]+4293915773&4294967295,I=P+(D<<15&4294967295|D>>>17),D=y+(P^(I|~E))+R[1]+2240044497&4294967295,y=I+(D<<21&4294967295|D>>>11),D=E+(I^(y|~P))+R[8]+1873313359&4294967295,E=y+(D<<6&4294967295|D>>>26),D=P+(y^(E|~I))+R[15]+4264355552&4294967295,P=E+(D<<10&4294967295|D>>>22),D=I+(E^(P|~y))+R[6]+2734768916&4294967295,I=P+(D<<15&4294967295|D>>>17),D=y+(P^(I|~E))+R[13]+1309151649&4294967295,y=I+(D<<21&4294967295|D>>>11),D=E+(I^(y|~P))+R[4]+4149444226&4294967295,E=y+(D<<6&4294967295|D>>>26),D=P+(y^(E|~I))+R[11]+3174756917&4294967295,P=E+(D<<10&4294967295|D>>>22),D=I+(E^(P|~y))+R[2]+718787259&4294967295,I=P+(D<<15&4294967295|D>>>17),D=y+(P^(I|~E))+R[9]+3951481745&4294967295,v.g[0]=v.g[0]+E&4294967295,v.g[1]=v.g[1]+(I+(D<<21&4294967295|D>>>11))&4294967295,v.g[2]=v.g[2]+I&4294967295,v.g[3]=v.g[3]+P&4294967295}n.prototype.v=function(v,E){E===void 0&&(E=v.length);const y=E-this.blockSize,R=this.C;let I=this.h,P=0;for(;P<E;){if(I==0)for(;P<=y;)s(this,v,P),P+=this.blockSize;if(typeof v=="string"){for(;P<E;)if(R[I++]=v.charCodeAt(P++),I==this.blockSize){s(this,R),I=0;break}}else for(;P<E;)if(R[I++]=v[P++],I==this.blockSize){s(this,R),I=0;break}}this.h=I,this.o+=E},n.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var E=1;E<v.length-8;++E)v[E]=0;E=this.o*8;for(var y=v.length-8;y<v.length;++y)v[y]=E&255,E/=256;for(this.v(v),v=Array(16),E=0,y=0;y<4;++y)for(let R=0;R<32;R+=8)v[E++]=this.g[y]>>>R&255;return v};function i(v,E){var y=B;return Object.prototype.hasOwnProperty.call(y,v)?y[v]:y[v]=E(v)}function o(v,E){this.h=E;const y=[];let R=!0;for(let I=v.length-1;I>=0;I--){const P=v[I]|0;R&&P==E||(y[I]=P,R=!1)}this.g=y}var B={};function l(v){return-128<=v&&v<128?i(v,function(E){return new o([E|0],E<0?-1:0)}):new o([v|0],v<0?-1:0)}function c(v){if(isNaN(v)||!isFinite(v))return C;if(v<0)return M(c(-v));const E=[];let y=1;for(let R=0;v>=y;R++)E[R]=v/y|0,y*=4294967296;return new o(E,0)}function h(v,E){if(v.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(v.charAt(0)=="-")return M(h(v.substring(1),E));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=c(Math.pow(E,8));let R=C;for(let P=0;P<v.length;P+=8){var I=Math.min(8,v.length-P);const D=parseInt(v.substring(P,P+I),E);I<8?(I=c(Math.pow(E,I)),R=R.j(I).add(c(D))):(R=R.j(y),R=R.add(c(D)))}return R}var C=l(0),p=l(1),_=l(16777216);r=o.prototype,r.m=function(){if(L(this))return-M(this).m();let v=0,E=1;for(let y=0;y<this.g.length;y++){const R=this.i(y);v+=(R>=0?R:4294967296+R)*E,E*=4294967296}return v},r.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(A(this))return"0";if(L(this))return"-"+M(this).toString(v);const E=c(Math.pow(v,6));var y=this;let R="";for(;;){const I=fe(y,E).g;y=G(y,I.j(E));let P=((y.g.length>0?y.g[0]:y.h)>>>0).toString(v);if(y=I,A(y))return P+R;for(;P.length<6;)P="0"+P;R=P+R}},r.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function A(v){if(v.h!=0)return!1;for(let E=0;E<v.g.length;E++)if(v.g[E]!=0)return!1;return!0}function L(v){return v.h==-1}r.l=function(v){return v=G(this,v),L(v)?-1:A(v)?0:1};function M(v){const E=v.g.length,y=[];for(let R=0;R<E;R++)y[R]=~v.g[R];return new o(y,~v.h).add(p)}r.abs=function(){return L(this)?M(this):this},r.add=function(v){const E=Math.max(this.g.length,v.g.length),y=[];let R=0;for(let I=0;I<=E;I++){let P=R+(this.i(I)&65535)+(v.i(I)&65535),D=(P>>>16)+(this.i(I)>>>16)+(v.i(I)>>>16);R=D>>>16,P&=65535,D&=65535,y[I]=D<<16|P}return new o(y,y[y.length-1]&-2147483648?-1:0)};function G(v,E){return v.add(M(E))}r.j=function(v){if(A(this)||A(v))return C;if(L(this))return L(v)?M(this).j(M(v)):M(M(this).j(v));if(L(v))return M(this.j(M(v)));if(this.l(_)<0&&v.l(_)<0)return c(this.m()*v.m());const E=this.g.length+v.g.length,y=[];for(var R=0;R<2*E;R++)y[R]=0;for(R=0;R<this.g.length;R++)for(let I=0;I<v.g.length;I++){const P=this.i(R)>>>16,D=this.i(R)&65535,rt=v.i(I)>>>16,Un=v.i(I)&65535;y[2*R+2*I]+=D*Un,ee(y,2*R+2*I),y[2*R+2*I+1]+=P*Un,ee(y,2*R+2*I+1),y[2*R+2*I+1]+=D*rt,ee(y,2*R+2*I+1),y[2*R+2*I+2]+=P*rt,ee(y,2*R+2*I+2)}for(v=0;v<E;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=E;v<2*E;v++)y[v]=0;return new o(y,0)};function ee(v,E){for(;(v[E]&65535)!=v[E];)v[E+1]+=v[E]>>>16,v[E]&=65535,E++}function Q(v,E){this.g=v,this.h=E}function fe(v,E){if(A(E))throw Error("division by zero");if(A(v))return new Q(C,C);if(L(v))return E=fe(M(v),E),new Q(M(E.g),M(E.h));if(L(E))return E=fe(v,M(E)),new Q(M(E.g),E.h);if(v.g.length>30){if(L(v)||L(E))throw Error("slowDivide_ only works with positive integers.");for(var y=p,R=E;R.l(v)<=0;)y=pe(y),R=pe(R);var I=oe(y,1),P=oe(R,1);for(R=oe(R,2),y=oe(y,2);!A(R);){var D=P.add(R);D.l(v)<=0&&(I=I.add(y),P=D),R=oe(R,1),y=oe(y,1)}return E=G(v,I.j(E)),new Q(I,E)}for(I=C;v.l(E)>=0;){for(y=Math.max(1,Math.floor(v.m()/E.m())),R=Math.ceil(Math.log(y)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),P=c(y),D=P.j(E);L(D)||D.l(v)>0;)y-=R,P=c(y),D=P.j(E);A(P)&&(P=p),I=I.add(P),v=G(v,D)}return new Q(I,v)}r.B=function(v){return fe(this,v).h},r.and=function(v){const E=Math.max(this.g.length,v.g.length),y=[];for(let R=0;R<E;R++)y[R]=this.i(R)&v.i(R);return new o(y,this.h&v.h)},r.or=function(v){const E=Math.max(this.g.length,v.g.length),y=[];for(let R=0;R<E;R++)y[R]=this.i(R)|v.i(R);return new o(y,this.h|v.h)},r.xor=function(v){const E=Math.max(this.g.length,v.g.length),y=[];for(let R=0;R<E;R++)y[R]=this.i(R)^v.i(R);return new o(y,this.h^v.h)};function pe(v){const E=v.g.length+1,y=[];for(let R=0;R<E;R++)y[R]=v.i(R)<<1|v.i(R-1)>>>31;return new o(y,v.h)}function oe(v,E){const y=E>>5;E%=32;const R=v.g.length-y,I=[];for(let P=0;P<R;P++)I[P]=E>0?v.i(P+y)>>>E|v.i(P+y+1)<<32-E:v.i(P+y);return new o(I,v.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,Zh=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,wn=o}).apply(typeof Kc<"u"?Kc:typeof self<"u"?self:typeof window<"u"?window:{});var Hi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ed,As,td,to,tB,nd,rd,sd;(function(){var r,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hi=="object"&&Hi];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function s(a,u){if(u)e:{var d=n;a=a.split(".");for(var f=0;f<a.length-1;f++){var b=a[f];if(!(b in d))break e;d=d[b]}a=a[a.length-1],f=d[a],u=u(f),u!=f&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(u){var d=[],f;for(f in u)Object.prototype.hasOwnProperty.call(u,f)&&d.push([f,u[f]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function B(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function l(a,u,d){return a.call.apply(a.bind,arguments)}function c(a,u,d){return c=l,c.apply(null,arguments)}function h(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var f=d.slice();return f.push.apply(f,arguments),a.apply(this,f)}}function C(a,u){function d(){}d.prototype=u.prototype,a.Z=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Ob=function(f,b,S){for(var j=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)j[ie-2]=arguments[ie];return u.prototype[b].apply(f,j)}}var p=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const u=a.length;if(u>0){const d=Array(u);for(let f=0;f<u;f++)d[f]=a[f];return d}return[]}function A(a,u){for(let f=1;f<arguments.length;f++){const b=arguments[f];var d=typeof b;if(d=d!="object"?d:b?Array.isArray(b)?"array":d:"null",d=="array"||d=="object"&&typeof b.length=="number"){d=a.length||0;const S=b.length||0;a.length=d+S;for(let j=0;j<S;j++)a[d+j]=b[j]}else a.push(b)}}class L{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function M(a){o.setTimeout(()=>{throw a},0)}function G(){var a=v;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class ee{constructor(){this.h=this.g=null}add(u,d){const f=Q.get();f.set(u,d),this.h?this.h.next=f:this.g=f,this.h=f}}var Q=new L(()=>new fe,a=>a.reset());class fe{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let pe,oe=!1,v=new ee,E=()=>{const a=Promise.resolve(void 0);pe=()=>{a.then(y)}};function y(){for(var a;a=G();){try{a.h.call(a.g)}catch(d){M(d)}var u=Q;u.j(a),u.h<100&&(u.h++,a.next=u.g,u.g=a)}oe=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var P=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return a}();function D(a){return/^[\s\xa0]*$/.test(a)}function rt(a,u){I.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,u)}C(rt,I),rt.prototype.init=function(a,u){const d=this.type=a.type,f=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget,u||(d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement)),this.relatedTarget=u,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&rt.Z.h.call(this)},rt.prototype.h=function(){rt.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Un="closure_listenable_"+(Math.random()*1e6|0),Mf=0;function Gf(a,u,d,f,b){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!f,this.ha=b,this.key=++Mf,this.da=this.fa=!1}function Ai(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function vi(a,u,d){for(const f in a)u.call(d,a[f],f,a)}function Hf(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function Ll(a){const u={};for(const d in a)u[d]=a[d];return u}const xl="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function kl(a,u){let d,f;for(let b=1;b<arguments.length;b++){f=arguments[b];for(d in f)a[d]=f[d];for(let S=0;S<xl.length;S++)d=xl[S],Object.prototype.hasOwnProperty.call(f,d)&&(a[d]=f[d])}}function Ri(a){this.src=a,this.g={},this.h=0}Ri.prototype.add=function(a,u,d,f,b){const S=a.toString();a=this.g[S],a||(a=this.g[S]=[],this.h++);const j=aa(a,u,f,b);return j>-1?(u=a[j],d||(u.fa=!1)):(u=new Gf(u,this.src,S,!!f,b),u.fa=d,a.push(u)),u};function oa(a,u){const d=u.type;if(d in a.g){var f=a.g[d],b=Array.prototype.indexOf.call(f,u,void 0),S;(S=b>=0)&&Array.prototype.splice.call(f,b,1),S&&(Ai(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function aa(a,u,d,f){for(let b=0;b<a.length;++b){const S=a[b];if(!S.da&&S.listener==u&&S.capture==!!d&&S.ha==f)return b}return-1}var Ba="closure_lm_"+(Math.random()*1e6|0),la={};function Vl(a,u,d,f,b){if(Array.isArray(u)){for(let S=0;S<u.length;S++)Vl(a,u[S],d,f,b);return null}return d=Hl(d),a&&a[Un]?a.J(u,d,B(f)?!!f.capture:!1,b):Uf(a,u,d,!1,f,b)}function Uf(a,u,d,f,b,S){if(!u)throw Error("Invalid event type");const j=B(b)?!!b.capture:!!b;let ie=ua(a);if(ie||(a[Ba]=ie=new Ri(a)),d=ie.add(u,d,f,j,S),d.proxy)return d;if(f=Jf(),d.proxy=f,f.src=a,f.listener=d,a.addEventListener)P||(b=j),b===void 0&&(b=!1),a.addEventListener(u.toString(),f,b);else if(a.attachEvent)a.attachEvent(Gl(u.toString()),f);else if(a.addListener&&a.removeListener)a.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Jf(){function a(d){return u.call(a.src,a.listener,d)}const u=jf;return a}function Ml(a,u,d,f,b){if(Array.isArray(u))for(var S=0;S<u.length;S++)Ml(a,u[S],d,f,b);else f=B(f)?!!f.capture:!!f,d=Hl(d),a&&a[Un]?(a=a.i,S=String(u).toString(),S in a.g&&(u=a.g[S],d=aa(u,d,f,b),d>-1&&(Ai(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete a.g[S],a.h--)))):a&&(a=ua(a))&&(u=a.g[u.toString()],a=-1,u&&(a=aa(u,d,f,b)),(d=a>-1?u[a]:null)&&ca(d))}function ca(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[Un])oa(u.i,a);else{var d=a.type,f=a.proxy;u.removeEventListener?u.removeEventListener(d,f,a.capture):u.detachEvent?u.detachEvent(Gl(d),f):u.addListener&&u.removeListener&&u.removeListener(f),(d=ua(u))?(oa(d,a),d.h==0&&(d.src=null,u[Ba]=null)):Ai(a)}}}function Gl(a){return a in la?la[a]:la[a]="on"+a}function jf(a,u){if(a.da)a=!0;else{u=new rt(u,this);const d=a.listener,f=a.ha||a.src;a.fa&&ca(a),a=d.call(f,u)}return a}function ua(a){return a=a[Ba],a instanceof Ri?a:null}var ha="__closure_events_fn_"+(Math.random()*1e9>>>0);function Hl(a){return typeof a=="function"?a:(a[ha]||(a[ha]=function(u){return a.handleEvent(u)}),a[ha])}function $e(){R.call(this),this.i=new Ri(this),this.M=this,this.G=null}C($e,R),$e.prototype[Un]=!0,$e.prototype.removeEventListener=function(a,u,d,f){Ml(this,a,u,d,f)};function Xe(a,u){var d,f=a.G;if(f)for(d=[];f;f=f.G)d.push(f);if(a=a.M,f=u.type||u,typeof u=="string")u=new I(u,a);else if(u instanceof I)u.target=u.target||a;else{var b=u;u=new I(f,a),kl(u,b)}b=!0;let S,j;if(d)for(j=d.length-1;j>=0;j--)S=u.g=d[j],b=bi(S,f,!0,u)&&b;if(S=u.g=a,b=bi(S,f,!0,u)&&b,b=bi(S,f,!1,u)&&b,d)for(j=0;j<d.length;j++)S=u.g=d[j],b=bi(S,f,!1,u)&&b}$e.prototype.N=function(){if($e.Z.N.call(this),this.i){var a=this.i;for(const u in a.g){const d=a.g[u];for(let f=0;f<d.length;f++)Ai(d[f]);delete a.g[u],a.h--}}this.G=null},$e.prototype.J=function(a,u,d,f){return this.i.add(String(a),u,!1,d,f)},$e.prototype.K=function(a,u,d,f){return this.i.add(String(a),u,!0,d,f)};function bi(a,u,d,f){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();let b=!0;for(let S=0;S<u.length;++S){const j=u[S];if(j&&!j.da&&j.capture==d){const ie=j.listener,ke=j.ha||j.src;j.fa&&oa(a.i,j),b=ie.call(ke,f)!==!1&&b}}return b&&!f.defaultPrevented}function qf(a,u){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=c(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(a,u||0)}function Ul(a){a.g=qf(()=>{a.g=null,a.i&&(a.i=!1,Ul(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Kf extends R{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ul(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rs(a){R.call(this),this.h=a,this.g={}}C(rs,R);var Jl=[];function jl(a){vi(a.g,function(u,d){this.g.hasOwnProperty(d)&&ca(u)},a),a.g={}}rs.prototype.N=function(){rs.Z.N.call(this),jl(this)},rs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var da=o.JSON.stringify,$f=o.JSON.parse,zf=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function ql(){}function Kl(){}var ss={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ca(){I.call(this,"d")}C(Ca,I);function fa(){I.call(this,"c")}C(fa,I);var Jn={},$l=null;function Pi(){return $l=$l||new $e}Jn.Ia="serverreachability";function zl(a){I.call(this,Jn.Ia,a)}C(zl,I);function is(a){const u=Pi();Xe(u,new zl(u))}Jn.STAT_EVENT="statevent";function Ql(a,u){I.call(this,Jn.STAT_EVENT,a),this.stat=u}C(Ql,I);function Ze(a){const u=Pi();Xe(u,new Ql(u,a))}Jn.Ja="timingevent";function Wl(a,u){I.call(this,Jn.Ja,a),this.size=u}C(Wl,I);function os(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},u)}function as(){this.g=!0}as.prototype.ua=function(){this.g=!1};function Qf(a,u,d,f,b,S){a.info(function(){if(a.g)if(S){var j="",ie=S.split("&");for(let Ee=0;Ee<ie.length;Ee++){var ke=ie[Ee].split("=");if(ke.length>1){const He=ke[0];ke=ke[1];const Pt=He.split("_");j=Pt.length>=2&&Pt[1]=="type"?j+(He+"="+ke+"&"):j+(He+"=redacted&")}}}else j=null;else j=S;return"XMLHTTP REQ ("+f+") [attempt "+b+"]: "+u+`
`+d+`
`+j})}function Wf(a,u,d,f,b,S,j){a.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+b+"]: "+u+`
`+d+`
`+S+" "+j})}function fr(a,u,d,f){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+Xf(a,d)+(f?" "+f:"")})}function Yf(a,u){a.info(function(){return"TIMEOUT: "+u})}as.prototype.info=function(){};function Xf(a,u){if(!a.g)return u;if(!u)return null;try{const S=JSON.parse(u);if(S){for(a=0;a<S.length;a++)if(Array.isArray(S[a])){var d=S[a];if(!(d.length<2)){var f=d[1];if(Array.isArray(f)&&!(f.length<1)){var b=f[0];if(b!="noop"&&b!="stop"&&b!="close")for(let j=1;j<f.length;j++)f[j]=""}}}}return da(S)}catch{return u}}var Si={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Yl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Xl;function pa(){}C(pa,ql),pa.prototype.g=function(){return new XMLHttpRequest},Xl=new pa;function Bs(a){return encodeURIComponent(String(a))}function Zf(a){var u=1;a=a.split(":");const d=[];for(;u>0&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function tn(a,u,d,f){this.j=a,this.i=u,this.l=d,this.S=f||1,this.V=new rs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Zl}function Zl(){this.i=null,this.g="",this.h=!1}var ec={},ga={};function ma(a,u,d){a.M=1,a.A=Oi(bt(u)),a.u=d,a.R=!0,tc(a,null)}function tc(a,u){a.F=Date.now(),Ni(a),a.B=bt(a.A);var d=a.B,f=a.S;Array.isArray(f)||(f=[String(f)]),Cc(d.i,"t",f),a.C=0,d=a.j.L,a.h=new Zl,a.g=Nc(a.j,d?u:null,!a.u),a.P>0&&(a.O=new Kf(c(a.Y,a,a.g),a.P)),u=a.V,d=a.g,f=a.ba;var b="readystatechange";Array.isArray(b)||(b&&(Jl[0]=b.toString()),b=Jl);for(let S=0;S<b.length;S++){const j=Vl(d,b[S],f||u.handleEvent,!1,u.h||u);if(!j)break;u.g[j.key]=j}u=a.J?Ll(a.J):{},a.u?(a.v||(a.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,u)):(a.v="GET",a.g.ea(a.B,a.v,null,u)),is(),Qf(a.i,a.v,a.B,a.l,a.S,a.u)}tn.prototype.ba=function(a){a=a.target;const u=this.O;u&&sn(a)==3?u.j():this.Y(a)},tn.prototype.Y=function(a){try{if(a==this.g)e:{const ie=sn(this.g),ke=this.g.ya(),Ee=this.g.ca();if(!(ie<3)&&(ie!=3||this.g&&(this.h.h||this.g.la()||Dc(this.g)))){this.K||ie!=4||ke==7||(ke==8||Ee<=0?is(3):is(2)),Ea(this);var u=this.g.ca();this.X=u;var d=ep(this);if(this.o=u==200,Wf(this.i,this.v,this.B,this.l,this.S,ie,u),this.o){if(this.U&&!this.L){t:{if(this.g){var f,b=this.g;if((f=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(f)){var S=f;break t}}S=null}if(a=S)fr(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,_a(this,a);else{this.o=!1,this.m=3,Ze(12),jn(this),ls(this);break e}}if(this.R){a=!0;let He;for(;!this.K&&this.C<d.length;)if(He=tp(this,d),He==ga){ie==4&&(this.m=4,Ze(14),a=!1),fr(this.i,this.l,null,"[Incomplete Response]");break}else if(He==ec){this.m=4,Ze(15),fr(this.i,this.l,d,"[Invalid Chunk]"),a=!1;break}else fr(this.i,this.l,He,null),_a(this,He);if(nc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||d.length!=0||this.h.h||(this.m=1,Ze(16),a=!1),this.o=this.o&&a,!a)fr(this.i,this.l,d,"[Invalid Chunked Response]"),jn(this),ls(this);else if(d.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Ra(j),j.P=!0,Ze(11))}}else fr(this.i,this.l,d,null),_a(this,d);ie==4&&jn(this),this.o&&!this.K&&(ie==4?Rc(this.j,this):(this.o=!1,Ni(this)))}else fp(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,Ze(12)):(this.m=0,Ze(13)),jn(this),ls(this)}}}catch{}finally{}};function ep(a){if(!nc(a))return a.g.la();const u=Dc(a.g);if(u==="")return"";let d="";const f=u.length,b=sn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return jn(a),ls(a),"";a.h.i=new o.TextDecoder}for(let S=0;S<f;S++)a.h.h=!0,d+=a.h.i.decode(u[S],{stream:!(b&&S==f-1)});return u.length=0,a.h.g+=d,a.C=0,a.h.g}function nc(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function tp(a,u){var d=a.C,f=u.indexOf(`
`,d);return f==-1?ga:(d=Number(u.substring(d,f)),isNaN(d)?ec:(f+=1,f+d>u.length?ga:(u=u.slice(f,f+d),a.C=f+d,u)))}tn.prototype.cancel=function(){this.K=!0,jn(this)};function Ni(a){a.T=Date.now()+a.H,rc(a,a.H)}function rc(a,u){if(a.D!=null)throw Error("WatchDog timer not null");a.D=os(c(a.aa,a),u)}function Ea(a){a.D&&(o.clearTimeout(a.D),a.D=null)}tn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Yf(this.i,this.B),this.M!=2&&(is(),Ze(17)),jn(this),this.m=2,ls(this)):rc(this,this.T-a)};function ls(a){a.j.I==0||a.K||Rc(a.j,a)}function jn(a){Ea(a);var u=a.O;u&&typeof u.dispose=="function"&&u.dispose(),a.O=null,jl(a.V),a.g&&(u=a.g,a.g=null,u.abort(),u.dispose())}function _a(a,u){try{var d=a.j;if(d.I!=0&&(d.g==a||Da(d.h,a))){if(!a.L&&Da(d.h,a)&&d.I==3){try{var f=d.Ba.g.parse(u)}catch{f=null}if(Array.isArray(f)&&f.length==3){var b=f;if(b[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<a.F)Vi(d),xi(d);else break e;va(d),Ze(18)}}else d.xa=b[1],0<d.xa-d.K&&b[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=os(c(d.Va,d),6e3));oc(d.h)<=1&&d.ta&&(d.ta=void 0)}else Kn(d,11)}else if((a.L||d.g==a)&&Vi(d),!D(u))for(b=d.Ba.g.parse(u),u=0;u<b.length;u++){let Ee=b[u];const He=Ee[0];if(!(He<=d.K))if(d.K=He,Ee=Ee[1],d.I==2)if(Ee[0]=="c"){d.M=Ee[1],d.ba=Ee[2];const Pt=Ee[3];Pt!=null&&(d.ka=Pt,d.j.info("VER="+d.ka));const $n=Ee[4];$n!=null&&(d.za=$n,d.j.info("SVER="+d.za));const on=Ee[5];on!=null&&typeof on=="number"&&on>0&&(f=1.5*on,d.O=f,d.j.info("backChannelRequestTimeoutMs_="+f)),f=d;const an=a.g;if(an){const Gi=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gi){var S=f.h;S.g||Gi.indexOf("spdy")==-1&&Gi.indexOf("quic")==-1&&Gi.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(ya(S,S.h),S.h=null))}if(f.G){const ba=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;ba&&(f.wa=ba,we(f.J,f.G,ba))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-a.F,d.j.info("Handshake RTT: "+d.T+"ms")),f=d;var j=a;if(f.na=Sc(f,f.L?f.ba:null,f.W),j.L){ac(f.h,j);var ie=j,ke=f.O;ke&&(ie.H=ke),ie.D&&(Ea(ie),Ni(ie)),f.g=j}else Ac(f);d.i.length>0&&ki(d)}else Ee[0]!="stop"&&Ee[0]!="close"||Kn(d,7);else d.I==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?Kn(d,7):Aa(d):Ee[0]!="noop"&&d.l&&d.l.qa(Ee),d.A=0)}}is(4)}catch{}}var np=class{constructor(a,u){this.g=a,this.map=u}};function sc(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ic(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function oc(a){return a.h?1:a.g?a.g.size:0}function Da(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function ya(a,u){a.g?a.g.add(u):a.h=u}function ac(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}sc.prototype.cancel=function(){if(this.i=Bc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Bc(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.G);return u}return _(a.i)}var lc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rp(a,u){if(a){a=a.split("&");for(let d=0;d<a.length;d++){const f=a[d].indexOf("=");let b,S=null;f>=0?(b=a[d].substring(0,f),S=a[d].substring(f+1)):b=a[d],u(b,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function nn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;a instanceof nn?(this.l=a.l,cs(this,a.j),this.o=a.o,this.g=a.g,us(this,a.u),this.h=a.h,wa(this,fc(a.i)),this.m=a.m):a&&(u=String(a).match(lc))?(this.l=!1,cs(this,u[1]||"",!0),this.o=hs(u[2]||""),this.g=hs(u[3]||"",!0),us(this,u[4]),this.h=hs(u[5]||"",!0),wa(this,u[6]||"",!0),this.m=hs(u[7]||"")):(this.l=!1,this.i=new Cs(null,this.l))}nn.prototype.toString=function(){const a=[];var u=this.j;u&&a.push(ds(u,cc,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(ds(u,cc,!0),"@"),a.push(Bs(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&a.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ds(d,d.charAt(0)=="/"?op:ip,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ds(d,Bp)),a.join("")},nn.prototype.resolve=function(a){const u=bt(this);let d=!!a.j;d?cs(u,a.j):d=!!a.o,d?u.o=a.o:d=!!a.g,d?u.g=a.g:d=a.u!=null;var f=a.h;if(d)us(u,a.u);else if(d=!!a.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var b=u.h.lastIndexOf("/");b!=-1&&(f=u.h.slice(0,b+1)+f)}if(b=f,b==".."||b==".")f="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){f=b.lastIndexOf("/",0)==0,b=b.split("/");const S=[];for(let j=0;j<b.length;){const ie=b[j++];ie=="."?f&&j==b.length&&S.push(""):ie==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),f&&j==b.length&&S.push("")):(S.push(ie),f=!0)}f=S.join("/")}else f=b}return d?u.h=f:d=a.i.toString()!=="",d?wa(u,fc(a.i)):d=!!a.m,d&&(u.m=a.m),u};function bt(a){return new nn(a)}function cs(a,u,d){a.j=d?hs(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function us(a,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);a.u=u}else a.u=null}function wa(a,u,d){u instanceof Cs?(a.i=u,lp(a.i,a.l)):(d||(u=ds(u,ap)),a.i=new Cs(u,a.l))}function we(a,u,d){a.i.set(u,d)}function Oi(a){return we(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function hs(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ds(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,sp),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function sp(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var cc=/[#\/\?@]/g,ip=/[#\?:]/g,op=/[#\?]/g,ap=/[#\?@]/g,Bp=/#/g;function Cs(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function qn(a){a.g||(a.g=new Map,a.h=0,a.i&&rp(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}r=Cs.prototype,r.add=function(a,u){qn(this),this.i=null,a=pr(this,a);let d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function uc(a,u){qn(a),u=pr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function hc(a,u){return qn(a),u=pr(a,u),a.g.has(u)}r.forEach=function(a,u){qn(this),this.g.forEach(function(d,f){d.forEach(function(b){a.call(u,b,f,this)},this)},this)};function dc(a,u){qn(a);let d=[];if(typeof u=="string")hc(a,u)&&(d=d.concat(a.g.get(pr(a,u))));else for(a=Array.from(a.g.values()),u=0;u<a.length;u++)d=d.concat(a[u]);return d}r.set=function(a,u){return qn(this),this.i=null,a=pr(this,a),hc(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},r.get=function(a,u){return a?(a=dc(this,a),a.length>0?String(a[0]):u):u};function Cc(a,u,d){uc(a,u),d.length>0&&(a.i=null,a.g.set(pr(a,u),_(d)),a.h+=d.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(let f=0;f<u.length;f++){var d=u[f];const b=Bs(d);d=dc(this,d);for(let S=0;S<d.length;S++){let j=b;d[S]!==""&&(j+="="+Bs(d[S])),a.push(j)}}return this.i=a.join("&")};function fc(a){const u=new Cs;return u.i=a.i,a.g&&(u.g=new Map(a.g),u.h=a.h),u}function pr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function lp(a,u){u&&!a.j&&(qn(a),a.i=null,a.g.forEach(function(d,f){const b=f.toLowerCase();f!=b&&(uc(this,f),Cc(this,b,d))},a)),a.j=u}function cp(a,u){const d=new as;if(o.Image){const f=new Image;f.onload=h(rn,d,"TestLoadImage: loaded",!0,u,f),f.onerror=h(rn,d,"TestLoadImage: error",!1,u,f),f.onabort=h(rn,d,"TestLoadImage: abort",!1,u,f),f.ontimeout=h(rn,d,"TestLoadImage: timeout",!1,u,f),o.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=a}else u(!1)}function up(a,u){const d=new as,f=new AbortController,b=setTimeout(()=>{f.abort(),rn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:f.signal}).then(S=>{clearTimeout(b),S.ok?rn(d,"TestPingServer: ok",!0,u):rn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(b),rn(d,"TestPingServer: error",!1,u)})}function rn(a,u,d,f,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),f(d)}catch{}}function hp(){this.g=new zf}function Ia(a){this.i=a.Sb||null,this.h=a.ab||!1}C(Ia,ql),Ia.prototype.g=function(){return new Fi(this.i,this.h)};function Fi(a,u){$e.call(this),this.H=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}C(Fi,$e),r=Fi.prototype,r.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=u,this.readyState=1,ps(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(u.body=a),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,fs(this)),this.readyState=0},r.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ps(this)),this.g&&(this.readyState=3,ps(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;pc(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function pc(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}r.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?fs(this):ps(this),this.readyState==3&&pc(this)}},r.Oa=function(a){this.g&&(this.response=this.responseText=a,fs(this))},r.Na=function(a){this.g&&(this.response=a,fs(this))},r.ga=function(){this.g&&fs(this)};function fs(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ps(a)}r.setRequestHeader=function(a,u){this.A.append(a,u)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function ps(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Fi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function gc(a){let u="";return vi(a,function(d,f){u+=f,u+=":",u+=d,u+=`\r
`}),u}function Ta(a,u,d){e:{for(f in d){var f=!1;break e}f=!0}f||(d=gc(d),typeof a=="string"?d!=null&&Bs(d):we(a,u,d))}function be(a){$e.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}C(be,$e);var dp=/^https?$/i,Cp=["POST","PUT"];r=be.prototype,r.Fa=function(a){this.H=a},r.ea=function(a,u,d,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Xl.g(),this.g.onreadystatechange=p(c(this.Ca,this));try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(S){mc(this,S);return}if(a=d||"",d=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var b in f)d.set(b,f[b]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())d.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(d.keys()).find(S=>S.toLowerCase()=="content-type"),b=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Cp,u,void 0)>=0)||f||b||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,j]of d)this.g.setRequestHeader(S,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(S){mc(this,S)}};function mc(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.o=5,Ec(a),Li(a)}function Ec(a){a.A||(a.A=!0,Xe(a,"complete"),Xe(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Xe(this,"complete"),Xe(this,"abort"),Li(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Li(this,!0)),be.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?_c(this):this.Xa())},r.Xa=function(){_c(this)};function _c(a){if(a.h&&typeof i<"u"){if(a.v&&sn(a)==4)setTimeout(a.Ca.bind(a),0);else if(Xe(a,"readystatechange"),sn(a)==4){a.h=!1;try{const S=a.ca();e:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var f;if(f=S===0){let j=String(a.D).match(lc)[1]||null;!j&&o.self&&o.self.location&&(j=o.self.location.protocol.slice(0,-1)),f=!dp.test(j?j.toLowerCase():"")}d=f}if(d)Xe(a,"complete"),Xe(a,"success");else{a.o=6;try{var b=sn(a)>2?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.ca()+"]",Ec(a)}}finally{Li(a)}}}}function Li(a,u){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const d=a.g;a.g=null,u||Xe(a,"ready");try{d.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function sn(a){return a.g?a.g.readyState:0}r.ca=function(){try{return sn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),$f(u)}};function Dc(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function fp(a){const u={};a=(a.g&&sn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<a.length;f++){if(D(a[f]))continue;var d=Zf(a[f]);const b=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const S=u[b]||[];u[b]=S,S.push(d)}Hf(u,function(f){return f.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function gs(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function yc(a){this.za=0,this.i=[],this.j=new as,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=gs("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=gs("baseRetryDelayMs",5e3,a),this.Za=gs("retryDelaySeedMs",1e4,a),this.Ta=gs("forwardChannelMaxRetries",2,a),this.va=gs("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new sc(a&&a.concurrentRequestLimit),this.Ba=new hp,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=yc.prototype,r.ka=8,r.I=1,r.connect=function(a,u,d,f){Ze(0),this.W=a,this.H=u||{},d&&f!==void 0&&(this.H.OSID=d,this.H.OAID=f),this.F=this.X,this.J=Sc(this,null,this.W),ki(this)};function Aa(a){if(wc(a),a.I==3){var u=a.V++,d=bt(a.J);if(we(d,"SID",a.M),we(d,"RID",u),we(d,"TYPE","terminate"),ms(a,d),u=new tn(a,a.j,u),u.M=2,u.A=Oi(bt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=Nc(u.j,null),u.g.ea(u.A)),u.F=Date.now(),Ni(u)}Pc(a)}function xi(a){a.g&&(Ra(a),a.g.cancel(),a.g=null)}function wc(a){xi(a),a.v&&(o.clearTimeout(a.v),a.v=null),Vi(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function ki(a){if(!ic(a.h)&&!a.m){a.m=!0;var u=a.Ea;pe||E(),oe||(pe(),oe=!0),v.add(u,a),a.D=0}}function pp(a,u){return oc(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=u.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=os(c(a.Ea,a,u),bc(a,a.D)),a.D++,!0)}r.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const b=new tn(this,this.j,a);let S=this.o;if(this.U&&(S?(S=Ll(S),kl(S,this.U)):S=this.U),this.u!==null||this.R||(b.J=S,S=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var f=this.i[d];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(u+=f,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Tc(this,b,u),d=bt(this.J),we(d,"RID",a),we(d,"CVER",22),this.G&&we(d,"X-HTTP-Session-Id",this.G),ms(this,d),S&&(this.R?u="headers="+Bs(gc(S))+"&"+u:this.u&&Ta(d,this.u,S)),ya(this.h,b),this.Ra&&we(d,"TYPE","init"),this.S?(we(d,"$req",u),we(d,"SID","null"),b.U=!0,ma(b,d,null)):ma(b,d,u),this.I=2}}else this.I==3&&(a?Ic(this,a):this.i.length==0||ic(this.h)||Ic(this))};function Ic(a,u){var d;u?d=u.l:d=a.V++;const f=bt(a.J);we(f,"SID",a.M),we(f,"RID",d),we(f,"AID",a.K),ms(a,f),a.u&&a.o&&Ta(f,a.u,a.o),d=new tn(a,a.j,d,a.D+1),a.u===null&&(d.J=a.o),u&&(a.i=u.G.concat(a.i)),u=Tc(a,d,1e3),d.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),ya(a.h,d),ma(d,f,u)}function ms(a,u){a.H&&vi(a.H,function(d,f){we(u,f,d)}),a.l&&vi({},function(d,f){we(u,f,d)})}function Tc(a,u,d){d=Math.min(a.i.length,d);const f=a.l?c(a.l.Ka,a.l,a):null;e:{var b=a.i;let ie=-1;for(;;){const ke=["count="+d];ie==-1?d>0?(ie=b[0].g,ke.push("ofs="+ie)):ie=0:ke.push("ofs="+ie);let Ee=!0;for(let He=0;He<d;He++){var S=b[He].g;const Pt=b[He].map;if(S-=ie,S<0)ie=Math.max(0,b[He].g-100),Ee=!1;else try{S="req"+S+"_"||"";try{var j=Pt instanceof Map?Pt:Object.entries(Pt);for(const[$n,on]of j){let an=on;B(on)&&(an=da(on)),ke.push(S+$n+"="+encodeURIComponent(an))}}catch($n){throw ke.push(S+"type="+encodeURIComponent("_badmap")),$n}}catch{f&&f(Pt)}}if(Ee){j=ke.join("&");break e}}j=void 0}return a=a.i.splice(0,d),u.G=a,j}function Ac(a){if(!a.g&&!a.v){a.Y=1;var u=a.Da;pe||E(),oe||(pe(),oe=!0),v.add(u,a),a.A=0}}function va(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=os(c(a.Da,a),bc(a,a.A)),a.A++,!0)}r.Da=function(){if(this.v=null,vc(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=os(c(this.Wa,this),a)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ze(10),xi(this),vc(this))};function Ra(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function vc(a){a.g=new tn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var u=bt(a.na);we(u,"RID","rpc"),we(u,"SID",a.M),we(u,"AID",a.K),we(u,"CI",a.F?"0":"1"),!a.F&&a.ia&&we(u,"TO",a.ia),we(u,"TYPE","xmlhttp"),ms(a,u),a.u&&a.o&&Ta(u,a.u,a.o),a.O&&(a.g.H=a.O);var d=a.g;a=a.ba,d.M=1,d.A=Oi(bt(u)),d.u=null,d.R=!0,tc(d,a)}r.Va=function(){this.C!=null&&(this.C=null,xi(this),va(this),Ze(19))};function Vi(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Rc(a,u){var d=null;if(a.g==u){Vi(a),Ra(a),a.g=null;var f=2}else if(Da(a.h,u))d=u.G,ac(a.h,u),f=1;else return;if(a.I!=0){if(u.o)if(f==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var b=a.D;f=Pi(),Xe(f,new Wl(f,d)),ki(a)}else Ac(a);else if(b=u.m,b==3||b==0&&u.X>0||!(f==1&&pp(a,u)||f==2&&va(a)))switch(d&&d.length>0&&(u=a.h,u.i=u.i.concat(d)),b){case 1:Kn(a,5);break;case 4:Kn(a,10);break;case 3:Kn(a,6);break;default:Kn(a,2)}}}function bc(a,u){let d=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(d*=2),d*u}function Kn(a,u){if(a.j.info("Error code "+u),u==2){var d=c(a.bb,a),f=a.Ua;const b=!f;f=new nn(f||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||cs(f,"https"),Oi(f),b?cp(f.toString(),d):up(f.toString(),d)}else Ze(2);a.I=0,a.l&&a.l.pa(u),Pc(a),wc(a)}r.bb=function(a){a?(this.j.info("Successfully pinged google.com"),Ze(2)):(this.j.info("Failed to ping google.com"),Ze(1))};function Pc(a){if(a.I=0,a.ja=[],a.l){const u=Bc(a.h);(u.length!=0||a.i.length!=0)&&(A(a.ja,u),A(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function Sc(a,u,d){var f=d instanceof nn?bt(d):new nn(d);if(f.g!="")u&&(f.g=u+"."+f.g),us(f,f.u);else{var b=o.location;f=b.protocol,u=u?u+"."+b.hostname:b.hostname,b=+b.port;const S=new nn(null);f&&cs(S,f),u&&(S.g=u),b&&us(S,b),d&&(S.h=d),f=S}return d=a.G,u=a.wa,d&&u&&we(f,d,u),we(f,"VER",a.ka),ms(a,f),f}function Nc(a,u,d){if(u&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Aa&&!a.ma?new be(new Ia({ab:d})):new be(a.ma),u.Fa(a.L),u}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Oc(){}r=Oc.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Mi(){}Mi.prototype.g=function(a,u){return new Ct(a,u)};function Ct(a,u){$e.call(this),this.g=new yc(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(a?a["X-WebChannel-Client-Profile"]=u.sa:a={"X-WebChannel-Client-Profile":u.sa}),this.g.U=a,(a=u&&u.Qb)&&!D(a)&&(this.g.u=a),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!D(u)&&(this.g.G=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new gr(this)}C(Ct,$e),Ct.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){Aa(this.g)},Ct.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.v&&(d={},d.__data__=da(a),a=d);u.i.push(new np(u.Ya++,a)),u.I==3&&ki(u)},Ct.prototype.N=function(){this.g.l=null,delete this.j,Aa(this.g),delete this.g,Ct.Z.N.call(this)};function Fc(a){Ca.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(Fc,Ca);function Lc(){fa.call(this),this.status=1}C(Lc,fa);function gr(a){this.g=a}C(gr,Oc),gr.prototype.ra=function(){Xe(this.g,"a")},gr.prototype.qa=function(a){Xe(this.g,new Fc(a))},gr.prototype.pa=function(a){Xe(this.g,new Lc)},gr.prototype.oa=function(){Xe(this.g,"b")},Mi.prototype.createWebChannel=Mi.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,sd=function(){return new Mi},rd=function(){return Pi()},nd=Jn,tB={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Si.NO_ERROR=0,Si.TIMEOUT=8,Si.HTTP_ERROR=6,to=Si,Yl.COMPLETE="complete",td=Yl,Kl.EventType=ss,ss.OPEN="a",ss.CLOSE="b",ss.ERROR="c",ss.MESSAGE="d",$e.prototype.listen=$e.prototype.J,As=Kl,be.prototype.listenOnce=be.prototype.K,be.prototype.getLastError=be.prototype.Ha,be.prototype.getLastErrorCode=be.prototype.ya,be.prototype.getStatus=be.prototype.ca,be.prototype.getResponseJson=be.prototype.La,be.prototype.getResponseText=be.prototype.la,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Fa,ed=be}).apply(typeof Hi<"u"?Hi:typeof self<"u"?self:typeof window<"u"?window:{});/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.8.6
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository github:le0pard/re2js
* @license MIT
*/var _e,k=(_e=class{},H(_e,"FOLD_CASE",1),H(_e,"LITERAL",2),H(_e,"CLASS_NL",4),H(_e,"DOT_NL",8),H(_e,"ONE_LINE",16),H(_e,"NON_GREEDY",32),H(_e,"PERL_X",64),H(_e,"UNICODE_GROUPS",128),H(_e,"WAS_DOLLAR",256),H(_e,"LOOKBEHIND",512),H(_e,"MATCH_NL",_e.CLASS_NL|_e.DOT_NL),H(_e,"PERL",_e.CLASS_NL|_e.ONE_LINE|_e.PERL_X|_e.UNICODE_GROUPS),H(_e,"POSIX",0),H(_e,"UNANCHORED",0),H(_e,"ANCHOR_START",1),H(_e,"ANCHOR_BOTH",2),_e);const mr={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},Hs=128,nB=new Int32Array(Hs),rB=new Int32Array(Hs),Ui=65535;for(let r=0;r<Hs;r++)r>=97&&r<=122?nB[r]=r-32:nB[r]=r,r>=65&&r<=90?rB[r]=r+32:rB[r]=r;var Qa,N=(Qa=class{static toUpperCase(r){if(r<Hs)return nB[r];const e=String.fromCodePoint(r).toUpperCase(),t=e.codePointAt(0)>Ui?2:1;if(e.length>t)return r;const n=String.fromCodePoint(e.codePointAt(0)).toLowerCase(),s=n.codePointAt(0)>Ui?2:1;return n.length>s||n.codePointAt(0)!==r?r:e.codePointAt(0)}static toLowerCase(r){if(r<Hs)return rB[r];const e=String.fromCodePoint(r).toLowerCase(),t=e.codePointAt(0)>Ui?2:1;if(e.length>t)return r;const n=String.fromCodePoint(e.codePointAt(0)).toUpperCase(),s=n.codePointAt(0)>Ui?2:1;return n.length>s||n.codePointAt(0)!==r?r:e.codePointAt(0)}},H(Qa,"CODES",new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["'",39],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["`",96],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]])),Qa),g=class{constructor(r,e=!1){this.data=r,this.isStride1=e,this.SIZE=e?2:3}getLo(r){return this.data[r*this.SIZE]}getHi(r){return this.data[r*this.SIZE+1]}getStride(r){return this.isStride1?1:this.data[r*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const id=new Uint8Array(256);for(let r=0,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-";r<64;r++)id[e.charCodeAt(r)]=r;const od=r=>{const e=[];let t=0,n=0;for(let s=0;s<r.length;s++){let i=id[r.charCodeAt(s)];t|=(i&31)<<n,i&32?n+=5:(e.push(t),t=0,n=0)}return e},m=(r,e)=>{const t=od(r),n=e?t.length/2:t.length/3,s=new Uint32Array(n*3);let i=0,o=0;for(let B=0;B<n;B++)i+=t[o++],s[B*3]=i,i+=t[o++],s[B*3+1]=i,s[B*3+2]=e?1:t[o++];return s},em=r=>{const e=od(r),t=new Map;let n=0;for(let s=0;s<e.length;s+=2){n+=e[s];const i=e[s+1],o=i>>>1^-(i&1);t.set(n,n+o)}return t};var Ji=class{constructor(r){this.initializer=r,this.cache=new Map}has(r){return r in this.initializer}get(r){if(this.cache.has(r))return this.cache.get(r);const e=this.initializer[r],t=e?e():null;return this.cache.set(r,t),t}},cn,it=(cn=class{static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=em("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static get Print(){return this._Print||(this._Print=new g(m("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}static get Upper(){return this.CATEGORIES.get("Lu")}},H(cn,"_CASE_ORBIT",null),H(cn,"_Print",null),H(cn,"CATEGORIES",new Ji({C:()=>new g(m("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new g(m("AfgDgB",!0)),Cf:()=>new g(m("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new g(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new g(m("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new g(m("gg2B--B",!0)),L:()=>new g(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new g(m("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new g(m("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new g(m("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new g(m("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new g(m("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new g(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new g(m("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new g(m("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new g(m("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new g(m("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new g(m("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new g(m("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new g(m("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new g(m("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new g(m("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new g(m("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new g(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new g(m("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new g(m("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new g(m("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new g(m("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new g(m("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new g(m("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new g(m("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new g(m("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new g(m("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new g(m("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new g(m("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new g(m("ohIA",!0)),Zp:()=>new g(m("phIA",!0)),Zs:()=>new g(m("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new g(m("wBJIFbF",!0)),Alphabetic:()=>new g(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new g(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new g(m("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new g(m("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new g(m("7-8DE",!0)),Emoji_Modifier_Base:()=>new g(m("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new g(m("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new g(m("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new g(m("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new g(m("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new g(m("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new g(m("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new g(m("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new g(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new g(m("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))})),H(cn,"SCRIPTS",new Ji({Adlam:()=>new g(m("go6DrCFJFB",!0)),Ahom:()=>new g(m("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new g(m("ggxCmS",!0)),Arabic:()=>new g(m("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new g(m("xpBlBDxBDCks9BE",!0)),Avestan:()=>new g(m("g4iC1BEG",!0)),Balinese:()=>new g(m("g4GsCCxB",!0)),Bamum:()=>new g(m("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new g(m("w26CdDF",!0)),Batak:()=>new g(m("g+GzBJD",!0)),Bengali:()=>new g(m("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new g(m("g17CYDY",!0)),Bhaiksuki:()=>new g(m("ggnCICsBCNLc",!0)),Bopomofo:()=>new g(m("qXB6wLqBxDf",!0)),Brahmi:()=>new g(m("ggkCtCFjBKA",!0)),Braille:()=>new g(m("ggK-H",!0)),Buginese:()=>new g(m("gwGbDB",!0)),Buhid:()=>new g(m("g6FT",!0)),Canadian_Aboriginal:()=>new g(m("ggF-TxRlC7tgCP",!0)),Carian:()=>new g(m("g1gCwB",!0)),Caucasian_Albanian:()=>new g(m("wphCzBMA",!0)),Chakma:()=>new g(m("gokC0BCR",!0)),Cham:()=>new g(m("gwqB2BKNDJDD",!0)),Cherokee:()=>new g(m("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new g(m("w9jCb",!0)),Common:()=>new g(m("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new g(m("ifNxkKzDGG",!0)),Cuneiform:()=>new g(m("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new g(m("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new g(m("w8rCiD",!0)),Cyrillic:()=>new g(m("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new g(m("gghCvC",!0)),Devanagari:()=>new g(m("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new g(m("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new g(m("ggmC7B",!0)),Duployan:()=>new g(m("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new g(m("ggsC1iBL68D",!0)),Elbasan:()=>new g(m("gohCnB",!0)),Elymaic:()=>new g(m("g-jCW",!0)),Ethiopic:()=>new g(m("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new g(m("gqjClBEcJB",!0)),Georgian:()=>new g(m("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new g(m("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new g(m("w5gCa",!0)),Grantha:()=>new g(m("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new g(m("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new g(m("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new g(m("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new g(m("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new g(m("go4C5B",!0)),Han:()=>new g(m("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new g(m("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new g(m("gojCnBJJ",!0)),Hanunoo:()=>new g(m("g5FU",!0)),Hatran:()=>new g(m("gniCSCBGE",!0)),Hebrew:()=>new g(m("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new g(m("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new g(m("giiCVCI",!0)),Inherited:()=>new g(m("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new g(m("g7iCSGH",!0)),Inscriptional_Parthian:()=>new g(m("g6iCVDH",!0)),Javanese:()=>new g(m("gsqBtCDJFB",!0)),Kaithi:()=>new g(m("gkkCiCLA",!0)),Kannada:()=>new g(m("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new g(m("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new g(m("g4nCQCoBEc",!0)),Kayah_Li:()=>new g(m("goqBtBCA",!0)),Kharoshthi:()=>new g(m("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new g(m("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new g(m("g8F9CDJHJnPf",!0)),Khojki:()=>new g(m("gwkCRCuB",!0)),Khudawadi:()=>new g(m("w1kC6BGJ",!0)),Kirat_Rai:()=>new g(m("gq7C5B",!0)),Lao:()=>new g(m("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new g(m("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new g(m("ggH3BEOEC",!0)),Limbu:()=>new g(m("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new g(m("gwhC2JKVLH",!0)),Linear_B:()=>new g(m("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new g(m("wmpBvBx1eA",!0)),Lycian:()=>new g(m("g0gCc",!0)),Lydian:()=>new g(m("gpiCZGA",!0)),Mahajani:()=>new g(m("wqkCmB",!0)),Makasar:()=>new g(m("g3nCY",!0)),Malayalam:()=>new g(m("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new g(m("giCbDA",!0)),Manichaean:()=>new g(m("g2iCmBFL",!0)),Marchen:()=>new g(m("wjnCfDVCN",!0)),Masaram_Gondi:()=>new g(m("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new g(m("gy7C6C",!0)),Meetei_Mayek:()=>new g(m("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new g(m("gg6DkGDP",!0)),Meroitic_Cursive:()=>new g(m("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new g(m("gsiCf",!0)),Miao:()=>new g(m("g47CqCF4BIQ",!0)),Modi:()=>new g(m("gwlCkCMJ",!0)),Mongolian:()=>new g(m("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new g(m("gy6CeCJFB",!0)),Multani:()=>new g(m("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new g(m("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new g(m("gkiCeJI",!0)),Nag_Mundari:()=>new g(m("wm5DpB",!0)),Nandinagari:()=>new g(m("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new g(m("gsGrBFZHKEB",!0)),Newa:()=>new g(m("gglC7CCE",!0)),Nko:()=>new g(m("g+B6BDC",!0)),Nushu:()=>new g(m("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new g(m("go4DsBENDJFB",!0)),Ogham:()=>new g(m("g0Fc",!0)),Ol_Chiki:()=>new g(m("wiHvB",!0)),Ol_Onal:()=>new g(m("wu5DqBFA",!0)),Old_Hungarian:()=>new g(m("gkjCyBOyBIF",!0)),Old_Italic:()=>new g(m("g4gCjBKC",!0)),Old_North_Arabian:()=>new g(m("g0iCf",!0)),Old_Permic:()=>new g(m("w6gCqB",!0)),Old_Persian:()=>new g(m("g9gCjBFN",!0)),Old_Sogdian:()=>new g(m("g4jCnB",!0)),Old_South_Arabian:()=>new g(m("gziCf",!0)),Old_Turkic:()=>new g(m("ggjCoC",!0)),Old_Uyghur:()=>new g(m("w7jCZ",!0)),Oriya:()=>new g(m("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new g(m("wlhCjBFjB",!0)),Osmanya:()=>new g(m("gkhCdDJ",!0)),Pahawh_Hmong:()=>new g(m("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new g(m("gjiCf",!0)),Pau_Cin_Hau:()=>new g(m("g2mC4B",!0)),Phags_Pa:()=>new g(m("giqB3B",!0)),Phoenician:()=>new g(m("goiCbEA",!0)),Psalter_Pahlavi:()=>new g(m("g8iCRIDNG",!0)),Rejang:()=>new g(m("wpqBjBMA",!0)),Runic:()=>new g(m("g1FqCEK",!0)),Samaritan:()=>new g(m("ggCtBDO",!0)),Saurashtra:()=>new g(m("gkqBlCJL",!0)),Sharada:()=>new g(m("gskC-ChsCH",!0)),Shavian:()=>new g(m("wihCvB",!0)),Siddham:()=>new g(m("gslC1BDlB",!0)),Sidetic:()=>new g(m("gqiCZ",!0)),SignWriting:()=>new g(m("gg2DrUQECO",!0)),Sinhala:()=>new g(m("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new g(m("w5jCpB",!0)),Sora_Sompeng:()=>new g(m("wmkCYIJ",!0)),Soyombo:()=>new g(m("wymCyC",!0)),Sundanese:()=>new g(m("g8G-BhIH",!0)),Sunuwar:()=>new g(m("g+mChBPJ",!0)),Syloti_Nagri:()=>new g(m("ggqBsB",!0)),Syriac:()=>new g(m("g4BNC7BDCxIK",!0)),Tagalog:()=>new g(m("g4FVKA",!0)),Tagbanwa:()=>new g(m("g7FMCCCB",!0)),Tai_Le:()=>new g(m("wqGdDE",!0)),Tai_Tham:()=>new g(m("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new g(m("g0qBiCZE",!0)),Tai_Yo:()=>new g(m("g25DeCVJB",!0)),Takri:()=>new g(m("g0lC5BHJ",!0)),Tamil:()=>new g(m("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new g(m("wz6CuCCJ",!0)),Tangut:()=>new g(m("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new g(m("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new g(m("g8BxB",!0)),Thai:()=>new g(m("hwD5BGb",!0)),Tibetan:()=>new g(m("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new g(m("wpL3BIBPA",!0)),Tirhuta:()=>new g(m("gklCnCJJ",!0)),Todhri:()=>new g(m("guhCzB",!0)),Tolong_Siki:()=>new g(m("wtnCrBFJ",!0)),Toto:()=>new g(m("w04De",!0)),Tulu_Tigalari:()=>new g(m("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new g(m("g8gCdCA",!0)),Unknown:()=>new g(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new g(m("gopBrJ",!0)),Vithkuqi:()=>new g(m("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new g(m("g24D5BGA",!0)),Warang_Citi:()=>new g(m("glmCyCNA",!0)),Yezidi:()=>new g(m("g0jCpBCCDB",!0)),Yi:()=>new g(m("ggoBskBE2B",!0)),Zanabazar_Square:()=>new g(m("gwmCnC",!0))})),H(cn,"FOLD_CATEGORIES",new Ji({L:()=>new g(m("laA",!0)),LC:()=>new g(m("laA",!0)),Ll:()=>new g(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new g(m("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new g(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new g(m("5cgBgBlgHAB",!1)),Mn:()=>new g(m("5cgBgBlgHAB",!1)),Emoji:()=>new g(m("8mJA",!0)),Extended_Pictographic:()=>new g(m("8mJA",!0)),Lowercase:()=>new g(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new g(m("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new g(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))})),H(cn,"FOLD_SCRIPT",new Ji({Common:()=>new g(m("8cgBgB",!1)),Greek:()=>new g(m("1FwUwU",!1)),Inherited:()=>new g(m("5cgBgBlgHAB",!1))})),cn),De,K=(De=class{static is32(e,t){let n=0,s=e.length;for(;n<s;){const i=n+Math.floor((s-n)/2),o=e.getLo(i),B=e.getHi(i);if(o<=t&&t<=B){const l=e.getStride(i);return(t-o)%l===0}t<o?s=i:n=i+1}return!1}static is(e,t){if(t<=De.MAX_LATIN1){for(let n=0;n<e.length;n++){if(t>e.getHi(n))continue;const s=e.getLo(n);if(t<s)return!1;const i=e.getStride(n);return(t-s)%i===0}return!1}return e.length>0&&t>=e.getLo(0)&&De.is32(e,t)}static isUpper(e){if(e<=De.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return De.is(it.Upper,e)}static isPrint(e){return e<=De.MAX_LATIN1?e>=32&&e<De.MAX_ASCII||e>=161&&e!==173:De.is(it.Print,e)}static simpleFold(e){if(it.CASE_ORBIT.has(e))return it.CASE_ORBIT.get(e);const t=N.toLowerCase(e);return t!==e?t:N.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e===t)return!0;if(e<0||t<0)return!1;if(e<=De.MAX_ASCII&&t<=De.MAX_ASCII)return 65<=e&&e<=90&&(e|=32),65<=t&&t<=90&&(t|=32),e===t;for(let n=De.simpleFold(e);n!==e;n=De.simpleFold(n))if(n===t)return!0;return!1}},H(De,"MAX_RUNE",1114111),H(De,"MAX_ASCII",127),H(De,"MAX_LATIN1",255),H(De,"MAX_BMP",65535),H(De,"MIN_FOLD",65),H(De,"MAX_FOLD",125251),H(De,"MIN_HIGH_SURROGATE",55296),H(De,"MAX_HIGH_SURROGATE",56319),H(De,"MIN_LOW_SURROGATE",56320),H(De,"MAX_LOW_SURROGATE",57343),H(De,"MIN_SUPPLEMENTARY_CODE_POINT",65536),De);const bB=256,ad=new Uint8Array(bB);for(let r=0;r<bB;r++)ad[r]=97<=r&&r<=122||65<=r&&r<=90||48<=r&&r<=57||r===95?1:0;let La=null,xa=null;var Te,W=(Te=class{static emptyInts(){return[]}static isByteArray(e){return Array.isArray(e)||e instanceof Uint8Array}static isalnum(e){return N.CODES.get("0")<=e&&e<=N.CODES.get("9")||N.CODES.get("a")<=e&&e<=N.CODES.get("z")||N.CODES.get("A")<=e&&e<=N.CODES.get("Z")}static unhex(e){return N.CODES.get("0")<=e&&e<=N.CODES.get("9")?e-N.CODES.get("0"):N.CODES.get("a")<=e&&e<=N.CODES.get("f")?e-N.CODES.get("a")+10:N.CODES.get("A")<=e&&e<=N.CODES.get("F")?e-N.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(K.isPrint(e))Te.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case N.CODES.get('"'):t+='\\"';break;case N.CODES.get("\\"):t+="\\\\";break;case N.CODES.get("	"):t+="\\t";break;case N.CODES.get(`
`):t+="\\n";break;case N.CODES.get("\r"):t+="\\r";break;case N.CODES.get("\b"):t+="\\b";break;case N.CODES.get("\f"):t+="\\f";break;default:{let n=e.toString(16);e<256?(t+="\\x",n.length===1&&(t+="0"),t+=n):t+=`\\x{${n}}`;break}}return t}static stringToRunes(e){const t=String(e),n=[];let s=0;for(;s<t.length;){const i=t.codePointAt(s);n.push(i),s+=i>K.MAX_BMP?2:1}return n}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<bB?ad[e]===1:!1}static emptyOpContext(e,t){let n=0;return e<0&&(n|=Te.EMPTY_BEGIN_TEXT|Te.EMPTY_BEGIN_LINE),e===10&&(n|=Te.EMPTY_BEGIN_LINE),t<0&&(n|=Te.EMPTY_END_TEXT|Te.EMPTY_END_LINE),t===10&&(n|=Te.EMPTY_END_LINE),Te.isWordRune(e)!==Te.isWordRune(t)?n|=Te.EMPTY_WORD_BOUNDARY:n|=Te.EMPTY_NO_WORD_BOUNDARY,n}static quoteMeta(e){return e.split("").map(t=>Te.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>K.MAX_BMP?2:1}static toArray(e){const t=e.length,n=new Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return La||(La=new TextEncoder),La.encode(e);{let t=[],n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===K.MIN_HIGH_SURROGATE&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===K.MIN_LOW_SURROGATE?(i=K.MIN_SUPPLEMENTARY_CODE_POINT+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){xa||(xa=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return xa.decode(t)}else{let t=[],n=0,s=0;for(;n<e.length;){let i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[n++];t[s++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[n++],B=e[n++],l=e[n++],c=((i&7)<<18|(o&63)<<12|(B&63)<<6|l&63)-K.MIN_SUPPLEMENTARY_CODE_POINT;t[s++]=String.fromCharCode(K.MIN_HIGH_SURROGATE+(c>>10)),t[s++]=String.fromCharCode(K.MIN_LOW_SURROGATE+(c&1023))}else{let o=e[n++],B=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(o&63)<<6|B&63)}}return t.join("")}}},H(Te,"METACHARACTERS","\\.+*?()|[]{}^$"),H(Te,"EMPTY_BEGIN_LINE",1),H(Te,"EMPTY_END_LINE",2),H(Te,"EMPTY_BEGIN_TEXT",4),H(Te,"EMPTY_END_TEXT",8),H(Te,"EMPTY_WORD_BOUNDARY",16),H(Te,"EMPTY_NO_WORD_BOUNDARY",32),H(Te,"EMPTY_ALL",-1),Te);const Bd=(r=[],e=0)=>{const t=Object.create(null);for(let n=0;n<r.length;n++){const s=r[n],i=e+n;t[s]=i,t[i]=s}return Object.freeze(t)};var _n,ar=(_n=class{getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===_n.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===_n.Encoding.UTF_16}},H(_n,"Encoding",Bd(["UTF_16","UTF_8"])),_n),$c=class extends ar{constructor(r=null){super(),this.bytes=r}getEncoding(){return ar.Encoding.UTF_8}asCharSequence(){return W.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},tm=class extends ar{constructor(r=null){super(),this.charSequence=r}getEncoding(){return ar.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return W.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},Yn=class{static utf16(r){return new tm(r)}static utf8(r){return W.isByteArray(r)?new $c(r):new $c(W.stringToUtf8ByteArray(r))}},tt=class{static EOF(){return-8}constructor(){this.end=0}canCheckPrefix(){return!0}endPos(){return this.end}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},nm=class extends tt{constructor(r,e=0,t=r.length){super(),this.bytes=r,this.start=e,this.end=t}hasString(r,e){const t=r.bytes;if(t.length===0)return!0;const n=this.indexOf(this.bytes,t,this.start+e);return n!==-1&&n<=this.end-t.length}hasAnyString(r,e){return r.ac8?r.ac8.searchUTF8(this.bytes,this.start+e,this.end):!1}step(r){if(r+=this.start,r>=this.end)return tt.EOF();const e=this.bytes[r]&255;if(e<128)return e<<3|1;if(e>=194&&e<=223&&r+1<this.end){const t=this.bytes[r+1]&255;return(t&192)!==128?e<<3|1:((e&31)<<6|t&63)<<3|2}else if(e>=224&&e<=239&&r+2<this.end){const t=this.bytes[r+1]&255;if((t&192)!==128)return e<<3|1;const n=this.bytes[r+2]&255;return(n&192)!==128?e<<3|1:((e&15)<<12|(t&63)<<6|n&63)<<3|3}else if(e>=240&&e<=244&&r+3<this.end){const t=this.bytes[r+1]&255;if((t&192)!==128)return e<<3|1;const n=this.bytes[r+2]&255;if((n&192)!==128)return e<<3|1;const s=this.bytes[r+3]&255;return(s&192)!==128?e<<3|1:((e&7)<<18|(t&63)<<12|(n&63)<<6|s&63)<<3|4}else return e<<3|1}index(r,e){e+=this.start;const t=this.indexOf(this.bytes,r.prefixUTF8,e);return t<0?t:t-e}context(r){r+=this.start;let e=-1;if(r>this.start&&r<=this.end){let n=r-1;if(e=this.bytes[n--],e>=128){let s=r-4;for(s<this.start&&(s=this.start);n>=s&&(this.bytes[n]&192)===128;)n--;n<this.start&&(n=this.start),e=this.step(n-this.start)>>3}}const t=r<this.end?this.step(r-this.start)>>3:-1;return W.emptyOpContext(e,t)}indexOf(r,e,t=0){let n=e.length;if(n===0)return t<=this.end?t:-1;const s=e[0];let i=this.end-n;const o=typeof r.indexOf=="function";let B=t;for(;B<=i;){if(o){if(B=r.indexOf(s,B),B===-1||B>i)return-1}else{for(;B<=i&&r[B]!==s;)B++;if(B>i)return-1}let l=!0;for(let c=1;c<n;c++)if(r[B+c]!==e[c]){l=!1;break}if(l)return B;B++}return-1}prefixLength(r){return r.prefixUTF8.length}},rm=class extends tt{constructor(r,e=0,t=r.length){super(),this.charSequence=r,this.start=e,this.end=t}hasString(r,e){const t=this.charSequence.indexOf(r.str,this.start+e);return t!==-1&&t<=this.end-r.str.length}hasAnyString(r,e){return r.ac16?r.ac16.searchUTF16(this.charSequence,this.start+e,this.end):!1}step(r){if(r+=this.start,r>=this.end)return tt.EOF();const e=this.charSequence.charCodeAt(r);if(e<K.MIN_HIGH_SURROGATE||e>K.MAX_HIGH_SURROGATE||r+1>=this.end)return e<<3|1;const t=this.charSequence.charCodeAt(r+1);return t>=K.MIN_LOW_SURROGATE&&t<=K.MAX_LOW_SURROGATE?(e-K.MIN_HIGH_SURROGATE)*1024+(t-K.MIN_LOW_SURROGATE)+K.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:e<<3|1}index(r,e){e+=this.start;const t=this.charSequence.indexOf(r.prefix,e);return t<0||t>this.end-r.prefix.length?-1:t-e}context(r){r+=this.start;const e=r>this.start&&r<=this.end?this.charSequence.charCodeAt(r-1):-1,t=r<this.end?this.charSequence.charCodeAt(r):-1;return W.emptyOpContext(e,t)}prefixLength(r){return r.prefix.length}},Ie=class{static fromUTF8(r,e=0,t=r.length){return new nm(r,e,t)}static fromUTF16(r,e=0,t=r.length){return new rm(r,e,t)}},li=class extends Error{constructor(r){super(r),this.name="RE2JSException"}},ye=class extends li{constructor(r,e=null){let t=`error parsing regexp: ${r}`;e&&(t+=`: \`${e}\``),super(t),this.name="RE2JSSyntaxException",this.message=t,this.error=r,this.input=e}getDescription(){return this.error}getPattern(){return this.input}},sm=class extends li{constructor(r){super(r),this.name="RE2JSCompileException"}},st=class extends li{constructor(r){super(r),this.name="RE2JSGroupException"}},im=class extends li{constructor(r){super(r),this.name="RE2JSFlagsException"}},Ps=class extends li{constructor(r){super(r),this.name="RE2JSInternalException"}},er,zc=(er=class{static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(n=>{const s=n.codePointAt(0);return s===N.CODES.get("\\")||s===N.CODES.get("$")?`\\${n}`:n}).join(""):e.indexOf("$")<0?e:e.split("").map(n=>n.codePointAt(0)===N.CODES.get("$")?"$$":n).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const n=this.patternInput.re2();this.patternGroupCount=n.numberOfCapturingGroups(),this.groups=[],this.namedGroups=n.namedGroups,this.numberOfInstructions=n.numberOfInstructions(),t instanceof ar?this.resetMatcherInput(t):W.isByteArray(t)?this.resetMatcherInput(Yn.utf8(t)):this.resetMatcherInput(Yn.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return e instanceof ar||(W.isByteArray(e)?e=Yn.utf8(e):e=Yn.utf16(e)),this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new st(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new st(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if(typeof e=="string"){const s=this.namedGroups[e];if(!Number.isFinite(s))throw new st(`group '${e}' not found`);e=s}const t=this.start(e),n=this.end(e);return t<0&&n<0?null:this.substring(t,n)}getNamedGroups(){if(!this.hasMatch)throw new st("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new st(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new st("perhaps no match attempted");if(e===0||this.hasGroups)return;const t=this.matcherInputLength,n=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!n[0])throw new st("inconsistency in matching group data");this.groups=n[1],this.hasGroups=!0}matches(){return this.genMatch(0,k.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,k.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new st(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?Ie.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):Ie.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=t&7}return this.genMatch(e,k.UNANCHORED)}genMatch(e,t){const n=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return n[0]?(this.groups=n[1],this.hasMatch=!0,this.hasGroups=this.patternGroupCount===0,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?W.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let n="";const s=this.start(),i=this.end();return this.appendPos<s&&(n+=this.substring(this.appendPos,s)),this.appendPos=i,n+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),n}appendReplacementInternalJava(e){let t="",n=0;const s=e.length;let i=0;for(;i<s;){const o=e.codePointAt(i);if(o===N.CODES.get("\\")){if(n<i&&(t+=e.substring(n,i)),i++,i>=s)throw new st("character to be escaped is missing");n=i,i++;continue}if(o===N.CODES.get("$")){if(n<i&&(t+=e.substring(n,i)),i+1>=s)throw new st("Illegal group reference: group index is missing");const B=e.codePointAt(i+1);if(N.CODES.get("0")<=B&&B<=N.CODES.get("9")){let l=B-N.CODES.get("0"),c=i+2;for(;c<s;c++){const C=e.codePointAt(c);if(C<N.CODES.get("0")||C>N.CODES.get("9")||l*10+C-N.CODES.get("0")>this.patternGroupCount)break;l=l*10+C-N.CODES.get("0")}if(l>this.patternGroupCount)throw new st(`n > number of groups: ${l}`);const h=this.group(l);h!==null&&(t+=h),i=c,n=i}else if(B===N.CODES.get("{")){let l=i+2;for(;l<s&&e.codePointAt(l)!==N.CODES.get("}");)l++;if(l>=s)throw new st("named capture group is missing trailing '}'");const c=e.substring(i+2,l),h=this.group(c);h!==null&&(t+=h),i=l+1,n=i}else throw new st("Illegal group reference");continue}i++}return n<s&&(t+=e.substring(n,s)),t}appendReplacementInternalJs(e){let t="",n=0;const s=e.length;for(let i=0;i<s-1;i++)if(e.codePointAt(i)===N.CODES.get("$")){let o=e.codePointAt(i+1);if(N.CODES.get("$")===o){n<i&&(t+=e.substring(n,i)),t+="$",i++,n=i+1;continue}else if(N.CODES.get("&")===o){n<i&&(t+=e.substring(n,i));const B=this.group(0);B!==null?t+=B:t+="$&",i++,n=i+1;continue}else if(N.CODES.get("`")===o){n<i&&(t+=e.substring(n,i)),t+=this.substring(0,this.start(0)),i++,n=i+1;continue}else if(N.CODES.get("'")===o){n<i&&(t+=e.substring(n,i)),t+=this.substring(this.end(0),this.matcherInputLength),i++,n=i+1;continue}else if(N.CODES.get("1")<=o&&o<=N.CODES.get("9")){let B=o-N.CODES.get("0");for(n<i&&(t+=e.substring(n,i)),i+=2;i<s&&(o=e.codePointAt(i),!(o<N.CODES.get("0")||o>N.CODES.get("9")||B*10+o-N.CODES.get("0")>this.patternGroupCount));i++)B=B*10+o-N.CODES.get("0");if(B>this.patternGroupCount){t+=`$${B}`,n=i,i--;continue}const l=this.group(B);l!==null&&(t+=l),n=i,i--;continue}else if(o===N.CODES.get("<")){n<i&&(t+=e.substring(n,i)),i++;let B=i+1;for(;B<e.length&&e.codePointAt(B)!==N.CODES.get(">")&&e.codePointAt(B)!==N.CODES.get(" ");)B++;if(B===e.length||e.codePointAt(B)!==N.CODES.get(">")){t+=e.substring(i-1,B+1),n=B+1,i=B;continue}const l=e.substring(i+1,B);if(Object.prototype.hasOwnProperty.call(this.namedGroups,l)){const c=this.group(l);c!==null&&(t+=c)}else t+=`$<${l}>`;n=B+1,i=B;continue}}return n<s&&(t+=e.substring(n,s)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,n=!1){let s="";this.reset();const i=typeof e=="function",o=Object.keys(this.namedGroups).length>0;let B=null;if(i){if(this.groupCount()>=er.MAX_REPLACER_ARGS)throw new st("Too many capture groups to safely invoke replacer function");B=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(s+=i?this.appendReplacementFunc(e,o,B):this.appendReplacement(e,n),!!t););return s+=this.appendTail(),s}appendReplacementFunc(e,t,n){let s="";const i=this.start(),o=this.end();this.appendPos<i&&(s+=this.substring(this.appendPos,i)),this.appendPos=o;const B=this.buildReplacerArgs(i,t,n);return s+=String(e(...B)),s}buildReplacerArgs(e,t,n){const s=[this.group(0)],i=this.groupCount();for(let o=1;o<=i;o++){const B=this.start(o);B<0?s.push(void 0):s.push(this.substring(B,this.end(o)))}if(s.push(e),s.push(n),t){const o=this.getNamedGroups();for(const B in o)o[B]===null&&(o[B]=void 0);s.push(o)}return s}},H(er,"MAX_REPLACER_ARGS",65535),er),ce,O=(ce=class{static isRuneOp(e){return ce.RUNE<=e&&e<=ce.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let n of e)t+=W.escapeRune(n);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=[],this.next=null}matchRune(e){if(this.runes.length===1){const o=this.runes[0];return this.arg&k.FOLD_CASE?K.equalsIgnoreCase(o,e):e===o}const t=this.runes.length;if(t===0)return!1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return!1;if(e<=this.runes[o+1])return!0}return!1}let n=0,s=t>>1;for(;s>1;){const o=s>>1;n+=this.runes[n+o<<1]<=e?o:0,s-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]}matchRunePos(e){if(this.runes.length===1){const o=this.runes[0];return this.arg&k.FOLD_CASE?K.equalsIgnoreCase(o,e)?0:-1:e===o?0:-1}const t=this.runes.length;if(t===0)return-1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return-1;if(e<=this.runes[o+1])return Math.floor(o/2)}return-1}let n=0,s=t>>1;for(;s>1;){const o=s>>1;n+=this.runes[n+o<<1]<=e?o:0,s-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]?i:-1}toString(){switch(this.op){case ce.ALT:return`alt -> ${this.out}, ${this.arg}`;case ce.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case ce.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case ce.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case ce.MATCH:return`match${this.arg!==0?` ${this.arg}`:""}`;case ce.FAIL:return"fail";case ce.NOP:return`nop -> ${this.out}`;case ce.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case ce.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case ce.RUNE:return this.runes===null?"rune <null>":["rune ",ce.escapeRunes(this.runes),this.arg&k.FOLD_CASE?"/i":""," -> ",this.out].join("");case ce.RUNE1:return`rune1 ${ce.escapeRunes(this.runes)} -> ${this.out}`;case ce.RUNE_ANY:return`any -> ${this.out}`;case ce.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},H(ce,"ALT",1),H(ce,"ALT_MATCH",2),H(ce,"CAPTURE",3),H(ce,"EMPTY_WIDTH",4),H(ce,"FAIL",5),H(ce,"MATCH",6),H(ce,"NOP",7),H(ce,"RUNE",8),H(ce,"RUNE1",9),H(ce,"RUNE_ANY",10),H(ce,"RUNE_ANY_NOT_NL",11),H(ce,"LB_WRITE",12),H(ce,"LB_CHECK",13),ce),Qc=class{constructor(r){this.sparse=new Int32Array(r),this.densePcs=new Int32Array(r),this.denseCaps=null,this.size=0,this.ncap=0}init(r){this.ncap=r;const e=this.densePcs.length*r;(!this.denseCaps||this.denseCaps.length<e)&&(this.denseCaps=new Int32Array(e))}contains(r){const e=this.sparse[r];return e<this.size&&this.densePcs[e]===r}isEmpty(){return this.size===0}add(r){const e=this.size++;return this.sparse[r]=e,this.densePcs[e]=r,e}clear(){this.size=0}toString(){let r="{";for(let e=0;e<this.size;e++)e!==0&&(r+=", "),r+=this.densePcs[e];return r+="}",r}},om=class sB{static fromRE2(e){const t=new sB;return t.prog=e.prog,t.re2=e,t.q0=new Qc(t.prog.numInst()),t.q1=new Qc(t.prog.numInst()),t.matched=!1,t.matchcap=new Int32Array(t.prog.numCap<2?2:t.prog.numCap),t.ncap=0,t}static fromMachine(e){return sB.fromRE2(e.re2)}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return this.ncap===0?W.emptyInts():W.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,n){const s=this.re2.cond;if(s===W.EMPTY_ALL||(n===k.ANCHOR_START||n===k.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap.fill(-1);let i=this.prog.numLb>0?0:t,o=t,B=this.q0,l=this.q1,c=e.step(i),h=c>>3,C=c&7,p=-1,_=0;c!==tt.EOF()&&(c=e.step(i+C),p=c>>3,_=c&7);let A;for(i===0?A=W.emptyOpContext(-1,h):A=e.context(i);;){if(B.isEmpty()){if(s&W.EMPTY_BEGIN_TEXT&&i!==0||(n===k.ANCHOR_START||n===k.ANCHOR_BOTH)&&i!==0||this.matched)break;if(this.prog.numLb===0&&this.re2.prefix.length!==0&&p!==this.re2.prefixRune&&e.canCheckPrefix()){const G=e.index(this.re2,i);if(G<0)break;i+=G,c=e.step(i),h=c>>3,C=c&7,c=e.step(i+C),p=c>>3,_=c&7,A=e.context(i)}}if(i===0&&this.prog.numLb>0)for(let G=0;G<this.prog.lbStarts.length;G++)this.add(B,this.prog.lbStarts[G],i,this.matchcap,0,A);!this.matched&&(i===0||n===k.UNANCHORED)&&i>=o&&(this.ncap>0&&(this.matchcap[0]=i),this.add(B,this.prog.start,i,this.matchcap,0,A));const L=i+C;if(A=e.context(L),this.step(B,l,i,L,h,A,n,i===e.endPos()),C===0||this.ncap===0&&this.matched)break;i+=C,h=p,C=_,h!==-1&&(c=e.step(i+C),p=c>>3,_=c&7);const M=B;B=l,l=M}return l.clear(),this.matched}matchSet(e,t,n){const s=this.re2.cond;if(s===W.EMPTY_ALL)return[];if((n===k.ANCHOR_START||n===k.ANCHOR_BOTH)&&t!==0)return[];let i=this.prog.numLb>0?0:t,o=t,B=this.q0,l=this.q1,c=e.step(i),h=c>>3,C=c&7,p=-1,_=0;c!==tt.EOF()&&(c=e.step(i+C),p=c>>3,_=c&7);let A=i===0?W.emptyOpContext(-1,h):e.context(i);const L=new Set;for(;!(B.isEmpty()&&(s&W.EMPTY_BEGIN_TEXT&&i!==0||(n===k.ANCHOR_START||n===k.ANCHOR_BOTH)&&i!==0));){if(i===0&&this.prog.numLb>0)for(let ee=0;ee<this.prog.lbStarts.length;ee++)this.add(B,this.prog.lbStarts[ee],i,this.matchcap,0,A);(i===0||n===k.UNANCHORED)&&i>=o&&this.add(B,this.prog.start,i,this.matchcap,0,A);const M=i+C;A=e.context(M);for(let ee=0;ee<B.size;ee++){const Q=B.densePcs[ee],fe=this.prog.inst[Q],pe=ee*this.ncap;let oe=!1;switch(fe.op){case O.MATCH:if(n===k.ANCHOR_BOTH&&i!==e.endPos())break;L.add(fe.arg);break;case O.RUNE:oe=fe.matchRune(h);break;case O.RUNE1:oe=h===fe.runes[0];break;case O.RUNE_ANY:oe=!0;break;case O.RUNE_ANY_NOT_NL:oe=h!==10;break;default:continue}oe&&this.add(l,fe.out,M,B.denseCaps,pe,A)}if(B.clear(),C===0)break;i+=C,h=p,C=_,h!==-1&&(c=e.step(i+C),p=c>>3,_=c&7);const G=B;B=l,l=G}return l.clear(),Array.from(L).sort((M,G)=>M-G)}step(e,t,n,s,i,o,B,l){const c=this.re2.longest;for(let h=0;h<e.size;h++){const C=e.densePcs[h],p=h*this.ncap;if(c&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[p])continue;const _=this.prog.inst[C];let A=!1;switch(_.op){case O.MATCH:if(B===k.ANCHOR_BOTH&&!l)break;if(this.ncap>0&&(!c||!this.matched||this.matchcap[1]<n)){e.denseCaps[p+1]=n;for(let L=0;L<this.ncap;L++)this.matchcap[L]=e.denseCaps[p+L]}c||(e.size=0),this.matched=!0;break;case O.RUNE:A=_.matchRune(i);break;case O.RUNE1:A=i===_.runes[0];break;case O.RUNE_ANY:A=!0;break;case O.RUNE_ANY_NOT_NL:A=i!==10;break;default:continue}A&&this.add(t,_.out,s,e.denseCaps,p,o)}e.clear()}add(e,t,n,s,i,o){for(;;){if(t===0||e.contains(t))return;const B=e.add(t),l=this.prog.inst[t];switch(l.op){case O.FAIL:return;case O.ALT:case O.ALT_MATCH:this.add(e,l.out,n,s,i,o),t=l.arg;continue;case O.EMPTY_WIDTH:if(!(l.arg&~o)){t=l.out;continue}return;case O.NOP:t=l.out;continue;case O.CAPTURE:if(l.arg<this.ncap){const c=s[i+l.arg];s[i+l.arg]=n,this.add(e,l.out,n,s,i,o),s[i+l.arg]=c;return}else{t=l.out;continue}case O.LB_WRITE:this.lbTable[Math.abs(l.arg)]=n,t=l.out;continue;case O.LB_CHECK:if(l.arg>0){if(this.lbTable[l.arg]===n){t=l.out;continue}}else if(this.lbTable[-l.arg]!==n){t=l.out;continue}return;case O.MATCH:case O.RUNE:case O.RUNE1:case O.RUNE_ANY:case O.RUNE_ANY_NOT_NL:if(this.ncap>0){const c=B*this.ncap;for(let h=0;h<this.ncap;h++)e.denseCaps[c+h]=s[i+h]}return;default:throw new Ps("unhandled")}}}};const Wc=r=>{let e=-2128831035;for(let t=0;t<r.length;t++)e^=r[t],e=Math.imul(e,16777619);return e},am=(r,e)=>{if(r.length!==e.length)return!1;for(let t=0;t<r.length;t++)if(r[t]!==e[t])return!1;return!0};var Bm=class{constructor(r,e,t=[]){this.nfaStates=r,this.isMatch=e,this.matchIDs=t,this.nextLatin1=new Array(K.MAX_LATIN1+1).fill(null),this.nextLatin1Anchored=new Array(K.MAX_LATIN1+1).fill(null),this.transKeys=[],this.transVals=[],this.lastSeen=0}},jt,lm=(jt=class{constructor(e,t=8388608){this.prog=e,this.stateCache=new Map,this.stateCount=0,this.startState=null,this.stateLimit=Math.max(1,Math.floor(t/jt.STATE_MEMORY_ESTIMATE)),this.cacheClears=0,this.failed=!1,this.clock=0}computeClosure(e){const t=new Set,n=[...e];let s=!1;const i=[];for(;n.length>0;){const B=n.pop();if(t.has(B))continue;t.add(B);const l=this.prog.getInst(B);switch(l.op){case O.MATCH:s=!0,i.includes(l.arg)||i.push(l.arg);break;case O.ALT:case O.ALT_MATCH:n.push(l.out),n.push(l.arg);break;case O.NOP:case O.CAPTURE:n.push(l.out);break;case O.EMPTY_WIDTH:case O.LB_WRITE:case O.LB_CHECK:return null}}const o=Int32Array.from(t).sort();return i.sort((B,l)=>B-l),{pcs:o,isMatch:s,matchIDs:i}}getState(e){const t=this.computeClosure(e);if(!t)return null;const n=t.pcs,s=Wc(n);let i=this.stateCache.get(s);if(i)for(let B=0;B<i.length;B++){const l=i[B];if(am(l.nfaStates,n))return l.lastSeen=++this.clock,l}else i=[],this.stateCache.set(s,i);if(this.failed)return null;if(this.stateCount>=this.stateLimit){if(this.cacheClears++,this.cacheClears>=jt.MAX_CACHE_CLEARS)return this.failed=!0,this.stateCache.clear(),this.stateCount=0,this.startState=null,null;this.evictCache(),i=this.stateCache.get(s),i||(i=[],this.stateCache.set(s,i))}const o=new Bm(n,t.isMatch,t.matchIDs);return o.lastSeen=++this.clock,i.push(o),this.stateCount++,o}evictCache(){const e=[];for(const o of this.stateCache.values())for(let B=0;B<o.length;B++)e.push(o[B]);e.sort((o,B)=>o.lastSeen-B.lastSeen);const t=Math.max(1,Math.floor(this.stateLimit/2)),n=e.length-t,s=e.slice(n),i=new Set(s);this.stateCache.clear(),this.stateCount=0;for(let o=0;o<s.length;o++){const B=s[o];B.nextLatin1.fill(null),B.nextLatin1Anchored.fill(null),B.transKeys.length=0,B.transVals.length=0;const l=Wc(B.nfaStates);let c=this.stateCache.get(l);c||(c=[],this.stateCache.set(l,c)),c.push(B),this.stateCount++}this.startState&&!i.has(this.startState)&&(this.startState=null)}step(e,t,n){if(t<=K.MAX_LATIN1)if(n===k.UNANCHORED){const o=e.nextLatin1[t];if(o!==null)return o}else{const o=e.nextLatin1Anchored[t];if(o!==null)return o}else{const o=t+(n===k.UNANCHORED?0:K.MAX_RUNE+1),B=e.transKeys,l=B.length;for(let c=0;c<l;c++)if(B[c]===o)return e.transVals[c]}const s=[];for(let o=0;o<e.nfaStates.length;o++){const B=e.nfaStates[o],l=this.prog.getInst(B);O.isRuneOp(l.op)&&l.matchRune(t)&&s.push(l.out)}n===k.UNANCHORED&&s.push(this.prog.start);const i=this.getState(s);if(t<=K.MAX_LATIN1)n===k.UNANCHORED?e.nextLatin1[t]=i:e.nextLatin1Anchored[t]=i;else{const o=t+(n===k.UNANCHORED?0:K.MAX_RUNE+1);e.transKeys.push(o),e.transVals.push(i)}return i}match(e,t,n){if((n===k.ANCHOR_START||n===k.ANCHOR_BOTH)&&t!==0)return!1;if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let s=e.endPos(),i=this.startState;if(i.isMatch)if(n===k.ANCHOR_BOTH){if(t===s)return!0}else return!0;let o=t;for(;o<s;){const B=e.step(o),l=B>>3,c=B&7;if(c===0)break;if(i=n===k.UNANCHORED&&l<=K.MAX_LATIN1&&i.nextLatin1[l]||this.step(i,l,n),i===null)return null;if(i.lastSeen=++this.clock,i.isMatch)if(n===k.ANCHOR_BOTH){if(o+c===s)return!0}else return!0;if(i.nfaStates.length===0&&n!==k.UNANCHORED)return!1;o+=c}return!1}matchSet(e,t,n){if((n===k.ANCHOR_START||n===k.ANCHOR_BOTH)&&t!==0)return[];if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let s=e.endPos(),i=this.startState;const o=new Set,B=(c,h)=>{c.isMatch&&(n===k.ANCHOR_BOTH?h===s&&c.matchIDs.forEach(C=>o.add(C)):c.matchIDs.forEach(C=>o.add(C)))};B(i,t);let l=t;for(;l<s;){const c=e.step(l),h=c>>3,C=c&7;if(C===0)break;if(i=n===k.UNANCHORED&&h<=K.MAX_LATIN1&&i.nextLatin1[h]||this.step(i,h,n),i===null)return null;if(i.lastSeen=++this.clock,l+=C,B(i,l),i.nfaStates.length===0&&n!==k.UNANCHORED)break}return Array.from(o).sort((c,h)=>c-h)}},H(jt,"MAX_CACHE_CLEARS",5),H(jt,"STATE_MEMORY_ESTIMATE",838),jt);const cm=32,um=500,ka=256,hm=256*1024;var dm=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(ka),this.jobArg=new Uint8Array(ka),this.jobPos=new Int32Array(ka),this.jobLen=0,this.visited=new Uint32Array(0)}reset(r,e,t){this.end=e,this.jobLen=0,this.ncap=t;const n=r.numInst()*(e+1)+cm-1>>>5;this.visited.length<n?this.visited=new Uint32Array(n):this.visited.fill(0,0,n),this.cap.length<t?this.cap=new Int32Array(t).fill(-1):this.cap.fill(-1,0,t),this.matchcap.length<t?this.matchcap=new Int32Array(t).fill(-1):this.matchcap.fill(-1,0,t)}shouldVisit(r,e){const t=r*(this.end+1)+e,n=t>>>5,s=1<<(t&31);return this.visited[n]&s?!1:(this.visited[n]|=s,!0)}push(r,e,t,n){if(r.prog.getInst(e).op!==O.FAIL&&(n||this.shouldVisit(e,t))){if(this.jobLen>=this.jobPc.length){const s=this.jobPc.length*2,i=new Int32Array(s);i.set(this.jobPc),this.jobPc=i;const o=new Uint8Array(s);o.set(this.jobArg),this.jobArg=o;const B=new Int32Array(s);B.set(this.jobPos),this.jobPos=B}this.jobPc[this.jobLen]=e,this.jobArg[this.jobLen]=n?1:0,this.jobPos[this.jobLen]=t,this.jobLen++}}tryBacktrack(r,e,t,n,s){const i=r.longest;for(this.push(r,t,n,!1);this.jobLen>0;){this.jobLen--;let o=this.jobPc[this.jobLen],B=this.jobArg[this.jobLen]===1,l=this.jobPos[this.jobLen],c=!0;for(;!(!c&&!this.shouldVisit(o,l));){c=!1;const h=r.prog.getInst(o);switch(h.op){case O.FAIL:throw new Ps("unexpected InstFail");case O.ALT:if(B){B=!1,o=h.arg;continue}else{this.push(r,o,l,!0),o=h.out;continue}case O.ALT_MATCH:{const C=r.prog.getInst(h.out);if(O.isRuneOp(C.op)){this.push(r,h.arg,l,!1),o=h.arg,l=this.end;continue}this.push(r,h.out,this.end,!1),o=h.out;continue}case O.RUNE:{const C=e.step(l);if(C===tt.EOF()||!h.matchRune(C>>3))break;l+=C&7,o=h.out;continue}case O.RUNE1:{const C=e.step(l);if(C===tt.EOF()||C>>3!==h.runes[0])break;l+=C&7,o=h.out;continue}case O.RUNE_ANY_NOT_NL:{const C=e.step(l);if(C===tt.EOF()||C>>3===10)break;l+=C&7,o=h.out;continue}case O.RUNE_ANY:{const C=e.step(l);if(C===tt.EOF())break;l+=C&7,o=h.out;continue}case O.CAPTURE:if(B){this.cap[h.arg]=l;break}else{h.arg<this.ncap&&(this.push(r,o,this.cap[h.arg],!0),this.cap[h.arg]=l),o=h.out;continue}case O.EMPTY_WIDTH:{const C=e.context(l);if(h.arg&~C)break;o=h.out;continue}case O.NOP:o=h.out;continue;case O.MATCH:{if(s===k.ANCHOR_BOTH&&l!==this.end)break;if(this.ncap===0)return!0;this.ncap>1&&(this.cap[1]=l);const C=this.matchcap[1];if((C===-1||i&&l>0&&l>C)&&this.matchcap.set(this.cap),!i||l===this.end)return!0;break}case O.LB_WRITE:case O.LB_CHECK:throw new Ps("Backtracker cannot evaluate Lookbehind instructions");default:throw new Ps("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const ji=[];var qi=class ld{static shouldBacktrack(e){return e.numInst()<=um}static maxBitStateLen(e){return ld.shouldBacktrack(e)?Math.floor(hm/e.numInst()):0}static execute(e,t,n,s,i){const o=e.cond;if(o===W.EMPTY_ALL||(s===k.ANCHOR_START||s===k.ANCHOR_BOTH)&&n!==0||o&W.EMPTY_BEGIN_TEXT&&n!==0)return null;const B=ji.length>0?ji.pop():new dm,l=t.endPos();B.reset(e.prog,l,i);let c=!1;if(o&W.EMPTY_BEGIN_TEXT||s===k.ANCHOR_START||s===k.ANCHOR_BOTH)B.ncap>0&&(B.cap[0]=n),B.tryBacktrack(e,t,e.prog.start,n,s)&&(c=!0);else{let C=-1;for(;n<=l&&C!==0;n+=C){if(e.prefix.length>0){const _=t.index(e,n);if(_<0)break;n+=_}if(B.ncap>0&&(B.cap[0]=n),B.tryBacktrack(e,t,e.prog.start,n,s)){c=!0;break}const p=t.step(n);C=p===tt.EOF()?0:p&7}}if(!c)return ji.push(B),null;const h=i===0?[]:W.toArray(B.matchcap.subarray(0,i));return ji.push(B),h}},Yc=class{constructor(r){this.sparse=new Uint32Array(r),this.dense=new Uint32Array(r),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(r){return r<this.sparse.length&&this.sparse[r]<this.size&&this.dense[this.sparse[r]]===r}insert(r){this.contains(r)||this.insertNew(r)}insertNew(r){r>=this.sparse.length||(this.sparse[r]=this.size,this.dense[this.size]=r,this.size++)}};const Cm=(r,e,t,n)=>{const s=r.length,i=e.length;let o=0,B=0;const l=[],c=[];let h=!0,C=-1;const p=_=>{const A=_?r:e,L=_?o:B,M=_?t:n;return C>0&&A[L]<=l[C]?!1:(l.push(A[L],A[L+1]),_?o+=2:B+=2,C+=2,c.push(M),!0)};for(;o<s||B<i;)if(B>=i?h=p(!0):o>=s||e[B]<r[o]?h=p(!1):h=p(!0),!h)return null;return{merged:l,next:c}};var fm=class{constructor(r){this.start=r.start,this.numCap=r.numCap,this.inst=new Array(r.inst.length);for(let e=0;e<r.inst.length;e++){const t=r.inst[e],n=new O(t.op);n.out=t.out,n.arg=t.arg,n.runes=t.runes?t.runes.slice():[],n.next=null,this.inst[e]=n}}};const pm=r=>{const e=new fm(r);for(let t=0;t<e.inst.length;t++){const n=e.inst[t];if(n.op!==O.ALT&&n.op!==O.ALT_MATCH)continue;let s="out",i="arg",o=e.inst[n[i]];if(o.op!==O.ALT&&o.op!==O.ALT_MATCH&&(s="arg",i="out",o=e.inst[n[i]],o.op!==O.ALT&&o.op!==O.ALT_MATCH))continue;const B=e.inst[n[s]];if(B.op===O.ALT||B.op===O.ALT_MATCH)continue;let l="out",c="arg",h=!1;o.out===t?h=!0:o.arg===t&&(h=!0,l="arg",c="out"),h&&(o[l]=n[s]),n[s]===o[l]&&(n[i]=o[c])}return e},gm=r=>{if(r.inst.length>=1e3)return null;const e=new Yc(r.inst.length),t=new Yc(r.inst.length),n=new Array(r.inst.length),s=new Array(r.inst.length).fill(!1),i=o=>{let B=!0;const l=r.inst[o];if(t.contains(o))return!0;switch(t.insert(o),l.op){case O.ALT:case O.ALT_MATCH:{B=i(l.out)&&i(l.arg);let c=s[l.out],h=s[l.arg];if(c&&h)return!1;if(h){const A=l.out;l.out=l.arg,l.arg=A;const L=c;c=h,h=L}c&&(s[o]=!0,l.op=O.ALT_MATCH);const C=n[l.out]||[],p=n[l.arg]||[],_=Cm(C,p,l.out,l.arg);if(!_)return!1;n[o]=_.merged,l.next=new Uint32Array(_.next);break}case O.CAPTURE:case O.EMPTY_WIDTH:case O.NOP:B=i(l.out),s[o]=s[l.out],n[o]=n[l.out]?n[l.out].slice():[],l.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(l.out);break;case O.MATCH:case O.FAIL:s[o]=l.op===O.MATCH;break;case O.RUNE:{if(s[o]=!1,l.next&&l.next.length>0)break;if(e.insert(l.out),!l.runes||l.runes.length===0){n[o]=[],l.next=new Uint32Array([l.out]);break}let c=[];if(l.runes.length===1&&l.arg&k.FOLD_CASE){const h=l.runes[0];c.push(h,h);for(let C=K.simpleFold(h);C!==h;C=K.simpleFold(C))c.push(C,C);c.sort((C,p)=>C-p)}else for(let h=0;h<l.runes.length;h++)c.push(l.runes[h]);n[o]=c,l.next=new Uint32Array(Math.floor(c.length/2)+1).fill(l.out),l.op=O.RUNE;break}case O.RUNE1:{if(s[o]=!1,l.next&&l.next.length>0)break;e.insert(l.out);let c=[];if(l.arg&k.FOLD_CASE){const h=l.runes[0];c.push(h,h);for(let C=K.simpleFold(h);C!==h;C=K.simpleFold(C))c.push(C,C);c.sort((C,p)=>C-p)}else c.push(l.runes[0],l.runes[0]);n[o]=c,l.next=new Uint32Array(Math.floor(c.length/2)+1).fill(l.out),l.op=O.RUNE;break}case O.RUNE_ANY:if(s[o]=!1,l.next&&l.next.length>0)break;e.insert(l.out),n[o]=[0,K.MAX_RUNE],l.next=new Uint32Array([l.out]);break;case O.RUNE_ANY_NOT_NL:if(s[o]=!1,l.next&&l.next.length>0)break;e.insert(l.out),n[o]=[0,9,11,K.MAX_RUNE],l.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(l.out);break}return B};for(e.clear(),e.insert(r.start);!e.empty();)if(t.clear(),!i(e.next()))return null;for(let o=0;o<r.inst.length;o++)n[o]&&(r.inst[o].runes=n[o]);return r},mm=(r,e)=>{for(let t=0;t<e.inst.length;t++){const n=e.inst[t];switch(n.op){case O.ALT:case O.ALT_MATCH:case O.RUNE:break;case O.CAPTURE:case O.EMPTY_WIDTH:case O.NOP:case O.MATCH:case O.FAIL:r.inst[t].next=null;break;case O.RUNE1:case O.RUNE_ANY:case O.RUNE_ANY_NOT_NL:r.inst[t].next=null,r.inst[t].op=n.op,r.inst[t].runes=n.runes?n.runes.slice():[];break}}};var Xc=class cd{static compile(e){if(e.start===0||e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==O.EMPTY_WIDTH||!(t.arg&W.EMPTY_BEGIN_TEXT))return null;let n=!1;for(let i=0;i<e.inst.length;i++)if(e.inst[i].op===O.ALT||e.inst[i].op===O.ALT_MATCH){n=!0;break}for(let i=0;i<e.inst.length;i++){const o=e.inst[i],B=e.inst[o.out].op;switch(o.op){case O.ALT:case O.ALT_MATCH:if(B===O.MATCH||e.inst[o.arg].op===O.MATCH)return null;break;case O.EMPTY_WIDTH:if(B===O.MATCH){if((o.arg&W.EMPTY_END_TEXT)===W.EMPTY_END_TEXT)continue;return null}break;default:if(B===O.MATCH&&n)return null;break}}let s=pm(e);return s=gm(s),s!==null&&mm(s,e),s}static next(e,t){const n=e.matchRunePos(t);return n>=0?e.next[n]:e.op===O.ALT_MATCH?e.out:0}static execute(e,t,n,s,i){const o=e.onepass;if(!o)return null;const B=new Int32Array(i).fill(-1);let l=!1,c=t.step(n),h=c>>3,C=c&7,p=tt.EOF(),_=-1,A=0;c!==tt.EOF()&&(p=t.step(n+C),p!==tt.EOF()&&(_=p>>3,A=p&7));let L=n===0?W.emptyOpContext(-1,h):t.context(n),M=o.start,G;for(;;){switch(G=o.inst[M],M=G.out,G.op){case O.MATCH:return s===k.ANCHOR_BOTH&&n!==t.endPos()?null:(l=!0,B.length>0&&(B[0]=0,B[1]=n),i===0?[]:W.toArray(B));case O.RUNE:if(!G.matchRune(h))return null;break;case O.RUNE1:if(h!==G.runes[0])return null;break;case O.RUNE_ANY:break;case O.RUNE_ANY_NOT_NL:if(h===10)return null;break;case O.ALT:case O.ALT_MATCH:M=cd.next(G,h);continue;case O.FAIL:return null;case O.NOP:continue;case O.EMPTY_WIDTH:if(G.arg&~L)return null;continue;case O.CAPTURE:G.arg<B.length&&(B[G.arg]=n);continue;default:throw new Ps("bad inst")}if(C===0)break;L=W.emptyOpContext(h,_),n+=C,h=_,C=A,h!==-1&&(p=t.step(n+C),p!==tt.EOF()?(_=p>>3,A=p&7):(_=-1,A=0))}return l?i===0?[]:W.toArray(B):null}},X,T=(X=class{static isPseudoOp(e){return e>=X.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===N.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new X(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t.lb=e.lb,t}constructor(e){this.op=e,this.flags=0,this.subs=X.emptySubs(),this.runes=[],this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=X.emptySubs(),this.runes=[],this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case X.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case X.Op.EMPTY_MATCH:e+="(?:)";break;case X.Op.STAR:case X.Op.PLUS:case X.Op.QUEST:case X.Op.REPEAT:{const t=this.subs[0];switch(t.op>X.Op.CAPTURE||t.op===X.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case X.Op.STAR:e+="*";break;case X.Op.PLUS:e+="+";break;case X.Op.QUEST:e+="?";break;case X.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}this.flags&k.NON_GREEDY&&(e+="?");break}case X.Op.CONCAT:for(let t of this.subs)t.op===X.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break;case X.Op.ALTERNATE:{let t="";for(let n of this.subs)e+=t,t="|",e+=n.appendTo();break}case X.Op.LITERAL:this.flags&k.FOLD_CASE&&(e+="(?i:");for(let t of this.runes)e+=W.escapeRune(t);this.flags&k.FOLD_CASE&&(e+=")");break;case X.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case X.Op.ANY_CHAR:e+="(?s:.)";break;case X.Op.PLB:e+=`(?<=${this.subs[0].appendTo()})`;break;case X.Op.NLB:e+=`(?<!${this.subs[0].appendTo()})`;break;case X.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==X.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case X.Op.BEGIN_TEXT:e+="\\A";break;case X.Op.END_TEXT:this.flags&k.WAS_DOLLAR?e+="(?-m:$)":e+="\\z";break;case X.Op.BEGIN_LINE:e+="^";break;case X.Op.END_LINE:e+="$";break;case X.Op.WORD_BOUNDARY:e+="\\b";break;case X.Op.NO_WORD_BOUNDARY:e+="\\B";break;case X.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===K.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const n=this.runes[t]+1,s=this.runes[t+1]-1;e+=X.quoteIfHyphen(n),e+=W.escapeRune(n),n!==s&&(e+="-",e+=X.quoteIfHyphen(s),e+=W.escapeRune(s))}}else for(let t=0;t<this.runes.length;t+=2){const n=this.runes[t],s=this.runes[t+1];e+=X.quoteIfHyphen(n),e+=W.escapeRune(n),n!==s&&(e+="-",e+=X.quoteIfHyphen(s),e+=W.escapeRune(s))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===X.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const n=t.maxCap();e<n&&(e=n)}return e}equals(e){if(!(e!==null&&e instanceof X)||this.op!==e.op)return!1;switch(this.op){case X.Op.END_TEXT:if((this.flags&k.WAS_DOLLAR)!==(e.flags&k.WAS_DOLLAR))return!1;break;case X.Op.LITERAL:case X.Op.CHAR_CLASS:if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break;case X.Op.ALTERNATE:case X.Op.CONCAT:if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break;case X.Op.STAR:case X.Op.PLUS:case X.Op.QUEST:if((this.flags&k.NON_GREEDY)!==(e.flags&k.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break;case X.Op.REPEAT:if((this.flags&k.NON_GREEDY)!==(e.flags&k.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break;case X.Op.CAPTURE:if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break;case X.Op.PLB:case X.Op.NLB:if(this.lb!==e.lb||!this.subs[0].equals(e.subs[0]))return!1;break}return!0}},H(X,"Op",Bd(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"])),X),Zc=class{constructor(r){this.next=[Object.create(null)],this.fail=[0],this.match=[!1];for(const t of r){let n=0;for(let s=0;s<t.length;s++){const i=t[s];i in this.next[n]||(this.next.push(Object.create(null)),this.fail.push(0),this.match.push(!1),this.next[n][i]=this.next.length-1),n=this.next[n][i]}this.match[n]=!0}const e=[];for(const t in this.next[0])if(Object.prototype.hasOwnProperty.call(this.next[0],t)){const n=this.next[0][t];this.fail[n]=0,e.push(n)}for(;e.length>0;){const t=e.shift();for(const n in this.next[t])if(Object.prototype.hasOwnProperty.call(this.next[t],n)){const s=this.next[t][n];let i=this.fail[t];for(;i!==0&&!(n in this.next[i]);)i=this.fail[i];n in this.next[i]?this.fail[s]=this.next[i][n]:this.fail[s]=0,this.match[s]=this.match[s]||this.match[this.fail[s]],e.push(s)}}}searchUTF16(r,e,t){let n=0;for(let s=e;s<t;s++){const i=r.charCodeAt(s);for(;n!==0&&!(i in this.next[n]);)n=this.fail[n];if(i in this.next[n]&&(n=this.next[n][i]),this.match[n])return!0}return!1}searchUTF8(r,e,t){let n=0;for(let s=e;s<t;s++){const i=r[s];for(;n!==0&&!(i in this.next[n]);)n=this.fail[n];if(i in this.next[n]&&(n=this.next[n][i]),this.match[n])return!0}return!1}},Ot,de=(Ot=class{constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.ac16=null,this.ac8=null}eval(e,t){switch(this.type){case Ot.Type.NONE:return!0;case Ot.Type.EXACT:return e.hasString(this,t);case Ot.Type.AND:for(let n=0;n<this.subs.length;n++)if(!this.subs[n].eval(e,t))return!1;return!0;case Ot.Type.OR:if(this.ac16&&this.ac8)return e.hasAnyString(this,t);for(let n=0;n<this.subs.length;n++)if(this.subs[n].eval(e,t))return!0;return!1;default:return!0}}},H(Ot,"Type",{NONE:0,EXACT:1,AND:2,OR:3}),Ot),Em=class Jt{static build(e){const t=Jt.fromRegexp(e);return Jt.simplify(t)}static fromRegexp(e){if(!e)return new de(de.Type.NONE);switch(e.op){case T.Op.PLB:case T.Op.NLB:case T.Op.NO_MATCH:case T.Op.EMPTY_MATCH:case T.Op.BEGIN_LINE:case T.Op.END_LINE:case T.Op.BEGIN_TEXT:case T.Op.END_TEXT:case T.Op.WORD_BOUNDARY:case T.Op.NO_WORD_BOUNDARY:case T.Op.CHAR_CLASS:case T.Op.ANY_CHAR_NOT_NL:case T.Op.ANY_CHAR:return new de(de.Type.NONE);case T.Op.LITERAL:{if(e.runes.length===0||e.flags&k.FOLD_CASE)return new de(de.Type.NONE);const t=new de(de.Type.EXACT);let n="";for(let s=0;s<e.runes.length;s++)n+=String.fromCodePoint(e.runes[s]);return t.str=n,t.bytes=W.stringToUtf8ByteArray(t.str),t}case T.Op.CAPTURE:case T.Op.PLUS:return Jt.fromRegexp(e.subs[0]);case T.Op.REPEAT:return e.min>=1?Jt.fromRegexp(e.subs[0]):new de(de.Type.NONE);case T.Op.CONCAT:{const t=new de(de.Type.AND);for(const n of e.subs)t.subs.push(Jt.fromRegexp(n));return t}case T.Op.ALTERNATE:{const t=new de(de.Type.OR);for(const n of e.subs)t.subs.push(Jt.fromRegexp(n));return t}default:return new de(de.Type.NONE)}}static simplify(e){if(e.type===de.Type.EXACT||e.type===de.Type.NONE)return e;if(e.type===de.Type.AND){const t=[];for(const n of e.subs){const s=Jt.simplify(n);if(s.type!==de.Type.NONE)if(s.type===de.Type.AND)for(let i=0;i<s.subs.length;i++)t.push(s.subs[i]);else t.push(s)}return t.length===0?new de(de.Type.NONE):t.length===1?t[0]:(e.subs=t,e)}if(e.type===de.Type.OR){const t=[];for(const o of e.subs){const B=Jt.simplify(o);if(B.type===de.Type.NONE)return new de(de.Type.NONE);if(B.type===de.Type.OR)for(let l=0;l<B.subs.length;l++)t.push(B.subs[l]);else t.push(B)}if(t.length===0)return new de(de.Type.NONE);if(t.length===1)return t[0];const n=new Set,s=[];for(const o of t)o.type===de.Type.EXACT?n.has(o.str)||(n.add(o.str),s.push(o)):s.push(o);e.subs=s;let i=!0;for(const o of s)if(o.type!==de.Type.EXACT){i=!1;break}return i&&s.length>1&&(e.ac16=new Zc(s.map(o=>{const B=[];for(let l=0;l<o.str.length;l++)B.push(o.str.charCodeAt(l));return B})),e.ac8=new Zc(s.map(o=>o.bytes))),e}return e}},wt=class{constructor(r=0,e=0){this.head=r,this.tail=e}},_m=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0}getInst(r){return this.inst[r]}numInst(){return this.inst.length}addInst(r){this.inst.push(new O(r))}skipNop(r){let e=this.inst[r];for(;e.op===O.NOP||e.op===O.CAPTURE;)e=this.inst[r],r=e.out;return e}prefix(){let r="",e=this.skipNop(this.start);if(!O.isRuneOp(e.op)||e.runes.length!==1)return[e.op===O.MATCH,r];for(;O.isRuneOp(e.op)&&e.runes.length===1&&!(e.arg&k.FOLD_CASE);)r+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===O.MATCH,r]}startCond(){let r=0,e=this.start;e:for(;;){const t=this.inst[e];switch(t.op){case O.EMPTY_WIDTH:r|=t.arg;break;case O.FAIL:return-1;case O.CAPTURE:case O.NOP:break;default:break e}e=t.out}return r}patch(r,e){let t=r.head;for(;t!==0;){const n=this.inst[t>>1];t&1?(t=n.arg,n.arg=e):(t=n.out,n.out=e)}}append(r,e){if(r.head===0)return e;if(e.head===0)return r;const t=this.inst[r.tail>>1];return r.tail&1?t.arg=e.head:t.out=e.head,new wt(r.head,e.tail)}toString(){let r="";for(let e=0;e<this.inst.length;e++){const t=r.length;r+=e,e===this.start&&(r+="*"),r+="        ".substring(r.length-t),r+=this.inst[e],r+=`
`}return r}},Ki=class{constructor(r=0,e=new wt,t=!1){this.i=r,this.out=e,this.nullable=t}},Dm=class Dr{static ANY_RUNE_NOT_NL(){return[0,N.CODES.get(`
`)-1,N.CODES.get(`
`)+1,K.MAX_RUNE]}static ANY_RUNE(){return[0,K.MAX_RUNE]}static compileRegexp(e){const t=new Dr,n=t.compile(e);return t.prog.patch(n.out,t.newInst(O.MATCH).i),t.prog.start=n.i,t.prog}static compileSet(e){const t=new Dr;if(e.length===0)return t.prog.start=t.newInst(O.FAIL).i,t.prog;let n=[];for(let i=0;i<e.length;i++){const o=t.compile(e[i]),B=t.newInst(O.MATCH);t.prog.getInst(B.i).arg=i,t.prog.patch(o.out,B.i),n.push(o.i)}let s=n[0];for(let i=1;i<n.length;i++){const o=t.newInst(O.ALT),B=t.prog.getInst(o.i);B.out=s,B.arg=n[i],s=o.i}return t.prog.start=s,t.prog}constructor(){this.prog=new _m,this.newInst(O.FAIL)}newInst(e){return this.prog.addInst(e),new Ki(this.prog.numInst()-1,new wt,!0)}nop(){const e=this.newInst(O.NOP);return e.out=new wt(e.i<<1,e.i<<1),e}fail(){return new Ki}cap(e){const t=this.newInst(O.CAPTURE);return t.out=new wt(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new Ki(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const n=this.newInst(O.ALT),s=this.prog.getInst(n.i);return s.out=e.i,s.arg=t.i,n.out=this.prog.append(e.out,t.out),n.nullable=e.nullable||t.nullable,n}loop(e,t){const n=this.newInst(O.ALT),s=this.prog.getInst(n.i);return t?(s.arg=e.i,n.out=new wt(n.i<<1,n.i<<1)):(s.out=e.i,n.out=new wt(n.i<<1|1,n.i<<1|1)),this.prog.patch(e.out,n.i),n}quest(e,t){const n=this.newInst(O.ALT),s=this.prog.getInst(n.i);return t?(s.arg=e.i,n.out=new wt(n.i<<1,n.i<<1)):(s.out=e.i,n.out=new wt(n.i<<1|1,n.i<<1|1)),n.out=this.prog.append(n.out,e.out),n}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new Ki(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(O.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new wt(t.i<<1,t.i<<1),t}rune(e,t){const n=this.newInst(O.RUNE);n.nullable=!1;const s=this.prog.getInst(n.i);return s.runes=e,t&=k.FOLD_CASE,(e.length!==1||K.simpleFold(e[0])===e[0])&&(t&=-2),s.arg=t,n.out=new wt(n.i<<1,n.i<<1),!(t&k.FOLD_CASE)&&e.length===1||e.length===2&&e[0]===e[1]?s.op=O.RUNE1:e.length===2&&e[0]===0&&e[1]===K.MAX_RUNE?s.op=O.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===N.CODES.get(`
`)-1&&e[2]===N.CODES.get(`
`)+1&&e[3]===K.MAX_RUNE&&(s.op=O.RUNE_ANY_NOT_NL),n}lookBehind(e,t){const n=this.newInst(O.LB_WRITE);this.prog.getInst(n.i).arg=t;const s=this.rune(Dr.ANY_RUNE(),0),i=this.star(s,!0),o=this.cat(i,e);this.prog.patch(o.out,n.i);const B=this.newInst(O.LB_CHECK);return this.prog.getInst(B.i).arg=t,this.prog.lbStarts.push(o.i),Math.abs(t)>this.prog.numLb&&(this.prog.numLb=Math.abs(t)),B.out=new wt(B.i<<1,B.i<<1),B}compile(e){switch(e.op){case T.Op.NO_MATCH:return this.fail();case T.Op.EMPTY_MATCH:return this.nop();case T.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let n of e.runes){const s=this.rune([n],e.flags);t=t===null?s:this.cat(t,s)}return t}case T.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case T.Op.ANY_CHAR_NOT_NL:return this.rune(Dr.ANY_RUNE_NOT_NL(),0);case T.Op.ANY_CHAR:return this.rune(Dr.ANY_RUNE(),0);case T.Op.BEGIN_LINE:return this.empty(W.EMPTY_BEGIN_LINE);case T.Op.END_LINE:return this.empty(W.EMPTY_END_LINE);case T.Op.BEGIN_TEXT:return this.empty(W.EMPTY_BEGIN_TEXT);case T.Op.END_TEXT:return this.empty(W.EMPTY_END_TEXT);case T.Op.WORD_BOUNDARY:return this.empty(W.EMPTY_WORD_BOUNDARY);case T.Op.NO_WORD_BOUNDARY:return this.empty(W.EMPTY_NO_WORD_BOUNDARY);case T.Op.PLB:case T.Op.NLB:return this.lookBehind(this.compile(e.subs[0]),e.lb);case T.Op.CAPTURE:{const t=this.cap(e.cap<<1),n=this.compile(e.subs[0]),s=this.cap(e.cap<<1|1);return this.cat(this.cat(t,n),s)}case T.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&k.NON_GREEDY)!==0);case T.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&k.NON_GREEDY)!==0);case T.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&k.NON_GREEDY)!==0);case T.Op.CONCAT:if(e.subs.length===0)return this.nop();{let t=null;for(let n of e.subs){const s=this.compile(n);t=t===null?s:this.cat(t,s)}return t}case T.Op.ALTERNATE:if(e.subs.length===0)return this.nop();{let t=null;for(let n of e.subs){const s=this.compile(n);t=t===null?s:this.alt(t,s)}return t}default:throw new sm("regexp: unhandled case in compile")}}},ym=class ft{static simplify(e){if(e===null)return null;switch(e.op){case T.Op.PLB:case T.Op.NLB:case T.Op.CAPTURE:{const t=ft.simplify(e.subs[0]);if(t!==e.subs[0]){const n=T.fromRegexp(e);return n.runes=[],n.subs=[t],n}return e}case T.Op.CONCAT:case T.Op.ALTERNATE:{const t=[];let n=!1;for(let s=0;s<e.subs.length;s++){const i=e.subs[s],o=ft.simplify(i);if(o!==i&&(n=!0),e.op===T.Op.CONCAT){if(o.op===T.Op.NO_MATCH)return new T(T.Op.NO_MATCH);if(o.op===T.Op.EMPTY_MATCH){n=!0;continue}if(o.op===T.Op.CONCAT){n=!0;for(let B=0;B<o.subs.length;B++)t.push(o.subs[B]);continue}}else if(e.op===T.Op.ALTERNATE){if(o.op===T.Op.NO_MATCH){n=!0;continue}if(o.op===T.Op.ALTERNATE){n=!0;for(let B=0;B<o.subs.length;B++)t.push(o.subs[B]);continue}}t.push(o)}if(n){if(t.length===0)return new T(e.op===T.Op.CONCAT?T.Op.EMPTY_MATCH:T.Op.NO_MATCH);if(t.length===1)return t[0];const s=T.fromRegexp(e);return s.runes=[],s.subs=t,s}return e}case T.Op.CHAR_CLASS:return e.runes===null?e:e.runes.length===0?new T(T.Op.NO_MATCH):e.runes.length===2&&e.runes[0]===0&&e.runes[1]===K.MAX_RUNE?new T(T.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===N.CODES.get(`
`)-1&&e.runes[2]===N.CODES.get(`
`)+1&&e.runes[3]===K.MAX_RUNE?new T(T.Op.ANY_CHAR_NOT_NL):e;case T.Op.STAR:case T.Op.PLUS:case T.Op.QUEST:{const t=ft.simplify(e.subs[0]);return ft.simplify1(e.op,e.flags,t,e)}case T.Op.REPEAT:{if(e.min===0&&e.max===0)return new T(T.Op.EMPTY_MATCH);const t=ft.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return ft.simplify1(T.Op.STAR,e.flags,t,null);if(e.min===1)return ft.simplify1(T.Op.PLUS,e.flags,t,null);const s=new T(T.Op.CONCAT),i=[];for(let o=0;o<e.min-1;o++)i.push(t);return i.push(ft.simplify1(T.Op.PLUS,e.flags,t,null)),s.subs=i.slice(0),ft.simplify(s)}if(e.min===1&&e.max===1)return t;let n=null;if(e.min>0){n=[];for(let s=0;s<e.min;s++)n.push(t)}if(e.max>e.min){let s=ft.simplify1(T.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++){const o=new T(T.Op.CONCAT);o.subs=[t,s],s=ft.simplify1(T.Op.QUEST,e.flags,o,null)}if(n===null)return s;n.push(s)}if(n!==null){const s=new T(T.Op.CONCAT);return s.subs=n.slice(0),ft.simplify(s)}return new T(T.Op.NO_MATCH)}}return e}static simplify1(e,t,n,s){if(n.op===T.Op.EMPTY_MATCH)return n;if(n.op===T.Op.NO_MATCH)return e===T.Op.PLUS?n:new T(T.Op.EMPTY_MATCH);if(e===n.op&&(t&k.NON_GREEDY)===(n.flags&k.NON_GREEDY))return n;if(s!==null&&s.op===e&&(s.flags&k.NON_GREEDY)===(t&k.NON_GREEDY)&&n===s.subs[0])return s;const i=new T(e);return i.flags=t,i.subs=[n],i}},he=class{constructor(r,e){this.sign=r,this.cls=e}};const eu=[48,57],tu=[9,10,12,13,32,32],nu=[48,57,65,90,95,95,97,122],ru=new Map([["\\d",new he(1,eu)],["\\D",new he(-1,eu)],["\\s",new he(1,tu)],["\\S",new he(-1,tu)],["\\w",new he(1,nu)],["\\W",new he(-1,nu)]]),su=[48,57,65,90,97,122],iu=[65,90,97,122],ou=[0,127],au=[9,9,32,32],Bu=[0,31,127,127],lu=[48,57],cu=[33,126],uu=[97,122],hu=[32,126],du=[33,47,58,64,91,96,123,126],Cu=[9,13,32,32],fu=[65,90],pu=[48,57,65,90,95,95,97,122],gu=[48,57,65,70,97,102],mu=new Map([["[:alnum:]",new he(1,su)],["[:^alnum:]",new he(-1,su)],["[:alpha:]",new he(1,iu)],["[:^alpha:]",new he(-1,iu)],["[:ascii:]",new he(1,ou)],["[:^ascii:]",new he(-1,ou)],["[:blank:]",new he(1,au)],["[:^blank:]",new he(-1,au)],["[:cntrl:]",new he(1,Bu)],["[:^cntrl:]",new he(-1,Bu)],["[:digit:]",new he(1,lu)],["[:^digit:]",new he(-1,lu)],["[:graph:]",new he(1,cu)],["[:^graph:]",new he(-1,cu)],["[:lower:]",new he(1,uu)],["[:^lower:]",new he(-1,uu)],["[:print:]",new he(1,hu)],["[:^print:]",new he(-1,hu)],["[:punct:]",new he(1,du)],["[:^punct:]",new he(-1,du)],["[:space:]",new he(1,Cu)],["[:^space:]",new he(-1,Cu)],["[:upper:]",new he(1,fu)],["[:^upper:]",new he(-1,fu)],["[:word:]",new he(1,pu)],["[:^word:]",new he(-1,pu)],["[:xdigit:]",new he(1,gu)],["[:^xdigit:]",new he(-1,gu)]]);var Bn=class un{static charClassToString(e,t){let n="[";for(let s=0;s<t;s+=2){s>0&&(n+=" ");const i=e[s],o=e[s+1];i===o?n+=`0x${i.toString(16)}`:n+=`0x${i.toString(16)}-0x${o.toString(16)}`}return n+="]",n}static cmp(e,t,n,s){const i=e[t]-n;return i!==0?i:s-e[t+1]}static qsortIntPair(e,t,n){const s=((t+n)/2|0)&-2,i=e[s],o=e[s+1];let B=t,l=n;for(;B<=l;){for(;B<n&&un.cmp(e,B,i,o)<0;)B+=2;for(;l>t&&un.cmp(e,l,i,o)>0;)l-=2;if(B<=l){if(B!==l){let c=e[B];e[B]=e[l],e[l]=c,c=e[B+1],e[B+1]=e[l+1],e[l+1]=c}B+=2,l-=2}}t<l&&un.qsortIntPair(e,t,l),B<n&&un.qsortIntPair(e,B,n)}constructor(e=W.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;un.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const n=this.r[t],s=this.r[t+1];if(n<=this.r[e-1]+1){s>this.r[e-1]&&(this.r[e-1]=s);continue}this.r[e]=n,this.r[e+1]=s,e+=2}return this.len=e,this}appendLiteral(e,t){return t&k.FOLD_CASE?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let n=2;n<=4;n+=2)if(this.len>=n){const s=this.r[this.len-n],i=this.r[this.len-n+1];if(e<=i+1&&s<=t+1)return e<s&&(this.r[this.len-n]=e),t>i&&(this.r[this.len-n+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=K.MIN_FOLD&&t>=K.MAX_FOLD)return this.appendRange(e,t);if(t<K.MIN_FOLD||e>K.MAX_FOLD)return this.appendRange(e,t);e<K.MIN_FOLD&&(this.appendRange(e,K.MIN_FOLD-1),e=K.MIN_FOLD),t>K.MAX_FOLD&&(this.appendRange(K.MAX_FOLD+1,t),t=K.MAX_FOLD);for(let n=e;n<=t;n++){this.appendRange(n,n);for(let s=K.simpleFold(n);s!==n;s=K.simpleFold(s))this.appendRange(s,s)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let n=0;n<e.length;n+=2){const s=e[n],i=e[n+1];t<=s-1&&this.appendRange(t,s-1),t=i+1}return t<=K.MAX_RUNE&&this.appendRange(t,K.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const n=e.getLo(t),s=e.getHi(t),i=e.getStride(t);if(i===1){this.appendRange(n,s);continue}for(let o=n;o<=s;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let n=0;n<e.length;++n){const s=e.getLo(n),i=e.getHi(n),o=e.getStride(n);if(o===1){t<=s-1&&this.appendRange(t,s-1),t=i+1;continue}for(let B=s;B<=i;B+=o)t<=B-1&&this.appendRange(t,B-1),t=B+1}return t<=K.MAX_RUNE&&this.appendRange(t,K.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let n=0;n<this.len;n+=2){const s=this.r[n],i=this.r[n+1];e<=s-1&&(this.r[t]=e,this.r[t+1]=s-1,t+=2),e=i+1}return this.len=t,e<=K.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=K.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let n=e.cls;return t&&(n=new un().appendFoldedClass(n).cleanClass().toArray()),this.appendClassWithSign(n,e.sign)}toString(){return un.charClassToString(this.r,this.len)}},wm=class{constructor(r){this.str=r,this.position=0}pos(){return this.position}rewindTo(r){this.position=r}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(r){this.position+=r}skipString(r){this.position+=r.length}pop(){const r=this.str.codePointAt(this.position);return this.position+=W.charCount(r),r}lookingAt(r){return this.str.startsWith(r,this.position)}rest(){return this.str.substring(this.position)}from(r){return this.str.substring(r,this.position)}toString(){return this.rest()}},U,Im=(U=class{static unicodeTable(e){return e==="Any"?{tab:U.ANY_TABLE,fold:U.ANY_TABLE,sign:1}:e==="Ascii"?{tab:U.ASCII_TABLE,fold:U.ASCII_FOLD_TABLE,sign:1}:e==="Assigned"?{tab:it.CATEGORIES.get("Cn"),fold:it.CATEGORIES.get("Cn"),sign:-1}:e==="Lc"?{tab:it.CATEGORIES.get("LC"),fold:it.FOLD_CATEGORIES.get("LC"),sign:1}:it.CATEGORIES.has(e)?{tab:it.CATEGORIES.get(e),fold:it.FOLD_CATEGORIES.get(e),sign:1}:it.SCRIPTS.has(e)?{tab:it.SCRIPTS.get(e),fold:it.FOLD_SCRIPT.get(e),sign:1}:null}static minFoldRune(e){if(e<K.MIN_FOLD||e>K.MAX_FOLD)return e;let t=e;const n=e;for(e=K.simpleFold(e);e!==n;e=K.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===T.Op.EMPTY_MATCH)return null;if(e.op===T.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===T.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const n=new T(T.Op.LITERAL);return n.flags=t,n.runes=W.stringToRunes(e),n}static parse(e,t){return new U(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const n=U.parseInt(e);if(n===-1||!e.more())return-1;let s;if(!e.lookingAt(","))s=n;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))s=-1;else if((s=U.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),n<0||n>1e3||s===-2||s>1e3||s>=0&&n>s)throw new ye(U.ERR_INVALID_REPEAT_SIZE,e.from(t));return n<<16|s&K.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const n=e.codePointAt(t);if(n!==N.CODES.get("_")&&!W.isalnum(n))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=N.CODES.get("0")&&e.peek()<=N.CODES.get("9");)e.skip(1);const n=e.from(t);return n.length===0||n.length>1&&n.codePointAt(0)===N.CODES.get("0")?-1:n.length>8?-2:parseInt(n,10)}static isCharClass(e){return e.op===T.Op.LITERAL&&e.runes.length===1||e.op===T.Op.CHAR_CLASS||e.op===T.Op.ANY_CHAR_NOT_NL||e.op===T.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case T.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case T.Op.CHAR_CLASS:for(let n=0;n<e.runes.length;n+=2)if(e.runes[n]<=t&&t<=e.runes[n+1])return!0;return!1;case T.Op.ANY_CHAR_NOT_NL:return t!==N.CODES.get(`
`);case T.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case T.Op.ANY_CHAR:break;case T.Op.ANY_CHAR_NOT_NL:U.matchRune(t,N.CODES.get(`
`))&&(e.op=T.Op.ANY_CHAR);break;case T.Op.CHAR_CLASS:t.op===T.Op.LITERAL?e.runes=new Bn(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new Bn(e.runes).appendClass(t.runes).toArray();break;case T.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=T.Op.CHAR_CLASS,e.runes=new Bn().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new ye(U.ERR_TRAILING_BACKSLASH);let n=e.pop();e:switch(n){case N.CODES.get("1"):case N.CODES.get("2"):case N.CODES.get("3"):case N.CODES.get("4"):case N.CODES.get("5"):case N.CODES.get("6"):case N.CODES.get("7"):if(!e.more()||e.peek()<N.CODES.get("0")||e.peek()>N.CODES.get("7"))break;case N.CODES.get("0"):{let s=n-N.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<N.CODES.get("0")||e.peek()>N.CODES.get("7"));i++)s=s*8+e.peek()-N.CODES.get("0"),e.skip(1);return s}case N.CODES.get("x"):{if(!e.more())break;if(n=e.pop(),n===N.CODES.get("{")){let o=0,B=0;for(;;){if(!e.more())break e;if(n=e.pop(),n===N.CODES.get("}"))break;const l=W.unhex(n);if(l<0||(B=B*16+l,B>K.MAX_RUNE))break e;o++}if(o===0)break e;return B}const s=W.unhex(n);if(!e.more())break;n=e.pop();const i=W.unhex(n);if(s<0||i<0)break;return s*16+i}case N.CODES.get("a"):return N.CODES.get("\x07");case N.CODES.get("f"):return N.CODES.get("\f");case N.CODES.get("n"):return N.CODES.get(`
`);case N.CODES.get("r"):return N.CODES.get("\r");case N.CODES.get("t"):return N.CODES.get("	");case N.CODES.get("v"):return N.CODES.get("\v");default:if(n<=K.MAX_ASCII&&!W.isalnum(n))return n;break}throw new ye(U.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new ye(U.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?U.parseEscape(e):e.pop()}static concatRunes(e,t){for(let n=0;n<t.length;n++)e.push(t[n]);return e}static hasCapture(e){if(e===null)return!1;if(e.op===T.Op.CAPTURE)return!0;if(e.subs){for(let t of e.subs)if(U.hasCapture(t))return!0}return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new T(e),this.numRegexp+=1),t}reuse(e){this.height!==null&&this.height.has(e)&&this.height.delete(e),e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(e){if(this.numRunes>U.MAX_RUNES)throw new ye(U.ERR_LARGE);this.checkSize(e),this.checkHeight(e)}checkSize(e){if(this.size===null){if(this.repeats===0&&(this.repeats=1),e.op===T.Op.REPEAT){let t=e.max;t===-1&&(t=e.min),t<=0&&(t=1),t>Math.floor(U.MAX_SIZE/this.repeats)?this.repeats=U.MAX_SIZE:this.repeats*=t}if(this.numRegexp<Math.floor(U.MAX_SIZE/this.repeats))return;this.size=new Map;for(let t of this.stack)this.checkSize(t)}if(this.calcSize(e,!0)>U.MAX_SIZE)throw new ye(U.ERR_LARGE)}calcSize(e,t=!1){if(!t&&this.size!==null&&this.size.has(e))return this.size.get(e);let n=0;switch(e.op){case T.Op.LITERAL:n=e.runes.length;break;case T.Op.PLB:case T.Op.NLB:case T.Op.CAPTURE:case T.Op.STAR:n=2+this.calcSize(e.subs[0]);break;case T.Op.PLUS:case T.Op.QUEST:n=1+this.calcSize(e.subs[0]);break;case T.Op.CONCAT:for(let s of e.subs)n=n+this.calcSize(s);break;case T.Op.ALTERNATE:for(let s of e.subs)n=n+this.calcSize(s);e.subs.length>1&&(n=n+e.subs.length-1);break;case T.Op.REPEAT:{let s=this.calcSize(e.subs[0]);if(e.max===-1){e.min===0?n=2+s:n=1+e.min*s;break}n=e.max*s+(e.max-e.min);break}}return n=Math.max(1,n),this.size===null&&(this.size=new Map),this.size.set(e,n),n}checkHeight(e){if(!(this.numRegexp<U.MAX_HEIGHT)){if(this.height===null){this.height=new Map;for(let t of this.stack)this.checkHeight(t)}if(this.calcHeight(e,!0)>U.MAX_HEIGHT)throw new ye(U.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&this.height!==null&&this.height.has(e))return this.height.get(e);let n=1;for(let s of e.subs){const i=this.calcHeight(s);n<1+i&&(n=1+i)}return this.height===null&&(this.height=new Map),this.height.set(e,n),n}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!T.isPseudoOp(this.stack[t-1].op);)t--;const n=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),n}push(e){if(this.numRunes+=e.runes.length,e.op===T.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=T.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===T.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&K.simpleFold(e.runes[0])===e.runes[2]&&K.simpleFold(e.runes[2])===e.runes[0]||e.op===T.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&K.simpleFold(e.runes[0])===e.runes[1]&&K.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|k.FOLD_CASE))return null;e.op=T.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|k.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){const n=this.stack.length;if(n<2)return!1;const s=this.stack[n-1],i=this.stack[n-2];return s.op!==T.Op.LITERAL||i.op!==T.Op.LITERAL||(s.flags&k.FOLD_CASE)!==(i.flags&k.FOLD_CASE)?!1:(i.runes=U.concatRunes(i.runes,s.runes),e>=0?(s.runes=[e],s.flags=t,!0):(this.pop(),this.reuse(s),!1))}newLiteral(e,t){const n=this.newRegexp(T.Op.LITERAL);return n.flags=t,t&k.FOLD_CASE&&(e=U.minFoldRune(e)),n.runes=[e],n}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,n,s,i,o){let B=this.flags;if(B&k.PERL_X&&(i.more()&&i.lookingAt("?")&&(i.skip(1),B^=k.NON_GREEDY),o!==-1))throw new ye(U.ERR_INVALID_REPEAT_OP,i.from(o));const l=this.stack.length;if(l===0)throw new ye(U.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const c=this.stack[l-1];if(T.isPseudoOp(c.op))throw new ye(U.ERR_MISSING_REPEAT_ARGUMENT,i.from(s));const h=this.newRegexp(e);if(h.min=t,h.max=n,h.flags=B,h.subs=[c],this.stack[l-1]=h,this.checkLimits(h),e===T.Op.REPEAT&&(t>=2||n>=2)&&!this.repeatIsValid(h,1e3))throw new ye(U.ERR_INVALID_REPEAT_SIZE,i.from(s))}repeatIsValid(e,t){if(e.op===T.Op.REPEAT){let n=e.max;if(n===0)return!0;if(n<0&&(n=e.min),n>t)return!1;n>0&&(t=Math.trunc(t/n))}for(let n of e.subs)if(!this.repeatIsValid(n,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(T.Op.EMPTY_MATCH)):this.push(this.collapse(e,T.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(T.Op.NO_MATCH)):this.push(this.collapse(e,T.Op.ALTERNATE))}cleanAlt(e){e.op===T.Op.CHAR_CLASS&&(e.runes=new Bn(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===K.MAX_RUNE?(e.runes=[],e.op=T.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===N.CODES.get(`
`)-1&&e.runes[2]===N.CODES.get(`
`)+1&&e.runes[3]===K.MAX_RUNE&&(e.runes=[],e.op=T.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let n=0;for(let B of e)n+=B.op===t?B.subs.length:1;let s=new Array(n).fill(null),i=0;for(let B of e)if(B.op===t){for(let l=0;l<B.subs.length;l++)s[i++]=B.subs[l];this.reuse(B)}else s[i++]=B;let o=this.newRegexp(t);if(o.subs=s,t===T.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const B=o;o=o.subs[0],this.reuse(B)}return o}factor(e){if(e.length<2)return e;let t=0,n=e.length,s=0,i=null,o=0,B=0,l=0;for(let h=0;h<=n;h++){let C=null,p=0,_=0;if(h<n){let A=e[t+h];if(A.op===T.Op.CONCAT&&A.subs.length>0&&(A=A.subs[0]),A.op===T.Op.LITERAL&&(C=A.runes,p=A.runes.length,_=A.flags&k.FOLD_CASE),_===B){let L=0;for(;L<o&&L<p&&i[L]===C[L];)L++;if(L>0){o=L;continue}}}if(h!==l)if(h===l+1)e[s++]=e[t+l];else{const A=this.newRegexp(T.Op.LITERAL);A.flags=B,A.runes=i.slice(0,o);for(let G=l;G<h;G++)e[t+G]=this.removeLeadingString(e[t+G],o),this.checkLimits(e[t+G]);const L=this.collapse(e.slice(t+l,t+h),T.Op.ALTERNATE),M=this.newRegexp(T.Op.CONCAT);M.subs=[A,L],e[s++]=M}l=h,i=C,o=p,B=_}n=s,t=0,l=0,s=0;let c=null;for(let h=0;h<=n;h++){let C=null;if(!(h<n&&(C=U.leadingRegexp(e[t+h]),c!==null&&c.equals(C)&&(U.isCharClass(c)||c.op===T.Op.REPEAT&&c.min===c.max&&U.isCharClass(c.subs[0]))))){if(h!==l)if(h===l+1)e[s++]=e[t+l];else{const p=c;for(let L=l;L<h;L++){const M=L!==l;e[t+L]=this.removeLeadingRegexp(e[t+L],M),this.checkLimits(e[t+L])}const _=this.collapse(e.slice(t+l,t+h),T.Op.ALTERNATE),A=this.newRegexp(T.Op.CONCAT);A.subs=[p,_],e[s++]=A}l=h,c=C}}n=s,t=0,l=0,s=0;for(let h=0;h<=n;h++)if(!(h<n&&U.isCharClass(e[t+h]))){if(h!==l)if(h===l+1)e[s++]=e[t+l];else{let C=l;for(let _=l+1;_<h;_++){const A=e[t+C],L=e[t+_];(A.op<L.op||A.op===L.op&&(A.runes!==null?A.runes.length:0)<(L.runes!==null?L.runes.length:0))&&(C=_)}const p=e[t+l];e[t+l]=e[t+C],e[t+C]=p;for(let _=l+1;_<h;_++)U.mergeCharClass(e[t+l],e[t+_]),this.reuse(e[t+_]);this.cleanAlt(e[t+l]),e[s++]=e[t+l]}h<n&&(e[s++]=e[t+h]),l=h+1}n=s,t=0,l=0,s=0;for(let h=0;h<n;++h)h+1<n&&e[t+h].op===T.Op.EMPTY_MATCH&&e[t+h+1].op===T.Op.EMPTY_MATCH||(e[s++]=e[t+h]);return n=s,t=0,e.slice(t,n)}removeLeadingString(e,t){if(e.op===T.Op.CONCAT&&e.subs.length>0){const n=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=n,n.op===T.Op.EMPTY_MATCH)switch(this.reuse(n),e.subs.length){case 0:case 1:e.op=T.Op.EMPTY_MATCH,e.subs=T.emptySubs();break;case 2:{const s=e;e=e.subs[1],this.reuse(s);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===T.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=T.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===T.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=T.Op.EMPTY_MATCH,e.subs=T.emptySubs();break;case 1:{const n=e;e=e.subs[0],this.reuse(n);break}}return e}return t&&this.reuse(e),this.newRegexp(T.Op.EMPTY_MATCH)}parseInternal(){if(this.flags&k.LITERAL)return U.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,n=-1;const s=new wm(this.wholeRegexp);for(;s.more();){let i=-1;e:switch(s.peek()){case N.CODES.get("("):if(this.flags&k.LOOKBEHIND){if(s.lookingAt("(?<=")){this.parsePosLookBehind(),s.skip(4);break}if(s.lookingAt("(?<!")){this.parseNegLookBehind(),s.skip(4);break}}if(this.flags&k.PERL_X&&s.lookingAt("(?")){this.parsePerlFlags(s);break}this.op(T.Op.LEFT_PAREN).cap=++this.numCap,s.skip(1);break;case N.CODES.get("|"):this.parseVerticalBar(),s.skip(1);break;case N.CODES.get(")"):this.parseRightParen(),s.skip(1);break;case N.CODES.get("^"):this.flags&k.ONE_LINE?this.op(T.Op.BEGIN_TEXT):this.op(T.Op.BEGIN_LINE),s.skip(1);break;case N.CODES.get("$"):this.flags&k.ONE_LINE?this.op(T.Op.END_TEXT).flags|=k.WAS_DOLLAR:this.op(T.Op.END_LINE),s.skip(1);break;case N.CODES.get("."):this.flags&k.DOT_NL?this.op(T.Op.ANY_CHAR):this.op(T.Op.ANY_CHAR_NOT_NL),s.skip(1);break;case N.CODES.get("["):this.parseClass(s);break;case N.CODES.get("*"):case N.CODES.get("+"):case N.CODES.get("?"):{i=s.pos();let o=null;switch(s.pop()){case N.CODES.get("*"):o=T.Op.STAR;break;case N.CODES.get("+"):o=T.Op.PLUS;break;case N.CODES.get("?"):o=T.Op.QUEST;break}this.repeat(o,t,n,i,s,e);break}case N.CODES.get("{"):{i=s.pos();const o=U.parseRepeat(s);if(o<0){s.rewindTo(i),this.literal(s.pop());break}t=o>>16,n=(o&K.MAX_BMP)<<16>>16,this.repeat(T.Op.REPEAT,t,n,i,s,e);break}case N.CODES.get("\\"):{const o=s.pos();if(s.skip(1),this.flags&k.PERL_X&&s.more())switch(s.pop()){case N.CODES.get("A"):this.op(T.Op.BEGIN_TEXT);break e;case N.CODES.get("b"):this.op(T.Op.WORD_BOUNDARY);break e;case N.CODES.get("B"):this.op(T.Op.NO_WORD_BOUNDARY);break e;case N.CODES.get("C"):throw new ye(U.ERR_INVALID_ESCAPE,"\\C");case N.CODES.get("Q"):{let c=s.rest();const h=c.indexOf("\\E");h>=0?(c=c.substring(0,h),s.skipString(c),s.skipString("\\E")):s.skipString(c);let C=0;for(;C<c.length;){const p=c.codePointAt(C);this.literal(p),C+=W.charCount(p)}break e}case N.CODES.get("z"):this.op(T.Op.END_TEXT);break e;default:s.rewindTo(o);break}else s.rewindTo(o);const B=this.newRegexp(T.Op.CHAR_CLASS);if(B.flags=this.flags,s.lookingAt("\\p")||s.lookingAt("\\P")){const c=new Bn;if(this.parseUnicodeClass(s,c)){B.runes=c.toArray(),this.push(B);break e}}const l=new Bn;if(this.parsePerlClassEscape(s,l)){B.runes=l.toArray(),this.push(B);break e}s.rewindTo(o),this.reuse(B),this.literal(U.parseEscape(s));break}default:this.literal(s.pop());break}e=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new ye(U.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),n=e.rest();if(n.startsWith("(?P<")||n.startsWith("(?<")){const B=n.charAt(2)==="P"?4:3,l=n.indexOf(">");if(l<0)throw new ye(U.ERR_INVALID_NAMED_CAPTURE,n);const c=n.substring(B,l);if(e.skipString(c),e.skip(B+1),!U.isValidCaptureName(c))throw new ye(U.ERR_INVALID_NAMED_CAPTURE,n.substring(0,l+1));const h=this.op(T.Op.LEFT_PAREN);if(h.cap=++this.numCap,this.namedGroups[c])throw new ye(U.ERR_DUPLICATE_NAMED_CAPTURE,c);this.namedGroups[c]=this.numCap,h.name=c;return}e.skip(2);let s=this.flags,i=1,o=!1;e:for(;e.more();){const B=e.pop();switch(B){case N.CODES.get("i"):s|=k.FOLD_CASE,o=!0;break;case N.CODES.get("m"):s&=-17,o=!0;break;case N.CODES.get("s"):s|=k.DOT_NL,o=!0;break;case N.CODES.get("U"):s|=k.NON_GREEDY,o=!0;break;case N.CODES.get("-"):if(i<0)break e;i=-1,s=~s,o=!1;break;case N.CODES.get(":"):case N.CODES.get(")"):if(i<0){if(!o)break e;s=~s}B===N.CODES.get(":")&&this.op(T.Op.LEFT_PAREN),this.flags=s;return;default:break e}}throw new ye(U.ERR_INVALID_PERL_OP,e.from(t))}parsePosLookBehind(){const e=this.newRegexp(T.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(T.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(T.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===T.Op.VERTICAL_BAR&&U.isCharClass(this.stack[e-1])&&U.isCharClass(this.stack[e-3])){let t=this.stack[e-1],n=this.stack[e-3];if(t.op>n.op){const s=n;n=t,t=s,this.stack[e-3]=n}return U.mergeCharClass(n,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],n=this.stack[e-2];if(n.op===T.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=n,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new ye(U.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const e=this.pop(),t=this.pop();if(t.op!==T.Op.LEFT_PAREN)throw new ye(U.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=t.flags,t.lb!==0){if(U.hasCapture(e))throw new ye(U.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);t.lb>0?t.op=T.Op.PLB:t.op=T.Op.NLB,t.subs=[e],this.push(t);return}t.cap===0?this.push(e):(t.op=T.Op.CAPTURE,t.subs=[e],this.push(t))}parsePerlClassEscape(e,t){const n=e.pos();if(!(this.flags&k.PERL_X)||!e.more()||e.pop()!==N.CODES.get("\\")||!e.more())return!1;e.pop();const s=e.from(n),i=ru.has(s)?ru.get(s):null;return i===null?!1:(t.appendGroup(i,(this.flags&k.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const n=e.rest(),s=n.indexOf(":]");if(s<0)return!1;const i=n.substring(0,s+2);e.skipString(i);const o=mu.has(i)?mu.get(i):null;if(o===null)throw new ye(U.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&k.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const n=e.pos();if(!(this.flags&k.UNICODE_GROUPS)||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let s=1,i=e.pop();if(i===N.CODES.get("P")&&(s=-1),!e.more())throw e.rewindTo(n),new ye(U.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==N.CODES.get("{"))o=W.runeToString(i);else{const h=e.rest(),C=h.indexOf("}");if(C<0)throw e.rewindTo(n),new ye(U.ERR_INVALID_CHAR_RANGE,e.rest());o=h.substring(0,C),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===N.CODES.get("^")&&(s=0-s,o=o.substring(1));const B=U.unicodeTable(o);if(B===null)throw new ye(U.ERR_INVALID_CHAR_RANGE,e.from(n));B.sign<0&&(s=0-s);const l=B.tab,c=B.fold;if(!(this.flags&k.FOLD_CASE)||c===null)t.appendTableWithSign(l,s);else{const h=new Bn().appendTable(l).appendTable(c).cleanClass().toArray();t.appendClassWithSign(h,s)}return!0}parseClass(e){const t=e.pos();e.skip(1);const n=this.newRegexp(T.Op.CHAR_CLASS);n.flags=this.flags;const s=new Bn;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),this.flags&k.CLASS_NL||s.appendRange(N.CODES.get(`
`),N.CODES.get(`
`)));let o=!0;for(;!e.more()||e.peek()!==N.CODES.get("]")||o;){if(e.more()&&e.lookingAt("-")&&!(this.flags&k.PERL_X)&&!o){const h=e.rest();if(h==="-"||!h.startsWith("-]"))throw e.rewindTo(t),new ye(U.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const B=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,s))continue;e.rewindTo(B)}if(this.parseUnicodeClass(e,s)||this.parsePerlClassEscape(e,s))continue;e.rewindTo(B);const l=U.parseClassChar(e,t);let c=l;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(c=U.parseClassChar(e,t),c<l)throw new ye(U.ERR_INVALID_CHAR_RANGE,e.from(B))}this.flags&k.FOLD_CASE?s.appendFoldedRange(l,c):s.appendRange(l,c)}e.skip(1),s.cleanClass(),i<0&&s.negateClass(),n.runes=s.toArray(),this.push(n)}},H(U,"ERR_INTERNAL_ERROR","regexp/syntax: internal error"),H(U,"ERR_INVALID_CHAR_RANGE","invalid character class range"),H(U,"ERR_INVALID_ESCAPE","invalid escape sequence"),H(U,"ERR_INVALID_NAMED_CAPTURE","invalid named capture"),H(U,"ERR_INVALID_PERL_OP","invalid or unsupported Perl syntax"),H(U,"ERR_INVALID_REPEAT_OP","invalid nested repetition operator"),H(U,"ERR_INVALID_REPEAT_SIZE","invalid repeat count"),H(U,"ERR_MISSING_BRACKET","missing closing ]"),H(U,"ERR_MISSING_PAREN","missing closing )"),H(U,"ERR_MISSING_REPEAT_ARGUMENT","missing argument to repetition operator"),H(U,"ERR_TRAILING_BACKSLASH","trailing backslash at end of expression"),H(U,"ERR_DUPLICATE_NAMED_CAPTURE","duplicate capture group name"),H(U,"ERR_UNEXPECTED_PAREN","unexpected )"),H(U,"ERR_NESTING_DEPTH","expression nests too deeply"),H(U,"ERR_LARGE","expression too large"),H(U,"ERR_INVALID_CAPTURE_IN_LOOKBEHIND","invalid capture in lookbehind"),H(U,"MAX_HEIGHT",1e3),H(U,"MAX_SIZE",3355443),H(U,"MAX_RUNES",33554432),H(U,"ANY_TABLE",new g(new Uint32Array([0,K.MAX_RUNE,1]))),H(U,"ASCII_TABLE",new g(new Uint32Array([0,127,1]))),H(U,"ASCII_FOLD_TABLE",new g(new Uint32Array([0,127,1,383,383,1,8490,8490,1]))),U),Tm=class Qn{static initTest(e){const t=Qn.compile(e),n=new Qn(t.expr,t.prog,t.numSubexp,t.longest);return n.cond=t.cond,n.prefix=t.prefix,n.prefixUTF8=t.prefixUTF8,n.prefixComplete=t.prefixComplete,n.prefixRune=t.prefixRune,n.prefilter=t.prefilter,n}static compile(e){return Qn.compileImpl(e,k.PERL,!1)}static compilePOSIX(e){return Qn.compileImpl(e,k.POSIX,!0)}static compileImpl(e,t,n){let s=Im.parse(e,t);const i=s.maxCap();s=ym.simplify(s);const o=Em.build(s),B=Dm.compileRegexp(s),l=new Qn(e,B,i,n);l.prefilter=o.type===de.Type.NONE?null:o;const[c,h]=B.prefix();return l.prefixComplete=c,l.prefix=h,l.prefixUTF8=W.stringToUtf8ByteArray(l.prefix),l.prefix.length>0&&(l.prefixRune=l.prefix.codePointAt(0)),l.namedGroups=s.namedGroups,l}static match(e,t){return Qn.compile(e).match(t)}constructor(e,t,n=0,s=0){this.expr=e,this.prog=t,this.numSubexp=n,this.longest=s,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.machinePool=[],this.dfa=new lm(this.prog),this.onepass=Xc.compile(this.prog),this.prefilter=null}matchPrefixComplete(e,t,n,s){if((n===k.ANCHOR_START||n===k.ANCHOR_BOTH)&&t!==0)return null;let i=-1,o=-1;const B=e.prefixLength(this);if(n===k.UNANCHORED){const l=e.index(this,t);if(l<0)return null;i=t+l,o=i+B}else if(n===k.ANCHOR_BOTH){if(e.endPos()!==B||e.index(this,0)!==0)return null;i=0,o=B}else if(n===k.ANCHOR_START){if(e.index(this,0)!==0)return null;i=0,o=B}if(i<0)return null;if(s>0){const l=new Int32Array(s).fill(-1);return l[0]=i,l[1]=o,Array.from(l)}return[]}executeEngine(e,t,n,s){if(this.prefixComplete&&(s===0||this.numSubexp===0))return this.matchPrefixComplete(e,t,n,s);if(this.prefilter!==null&&n===k.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(this.onepass!==null)return Xc.execute(this,e,t,n,s);if(s>0)return this.prog.numLb===0&&e.endPos()<=qi.maxBitStateLen(this.prog)?qi.execute(this,e,t,n,s):this.doExecuteNFA(e,t,n,s);if(this.prog.numLb===0){const i=this.dfa.match(e,t,n);if(i!==null)return i?[]:null;if(e.endPos()<=qi.maxBitStateLen(this.prog))return qi.execute(this,e,t,n,s)}return this.doExecuteNFA(e,t,n,s)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,n,s){let i=this.get();i||(i=om.fromRE2(this)),i.init(s);const o=i.match(e,t,n)?i.submatches():null;return this.put(i),o}match(e){return this.executeEngine(Ie.fromUTF16(e),0,k.UNANCHORED,0)!==null}matchWithGroup(e,t,n,s,i){return e instanceof ar||(W.isByteArray(e)?e=Yn.utf8(e):e=Yn.utf16(e)),this.matchMachineInput(e,t,n,s,i)}matchMachineInput(e,t,n,s,i){if(t>n)return[!1,null];const o=e.isUTF16Encoding()?Ie.fromUTF16(e.asCharSequence(),0,n):Ie.fromUTF8(e.asBytes(),0,n),B=this.executeEngine(o,t,s,2*i);return B===null?[!1,null]:[!0,B]}matchUTF8(e){return this.executeEngine(Ie.fromUTF8(e),0,k.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,n){let s=0,i=0,o="";const B=Ie.fromUTF16(e);let l=0;for(;i<=e.length;){const c=this.executeEngine(B,i,k.UNANCHORED,2);if(c===null||c.length===0)break;o+=e.substring(s,c[0]),(c[1]>s||c[0]===0)&&(o+=t(e.substring(c[0],c[1])),l++),s=c[1];const h=B.step(i)&7;if(i+h>c[1]?i+=h:i+1>c[1]?i++:i=c[1],l>=n)break}return o+=e.substring(s),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let n=new Array(t).fill(-1);for(let s=0;s<e.length;s++)n[s]=e[s];e=n}return e}allMatches(e,t,n=s=>s){let s=[];const i=e.endPos();t<0&&(t=i+1);let o=0,B=0,l=-1;for(;B<t&&o<=i;){const c=this.executeEngine(e,o,k.UNANCHORED,this.prog.numCap);if(c===null||c.length===0)break;let h=!0;if(c[1]===o){c[0]===l&&(h=!1);const C=e.step(o);C<0?o=i+1:o+=C&7}else o=c[1];l=c[1],h&&(s.push(n(this.pad(c))),B++)}return s}findUTF8(e){const t=this.executeEngine(Ie.fromUTF8(e),0,k.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine(Ie.fromUTF8(e),0,k.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.executeEngine(Ie.fromUTF16(e),0,k.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(Ie.fromUTF16(e),0,k.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine(Ie.fromUTF8(e),0,k.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let s=0;s<n.length;s++)2*s<t.length&&t[2*s]>=0&&(n[s]=e.slice(t[2*s],t[2*s+1]));return n}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(Ie.fromUTF8(e),0,k.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine(Ie.fromUTF16(e),0,k.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let s=0;s<n.length;s++)2*s<t.length&&t[2*s]>=0&&(n[s]=e.substring(t[2*s],t[2*s+1]));return n}findSubmatchIndex(e){return this.pad(this.executeEngine(Ie.fromUTF16(e),0,k.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const n=this.allMatches(Ie.fromUTF8(e),t,s=>e.slice(s[0],s[1]));return n.length===0?null:n}findAllUTF8Index(e,t){const n=this.allMatches(Ie.fromUTF8(e),t,s=>s.slice(0,2));return n.length===0?null:n}findAll(e,t){const n=this.allMatches(Ie.fromUTF16(e),t,s=>e.substring(s[0],s[1]));return n.length===0?null:n}findAllIndex(e,t){const n=this.allMatches(Ie.fromUTF16(e),t,s=>s.slice(0,2));return n.length===0?null:n}findAllUTF8Submatch(e,t){const n=this.allMatches(Ie.fromUTF8(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.slice(s[2*o],s[2*o+1]));return i});return n.length===0?null:n}findAllUTF8SubmatchIndex(e,t){const n=this.allMatches(Ie.fromUTF8(e),t);return n.length===0?null:n}findAllSubmatch(e,t){const n=this.allMatches(Ie.fromUTF16(e),t,s=>{let i=new Array(s.length/2|0).fill(null);for(let o=0;o<i.length;o++)s[2*o]>=0&&(i[o]=e.substring(s[2*o],s[2*o+1]));return i});return n.length===0?null:n}findAllSubmatchIndex(e,t){const n=this.allMatches(Ie.fromUTF16(e),t);return n.length===0?null:n}},Am=class yr{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(e){let t="";if(e instanceof RegExp&&(e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e=e.source),typeof e!="string")return e;let n="",s=!1,i=e.length;i===0&&(n="(?:)",s=!0);let o=!1,B=0;for(;B<i;){let c=e[B];if(c==="\\"){if(B+1<i)switch(c=e[B+1],c){case"\\":n+="\\\\",B+=2;continue;case"c":if(B+2<i){let p=e[B+2].charCodeAt(0);if(p>=65&&p<=90||p>=97&&p<=122){let _=p%32;n+="\\x",n+=(_>>4).toString(16).toUpperCase(),n+=(_&15).toString(16).toUpperCase(),B+=3,s=!0;continue}}n+="c",B+=2,s=!0;continue;case"u":if(B+2<i){if(e[B+2]==="{"){let p=B+3,_=!1,A=!1;for(;p<i;){const L=e[p];if(L==="}"){A=!0;break}if(!yr.isHexadecimal(L))break;_=!0,p++}if(A&&_){n+="\\x",B+=2,s=!0;continue}}else if(B+5<i){let p=!0;for(let _=0;_<4;_++)if(!yr.isHexadecimal(e[B+2+_])){p=!1;break}if(p){n+="\\x{"+e.substring(B+2,B+6)+"}",B+=6,s=!0;continue}}}n+="u",B+=2,s=!0;continue;case"x":{let p=!1;if(B+2<i&&e[B+2]==="{"){let _=B+3,A=!1,L=!1;for(;_<i;){const M=e[_];if(M==="}"){L=!0;break}if(!yr.isHexadecimal(M))break;A=!0,_++}L&&A&&(p=!0)}else B+3<i&&yr.isHexadecimal(e[B+2])&&yr.isHexadecimal(e[B+3])&&(p=!0);p?(n+="\\x",B+=2):(n+="x",B+=2,s=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":n+="\\"+c,B+=2;continue;default:{let p=e.codePointAt(B+1);if(p>=48&&p<=57||p>=65&&p<=90||p>=97&&p<=122){let _=W.charCount(p);n+=e.substring(B+1,B+1+_),B+=_+1,s=!0}else{n+="\\";let _=W.charCount(p);n+=e.substring(B+1,B+1+_),B+=_+1}continue}}}else if(c==="/"){n+="\\/",B+=1,s=!0;continue}else if(c==="[")o=!0;else if(c==="]")o=!1;else if(!o&&c==="("&&B+2<i&&e[B+1]==="?"&&e[B+2]==="<"&&B+3<i&&!"=!>)".includes(e[B+3])){n+="(?P<",B+=3,s=!0;continue}let h=e.codePointAt(B),C=W.charCount(h);n+=e.substring(B,B+C),B+=C}const l=s?n:e;return t.length>0?`(?${t})${l}`:l}},Ne,PB=(Ne=class{static quote(e){return W.quoteMeta(e)}static quoteReplacement(e,t=!1){return zc.quoteReplacement(e,t)}static translateRegExp(e){return Am.translate(e)}static compile(e,t=0){let n=e;if(t&Ne.CASE_INSENSITIVE&&(n=`(?i)${n}`),t&Ne.DOTALL&&(n=`(?s)${n}`),t&Ne.MULTILINE&&(n=`(?m)${n}`),t&-544)throw new im("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS");let s=k.PERL;t&Ne.DISABLE_UNICODE_GROUPS&&(s&=-129),t&Ne.LOOKBEHINDS&&(s|=k.LOOKBEHIND);const i=new Ne(e,t);return i.re2Input=Tm.compileImpl(n,s,(t&Ne.LONGEST_MATCH)!==0),i}static matches(e,t){return Ne.compile(e).testExact(t)}static initTest(e,t,n){if(e==null)throw new Error("pattern is null");if(n==null)throw new Error("re2 is null");const s=new Ne(e,t);return s.re2Input=n,s}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return W.isByteArray(e)&&(e=Yn.utf8(e)),new zc(this,e)}test(e){return W.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=W.isByteArray(e)?Ie.fromUTF8(e):Ie.fromUTF16(e);return this.re2Input.executeEngine(t,0,k.ANCHOR_BOTH,0)!==null}exec(e){const t=this.matcher(e);if(!t.find())return null;const n=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);n.push(o===null?void 0:o)}n.index=t.start(0),n.input=e;const s=this.namedGroups();if(Object.keys(s).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);n.groups=i}else n.groups=void 0;return n}split(e,t=0){const n=this.matcher(e),s=[];let i=0,o=0;for(;n.find();){if(o===0&&n.end()===0){o=n.end();continue}if(t>0&&s.length===t-1)break;if(o===n.start()){if(t===0){i+=1,o=n.end();continue}}else for(;i>0;)s.push(""),i-=1;s.push(n.substring(o,n.start())),o=n.end()}if(t===0&&o!==n.inputLength()){for(;i>0;)s.push(""),i-=1;s.push(n.substring(o,n.inputLength()))}return(t!==0||s.length===0&&!(o===n.inputLength()&&o>0))&&s.push(n.substring(o,n.inputLength())),s}*matchAll(e){const t=this.matcher(e);for(;t.find();){const n=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);n.push(o===null?void 0:o)}n.index=t.start(0),n.input=e;const s=this.namedGroups();if(Object.keys(s).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);n.groups=i}else n.groups=void 0;yield n}}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}},H(Ne,"CASE_INSENSITIVE",mr.CASE_INSENSITIVE),H(Ne,"DOTALL",mr.DOTALL),H(Ne,"MULTILINE",mr.MULTILINE),H(Ne,"DISABLE_UNICODE_GROUPS",mr.DISABLE_UNICODE_GROUPS),H(Ne,"LONGEST_MATCH",mr.LONGEST_MATCH),H(Ne,"LOOKBEHINDS",mr.LOOKBEHINDS),Ne);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zr="12.18.0";function vm(r){zr=r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new AB("@firebase/firestore");function wr(){return Br.logLevel}function q(r,...e){if(Br.logLevel<=le.DEBUG){const t=e.map(SB);Br.debug(`Firestore (${zr}): ${r}`,...t)}}function Yt(r,...e){if(Br.logLevel<=le.ERROR){const t=e.map(SB);Br.error(`Firestore (${zr}): ${r}`,...t)}}function Vt(r,...e){if(Br.logLevel<=le.WARN){const t=e.map(SB);Br.warn(`Firestore (${zr}): ${r}`,...t)}}function SB(r){if(typeof r=="string")return r;try{return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,ud(r,n,t)}function ud(r,e,t){let n=`FIRESTORE (${zr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Yt(n),new Error(n)}function z(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||ud(e,s,n)}function se(r,e){return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NB{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Rm(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%62))}return n}}function Be(r,e){return r<e?-1:r>e?1:0}function iB(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),i=e.charAt(n);if(s!==i)return Va(s)===Va(i)?Be(s,i):Va(s)?1:-1}return Be(r.length,e.length)}const bm=55296,Pm=57343;function Va(r){const e=r.charCodeAt(0);return e>=bm&&e<=Pm}function kr(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t){this.comparator=e,this.root=t||qe.EMPTY}insert(e,t){return new ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $i(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $i(this.root,e,this.comparator,!1)}getReverseIterator(){return new $i(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $i(this.root,e,this.comparator,!0)}}class $i{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??qe.RED,this.left=s??qe.EMPTY,this.right=i??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new qe(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return qe.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,t,n,s,i){return this}insert(e,t,n){return new qe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Eu(this.data.getIterator())}getIteratorFrom(e){return new Eu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Fe(this.comparator);return t.data=e,t}}class Eu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends en{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="__name__";class St{constructor(e,t,n){t===void 0?t=0:t>e.length&&Y(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&Y(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return St.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof St?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=St.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return Be(e.length,t.length)}static compareSegments(e,t){const n=St.isNumericId(e),s=St.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?St.extractNumericId(e).compare(St.extractNumericId(t)):iB(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return wn.fromString(e.substring(4,e.length-2))}}class Ce extends St{construct(e,t,n){return new Ce(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new $(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new Ce(t)}static emptyPath(){return new Ce([])}}const Sm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let _t=class Ir extends St{construct(e,t,n){return new Ir(e,t,n)}static isValidIdentifier(e){return Sm.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ir.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Vr}static keyField(){return new Ir([Vr])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new $(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const B=e[s];if(B==="\\"){if(s+1===e.length)throw new $(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new $(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,s+=2}else B==="`"?(o=!o,s++):B!=="."||o?(n+=B,s++):(i(),s++)}if(i(),o)throw new $(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ir(t)}static emptyPath(){return new Ir([])}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new mt([])}unionWith(e){let t=new Fe(_t.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new mt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return kr(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Mn(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Nm(r,e){const t=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.push(e(r[n],n,r));return t}function hd(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(Ce.fromString(e))}static fromName(e){return new Z(Ce.fromString(e).popFirst(5))}static empty(){return new Z(Ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ce.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new Ce(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(r,e,t){if(!t)throw new $(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function Om(r,e,t,n){if(e===!0&&n===!0)throw new $(V.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function _u(r){if(!Z.isDocumentKey(r))throw new $(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Du(r){if(Z.isDocumentKey(r))throw new $(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function ci(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function OB(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":Y(12329,{type:typeof r})}function tr(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new $(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=OB(r);throw new $(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(r,e){const t={typeString:r};return e&&(t.value=e),t}function ui(r,e){if(!ci(r))throw new $(V.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const o=r[n];if(s&&typeof o!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new $(V.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yu=-62135596800,wu=1e6;class Ae{static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*wu);return new Ae(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<yu)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/wu}_compareTo(e){return this.seconds===e.seconds?Be(this.nanoseconds,e.nanoseconds):Be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ae._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ui(e,Ae._jsonSchema))return new Ae(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-yu;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ae._jsonSchemaVersion="firestore/timestamp/1.0",Ae._jsonSchema={type:Oe("string",Ae._jsonSchemaVersion),seconds:Oe("number"),nanoseconds:Oe("number")};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Cd("Invalid base64 string: "+i):i}}(e);return new Le(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Le(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const Fm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pn(r){if(z(!!r,39018),typeof r=="string"){let e=0;const t=Fm.exec(r);if(z(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Re(r.seconds),nanos:Re(r.nanos)}}function Re(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Sn(r){return typeof r=="string"?Le.fromBase64String(r):Le.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="server_timestamp",pd="__type__",gd="__previous_value__",md="__local_write_time__";function Lo(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[pd])==null?void 0:n.stringValue)===fd}function hi(r){const e=r.mapValue.fields[gd];return Lo(e)?hi(e):e}function Mr(r){const e=Pn(r.mapValue.fields[md].timestampValue);return new Ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lm{constructor(e,t,n,s,i,o,B,l,c,h,C,p,_){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=B,this.longPollingOptions=l,this.useFetchStreams=c,this.isUsingEmulator=h,this.apiKey=C,this._customHeaders=p,this.grpcFlowControlWindow=_}}const oB="(default)";class Us{constructor(e,t){this.projectId=e,this.database=t||oB}static empty(){return new Us("","")}get isDefaultDatabase(){return this.database===oB}isEqual(e){return e instanceof Us&&e.projectId===this.projectId&&e.database===this.database}}function xm(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new $(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Us(r.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FB=-1;function di(r){return r==null}function Js(r){return r===0&&1/r==-1/0}function km(r){return typeof r=="number"&&Number.isInteger(r)&&!Js(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}function Vm(r){return typeof r=="string"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed="__type__",Mm="__max__",zi={mapValue:{}},_d="__vector__",js="value",Gr={nullValue:"NULL_VALUE"},ut={booleanValue:!0},je={booleanValue:!1};function xe(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Lo(r)?4:Gm(r)?9007199254740991:Co(r)?10:11:Y(28295,{value:r})}function It(r,e,t){if(r===e)return!0;const n=xe(r);if(n!==xe(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Mr(r).isEqual(Mr(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const B=Pn(i.timestampValue),l=Pn(o.timestampValue);return B.seconds===l.seconds&&B.nanos===l.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(i,o){return Sn(i.bytesValue).isEqual(Sn(o.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(i,o){return Re(i.geoPointValue.latitude)===Re(o.geoPointValue.latitude)&&Re(i.geoPointValue.longitude)===Re(o.geoPointValue.longitude)}(r,e);case 2:return function(i,o,B){if("integerValue"in i&&"integerValue"in o)return Re(i.integerValue)===Re(o.integerValue);let l,c;if("doubleValue"in i&&"doubleValue"in o)l=Re(i.doubleValue),c=Re(o.doubleValue);else{if(!(B!=null&&B.t))return!1;l=Re(i.integerValue??i.doubleValue),c=Re(o.integerValue??o.doubleValue)}return l===c?!!(B!=null&&B.i)||Js(l)===Js(c):!!(B===void 0||B.o)&&isNaN(l)&&isNaN(c)}(r,e,t);case 9:return kr(r.arrayValue.values||[],e.arrayValue.values||[],(s,i)=>It(s,i,t));case 10:case 11:return function(i,o,B){const l=i.mapValue.fields||{},c=o.mapValue.fields||{};if(ho(l)!==ho(c))return!1;for(const h in l)if(l.hasOwnProperty(h)&&(c[h]===void 0||!It(l[h],c[h],B)))return!1;return!0}(r,e,t);default:return Y(52216,{left:r})}}function qs(r,e){return(r.values||[]).find(t=>It(t,e))!==void 0}function ht(r,e){if(r===e)return 0;const t=xe(r),n=xe(e);if(t!==n)return Be(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return Be(r.booleanValue,e.booleanValue);case 2:return function(i,o){const B=Re(i.integerValue||i.doubleValue),l=Re(o.integerValue||o.doubleValue);return B<l?-1:B>l?1:B===l?0:isNaN(B)?isNaN(l)?0:-1:1}(r,e);case 3:return Iu(r.timestampValue,e.timestampValue);case 4:return Iu(Mr(r),Mr(e));case 5:return iB(r.stringValue,e.stringValue);case 6:return function(i,o){const B=Sn(i),l=Sn(o);return B.compareTo(l)}(r.bytesValue,e.bytesValue);case 7:return function(i,o){const B=i.split("/"),l=o.split("/");for(let c=0;c<B.length&&c<l.length;c++){const h=Be(B[c],l[c]);if(h!==0)return h}return Be(B.length,l.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,o){const B=Be(Re(i.latitude),Re(o.latitude));return B!==0?B:Be(Re(i.longitude),Re(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Tu(r.arrayValue,e.arrayValue);case 10:return function(i,o){var p,_,A,L;const B=i.fields||{},l=o.fields||{},c=(p=B[js])==null?void 0:p.arrayValue,h=(_=l[js])==null?void 0:_.arrayValue,C=Be(((A=c==null?void 0:c.values)==null?void 0:A.length)||0,((L=h==null?void 0:h.values)==null?void 0:L.length)||0);return C!==0?C:Tu(c,h)}(r.mapValue,e.mapValue);case 11:return function(i,o){if(i===zi.mapValue&&o===zi.mapValue)return 0;if(i===zi.mapValue)return 1;if(o===zi.mapValue)return-1;const B=i.fields||{},l=Object.keys(B),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let C=0;C<l.length&&C<h.length;++C){const p=iB(l[C],h[C]);if(p!==0)return p;const _=ht(B[l[C]],c[h[C]]);if(_!==0)return _}return Be(l.length,h.length)}(r.mapValue,e.mapValue);default:throw Y(23264,{u:t})}}function Iu(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Be(r,e);const t=Pn(r),n=Pn(e),s=Be(t.seconds,n.seconds);return s!==0?s:Be(t.nanos,n.nanos)}function Tu(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=ht(t[s],n[s]);if(i!==void 0&&i!==0)return i}return Be(t.length,n.length)}function Hr(r){return aB(r)}function aB(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=Pn(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return Sn(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return Z.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=aB(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${aB(t.fields[o])}`;return s+"}"}(r.mapValue):Y(61005,{value:r})}function no(r){switch(xe(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=hi(r);return e?16+no(e):16;case 5:return 2*r.stringValue.length;case 6:return Sn(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+no(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return Mn(n.fields,(i,o)=>{s+=i.length+no(o)}),s}(r.mapValue);default:throw Y(13486,{value:r})}}function Nt(r){return!!r&&"integerValue"in r}function Xn(r){return!!r&&"doubleValue"in r}function Nn(r){return Nt(r)||Xn(r)}function Ur(r){return!!r&&"arrayValue"in r}function Et(r){return!!r&&"nullValue"in r}function dt(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function nr(r){return!!r&&"mapValue"in r}function Co(r){var t,n;return((n=(((t=r==null?void 0:r.mapValue)==null?void 0:t.fields)||{})[Ed])==null?void 0:n.stringValue)===_d}function BB(r){var e,t;return(t=(((e=r==null?void 0:r.mapValue)==null?void 0:e.fields)||{})[js])==null?void 0:t.arrayValue}function Ss(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return Mn(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Ss(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ss(r.arrayValue.values[t]);return e}return{...r}}function Gm(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Mm}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.value=e}static empty(){return new Qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!nr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ss(t)}setAll(e){let t=_t.emptyPath(),n={},s=[];e.forEach((o,B)=>{if(!t.isImmediateParentOf(B)){const l=this.getFieldsMap(t);this.applyChanges(l,n,s),n={},s=[],t=B.popLast()}o?n[B.lastSegment()]=Ss(o):s.push(B.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());nr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return It(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];nr(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Mn(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new Qe(Ss(this.value))}}function Dd(r){const e=[];return Mn(r.fields,(t,n)=>{const s=new _t([t]);if(nr(n)){const i=Dd(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new mt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Js(e)?"-0":e}}function LB(r){return{integerValue:""+r}}function xB(r,e,t){return km(e)?LB(e):xo(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this._=void 0}}function Hm(r,e,t){return r instanceof fo?function(s,i){const o={fields:{[pd]:{stringValue:fd},[md]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Lo(i)&&(i=hi(i)),i&&(o.fields[gd]=i),{mapValue:o}}(t,e):r instanceof Ks?wd(r,e):r instanceof $s?Id(r,e):r instanceof zs?function(s,i){const o=yd(s,i),B=mo(o)+mo(s.l);return Nt(o)&&Nt(s.l)?LB(B):xo(s.serializer,B)}(r,e):r instanceof po?function(s,i){return Au(s,i,Math.min)}(r,e):r instanceof go?function(s,i){return Au(s,i,Math.max)}(r,e):void 0}function Um(r,e,t){return r instanceof Ks?wd(r,e):r instanceof $s?Id(r,e):t}function yd(r,e){return r instanceof zs?Nn(e)?e:{integerValue:0}:null}class fo extends ko{}class Ks extends ko{constructor(e){super(),this.elements=e}}function wd(r,e){const t=Td(e);for(const n of r.elements)t.some(s=>It(s,n))||t.push(n);return{arrayValue:{values:t}}}class $s extends ko{constructor(e){super(),this.elements=e}}function Id(r,e){let t=Td(e);for(const n of r.elements)t=t.filter(s=>!It(s,n));return{arrayValue:{values:t}}}class kB extends ko{constructor(e,t){super(),this.serializer=e,this.l=t}}class zs extends kB{}class po extends kB{}class go extends kB{}function Au(r,e,t){if(!Nn(e))return r.l;const n=t(mo(e),mo(r.l));return Nt(e)&&Nt(r.l)?LB(n):xo(r.serializer,n)}function mo(r){return Re(r.integerValue||r.doubleValue)}function Td(r){return Ur(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function Jm(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof Ks&&s instanceof Ks||n instanceof $s&&s instanceof $s?kr(n.elements,s.elements,It):n instanceof zs&&s instanceof zs||n instanceof po&&s instanceof po||n instanceof go&&s instanceof go?It(n.l,s.l):n instanceof fo&&s instanceof fo}(r.transform,e.transform)}class jm{constructor(e,t){this.version=e,this.transformResults=t}}class et{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new et}static exists(e){return new et(void 0,e)}static updateTime(e){return new et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ro(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Vo{}function Ad(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Mo(r.key,et.none()):new Ci(r.key,r.data,et.none());{const t=r.data,n=Qe.empty();let s=new Fe(_t.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new Gn(r.key,n,new mt(s.toArray()),et.none())}}function qm(r,e,t){r instanceof Ci?function(s,i,o){const B=s.value.clone(),l=Ru(s.fieldTransforms,i,o.transformResults);B.setAll(l),i.convertToFoundDocument(o.version,B).setHasCommittedMutations()}(r,e,t):r instanceof Gn?function(s,i,o){if(!ro(s.precondition,i))return void i.convertToUnknownDocument(o.version);const B=Ru(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(vd(s)),l.setAll(B),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Ns(r,e,t,n){return r instanceof Ci?function(i,o,B,l){if(!ro(i.precondition,o))return B;const c=i.value.clone(),h=bu(i.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(r,e,t,n):r instanceof Gn?function(i,o,B,l){if(!ro(i.precondition,o))return B;const c=bu(i.fieldTransforms,l,o),h=o.data;return h.setAll(vd(i)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),B===null?null:B.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(C=>C.field))}(r,e,t,n):function(i,o,B){return ro(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):B}(r,e,t)}function Km(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=yd(n.transform,s||null);i!=null&&(t===null&&(t=Qe.empty()),t.set(n.field,i))}return t||null}function vu(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&kr(n,s,(i,o)=>Jm(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Ci extends Vo{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Gn extends Vo{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function vd(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Ru(r,e,t){const n=new Map;z(r.length===t.length,32656,{h:t.length,T:r.length});for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,B=e.data.field(i.field);n.set(i.field,Um(o,B,t[s]))}return n}function bu(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,Hm(i,o,e))}return n}class Mo extends Vo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Rd extends Vo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e,t){this.position=e,this.inclusive=t}}function Pu(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=Z.comparator(Z.fromName(o.referenceValue),t.key):n=ht(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Su(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!It(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{}class Ve extends bd{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new zm(e,t,n):t==="array-contains"?new Ym(e,n):t==="in"?new Xm(e,n):t==="not-in"?new Zm(e,n):t==="array-contains-any"?new eE(e,n):new Ve(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Qm(e,n):new Wm(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(ht(t,this.value)):t!==null&&xe(this.value)===xe(t)&&this.matchesComparison(ht(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mt extends bd{constructor(e,t){super(),this.filters=e,this.op=t,this.P=null}static create(e,t){return new Mt(e,t)}matches(e){return Pd(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.P!==null||(this.P=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.P}getFilters(){return Object.assign([],this.filters)}}function Pd(r){return r.op==="and"}function Sd(r){return $m(r)&&Pd(r)}function $m(r){for(const e of r.filters)if(e instanceof Mt)return!1;return!0}function lB(r){if(r instanceof Ve)return r.field.canonicalString()+r.op.toString()+Hr(r.value);if(Sd(r))return r.filters.map(e=>lB(e)).join(",");{const e=r.filters.map(t=>lB(t)).join(",");return`${r.op}(${e})`}}function Nd(r,e){return r instanceof Ve?function(n,s){return s instanceof Ve&&n.op===s.op&&n.field.isEqual(s.field)&&It(n.value,s.value)}(r,e):r instanceof Mt?function(n,s){return s instanceof Mt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,B)=>i&&Nd(o,s.filters[B]),!0):!1}(r,e):void Y(19439)}function Od(r){return r instanceof Ve?function(t){return`${t.field.canonicalString()} ${t.op} ${Hr(t.value)}`}(r):r instanceof Mt?function(t){return t.op.toString()+" {"+t.getFilters().map(Od).join(" ,")+"}"}(r):"Filter"}class zm extends Ve{constructor(e,t,n){super(e,t,n),this.key=Z.fromName(n.referenceValue)}matches(e){const t=Z.comparator(e.key,this.key);return this.matchesComparison(t)}}class Qm extends Ve{constructor(e,t){super(e,"in",t),this.keys=Fd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Wm extends Ve{constructor(e,t){super(e,"not-in",t),this.keys=Fd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Fd(r,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(n=>Z.fromName(n.referenceValue))}class Ym extends Ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ur(t)&&qs(t.arrayValue,this.value)}}class Xm extends Ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&qs(this.value.arrayValue,t)}}class Zm extends Ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(qs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!qs(this.value.arrayValue,t)}}class eE extends Ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ur(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>qs(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t="asc"){this.field=e,this.dir=t}}function tE(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Ae(0,0))}static max(){return new ne(new Ae(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,t,n,s,i,o,B){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=B}static newInvalidDocument(e){return new Je(e,0,ne.min(),ne.min(),ne.min(),Qe.empty(),0)}static newFoundDocument(e,t,n,s){return new Je(e,1,t,ne.min(),n,s,0)}static newNoDocument(e,t){return new Je(e,2,t,ne.min(),ne.min(),Qe.empty(),0)}static newUnknownDocument(e,t){return new Je(e,3,t,ne.min(),ne.min(),Qe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Je&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=-1;function nE(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=ne.fromTimestamp(n===1e9?new Ae(t+1,0):new Ae(t,n));return new On(s,Z.empty(),e)}function rE(r){return new On(r.readTime,r.key,Qs)}class On{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new On(ne.min(),Z.empty(),Qs)}static max(){return new On(ne.max(),Z.empty(),Qs)}}function sE(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=Z.comparator(r.documentKey,e.documentKey),t!==0?t:Be(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iE{constructor(e,t=null,n=[],s=[],i=null,o=null,B=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=B,this.R=null}}function Nu(r,e=null,t=[],n=[],s=null,i=null,o=null){return new iE(r,e,t,n,s,i,o)}function Ld(r){const e=se(r);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>lB(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),di(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Hr(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Hr(n)).join(",")),e.R=t}return e.R}function xd(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!tE(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Nd(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Su(r.startAt,e.startAt)&&Su(r.endAt,e.endAt)}function Wn(r){return!!r.isCorePipeline}function kd(r){return!!r.path&&Z.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t=null,n=[],s=[],i=null,o="F",B=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=B,this.endAt=l,this.I=null,this.A=null,this.V=null,this.startAt,this.endAt}}function oE(r,e,t,n,s,i,o,B){return new Go(r,e,t,n,s,i,o,B)}function VB(r){return new Go(r)}function Ou(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function aE(r){return Z.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function BE(r){return r.collectionGroup!==null}function Os(r){const e=se(r);if(e.I===null){e.I=[];const t=new Set;for(const i of e.explicitOrderBy)e.I.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let B=new Fe(_t.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(B=B.add(c.field))})}),B})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.I.push(new _o(i,n))}),t.has(_t.keyField().canonicalString())||e.I.push(new _o(_t.keyField(),n))}return e.I}function Ft(r){const e=se(r);return e.A||(e.A=lE(e,Os(r))),e.A}function lE(r,e){if(r.limitType==="F")return Nu(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new _o(s.field,i)});const t=r.endAt?new Eo(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Eo(r.startAt.position,r.startAt.inclusive):null;return Nu(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function cB(r,e,t){return new Go(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function cE(r,e){return xd(Ft(r),Ft(e))&&r.limitType===e.limitType}function Fs(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Od(s)).join(", ")}]`),di(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Hr(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Hr(s)).join(",")),`Target(${n})`}(Ft(r))}; limitType=${r.limitType})`}function Ho(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):Z.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of Os(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,B,l){const c=Pu(o,B,l);return o.inclusive?c<=0:c<0}(n.startAt,Os(n),s)||n.endAt&&!function(o,B,l){const c=Pu(o,B,l);return o.inclusive?c>=0:c>0}(n.endAt,Os(n),s))}(r,e)}function MB(r){return(e,t)=>{let n=!1;for(const s of Os(r)){const i=uE(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function uE(r,e,t){const n=r.field.isKeyField()?Z.comparator(e.key,t.key):function(i,o,B){const l=o.data.field(i),c=B.data.field(i);return l!==null&&c!==null?ht(l,c):Y(42886)}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return Y(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se,ue;function Vd(r){switch(r){case V.OK:return Y(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return Y(15467,{code:r})}}function Md(r){if(r===void 0)return Yt("GRPC error has no .code"),V.UNKNOWN;switch(r){case Se.OK:return V.OK;case Se.CANCELLED:return V.CANCELLED;case Se.UNKNOWN:return V.UNKNOWN;case Se.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Se.INTERNAL:return V.INTERNAL;case Se.UNAVAILABLE:return V.UNAVAILABLE;case Se.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Se.NOT_FOUND:return V.NOT_FOUND;case Se.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Se.ABORTED:return V.ABORTED;case Se.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Se.DATA_LOSS:return V.DATA_LOSS;default:return Y(39323,{code:r})}}(ue=Se||(Se={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Mn(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return hd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=new ve(Z.comparator);function lt(){return dE}const Gd=new ve(Z.comparator);function Tr(...r){let e=Gd;for(const t of r)e=e.insert(t.key,t);return e}function Hd(r){let e=Gd;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function dn(){return Ls()}function Ud(){return Ls()}function Ls(){return new ur(r=>r.toString(),(r,e)=>r.isEqual(e))}const CE=new ve(Z.comparator),fE=new Fe(Z.comparator);function ae(...r){let e=fE;for(const t of r)e=e.add(t);return e}const pE=new Fe(Be);function gE(){return pE}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EE=new wn([4294967295,4294967295],0);function Fu(r){const e=mE().encode(r),t=new Zh;return t.update(e),new Uint8Array(t.digest())}function Lu(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new wn([t,n],0),new wn([s,i],0)]}class GB{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new vs(`Invalid padding: ${t}`);if(n<0)throw new vs(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new vs(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new vs(`Invalid padding when bitmap length is 0: ${t}`);this.m=8*e.length-t,this.p=wn.fromNumber(this.m)}S(e,t,n){let s=e.add(t.multiply(wn.fromNumber(n)));return s.compare(EE)===1&&(s=new wn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.p).toNumber()}v(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.m===0)return!1;const t=Fu(e),[n,s]=Lu(t);for(let i=0;i<this.hashCount;i++){const o=this.S(n,s,i);if(!this.v(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new GB(i,s,t);return n.forEach(B=>o.insert(B)),o}insert(e){if(this.m===0)return;const t=Fu(e),[n,s]=Lu(t);for(let i=0;i<this.hashCount;i++){const o=this.S(n,s,i);this.D(o)}}D(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t,n,s,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,pi.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new fi(ne.min(),s,new ve(Be),lt(),lt(),ae())}}class pi{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new pi(n,t,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t,n,s){this.C=e,this.removedTargetIds=t,this.key=n,this.F=s}}class Jd{constructor(e,t){this.targetId=e,this.O=t}}class jd{constructor(e,t,n=Le.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class xu{constructor(e){this.targetId=e,this.M=0,this.N=ku(),this.L=Le.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get k(){return this.M!==0}get q(){return this.U}$(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}K(){let e=ae(),t=ae(),n=ae();return this.N.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:Y(38017,{changeType:i})}}),new pi(this.L,this.B,e,t,n)}W(){this.U=!1,this.N=ku()}G(e,t){this.U=!0,this.N=this.N.insert(e,t)}j(e){this.U=!0,this.N=this.N.remove(e)}H(){this.M+=1}J(){this.M-=1,z(this.M>=0,3241,{M:this.M,targetId:this.targetId})}Y(){this.U=!0,this.B=!0}}const Es="WatchChangeAggregator";class _E{constructor(e){this.Z=e,this.X=new Map,this.ee=lt(),this.te=Qi(),this.ne=lt(),this.re=Qi(),this.ie=new ve(Be)}se(e){for(const t of e.C)e.F&&e.F.isFoundDocument()?this._e(t,e.F):this.oe(t,e.key,e.F);for(const t of e.removedTargetIds)this.oe(t,e.key,e.F)}ae(e){this.forEachTarget(e,t=>{const n=this.X.get(t);if(n)switch(e.state){case 0:this.ue(t)&&n.$(e.resumeToken);break;case 1:n.J(),n.k||n.W(),n.$(e.resumeToken);break;case 2:n.J(),n.k||this.removeTarget(t);break;case 3:this.ue(t)&&(n.Y(),n.$(e.resumeToken));break;case 4:this.ue(t)&&(this.ce(t),n.$(e.resumeToken));break;default:Y(56790,{state:e.state})}else q(Es,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.X.forEach((n,s)=>{this.ue(s)&&t(s)})}le(e){var t;return Wn(e)?e.getPipelineSourceType()==="documents"&&((t=e.getPipelineDocuments())==null?void 0:t.length)===1:kd(e)}Ee(e){const t=e.targetId,n=e.O.count,s=this.he(t);if(s){const i=s.target;if(this.le(i))if(n===0){const o=new Z(Wn(i)?Ce.fromString(i.getPipelineDocuments()[0]):i.path);this.oe(t,o,Je.newNoDocument(o,ne.min()))}else z(n===1,20013,"Single document existence filter with count: "+n);else{const o=this.Te(t);if(o!==n){const B=this.Pe(e),l=B?this.Re(B,e,o):1;if(l!==0){this.ce(t);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.ie=this.ie.insert(t,c)}}}}}Pe(e){const t=e.O.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,B;try{o=Sn(n).toUint8Array()}catch(l){if(l instanceof Cd)return Vt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{B=new GB(o,s,i)}catch(l){return Vt(l instanceof vs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return B.m===0?null:B}Re(e,t,n){return t.O.count===n-this.Ve(e,t.targetId)?0:2}Ve(e,t){const n=this.Z.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this.Z.Ae(),B=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(B)||(this.oe(t,i,null),s++)}),s}de(e){const t=new Map;this.X.forEach((i,o)=>{const B=this.he(o);if(B){if(i.current&&this.le(B.target)){const l=Wn(B.target)?Ce.fromString(B.target.getPipelineDocuments()[0]):B.target.path,c=new Z(l);this.fe(c).has(o)||this.me(o,c)||this.oe(o,c,Je.newNoDocument(c,e))}i.q&&(t.set(o,i.K()),i.W())}});let n=ae();this.re.forEach((i,o)=>{let B=!0;o.forEachWhile(l=>{const c=this.he(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(B=!1,!1)}),B&&(n=n.add(i))}),this.ee.forEach((i,o)=>o.setReadTime(e)),this.ne.forEach((i,o)=>o.setReadTime(e));const s=new fi(e,t,this.ie,this.ee,this.ne,n);return this.ee=lt(),this.te=Qi(),this.ne=lt(),this.re=Qi(),this.ie=new ve(Be),s}_e(e,t){const n=this.X.get(e);if(!n||!this.ue(e))return void q(Es,`addDocumentToTarget received document for unknown inactive target (${e})`);const s=this.me(e,t.key)?2:0;n.G(t.key,s),Wn(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t.key,t):this.ee=this.ee.insert(t.key,t),this.te=this.te.insert(t.key,this.fe(t.key).add(e)),this.re=this.re.insert(t.key,this.pe(t.key).add(e))}oe(e,t,n){const s=this.X.get(e);s&&this.ue(e)?(this.me(e,t)?s.G(t,1):s.j(t),this.re=this.re.insert(t,this.pe(t).delete(e)),this.re=this.re.insert(t,this.pe(t).add(e)),n&&(Wn(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t,n):this.ee=this.ee.insert(t,n))):q(Es,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.X.delete(e)}Te(e){const t=this.X.get(e);if(!t)return 0;const n=t.K();return this.Z.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}H(e){let t=this.X.get(e);t||(q(Es,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new xu(e),this.X.set(e,t)),t.H()}pe(e){let t=this.re.get(e);return t||(t=new Fe(Be),this.re=this.re.insert(e,t)),t}fe(e){let t=this.te.get(e);return t||(t=new Fe(Be),this.te=this.te.insert(e,t)),t}ue(e){const t=this.he(e)!==null;return t||q(Es,"Detected inactive target",e),t}he(e){const t=this.X.get(e);return t===void 0||t.k?null:this.Z.ge(e)}ce(e){this.X.set(e,new xu(e)),this.Z.getRemoteKeysForTarget(e).forEach(t=>{this.oe(e,t,null)})}me(e,t){return this.Z.getRemoteKeysForTarget(e).has(t)}}function Qi(){return new ve(Z.comparator)}function ku(){return new ve(Z.comparator)}const DE={asc:"ASCENDING",desc:"DESCENDING"},yE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wE={and:"AND",or:"OR"};class IE{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function uB(r,e){return r.useProto3Json||di(e)?e:{value:e}}function Do(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function HB(r){const e=Pn(r);return new Ae(e.seconds,e.nanos)}function qd(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function io(r,e){return Do(r,e.toTimestamp())}function Dt(r){return z(!!r,49232),ne.fromTimestamp(HB(r))}function UB(r,e){return hB(r,e).canonicalString()}function hB(r,e){const t=function(s){return new Ce(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Kd(r){const e=Ce.fromString(r);return z(Xd(e),10190,{key:e.toString()}),e}function Ws(r,e){return UB(r.databaseId,e.path)}function xs(r,e){const t=Kd(e);if(t.get(1)!==r.databaseId.projectId)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new $(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new Z(zd(t))}function $d(r,e){return UB(r.databaseId,e)}function TE(r){const e=Kd(r);return e.length===4?Ce.emptyPath():zd(e)}function dB(r){return new Ce(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function zd(r){return z(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function Vu(r,e,t){return{name:Ws(r,e),fields:t.value.mapValue.fields}}function AE(r,e){return"found"in e?function(n,s){z(!!s.found,43571),s.found.name,s.found.updateTime;const i=xs(n,s.found.name),o=Dt(s.found.updateTime),B=s.found.createTime?Dt(s.found.createTime):ne.min(),l=new Qe({mapValue:{fields:s.found.fields}});return Je.newFoundDocument(i,o,B,l)}(r,e):"missing"in e?function(n,s){z(!!s.missing,3894),z(!!s.readTime,22933);const i=xs(n,s.missing),o=Dt(s.readTime);return Je.newNoDocument(i,o)}(r,e):Y(7234,{result:e})}function vE(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Y(39313,{state:c})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,h){return c.useProto3Json?(z(h===void 0||typeof h=="string",58123),Le.fromBase64String(h||"")):(z(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Le.fromUint8Array(h||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,B=o&&function(c){const h=c.code===void 0?V.UNKNOWN:Md(c.code);return new $(h,c.message||"")}(o);t=new jd(n,s,i,B||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=xs(r,n.document.name),i=Dt(n.document.updateTime),o=n.document.createTime?Dt(n.document.createTime):ne.min(),B=new Qe({mapValue:{fields:n.document.fields}}),l=Je.newFoundDocument(s,i,o,B),c=n.targetIds||[],h=n.removedTargetIds||[];t=new so(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=xs(r,n.document),i=n.readTime?Dt(n.readTime):ne.min(),o=Je.newNoDocument(s,i),B=n.removedTargetIds||[];t=new so([],B,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=xs(r,n.document),i=n.removedTargetIds||[];t=new so([],i,s,null)}else{if(!("filter"in e))return Y(11601,{ye:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new hE(s,i),B=n.targetId;t=new Jd(B,o)}}return t}function Qd(r,e){let t;if(e instanceof Ci)t={update:Vu(r,e.key,e.value)};else if(e instanceof Mo)t={delete:Ws(r,e.key)};else if(e instanceof Gn)t={update:Vu(r,e.key,e.data),updateMask:kE(e.fieldMask)};else{if(!(e instanceof Rd))return Y(16599,{we:e.type});t={verify:Ws(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const B=o.transform;if(B instanceof fo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(B instanceof Ks)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:B.elements}};if(B instanceof $s)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:B.elements}};if(B instanceof zs)return{fieldPath:o.field.canonicalString(),increment:B.l};if(B instanceof po)return{fieldPath:o.field.canonicalString(),minimum:B.l};if(B instanceof go)return{fieldPath:o.field.canonicalString(),maximum:B.l};throw Y(20930,{transform:o.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:io(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y(27497)}(r,e.precondition)),t}function RE(r,e){return r&&r.length>0?(z(e!==void 0,14353),r.map(t=>function(s,i){let o=s.updateTime?Dt(s.updateTime):Dt(i);return o.isEqual(ne.min())&&(o=Dt(i)),new jm(o,s.transformResults||[])}(t,e))):[]}function bE(r,e){return{documents:[$d(r,e.path)]}}function PE(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=$d(r,s);const i=function(c){if(c.length!==0)return Yd(Mt.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(h=>function(p){return{field:Ar(p.field),direction:FE(p.dir)}}(h))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const B=uB(r,e.limit);return B!==null&&(t.structuredQuery.limit=B),e.startAt&&(t.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{be:t,parent:s}}function SE(r){let e=TE(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){z(n===1,65062);const h=t.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=function(C){const p=Wd(C);return p instanceof Mt&&Sd(p)?p.getFilters():[p]}(t.where));let o=[];t.orderBy&&(o=function(C){return C.map(p=>function(A){return new _o(vr(A.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(p))}(t.orderBy));let B=null;t.limit&&(B=function(C){let p;return p=typeof C=="object"?C.value:C,di(p)?null:p}(t.limit));let l=null;t.startAt&&(l=function(C){const p=!!C.before,_=C.values||[];return new Eo(_,p)}(t.startAt));let c=null;return t.endAt&&(c=function(C){const p=!C.before,_=C.values||[];return new Eo(_,p)}(t.endAt)),oE(e,s,o,i,B,"F",l,c)}function NE(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function OE(r,e){return{structuredPipeline:{pipeline:{stages:e.stages.map(t=>t._toProto(r))}}}}function Wd(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=vr(t.unaryFilter.field);return Ve.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=vr(t.unaryFilter.field);return Ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vr(t.unaryFilter.field);return Ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vr(t.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}}(r):r.fieldFilter!==void 0?function(t){return Ve.create(vr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Mt.create(t.compositeFilter.filters.map(n=>Wd(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Y(1026)}}(t.compositeFilter.op))}(r):Y(30097,{filter:r})}function FE(r){return DE[r]}function LE(r){return yE[r]}function xE(r){return wE[r]}function Ar(r){return{fieldPath:r.canonicalString()}}function vr(r){return _t.fromServerFormat(r.fieldPath)}function Yd(r){return r instanceof Ve?function(t){if(t.op==="=="){if(dt(t.value))return{unaryFilter:{field:Ar(t.field),op:"IS_NAN"}};if(Et(t.value))return{unaryFilter:{field:Ar(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(dt(t.value))return{unaryFilter:{field:Ar(t.field),op:"IS_NOT_NAN"}};if(Et(t.value))return{unaryFilter:{field:Ar(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ar(t.field),op:LE(t.op),value:t.value}}}(r):r instanceof Mt?function(t){const n=t.getFilters().map(s=>Yd(s));return n.length===1?n[0]:{compositeFilter:{op:xE(t.op),filters:n}}}(r):Y(54877,{filter:r})}function kE(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Xd(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function Zd(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}function Ys(r,e){const t={fields:{}};return e.forEach((n,s)=>{if(typeof s!="string")throw new Error(`Cannot encode map with non-string key: ${s}`);t.fields[s]=n._toProto(r)}),{mapValue:t}}function eC(r){return{stringValue:r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(r){return new IE(r,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gt(Le.fromBase64String(e))}catch(t){throw new $(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new gt(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:gt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ui(e,gt._jsonSchema))return gt.fromBase64String(e.bytes)}}gt._jsonSchemaVersion="firestore/bytes/1.0",gt._jsonSchema={type:Oe("string",gt._jsonSchemaVersion),bytes:Oe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new $(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function VE(){return new Jo(Vr)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JB{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Be(this._lat,e._lat)||Be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Lt._jsonSchemaVersion}}static fromJSON(e){if(ui(e,Lt._jsonSchema))return new Lt(e.latitude,e.longitude)}}Lt._jsonSchemaVersion="firestore/geoPoint/1.0",Lt._jsonSchema={type:Oe("string",Lt._jsonSchemaVersion),latitude:Oe("number"),longitude:Oe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class GE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ot.UNAUTHENTICATED))}shutdown(){}}class HE{constructor(e){this.ve=e,this.currentUser=ot.UNAUTHENTICATED,this.De=0,this.forceRefresh=!1,this.auth=null}start(e,t){z(this.xe===void 0,42304);let n=this.De;const s=l=>this.De!==n?(n=this.De,t(l)):Promise.resolve();let i=new In;this.xe=()=>{this.De++,this.currentUser=this.Ce(),i.resolve(),i=new In,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},B=l=>{q("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.xe&&(this.auth.addAuthTokenListener(this.xe),o())};this.ve.onInit(l=>B(l)),setTimeout(()=>{if(!this.auth){const l=this.ve.getImmediate({optional:!0});l?B(l):(q("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new In)}},0),o()}getToken(){const e=this.De,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.De!==e?(q("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(z(typeof n.accessToken=="string",31837,{Fe:n}),new ME(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.xe&&this.auth.removeAuthTokenListener(this.xe),this.xe=void 0}Ce(){const e=this.auth&&this.auth.getUid();return z(e===null||typeof e=="string",2055,{Oe:e}),new ot(e)}}class UE{constructor(e,t,n){this.Me=e,this.Ne=t,this.Le=n,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.Be=new Map}Ue(){return this.Le?this.Le():null}get headers(){this.Be.set("X-Goog-AuthUser",this.Me);const e=this.Ue();return e&&this.Be.set("Authorization",e),this.Ne&&this.Be.set("X-Goog-Iam-Authorization-Token",this.Ne),this.Be}}class JE{constructor(e,t,n){this.Me=e,this.Ne=t,this.Le=n}getToken(){return Promise.resolve(new UE(this.Me,this.Ne,this.Le))}start(e,t){e.enqueueRetryable(()=>t(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Mu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jE{constructor(e,t){this.ke=t,this.forceRefresh=!1,this.appCheck=null,this.qe=null,this.$e=null,At(e)&&e.settings.appCheckToken&&(this.$e=e.settings.appCheckToken)}start(e,t){z(this.xe===void 0,3512);const n=i=>{i.error!=null&&q("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.qe;return this.qe=i.token,q("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.xe=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{q("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.xe&&this.appCheck.addTokenListener(this.xe)};this.ke.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.ke.getImmediate({optional:!0});i?s(i):q("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.$e)return Promise.resolve(new Mu(this.$e));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(z(typeof t.token=="string",44558,{tokenResult:t}),this.qe=t.token,new Mu(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.xe&&this.appCheck.removeTokenListener(this.xe),this.xe=void 0}}function tC(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{Ke(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu="ConnectivityMonitor";class Hu{constructor(){this.Qe=()=>this.We(),this.Ge=()=>this.ze(),this.je=[],this.He()}Ke(e){this.je.push(e)}shutdown(){window.removeEventListener("online",this.Qe),window.removeEventListener("offline",this.Ge)}He(){window.addEventListener("online",this.Qe),window.addEventListener("offline",this.Ge)}We(){q(Gu,"Network connectivity changed: AVAILABLE");for(const e of this.je)e(0)}ze(){q(Gu,"Network connectivity changed: UNAVAILABLE");for(const e of this.je)e(1)}static Je(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wi=null;function CB(){return Wi===null?Wi=function(){return 268435456+Math.round(2147483648*Math.random())}():Wi++,"0x"+Wi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma="RestConnection",KE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class $E{get Ye(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ze=t+"://"+e.host,this.Xe=`projects/${n}/databases/${s}`,this.et=this.databaseId.database===oB?`project_id=${n}`:`project_id=${n}&database_id=${s}`}tt(e,t,n,s,i){const o=CB(),B=this.nt(e,t.toUriEncodedString());q(Ma,`Sending RPC '${e}' ${o}:`,B,n);const l={"google-cloud-resource-prefix":this.Xe,"x-goog-request-params":this.et};this.rt(l,s,i);const{host:c}=new URL(B),h=Bi(c);return this.it(e,B,l,n,h).then(C=>(q(Ma,`Received RPC '${e}' ${o}: `,C),C),C=>{throw Vt(Ma,`RPC '${e}' ${o} failed with error: `,C,"url: ",B,"request:",n),C})}st(e,t,n,s,i,o){return this.tt(e,t,n,s,i)}rt(e,t,n){if(e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),n&&n.headers.forEach((s,i)=>e[i]=s),this.databaseInfo._customHeaders)for(const s of Object.keys(this.databaseInfo._customHeaders))e[s]=this.databaseInfo._customHeaders[s]}nt(e,t){const n=KE[e];let s=`${this.Ze}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(e){this._t=e._t,this.ot=e.ot}ut(e){this.ct=e}lt(e){this.Et=e}ht(e){this.Tt=e}onMessage(e){this.Pt=e}close(){this.ot()}send(e){this._t(e)}Rt(){this.ct()}It(){this.Et()}At(e){this.Tt(e)}Vt(e){this.Pt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="WebChannelConnection",_s=(r,e,t)=>{r.listen(e,n=>{try{t(n)}catch(s){setTimeout(()=>{throw s},0)}})};class Pr extends $E{constructor(e){super(e),this.dt=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static ft(){if(!Pr.gt){const e=rd();_s(e,nd.STAT_EVENT,t=>{t.stat===tB.PROXY?q(ze,"STAT_EVENT: detected buffering proxy"):t.stat===tB.NOPROXY&&q(ze,"STAT_EVENT: detected no buffering proxy")}),Pr.gt=!0}}it(e,t,n,s,i){const o=CB();return new Promise((B,l)=>{const c=new ed;c.setWithCredentials(!0),c.listenOnce(td.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case to.NO_ERROR:const C=c.getResponseJson();q(ze,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(C)),B(C);break;case to.TIMEOUT:q(ze,`RPC '${e}' ${o} timed out`),l(new $(V.DEADLINE_EXCEEDED,"Request time out"));break;case to.HTTP_ERROR:const p=c.getStatus();if(q(ze,`RPC '${e}' ${o} failed with status:`,p,"response text:",c.getResponseText()),p>0){let _=c.getResponseJson();Array.isArray(_)&&(_=_[0]);const A=_==null?void 0:_.error;if(A&&A.status&&A.message){const L=function(G){const ee=G.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(ee)>=0?ee:V.UNKNOWN}(A.status);l(new $(L,A.message))}else l(new $(V.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new $(V.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{yt:e,streamId:o,wt:c.getLastErrorCode(),bt:c.getLastError()})}}finally{q(ze,`RPC '${e}' ${o} completed.`)}});const h=JSON.stringify(s);q(ze,`RPC '${e}' ${o} sending request:`,s),c.send(t,"POST",h,n,15)})}St(e,t,n){const s=CB(),i=[this.Ze,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),B={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(B.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(B.useFetchStreams=!0),this.rt(B.initMessageHeaders,t,n),B.encodeInitMessageHeaders=!0;const c=i.join("");q(ze,`Creating RPC '${e}' stream ${s}: ${c}`,B);const h=o.createWebChannel(c,B);this.vt(h);let C=!1,p=!1;const _=new zE({_t:A=>{p?q(ze,`Not sending because RPC '${e}' stream ${s} is closed:`,A):(C||(q(ze,`Opening RPC '${e}' stream ${s} transport.`),h.open(),C=!0),q(ze,`RPC '${e}' stream ${s} sending:`,A),h.send(A))},ot:()=>h.close()});return _s(h,As.EventType.OPEN,()=>{p||(q(ze,`RPC '${e}' stream ${s} transport opened.`),_.Rt())}),_s(h,As.EventType.CLOSE,()=>{p||(p=!0,q(ze,`RPC '${e}' stream ${s} transport closed`),_.At(),this.Dt(h))}),_s(h,As.EventType.ERROR,A=>{p||(p=!0,Vt(ze,`RPC '${e}' stream ${s} transport errored. Name:`,A.name,"Message:",A.message),_.At(new $(V.UNAVAILABLE,"The operation could not be completed")))}),_s(h,As.EventType.MESSAGE,A=>{var L;if(!p){const M=A.data[0];z(!!M,16349);const G=M,ee=(G==null?void 0:G.error)||((L=G[0])==null?void 0:L.error);if(ee){q(ze,`RPC '${e}' stream ${s} received error:`,ee);const Q=ee.status;let fe=function(v){const E=Se[v];if(E!==void 0)return Md(E)}(Q),pe=ee.message;Q==="NOT_FOUND"&&pe.includes("database")&&pe.includes("does not exist")&&pe.includes(this.databaseId.database)&&Vt(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),fe===void 0&&(fe=V.INTERNAL,pe="Unknown error status: "+Q+" with message "+ee.message),p=!0,_.At(new $(fe,pe)),h.close()}else q(ze,`RPC '${e}' stream ${s} received:`,M),_.Vt(M)}}),Pr.ft(),setTimeout(()=>{_.It()},0),_}terminate(){this.dt.forEach(e=>e.close()),this.dt=[]}vt(e){this.dt.push(e)}Dt(e){this.dt=this.dt.filter(t=>t===e)}rt(e,t,n){super.rt(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return sd()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(r){return new Pr(r)}Pr.gt=!1;class jB{constructor(e,t,n=1e3,s=1.5,i=6e4){this.xt=e,this.timerId=t,this.Ct=n,this.Ft=s,this.Ot=i,this.Mt=0,this.Nt=null,this.Lt=Date.now(),this.reset()}reset(){this.Mt=0}Bt(){this.Mt=this.Ot}Ut(e){this.cancel();const t=Math.floor(this.Mt+this.kt()),n=Math.max(0,Date.now()-this.Lt),s=Math.max(0,t-n);s>0&&q("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Mt} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Nt=this.xt.enqueueAfterDelay(this.timerId,s,()=>(this.Lt=Date.now(),e())),this.Mt*=this.Ft,this.Mt<this.Ct&&(this.Mt=this.Ct),this.Mt>this.Ot&&(this.Mt=this.Ot)}qt(){this.Nt!==null&&(this.Nt.skipDelay(),this.Nt=null)}cancel(){this.Nt!==null&&(this.Nt.cancel(),this.Nt=null)}kt(){return(Math.random()-.5)*this.Mt}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu="PersistentStream";class nC{constructor(e,t,n,s,i,o,B,l){this.xt=e,this.$t=n,this.Kt=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=B,this.listener=l,this.state=0,this.Qt=0,this.Wt=null,this.Gt=null,this.stream=null,this.zt=0,this.jt=new jB(e,t)}Ht(){return this.state===1||this.state===5||this.Jt()}Jt(){return this.state===2||this.state===3}start(){this.zt=0,this.state!==4?this.auth():this.Yt()}async stop(){this.Ht()&&await this.close(0)}Zt(){this.state=0,this.jt.reset()}Xt(){this.Jt()&&this.Wt===null&&(this.Wt=this.xt.enqueueAfterDelay(this.$t,6e4,()=>this.en()))}tn(e){this.nn(),this.stream.send(e)}async en(){if(this.Jt())return this.close(0)}nn(){this.Wt&&(this.Wt.cancel(),this.Wt=null)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}async close(e,t){this.nn(),this.rn(),this.jt.cancel(),this.Qt++,e!==4?this.jt.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(Yt(t.toString()),Yt("Using maximum backoff delay to prevent overloading the backend."),this.jt.Bt()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.sn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ht(t)}sn(){}auth(){this.state=1;const e=this._n(this.Qt),t=this.Qt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Qt===t&&this.an(n,s)},n=>{e(()=>{const s=new $(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.un(s)})})}an(e,t){const n=this._n(this.Qt);this.stream=this.cn(e,t),this.stream.ut(()=>{n(()=>this.listener.ut())}),this.stream.lt(()=>{n(()=>(this.state=2,this.Gt=this.xt.enqueueAfterDelay(this.Kt,1e4,()=>(this.Jt()&&(this.state=3),Promise.resolve())),this.listener.lt()))}),this.stream.ht(s=>{n(()=>this.un(s))}),this.stream.onMessage(s=>{n(()=>++this.zt==1?this.En(s):this.onNext(s))})}Yt(){this.state=5,this.jt.Ut(async()=>{this.state=0,this.start()})}un(e){return q(Uu,`close with error: ${e}`),this.stream=null,this.close(4,e)}_n(e){return t=>{this.xt.enqueueAndForget(()=>this.Qt===e?t():(q(Uu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WE extends nC{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}cn(e,t){return this.connection.St("Listen",e,t)}En(e){return this.onNext(e)}onNext(e){this.jt.reset();const t=vE(this.serializer,e),n=function(i){if(!("targetChange"in i))return ne.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?Dt(o.readTime):ne.min()}(e);return this.listener.hn(t,n)}Tn(e){const t={};t.database=dB(this.serializer),t.addTarget=function(i,o){let B;const l=o.target;if(B=Wn(l)?{pipelineQuery:OE(i,l)}:kd(l)?{documents:bE(i,l)}:{query:PE(i,l).be},B.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){B.resumeToken=qd(i,o.resumeToken);const c=uB(i,o.expectedCount);c!==null&&(B.expectedCount=c)}else if(o.snapshotVersion.compareTo(ne.min())>0){B.readTime=Do(i,o.snapshotVersion.toTimestamp());const c=uB(i,o.expectedCount);c!==null&&(B.expectedCount=c)}return B}(this.serializer,e);const n=NE(this.serializer,e);n&&(t.labels=n),this.tn(t)}Pn(e){const t={};t.database=dB(this.serializer),t.removeTarget=e,this.tn(t)}}class YE extends nC{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get Rn(){return this.zt>0}start(){this.lastStreamToken=void 0,super.start()}sn(){this.Rn&&this.In([])}cn(e,t){return this.connection.St("Write",e,t)}En(e){return z(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,z(!e.writeResults||e.writeResults.length===0,55816),this.listener.An()}onNext(e){z(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.jt.reset();const t=RE(e.writeResults,e.commitTime),n=Dt(e.commitTime);return this.listener.Vn(n,t)}dn(){const e={};e.database=dB(this.serializer),this.tn(e)}In(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>Qd(this.serializer,n))};this.tn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{}class ZE extends XE{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.fn=!1}mn(){if(this.fn)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.")}tt(e,t,n,s){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.tt(e,hB(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(V.UNKNOWN,i.toString())})}st(e,t,n,s,i){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,B])=>this.connection.st(e,hB(t,n),s,o,B,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(V.UNKNOWN,o.toString())})}terminate(){this.fn=!0,this.connection.terminate()}}function e_(r,e,t,n){return new ZE(r,e,t,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_="ComponentProvider",Ju=new Map;function n_(r,e,t,n,s){return new Lm(r,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,tC(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,n,s._customHeaders,s.grpcFlowControlWindow)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rC=41943040;class at{static withCacheSize(e){return new at(e,at.DEFAULT_COLLECTION_PERCENTILE,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}at.DEFAULT_COLLECTION_PERCENTILE=10,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,at.DEFAULT=new at(rC,at.DEFAULT_COLLECTION_PERCENTILE,at.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),at.DISABLED=new at(-1,0,0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.pn(n),this.gn=n=>t.writeSequenceNumber(n))}pn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.gn&&this.gn(e),e}}jo.yn=-1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class s_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qr(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==r_)throw r;q("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):x.reject(t)}static resolve(e){return new x((t,n)=>{t(e)})}static reject(e){return new x((t,n)=>{n(e)})}static waitFor(e){return new x((t,n)=>{let s=0,i=0,o=!1;e.forEach(B=>{++s,B.next(()=>{++i,o&&i===s&&t()},l=>n(l))}),o=!0,i===s&&t()})}static or(e){let t=x.resolve(!1);for(const n of e)t=t.next(s=>s?x.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new x((n,s)=>{const i=e.length,o=new Array(i);let B=0;for(let l=0;l<i;l++){const c=l;t(e[c]).next(h=>{o[c]=h,++B,B===i&&n(o)},h=>s(h))}})}static doWhile(e,t){return new x((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}function i_(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Wr(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qu="LruGarbageCollector",sC=1048576;function Ku([r,e],[t,n]){const s=Be(r,t);return s===0?Be(e,n):s}class o_{constructor(e){this.Jn=e,this.buffer=new Fe(Ku),this.Yn=0}Zn(){return++this.Yn}Xn(e){const t=[e,this.Zn()];if(this.buffer.size<this.Jn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Ku(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class a_{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.tr(6e4)}stop(){this.er&&(this.er.cancel(),this.er=null)}get started(){return this.er!==null}tr(e){q(qu,`Garbage collection scheduled in ${e}ms`),this.er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Wr(t)?q(qu,"Ignoring IndexedDB error during garbage collection: ",t):await Qr(t)}await this.tr(3e5)})}}class B_{constructor(e,t){this.nr=e,this.params=t}calculateTargetCount(e,t){return this.nr.rr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return x.resolve(jo.yn);const n=new o_(t);return this.nr.forEachTarget(e,s=>n.Xn(s.sequenceNumber)).next(()=>this.nr.ir(e,s=>n.Xn(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.nr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.nr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(q("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(ju)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(q("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ju):this.sr(e,t))}getCacheSize(e){return this.nr.getCacheSize(e)}sr(e,t){let n,s,i,o,B,l,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(C=>(C>this.params.maximumSequenceNumbersToCollect?(q("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${C}`),s=this.params.maximumSequenceNumbersToCollect):s=C,o=Date.now(),this.nthSequenceNumber(e,s))).next(C=>(n=C,B=Date.now(),this.removeTargets(e,n,t))).next(C=>(i=C,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(C=>(c=Date.now(),wr()<=le.DEBUG&&q("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(B-o)+`ms
	Removed ${i} targets in `+(l-B)+`ms
	Removed ${C} documents in `+(c-l)+`ms
Total Duration: ${c-h}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:C})))}}function l_(r,e){return new B_(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_="firestore.googleapis.com",$u=!0;class zu{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new $(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=c_,this.ssl=$u}else this.host=e.host,this.ssl=e.ssl??$u;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=rC;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sC)throw new $(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(Om("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=tC(e.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new $(V.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new $(V.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&function(n,s){if(n===s)return!0;if(!n||!s)return!1;const i=Object.keys(n),o=Object.keys(s);if(i.length!==o.length)return!1;for(const B of i)if(n[B]!==s[B])return!1;return!0}(this._customHeaders,e._customHeaders)}}let qB=class{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new GE;switch(n.type){case"firstParty":return new JE(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new $(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=Ju.get(t);n&&(q(t_,"Removing Datastore"),Ju.delete(t),n.terminate())}(this),Promise.resolve()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new qo(this.firestore,e,this._query)}}class Pe{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pe(this.firestore,e,this._key)}toJSON(){return{type:Pe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(ui(t,Pe._jsonSchema))return new Pe(e,n||null,new Z(Ce.fromString(t.referencePath)))}}Pe._jsonSchemaVersion="firestore/documentReference/1.0",Pe._jsonSchema={type:Oe("string",Pe._jsonSchemaVersion),referencePath:Oe("string")};class Tn extends qo{constructor(e,t,n){super(e,t,VB(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pe(this.firestore,null,new Z(e))}withConverter(e){return new Tn(this.firestore,e,this._path)}}function KB(r,e,...t){if(r=Ge(r),dd("collection","path",e),r instanceof qB){const n=Ce.fromString(e,...t);return Du(n),new Tn(r,null,n)}{if(!(r instanceof Pe||r instanceof Tn))throw new $(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Ce.fromString(e,...t));return Du(n),new Tn(r.firestore,null,n)}}function Er(r,e,...t){if(r=Ge(r),arguments.length===1&&(e=NB.newId()),dd("doc","path",e),r instanceof qB){const n=Ce.fromString(e,...t);return _u(n),new Pe(r,null,new Z(n))}{if(!(r instanceof Pe||r instanceof Tn))throw new $(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(Ce.fromString(e,...t));return _u(n),new Pe(r.firestore,r instanceof Tn?r.converter:null,new Z(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ct._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ui(e,ct._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new ct(e.vectorValues);throw new $(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ct._jsonSchemaVersion="firestore/vectorValue/1.0",ct._jsonSchema={type:Oe("string",ct._jsonSchemaVersion),vectorValues:Oe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=/^__.*__$/;class h_{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Gn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ci(e,this.data,t,this.fieldTransforms)}}class iC{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Gn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function oC(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{dataSource:r})}}class $B{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new $B({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePathSegment(e),n}childContextForFieldPath(e){var s;const t=(s=this.path)==null?void 0:s.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePath(),n}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return yo(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(oC(this.dataSource)&&u_.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class d_{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Uo(e)}createContext(e,t,n,s=!1){return new $B({dataSource:e,methodName:t,targetDoc:n,path:_t.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function aC(r){const e=r._freezeSettings(),t=Uo(r._databaseId);return new d_(r._databaseId,!!e.ignoreUndefinedProperties,t)}function BC(r,e,t,n,s,i={}){const o=r.createContext(i.merge||i.mergeFields?2:0,e,t,s);zB("Data must be an object, but it was:",o,n);const B=lC(n,o);let l,c;if(i.merge)l=new mt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const C of i.mergeFields){const p=Jr(e,C,t);if(!o.contains(p))throw new $(V.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);hC(h,p)||h.push(p)}l=new mt(h),c=o.fieldTransforms.filter(C=>l.covers(C.field))}else l=null,c=o.fieldTransforms;return new h_(new Qe(B),l,c)}class Ko extends JB{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ko}}function C_(r,e,t,n){const s=r.createContext(1,e,t);zB("Data must be an object, but it was:",s,n);const i=[],o=Qe.empty();Mn(n,(l,c)=>{const h=uC(e,l,t);c=Ge(c);const C=s.childContextForFieldPath(h);if(c instanceof Ko)i.push(h);else{const p=lr(c,C);p!=null&&(i.push(h),o.set(h,p))}});const B=new mt(i);return new iC(o,B,s.fieldTransforms)}function f_(r,e,t,n,s,i){const o=r.createContext(1,e,t),B=[Jr(e,n,t)],l=[s];if(i.length%2!=0)throw new $(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)B.push(Jr(e,i[p])),l.push(i[p+1]);const c=[],h=Qe.empty();for(let p=B.length-1;p>=0;--p)if(!hC(c,B[p])){const _=B[p];let A=l[p];A=Ge(A);const L=o.childContextForFieldPath(_);if(A instanceof Ko)c.push(_);else{const M=lr(A,L);M!=null&&(c.push(_),h.set(_,M))}}const C=new mt(c);return new iC(h,C,o.fieldTransforms)}function lr(r,e,t){if(cC(r=Ge(r)))return zB("Unsupported field value:",e,r),lC(r,e);if(r instanceof JB)return function(s,i){if(!oC(i.dataSource))throw i.createError(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${s._methodName}() is not currently supported inside arrays`);const o=s._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return function(s,i){const o=[];let B=0;for(const l of s){let c=lr(l,i.childContextForArray(B));c==null&&(c={nullValue:"NULL_VALUE"}),o.push(c),B++}return{arrayValue:{values:o}}}(r,e)}return function(s,i,o){if((s=Ge(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return xB(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const B=Ae.fromDate(s);return{timestampValue:Do(i.serializer,B)}}if(s instanceof Ae){const B=new Ae(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Do(i.serializer,B)}}if(s instanceof Lt)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof gt)return{bytesValue:qd(i.serializer,s._byteString)};if(s instanceof Pe){const B=i.databaseId,l=s.firestore._databaseId;if(!l.isEqual(B))throw i.createError(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${B.projectId}/${B.database}`);return{referenceValue:UB(s.firestore._databaseId||i.databaseId,s._key.path)}}if(s instanceof ct)return function(l,c){const h=l instanceof ct?l.toArray():l;return{mapValue:{fields:{[Ed]:{stringValue:_d},[js]:{arrayValue:{values:h.map(p=>{if(typeof p!="number")throw c.createError("VectorValues must only contain numeric values.");return xo(c.serializer,p)})}}}}}}(s,i);if(Zd(s))return s._toProto(i.serializer);throw i.createError(`Unsupported field value: ${OB(s)}`)}(r,e)}function lC(r,e){const t={};return hd(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mn(r,(n,s)=>{const i=lr(s,e.childContextForField(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function cC(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Ae||r instanceof Lt||r instanceof gt||r instanceof Pe||r instanceof JB||r instanceof ct||Zd(r))}function zB(r,e,t){if(!cC(t)||!ci(t)){const n=OB(t);throw n==="an object"?e.createError(r+" a custom object"):e.createError(r+" "+n)}}function Jr(r,e,t){if((e=Ge(e))instanceof Jo)return e._internalPath;if(typeof e=="string")return uC(r,e);throw yo("Field path arguments must be of type string or ",r,!1,void 0,t)}const p_=new RegExp("[~\\*/\\[\\]]");function uC(r,e,t){if(e.search(p_)>=0)throw yo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Jo(...e.split("."))._internalPath}catch{throw yo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function yo(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let B=`Function ${e}() called with invalid data`;t&&(B+=" (via `toFirestore()`)"),B+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${n}`),o&&(l+=` in document ${s}`),l+=")"),new $(V.INVALID_ARGUMENT,B+r+l)}function hC(r,e){return r.some(t=>t.isEqual(e))}function g_(r){return typeof r._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const n=Qe.empty();for(const s in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(s)){const i=this.optionDefinitions[s];if(s in e){const o=e[s];let B;i.nestedOptions&&ci(o)?B={mapValue:{fields:new Ye(i.nestedOptions).getOptionsProto(t,o)}}:o&&(B=lr(o,t)??void 0),B&&n.set(_t.fromServerFormat(i.serverName),B)}}return n}getOptionsProto(e,t,n){const s=this._getKnownOptions(t,e);if(n){const i=new Map(Nm(n,(o,B)=>[_t.fromServerFormat(B),o!==void 0?lr(o,e):null]));s.setAll(i)}return s.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(r){return typeof r=="object"&&r!==null&&!!("nullValue"in r&&(r.nullValue===null||r.nullValue==="NULL_VALUE")||"booleanValue"in r&&(r.booleanValue===null||typeof r.booleanValue=="boolean")||"integerValue"in r&&(r.integerValue===null||typeof r.integerValue=="number"||typeof r.integerValue=="string")||"doubleValue"in r&&(r.doubleValue===null||typeof r.doubleValue=="number")||"timestampValue"in r&&(r.timestampValue===null||function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")}(r.timestampValue))||"stringValue"in r&&(r.stringValue===null||typeof r.stringValue=="string")||"bytesValue"in r&&(r.bytesValue===null||r.bytesValue instanceof Uint8Array)||"referenceValue"in r&&(r.referenceValue===null||typeof r.referenceValue=="string")||"geoPointValue"in r&&(r.geoPointValue===null||function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")}(r.geoPointValue))||"arrayValue"in r&&(r.arrayValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))}(r.arrayValue))||"mapValue"in r&&(r.mapValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!ci(t.fields))}(r.mapValue))||"fieldReferenceValue"in r&&(r.fieldReferenceValue===null||typeof r.fieldReferenceValue=="string")||"functionValue"in r&&(r.functionValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))}(r.functionValue))||"pipelineValue"in r&&(r.pipelineValue===null||function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))}(r.pipelineValue)))}function E_(r){return new ct(r)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(r){let e;return r instanceof hr?r:(e=ci(r)?T_(r):r instanceof Array?A_(r):dC(r,void 0),e)}function Ga(r){if(r instanceof hr)return r;if(r instanceof ct)return Xs(r);if(Array.isArray(r))return Xs(E_(r));throw new Error("Unsupported value: "+typeof r)}function QB(r){return Vm(r)?y_(r):J(r)}class hr{constructor(){this._protoValueType="ProtoValue"}add(e){return new F("add",[this,J(e)],"add")}asBoolean(){if(this instanceof Fn)return this;if(this instanceof Yr)return new fC(this);if(this instanceof gi)return new I_(this);if(this instanceof F)return new CC(this);throw new $("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new F("subtract",[this,J(e)],"subtract")}multiply(e){return new F("multiply",[this,J(e)],"multiply")}divide(e){return new F("divide",[this,J(e)],"divide")}mod(e){return new F("mod",[this,J(e)],"mod")}equal(e){return new F("equal",[this,J(e)],"equal").asBoolean()}notEqual(e){return new F("not_equal",[this,J(e)],"notEqual").asBoolean()}lessThan(e){return new F("less_than",[this,J(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new F("less_than_or_equal",[this,J(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new F("greater_than",[this,J(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new F("greater_than_or_equal",[this,J(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const n=[e,...t].map(s=>J(s));return new F("array_concat",[this,...n],"arrayConcat")}arrayContains(e){return new F("array_contains",[this,J(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Rs(e.map(J),"arrayContainsAll"):e;return new F("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Rs(e.map(J),"arrayContainsAny"):e;return new F("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new F("array_reverse",[this])}arrayLength(){return new F("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Rs(e.map(J),"equalAny"):e;return new F("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Rs(e.map(J),"notEqualAny"):e;return new F("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new F("exists",[this],"exists").asBoolean()}charLength(){return new F("char_length",[this],"charLength")}like(e){return new F("like",[this,J(e)],"like").asBoolean()}regexContains(e){return new F("regex_contains",[this,J(e)],"regexContains").asBoolean()}regexFind(e){return new F("regex_find",[this,J(e)],"regexFind")}regexFindAll(e){return new F("regex_find_all",[this,J(e)],"regexFindAll")}regexMatch(e){return new F("regex_match",[this,J(e)],"regexMatch").asBoolean()}stringContains(e){return new F("string_contains",[this,J(e)],"stringContains").asBoolean()}startsWith(e){return new F("starts_with",[this,J(e)],"startsWith").asBoolean()}endsWith(e){return new F("ends_with",[this,J(e)],"endsWith").asBoolean()}toLower(){return new F("to_lower",[this],"toLower")}toUpper(){return new F("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(J(e)),new F("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(J(e)),new F("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(J(e)),new F("rtrim",t,"rtrim")}type(){return new F("type",[this])}isType(e){return new F("is_type",[this,Xs(e)],"isType").asBoolean()}stringConcat(e,...t){const n=[e,...t].map(J);return new F("string_concat",[this,...n],"stringConcat")}stringIndexOf(e){return new F("string_index_of",[this,J(e)],"stringIndexOf")}stringRepeat(e){return new F("string_repeat",[this,J(e)],"stringRepeat")}stringReplaceAll(e,t){return new F("string_replace_all",[this,J(e),J(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new F("string_replace_one",[this,J(e),J(t)],"stringReplaceOne")}concat(e,...t){const n=[e,...t].map(J);return new F("concat",[this,...n],"concat")}reverse(){return new F("reverse",[this],"reverse")}arrayFilter(e,t){return new F("array_filter",[this,J(e),t],"arrayFilter")}arrayTransform(e,t){return new F("array_transform",[this,J(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,n){return new F("array_transform",[this,J(e),J(t),n],"arrayTransformWithIndex")}arraySlice(e,t){const n=[this,J(e)];return t!==void 0&&n.push(J(t)),new F("array_slice",n,"arraySlice")}arrayFirst(){return new F("array_first",[this],"arrayFirst")}arrayFirstN(e){return new F("array_first_n",[this,J(e)],"arrayFirstN")}arrayLast(){return new F("array_last",[this],"arrayLast")}arrayLastN(e){return new F("array_last_n",[this,J(e)],"arrayLastN")}arrayMaximum(){return new F("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new F("maximum_n",[this,J(e)],"arrayMaximumN")}arrayMinimum(){return new F("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new F("minimum_n",[this,J(e)],"arrayMinimumN")}arrayIndexOf(e){return new F("array_index_of",[this,J(e),J("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new F("array_index_of",[this,J(e),J("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new F("array_index_of_all",[this,J(e)],"arrayIndexOfAll")}byteLength(){return new F("byte_length",[this],"byteLength")}ceil(){return new F("ceil",[this])}floor(){return new F("floor",[this])}abs(){return new F("abs",[this])}exp(){return new F("exp",[this])}mapGet(e){return new F("map_get",[this,Xs(e)],"mapGet")}mapSet(e,t,...n){const s=[this,J(e),J(t),...n.map(J)];return new F("map_set",s,"mapSet")}mapKeys(){return new F("map_keys",[this],"mapKeys")}mapValues(){return new F("map_values",[this],"mapValues")}mapEntries(){return new F("map_entries",[this],"mapEntries")}getField(e){return new F("get_field",[this,J(e)],"get_field")}count(){return pt._create("count",[this],"count")}sum(){return pt._create("sum",[this],"sum")}average(){return pt._create("average",[this],"average")}minimum(){return pt._create("minimum",[this],"minimum")}maximum(){return pt._create("maximum",[this],"maximum")}first(){return pt._create("first",[this],"first")}last(){return pt._create("last",[this],"last")}arrayAgg(){return pt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return pt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return pt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const n=[e,...t];return new F("maximum",[this,...n.map(J)],"logicalMaximum")}logicalMinimum(e,...t){const n=[e,...t];return new F("minimum",[this,...n.map(J)],"minimum")}vectorLength(){return new F("vector_length",[this],"vectorLength")}cosineDistance(e){return new F("cosine_distance",[this,Ga(e)],"cosineDistance")}dotProduct(e){return new F("dot_product",[this,Ga(e)],"dotProduct")}euclideanDistance(e){return new F("euclidean_distance",[this,Ga(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new F("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new F("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new F("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new F("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new F("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new F("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new F("timestamp_add",[this,J(e),J(t)],"timestampAdd")}timestampSubtract(e,t){return new F("timestamp_subtract",[this,J(e),J(t)],"timestampSubtract")}timestampDiff(e,t){return new F("timestamp_diff",[this,QB(e),J(t)],"timestampDiff")}timestampExtract(e,t){const n=[this,J(e)];return t&&n.push(J(t)),new F("timestamp_extract",n,"timestampExtract")}documentId(){return new F("document_id",[this],"documentId")}parent(){return new F("parent",[this],"parent")}substring(e,t){const n=J(e);return new F("substring",t===void 0?[this,n]:[this,n,J(t)],"substring")}arrayGet(e){return new F("array_get",[this,J(e)],"arrayGet")}isError(){return new F("is_error",[this],"isError").asBoolean()}ifError(e){const t=new F("if_error",[this,J(e)],"ifError");return e instanceof Fn?t.asBoolean():t}isAbsent(){return new F("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new F("map_remove",[this,J(e)],"mapRemove")}mapMerge(e,...t){const n=J(e),s=t.map(J);return new F("map_merge",[this,n,...s],"mapMerge")}pow(e){return new F("pow",[this,J(e)])}trunc(e){return e===void 0?new F("trunc",[this]):new F("trunc",[this,J(e)],"trunc")}round(e){return e===void 0?new F("round",[this]):new F("round",[this,J(e)],"round")}collectionId(){return new F("collection_id",[this])}length(){return new F("length",[this])}ln(){return new F("ln",[this])}sqrt(){return new F("sqrt",[this])}stringReverse(){return new F("string_reverse",[this])}ifAbsent(e){return new F("if_absent",[this,J(e)],"ifAbsent")}ifNull(e){return new F("if_null",[this,J(e)],"ifNull")}coalesce(e,...t){return new F("coalesce",[this,J(e),...t.map(J)],"coalesce")}join(e){return new F("join",[this,J(e)],"join")}log10(){return new F("log10",[this])}arraySum(){return new F("sum",[this])}split(e){return new F("split",[this,J(e)])}timestampTruncate(e,t){const n=[this,J(e)];return t&&n.push(J(t)),new F("timestamp_trunc",n)}ascending(){return v_(this)}descending(){return R_(this)}as(e){return new D_(this,e,"as")}}class pt{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,n){const s=new pt(e,t);return s._methodName=n,s}as(e){return new __(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map(t=>t._toProto(e))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e))}}class __{constructor(e,t,n){this.aggregate=e,this.alias=t,this._methodName=n}_readUserData(e){this.aggregate._readUserData(e)}}class D_{constructor(e,t,n){this.expr=e,this.alias=t,this._methodName=n,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Rs extends hr{constructor(e,t){super(),this.ur=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.ur.map(t=>t._toProto(e))}}}_readUserData(e){this.ur.forEach(t=>t._readUserData(e))}}class gi extends hr{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new F("geo_distance",[this,J(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function y_(r){return w_(r,"field")}function w_(r,e){return new gi(typeof r=="string"?Vr===r?VE()._internalPath:Jr("field",r):r._internalPath,e)}class Yr extends hr{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Yr(e,void 0);return t._protoValue=e,t}_toProto(e){return z(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,m_(this._protoValue)||(this._protoValue=lr(this.value,e))}}function Xs(r,e){return dC(r,"constant")}function dC(r,e){const t=new Yr(r,e);return typeof r=="boolean"?new fC(t):t}class F extends hr{constructor(e,t,n,s){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,n!==void 0&&(this._methodName=n),s!==void 0&&(this._options=s)}get _optionsUtil(){return new Ye({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map(n=>n._toProto(e))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach(t=>t._readUserData(e)),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class Fn extends hr{get _methodName(){return this._expr._methodName}countIf(){return pt._create("count_if",[this],"countIf")}not(){return new F("not",[this],"not").asBoolean()}conditional(e,t){return new F("conditional",[this,e,t],"conditional")}ifError(e){const t=J(e),n=new F("if_error",[this,t],"ifError");return t instanceof Fn?n.asBoolean():n}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class CC extends Fn{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class fC extends Fn{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class I_ extends Fn{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function T_(r,e){const t=[];for(const n in r)if(Object.prototype.hasOwnProperty.call(r,n)){const s=r[n];t.push(Xs(n)),t.push(J(s))}return new F("map",t,"map")}function A_(r){return function(t,n){return new F("array",t.map(s=>J(s)),n)}(r,"array")}function v_(r){return new pC(QB(r),"ascending","ascending")}function R_(r){return new pC(QB(r),"descending","descending")}class pC{constructor(e,t,n){this.expr=e,this.direction=t,this._methodName=n,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:eC(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class gC extends yt{get _name(){return"add_fields"}get _optionsUtil(){return new Ye({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[Ys(e,this.fields)]}}_readUserData(e){super._readUserData(e),Ln(this.fields,e)}}class mC extends yt{get _name(){return"aggregate"}get _optionsUtil(){return new Ye({})}constructor(e,t,n){super(n),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[Ys(e,this.accumulators),Ys(e,this.groups)]}}_readUserData(e){super._readUserData(e),Ln(this.groups,e),Ln(this.accumulators,e)}}class EC extends yt{get _name(){return"distinct"}get _optionsUtil(){return new Ye({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[Ys(e,this.groups)]}}_readUserData(e){super._readUserData(e),Ln(this.groups,e)}}class $o extends yt{get _name(){return"collection"}get _optionsUtil(){return new Ye({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Er=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Er}]}}_readUserData(e){super._readUserData(e)}}class zo extends yt{get _name(){return"collection_group"}get _optionsUtil(){return new Ye({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class WB extends yt{get _name(){return"database"}get _optionsUtil(){return new Ye({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class YB extends yt{get _name(){return"documents"}get _optionsUtil(){return new Ye({})}constructor(e,t){if(super(t),!e||e.length===0)throw new $(V.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const n=e.map(i=>i.startsWith("/")?i:"/"+i),s=new Set(n);if(s.size!==n.length)throw new $(V.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.hr=n,this.Tr=s}_toProto(e){return{...super._toProto(e),args:this.hr.map(t=>({referenceValue:t}))}}_readUserData(e){super._readUserData(e)}}class XB extends yt{get _name(){return"where"}get _optionsUtil(){return new Ye({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),Ln(this.condition,e)}}class Zs extends yt{get _name(){return"limit"}get _optionsUtil(){return new Ye({})}constructor(e,t){z(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[xB(e,this.limit)]}}}class Qu extends yt{get _name(){return"offset"}get _optionsUtil(){return new Ye({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[xB(e,this.offset)]}}}class b_ extends yt{get _name(){return"select"}get _optionsUtil(){return new Ye({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[Ys(e,this.selections)]}}_readUserData(e){super._readUserData(e),Ln(this.selections,e)}}class ZB extends yt{get _name(){return"sort"}get _optionsUtil(){return new Ye({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map(t=>t._toProto(e))}}_readUserData(e){super._readUserData(e),Ln(this.orderings,e)}}class el extends yt{get _name(){return"replace_with"}get _optionsUtil(){return new Ye({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),eC(el.Pr)]}}_readUserData(e){super._readUserData(e),Ln(this.map,e)}}el.Pr="full_replace";function Ln(r,e){return g_(r)?r._readUserData(e):Array.isArray(r)?r.forEach(t=>t._readUserData(e)):r instanceof Map?r.forEach(t=>t._readUserData(e)):Object.values(r).forEach(t=>t._readUserData(e)),r}// Copyright 2024 Google LLC* @license
class Bt{constructor(e,t,n){this.serializer=e,this.stages=t,this.listenOptions=n,this.isCorePipeline=!0}getPipelineCollection(){return Qo(this)}getPipelineCollectionGroup(){return tl(this)}getPipelineCollectionId(){return P_(this)}getPipelineDocuments(){return fB(this)}getPipelineFlavor(){return function(t){let n="exact";return t.stages.forEach((s,i)=>{s._name!==EC.name&&s._name!==mC.name||(n="keyless"),s._name===b_.name&&n==="exact"&&(n="augmented"),s._name===gC.name&&i<t.stages.length-1&&n==="exact"&&(n="augmented")}),n}(this)}getPipelineSourceType(){return An(this)}}function An(r){const e=r.stages[0];return e instanceof $o||e instanceof zo||e instanceof WB||e instanceof YB?e._name:"unknown"}function Qo(r){if(An(r)==="collection")return r.stages[0].Er}function tl(r){if(An(r)==="collection_group")return r.stages[0].collectionId}function P_(r){switch(An(r)){case"collection":return Ce.fromString(Qo(r)).lastSegment();case"collection_group":return tl(r);default:return}}function fB(r){if(An(r)==="documents")return r.stages[0].hr}class w{constructor(e,t){this.type=e,this.value=t}static dr(){return new w("ERROR",void 0)}static mr(){return new w("UNSET",void 0)}static pr(){return new w("NULL",Gr)}static newValue(e){return Et(e)?new w("NULL",Gr):function(n){return!!n&&"booleanValue"in n}(e)?new w("BOOLEAN",e):Nt(e)?new w("INT",e):Xn(e)?new w("DOUBLE",e):function(n){return!!n&&"timestampValue"in n&&!!n.timestampValue}(e)?new w("TIMESTAMP",e):function(n){return!!n&&"stringValue"in n}(e)?new w("STRING",e):function(n){return!!n&&"bytesValue"in n}(e)?new w("BYTES",e):e.referenceValue?new w("REFERENCE",e):e.geoPointValue?new w("GEO_POINT",e):Ur(e)?new w("ARRAY",e):Co(e)?new w("VECTOR",e):nr(e)?new w("MAP",e):new w("ERROR",void 0)}gr(){return this.type==="ERROR"||this.type==="UNSET"}yr(){return this.type==="NULL"}}function ks(r){if(!r.gr())return r.value}function _C(r){return r instanceof Fn?r._expr:r}function te(r){if((r=_C(r))instanceof gi)return new S_(r);if(r instanceof Yr)return new N_(r);if(r instanceof Rs)return new O_(r);if(r instanceof F){if(r.name==="add")return new x_(r);if(r.name==="subtract")return new k_(r);if(r.name==="multiply")return new V_(r);if(r.name==="divide")return new M_(r);if(r.name==="mod")return new G_(r);if(r.name==="and")return new H_(r);if(r.name==="equal")return new Z_(r);if(r.name==="not_equal")return new eD(r);if(r.name==="less_than")return new tD(r);if(r.name==="less_than_or_equal")return new nD(r);if(r.name==="greater_than")return new rD(r);if(r.name==="greater_than_or_equal")return new sD(r);if(r.name==="array_concat")return new iD(r);if(r.name==="array_reverse")return new oD(r);if(r.name==="array_contains")return new aD(r);if(r.name==="array_contains_all")return new BD(r);if(r.name==="array_contains_any")return new lD(r);if(r.name==="array_length")return new cD(r);if(r.name==="array_element")return new uD(r);if(r.name==="equal_any")return new DC(r);if(r.name==="not_equal_any")return new J_(r);if(r.name==="is_nan")return new j_(r);if(r.name==="is_not_nan")return new q_(r);if(r.name==="is_null")return new K_(r);if(r.name==="is_not_null")return new $_(r);if(r.name==="is_error")return new z_(r);if(r.name==="exists")return new Q_(r);if(r.name==="not")return new Wo(r);if(r.name==="or")return new U_(r);if(r.name==="xor")return new nl(r);if(r.name==="conditional")return new W_(r);if(r.name==="maximum")return new Y_(r);if(r.name==="minimum")return new X_(r);if(r.name==="reverse")return new hD(r);if(r.name==="replace_first")return new dD(r);if(r.name==="replace_all")return new CD(r);if(r.name==="char_length")return new fD(r);if(r.name==="byte_length")return new pD(r);if(r.name==="like")return new gD(r);if(r.name==="regex_contains")return new mD(r);if(r.name==="regex_match")return new ED(r);if(r.name==="string_contains")return new _D(r);if(r.name==="starts_with")return new DD(r);if(r.name==="ends_with")return new yD(r);if(r.name==="to_lower")return new wD(r);if(r.name==="to_upper")return new ID(r);if(r.name==="trim")return new TD(r);if(r.name==="string_concat")return new AD(r);if(r.name==="map_get")return new vD(r);if(r.name==="cosine_distance")return new RD(r);if(r.name==="dot_product")return new bD(r);if(r.name==="euclidean_distance")return new PD(r);if(r.name==="vector_length")return new SD(r);if(r.name==="unix_micros_to_timestamp")return new xD(r);if(r.name==="timestamp_to_unix_micros")return new MD(r);if(r.name==="unix_millis_to_timestamp")return new kD(r);if(r.name==="timestamp_to_unix_millis")return new GD(r);if(r.name==="unix_seconds_to_timestamp")return new VD(r);if(r.name==="timestamp_to_unix_seconds")return new HD(r);if(r.name==="timestamp_add")return new UD(r);if(r.name==="timestamp_subtract")return new JD(r)}throw new Error(`Unknown Expr : ${r}`)}class S_{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Vr)return w.newValue({referenceValue:Ws(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return w.newValue({timestampValue:io(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return w.newValue({timestampValue:io(e.serializer,t.createTime)});const n=t.data.field(this.expr._fieldPath);return n?Lo(n)?w.newValue(function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:io(i.serializer,ne.fromTimestamp(Mr(o)))};if(i.serverTimestampBehavior==="previous"){const B=hi(o);if(B)return B}return{nullValue:"NULL_VALUE"}}(e,n)):w.newValue(n):w.mr()}}class N_{constructor(e){this.expr=e}evaluate(e,t){return w.newValue(this.expr._getValue())}}class O_{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.ur.map(s=>te(s).evaluate(e,t));return n.some(s=>s.gr())?w.dr():w.newValue({arrayValue:{values:n.map(s=>s.value)}})}}function Ke(r){return Xn(r)?Number(r.doubleValue):Number(r.integerValue)}function Gt(r){return BigInt(r.integerValue)}const F_=BigInt("0x7fffffffffffffff"),L_=-BigInt("0x8000000000000000");class mi{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length>=2,24778);const n=te(this.expr.params[0]).evaluate(e,t),s=te(this.expr.params[1]).evaluate(e,t);let i=this.wr(n,s);for(const o of this.expr.params.slice(2)){const B=te(o).evaluate(e,t);i=this.wr(i,B)}return i}wr(e,t){if(e.gr()||t.gr())return w.dr();if(e.yr()||t.yr())return w.pr();const n=e.value,s=t.value;if(!Xn(n)&&!Nt(n)||!Xn(s)&&!Nt(s))return w.dr();if(Xn(n)||Xn(s)){const i=this.br(n,s);return i?w.newValue(i):w.dr()}if(Nt(n)&&Nt(s)){const i=this.Sr(n,s);return i===void 0?w.dr():typeof i=="number"?w.newValue({doubleValue:i}):i<L_||i>F_?w.dr():w.newValue({integerValue:`${i}`})}return w.dr()}}function Xt(r,e){return xe(r)!==xe(e)?"TYPE_MISMATCH":dt(r)||dt(e)?"NOT_EQ":Et(r)&&Et(e)?"EQ":Et(r)||Et(e)?"NULL":Ur(r)&&Ur(e)?function(n,s){var o,B,l;if(((o=n.values)==null?void 0:o.length)!==((B=s.values)==null?void 0:B.length))return"NOT_EQ";let i=!1;for(let c=0;c<(((l=n.values)==null?void 0:l.length)??0);c++){const h=n.values[c],C=s.values[c];switch(Xt(h,C)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:Y(44609,{vr:h,Dr:C})}}return i?"NULL":"EQ"}(r.arrayValue,e.arrayValue):Co(r)&&Co(e)||nr(r)&&nr(e)?function(n,s){const i=n.fields||{},o=s.fields||{};if(ho(i)!==ho(o))return"NOT_EQ";let B=!1;for(const l in i)if(i.hasOwnProperty(l)){if(o[l]===void 0)return"NOT_EQ";switch(Xt(i[l],o[l])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":B=!0}}return B?"NULL":"EQ"}(r.mapValue,e.mapValue):function(n,s){return It(n,s,{o:!1,t:!0,i:!0})}(r,e)?"EQ":"NOT_EQ"}class x_ extends mi{Sr(e,t){return Gt(e)+Gt(t)}br(e,t){return{doubleValue:Ke(e)+Ke(t)}}}class k_ extends mi{constructor(e){super(e),this.expr=e}Sr(e,t){return Gt(e)-Gt(t)}br(e,t){return{doubleValue:Ke(e)-Ke(t)}}}class V_ extends mi{constructor(e){super(e),this.expr=e}Sr(e,t){return Gt(e)*Gt(t)}br(e,t){return{doubleValue:Ke(e)*Ke(t)}}}class M_ extends mi{constructor(e){super(e),this.expr=e}Sr(e,t){const n=Gt(t);if(n!==BigInt(0))return Gt(e)/n}br(e,t){const n=Ke(t);return n===0?{doubleValue:Js(n)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:Ke(e)/n}}}class G_ extends mi{constructor(e){super(e),this.expr=e}Sr(e,t){const n=Gt(t);if(n!==BigInt(0))return Gt(e)%n}br(e,t){const n=Ke(t);if(n!==0)return{doubleValue:Ke(e)%n}}}class H_{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,s=!1;for(const o of this.expr.params){const B=te(o).evaluate(e,t);switch(B.type){case"BOOLEAN":if(!((i=B.value)!=null&&i.booleanValue))return w.newValue(je);break;case"NULL":s=!0;break;default:n=!0}}return n?w.dr():s?w.pr():w.newValue(ut)}}class Wo{constructor(e){this.expr=e}evaluate(e,t){var s;z(this.expr.params.length===1,9634);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return w.newValue({booleanValue:!((s=n.value)!=null&&s.booleanValue)});case"NULL":return w.pr();default:return w.dr()}}}class U_{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,s=!1;for(const o of this.expr.params){const B=te(o).evaluate(e,t);switch(B.type){case"BOOLEAN":if((i=B.value)!=null&&i.booleanValue)return w.newValue(ut);break;case"NULL":s=!0;break;default:n=!0}}return n?w.dr():s?w.pr():w.newValue(je)}}class nl{constructor(e){this.expr=e}evaluate(e,t){var i;let n=!1,s=!1;for(const o of this.expr.params){const B=te(o).evaluate(e,t);switch(B.type){case"BOOLEAN":n=nl.xor(n,!!((i=B.value)!=null&&i.booleanValue));break;case"NULL":s=!0;break;default:return w.dr()}}return s?w.pr():w.newValue({booleanValue:n})}static xor(e,t){return(e||t)&&!(e&&t)}}class DC{constructor(e){this.expr=e}evaluate(e,t){var o,B;z(this.expr.params.length===2,55094);let n=!1;const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"NULL":n=!0;break;case"ERROR":case"UNSET":return w.dr()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.dr()}if(n)return w.pr();for(const l of((B=(o=i.value)==null?void 0:o.arrayValue)==null?void 0:B.values)??[])switch(Et(s.value)&&Et(l)?"EQ":Xt(s.value,l)){case"EQ":return w.newValue(ut);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Y(44608,{value:s.value,candidate:l})}return n?w.pr():w.newValue(je)}}class J_{constructor(e){this.expr=e}evaluate(e,t){return new Wo(new F("not",[new F("equal_any",this.expr.params)])).evaluate(e,t)}}class j_{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,23322);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return w.newValue(je);case"DOUBLE":return w.newValue({booleanValue:isNaN(Ke(n.value))});case"NULL":return w.pr();default:return w.dr()}}}class q_{constructor(e){this.expr=e}evaluate(e,t){return z(this.expr.params.length===1,50406),new Wo(new F("not",[new F("is_nan",this.expr.params)])).evaluate(e,t)}}class K_{constructor(e){this.expr=e}evaluate(e,t){switch(z(this.expr.params.length===1,23123),te(this.expr.params[0]).evaluate(e,t).type){case"NULL":return w.newValue(ut);case"UNSET":case"ERROR":return w.dr();default:return w.newValue(je)}}}class $_{constructor(e){this.expr=e}evaluate(e,t){return z(this.expr.params.length===1,23167),new Wo(new F("not",[new F("is_null",this.expr.params)])).evaluate(e,t)}}class z_{constructor(e){this.expr=e}evaluate(e,t){return z(this.expr.params.length===1,5228),te(this.expr.params[0]).evaluate(e,t).type==="ERROR"?w.newValue(ut):w.newValue(je)}}class Q_{constructor(e){this.expr=e}evaluate(e,t){switch(z(this.expr.params.length===1,6877),te(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return w.dr();case"UNSET":return w.newValue(je);default:return w.newValue(ut)}}}class W_{constructor(e){this.expr=e}evaluate(e,t){var s;z(this.expr.params.length===3,11706);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return(s=n.value)!=null&&s.booleanValue?te(this.expr.params[1]).evaluate(e,t):te(this.expr.params[2]).evaluate(e,t);case"NULL":return te(this.expr.params[2]).evaluate(e,t);default:return w.dr()}}}class Y_{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map(i=>te(i).evaluate(e,t));let s;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||ht(i.value,s.value)>0?i:s}return s===void 0?w.pr():s}}class X_{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map(i=>te(i).evaluate(e,t));let s;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:s=s===void 0||ht(i.value,s.value)<0?i:s}return s===void 0?w.pr():s}}class Xr{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"ERROR":case"UNSET":return w.dr()}const s=te(this.expr.params[1]).evaluate(e,t);switch(s.type){case"ERROR":case"UNSET":return w.dr()}return this.Cr(n,s)}}class Z_ extends Xr{constructor(e){super(e),this.expr=e}Cr(e,t){if(e.yr()&&t.yr())return w.newValue(ut);if(e.yr()||t.yr()||dt(e.value)||dt(t.value)||xe(e.value)!==xe(t.value))return w.newValue(je);switch(Xt(e.value,t.value)){case"EQ":return w.newValue(ut);case"NOT_EQ":return w.newValue(je);case"NULL":return w.pr();default:Y(44615,{left:e,right:t})}}}class eD extends Xr{constructor(e){super(e),this.expr=e}Cr(e,t){switch(Xt(e.value,t.value)){case"EQ":return w.newValue(je);case"NOT_EQ":case"TYPE_MISMATCH":return w.newValue(ut);case"NULL":return w.pr();default:Y(44614,{left:e,right:t})}}}class tD extends Xr{constructor(e){super(e),this.expr=e}Cr(e,t){return xe(e.value)!==xe(t.value)||dt(e.value)||dt(t.value)?w.newValue(je):w.newValue({booleanValue:ht(e.value,t.value)<0})}}class nD extends Xr{constructor(e){super(e),this.expr=e}Cr(e,t){return xe(e.value)!==xe(t.value)||dt(e.value)||dt(t.value)?w.newValue(je):Xt(e.value,t.value)==="EQ"?w.newValue(ut):w.newValue({booleanValue:ht(e.value,t.value)<0})}}class rD extends Xr{constructor(e){super(e),this.expr=e}Cr(e,t){return xe(e.value)!==xe(t.value)||dt(e.value)||dt(t.value)?w.newValue(je):w.newValue({booleanValue:ht(e.value,t.value)>0})}}class sD extends Xr{constructor(e){super(e),this.expr=e}Cr(e,t){return xe(e.value)!==xe(t.value)||dt(e.value)||dt(t.value)?w.newValue(je):Xt(e.value,t.value)==="EQ"?w.newValue(ut):w.newValue({booleanValue:ht(e.value,t.value)>0})}}class iD{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class oD{constructor(e){this.expr=e}evaluate(e,t){var s;z(this.expr.params.length===1,216);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.pr();case"ARRAY":{const i=((s=n.value.arrayValue)==null?void 0:s.values)??[];return w.newValue({arrayValue:{values:[...i].reverse()}})}default:return w.dr()}}}class aD{constructor(e){this.expr=e}evaluate(e,t){return z(this.expr.params.length===2,52884),new DC(new F("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class BD{constructor(e){this.expr=e}evaluate(e,t){var l,c,h,C;z(this.expr.params.length===2,1392);let n=!1;const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.dr()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.dr()}if(n)return w.pr();const o=((c=(l=i.value)==null?void 0:l.arrayValue)==null?void 0:c.values)??[],B=((C=(h=s.value)==null?void 0:h.arrayValue)==null?void 0:C.values)??[];for(const p of o){let _=!1;n=!1;for(const A of B){switch(Et(p)&&Et(A)?"EQ":Xt(p,A)){case"EQ":_=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Y(44613,{value:A,search:p})}if(_)break}if(!_)return w.newValue(je)}return w.newValue(ut)}}class lD{constructor(e){this.expr=e}evaluate(e,t){var l,c,h,C;z(this.expr.params.length===2,2680);let n=!1;const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.dr()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.dr()}if(n)return w.pr();const o=((c=(l=i.value)==null?void 0:l.arrayValue)==null?void 0:c.values)??[],B=((C=(h=s.value)==null?void 0:h.arrayValue)==null?void 0:C.values)??[];for(const p of B)for(const _ of o)switch(Et(p)&&Et(_)?"EQ":Xt(p,_)){case"EQ":return w.newValue(ut);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Y(60403,{value:p,search:_})}return n?w.pr():w.newValue(je)}}class cD{constructor(e){this.expr=e}evaluate(e,t){var s,i,o;z(this.expr.params.length===1,38605);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.pr();case"ARRAY":return w.newValue({integerValue:`${((o=(i=(s=n.value)==null?void 0:s.arrayValue)==null?void 0:i.values)==null?void 0:o.length)??0}`});default:return w.dr()}}}class uD{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class hD{constructor(e){this.expr=e}evaluate(e,t){var s,i;z(this.expr.params.length===1,1508);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.pr();case"BYTES":{const o=(s=n.value)==null?void 0:s.bytesValue;if(typeof o=="string"){const B=Le.fromBase64String(o).toUint8Array();return B.reverse(),w.newValue({bytesValue:Le.fromUint8Array(B).toBase64()})}return w.newValue({bytesValue:new Uint8Array(o).reverse()})}case"STRING":{const o=(i=n.value)==null?void 0:i.stringValue,B=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(o),l=Array.from(B,c=>c.segment).reverse();return w.newValue({stringValue:l.join("")})}default:return w.dr()}}}class dD{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class CD{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class fD{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,19400);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.pr();case"STRING":{const s=function(o){let B=0;for(let l=0;l<o.length;l++){const c=o.codePointAt(l);if(c===void 0)return;if(c<=65535)if(c>=55296&&c<=57343)if(c<=56319){const h=o.codePointAt(l+1);h!==void 0&&h>=56320&&h<=57343?(B+=1,l++):B+=1}else B+=1;else B+=1;else{if(!(c<=1114111))return;B+=1,l++}}return B}(n.value.stringValue);return s===void 0?w.dr():w.newValue({integerValue:s})}default:return w.dr()}}}class pD{constructor(e){this.expr=e}evaluate(e,t){var s,i;z(this.expr.params.length===1,8486);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BYTES":{const o=(s=n.value)==null?void 0:s.bytesValue;return typeof o=="string"?w.newValue({integerValue:Le.fromBase64String(o).toUint8Array().length}):w.newValue({integerValue:new Uint8Array(o).length})}case"STRING":{const o=function(l){let c=0;for(let h=0;h<l.length;h++){const C=l.codePointAt(h);if(C===void 0)return;if(C>=55296&&C<=57343){if(!(C<=56319))return;{const p=l.codePointAt(h+1);if(p===void 0||!(p>=56320&&p<=57343))return;c+=4,h++}}else if(C<=127)c+=1;else if(C<=2047)c+=2;else if(C<=65535)c+=3;else{if(!(C<=1114111))return;c+=4,h++}}return c}((i=n.value)==null?void 0:i.stringValue);return o===void 0?w.dr():w.newValue({integerValue:o})}case"NULL":return w.pr();default:return w.dr()}}}class Zr{constructor(e){this.expr=e}evaluate(e,t){var o,B;z(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let n=!1;const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"STRING":break;case"NULL":n=!0;break;default:return w.dr()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":n=!0;break;default:return w.dr()}return n?w.pr():this.Fr((o=s.value)==null?void 0:o.stringValue,(B=i.value)==null?void 0:B.stringValue)}}class gD extends Zr{Fr(e,t){try{const n=function(o){let B="";for(let l=0;l<o.length;l++){const c=o.charAt(l);switch(c){case"_":B+=".";break;case"%":B+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":B+="\\"+c;break;default:B+=c}}return"^"+B+"$"}(t),s=PB.compile(n);return w.newValue({booleanValue:s.matches(e)})}catch(n){return Vt(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${n}`),w.dr()}}}class mD extends Zr{Fr(e,t){try{const n=PB.compile(t);return w.newValue({booleanValue:n.test(e)})}catch{return Vt(`Invalid regex pattern found in regex_contains: ${t}, returning error`),w.dr()}}}class ED extends Zr{Fr(e,t){try{return w.newValue({booleanValue:PB.compile(t).matches(e)})}catch{return Vt(`Invalid regex pattern found in regex_match: ${t}, returning error`),w.dr()}}}class _D extends Zr{Fr(e,t){return w.newValue({booleanValue:e.includes(t)})}}class DD extends Zr{Fr(e,t){return w.newValue({booleanValue:e.startsWith(t)})}}class yD extends Zr{Fr(e,t){return w.newValue({booleanValue:e.endsWith(t)})}}class wD{constructor(e){this.expr=e}evaluate(e,t){var s,i;z(this.expr.params.length===1,29079);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return w.newValue({stringValue:(i=(s=n.value)==null?void 0:s.stringValue)==null?void 0:i.toLowerCase()});case"NULL":return w.pr();default:return w.dr()}}}class ID{constructor(e){this.expr=e}evaluate(e,t){var s,i;z(this.expr.params.length===1,60487);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return w.newValue({stringValue:(i=(s=n.value)==null?void 0:s.stringValue)==null?void 0:i.toUpperCase()});case"NULL":return w.pr();default:return w.dr()}}}class TD{constructor(e){this.expr=e}evaluate(e,t){var s,i;z(this.expr.params.length===1,28544);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return w.newValue({stringValue:(i=(s=n.value)==null?void 0:s.stringValue)==null?void 0:i.trim()});case"NULL":return w.pr();default:return w.dr()}}}class AD{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map(o=>te(o).evaluate(e,t));let s="",i=!1;for(const o of n)switch(o.type){case"STRING":s+=o.value.stringValue;break;case"NULL":i=!0;break;default:return w.dr()}return i?w.pr():w.newValue({stringValue:s})}}class vD{constructor(e){this.expr=e}evaluate(e,t){var o,B,l,c;z(this.expr.params.length===2,4483);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"UNSET":return w.mr();case"MAP":break;default:return w.dr()}const s=te(this.expr.params[1]).evaluate(e,t);if(s.type!=="STRING")return w.dr();const i=(c=(B=(o=n.value)==null?void 0:o.mapValue)==null?void 0:B.fields)==null?void 0:c[(l=s.value)==null?void 0:l.stringValue];return i===void 0?w.mr():w.newValue(i)}}class rl{constructor(e){this.expr=e}evaluate(e,t){var c,h;z(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let n=!1;const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"VECTOR":break;case"NULL":n=!0;break;default:return w.dr()}const i=te(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":n=!0;break;default:return w.dr()}if(n)return w.pr();const o=BB(s.value),B=BB(i.value);if(o===void 0||B===void 0||((c=o.values)==null?void 0:c.length)!==((h=B.values)==null?void 0:h.length))return w.dr();const l=this.Or(o,B);return l===void 0||isNaN(l)?w.dr():w.newValue({doubleValue:l})}}class RD extends rl{Or(e,t){const n=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(n.length===0)return;let i=0,o=0,B=0;for(let c=0;c<n.length;c++){if(!Nn(n[c])||!Nn(s[c]))return;const h=Ke(n[c]),C=Ke(s[c]);i+=h*C,o+=h*h,B+=C*C}const l=Math.sqrt(o)*Math.sqrt(B);if(l!==0)return 1-Math.max(-1,Math.min(1,i/l))}}class bD extends rl{Or(e,t){const n=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!Nn(n[o])||!Nn(s[o]))return;i+=Ke(n[o])*Ke(s[o])}return i}}class PD extends rl{Or(e,t){const n=(e==null?void 0:e.values)??[],s=(t==null?void 0:t.values)??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!Nn(n[o])||!Nn(s[o]))return;const B=Ke(n[o]),l=Ke(s[o]);i+=Math.pow(B-l,2)}return Math.sqrt(i)}}class SD{constructor(e){this.expr=e}evaluate(e,t){var s;z(this.expr.params.length===1,39044);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"VECTOR":{const i=BB(n.value);return w.newValue({integerValue:((s=i==null?void 0:i.values)==null?void 0:s.length)??0})}case"NULL":return w.pr();default:return w.dr()}}}const ei=BigInt(-62135596800),ti=BigInt(253402300799),wo=BigInt(1e3),vn=BigInt(1e6),ND=ei*wo,OD=ti*wo+BigInt(999),FD=ei*vn,LD=ti*vn+BigInt(999999);function sl(r){return r>=FD&&r<=LD}function yC(r){return r>=ei&&r<=ti}function ni(r,e){const t=BigInt(r);return!(t<ei||t>ti)&&!(e<0||e>=1e9)&&(t!==ei||e===0)&&!(t===ti&&e>999999999)}function wC(r,e){return e<0?{seconds:r-1,nanos:e+1e9}:{seconds:r,nanos:e}}function il(r){return BigInt(r.seconds)*vn+BigInt(Math.trunc(r.nanoseconds/1e3))}class ol{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return this.toTimestamp(BigInt(n.value.integerValue));case"NULL":return w.pr();default:return w.dr()}}}class xD extends ol{toTimestamp(e){if(!sl(e))return w.dr();let t=Number(e/vn),n=Number(e%vn*BigInt(1e3));const s=wC(t,n);return t=s.seconds,n=s.nanos,ni(t,n)?w.newValue({timestampValue:{seconds:t,nanos:n}}):w.dr()}}class kD extends ol{toTimestamp(e){if(!function(o){return o>=ND&&o<=OD}(e))return w.dr();let t=Number(e/wo),n=Number(e%wo*BigInt(1e6));const s=wC(t,n);return t=s.seconds,n=s.nanos,ni(t,n)?w.newValue({timestampValue:{seconds:t,nanos:n}}):w.dr()}}class VD extends ol{toTimestamp(e){if(!yC(e))return w.dr();const t=Number(e);return w.newValue({timestampValue:{seconds:t,nanos:0}})}}class al{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const n=te(this.expr.params[0]).evaluate(e,t);switch(n.type){case"TIMESTAMP":break;case"NULL":return w.pr();default:return w.dr()}const s=HB(n.value.timestampValue);return ni(s.seconds,s.nanoseconds)?this.Mr(s):w.dr()}}class MD extends al{Mr(e){const t=il(e);return sl(t)?w.newValue({integerValue:`${t.toString()}`}):w.dr()}}class GD extends al{Mr(e){const t=il(e),n=t/BigInt(1e3),s=t%BigInt(1e3);return n>BigInt(0)||s===BigInt(0)?w.newValue({integerValue:n.toString()}):w.newValue({integerValue:(n-BigInt(1)).toString()})}}class HD extends al{Mr(e){const t=BigInt(e.seconds);return yC(t)?w.newValue({integerValue:t.toString()}):w.dr()}}class IC{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let n=!1;const s=te(this.expr.params[0]).evaluate(e,t);switch(s.type){case"TIMESTAMP":break;case"NULL":n=!0;break;default:return w.dr()}const i=te(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=function(ee){switch(ee){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}}(i.value.stringValue),o===void 0)return w.dr();break;case"NULL":n=!0;break;default:return w.dr()}const B=te(this.expr.params[2]).evaluate(e,t);switch(B.type){case"INT":break;case"NULL":n=!0;break;default:return w.dr()}if(n)return w.pr();const l=BigInt(B.value.integerValue);let c;try{switch(o){case"microsecond":c=l;break;case"millisecond":c=l*BigInt(1e3);break;case"second":c=l*BigInt(1e6);break;case"minute":c=l*BigInt(6e7);break;case"hour":c=l*BigInt(36e8);break;case"day":c=l*BigInt(864e8);break;default:return w.dr()}if(o!=="microsecond"&&l!==BigInt(0)&&c/l!==BigInt(this.Nr(o)))return w.dr()}catch(G){return Vt(`Error during timestamp arithmetic: ${G}`),w.dr()}const h=HB(s.value.timestampValue);if(!ni(h.seconds,h.nanoseconds))return w.dr();const C=il(h),p=this.Lr(C,c);if(!sl(p))return w.dr();const _=Number(p/vn),A=p%vn,L=Number((A<0?A+vn:A)*BigInt(1e3)),M=A<0?_-1:_;return ni(M,L)?w.newValue({timestampValue:{seconds:M,nanos:L}}):w.dr()}Nr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class UD extends IC{Lr(e,t){return e+t}}class JD extends IC{Lr(e,t){return e-t}}function ri(r){if((r=_C(r))instanceof gi)return`fld(${r.fieldName})`;if(r instanceof Yr)return`cst(${function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof Pe?`ref(${t.path})`:t instanceof ct?`vec(${JSON.stringify(t)})`:JSON.stringify(t)}(r.value)})`;if(r instanceof F)return`fn(${r.name},[${r.params.map(ri).join(",")}])`;if(r.expressionType==="ListOfExpressions")return`list([${r.ur.map(ri).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(r,null,2)}`)}function jD(r){if(r instanceof gC)return`${r._name}(${Yi(r.fields)})`;if(r instanceof mC){let e=`${r._name}(${Yi(r.accumulators)})`;return r.groups.size>0&&(e+=`grouping(${Yi(r.groups)})`),e}if(r instanceof EC)return`${r._name}(${Yi(r.groups)})`;if(r instanceof $o)return`${r._name}(${r.Er})`;if(r instanceof zo)return`${r._name}(${r.collectionId})`;if(r instanceof WB)return`${r._name}()`;if(r instanceof YB)return`${r._name}(${r.hr.sort()})`;if(r instanceof XB)return`${r._name}(${ri(r.condition)})`;if(r instanceof Zs)return`${r._name}(${r.limit})`;if(r instanceof ZB)return`${r._name}(${function(t){return t.map(n=>`${ri(n.expr)}${n.direction}`).join(",")}(r.orderings)})`;throw new Error(`Unrecognized stage ${r._name}`)}function Yi(r){return`${Array.from(r.entries()).sort().map(([e,t])=>`${e}=${ri(t)}`).join(",")}`}function Qt(r){return r.stages.map(e=>jD(e)).join("|")}function TC(r,e){return Qt(r)===Qt(e)}function Me(r){return r instanceof Bt}function Wu(r){return Me(r)?Qt(r):Fs(r)}function AC(r){return Me(r)?Qt(r):function(t){return`${Ld(Ft(t))}|lt:${t.limitType}`}(r)}function Yo(r,e){return r instanceof Bt&&e instanceof Bt?TC(r,e):!(r instanceof Bt&&!(e instanceof Bt)||!(r instanceof Bt)&&e instanceof Bt)&&cE(r,e)}function vC(r){return Wn(r)?Qt(r):Ld(r)}function RC(r,e){return r instanceof Bt&&e instanceof Bt?TC(r,e):!(r instanceof Bt&&!(e instanceof Bt)||!(r instanceof Bt)&&e instanceof Bt)&&xd(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&qm(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Ns(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Ns(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Ud();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let B=this.applyToLocalView(o,i.mutatedFields);B=t.has(s.key)?null:B;const l=Ad(o,B);l!==null&&n.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ne.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ae())}isEqual(e){return this.batchId===e.batchId&&kr(this.mutations,e.mutations,(t,n)=>vu(t,n))&&kr(this.baseMutations,e.baseMutations,(t,n)=>vu(t,n))}}class Bl{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){z(e.mutations.length===n.length,58842,{Br:e.mutations.length,Ur:n.length});let s=function(){return CE}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new Bl(e,t,n,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC="";function KD(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Yu(e)),e=$D(r.get(t),e);return Yu(e)}function $D(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case bC:t+="";break;default:t+=i}}return t}function Yu(r){return r+bC+""}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,t,n,s,i=ne.min(),o=ne.min(),B=Le.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=B,this.expectedCount=l}withSequenceNumber(e){return new Kt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QD{constructor(e){this.qr=e}}function WD(r){const e=SE({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?cB(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YD{constructor(){this.Yi=new XD}addToCollectionParentIndex(e,t){return this.Yi.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.Yi.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(On.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(On.min())}updateCollectionGroup(e,t,n){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class XD{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new Fe(Ce.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new Fe(Ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e){this.gs=e}next(){return this.gs+=2,this.gs}static ys(){return new xn(0)}static ws(){return new xn(-1)}}// Copyright 2024 Google LLC* @license
function PC(r,e){var n;let t=e;for(const s of r.stages)t=ey({serializer:r.serializer,serverTimestampBehavior:(n=r.listenOptions)==null?void 0:n.serverTimestampBehavior},s,t);return t}function Xo(r,e){return PC(r,[e]).length>0}function ZD(r,e){return Me(r)?Xo(r,e):Ho(r,e)}function ey(r,e,t){if(e instanceof $o)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&`/${B.key.getCollectionPath().canonicalString()}`===i.Er)}(0,e,t);if(e instanceof XB)return function(s,i,o){return o.filter(B=>{const l=ks(te(i.condition).evaluate(s,B));return l!==void 0&&It(l,ut)})}(r,e,t);if(e instanceof zo)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&B.key.getCollectionPath().lastSegment()===i.collectionId)}(0,e,t);if(e instanceof WB)return function(s,i,o){return o.filter(B=>B.isFoundDocument())}(0,0,t);if(e instanceof YB)return function(s,i,o){return o.filter(B=>B.isFoundDocument()&&i.Tr.has(B.key.path.toStringWithLeadingSlash()))}(0,e,t);if(e instanceof Zs)return function(s,i,o){return o.slice(0,i.limit)}(0,e,t);if(e instanceof ZB)return function(s,i,o){const B=i.orderings.map(l=>({Os:te(l.expr),direction:l.direction}));return[...o].sort((l,c)=>{for(const{Os:h,direction:C}of B){const p=ks(h.evaluate(s,l)),_=ks(h.evaluate(s,c)),A=ht(p??Gr,_??Gr);if(A!==0)return C==="ascending"?A:-A}return 0})}(r,e,t);throw new Error(`Unknown stage: ${e._name}`)}function pB(r){const e=function(n){for(let s=n.stages.length-1;s>=0;s--){const i=n.stages[s];if(i instanceof ZB)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")}(r);return(t,n)=>{for(const s of e){const i=ks(te(s.expr).evaluate({serializer:r.serializer},t)),o=ks(te(s.expr).evaluate({serializer:r.serializer},n)),B=ht(i||Gr,o||Gr);if(B!==0)return s.direction==="ascending"?B:-B}return 0}}function Ha(r){for(let e=r.stages.length-1;e>=0;e--){const t=r.stages[e];if(t instanceof Zs)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(){this.changes=new ur(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Je.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?x.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&Ns(n.mutation,s,mt.empty(),Ae.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,ae()).next(()=>n))}getLocalViewOfDocuments(e,t,n=ae()){const s=dn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=Tr();return i.forEach((B,l)=>{o=o.insert(B,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=dn();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,ae()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,B)=>{t.set(o,B)})})}computeViews(e,t,n,s){let i=lt();const o=Ls(),B=function(){return Ls()}();return t.forEach((l,c)=>{const h=n.get(c.key);s.has(c.key)&&(h===void 0||h.mutation instanceof Gn)?i=i.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),Ns(h.mutation,c,h.mutation.getFieldMask(),Ae.now())):o.set(c.key,mt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,h)=>o.set(c,h)),t.forEach((c,h)=>B.set(c,new ny(h,o.get(c)??null))),B))}recalculateAndSaveOverlays(e,t){const n=Ls();let s=new ve((o,B)=>o-B),i=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const B of o)B.keys().forEach(l=>{const c=t.get(l);if(c===null)return;let h=n.get(l)||mt.empty();h=B.applyToLocalView(c,h),n.set(l,h);const C=(s.get(B.batchId)||ae()).add(l);s=s.insert(B.batchId,C)})}).next(()=>{const o=[],B=s.getReverseIterator();for(;B.hasNext();){const l=B.getNext(),c=l.key,h=l.value,C=Ud();h.forEach(p=>{if(!i.has(p)){const _=Ad(t.get(p),n.get(p));_!==null&&C.set(p,_),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,C))}return x.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return Me(t)?this.getDocumentsMatchingPipeline(e,t,n,s):aE(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):BE(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):x.resolve(dn());let B=Qs,l=i;return o.next(c=>x.forEach(c,(h,C)=>(B<C.largestBatchId&&(B=C.largestBatchId),i.get(h)?x.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,ae())).next(h=>({batchId:B,changes:Hd(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Z(t)).next(n=>{let s=Tr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=Tr();return this.indexManager.getCollectionParents(e,i).next(B=>x.forEach(B,l=>{const c=function(C,p){return new Go(p,null,C.explicitOrderBy.slice(),C.filters.slice(),C.limit,C.limitType,C.startAt,C.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,n,s).next(h=>{h.forEach((C,p)=>{o=o.insert(C,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>this.retrieveMatchingLocalDocuments(i,o,B=>Ho(t,B)))}getDocumentsMatchingPipeline(e,t,n,s){if(An(t)==="collection_group"){const i=tl(t);let o=Tr();return this.indexManager.getCollectionParents(e,i).next(B=>x.forEach(B,l=>{const c=function(C,p){const _=C.stages.map(A=>A instanceof zo?new $o(p.canonicalString(),{}):A);return new Bt(C.serializer,_)}(t,l.child(i));return this.getDocumentsMatchingPipeline(e,c,n,s).next(h=>{h.forEach((C,p)=>{o=o.insert(C,p)})})}).next(()=>o))}{let i;return this.getOverlaysForPipeline(e,t,n.largestBatchId).next(o=>{switch(i=o,An(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s);case"documents":let B=ae();for(const l of fB(t))B=B.add(Z.fromPath(l));return this.remoteDocumentCache.getEntries(e,B);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new $("invalid-argument",`Invalid pipeline source to execute offline: ${Qt(t)}`)}}).next(o=>this.retrieveMatchingLocalDocuments(i,o,B=>Xo(t,B)))}}retrieveMatchingLocalDocuments(e,t,n){e.forEach((i,o)=>{const B=o.getKey();t.get(B)===null&&(t=t.insert(B,Je.newInvalidDocument(B)))});let s=Tr();return t.forEach((i,o)=>{const B=e.get(i);B!==void 0&&Ns(B.mutation,o,mt.empty(),Ae.now()),n(o)&&(s=s.insert(i,o))}),s}getOverlaysForPipeline(e,t,n){switch(An(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,Ce.fromString(Qo(t)),n);case"collection_group":throw new $("invalid-argument",`Unexpected collection group pipeline: ${Qt(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,fB(t).map(s=>Z.fromPath(s)));case"database":return this.documentOverlayCache.getAllOverlays(e,n);default:throw new $("invalid-argument",`Failed to get overlays for pipeline: ${Qt(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e){this.serializer=e,this.Ks=new Map,this.Qs=new Map}getBundleMetadata(e,t){return x.resolve(this.Ks.get(t))}saveBundleMetadata(e,t){return this.Ks.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Dt(s.createTime)}}(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.Qs.get(t))}saveNamedQuery(e,t){return this.Qs.set(t.name,function(s){return{name:s.name,query:WD(s.bundledQuery),readTime:Dt(s.readTime)}}(t)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(){this.overlays=new ve(Z.comparator),this.Ws=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const n=dn();return x.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}getAllOverlays(e,t){const n=dn();return this.overlays.forEach((s,i)=>{i.largestBatchId>t&&n.set(s,i)}),x.resolve(n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.Yr(e,t,i)}),x.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Ws.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ws.delete(n)),x.resolve()}getOverlaysForCollection(e,t,n){const s=dn(),i=t.length+1,o=new Z(t.child("")),B=this.overlays.getIteratorFrom(o);for(;B.hasNext();){const l=B.getNext().value,c=l.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return x.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new ve((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>n){let h=i.get(c.largestBatchId);h===null&&(h=dn(),i=i.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const B=dn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>B.set(c,h)),!(B.size()>=s)););return x.resolve(B)}Yr(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Ws.get(s.largestBatchId).delete(n.key);this.Ws.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new zD(t,n));let i=this.Ws.get(t);i===void 0&&(i=ae(),this.Ws.set(t,i)),this.Ws.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(){this.sessionToken=Le.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(){this.Gs=new Fe(Ue.zs),this.js=new Fe(Ue.Hs)}isEmpty(){return this.Gs.isEmpty()}addReference(e,t){const n=new Ue(e,t);this.Gs=this.Gs.add(n),this.js=this.js.add(n)}Js(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.Ys(new Ue(e,t))}Zs(e,t){e.forEach(n=>this.removeReference(n,t))}Xs(e){const t=new Z(new Ce([])),n=new Ue(t,e),s=new Ue(t,e+1),i=[];return this.js.forEachInRange([n,s],o=>{this.Ys(o),i.push(o.key)}),i}e_(){this.Gs.forEach(e=>this.Ys(e))}Ys(e){this.Gs=this.Gs.delete(e),this.js=this.js.delete(e)}t_(e){const t=new Z(new Ce([])),n=new Ue(t,e),s=new Ue(t,e+1);let i=ae();return this.js.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Ue(e,0),n=this.Gs.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Ue{constructor(e,t){this.key=e,this.n_=t}static zs(e,t){return Z.comparator(e.key,t.key)||Be(e.n_,t.n_)}static Hs(e,t){return Be(e.n_,t.n_)||Z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Wr=1,this.r_=new Fe(Ue.zs)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Wr;this.Wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new qD(i,t,n,s);this.mutationQueue.push(o);for(const B of s)this.r_=this.r_.add(new Ue(B.key,i)),this.indexManager.addToCollectionParentIndex(e,B.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,t){return x.resolve(this.i_(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.s_(n),i=s<0?0:s;return x.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?FB:this.Wr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Ue(t,0),s=new Ue(t,Number.POSITIVE_INFINITY),i=[];return this.r_.forEachInRange([n,s],o=>{const B=this.i_(o.n_);i.push(B)}),x.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Fe(Be);return t.forEach(s=>{const i=new Ue(s,0),o=new Ue(s,Number.POSITIVE_INFINITY);this.r_.forEachInRange([i,o],B=>{n=n.add(B.n_)})}),x.resolve(this.__(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;Z.isDocumentKey(i)||(i=i.child(""));const o=new Ue(new Z(i),0);let B=new Fe(Be);return this.r_.forEachWhile(l=>{const c=l.key.path;return!!n.isPrefixOf(c)&&(c.length===s&&(B=B.add(l.n_)),!0)},o),x.resolve(this.__(B))}__(e){const t=[];return e.forEach(n=>{const s=this.i_(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){z(this.o_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.r_;return x.forEach(t.mutations,s=>{const i=new Ue(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.r_=n})}jr(e){}containsKey(e,t){const n=new Ue(t,0),s=this.r_.firstAfterOrEqual(n);return x.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}o_(e,t){return this.s_(e)}s_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}i_(e){const t=this.s_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e){this.a_=e,this.docs=function(){return new ve(Z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.a_(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return x.resolve(n?n.document.mutableCopy():Je.newInvalidDocument(t))}getEntries(e,t){let n=lt();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():Je.newInvalidDocument(s))}),x.resolve(n)}getAllEntries(e){let t=lt();return this.docs.forEach((n,s)=>{t=t.insert(n,s.document)}),x.resolve(t)}getDocumentsMatchingQuery(e,t,n,s){let i,o;Me(t)?(i=Ce.fromString(Qo(t)),o=h=>Xo(t,h)):(i=t.path,o=h=>Ho(t,h));let B=lt();const l=new Z(i.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:C}}=c.getNext();if(!i.isPrefixOf(h.path))break;h.path.length>i.length+1||sE(rE(C),n)<=0||(s.has(C.key)||o(C))&&(B=B.insert(C.key,C.mutableCopy()))}return x.resolve(B)}getAllFromCollectionGroup(e,t,n,s){Y(9500)}u_(e,t){return x.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new ly(this)}getSize(e){return x.resolve(this.size)}}class ly extends ty{constructor(e){super(),this.qs=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.qs.addEntry(e,s)):this.qs.removeEntry(n)}),x.waitFor(t)}getFromCache(e,t){return this.qs.getEntry(e,t)}getAllFromCache(e,t){return this.qs.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e){this.persistence=e,this.c_=new ur(t=>vC(t),RC),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.l_=0,this.E_=new ll,this.targetCount=0,this.h_=xn.ys()}forEachTarget(e,t){return this.c_.forEach((n,s)=>t(s)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.l_)}allocateTargetId(e){return this.highestTargetId=this.h_.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.l_&&(this.l_=t),x.resolve()}vs(e){this.c_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.h_=new xn(t),this.highestTargetId=t),e.sequenceNumber>this.l_&&(this.l_=e.sequenceNumber)}addTargetData(e,t){return this.vs(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.vs(t),x.resolve()}removeTargetData(e,t){return this.c_.delete(t.target),this.E_.Xs(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.c_.forEach((o,B)=>{B.sequenceNumber<=t&&n.get(B.targetId)===null&&(this.c_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,B.targetId)),s++)}),x.waitFor(i).next(()=>s)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const n=this.c_.get(t)||null;return x.resolve(n)}addMatchingKeys(e,t,n){return this.E_.Js(t,n),x.resolve()}removeMatchingKeys(e,t,n){this.E_.Zs(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),x.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.E_.Xs(t),x.resolve()}getMatchingKeysForTargetId(e,t){const n=this.E_.t_(t);return x.resolve(n)}containsKey(e,t){return x.resolve(this.E_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e,t){this.T_={},this.overlays={},this.P_=new jo(0),this.R_=!1,this.R_=!0,this.I_=new oy,this.referenceDelegate=e(this),this.A_=new cy(this),this.indexManager=new YD,this.remoteDocumentCache=function(s){return new By(s)}(n=>this.referenceDelegate.V_(n)),this.serializer=new QD(t),this.d_=new sy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.T_[e.toKey()];return n||(n=new ay(t,this.referenceDelegate),this.T_[e.toKey()]=n),n}getGlobalsCache(){return this.I_}getTargetCache(){return this.A_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.d_}runTransaction(e,t,n){q("MemoryPersistence","Starting transaction:",e);const s=new uy(this.P_.next());return this.referenceDelegate.f_(),n(s).next(i=>this.referenceDelegate.m_(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}p_(e,t){return x.or(Object.values(this.T_).map(n=>()=>n.containsKey(e,t)))}}class uy extends s_{constructor(e){super(),this.currentSequenceNumber=e}}class cl{constructor(e){this.persistence=e,this.g_=new ll,this.y_=null}static w_(e){return new cl(e)}get b_(){if(this.y_)return this.y_;throw Y(60996)}addReference(e,t,n){return this.g_.addReference(n,t),this.b_.delete(n.toString()),x.resolve()}removeReference(e,t,n){return this.g_.removeReference(n,t),this.b_.add(n.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.b_.add(t.toString()),x.resolve()}removeTarget(e,t){this.g_.Xs(t.targetId).forEach(s=>this.b_.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.b_.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}f_(){this.y_=new Set}m_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.b_,n=>{const s=Z.fromPath(n);return this.S_(e,s).next(i=>{i||t.removeEntry(s,ne.min())})}).next(()=>(this.y_=null,t.apply(e)))}updateLimboDocument(e,t){return this.S_(e,t).next(n=>{n?this.b_.delete(t.toString()):this.b_.add(t.toString())})}V_(e){return 0}S_(e,t){return x.or([()=>x.resolve(this.g_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.p_(e,t)])}}class Io{constructor(e,t){this.persistence=e,this.v_=new ur(n=>KD(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=l_(this,t)}static w_(e,t){return new Io(e,t)}f_(){}m_(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}rr(e){const t=this.xs(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}xs(e){let t=0;return this.ir(e,n=>{t++}).next(()=>t)}ir(e,t){return x.forEach(this.v_,(n,s)=>this.Fs(e,n,s).next(i=>i?x.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.u_(e,o=>this.Fs(e,o,t).next(B=>{B||(n++,i.removeEntry(o,ne.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.v_.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.v_.set(n,e.currentSequenceNumber),x.resolve()}removeReference(e,t,n){return this.v_.set(n,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.v_.set(t,e.currentSequenceNumber),x.resolve()}V_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=no(e.data.value)),t}Fs(e,t,n){return x.or([()=>this.persistence.p_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.v_.get(t);return x.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Ao=n,this.Vo=s}static fo(e,t){let n=ae(),s=ae();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ul(e,t.fromCache,n,s)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(r,e){return Z.comparator(r.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cy{constructor(){this.mo=!1,this.po=!1,this.yo=100,this.wo=function(){return Fp()?8:i_(We())>0?6:4}()}initialize(e,t){this.bo=e,this.indexManager=t,this.mo=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.So(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.vo(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new dy;return this.Do(e,t,o).next(B=>{if(i.result=B,this.po)return this.xo(e,t,o,B.size)})}).next(()=>i.result)}xo(e,t,n,s){return Me(t)?x.resolve():n.documentReadCount<this.yo?(wr()<=le.DEBUG&&q("QueryEngine","SDK will not create cache indexes for query:",Fs(t),"since it only creates cache indexes for collection contains","more than or equal to",this.yo,"documents"),x.resolve()):(wr()<=le.DEBUG&&q("QueryEngine","Query:",Fs(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.wo*s?(wr()<=le.DEBUG&&q("QueryEngine","The SDK decides to create cache indexes for query:",Fs(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ft(t))):x.resolve())}So(e,t){if(Me(t))return x.resolve(null);let n=t;if(Ou(n))return x.resolve(null);let s=Ft(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=cB(n,null,"F"),s=Ft(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(o=>{const B=ae(...o);return this.bo.getDocuments(e,B).next(l=>this.indexManager.getMinOffset(e,s).next(c=>{const h=this.Co(n,l);return this.Fo(n,h,B,c.readTime)?this.So(e,cB(n,null,"F")):this.Oo(e,h,n,c)}))})))}vo(e,t,n,s){return(Me(t)?function(o){for(const B of o.stages){if(B instanceof Zs||B instanceof Qu)return!1;if(B instanceof XB){if(B.condition instanceof CC&&B.condition._expr.name==="exists"&&B.condition._expr.params[0]instanceof gi&&B.condition._expr.params[0].fieldName===Vr)continue;return!1}}return!0}(t):Ou(t))||s.isEqual(ne.min())?x.resolve(null):this.bo.getDocuments(e,n).next(i=>{const o=this.Co(t,i);return this.Fo(t,o,n,s)?x.resolve(null):(wr()<=le.DEBUG&&q("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Wu(t)),this.Oo(e,o,t,nE(s,Qs)).next(B=>B))})}Co(e,t){let n,s;return Me(e)?(n=new Fe(hy),s=i=>Xo(e,i)):(n=new Fe(MB(e)),s=i=>Ho(e,i)),t.forEach((i,o)=>{s(o)&&(n=n.add(o))}),n}Fo(e,t,n,s){if(Me(e))return function(B){return B.stages.some(l=>l instanceof Zs||l instanceof Qu)}(e);if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Do(e,t,n){return wr()<=le.DEBUG&&q("QueryEngine","Using full collection scan to execute query:",Wu(t)),this.bo.getDocumentsMatchingQuery(e,t,On.min(),n)}Oo(e,t,n,s){return this.bo.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="LocalStore",fy=3e8;class py{constructor(e,t,n,s){this.persistence=e,this.Mo=t,this.serializer=s,this.No=new ve(Be),this.Lo=new ur(i=>vC(i),RC),this.Bo=new Map,this.Uo=e.getRemoteDocumentCache(),this.A_=e.getTargetCache(),this.d_=e.getBundleCache(),this.ko(n)}ko(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ry(this.Uo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Uo.setIndexManager(this.indexManager),this.Mo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.No))}}function gy(r,e,t,n){return new py(r,e,t,n)}async function NC(r,e){const t=se(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.ko(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],B=[];let l=ae();for(const c of s){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of i){B.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return t.localDocuments.getDocuments(n,l).next(c=>({qo:c,removedBatchIds:o,addedBatchIds:B}))})})}function my(r,e){const t=se(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.Uo.newChangeBuffer({trackRemovals:!0});return function(B,l,c,h){const C=c.batch,p=C.keys();let _=x.resolve();return p.forEach(A=>{_=_.next(()=>h.getEntry(l,A)).next(L=>{const M=c.docVersions.get(A);z(M!==null,48541),L.version.compareTo(M)<0&&(C.applyToRemoteDocument(L,c),L.isValidDocument()&&(L.setReadTime(c.commitVersion),h.addEntry(L)))})}),_.next(()=>B.mutationQueue.removeMutationBatch(l,C))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(B){let l=ae();for(let c=0;c<B.mutationResults.length;++c)B.mutationResults[c].transformResults.length>0&&(l=l.add(B.batch.mutations[c].key));return l}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function OC(r){const e=se(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.A_.getLastRemoteSnapshotVersion(t))}function Ey(r,e){const t=se(r),n=e.snapshotVersion;let s=t.No;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Uo.newChangeBuffer({trackRemovals:!0});s=t.No;const B=[];e.targetChanges.forEach((h,C)=>{const p=s.get(C);if(!p)return;B.push(t.A_.removeMatchingKeys(i,h.removedDocuments,C).next(()=>t.A_.addMatchingKeys(i,h.addedDocuments,C)));let _=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(C)!==null?_=_.withResumeToken(Le.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,n)),s=s.insert(C,_),function(L,M,G){return L.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=fy?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0}(p,_,h)&&B.push(t.A_.updateTargetData(i,_))});let l=lt(),c=ae();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&B.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))}),B.push(_y(i,o,e.documentUpdates).next(h=>{l=h.$o,c=h.Ko})),!n.isEqual(ne.min())){const h=t.A_.getLastRemoteSnapshotVersion(i).next(C=>t.A_.setTargetsMetadata(i,i.currentSequenceNumber,n));B.push(h)}return x.waitFor(B).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(t.No=s,i))}function _y(r,e,t){let n=ae(),s=ae();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=lt();return t.forEach((B,l)=>{const c=i.get(B);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(B)),l.isNoDocument()&&l.version.isEqual(ne.min())?(e.removeEntry(B,l.readTime),o=o.insert(B,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(B,l)):q(hl,"Ignoring outdated watch update for ",B,". Current version:",c.version," Watch version:",l.version)}),{$o:o,Ko:s}})}function Dy(r,e){const t=se(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=FB),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function yy(r,e){const t=se(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.A_.getTargetData(n,e).next(i=>i?(s=i,x.resolve(s)):t.A_.allocateTargetId(n).next(o=>(s=new Kt(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.A_.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.No.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.No=t.No.insert(n.targetId,n),t.Lo.set(e,n.targetId)),n})}async function gB(r,e,t){const n=se(r),s=n.No.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Wr(o))throw o;q(hl,`Failed to update sequence numbers for target ${e}: ${o}`)}n.No=n.No.remove(e),n.Lo.delete(s.target)}function Xu(r,e,t){const n=se(r);let s=ne.min(),i=ae();return n.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const C=se(l),p=C.Lo.get(h);return p!==void 0?x.resolve(C.No.get(p)):C.A_.getTargetData(c,h)}(n,o,Me(e)?e:Ft(e)).next(B=>{if(B)return s=B.lastLimboFreeSnapshotVersion,n.A_.getMatchingKeysForTargetId(o,B.targetId).next(l=>{i=l})}).next(()=>n.Mo.getDocumentsMatchingQuery(o,e,t?s:ne.min(),t?i:ae())).next(B=>(wy(n,B),{documents:B,Qo:i})))}function wy(r,e){e.forEach((t,n)=>{const s=n.key.getCollectionGroup(),i=r.Bo.get(s)||ne.min();n.readTime.compareTo(i)>0&&r.Bo.set(s,n.readTime)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Jo=0,this.Yo=null,this.Zo=!0}Xo(){this.Jo===0&&(this.ea("Unknown"),this.Yo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Yo=null,this.ta("Backend didn't respond within 10 seconds."),this.ea("Offline"),Promise.resolve())))}na(e){this.state==="Online"?this.ea("Unknown"):(this.Jo++,this.Jo>=1&&(this.ra(),this.ta(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ea("Offline")))}set(e){this.ra(),this.Jo=0,e==="Online"&&(this.Zo=!1),this.ea(e)}ea(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ta(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Zo?(Yt(t),this.Zo=!1):q("OnlineStateTracker",t)}ra(){this.Yo!==null&&(this.Yo.cancel(),this.Yo=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht="RemoteStore";class Ty{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.ia=[],this.sa=new Map,this._a=new Map,this.oa=new Map,this.aa=new xn(1e3),this.ua=new xn(1001),this.ca=new Set,this.la=[],this.Ea=i,this.Ea.Ke(o=>{n.enqueueAndForget(async()=>{dr(this)&&(q(Ht,"Restarting streams for network reachability change."),await async function(l){const c=se(l);c.ca.add(4),await Ei(c),c.ha.set("Unknown"),c.ca.delete(4),await Zo(c)}(this))})}),this.ha=new Iy(n,s)}}async function Zo(r){if(dr(r))for(const e of r.la)await e(!0)}async function Ei(r){for(const e of r.la)await e(!1)}function mB(r,e){return r._a.get(e)||void 0}function FC(r,e){const t=se(r),n=mB(t,e.targetId);if(n!==void 0&&t.sa.has(n))return;const s=function(B,l){const c=mB(B,l);c!==void 0&&B.oa.delete(c);const h=function(p,_){return _%2!=0?p.ua.next():p.aa.next()}(B,l);return B._a.set(l,h),B.oa.set(h,l),h}(t,e.targetId);q(Ht,"remoteStoreListen mapping SDK target ID to remote",e.targetId,s);const i=new Kt(e.target,s,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.sa.set(s,i),pl(t)?fl(t):es(t).Jt()&&Cl(t,i)}function dl(r,e){const t=se(r),n=es(t),s=mB(t,e);q(Ht,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,s),t.sa.delete(s),t._a.delete(e),t.oa.delete(s),n.Jt()&&LC(t,s),t.sa.size===0&&(n.Jt()?n.Xt():dr(t)&&t.ha.set("Unknown"))}function Cl(r,e){if(r.Ta.H(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const t=r.oa.get(e.targetId);if(t===void 0)return void q(Ht,"SDK target ID not found for remote ID: "+e.targetId);const n=r.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(n)}es(r).Tn(e)}function LC(r,e){r.Ta.H(e),es(r).Pn(e)}function fl(r){r.Ta=new _E({getRemoteKeysForTarget:e=>{const t=r.oa.get(e);return t!==void 0?r.remoteSyncer.getRemoteKeysForTarget(t):ae()},ge:e=>r.sa.get(e)||null,Ae:()=>r.datastore.serializer.databaseId}),es(r).start(),r.ha.Xo()}function pl(r){return dr(r)&&!es(r).Ht()&&r.sa.size>0}function dr(r){return se(r).ca.size===0}function xC(r){r.Ta=void 0}async function Ay(r){r.ha.set("Online")}async function vy(r){r.sa.forEach((e,t)=>{Cl(r,e)})}async function Ry(r,e){xC(r),pl(r)?(r.ha.na(e),fl(r)):r.ha.set("Unknown")}async function by(r,e,t){if(r.ha.set("Online"),e instanceof jd&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const B of i.targetIds){if(s.sa.has(B)){const l=s.oa.get(B);l!==void 0&&(await s.remoteSyncer.rejectListen(l,o),s._a.delete(l),s.oa.delete(B)),s.sa.delete(B)}s.Ta.removeTarget(B)}}(r,e)}catch(n){q(Ht,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await To(r,n)}else if(e instanceof so?r.Ta.se(e):e instanceof Jd?r.Ta.Ee(e):r.Ta.ae(e),!t.isEqual(ne.min()))try{const n=await OC(r.localStore);t.compareTo(n)>=0&&await function(i,o){const B=i.Ta.de(o);B.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const C=i.sa.get(h);C&&i.sa.set(h,C.withResumeToken(c.resumeToken,o))}}),B.targetMismatches.forEach((c,h)=>{const C=i.sa.get(c);if(!C)return;i.sa.set(c,C.withResumeToken(Le.EMPTY_BYTE_STRING,C.snapshotVersion)),LC(i,c);const p=new Kt(C.target,c,h,C.sequenceNumber);Cl(i,p)});const l=function(h,C){const p=new Map;C.targetChanges.forEach((A,L)=>{const M=h.oa.get(L);M!==void 0&&p.set(M,A)});let _=new ve(Be);return C.targetMismatches.forEach((A,L)=>{const M=h.oa.get(A);M!==void 0&&(_=_.insert(M,L))}),new fi(C.snapshotVersion,p,_,C.documentUpdates,C.augmentedDocumentUpdates,C.resolvedLimboDocuments)}(i,B);return i.remoteSyncer.applyRemoteEvent(l)}(r,t)}catch(n){q(Ht,"Failed to raise snapshot:",n),await To(r,n)}}async function To(r,e,t){if(!Wr(e))throw e;r.ca.add(1),await Ei(r),r.ha.set("Offline"),t||(t=()=>OC(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{q(Ht,"Retrying IndexedDB access"),await t(),r.ca.delete(1),await Zo(r)})}function kC(r,e){return e().catch(t=>To(r,t,e))}async function ea(r){const e=se(r),t=kn(e);let n=e.ia.length>0?e.ia[e.ia.length-1].batchId:FB;for(;Py(e);)try{const s=await Dy(e.localStore,n);if(s===null){e.ia.length===0&&t.Xt();break}n=s.batchId,Sy(e,s)}catch(s){await To(e,s)}VC(e)&&MC(e)}function Py(r){return dr(r)&&r.ia.length<10}function Sy(r,e){r.ia.push(e);const t=kn(r);t.Jt()&&t.Rn&&t.In(e.mutations)}function VC(r){return dr(r)&&!kn(r).Ht()&&r.ia.length>0}function MC(r){kn(r).start()}async function Ny(r){kn(r).dn()}async function Oy(r){const e=kn(r);for(const t of r.ia)e.In(t.mutations)}async function Fy(r,e,t){const n=r.ia.shift(),s=Bl.from(n,e,t);await kC(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await ea(r)}async function Ly(r,e){e&&kn(r).Rn&&await async function(n,s){if(function(o){return Vd(o)&&o!==V.ABORTED}(s.code)){const i=n.ia.shift();kn(n).Zt(),await kC(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ea(n)}}(r,e),VC(r)&&MC(r)}async function Zu(r,e){const t=se(r);t.asyncQueue.verifyOperationInProgress(),q(Ht,"RemoteStore received new credentials");const n=dr(t);t.ca.add(3),await Ei(t),n&&t.ha.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.ca.delete(3),await Zo(t)}async function xy(r,e){const t=se(r);e?(t.ca.delete(2),await Zo(t)):e||(t.ca.add(2),await Ei(t),t.ha.set("Unknown"))}function es(r){return r.Pa||(r.Pa=function(t,n,s){const i=se(t);return i.mn(),new WE(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{ut:Ay.bind(null,r),lt:vy.bind(null,r),ht:Ry.bind(null,r),hn:by.bind(null,r)}),r.la.push(async e=>{e?(r.Pa.Zt(),pl(r)?fl(r):r.ha.set("Unknown")):(await r.Pa.stop(),xC(r))})),r.Pa}function kn(r){return r.Ra||(r.Ra=function(t,n,s){const i=se(t);return i.mn(),new YE(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{ut:()=>Promise.resolve(),lt:Ny.bind(null,r),ht:Ly.bind(null,r),An:Oy.bind(null,r),Vn:Fy.bind(null,r)}),r.la.push(async e=>{e?(r.Ra.Zt(),await ea(r)):(await r.Ra.stop(),r.ia.length>0&&(q(Ht,`Stopping write stream with ${r.ia.length} pending writes`),r.ia=[]))})),r.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ia(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ia(this.observer.error,e):Yt("Uncaught Error in snapshot listener:",e.toString()))}Aa(){this.muted=!0}Ia(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,B=new gl(e,t,o,s,i);return B.start(n),B}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ml(r,e){if(Yt("AsyncQueue",`${e}: ${r}`),Wr(r))return new $(V.UNAVAILABLE,`${e}: ${r}`);throw r}class eh{constructor(){this.activeTargetIds=gE()}La(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ba(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Na(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Vy{constructor(){this.du=new eh,this.fu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.du.La(e),this.fu[e]||"not-current"}updateQueryState(e,t,n){this.fu[e]=t}removeLocalQueryTarget(e){this.du.Ba(e)}isLocalQueryTarget(e){return this.du.activeTargetIds.has(e)}clearQueryState(e){delete this.fu[e]}getAllActiveQueryTargets(){return this.du.activeTargetIds}isActiveQueryTarget(e){return this.du.activeTargetIds.has(e)}start(){return this.du=new eh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function Ua(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{static emptySet(e){return new rr(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Z.comparator(t.key,n.key):(t,n)=>Z.comparator(t.key,n.key),this.keyedMap=Tr(),this.sortedSet=new ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof rr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new rr;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this.mu=new ve(Z.comparator)}track(e){const t=e.doc.key,n=this.mu.get(t);n?e.type!==0&&n.type===3?this.mu=this.mu.insert(t,e):e.type===3&&n.type!==1?this.mu=this.mu.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.mu=this.mu.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.mu=this.mu.remove(t):e.type===1&&n.type===2?this.mu=this.mu.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):Y(63341,{ye:e,pu:n}):this.mu=this.mu.insert(t,e)}gu(){const e=[];return this.mu.inorderTraversal((t,n)=>{e.push(n)}),e}}class jr{constructor(e,t,n,s,i,o,B,l,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=B,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(B=>{o.push({type:0,doc:B})}),new jr(e,t,rr.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(){this.yu=void 0,this.wu=[]}bu(){return this.wu.some(e=>e.Su())}}class Gy{constructor(){this.queries=nh(),this.onlineState="Unknown",this.vu=new Set}terminate(){(function(t,n){const s=se(t),i=s.queries;s.queries=nh(),i.forEach((o,B)=>{for(const l of B.wu)l.onError(n)})})(this,new $(V.ABORTED,"Firestore shutting down"))}}function nh(){return new ur(r=>AC(r),Yo)}async function Hy(r,e){const t=se(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.bu()&&e.Su()&&(n=2):(i=new My,n=e.Su()?0:1);try{switch(n){case 0:i.yu=await t.onListen(s,!0);break;case 1:i.yu=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const B=ml(o,`Initialization of query '${Me(e.query)?Qt(e.query):Fs(e.query)}' failed`);return void e.onError(B)}t.queries.set(s,i),i.wu.push(e),e.Du(t.onlineState),i.yu&&e.xu(i.yu)&&El(t)}async function Uy(r,e){const t=se(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.wu.indexOf(e);o>=0&&(i.wu.splice(o,1),i.wu.length===0?s=e.Su()?0:1:!i.bu()&&e.Su()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Jy(r,e){const t=se(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const B of o.wu)B.xu(s)&&(n=!0);o.yu=s}}n&&El(t)}function jy(r,e,t){const n=se(r),s=n.queries.get(e);if(s)for(const i of s.wu)i.onError(t);n.queries.delete(e)}function El(r){r.vu.forEach(e=>{e.next()})}var EB;(function(r){r.Default="default",r.Cache="cache"})(EB||(EB={}));class qy{constructor(e,t,n){this.query=e,this.Cu=t,this.Fu=!1,this.Ou=null,this.onlineState="Unknown",this.options=n||{}}xu(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new jr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Mu(e)&&(this.Cu.next(e),t=!0):this.Nu(e,this.onlineState)&&(this.Lu(e),t=!0),this.Ou=e,t}onError(e){this.Cu.error(e)}Du(e){this.onlineState=e;let t=!1;return this.Ou&&!this.Fu&&this.Nu(this.Ou,e)&&(this.Lu(this.Ou),t=!0),t}Nu(e,t){if(!e.fromCache||!this.Su())return!0;const n=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Mu(e){if(e.docChanges.length>0)return!0;const t=this.Ou&&this.Ou.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Lu(e){e=jr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Cu.next(e)}Su(){return this.options.source!==EB.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e){this.key=e}}class HC{constructor(e){this.key=e}}class Ky{constructor(e,t){this.query=e,this.Gu=t,this.zu=null,this.hasCachedResults=!1,this.current=!1,this.ju=ae(),this.mutatedKeys=ae(),this.Hu=Me(e)?pB(e):MB(e),this.Ju=new rr(this.Hu)}get Yu(){return this.Gu}Zu(e,t){const n=t?t.Xu:new th,s=t?t.Ju:this.Ju;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,B=!1;const[l,c]=this.ec(this.query,s);e.inorderTraversal((C,p)=>{const _=s.get(C),A=ZD(this.query,p)?p:null,L=!!_&&this.mutatedKeys.has(_.key),M=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let G=!1;_&&A?_.data.isEqual(A.data)?L!==M&&(n.track({type:3,doc:A}),G=!0):this.tc(_,A)||(n.track({type:2,doc:A}),G=!0,(l&&this.Hu(A,l)>0||c&&this.Hu(A,c)<0)&&(B=!0)):!_&&A?(n.track({type:0,doc:A}),G=!0):_&&!A&&(n.track({type:1,doc:_}),G=!0,(l||c)&&(B=!0)),G&&(A?(o=o.add(A),i=M?i.add(C):i.delete(C)):(o=o.delete(C),i=i.delete(C)))});const h=this.nc(this.query);if(h)if(Me(this.query)){const C=[];o.forEach(A=>C.push(A));const p=PC(this.query,C);let _=new rr(pB(this.query));for(const A of p)_=_.add(A);o.forEach(A=>{_.has(A.key)||(i=i.delete(A.key),n.track({type:1,doc:A}))}),o=_}else{const C=this.rc(this.query);for(;o.size>h;){const p=C==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),n.track({type:1,doc:p})}}return{Ju:o,Xu:n,Fo:B,mutatedKeys:i}}nc(e){var t;return Me(e)?(t=Ha(e))==null?void 0:t.limit:e.limit||void 0}rc(e){if(Me(e)){const t=Ha(e);return t&&t.limit<0?"L":"F"}return e.limitType}ec(e,t){var n;if(Me(e)){const s=(n=Ha(e))==null?void 0:n.limit;return[t.size===s?t.last():null,null]}return[e.limitType==="F"&&t.size===this.nc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.nc(this.query)?t.first():null]}tc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.Ju;this.Ju=e.Ju,this.mutatedKeys=e.mutatedKeys;const o=e.Xu.gu();o.sort((h,C)=>function(_,A){const L=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{ye:M})}};return L(_)-L(A)}(h.type,C.type)||this.Hu(h.doc,C.doc)),this.sc(n),s=s??!1;const B=t&&!s?this._c():[],l=this.ju.size===0&&this.current&&!s?1:0,c=l!==this.zu;return this.zu=l,o.length!==0||c?{snapshot:new jr(this.query,e.Ju,i,o,e.mutatedKeys,l===0,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),oc:B}:{oc:B}}Du(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ju:this.Ju,Xu:new th,mutatedKeys:this.mutatedKeys,Fo:!1},!1)):{oc:[]}}ac(e){return!this.Gu.has(e)&&!!this.Ju.has(e)&&!this.Ju.get(e).hasLocalMutations}sc(e){e&&(e.addedDocuments.forEach(t=>this.Gu=this.Gu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Gu=this.Gu.delete(t)),this.current=e.current)}_c(){if(!this.current)return[];const e=this.ju;this.ju=ae(),this.Ju.forEach(n=>{this.ac(n.key)&&(this.ju=this.ju.add(n.key))});const t=[];return e.forEach(n=>{this.ju.has(n)||t.push(new HC(n))}),this.ju.forEach(n=>{e.has(n)||t.push(new GC(n))}),t}uc(e){this.Gu=e.Qo,this.ju=ae();const t=this.Zu(e.documents);return this.applyChanges(t,!0)}cc(){return jr.fromInitialDocuments(this.query,this.Ju,this.mutatedKeys,this.zu===0,this.hasCachedResults)}}const _l="SyncEngine";class $y{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class zy{constructor(e){this.key=e,this.lc=!1}}class Qy{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ec={},this.hc=new ur(B=>AC(B),Yo),this.Tc=new Map,this.Pc=new Set,this.Rc=new ve(Z.comparator),this.Ic=new Map,this.Ac=new ll,this.Vc={},this.dc=new Map,this.fc=xn.ws(),this.onlineState="Unknown",this.mc=void 0}get isPrimaryClient(){return this.mc===!0}}async function Wy(r,e,t=!0){const n=$C(r);let s;const i=n.hc.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cc()):s=await UC(n,e,t,!0),s}async function Yy(r,e){const t=$C(r);await UC(t,e,!0,!1)}async function UC(r,e,t,n){const s=await yy(r.localStore,Me(e)?e:Ft(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let B;return n&&(B=await Xy(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&FC(r.remoteStore,s),B}async function Xy(r,e,t,n,s){r.gc=(C,p,_)=>async function(L,M,G,ee){let Q=M.view.Zu(G);Q.Fo&&(Q=await Xu(L.localStore,M.query,!1).then(({documents:v})=>M.view.Zu(v,Q)));const fe=ee&&ee.targetChanges.get(M.targetId),pe=ee&&ee.targetMismatches.get(M.targetId)!=null,oe=M.view.applyChanges(Q,L.isPrimaryClient,fe,pe);return sh(L,M.targetId,oe.oc),oe.snapshot}(r,C,p,_);const i=await Xu(r.localStore,e,!0),o=new Ky(e,i.Qo),B=o.Zu(i.documents),l=pi.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),c=o.applyChanges(B,r.isPrimaryClient,l);sh(r,t,c.oc);const h=new $y(e,t,o);return r.hc.set(e,h),r.Tc.has(t)?r.Tc.get(t).push(e):r.Tc.set(t,[e]),c.snapshot}async function Zy(r,e,t){const n=se(r),s=n.hc.get(e),i=n.Tc.get(s.targetId);if(i.length>1)return n.Tc.set(s.targetId,i.filter(o=>!Yo(o,e))),void n.hc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await gB(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&dl(n.remoteStore,s.targetId),_B(n,s.targetId)}).catch(Qr)):(_B(n,s.targetId),await gB(n.localStore,s.targetId,!0))}async function ew(r,e){const t=se(r),n=t.hc.get(e),s=t.Tc.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),dl(t.remoteStore,n.targetId))}async function tw(r,e,t){const n=Bw(r);try{const s=await function(o,B){const l=se(o),c=Ae.now(),h=B.reduce((_,A)=>_.add(A.key),ae());let C,p;return l.persistence.runTransaction("Locally write mutations","readwrite",_=>{let A=lt(),L=ae();return l.Uo.getEntries(_,h).next(M=>{A=M,A.forEach((G,ee)=>{ee.isValidDocument()||(L=L.add(G))})}).next(()=>l.localDocuments.getOverlayedDocuments(_,A)).next(M=>{C=M;const G=[];for(const ee of B){const Q=Km(ee,C.get(ee.key).overlayedDocument);Q!=null&&G.push(new Gn(ee.key,Q,Dd(Q.value.mapValue),et.exists(!0)))}return l.mutationQueue.addMutationBatch(_,c,G,B)}).next(M=>{p=M;const G=M.applyToLocalDocumentSet(C,L);return l.documentOverlayCache.saveOverlays(_,M.batchId,G)})}).then(()=>({batchId:p.batchId,changes:Hd(C)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,B,l){let c=o.Vc[o.currentUser.toKey()];c||(c=new ve(Be)),c=c.insert(B,l),o.Vc[o.currentUser.toKey()]=c}(n,s.batchId,t),await _i(n,s.changes),await ea(n.remoteStore)}catch(s){const i=ml(s,"Failed to persist write");t.reject(i)}}async function JC(r,e){const t=se(r);try{const n=await Ey(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Ic.get(i);o&&(z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lc=!0:s.modifiedDocuments.size>0?z(o.lc,14607):s.removedDocuments.size>0&&(z(o.lc,42227),o.lc=!1))}),await _i(t,n,e)}catch(n){await Qr(n)}}function rh(r,e,t){const n=se(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.hc.forEach((i,o)=>{const B=o.view.Du(e);B.snapshot&&s.push(B.snapshot)}),function(o,B){const l=se(o);l.onlineState=B;let c=!1;l.queries.forEach((h,C)=>{for(const p of C.wu)p.Du(B)&&(c=!0)}),c&&El(l)}(n.eventManager,e),s.length&&n.Ec.hn(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function nw(r,e,t){const n=se(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Ic.get(e),i=s&&s.key;if(i){let o=new ve(Z.comparator);o=o.insert(i,Je.newNoDocument(i,ne.min()));const B=ae().add(i),l=new fi(ne.min(),new Map,new ve(Be),o,lt(),B);await JC(n,l),n.Rc=n.Rc.remove(i),n.Ic.delete(e),Dl(n)}else await gB(n.localStore,e,!1).then(()=>_B(n,e,t)).catch(Qr)}async function rw(r,e){const t=se(r),n=e.batch.batchId;try{const s=await my(t.localStore,e);qC(t,n,null),jC(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await _i(t,s)}catch(s){await Qr(s)}}async function sw(r,e,t){const n=se(r);try{const s=await function(o,B){const l=se(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,B).next(C=>(z(C!==null,37113),h=C.keys(),l.mutationQueue.removeMutationBatch(c,C))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,B)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(n.localStore,e);qC(n,e,t),jC(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await _i(n,s)}catch(s){await Qr(s)}}function jC(r,e){(r.dc.get(e)||[]).forEach(t=>{t.resolve()}),r.dc.delete(e)}function qC(r,e,t){const n=se(r);let s=n.Vc[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.Vc[n.currentUser.toKey()]=s}}function _B(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Tc.get(e))r.hc.delete(n),t&&r.Ec.yc(n,t);r.Tc.delete(e),r.isPrimaryClient&&r.Ac.Xs(e).forEach(n=>{r.Ac.containsKey(n)||KC(r,n)})}function KC(r,e){r.Pc.delete(e.path.canonicalString());const t=r.Rc.get(e);t!==null&&(dl(r.remoteStore,t),r.Rc=r.Rc.remove(e),r.Ic.delete(t),Dl(r))}function sh(r,e,t){for(const n of t)n instanceof GC?(r.Ac.addReference(n.key,e),iw(r,n)):n instanceof HC?(q(_l,"Document no longer in limbo: "+n.key),r.Ac.removeReference(n.key,e),r.Ac.containsKey(n.key)||KC(r,n.key)):Y(19791,{wc:n})}function iw(r,e){const t=e.key,n=t.path.canonicalString();r.Rc.get(t)||r.Pc.has(n)||(q(_l,"New document in limbo: "+t),r.Pc.add(n),Dl(r))}function Dl(r){for(;r.Pc.size>0&&r.Rc.size<r.maxConcurrentLimboResolutions;){const e=r.Pc.values().next().value;r.Pc.delete(e);const t=new Z(Ce.fromString(e)),n=r.fc.next();r.Ic.set(n,new zy(t)),r.Rc=r.Rc.insert(t,n),FC(r.remoteStore,new Kt(Ft(VB(t.path)),n,"TargetPurposeLimboResolution",jo.yn))}}async function _i(r,e,t){const n=se(r),s=[],i=[],o=[];n.hc.isEmpty()||(n.hc.forEach((B,l)=>{o.push(n.gc(l,e,t).then(c=>{var h;if((c||t)&&n.isPrimaryClient){const C=c?!c.fromCache:(h=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:h.current;n.sharedClientState.updateQueryState(l.targetId,C?"current":"not-current")}if(c){s.push(c);const C=ul.fo(l.targetId,c);i.push(C)}}))}),await Promise.all(o),n.Ec.hn(s),await async function(l,c){const h=se(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",C=>x.forEach(c,p=>x.forEach(p.Ao,_=>h.persistence.referenceDelegate.addReference(C,p.targetId,_)).next(()=>x.forEach(p.Vo,_=>h.persistence.referenceDelegate.removeReference(C,p.targetId,_)))))}catch(C){if(!Wr(C))throw C;q(hl,"Failed to update sequence numbers: "+C)}for(const C of c){const p=C.targetId;if(!C.fromCache){const _=h.No.get(p),A=_.snapshotVersion,L=_.withLastLimboFreeSnapshotVersion(A);h.No=h.No.insert(p,L)}}}(n.localStore,i))}async function ow(r,e){const t=se(r);if(!t.currentUser.isEqual(e)){q(_l,"User change. New user:",e.toKey());const n=await NC(t.localStore,e);t.currentUser=e,function(i,o){i.dc.forEach(B=>{B.forEach(l=>{l.reject(new $(V.CANCELLED,o))})}),i.dc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await _i(t,n.qo)}}function aw(r,e){const t=se(r),n=t.Ic.get(e);if(n&&n.lc)return ae().add(n.key);{let s=ae();const i=t.Tc.get(e);if(!i)return s;for(const o of i??[]){const B=t.hc.get(o);s=s.unionWith(B.view.Yu)}return s}}function $C(r){const e=se(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=JC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aw.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=nw.bind(null,e),e.Ec.hn=Jy.bind(null,e.eventManager),e.Ec.yc=jy.bind(null,e.eventManager),e}function Bw(r){const e=se(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sw.bind(null,e),e}class Ao{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Uo(e.databaseInfo.databaseId),this.sharedClientState=this.Sc(e),this.persistence=this.vc(e),await this.persistence.start(),this.localStore=this.Dc(e),this.gcScheduler=this.xc(e,this.localStore),this.indexBackfillerScheduler=this.Cc(e,this.localStore)}xc(e,t){return null}Cc(e,t){return null}Dc(e){return gy(this.persistence,new Cy,e.initialUser,this.serializer)}vc(e){return new SC(cl.w_,this.serializer)}Sc(e){return new Vy}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ao.provider={build:()=>new Ao};class lw extends Ao{constructor(e){super(),this.cacheSizeBytes=e}xc(e,t){z(this.persistence.referenceDelegate instanceof Io,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new a_(n,e.asyncQueue,t)}vc(e){const t=this.cacheSizeBytes!==void 0?at.withCacheSize(this.cacheSizeBytes):at.DEFAULT;return new SC(n=>Io.w_(n,t),this.serializer)}}class DB{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>rh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=ow.bind(null,this.syncEngine),await xy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Gy}()}createDatastore(e){const t=Uo(e.databaseInfo.databaseId),n=QE(e.databaseInfo);return e_(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,B){return new Ty(n,s,i,o,B)}(this.localStore,this.datastore,e.asyncQueue,t=>rh(this.syncEngine,t,0),function(){return Hu.Je()?new Hu:new qE}())}createSyncEngine(e,t){return function(s,i,o,B,l,c,h){const C=new Qy(s,i,o,B,l,c);return h&&(C.mc=!0),C}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=se(s);q(Ht,"RemoteStore shutting down."),i.ca.add(5),await Ei(i),i.Ea.shutdown(),i.ha.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}DB.provider={build:()=>new DB};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cw=class{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new $(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(s,i){const o=se(s),B={documents:i.map(C=>Ws(o.serializer,C))},l=await o.st("BatchGetDocuments",o.serializer.databaseId,Ce.emptyPath(),B,i.length),c=new Map;l.forEach(C=>{const p=AE(o.serializer,C);c.set(p.key.toString(),p)});const h=[];return i.forEach(C=>{const p=c.get(C.toString());z(!!p,55234,{key:C}),h.push(p)}),h}(this.datastore,e);return t.forEach(n=>this.recordVersion(n)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new Mo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,n)=>{const s=Z.fromPath(n);this.mutations.push(new Rd(s,this.precondition(s)))}),await async function(n,s){const i=se(n),o={writes:s.map(B=>Qd(i.serializer,B))};await i.tt("Commit",i.serializer.databaseId,Ce.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Y(50498,{Oc:e.constructor.name});t=ne.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new $(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ne.min())?et.exists(!1):et.updateTime(t):et.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ne.min()))throw new $(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return et.updateTime(t)}return et.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e,t,n,s,i){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=s,this.deferred=i,this.Mc=n.maxAttempts,this.jt=new jB(this.asyncQueue,"transaction_retry")}Nc(){this.Mc-=1,this.Lc()}Lc(){this.jt.Ut(async()=>{const e=new cw(this.datastore),t=this.Bc(e);t&&t.then(n=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(n)}).catch(s=>{this.Uc(s)}))}).catch(n=>{this.Uc(n)})})}Bc(e){try{const t=this.updateFunction(e);return!di(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Uc(e){this.Mc>0&&this.kc(e)?(this.Mc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}kc(e){if((e==null?void 0:e.name)==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Vd(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="FirestoreClient";class hw{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=NB.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{q(Vn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(q(Vn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ml(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Ja(r,e){r.asyncQueue.verifyOperationInProgress(),q(Vn,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await NC(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function ih(r,e){r.asyncQueue.verifyOperationInProgress();const t=await dw(r);q(Vn,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>Zu(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Zu(e.remoteStore,s)),r._onlineComponents=e}async function dw(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){q(Vn,"Using user provided OfflineComponentProvider");try{await Ja(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Vt("Error using user provided cache. Falling back to memory cache: "+t),await Ja(r,new Ao)}}else q(Vn,"Using default OfflineComponentProvider"),await Ja(r,new lw(void 0));return r._offlineComponents}async function yl(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(q(Vn,"Using user provided OnlineComponentProvider"),await ih(r,r._uninitializedComponentsProvider._online)):(q(Vn,"Using default OnlineComponentProvider"),await ih(r,new DB))),r._onlineComponents}function Cw(r){return yl(r).then(e=>e.syncEngine)}function fw(r){return yl(r).then(e=>e.datastore)}async function oh(r){const e=await yl(r),t=e.eventManager;return t.onListen=Wy.bind(null,e.syncEngine),t.onUnlisten=Zy.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Yy.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ew.bind(null,e.syncEngine),t}function pw(r,e,t,n){const s=new ky(n),i=new qy(e,s,t);return r.asyncQueue.enqueueAndForget(async()=>Hy(await oh(r),i)),()=>{s.Aa(),r.asyncQueue.enqueueAndForget(async()=>Uy(await oh(r),i))}}function gw(r,e){const t=new In;return r.asyncQueue.enqueueAndForget(async()=>tw(await Cw(r),e,t)),t.promise}function mw(r,e,t){const n=new In;return r.asyncQueue.enqueueAndForget(async()=>{const s=await fw(r);new uw(r.asyncQueue,s,t,e,n).Nc()}),n.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo=class{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ew(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(Jr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},Ew=class extends vo{data(){return super.data()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{convertValue(e,t="none"){switch(xe(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Sn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Mn(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var n,s,i;const t=(i=(s=(n=e.fields)==null?void 0:n[js].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>Re(o.doubleValue));return new ct(t)}convertGeoPoint(e){return new Lt(Re(e.latitude),Re(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=hi(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Mr(e));default:return null}}convertTimestamp(e){const t=Pn(e);return new Ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ce.fromString(e);z(Xd(n),9688,{name:e});const s=new Us(n.get(1),n.get(3)),i=new Z(n.popFirst(5));return s.isEqual(t)||Yt(`A document reference to ${i} refers to a different database (${s.projectId}/${s.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(r,e,t){let n;return n=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,n}class _w extends zC{constructor(e){super(),this.firestore=e}convertBytes(e){return new gt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Pe(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah="AsyncQueue";class Bh{constructor(e=Promise.resolve()){this.qc=[],this.$c=!1,this.Kc=[],this.Qc=null,this.Wc=!1,this.Gc=!1,this.zc=[],this.jt=new jB(this,"async_queue_retry"),this.jc=()=>{const n=Ua();n&&q(ah,"Visibility state changed to "+n.visibilityState),this.jt.qt()},this.Hc=e;const t=Ua();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.$c}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.$c){this.$c=!0,this.Gc=e||!1;const t=Ua();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Jc(),this.$c)return new Promise(()=>{});const t=new In;return this.Yc(()=>this.$c&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.qc.push(e),this.Zc()))}async Zc(){if(this.qc.length!==0){try{await this.qc[0](),this.qc.shift(),this.jt.reset()}catch(e){if(!Wr(e))throw e;q(ah,"Operation failed with retryable error: "+e)}this.qc.length>0&&this.jt.Ut(()=>this.Zc())}}Yc(e){const t=this.Hc.then(()=>(this.Wc=!0,e().catch(n=>{throw this.Qc=n,this.Wc=!1,Yt("INTERNAL UNHANDLED ERROR: ",lh(n)),n}).then(n=>(this.Wc=!1,n))));return this.Hc=t,t}enqueueAfterDelay(e,t,n){this.Jc(),this.zc.indexOf(e)>-1&&(t=0);const s=gl.createAndSchedule(this,e,t,n,i=>this.Xc(i));return this.Kc.push(s),s}Jc(){this.Qc&&Y(47125,{el:lh(this.Qc)})}verifyOperationInProgress(){}async tl(){let e;do e=this.Hc,await e;while(e!==this.Hc)}nl(e){for(const t of this.Kc)if(t.timerId===e)return!0;return!1}rl(e){return this.tl().then(()=>{this.Kc.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Kc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tl()})}il(e){this.zc.push(e)}Xc(e){const t=this.Kc.indexOf(e);this.Kc.splice(t,1)}}function lh(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class qr extends qB{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Bh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bh(e),this._firestoreClient=void 0,await e}}}function Dw(r,e,t){const n=RB(r,"firestore");if(n.isInitialized(t)){const s=n.getImmediate({identifier:t}),i=n.getOptions(t);if(ir(i,e))return s;throw new $(V.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new $(V.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sC)throw new $(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&Bi(e.host)&&$h(e.host),n.initialize({options:e,instanceIdentifier:t})}function wl(r){if(r._terminated)throw new $(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||yw(r),r._firestoreClient}function yw(r){var n,s,i,o;const e=r._freezeSettings(),t=n_(r._databaseId,((n=r._app)==null?void 0:n.options.appId)||"",r._persistenceKey,(s=r._app)==null?void 0:s.options.apiKey,e);r._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new hw(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(r._componentsProvider))}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il extends zC{constructor(e){super(),this.firestore=e}convertBytes(e){return new gt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Pe(this.firestore,null,t)}}class Rr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Rn extends vo{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new oo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Jr("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new $(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Rn._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Rn._jsonSchemaVersion="firestore/documentSnapshot/1.0",Rn._jsonSchema={type:Oe("string",Rn._jsonSchemaVersion),bundleSource:Oe("string","DocumentSnapshot"),bundleName:Oe("string"),bundle:Oe("string")};class oo extends Rn{data(e={}){return super.data(e)}}class Sr{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Rr(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new oo(this._firestore,this._userDataWriter,n.key,n,new Rr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(B=>{Me(s._snapshot.query)?pB(s._snapshot.query):MB(s.query._query);const l=new oo(s._firestore,s._userDataWriter,B.doc.key,B.doc,new Rr(s._snapshot.mutatedKeys.has(B.doc.key),s._snapshot.fromCache),s.query.converter);return B.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(B=>i||B.type!==3).map(B=>{const l=new oo(s._firestore,s._userDataWriter,B.doc.key,B.doc,new Rr(s._snapshot.mutatedKeys.has(B.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,h=-1;return B.type!==0&&(c=o.indexOf(B.doc.key),o=o.delete(B.doc.key)),B.type!==1&&(o=o.add(B.doc),h=o.indexOf(B.doc.key)),{type:ww(B.type),doc:l,oldIndex:c,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new $(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Sr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=NB.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function ww(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:r})}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sr._jsonSchemaVersion="firestore/querySnapshot/1.0",Sr._jsonSchema={type:Oe("string",Sr._jsonSchemaVersion),bundleSource:Oe("string","QuerySnapshot"),bundleName:Oe("string"),bundle:Oe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new $(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw={maxAttempts:5};function bs(r,e){if((r=Ge(r)).firestore!==e)throw new $(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Aw=class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=aC(e)}get(e){const t=bs(e,this._firestore),n=new _w(this._firestore);return this._transaction.lookup([t._key]).then(s=>{if(!s||s.length!==1)return Y(24041);const i=s[0];if(i.isFoundDocument())return new vo(this._firestore,n,i.key,i,t.converter);if(i.isNoDocument())return new vo(this._firestore,n,t._key,null,t.converter);throw Y(18433,{doc:i})})}set(e,t,n){const s=bs(e,this._firestore),i=QC(s.converter,t,n),o=BC(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,n);return this._transaction.set(s._key,o),this}update(e,t,n,...s){const i=bs(e,this._firestore);let o;return o=typeof(t=Ge(t))=="string"||t instanceof Jo?f_(this._dataReader,"Transaction.update",i._key,t,n,s):C_(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=bs(e,this._firestore);return this._transaction.delete(t._key),this}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vw extends Aw{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=bs(e,this._firestore),n=new Il(this._firestore);return super.get(e).then(s=>new Rn(this._firestore,n,t._key,s._document,new Rr(!1,!1),t.converter))}}function Rw(r,e,t){r=tr(r,qr);const n={...Tw,...t};(function(o){if(o.maxAttempts<1)throw new $(V.INVALID_ARGUMENT,"Max attempts must be at least 1")})(n);const s=wl(r);return mw(s,i=>e(new vw(r,i)),n)}function ja(r,e,t){r=tr(r,Pe);const n=tr(r.firestore,qr),s=QC(r.converter,e,t),i=aC(n);return WC(n,[BC(i,"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,et.none())])}function uh(r){return WC(tr(r.firestore,qr),[new Mo(r._key,et.none())])}function qa(r,...e){var c,h,C;r=Ge(r);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||ch(e[n])||(t=e[n++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(ch(e[n])){const p=e[n];e[n]=(c=p.next)==null?void 0:c.bind(p),e[n+1]=(h=p.error)==null?void 0:h.bind(p),e[n+2]=(C=p.complete)==null?void 0:C.bind(p)}let i,o,B;if(r instanceof Pe)o=tr(r.firestore,qr),B=VB(r._key.path),i={next:p=>{e[n]&&e[n](bw(o,r,p))},error:e[n+1],complete:e[n+2]};else{const p=tr(r,qo);o=tr(p.firestore,qr),B=p._query;const _=new Il(o);i={next:A=>{e[n]&&e[n](new Sr(o,_,p,A))},error:e[n+1],complete:e[n+2]},Iw(r._query)}const l=wl(o);return pw(l,B,s,i)}function WC(r,e){const t=wl(r);return gw(t,e)}function bw(r,e,t){const n=t.docs.get(e._key),s=new Il(r);return new Rn(r,s,e._key,n,new Rr(t.hasPendingWrites,t.fromCache),e.converter)}const hh="@firebase/firestore",dh="4.17.1";(function(e,t=!0){vm($r),xr(new or("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),B=new qr(new HE(n.getProvider("auth-internal")),new jE(o,n.getProvider("app-check-internal")),xm(o,s),o);return i={useFetchStreams:t,...i},B._setSettings(i),B},"PUBLIC").setMultipleInstances(!0)),yn(hh,dh,e),yn(hh,dh,"esm2020")})();const Pw={projectId:"prem-predict-2627-agrim",appId:"1:807593138260:web:b4f3c34cae6130129a75c1",storageBucket:"prem-predict-2627-agrim.firebasestorage.app",apiKey:"AIzaSyCeIiArxu2DQ5d49PJ5p8EidhgwoxHMvSc",authDomain:"prem-predict-2627-agrim.firebaseapp.com",messagingSenderId:"807593138260"},YC=Wh(Pw),ta=Dw(YC,{ignoreUndefinedProperties:!0},"predictions-db"),Sw={matches:[],predictions:[],cards:[]},Xi=KB(ta,"matches"),Ch=KB(ta,"predictions"),Ka=KB(ta,"cards");let Ds=[];function Ut(r,e){return(typeof e=="object"&&e&&"code"in e?String(e.code):"")==="permission-denied"?new Error(`${r}: Firestore permission denied. Deploy the latest firestore.rules and try again.`):new Error(`${r}: ${e instanceof Error?e.message:String(e)}`)}function Vs(r,e,t,n=1){return e==="captain"?`${r}_captain_gw${t}`:`${r}_${e}_${n}`}function ys(r,e){return r.some(t=>t.slotId===e||t.id===e)}function Nw(r,e){const t=r.player,n=r.card;if(!t||!ge.includes(t)||!n||!nt[n])return null;const s=typeof r.gw=="number"?r.gw:Number(r.gw);if(!Number.isInteger(s)||s<1||s>38)return null;let i=typeof r.slotId=="string"&&r.slotId?r.slotId:"";if(!i){if(n==="captain"&&e===Vs(t,n,s))i=e;else if(n!=="captain"){for(let o=1;o<=nt[n].allowance;o++)if(e===Vs(t,n,s,o)){i=e;break}}}return i||(i=e),{id:e,slotId:i,gw:s,player:t,card:n,matchNo:(()=>{if(r.matchNo===void 0||r.matchNo===null||r.matchNo==="")return null;const o=Number(r.matchNo);return Number.isInteger(o)?o:null})(),target:r.target??null,note:r.note??null,createdByUid:typeof r.createdByUid=="string"?r.createdByUid:"",ts:typeof r.ts=="number"?r.ts:Date.now()}}function Ow(r){const e=nt[r.card];if(!e)return"Unknown card type.";if(!ge.includes(r.player))return"Unknown player.";if(!Number.isInteger(r.gw)||r.gw<1||r.gw>38)return"Gameweek must be between 1 and 38.";if(e.needsMatch){if(!Number.isInteger(r.matchNo)||r.matchNo<1||r.matchNo>10)return`${e.label} requires a match number from 1-10.`}else if(r.matchNo!==null)return`${e.label} does not use a match number.`;if(e.needsTarget){if(!r.target)return`${e.label} requires a target player.`;if(r.target===r.player)return"A player cannot target themselves."}else if(r.target!==null)return`${e.label} does not use a target player.`;return r.createdByUid?r.id!==r.slotId?"Invalid card slot.":null:"Missing authenticated user."}function fh(r){return r.card==="captain"?`Only 1 Captain is allowed for ${r.player} in GW${r.gw}.`:`That ${nt[r.card].label} slot has already been used.`}const me={state:{...Sw},loadError:null,_onUpdate:null,load(r,e){r&&(this._onUpdate=r);for(const n of Ds)n();Ds=[],this.loadError=null;let t=!0;Ds.push(qa(Xi,n=>{var s;this.state.matches=n.docs.map(i=>({...i.data(),id:i.id})),t&&(t=!1,e==null||e(this.state.matches)),(s=this._onUpdate)==null||s.call(this)},n=>{var s;this.loadError=Ut("Matches could not be loaded",n).message,(s=this._onUpdate)==null||s.call(this)})),Ds.push(qa(Ch,n=>{var s;this.state.predictions=n.docs.map(i=>i.data()),(s=this._onUpdate)==null||s.call(this)},n=>{var s;this.loadError=Ut("Predictions could not be loaded",n).message,(s=this._onUpdate)==null||s.call(this)})),Ds.push(qa(Ka,n=>{var s;this.state.cards=n.docs.map(i=>Nw(i.data(),i.id)).filter(i=>i!==null),this.loadError=null,(s=this._onUpdate)==null||s.call(this)},n=>{var s;this.state.cards=[],this.loadError=Ut("Cards could not be loaded",n).message,(s=this._onUpdate)==null||s.call(this)}))},async seedFixtures(r){const e=r.filter(t=>!this.state.matches.some(n=>n.gw===t.gw&&n.matchNo===t.matchNo));e.length&&await Promise.all(e.map(async t=>{const n={id:t.id,gw:t.gw,matchNo:t.matchNo,home:t.home,away:t.away,date:"",time:""};try{await ja(Er(Xi,n.id),n),this.state.matches.push(n)}catch(s){throw Ut("Fixture seed failed",s)}}))},getMatchesByGW(r){return this.state.matches.filter(e=>e.gw===r).sort((e,t)=>e.matchNo-t.matchNo)},getMatch(r){return this.state.matches.find(e=>e.id===r)},async addOrUpdateMatch(r){try{await ja(Er(Xi,r.id),r);const e=this.state.matches.findIndex(t=>t.id===r.id);e>=0?this.state.matches[e]=r:this.state.matches.push(r)}catch(e){throw Ut("Match could not be saved",e)}},getPredictionsForMatch(r){return this.state.predictions.filter(e=>e.matchId===r)},getPrediction(r,e){return this.state.predictions.find(t=>t.matchId===r&&t.player===e)},async setPrediction(r){try{await ja(Er(Ch,`${r.matchId}_${r.player}`),r);const e=this.state.predictions.findIndex(t=>t.matchId===r.matchId&&t.player===r.player);e>=0?this.state.predictions[e]=r:this.state.predictions.push(r)}catch(e){throw Ut("Prediction could not be saved",e)}},getCardsForGW(r){return this.state.cards.filter(e=>e.gw===r).sort((e,t)=>e.ts-t.ts)},getCardsByPlayer(r){return this.state.cards.filter(e=>e.player===r)},getAvailableCardSlot(r,e,t){if(e==="captain"){const s=Vs(r,e,t);return ys(this.state.cards,s)?null:s}const n=nt[e].allowance;for(let s=1;s<=n;s++){const i=Vs(r,e,t,s);if(!ys(this.state.cards,i))return i}return null},getCardRemaining(r,e,t){return nt[e].perGameweek?ys(this.state.cards,Vs(r,e,t))?0:1:Math.max(0,nt[e].allowance-this.state.cards.filter(n=>n.player===r&&n.card===e).length)},async addCard(r){const e=Ow(r);if(e)throw new Error(e);if(ys(this.state.cards,r.slotId))throw new Error(fh(r));const t={id:r.slotId,slotId:r.slotId,gw:r.gw,player:r.player,card:r.card,matchNo:r.matchNo??null,target:r.target??null,note:r.note??null,createdByUid:r.createdByUid,ts:r.ts},n=Er(Ka,t.id);try{await Rw(ta,async s=>{if((await s.get(n)).exists())throw new Error(fh(t));s.set(n,t)}),ys(this.state.cards,t.id)||this.state.cards.push(t)}catch(s){throw s instanceof Error&&(s.message.includes("already been used")||s.message.includes("Only 1 Captain"))?s:Ut("Card could not be saved",s)}},async removeCard(r){try{await uh(Er(Ka,r)),this.state.cards=this.state.cards.filter(e=>e.id!==r)}catch(e){throw Ut("Card could not be deleted",e)}},async deleteMatch(r){try{await uh(Er(Xi,r)),this.state.matches=this.state.matches.filter(e=>e.id!==r)}catch(e){throw Ut("Match could not be deleted",e)}}};function Fw(r,e=!1){return`
    <div class="tabs-container" style="display: flex; gap: 8px; margin-bottom: 20px; border-bottom: 1px solid var(--line); padding-bottom: 10px;">
      ${[{id:"leaderboard",label:"Leaderboard"},{id:"gameweek",label:"Gameweek"},{id:"cardlog",label:"Card Log"},...e?[{id:"fixtures",label:"Fixtures Setup"}]:[]].map(n=>`
        <button class="main-tab ${r===n.id?"active":""}" data-tab="${n.id}" style="
          background: ${r===n.id?"var(--pitch)":"transparent"};
          color: ${r===n.id?"#0d1712":"var(--muted)"};
          border: 1px solid ${r===n.id?"var(--pitch)":"var(--line)"};
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-family: 'Oswald', sans-serif;
          font-size: 14px;
          text-transform: uppercase;
        ">${n.label}</button>
      `).join("")}
    </div>
  `}function Lw(r){document.querySelectorAll(".main-tab").forEach(e=>{e.addEventListener("click",t=>{const n=t.currentTarget.dataset.tab;n&&r(n)})})}function XC(r,e,t,n){const s={};ge.forEach(h=>{s[h]={player:h,gw:r,rawPoints:0,finalPoints:0,breakdown:{}}});const i=e.filter(h=>h.gw===r);if(i.length===0)return s;const o=n.filter(h=>h.gw===r),B=t.map(h=>({...h})),l=o.filter(h=>h.card==="mirror");for(const h of l){if(!h.matchNo||!h.target)continue;const C=i.find(_=>_.matchNo===h.matchNo);if(!C)continue;const p=B.find(_=>_.matchId===C.id&&_.player===h.player);if(p&&p.home!==null&&p.away!==null){const _=B.findIndex(A=>A.matchId===C.id&&A.player===h.target);_>=0?(B[_].home=p.home,B[_].away=p.away):B.push({matchId:C.id,player:h.target,home:p.home,away:p.away})}}for(const h of i){if(!h.result){ge.forEach(Q=>{s[Q].breakdown[h.id]={matchId:h.id,outcomePts:0,scorePts:0,uniquePts:0,total:0}});continue}const{home:C,away:p}=h.result,_=C-p,A=B.filter(Q=>Q.matchId===h.id&&Q.home!==null&&Q.away!==null),L=[],M=[],G={};ge.forEach(Q=>G[Q]={outcome:0,score:0});for(const Q of A){const fe=Q.home,pe=Q.away,oe=fe-pe;(_>0&&oe>0||_<0&&oe<0||_===0&&oe===0)&&(G[Q.player].outcome=1,M.push(Q.player)),C===fe&&p===pe&&(G[Q.player].score=2,L.push(Q.player))}const ee={};ge.forEach(Q=>ee[Q]=0),L.length===1?ee[L[0]]=1:L.length===0&&M.length===1&&(ee[M[0]]=1),ge.forEach(Q=>{const fe=h.matchNo,pe=o.some(I=>I.player===Q&&I.card==="captain"&&I.matchNo===fe),oe=G[Q].outcome,v=G[Q].score,E=ee[Q],y=oe+v+E,R=pe?y*2:y;s[Q].breakdown[h.id]={matchId:h.id,outcomePts:oe,scorePts:v,uniquePts:E,total:R},s[Q].rawPoints+=y,s[Q].finalPoints+=R})}ge.forEach(h=>{const C=o.filter(p=>p.player===h&&p.card==="wildcard").length;C>0&&(s[h].finalPoints*=Math.pow(2,C))});const c=o.filter(h=>h.card==="chaos").length;if(c>0){const h=Math.pow(2,c);ge.forEach(C=>{s[C].finalPoints*=h})}return ge.forEach(h=>{o.some(p=>p.player===h&&p.card==="floor")&&s[h].finalPoints<5&&(s[h].finalPoints=5)}),s}function ZC(r,e){const t={};ge.forEach(n=>{t[n]=r[n].finalPoints});for(const n of e)if(n.card==="nemesis"&&n.target){const s=t[n.player],i=t[n.target];s>i&&(r[n.player].finalPoints+=3,r[n.target].finalPoints-=3)}}const yB={Agrim:"#4caf6d",Samarth:"#e0b94d",Dhairya:"#4c94d9",Luvi:"#a24450",Claude:"#5ec4b6"};let sr=null;function xw(){const r={};ge.forEach(l=>{r[l]=0});const e={};ge.forEach(l=>{e[l]={exactScores:0,correctOutcomes:0,uniques:0,cardsRemaining:0}});const t={};ge.forEach(l=>{let c=0,h=0;const C=me.getCardsByPlayer(l);Object.entries(nt).forEach(([p,_])=>{if(p==="captain")return;const A=C.filter(M=>M.card===p).length,L=Math.max(0,_.allowance-A);c+=L*2,h+=L}),t[l]=c,e[l].cardsRemaining=h});const n={};ge.forEach(l=>{n[l]=0});const s={};ge.forEach(l=>{s[l]=[]});const i=[];let o=0;for(let l=1;l<=38;l++)me.getMatchesByGW(l).some(h=>h.result)&&(o=l);const B=o;for(let l=1;l<=38;l++){const c=me.getCardsForGW(l),h=XC(l,me.state.matches,me.state.predictions,c);ZC(h,c),ge.forEach(C=>{r[C]+=h[C].finalPoints,l<=B&&(n[C]+=h[C].finalPoints),Object.values(h[C].breakdown).forEach(p=>{p.outcomePts>0&&e[C].correctOutcomes++,p.scorePts>0&&e[C].exactScores++,p.uniquePts>0&&e[C].uniques++})}),l<=B&&B>0&&(i.push(l),ge.forEach(C=>s[C].push(n[C])))}return sr=B>0?{gws:i,cumulative:s}:null,{totals:r,stats:e,bankValues:t,sortedPlayers:ge.slice().sort((l,c)=>r[c]-r[l])}}function kw(r){if(!r||r.gws.length===0)return`
      <div class="panel-box race-chart">
        <h2 class="race-chart-title">Season Race</h2>
        <p class="race-chart-empty">Cumulative points will appear here once results are logged.</p>
      </div>
    `;const e=720,t=320,n={top:24,right:28,bottom:40,left:44},s=e-n.left-n.right,i=t-n.top-n.bottom,o=r.gws.length,B=ge.flatMap(G=>r.cumulative[G]),l=Math.max(10,...B),c=Math.ceil(l*1.08),h=G=>n.left+(o===1?s/2:G/(o-1)*s),C=G=>n.top+i-G/c*i,p=4,_=Array.from({length:p+1},(G,ee)=>{const Q=Math.round(c/p*ee),fe=C(Q);return`<line class="race-grid" x1="${n.left}" y1="${fe}" x2="${e-n.right}" y2="${fe}" />
      <text class="race-axis-label" x="${n.left-8}" y="${fe+3}" text-anchor="end">${Q}</text>`}).join(""),A=r.gws.map((G,ee)=>o<=12||ee===0||ee===o-1||G%Math.ceil(o/8)===0?`<text class="race-axis-label" x="${h(ee)}" y="${t-14}" text-anchor="middle">GW${G}</text>`:"").join(""),L=ge.map(G=>{const ee=r.cumulative[G].map((pe,oe)=>`${h(oe)},${C(pe)}`).join(" "),Q=yB[G],fe=r.cumulative[G].map((pe,oe)=>`<circle class="race-dot" data-player="${G}" cx="${h(oe)}" cy="${C(pe)}" r="3.5" fill="${Q}" />`).join("");return`
      <polyline class="race-line-glow" points="${ee}" stroke="${Q}" />
      <polyline class="race-line" points="${ee}" stroke="${Q}" />
      ${fe}
    `}).join("");return`
    <div class="panel-box race-chart">
      <div class="race-chart-head">
        <h2 class="race-chart-title">Season Race</h2>
        <div class="race-legend">${ge.map(G=>`<span class="race-legend-item"><i style="background:${yB[G]}"></i>${G}</span>`).join("")}</div>
      </div>
      <div class="race-chart-stage" id="race-chart-stage">
        <svg id="race-chart-svg" viewBox="0 0 ${e} ${t}" role="img" aria-label="Cumulative points by gameweek">
          <defs>
            <linearGradient id="race-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#1a2420" stop-opacity="0.15"/>
              <stop offset="100%" stop-color="#10151a" stop-opacity="0.55"/>
            </linearGradient>
          </defs>
          <rect x="${n.left}" y="${n.top}" width="${s}" height="${i}" fill="url(#race-fade)" rx="4"/>
          ${_}
          ${L}
          ${A}
          <line id="race-crosshair" class="race-crosshair" x1="0" y1="${n.top}" x2="0" y2="${n.top+i}" visibility="hidden"/>
          <rect id="race-hit" class="race-hit" x="${n.left}" y="${n.top}" width="${s}" height="${i}" />
        </svg>
      </div>
      <div class="race-stats" id="race-chart-stats">
        <div class="race-stats-hint">Hover the chart to inspect standings by gameweek</div>
      </div>
    </div>
  `}function Vw(r,e){if(!sr)return"";const t=ge.map(n=>({player:n,pts:sr.cumulative[n][e],color:yB[n]})).sort((n,s)=>s.pts-n.pts);return`
    <div class="race-stats-gw">GW${r}</div>
    <div class="race-stats-list">
      ${t.map(n=>`
        <div class="race-stats-row">
          <span class="race-stats-name"><i style="background:${n.color}"></i>${n.player}</span>
          <span class="race-stats-pts">${n.pts}</span>
        </div>
      `).join("")}
    </div>
  `}function Mw(){const{totals:r,stats:e,bankValues:t,sortedPlayers:n}=xw();return`
    ${kw(sr)}
    <div class="panel-box" style="background:var(--panel); border:1px solid var(--line); border-radius:6px; padding:16px; overflow-x:auto; margin-top:18px;">
      <h2 style="font-family:'Oswald',sans-serif; font-size:16px; color:var(--chalk); margin-bottom:16px; text-transform:uppercase;">Overall Leaderboard</h2>
      
      <table style="width:100%; border-collapse: collapse; text-align: left; min-width:600px;">
        <thead>
          <tr style="border-bottom: 1px solid var(--line); color: var(--muted); font-size: 11px; font-family: 'JetBrains Mono', monospace;">
            <th style="padding: 8px 4px;">Pos</th>
            <th style="padding: 8px 4px;">Player</th>
            <th style="padding: 8px 4px;" title="Any correct outcome prediction">Correct Preds</th>
            <th style="padding: 8px 4px;" title="Exact scoreline predictions">Exact Scores</th>
            <th style="padding: 8px 4px;" title="Predictions where only you got it right">Uniques</th>
            <th style="padding: 8px 4px;">Cards Left</th>
            <th style="padding: 8px 4px;">Points</th>
            <th style="padding: 8px 4px;">Total (Points + Value Of Cards)</th>
          </tr>
        </thead>
        <tbody>
          ${n.map((s,i)=>`
            <tr style="border-bottom: 1px solid var(--line); font-size: 13px;">
              <td style="padding: 10px 4px; font-weight: bold; font-family: 'JetBrains Mono', monospace; color: var(--pitch);">${i+1}</td>
              <td style="padding: 10px 4px; font-family: 'Oswald', sans-serif; font-size: 15px;">${s}</td>
              <td style="padding: 10px 4px; font-family: 'JetBrains Mono', monospace; color: var(--chalk);">${e[s].correctOutcomes}</td>
              <td style="padding: 10px 4px; font-family: 'JetBrains Mono', monospace; color: var(--chalk);">${e[s].exactScores}</td>
              <td style="padding: 10px 4px; font-family: 'JetBrains Mono', monospace; color: var(--chalk);">${e[s].uniques}</td>
              <td style="padding: 10px 4px; font-family: 'JetBrains Mono', monospace; color: var(--chalk);">${e[s].cardsRemaining}</td>
              <td style="padding: 10px 4px; font-family: 'JetBrains Mono', monospace; font-weight: bold; font-size: 15px;">${r[s]}</td>
              <td style="padding: 10px 4px; font-family: 'JetBrains Mono', monospace; font-weight: bold; color: var(--chalk);">${r[s]+t[s]}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `}function Gw(){if(!sr||sr.gws.length===0)return;const r=document.getElementById("race-chart-svg"),e=document.getElementById("race-hit"),t=document.getElementById("race-crosshair"),n=document.getElementById("race-chart-stats");if(!r||!e||!t||!n)return;const s=sr,i=720,o=44,l=i-o-28,c=s.gws.length,h=_=>o+(c===1?l/2:_/(c-1)*l),C=_=>{const A=h(_);t.setAttribute("x1",String(A)),t.setAttribute("x2",String(A)),t.setAttribute("visibility","visible"),n.innerHTML=Vw(s.gws[_],_),n.classList.add("is-active"),r.querySelectorAll(".race-dot").forEach(L=>{const M=L,G=Number(M.getAttribute("cx"));M.classList.toggle("is-active",Math.abs(G-A)<.5)})},p=_=>{const A=r.getBoundingClientRect(),L=i/A.width,M=(_-A.left)*L;if(c===1)return 0;const G=(M-o)/l;return Math.max(0,Math.min(c-1,Math.round(G*(c-1))))};e.addEventListener("mousemove",_=>C(p(_.clientX))),e.addEventListener("mouseleave",()=>C(c-1)),C(c-1)}function ef(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hw=ef,tf=new oi("auth","Firebase",ef());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new AB("@firebase/auth");function nf(r,...e){Ro.logLevel<=le.WARN&&Ro.warn(`Auth (${$r}): ${r}`,...e)}function ao(r,...e){Ro.logLevel<=le.ERROR&&Ro.error(`Auth (${$r}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(r,...e){throw Tl(r,...e)}function xt(r,...e){return Tl(r,...e)}function rf(r,e,t){const n={...Hw(),[e]:t};return new oi("auth","Firebase",n).create(e,{appName:r.name})}function bn(r){return rf(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Tl(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return tf.create(r,...e)}function re(r,e,...t){if(!r)throw Tl(e,...t)}function $t(r){const e="INTERNAL ASSERTION FAILED: "+r;throw ao(e),new Error(e)}function Zt(r,e){r||$t(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wB(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function Uw(){return ph()==="http:"||ph()==="https:"}function ph(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uw()||Sp()||"connection"in navigator)?navigator.onLine:!0}function jw(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t){this.shortDelay=e,this.longDelay=t,Zt(t>e,"Short delay should be less than long delay!"),this.isMobile=Rp()||Np()}get(){return Jw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(r,e){Zt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],$w=new Di(3e4,6e4);function Cr(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function Hn(r,e,t,n,s={}){return of(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const B=ai({...o,key:r.config.apiKey}).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const c={method:e,headers:l,...i};return Pp()||(c.referrerPolicy="strict-origin-when-cross-origin"),r.emulatorConfig&&Bi(r.emulatorConfig.host)&&(c.credentials="include"),sf.fetch()(await af(r,r.config.apiHost,t,B),c)})}async function of(r,e,t){r._canInitEmulator=!1;const n={...qw,...e};try{const s=new Qw(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Zi(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const B=i.ok?o.errorMessage:o.error.message,[l,c]=B.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zi(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Zi(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw Zi(r,"user-disabled",o);const h=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw rf(r,h,c);Rt(r,h)}}catch(s){if(s instanceof en)throw s;Rt(r,"network-request-failed",{message:String(s)})}}async function na(r,e,t,n,s={}){const i=await Hn(r,e,t,n,s);return"mfaPendingCredential"in i&&Rt(r,"multi-factor-auth-required",{_serverResponse:i}),i}async function af(r,e,t,n){const s=`${e}${t}?${n}`,i=r,o=i.config.emulator?Al(r.config,s):`${r.config.apiScheme}://${s}`;return Kw.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function zw(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Qw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(xt(this.auth,"network-request-failed")),$w.get())})}}function Zi(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=xt(r,e,n);return s.customData._tokenResponse=t,s}function gh(r){return r!==void 0&&r.enterprise!==void 0}class Ww{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return zw(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Yw(r,e){return Hn(r,"GET","/v2/recaptchaConfig",Cr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xw(r,e){return Hn(r,"POST","/v1/accounts:delete",e)}async function bo(r,e){return Hn(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zw(r,e=!1){const t=Ge(r),n=await t.getIdToken(e),s=vl(n);re(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:Ms($a(s.auth_time)),issuedAtTime:Ms($a(s.iat)),expirationTime:Ms($a(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $a(r){return Number(r)*1e3}function vl(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return ao("JWT malformed, contained fewer than 3 sections"),null;try{const s=Jh(t);return s?JSON.parse(s):(ao("Failed to decode base64 JWT payload"),null)}catch(s){return ao("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function mh(r){const e=vl(r);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function si(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof en&&eI(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function eI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IB{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ms(this.lastLoginAt),this.creationTime=Ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(r){var C;const e=r.auth,t=await r.getIdToken(),n=await si(r,bo(e,{idToken:t}));re(n==null?void 0:n.users.length,e,"internal-error");const s=n.users[0];r._notifyReloadListener(s);const i=(C=s.providerUserInfo)!=null&&C.length?Bf(s.providerUserInfo):[],o=rI(r.providerData,i),B=r.isAnonymous,l=!(r.email&&s.passwordHash)&&!(o!=null&&o.length),c=B?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new IB(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(r,h)}async function nI(r){const e=Ge(r);await Po(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rI(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function Bf(r){return r.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(r,e){const t=await of(r,{},async()=>{const n=ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=await af(r,s,"/v1/token",`key=${i}`),B=await r._getAdditionalHeaders();B["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:B,body:n};return r.emulatorConfig&&Bi(r.emulatorConfig.host)&&(l.credentials="include"),sf.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function iI(r,e){return Hn(r,"POST","/v2/accounts:revokeToken",Cr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){re(e.length!==0,"internal-error");const t=mh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await sI(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new Nr;return n&&(re(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nr,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(r,e){re(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class vt{constructor({uid:e,auth:t,stsTokenManager:n,...s}){this.providerId="firebase",this.proactiveRefresh=new tI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new IB(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await si(this,this.stsTokenManager.getToken(this.auth,e));return re(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Zw(this,e)}reload(){return nI(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Po(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(At(this.auth.app))return Promise.reject(bn(this.auth));const e=await this.getIdToken();return await si(this,Xw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,B=t.tenantId??void 0,l=t._redirectEventId??void 0,c=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:C,emailVerified:p,isAnonymous:_,providerData:A,stsTokenManager:L}=t;re(C&&L,e,"internal-error");const M=Nr.fromJSON(this.name,L);re(typeof C=="string",e,"internal-error"),ln(n,e.name),ln(s,e.name),re(typeof p=="boolean",e,"internal-error"),re(typeof _=="boolean",e,"internal-error"),ln(i,e.name),ln(o,e.name),ln(B,e.name),ln(l,e.name),ln(c,e.name),ln(h,e.name);const G=new vt({uid:C,auth:e,email:s,emailVerified:p,displayName:n,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:B,stsTokenManager:M,createdAt:c,lastLoginAt:h});return A&&Array.isArray(A)&&(G.providerData=A.map(ee=>({...ee}))),l&&(G._redirectEventId=l),G}static async _fromIdTokenResponse(e,t,n=!1){const s=new Nr;s.updateFromServerResponse(t);const i=new vt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await Po(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];re(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Bf(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),B=new Nr;B.updateFromIdToken(n);const l=new vt({uid:s.localId,auth:e,stsTokenManager:B,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new IB(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=new Map;function zt(r){Zt(r instanceof Function,"Expected a class definition");let e=Eh.get(r);return e?(Zt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Eh.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}lf.type="NONE";const _h=lf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(r,e,t){return`firebase:${r}:${e}:${t}`}class Or{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=Bo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Bo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await bo(this.auth,{idToken:e}).catch(()=>{});return t?vt._fromGetAccountInfoResponse(this.auth,t,e):null}return vt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Or(zt(_h),e,n);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||zt(_h);const o=Bo(n,e.config.apiKey,e.name);let B=null;for(const c of t)try{const h=await c._get(o);if(h){let C;if(typeof h=="string"){const p=await bo(e,{idToken:h}).catch(()=>{});if(!p)break;C=await vt._fromGetAccountInfoResponse(e,p,h)}else C=vt._fromJSON(e,h);c!==i&&(B=C),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Or(i,e,n):(i=l[0],B&&await i._set(o,B.toJSON()),await Promise.all(t.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Or(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(df(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(cf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ff(e))return"Blackberry";if(pf(e))return"Webos";if(uf(e))return"Safari";if((e.includes("chrome/")||hf(e))&&!e.includes("edge/"))return"Chrome";if(Cf(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function cf(r=We()){return/firefox\//i.test(r)}function uf(r=We()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function hf(r=We()){return/crios\//i.test(r)}function df(r=We()){return/iemobile/i.test(r)}function Cf(r=We()){return/android/i.test(r)}function ff(r=We()){return/blackberry/i.test(r)}function pf(r=We()){return/webos/i.test(r)}function Rl(r=We()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function oI(r=We()){var e;return Rl(r)&&!!((e=window.navigator)!=null&&e.standalone)}function aI(){return Op()&&document.documentMode===10}function gf(r=We()){return Rl(r)||Cf(r)||pf(r)||ff(r)||/windows phone/i.test(r)||df(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mf(r,e=[]){let t;switch(r){case"Browser":t=Dh(We());break;case"Worker":t=`${Dh(We())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${$r}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,B)=>{try{const l=e(i);o(l)}catch(l){B(l)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(r,e={}){return Hn(r,"GET","/v2/passwordPolicy",Cr(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI=6;class uI{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??cI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yh(this),this.idTokenSubscription=new yh(this),this.beforeStateQueue=new BI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=zt(t)),this._initializationPromise=this.queue(async()=>{var n,s,i;if(!this._deleted&&(this.persistenceManager=await Or.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await bo(this,{idToken:e}),n=await vt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(At(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(B=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(B,B))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,B=n==null?void 0:n._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===B)&&(l!=null&&l.user)&&(n=l.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(n)}catch(o){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Po(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(At(this.app))return Promise.reject(bn(this));const t=e?Ge(e):null;return t&&re(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return At(this.app)?Promise.reject(bn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return At(this.app)?Promise.reject(bn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lI(this),t=new uI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new oi("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await iI(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&zt(e)||this._popupRedirectResolver;re(t,this,"argument-error"),this.redirectPersistenceManager=await Or.create(this,[zt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const B=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(B,this,"internal-error"),B.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(At(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&nf(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ts(r){return Ge(r)}class yh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Gp(t=>this.observer=t)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ra={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dI(r){ra=r}function Ef(r){return ra.loadJS(r)}function CI(){return ra.recaptchaEnterpriseScript}function fI(){return ra.gapiScript}function pI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class gI{constructor(){this.enterprise=new mI}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class mI{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EI="recaptcha-enterprise",_f="NO_RECAPTCHA",wh="onFirebaseAuthREInstanceReady";class Cn{constructor(e){this.type=EI,this.auth=ts(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,B)=>{Yw(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)B(new Error("recaptcha Enterprise site key undefined"));else{const c=new Ww(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{B(l)})})}function s(i,o,B){const l=window.grecaptcha;gh(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(_f)})}):B(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new gI().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{n(this.auth).then(async B=>{if(!t&&gh(window.grecaptcha)&&Cn.scriptInjectionDeferred)await Cn.scriptInjectionDeferred.promise,s(B,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=CI();l.length!==0&&(l+=B+`&onload=${wh}`),Cn.scriptInjectionDeferred=new Kh,window[wh]=()=>{var c;(c=Cn.scriptInjectionDeferred)==null||c.resolve()},Ef(l).then(()=>{var c;return(c=Cn.scriptInjectionDeferred)==null?void 0:c.promise}).then(()=>{s(B,i,o)}).catch(c=>{o(c)})}}).catch(B=>{o(B)})})}}Cn.scriptInjectionDeferred=null;async function Ih(r,e,t,n=!1,s=!1){const i=new Cn(r);let o;if(s)o=_f;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const B={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in B){const l=B.phoneEnrollmentInfo.phoneNumber,c=B.phoneEnrollmentInfo.recaptchaToken;Object.assign(B,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in B){const l=B.phoneSignInInfo.recaptchaToken;Object.assign(B,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return B}return n?Object.assign(B,{captchaResp:o}):Object.assign(B,{captchaResponse:o}),Object.assign(B,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(B,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),B}async function Th(r,e,t,n,s){var i;if((i=r._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ih(r,e,t,t==="getOobCode");return n(r,o)}else return n(r,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const B=await Ih(r,e,t,t==="getOobCode");return n(r,B)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(r,e){const t=RB(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ir(i,e??{}))return s;Rt(s,"already-initialized")}return t.initialize({options:e})}function DI(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(zt);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function yI(r,e,t){const n=ts(r);re(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=Df(e),{host:o,port:B}=wI(e),l=B===null?"":`:${B}`,c={url:`${i}//${o}${l}/`},h=Object.freeze({host:o,port:B,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!n._canInitEmulator){re(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),re(ir(c,n.config.emulator)&&ir(h,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=c,n.emulatorConfig=h,n.settings.appVerificationDisabledForTesting=!0,Bi(o)?$h(`${i}//${o}${l}`):II()}function Df(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function wI(r){const e=Df(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:Ah(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:Ah(o)}}}function Ah(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function II(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return $t("not implemented")}_getIdTokenResponse(e){return $t("not implemented")}_linkToIdToken(e,t){return $t("not implemented")}_getReauthenticationResolver(e){return $t("not implemented")}}async function TI(r,e){return Hn(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AI(r,e){return na(r,"POST","/v1/accounts:signInWithPassword",Cr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vI(r,e){return na(r,"POST","/v1/accounts:signInWithEmailLink",Cr(r,e))}async function RI(r,e){return na(r,"POST","/v1/accounts:signInWithEmailLink",Cr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends bl{constructor(e,t,n,s=null){super("password",n),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ii(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ii(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Th(e,t,"signInWithPassword",AI);case"emailLink":return vI(e,{email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Th(e,n,"signUpPassword",TI);case"emailLink":return RI(e,{idToken:t,email:this._email,oobCode:this._password});default:Rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(r,e){return na(r,"POST","/v1/accounts:signInWithIdp",Cr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI="http://localhost";class cr extends bl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s,...i}=t;if(!n||!s)return null;const o=new cr(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Fr(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Fr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fr(e,t)}buildRequest(){const e={requestUri:bI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ai(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function SI(r){const e=Is(Ts(r)).link,t=e?Is(Ts(e)).deep_link_id:null,n=Is(Ts(r)).deep_link_id;return(n?Is(Ts(n)).link:null)||n||t||e||r}class Pl{constructor(e){const t=Is(Ts(e)),n=t.apiKey??null,s=t.oobCode??null,i=PI(t.mode??null);re(n&&s&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=s,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=SI(e);try{return new Pl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.providerId=ns.PROVIDER_ID}static credential(e,t){return ii._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Pl.parseLink(t);return re(n,"argument-error"),ii._fromEmailAndCode(e,n.code,n.tenantId)}}ns.PROVIDER_ID="password";ns.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ns.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends yf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends yi{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends yi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return cr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return pn.credential(t,n)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends yi{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends yi{constructor(){super("twitter.com")}static credential(e,t){return cr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return mn.credential(t,n)}catch{return null}}}mn.TWITTER_SIGN_IN_METHOD="twitter.com";mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await vt._fromIdTokenResponse(e,n,s),o=vh(n);return new Kr({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=vh(n);return new Kr({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function vh(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends en{constructor(e,t,n,s){super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,So.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new So(e,t,n,s)}}function wf(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?So._fromErrorAndOperation(r,i,e,n):i})}async function NI(r,e,t=!1){const n=await si(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return Kr._forOperation(r,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(r,e,t=!1){const{auth:n}=r;if(At(n.app))return Promise.reject(bn(n));const s="reauthenticate";try{const i=await si(r,wf(n,s,e,r),t);re(i.idToken,n,"internal-error");const o=vl(i.idToken);re(o,n,"internal-error");const{sub:B}=o;return re(r.uid===B,n,"user-mismatch"),Kr._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Rt(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function If(r,e,t=!1){if(At(r.app))return Promise.reject(bn(r));const n="signIn",s=await wf(r,n,e),i=await Kr._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}async function FI(r,e){return If(ts(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LI(r){const e=ts(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function xI(r,e,t){return At(r.app)?Promise.reject(bn(r)):FI(Ge(r),ns.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&LI(r),n})}function kI(r,e,t,n){return Ge(r).onIdTokenChanged(e,t,n)}function VI(r,e,t){return Ge(r).beforeAuthStateChanged(e,t)}function MI(r,e,t,n){return Ge(r).onAuthStateChanged(e,t,n)}function GI(r){return Ge(r).signOut()}const No="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(No,"1"),this.storage.removeItem(No),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=1e3,UI=10;class Af extends Tf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=gf(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,B,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);aI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,UI):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},HI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Af.type="LOCAL";const JI=Af;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf extends Tf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vf.type="SESSION";const Rf=vf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new sa(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const B=Array.from(o).map(async c=>c(t.origin,i)),l=await jI(B);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}sa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((B,l)=>{const c=Sl("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(C){const p=C;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),B(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return window}function KI(r){kt().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(){return typeof kt().WorkerGlobalScope<"u"&&typeof kt().importScripts=="function"}async function $I(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function QI(){return bf()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="firebaseLocalStorageDb",WI=1,Oo="firebaseLocalStorage",Sf="fbase_key";class wi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ia(r,e){return r.transaction([Oo],e?"readwrite":"readonly").objectStore(Oo)}function YI(){const r=indexedDB.deleteDatabase(Pf);return new wi(r).toPromise()}function Nf(){const r=indexedDB.open(Pf,WI);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore(Oo,{keyPath:Sf})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains(Oo)?e(n):(n.close(),await YI(),e(await Nf()))})})}async function Rh(r,e,t){const n=ia(r,!0).put({[Sf]:e,value:t});return new wi(n).toPromise()}async function XI(r,e){const t=ia(r,!1).get(e),n=await new wi(t).toPromise();return n===void 0?null:n.value}function bh(r,e){const t=ia(r,!0).delete(e);return new wi(t).toPromise()}const ZI=800,eT=3;class Of{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.isClosing)throw new Error("Database is closing");return this.dbPromise?this.dbPromise:(this.dbPromise=Nf(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(this.isClosing||t++>eT)throw n;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return bf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=sa._getInstance(QI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await $I(),!this.activeServiceWorker)return;this.sender=new qI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await Rh(e,No,"1"),await bh(e,No)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rh(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>XI(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>bh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(s=>{const i=ia(s,!1).getAll();return new wi(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}catch(e){return this.isClosing||nf(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}Of.type="LOCAL";const tT=Of;new Di(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(r,e){return e?zt(e):(re(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl extends bl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rT(r){return If(r.auth,new Nl(r),r.bypassAuthState)}function sT(r){const{auth:e,user:t}=r;return re(t,e,"internal-error"),OI(t,new Nl(r),r.bypassAuthState)}async function iT(r){const{auth:e,user:t}=r;return re(t,e,"internal-error"),NI(t,new Nl(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:B}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(B)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rT;case"linkViaPopup":case"linkViaRedirect":return iT;case"reauthViaPopup":case"reauthViaRedirect":return sT;default:Rt(this.auth,"internal-error")}}resolve(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT=new Di(2e3,1e4);class br extends Ff{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,br.currentPopupAction&&br.currentPopupAction.cancel(),br.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Zt(this.filter.length===1,"Popup operations only handle one event");const e=Sl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,br.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,oT.get())};e()}}br.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT="pendingRedirect",lo=new Map;class BT extends Ff{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=lo.get(this.auth._key());if(!e){try{const n=await lT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}lo.set(this.auth._key(),e)}return this.bypassAuthState||lo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lT(r,e){const t=hT(e),n=uT(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}function cT(r,e){lo.set(r._key(),e)}function uT(r){return zt(r._redirectPersistence)}function hT(r){return Bo(aT,r.config.apiKey,r.name)}async function dT(r,e,t=!1){if(At(r.app))return Promise.reject(bn(r));const n=ts(r),s=nT(n,e),o=await new BT(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=10*60*1e3;class fT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Lf(e)){const s=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError(xt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ph(e))}saveEventToCache(e){this.cachedEventUids.add(Ph(e)),this.lastProcessedEventTime=Date.now()}}function Ph(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function Lf({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pT(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lf(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gT(r,e={}){return Hn(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ET=/^https?/;async function _T(r){if(r.config.emulator)return;const{authorizedDomains:e}=await gT(r);for(const t of e)try{if(DT(t))return}catch{}Rt(r,"unauthorized-domain")}function DT(r){const e=wB(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!ET.test(t))return!1;if(mT.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT=new Di(3e4,6e4);function Sh(){const r=kt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function wT(r){return new Promise((e,t)=>{var s,i,o;function n(){Sh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sh(),t(xt(r,"network-request-failed"))},timeout:yT.get()})}if((i=(s=kt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=kt().gapi)!=null&&o.load)n();else{const B=pI("iframefcb");return kt()[B]=()=>{gapi.load?n():t(xt(r,"network-request-failed"))},Ef(`${fI()}?onload=${B}`).catch(l=>t(l))}}).catch(e=>{throw co=null,e})}let co=null;function IT(r){return co=co||wT(r),co}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=new Di(5e3,15e3),AT="__/auth/iframe",vT="emulator/auth/iframe",RT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PT(r){const e=r.config;re(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Al(e,vT):`https://${r.config.authDomain}/${AT}`,n={apiKey:e.apiKey,appName:r.name,v:$r},s=bT.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${ai(n).slice(1)}`}async function ST(r){const e=await IT(r),t=kt().gapi;return re(t,r,"internal-error"),e.open({where:document.body,url:PT(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RT,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=xt(r,"network-request-failed"),B=kt().setTimeout(()=>{i(o)},TT.get());function l(){kt().clearTimeout(B),s(n)}n.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OT=500,FT=600,LT="_blank",xT="http://localhost";class Nh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function kT(r,e,t,n=OT,s=FT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let B="";const l={...NT,width:n.toString(),height:s.toString(),top:i,left:o},c=We().toLowerCase();t&&(B=hf(c)?LT:t),cf(c)&&(e=e||xT,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[_,A])=>`${p}${_}=${A},`,"");if(oI(c)&&B!=="_self")return VT(e||"",B),new Nh(null);const C=window.open(e||"",B,h);re(C,r,"popup-blocked");try{C.focus()}catch{}return new Nh(C)}function VT(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT="__/auth/handler",GT="emulator/auth/handler",HT=encodeURIComponent("fac");async function Oh(r,e,t,n,s,i){re(r.config.authDomain,r,"auth-domain-config-required"),re(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:$r,eventId:s};if(e instanceof yf){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",Mp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,C]of Object.entries({}))o[h]=C}if(e instanceof yi){const h=e.getScopes().filter(C=>C!=="");h.length>0&&(o.scopes=h.join(","))}r.tenantId&&(o.tid=r.tenantId);const B=o;for(const h of Object.keys(B))B[h]===void 0&&delete B[h];const l=await r._getAppCheckToken(),c=l?`#${HT}=${encodeURIComponent(l)}`:"";return`${UT(r)}?${ai(B).slice(1)}${c}`}function UT({config:r}){return r.emulator?Al(r,GT):`https://${r.authDomain}/${MT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="webStorageSupport";class JT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Rf,this._completeRedirectFn=dT,this._overrideRedirectResult=cT}async _openPopup(e,t,n,s){var o;Zt((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Oh(e,t,n,wB(),s);return kT(e,i,Sl())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await Oh(e,t,n,wB(),s);return KI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(Zt(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await ST(e),n=new fT(e);return t.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(za,{type:za},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[za];i!==void 0&&t(!!i),Rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_T(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return gf()||uf()||Rl()}}const jT=JT;var Fh="@firebase/auth",Lh="1.13.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $T(r){xr(new or("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:B}=n.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:B,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mf(r)},c=new hI(n,s,i,l);return DI(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),xr(new or("auth-internal",e=>{const t=ts(e.getProvider("auth").getImmediate());return(n=>new qT(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(Fh,Lh,KT(r)),yn(Fh,Lh,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT=5*60,QT=qh("authIdTokenMaxAge")||zT;let xh=null;const WT=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>QT)return;const s=t==null?void 0:t.token;xh!==s&&(xh=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function YT(r=Hg()){const e=RB(r,"auth");if(e.isInitialized())return e.getImmediate();const t=_I(r,{popupRedirectResolver:jT,persistence:[tT,JI,Rf]}),n=qh("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=WT(i.toString());VI(t,o,()=>o(t.currentUser)),kI(t,B=>o(B))}}const s=vp("auth");return s&&yI(t,`http://${s}`),t}function XT(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}dI({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=xt("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",XT().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$T("Browser");const ws="prem-predict-2627-agrim.firebaseapp.com",Ol={AGRIM:{id:"AGRIM",player:"Agrim",role:"admin",email:`agrim@${ws}`},SAMARTH:{id:"SAMARTH",player:"Samarth",role:"player",email:`samarth@${ws}`},DHAIRYA:{id:"DHAIRYA",player:"Dhairya",role:"player",email:`dhairya@${ws}`},LUVI:{id:"LUVI",player:"Luvi",role:"player",email:`luvi@${ws}`},CLAUDE:{id:"CLAUDE",player:"Claude",role:"player",email:`claude@${ws}`}};Ol.AGRIM.email;const Fl=YT(YC);let xf=null,Lr=null;function ZT(r){return r?Object.values(Ol).find(e=>e.email.toLowerCase()===r.toLowerCase())??null:null}function eA(r){return Ol[r.trim().toUpperCase()]??null}function Ii(){return Lr}function tA(){return xf}function Ti(){return(Lr==null?void 0:Lr.role)==="admin"}async function nA(r,e){const t=eA(r);if(!t)throw new Error("Unknown player ID.");if(!e)throw new Error("Enter your passcode.");return await xI(Fl,t.email,e),t}async function rA(){await GI(Fl)}function sA(r){return MI(Fl,e=>{xf=e,Lr=ZT(e==null?void 0:e.email),r(Lr)})}let hn=1;function iA(){const r=Ii(),e=Ti(),t=r==null?void 0:r.player;let n=`
    <div style="margin-bottom: 16px; display: flex; align-items: center; gap: 12px;">
      <label style="font-family:'Oswald',sans-serif; color:var(--chalk);">Select GW:</label>
      <input type="number" id="gw-select" min="1" max="38" value="${hn}" style="background:var(--ink); border:1px solid var(--line); color:var(--chalk); padding:6px; width:60px; border-radius:4px; font-family:'JetBrains Mono',monospace;">
      ${e?"":`<span style="font-size:11px;color:var(--pitch);font-family:'JetBrains Mono',monospace;">EDITING AS ${t==null?void 0:t.toUpperCase()} · ALL PICKS VISIBLE</span>`}
    </div>
  `;const s=me.getMatchesByGW(hn);if(s.length===0)return n+`<div class="panel-box" style="padding:20px; color:var(--muted); text-align:center;">No fixtures set up for GW${hn}. ${e?"Go to Fixtures Setup to add them.":"The administrator has not set them up yet."}</div>`;n+='<div style="display:flex; flex-direction:column; gap:16px;">',s.forEach(B=>{n+=`
      <div class="panel-box" style="background:var(--panel); border:1px solid var(--line); border-radius:6px; padding:16px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid var(--line); padding-bottom:8px; gap:12px; flex-wrap:wrap;">
          <h3 style="font-family:'Oswald',sans-serif; font-size:16px; margin:0;">Match ${B.matchNo}: ${B.home} vs ${B.away}</h3>
          ${e?`
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-size:12px; color:var(--muted); font-family:'JetBrains Mono',monospace;">Result:</span>
              <input type="number" class="res-input" data-match="${B.id}" data-team="home" value="${B.result?B.result.home:""}" placeholder="H" style="width:40px; background:var(--ink); border:1px solid var(--line); color:var(--chalk); padding:4px; text-align:center;">
              <span>-</span>
              <input type="number" class="res-input" data-match="${B.id}" data-team="away" value="${B.result?B.result.away:""}" placeholder="A" style="width:40px; background:var(--ink); border:1px solid var(--line); color:var(--chalk); padding:4px; text-align:center;">
              <button class="save-res-btn" data-match="${B.id}" style="background:var(--pitch); border:none; padding:4px 8px; border-radius:4px; cursor:pointer; font-weight:bold;">Save</button>
            </div>
          `:`<span style="font-size:12px;color:var(--muted);font-family:'JetBrains Mono',monospace;">${B.result?`FINAL ${B.result.home}-${B.result.away}`:"RESULT PENDING"}</span>`}
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(180px, 1fr)); gap:12px;">
          ${ge.map(l=>{const c=me.getPrediction(B.id,l),h=e||l===t;return`
              <div style="background:var(--ink); padding:10px; border-radius:4px; border:1px solid ${l===t?"var(--pitch)":"var(--line)"};">
                <div style="display:flex;justify-content:space-between;align-items:center;font-size:12px;color:${l===t?"var(--pitch)":"var(--muted)"};margin-bottom:6px;font-weight:bold;">
                  <span>${l}${l===t&&!e?" · YOU":""}</span>
                  ${h?'<span style="font-size:9px;color:var(--pitch);font-family:JetBrains Mono,monospace;">EDIT</span>':'<span style="font-size:9px;color:var(--muted);font-family:JetBrains Mono,monospace;">VIEW</span>'}
                </div>
                <div style="display:flex; gap:4px; align-items:center;">
                  <input type="number" class="pred-input" data-match="${B.id}" data-player="${l}" data-team="home" value="${c&&c.home!==null?c.home:""}" placeholder="H" ${h?"":"readonly"} style="width:48px; background:var(--panel); border:1px solid var(--line); color:var(--chalk); padding:5px; text-align:center; ${h?"":"opacity:.65;cursor:not-allowed;"}">
                  <span>-</span>
                  <input type="number" class="pred-input" data-match="${B.id}" data-player="${l}" data-team="away" value="${c&&c.away!==null?c.away:""}" placeholder="A" ${h?"":"readonly"} style="width:48px; background:var(--panel); border:1px solid var(--line); color:var(--chalk); padding:5px; text-align:center; ${h?"":"opacity:.65;cursor:not-allowed;"}">
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
    `}),n+="</div>",n+=`<div style="margin-top:20px;"><button id="save-all-preds" style="background:var(--pitch); color:#0d1712; padding:10px 20px; border:none; border-radius:4px; font-family:'Oswald',sans-serif; font-size:14px; font-weight:bold; cursor:pointer;">SAVE ${e?"ALL":"MY"} PREDICTIONS FOR GW${hn}</button></div>`;const i=me.getCardsForGW(hn),o=XC(hn,s,me.state.predictions,i);return ZC(o,i),n+=`
    <div class="panel-box" style="background:var(--panel-2); border:1px solid var(--line); border-radius:6px; padding:16px; margin-top:24px;">
      <h3 style="font-family:'Oswald',sans-serif; margin-bottom:12px;">GW${hn} Points Breakdown</h3>
      <table style="width:100%; border-collapse: collapse; text-align: left; font-size:13px;">
        <thead><tr style="border-bottom:1px solid var(--line);color:var(--muted);font-family:'JetBrains Mono',monospace;"><th style="padding:8px 4px;">Player</th><th style="padding:8px 4px;">Raw Pts</th><th style="padding:8px 4px;">Cards Applied</th><th style="padding:8px 4px;">Final GW Pts</th></tr></thead>
        <tbody>${ge.map(B=>{const l=o[B],h=i.filter(C=>C.player===B||C.target===B||C.card==="chaos").map(C=>C.card==="chaos"?'<span style="color:var(--red)">CHAOS</span>':C.player===B?`<span style="color:var(--pitch)">${C.card.toUpperCase()}</span>`:`<span style="color:var(--maroon)">Target of ${C.card}</span>`).join(", ");return`<tr style="border-bottom:1px solid var(--line);"><td style="padding:8px 4px;font-weight:bold;">${B}</td><td style="padding:8px 4px;font-family:'JetBrains Mono',monospace;">${l.rawPoints}</td><td style="padding:8px 4px;font-size:11px;">${h||"-"}</td><td style="padding:8px 4px;font-weight:bold;font-family:'JetBrains Mono',monospace;color:var(--pitch);">${l.finalPoints}</td></tr>`}).join("")}</tbody>
      </table>
    </div>
  `,n}function oA(r){var s;const e=Ti(),t=Ii(),n=document.getElementById("gw-select");n&&n.addEventListener("change",i=>{hn=parseInt(i.target.value,10),r()}),e&&document.querySelectorAll(".save-res-btn").forEach(i=>i.addEventListener("click",async o=>{const B=o.currentTarget.dataset.match;if(!B)return;const l=document.querySelector(`.res-input[data-match="${B}"][data-team="home"]`),c=document.querySelector(`.res-input[data-match="${B}"][data-team="away"]`),h=me.getMatch(B);h&&(h.result=l.value===""||c.value===""?void 0:{home:parseInt(l.value,10),away:parseInt(c.value,10)},await me.addOrUpdateMatch(h),r())})),(s=document.getElementById("save-all-preds"))==null||s.addEventListener("click",async()=>{const i=document.querySelectorAll(".pred-input"),o={};i.forEach(B=>{const l=B,c=l.dataset.match,h=l.dataset.player,C=l.dataset.team;if(!(e||h===(t==null?void 0:t.player)))return;const _=c+"_"+h;o[_]||(o[_]={matchId:c,player:h,home:null,away:null}),l.value!==""&&(C==="home"&&(o[_].home=parseInt(l.value,10)),C==="away"&&(o[_].away=parseInt(l.value,10)))}),await Promise.all(Object.values(o).map(B=>me.setPrediction(B))),r()})}function aA(r,e,t){const n=nt[r];return{matchNo:n.needsMatch?e:null,target:n.needsTarget?t:null}}function BA(r,e,t){const n=nt[r];return n.needsMatch&&(!Number.isInteger(e)||e<1||e>10)?`${n.label} requires a match number from 1-10.`:n.needsTarget?t?null:`${n.label} requires a target player.`:null}function kf(r,e){return Object.entries(nt).map(([t,n])=>{const s=t,i=me.getCardRemaining(r,s,e),o=i<=0;return`<option value="${s}" ${o?"disabled":""}>${n.label} · ${n.perGameweek?o?"USED THIS GW":"1 THIS GW":`${i} LEFT`}</option>`}).join("")}function TB(){const r=document.getElementById("fc-card"),e=document.getElementById("fc-match"),t=document.getElementById("fc-target");if(!r||!e||!t)return;const n=r.value,s=nt[n];s&&(e.disabled=!s.needsMatch,s.needsMatch||(e.value=""),t.disabled=!s.needsTarget,s.needsTarget||(t.value=""))}function kh(r,e){const t=r??ge[0];return`<div class="panel-box" style="background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:16px;">
    <h2 style="font-family:'Oswald',sans-serif;color:var(--muted);margin-bottom:12px;font-size:14px;text-transform:uppercase;">${e?"Admin Card Controls":"Play Your Card"}</h2>
    <div style="font-size:11px;color:${e?"var(--gold)":"var(--pitch)"};font-family:'JetBrains Mono',monospace;margin-bottom:12px;">${e?"ADMIN OVERRIDE · LOG OR REMOVE ANY PLAYER CARD":`PLAYING AS ${t.toUpperCase()} · ONLY YOUR CARD INVENTORY IS AVAILABLE`}</div>
    <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;">
      <div><label>Gameweek</label><input type="number" id="fc-gw" min="1" max="38" value="1"></div>
      ${e?`<div><label>Player</label><select id="fc-player">${ge.map(n=>`<option value="${n}">${n}</option>`).join("")}</select></div>`:`<input type="hidden" id="fc-player" value="${t}"><div><label>Player</label><input value="${t}" disabled></div>`}
      <div><label>Card</label><select id="fc-card">${kf(t,1)}</select></div>
      <div><label>Match No. <span style="color:var(--muted)">(Captain/Mirror only)</span></label><input type="number" id="fc-match" min="1" max="10" placeholder="—"></div>
      <div><label>Target <span style="color:var(--muted)">(Mirror/Nemesis only)</span></label><select id="fc-target"><option value="">—</option>${ge.filter(n=>n!==t).map(n=>`<option value="${n}">${n}</option>`).join("")}</select></div>
      <div><label>Note</label><input type="text" id="fc-note" placeholder="Reasoning / receipt..."></div>
    </div>
    <div id="fc-warn" style="color:var(--red);font-size:12px;margin-top:10px;min-height:17px;"></div>
    <button id="fc-submit" style="width:100%;margin-top:10px;background:var(--pitch);color:#0d1712;border:none;padding:10px;border-radius:4px;font-family:'Oswald',sans-serif;font-size:14px;font-weight:600;text-transform:uppercase;cursor:pointer;">${e?"Log Card":"Play This Card"}</button>
  </div>`}function lA(r){return`<div class="panel-box" style="background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:16px;">
    <h2 style="font-family:'Oswald',sans-serif;color:var(--muted);margin-bottom:12px;font-size:14px;text-transform:uppercase;">Your Card Arsenal · ${r}</h2>
    <div style="display:flex;flex-direction:column;gap:8px;">
      ${Object.entries(nt).map(([e,t])=>{const n=e,s=me.getCardRemaining(r,n,1),i=t.perGameweek?"1 EACH GW":`${s} / ${t.allowance} LEFT`,o=!t.perGameweek&&s<=0;return`<div style="border:1px solid ${t.color}55;background:var(--ink);border-radius:5px;padding:10px 12px;opacity:${o?"0.55":"1"};">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;">
            <div><span style="display:inline-block;background:${t.color};color:#0d1712;padding:2px 7px;border-radius:3px;font:700 10px 'Oswald',sans-serif;margin-right:7px;">${t.short}</span><b style="font-size:13px;">${t.label}</b></div>
            <span style="font:700 11px 'JetBrains Mono',monospace;color:${o?"var(--muted)":"var(--pitch)"};">${i}</span>
          </div>
          <div style="font-size:11px;color:var(--muted);margin-top:6px;line-height:1.4;">${t.desc}</div>
        </div>`}).join("")}
    </div>
  </div>`}function Vh(r){const e=me.loadError,t=[...me.state.cards].sort((n,s)=>s.ts-n.ts);return`<div class="panel-box" style="background:var(--panel);border:1px solid var(--line);border-radius:6px;padding:16px;">
    <h2 style="font-family:'Oswald',sans-serif;color:var(--muted);margin-bottom:12px;font-size:14px;text-transform:uppercase;">Cards in Play</h2>
    <div style="color:var(--muted);font-size:11px;margin-bottom:12px;font-family:'JetBrains Mono',monospace;">ALL CARD PLAYS · ${r?"ADMIN CONTROL":"READ-ONLY HISTORY"}</div>
    ${e?`<div style="color:var(--red);font-size:12px;margin-bottom:12px;">${e}</div>`:""}
    <div style="display:flex;flex-direction:column;gap:10px;">
      ${t.length?t.map(n=>{const s=nt[n.card];if(!s)return`<div style="padding:9px 0;border-bottom:1px solid var(--line);color:var(--muted);font-size:12px;">Unknown card play · ${n.player} · GW${n.gw}</div>`;const i=[`GW${n.gw}`];return n.matchNo!==null&&i.push(`Match ${n.matchNo}`),n.target&&i.push(`vs ${n.target}`),n.note&&i.push(n.note),`<div style="display:flex;gap:10px;align-items:flex-start;padding:9px 0;border-bottom:1px solid var(--line);">
          <div style="flex:0 0 46px;height:60px;border-radius:5px;display:flex;align-items:center;justify-content:center;text-align:center;font-family:'Oswald',sans-serif;font-size:10px;font-weight:600;line-height:1.15;color:#0d1712;background:${s.color};">${s.short}</div>
          <div style="flex:1;"><div style="font-size:13.5px;font-weight:600;">${n.player} — ${s.label}</div><div style="font-size:11.5px;color:var(--muted);margin-top:2px;font-family:'JetBrains Mono',monospace;">${i.join(" · ")}</div></div>
          ${r?`<button class="del-card-btn" data-id="${n.id}" style="background:none;border:none;color:var(--muted);cursor:pointer;font-size:16px;" title="Delete card play">✕</button>`:""}
        </div>`}).join(""):'<div style="color:var(--muted);font-size:13px;font-style:italic;">No cards played yet.</div>'}
    </div>
  </div>`}function cA(){const r=Ti(),e=Ii(),t=(e==null?void 0:e.player)??null;return r?`<div style="display:grid;grid-template-columns:1fr 1fr;gap:18px;">${Vh(!0)}${kh(t,!0)}</div>`:`<div style="display:grid;grid-template-columns:1fr 1.2fr;gap:18px;"><div style="display:flex;flex-direction:column;gap:18px;">${t?lA(t):""}${kh(t,!1)}</div>${Vh(!1)}</div>`}function eo(r,e){const t=document.getElementById("fc-gw"),n=document.getElementById("fc-card"),s=document.getElementById("fc-player");if(!t||!n||!s)return;const i=Math.max(1,Math.min(38,parseInt(t.value,10)||1)),o=e?s.value:r;if(!o)return;const B=n.value;n.innerHTML=kf(o,i),B&&[...n.options].some(l=>l.value===B&&!l.disabled)&&(n.value=B),TB()}function uA(r){const e=document.getElementById("fc-target");if(!e)return;const t=e.value;e.innerHTML=`<option value="">—</option>${ge.filter(n=>n!==r).map(n=>`<option value="${n}">${n}</option>`).join("")}`,t&&t!==r&&ge.includes(t)&&(e.value=t)}function hA(r){var l;const e=Ti(),t=Ii(),n=tA(),s=(t==null?void 0:t.player)??null;document.querySelectorAll(".del-card-btn").forEach(c=>c.addEventListener("click",async h=>{if(!e)return;const C=h.currentTarget.dataset.id;if(C&&window.confirm("Delete this card play? The card becomes available again."))try{await me.removeCard(C),r()}catch(p){window.alert(p instanceof Error?p.message:String(p))}}));const i=document.getElementById("fc-gw"),o=document.getElementById("fc-player"),B=document.getElementById("fc-card");i==null||i.addEventListener("change",()=>eo(s,e)),o==null||o.addEventListener("change",()=>{const c=e?o.value:s;c&&uA(c),eo(s,e)}),B==null||B.addEventListener("change",()=>TB()),eo(s,e),(l=document.getElementById("fc-submit"))==null||l.addEventListener("click",async()=>{const c=document.getElementById("fc-warn"),h=document.getElementById("fc-submit");if(!c)return;c.style.color="var(--red)",c.textContent="";const C=parseInt(document.getElementById("fc-gw").value,10),p=document.getElementById("fc-player").value,_=e?p:s,A=document.getElementById("fc-card").value,L=document.getElementById("fc-match").value,M=L===""?null:parseInt(L,10),G=document.getElementById("fc-target").value,ee=G===""?null:G,Q=document.getElementById("fc-note").value.trim(),fe=Q===""?null:Q;if(!_){c.textContent="No player identity found.";return}if(!n){c.textContent="Your login session has expired. Log in again.";return}if(!Number.isInteger(C)||C<1||C>38){c.textContent="Invalid GW.";return}if(!e&&_!==s){c.textContent="You can only play your own cards.";return}const{matchNo:pe,target:oe}=aA(A,M,ee);TB();const v=BA(A,pe,oe);if(v){c.textContent=v;return}if(oe&&oe===_){c.textContent="A player cannot target themselves.";return}const E=me.getAvailableCardSlot(_,A,C);if(!E){c.textContent=A==="captain"?`${_} has already played a Captain in GW${C}. Only 1 Captain is allowed per player per gameweek.`:`${_} has no ${nt[A].label}s remaining.`,eo(s,e);return}const y={id:E,slotId:E,gw:C,player:_,card:A,matchNo:pe,target:oe,note:fe,createdByUid:n.uid,ts:Date.now()};h&&(h.disabled=!0,h.textContent="Saving…");try{await me.addCard(y),c.style.color="var(--pitch)",c.textContent="Card saved.",r()}catch(R){c.style.color="var(--red)",c.textContent=R instanceof Error?R.message:"Card could not be saved.",h&&(h.disabled=!1,h.textContent=e?"Log Card":"Play This Card")}})}const dA=["Arsenal","Aston Villa","Bournemouth","Brentford","Brighton","Chelsea","Coventry","Crystal Palace","Everton","Fulham","Hull","Ipswich","Leeds","Liverpool","Man City","Man Utd","Newcastle","Nott'm Forest","Sunderland","Spurs"].sort(),CA=`
1|1|Arsenal|Coventry
1|2|Hull|Man Utd
1|3|Everton|Crystal Palace
1|4|Ipswich|Sunderland
1|5|Nott'm Forest|Leeds
1|6|Brentford|Spurs
1|7|Brighton|Aston Villa
1|8|Man City|Bournemouth
1|9|Newcastle|Liverpool
1|10|Fulham|Chelsea
2|1|Bournemouth|Everton
2|2|Aston Villa|Arsenal
2|3|Chelsea|Brighton
2|4|Coventry|Hull
2|5|Crystal Palace|Man City
2|6|Leeds|Brentford
2|7|Liverpool|Nott'm Forest
2|8|Man Utd|Ipswich
2|9|Sunderland|Fulham
2|10|Spurs|Newcastle
3|1|Arsenal|Chelsea
3|2|Brentford|Sunderland
3|3|Brighton|Leeds
3|4|Everton|Man Utd
3|5|Fulham|Crystal Palace
3|6|Hull|Aston Villa
3|7|Ipswich|Liverpool
3|8|Man City|Coventry
3|9|Newcastle|Bournemouth
3|10|Nott'm Forest|Spurs
4|1|Bournemouth|Brentford
4|2|Aston Villa|Nott'm Forest
4|3|Chelsea|Hull
4|4|Coventry|Brighton
4|5|Crystal Palace|Ipswich
4|6|Leeds|Newcastle
4|7|Liverpool|Fulham
4|8|Man Utd|Man City
4|9|Sunderland|Arsenal
4|10|Spurs|Everton
5|1|Bournemouth|Liverpool
5|2|Brentford|Chelsea
5|3|Brighton|Arsenal
5|4|Everton|Ipswich
5|5|Fulham|Man Utd
5|6|Leeds|Crystal Palace
5|7|Man City|Sunderland
5|8|Newcastle|Hull
5|9|Nott'm Forest|Coventry
5|10|Spurs|Aston Villa
6|1|Arsenal|Leeds
6|2|Aston Villa|Brentford
6|3|Chelsea|Bournemouth
6|4|Coventry|Newcastle
6|5|Crystal Palace|Nott'm Forest
6|6|Hull|Everton
6|7|Ipswich|Fulham
6|8|Liverpool|Man City
6|9|Man Utd|Spurs
6|10|Sunderland|Brighton
7|1|Bournemouth|Sunderland
7|2|Brentford|Liverpool
7|3|Brighton|Crystal Palace
7|4|Everton|Chelsea
7|5|Fulham|Hull
7|6|Leeds|Man Utd
7|7|Man City|Ipswich
7|8|Newcastle|Aston Villa
7|9|Nott'm Forest|Arsenal
7|10|Spurs|Coventry
8|1|Arsenal|Everton
8|2|Aston Villa|Man City
8|3|Chelsea|Spurs
8|4|Coventry|Fulham
8|5|Crystal Palace|Newcastle
8|6|Hull|Brentford
8|7|Ipswich|Nott'm Forest
8|8|Liverpool|Brighton
8|9|Man Utd|Bournemouth
8|10|Sunderland|Leeds
9|1|Bournemouth|Leeds
9|2|Aston Villa|Fulham
9|3|Brentford|Nott'm Forest
9|4|Chelsea|Man Utd
9|5|Coventry|Sunderland
9|6|Hull|Ipswich
9|7|Liverpool|Arsenal
9|8|Man City|Brighton
9|9|Newcastle|Everton
9|10|Spurs|Crystal Palace
10|1|Arsenal|Hull
10|2|Brighton|Brentford
10|3|Crystal Palace|Liverpool
10|4|Everton|Coventry
10|5|Fulham|Newcastle
10|6|Ipswich|Bournemouth
10|7|Leeds|Spurs
10|8|Man Utd|Aston Villa
10|9|Nott'm Forest|Man City
10|10|Sunderland|Chelsea
11|1|Bournemouth|Nott'm Forest
11|2|Aston Villa|Sunderland
11|3|Brentford|Everton
11|4|Chelsea|Leeds
11|5|Coventry|Crystal Palace
11|6|Hull|Brighton
11|7|Liverpool|Man Utd
11|8|Man City|Fulham
11|9|Newcastle|Arsenal
11|10|Spurs|Ipswich
12|1|Arsenal|Man City
12|2|Brighton|Newcastle
12|3|Crystal Palace|Hull
12|4|Everton|Liverpool
12|5|Fulham|Bournemouth
12|6|Ipswich|Aston Villa
12|7|Leeds|Coventry
12|8|Man Utd|Brentford
12|9|Nott'm Forest|Chelsea
12|10|Sunderland|Spurs
13|1|Bournemouth|Brighton
13|2|Aston Villa|Everton
13|3|Brentford|Arsenal
13|4|Chelsea|Crystal Palace
13|5|Coventry|Ipswich
13|6|Hull|Nott'm Forest
13|7|Liverpool|Sunderland
13|8|Man City|Leeds
13|9|Newcastle|Man Utd
13|10|Spurs|Fulham
14|1|Bournemouth|Hull
14|2|Aston Villa|Crystal Palace
14|3|Brentford|Man City
14|4|Chelsea|Liverpool
14|5|Everton|Fulham
14|6|Leeds|Ipswich
14|7|Man Utd|Coventry
14|8|Newcastle|Sunderland
14|9|Nott'm Forest|Brighton
14|10|Spurs|Arsenal
15|1|Arsenal|Bournemouth
15|2|Brighton|Everton
15|3|Coventry|Aston Villa
15|4|Crystal Palace|Man Utd
15|5|Fulham|Brentford
15|6|Hull|Spurs
15|7|Ipswich|Newcastle
15|8|Liverpool|Leeds
15|9|Man City|Chelsea
15|10|Sunderland|Nott'm Forest
16|1|Bournemouth|Coventry
16|2|Arsenal|Man Utd
16|3|Brentford|Newcastle
16|4|Brighton|Ipswich
16|5|Chelsea|Aston Villa
16|6|Leeds|Fulham
16|7|Liverpool|Spurs
16|8|Man City|Hull
16|9|Nott'm Forest|Everton
16|10|Sunderland|Crystal Palace
17|1|Aston Villa|Leeds
17|2|Coventry|Chelsea
17|3|Crystal Palace|Arsenal
17|4|Everton|Sunderland
17|5|Fulham|Brighton
17|6|Hull|Liverpool
17|7|Ipswich|Brentford
17|8|Man Utd|Nott'm Forest
17|9|Newcastle|Man City
17|10|Spurs|Bournemouth
18|1|Aston Villa|Liverpool
18|2|Coventry|Brentford
18|3|Crystal Palace|Bournemouth
18|4|Everton|Man City
18|5|Fulham|Arsenal
18|6|Hull|Leeds
18|7|Ipswich|Chelsea
18|8|Man Utd|Sunderland
18|9|Newcastle|Nott'm Forest
18|10|Spurs|Brighton
19|1|Bournemouth|Aston Villa
19|2|Arsenal|Ipswich
19|3|Brentford|Crystal Palace
19|4|Brighton|Man Utd
19|5|Chelsea|Newcastle
19|6|Leeds|Everton
19|7|Liverpool|Coventry
19|8|Man City|Spurs
19|9|Nott'm Forest|Fulham
19|10|Sunderland|Hull
20|1|Arsenal|Brentford
20|2|Brighton|Bournemouth
20|3|Crystal Palace|Chelsea
20|4|Everton|Aston Villa
20|5|Fulham|Spurs
20|6|Ipswich|Coventry
20|7|Leeds|Man City
20|8|Man Utd|Newcastle
20|9|Nott'm Forest|Hull
20|10|Sunderland|Liverpool
21|1|Bournemouth|Ipswich
21|2|Aston Villa|Man Utd
21|3|Brentford|Brighton
21|4|Chelsea|Sunderland
21|5|Coventry|Everton
21|6|Hull|Arsenal
21|7|Liverpool|Crystal Palace
21|8|Man City|Nott'm Forest
21|9|Newcastle|Fulham
21|10|Spurs|Leeds
22|1|Arsenal|Newcastle
22|2|Brighton|Man City
22|3|Crystal Palace|Spurs
22|4|Everton|Brentford
22|5|Fulham|Aston Villa
22|6|Ipswich|Hull
22|7|Leeds|Chelsea
22|8|Man Utd|Liverpool
22|9|Nott'm Forest|Bournemouth
22|10|Sunderland|Coventry
23|1|Bournemouth|Fulham
23|2|Aston Villa|Ipswich
23|3|Brentford|Man Utd
23|4|Chelsea|Nott'm Forest
23|5|Coventry|Leeds
23|6|Hull|Crystal Palace
23|7|Liverpool|Everton
23|8|Man City|Arsenal
23|9|Newcastle|Brighton
23|10|Spurs|Sunderland
24|1|Arsenal|Liverpool
24|2|Brighton|Hull
24|3|Crystal Palace|Coventry
24|4|Everton|Newcastle
24|5|Fulham|Man City
24|6|Ipswich|Spurs
24|7|Leeds|Bournemouth
24|8|Man Utd|Chelsea
24|9|Nott'm Forest|Brentford
24|10|Sunderland|Aston Villa
25|1|Aston Villa|Bournemouth
25|2|Coventry|Liverpool
25|3|Crystal Palace|Brentford
25|4|Everton|Leeds
25|5|Fulham|Nott'm Forest
25|6|Hull|Sunderland
25|7|Ipswich|Arsenal
25|8|Man Utd|Brighton
25|9|Newcastle|Chelsea
25|10|Spurs|Man City
26|1|Bournemouth|Crystal Palace
26|2|Arsenal|Fulham
26|3|Brentford|Coventry
26|4|Brighton|Spurs
26|5|Chelsea|Ipswich
26|6|Leeds|Aston Villa
26|7|Liverpool|Hull
26|8|Man City|Newcastle
26|9|Nott'm Forest|Man Utd
26|10|Sunderland|Everton
27|1|Aston Villa|Chelsea
27|2|Coventry|Bournemouth
27|3|Crystal Palace|Sunderland
27|4|Everton|Nott'm Forest
27|5|Fulham|Leeds
27|6|Hull|Man City
27|7|Ipswich|Brighton
27|8|Man Utd|Arsenal
27|9|Newcastle|Brentford
27|10|Spurs|Liverpool
28|1|Bournemouth|Spurs
28|2|Arsenal|Crystal Palace
28|3|Brentford|Ipswich
28|4|Brighton|Fulham
28|5|Chelsea|Coventry
28|6|Leeds|Hull
28|7|Liverpool|Aston Villa
28|8|Man City|Everton
28|9|Nott'm Forest|Newcastle
28|10|Sunderland|Man Utd
29|1|Bournemouth|Newcastle
29|2|Aston Villa|Hull
29|3|Chelsea|Arsenal
29|4|Coventry|Man City
29|5|Crystal Palace|Fulham
29|6|Leeds|Brighton
29|7|Liverpool|Ipswich
29|8|Man Utd|Everton
29|9|Sunderland|Brentford
29|10|Spurs|Nott'm Forest
30|1|Arsenal|Sunderland
30|2|Brentford|Bournemouth
30|3|Brighton|Coventry
30|4|Everton|Spurs
30|5|Fulham|Liverpool
30|6|Hull|Chelsea
30|7|Ipswich|Crystal Palace
30|8|Man City|Man Utd
30|9|Newcastle|Leeds
30|10|Nott'm Forest|Aston Villa
31|1|Bournemouth|Man City
31|2|Aston Villa|Brighton
31|3|Chelsea|Fulham
31|4|Coventry|Arsenal
31|5|Crystal Palace|Everton
31|6|Leeds|Nott'm Forest
31|7|Liverpool|Newcastle
31|8|Man Utd|Hull
31|9|Sunderland|Ipswich
31|10|Spurs|Brentford
32|1|Arsenal|Aston Villa
32|2|Brentford|Leeds
32|3|Brighton|Chelsea
32|4|Everton|Bournemouth
32|5|Fulham|Sunderland
32|6|Hull|Coventry
32|7|Ipswich|Man Utd
32|8|Man City|Crystal Palace
32|9|Newcastle|Spurs
32|10|Nott'm Forest|Liverpool
33|1|Bournemouth|Arsenal
33|2|Aston Villa|Coventry
33|3|Brentford|Fulham
33|4|Chelsea|Man City
33|5|Everton|Brighton
33|6|Leeds|Liverpool
33|7|Man Utd|Crystal Palace
33|8|Newcastle|Ipswich
33|9|Nott'm Forest|Sunderland
33|10|Spurs|Hull
34|1|Arsenal|Spurs
34|2|Brighton|Nott'm Forest
34|3|Coventry|Man Utd
34|4|Crystal Palace|Aston Villa
34|5|Fulham|Everton
34|6|Hull|Bournemouth
34|7|Ipswich|Leeds
34|8|Liverpool|Chelsea
34|9|Man City|Brentford
34|10|Sunderland|Newcastle
35|1|Bournemouth|Man Utd
35|2|Brentford|Aston Villa
35|3|Brighton|Sunderland
35|4|Everton|Hull
35|5|Fulham|Ipswich
35|6|Leeds|Arsenal
35|7|Man City|Liverpool
35|8|Newcastle|Coventry
35|9|Nott'm Forest|Crystal Palace
35|10|Spurs|Chelsea
36|1|Arsenal|Nott'm Forest
36|2|Aston Villa|Newcastle
36|3|Chelsea|Everton
36|4|Coventry|Spurs
36|5|Crystal Palace|Brighton
36|6|Hull|Fulham
36|7|Ipswich|Man City
36|8|Liverpool|Brentford
36|9|Man Utd|Leeds
36|10|Sunderland|Bournemouth
37|1|Bournemouth|Chelsea
37|2|Brentford|Hull
37|3|Brighton|Liverpool
37|4|Everton|Arsenal
37|5|Fulham|Coventry
37|6|Leeds|Sunderland
37|7|Man City|Aston Villa
37|8|Newcastle|Crystal Palace
37|9|Nott'm Forest|Ipswich
37|10|Spurs|Man Utd
38|1|Arsenal|Brighton
38|2|Aston Villa|Spurs
38|3|Chelsea|Brentford
38|4|Coventry|Nott'm Forest
38|5|Crystal Palace|Leeds
38|6|Hull|Newcastle
38|7|Ipswich|Everton
38|8|Liverpool|Bournemouth
38|9|Man Utd|Fulham
38|10|Sunderland|Man City
`.trim(),fA=CA.split(`
`).map(r=>{const[e,t,n,s]=r.split("|"),i=Number(e),o=Number(t);return{id:`gw${i}_m${o}`,gw:i,matchNo:o,home:n,away:s}});let Zn=1,Tt=null;function pA(){return"m_"+Date.now()+"_"+Math.random().toString(36).slice(2,6)}function gA(){let r=`
    <div class="panel-box" style="background:var(--panel); border:1px solid var(--line); border-radius:6px; padding:16px;">
      <h2 style="font-family:'Oswald',sans-serif; color:var(--chalk); margin-bottom:16px; font-size:16px; text-transform:uppercase;">Setup Fixtures</h2>
      
      <div style="margin-bottom: 20px; display: flex; align-items: center; gap: 12px;">
        <label style="font-family:'Oswald',sans-serif; color:var(--chalk);">Setup for GW:</label>
        <input type="number" id="fx-gw-select" min="1" max="38" value="${Zn}" style="background:var(--ink); border:1px solid var(--line); color:var(--chalk); padding:6px; width:60px; border-radius:4px; font-family:'JetBrains Mono',monospace;">
      </div>
  `;const e=me.getMatchesByGW(Zn);if(e.length>0&&(r+='<div style="display:flex; flex-direction:column; gap:8px; margin-bottom:20px;">',e.forEach(t=>{r+=`
        <div style="display:flex; justify-content:space-between; align-items:center; background:var(--ink); padding:8px 12px; border:1px solid var(--line); border-radius:4px;">
          <div>
            <div style="font-weight:bold;">Match ${t.matchNo}: ${t.home} vs ${t.away}</div>
            <div style="font-size:12px; color:var(--muted);">${t.date} ${t.time}</div>
          </div>
          <div style="display:flex; gap:8px;">
            <button class="fx-edit-btn" data-id="${t.id}" style="background:var(--pitch); color:#0d1712; padding:4px 8px; border:none; border-radius:4px; font-weight:bold; cursor:pointer; font-size:12px;">Edit</button>
            <button class="fx-del-btn" data-id="${t.id}" style="background:var(--red); color:white; padding:4px 8px; border:none; border-radius:4px; font-weight:bold; cursor:pointer; font-size:12px;">Delete</button>
          </div>
        </div>
      `}),r+="</div>"),e.length<10||Tt){const t=Tt?me.getMatch(Tt):null,n=t?t.matchNo:e.length+1,s=i=>dA.map(o=>`<option value="${o}" ${o===i?"selected":""}>${o}</option>`).join("");r+=`
      <div style="background:var(--ink); padding:16px; border:1px dashed var(--line); border-radius:6px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <h3 style="font-size:14px; font-family:'Oswald',sans-serif; margin:0;">${t?"Edit Match "+n:"Add Match "+n}</h3>
          ${t?'<button id="fx-cancel-edit" style="background:none; border:none; color:var(--muted); cursor:pointer; font-size:12px; text-decoration:underline;">Cancel</button>':""}
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
          <div>
            <label style="display:block; font-size:11px; margin-bottom:4px; color:var(--muted);">Home Team</label>
            <select id="fx-home" style="width:100%; background:var(--panel); border:1px solid var(--line); color:var(--chalk); padding:6px; border-radius:4px;">
              ${s(t==null?void 0:t.home)}
            </select>
          </div>
          <div>
            <label style="display:block; font-size:11px; margin-bottom:4px; color:var(--muted);">Away Team</label>
            <select id="fx-away" style="width:100%; background:var(--panel); border:1px solid var(--line); color:var(--chalk); padding:6px; border-radius:4px;">
              ${s(t==null?void 0:t.away)}
            </select>
          </div>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px;">
          <div>
            <label style="display:block; font-size:11px; margin-bottom:4px; color:var(--muted);">Date (Optional)</label>
            <input type="date" id="fx-date" value="${(t==null?void 0:t.date)||""}" style="width:100%; background:var(--panel); border:1px solid var(--line); color:var(--chalk); padding:6px; border-radius:4px;">
          </div>
          <div>
            <label style="display:block; font-size:11px; margin-bottom:4px; color:var(--muted);">Time (Optional)</label>
            <input type="time" id="fx-time" value="${(t==null?void 0:t.time)||""}" style="width:100%; background:var(--panel); border:1px solid var(--line); color:var(--chalk); padding:6px; border-radius:4px;">
          </div>
        </div>
        <div id="fx-warn" style="color:var(--red); font-size:12px; margin-bottom:8px;"></div>
        <button id="fx-add-btn" style="background:var(--pitch); color:#0d1712; padding:8px 16px; border:none; border-radius:4px; font-weight:bold; cursor:pointer;">
          ${t?"Update Match":"Add Match"}
        </button>
      </div>
    `}else r+=`<div style="color:var(--pitch); font-weight:bold;">All 10 matches for GW${Zn} have been configured.</div>`;return r+="</div>",r}function mA(r){const e=document.getElementById("fx-gw-select");e&&e.addEventListener("change",s=>{Zn=parseInt(s.target.value,10),Tt=null,r()});const t=document.getElementById("fx-cancel-edit");t&&t.addEventListener("click",()=>{Tt=null,r()}),document.querySelectorAll(".fx-edit-btn").forEach(s=>{s.addEventListener("click",i=>{Tt=i.currentTarget.getAttribute("data-id"),r()})}),document.querySelectorAll(".fx-del-btn").forEach(s=>{s.addEventListener("click",i=>{if(confirm("Are you sure you want to delete this match?")){const B=i.currentTarget.getAttribute("data-id");B&&(me.deleteMatch(B),me.getMatchesByGW(Zn).forEach((c,h)=>{c.matchNo=h+1,me.addOrUpdateMatch(c)}),Tt===B&&(Tt=null),r())}})});const n=document.getElementById("fx-add-btn");n&&n.addEventListener("click",()=>{const s=document.getElementById("fx-home").value,i=document.getElementById("fx-away").value,o=document.getElementById("fx-date").value||"",B=document.getElementById("fx-time").value||"",l=document.getElementById("fx-warn");if(l.textContent="",s===i){l.textContent="Home and Away teams must be different.";return}const c=me.getMatchesByGW(Zn);if(Tt){const h=me.getMatch(Tt);h&&me.addOrUpdateMatch({...h,home:s,away:i,date:o,time:B}),Tt=null}else{const h={id:pA(),gw:Zn,matchNo:c.length+1,home:s,away:i,date:o,time:B};me.addOrUpdateMatch(h)}r()})}function EA(r=""){return`
    <div class="auth-shell">
      <div class="auth-card">
        <div class="auth-kicker">PREMIER LEAGUE 26/27</div>
        <h1>Predictions HQ</h1>
        <p class="auth-subtitle">5-a-side prediction league · restricted access</p>
        <label for="login-id">Player ID</label>
        <input id="login-id" autocomplete="username" placeholder="e.g. AGRIM" />
        <label for="login-pass">Passcode</label>
        <input id="login-pass" type="password" autocomplete="current-password" placeholder="Enter passcode" />
        <div id="login-error" class="auth-error">${r}</div>
        <button id="login-btn" class="auth-button">ENTER LEAGUE</button>
        <div class="auth-note">Your profile determines exactly what you can edit.</div>
      </div>
    </div>
  `}function _A(r){const e=document.querySelector("#login-id"),t=document.querySelector("#login-pass"),n=document.querySelector("#login-btn"),s=document.querySelector("#login-error");if(!e||!t||!n||!s)return;const i=async()=>{n.disabled=!0,s.textContent="";try{await nA(e.value,t.value),r()}catch(o){s.textContent=o instanceof Error?o.message:"Login failed."}finally{n.disabled=!1}};n.addEventListener("click",i),t.addEventListener("keydown",o=>{o.key==="Enter"&&i()})}let _r="leaderboard",Vf=!1;function Mh(r,e){return r==="fixtures"?(e==null?void 0:e.role)==="admin":["leaderboard","gameweek","cardlog"].includes(r)}function DA(){const r=document.querySelector("#app");r&&(r.innerHTML=EA(),_A(()=>En()))}function En(){var n;const r=document.querySelector("#app");if(!r)return;const e=Ii();if(!Vf||!e)return DA();Mh(_r,e)||(_r="leaderboard");let t="";switch(_r){case"leaderboard":t=Mw();break;case"gameweek":t=iA();break;case"cardlog":t=cA();break;case"fixtures":t=gA();break}switch(r.innerHTML=`
    <div class="cardlog-root">
      <div style="display:flex; align-items:baseline; justify-content:space-between; flex-wrap:wrap; gap:8px; margin-bottom:4px;">
        <div>
          <h1 style="font-size:26px; font-weight:700; margin:0; color:var(--chalk);">PL 26/27 Predictions</h1>
          <div style="font-size:11px; color:var(--pitch); font-family:'JetBrains Mono',monospace; margin-top:4px;">SIGNED IN: ${e.player} · ${e.role.toUpperCase()}</div>
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
          <div style="font-size:11px; color:var(--muted); font-family:'JetBrains Mono',monospace; letter-spacing:0.06em;">5-A-SIDE LEAGUE</div>
          <button id="logout-btn" class="secondary-btn">LOG OUT</button>
        </div>
      </div>
      <div style="height:1px; background:var(--line); margin:14px 0 18px;"></div>
      ${Fw(_r,e.role==="admin")}
      <div class="tab-content" style="margin-top:20px;">${t}</div>
    </div>
  `,(n=document.querySelector("#logout-btn"))==null||n.addEventListener("click",()=>rA()),Lw(s=>{Mh(s,e)&&(_r=s,En())}),_r){case"leaderboard":Gw();break;case"gameweek":oA(En);break;case"cardlog":hA(En);break;case"fixtures":mA(En);break}}sA(r=>{Vf=!0,r&&me.load(En,async()=>{Ti()&&(await me.seedFixtures(fA),En())}),En()});
