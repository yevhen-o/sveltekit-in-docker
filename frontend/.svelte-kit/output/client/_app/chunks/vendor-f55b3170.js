function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let a;function u(t,n){return a||(a=document.createElement("a")),a.href=n,t===a.href}function l(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function f(t,n,e,o){if(t){const r=d(t,n,e,o);return t[0](r)}}function d(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function h(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function p(t,n,e,o,r,s){if(r){const i=d(n,e,o,s);t.p(i,r)}}function m(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function g(n){return n&&i(n.destroy)?n.destroy:t}const _="undefined"!=typeof window;let y=_?()=>window.performance.now():()=>Date.now(),$=_?t=>requestAnimationFrame(t):t;const b=new Set;function x(t){b.forEach((n=>{n.c(t)||(b.delete(n),n.f())})),0!==b.size&&$(x)}function v(t){let n;return 0===b.size&&$(x),{promise:new Promise((e=>{b.add(n={c:t,f:e})})),abort(){b.delete(n)}}}let w=!1;function E(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function k(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n.host?n:document}function S(t){const n=N("style");return function(t,n){!function(t,n){t.appendChild(n)}(t.head||t,n)}(k(t),n),n}function C(t,n){if(w){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let a=0;a<n.length;a++){const t=n[a].claim_order,s=(r>0&&n[e[r]].claim_order<=t?r+1:E(1,r,(t=>n[e[t]].claim_order),t))-1;o[a]=e[s]+1;const i=s+1;e[i]=a,r=Math.max(i,r)}const s=[],i=[];let c=n.length-1;for(let a=e[r]+1;0!=a;a=o[a-1]){for(s.push(n[a-1]);c>=a;c--)i.push(n[c]);c--}for(;c>=0;c--)i.push(n[c]);s.reverse(),i.sort(((t,n)=>t.claim_order-n.claim_order));for(let a=0,u=0;a<i.length;a++){for(;u<s.length&&i[a].claim_order>=s[u].claim_order;)u++;const n=u<s.length?s[u]:null;t.insertBefore(i[a],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode!==t&&t.appendChild(n)}function A(t,n,e){w&&!e?C(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function M(t){t.parentNode.removeChild(t)}function N(t){return document.createElement(t)}function j(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function R(t){return document.createTextNode(t)}function B(){return R(" ")}function O(){return R("")}function P(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function q(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function z(t){return Array.from(t.childNodes)}function D(t,n,e,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o];if(n(s)){const n=e(s);return void 0===n?t.splice(o,1):t[o]=n,r||(t.claim_info.last_index=o),s}}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o];if(n(s)){const n=e(s);return void 0===n?t.splice(o,1):t[o]=n,r?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,s}}return o()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function T(t,n,e,o){return D(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o?j(n):N(n)))}function L(t,n){return D(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>R(n)),!0)}function F(t){return L(t," ")}function H(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function I(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}function W(t,n,e){t.classList[e?"add":"remove"](n)}function G(t,n=document.body){return Array.from(n.querySelectorAll(t))}const J=new Set;let K,Q=0;function U(t,n,e,o,r,s,i,c=0){const a=16.666/o;let u="{\n";for(let g=0;g<=1;g+=a){const t=n+(e-n)*s(g);u+=100*g+`%{${i(t,1-t)}}\n`}const l=u+`100% {${i(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(l)}_${c}`,d=k(t);J.add(d);const h=d.__svelte_stylesheet||(d.__svelte_stylesheet=S(t).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[f]||(p[f]=!0,h.insertRule(`@keyframes ${f} ${l}`,h.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${o}ms linear ${r}ms 1 both`,Q+=1,f}function V(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),Q-=r,Q||$((()=>{Q||(J.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),J.clear())})))}function X(e,o,r,s){if(!o)return t;const i=e.getBoundingClientRect();if(o.left===i.left&&o.right===i.right&&o.top===i.top&&o.bottom===i.bottom)return t;const{delay:c=0,duration:a=300,easing:u=n,start:l=y()+c,end:f=l+a,tick:d=t,css:h}=r(e,{from:o,to:i},s);let p,m=!0,g=!1;function _(){h&&V(e,p),m=!1}return v((t=>{if(!g&&t>=l&&(g=!0),g&&t>=f&&(d(1,0),_()),!m)return!1;if(g){const n=0+1*u((t-l)/a);d(n,1-n)}return!0})),h&&(p=U(e,0,1,a,c,u,h)),c||(g=!0),d(0,1),_}function Y(t){const n=getComputedStyle(t);if("absolute"!==n.position&&"fixed"!==n.position){const{width:e,height:o}=n,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=e,t.style.height=o,Z(t,r)}}function Z(t,n){const e=t.getBoundingClientRect();if(n.left!==e.left||n.top!==e.top){const o=getComputedStyle(t),r="none"===o.transform?"":o.transform;t.style.transform=`${r} translate(${n.left-e.left}px, ${n.top-e.top}px)`}}function tt(t){K=t}function nt(){if(!K)throw new Error("Function called outside component initialization");return K}function et(t){nt().$$.on_mount.push(t)}function ot(t){nt().$$.after_update.push(t)}function rt(t,n){nt().$$.context.set(t,n)}function st(t){return nt().$$.context.get(t)}const it=[],ct=[],at=[],ut=[],lt=Promise.resolve();let ft=!1;function dt(t){at.push(t)}let ht=!1;const pt=new Set;function mt(){if(!ht){ht=!0;do{for(let t=0;t<it.length;t+=1){const n=it[t];tt(n),gt(n.$$)}for(tt(null),it.length=0;ct.length;)ct.pop()();for(let t=0;t<at.length;t+=1){const n=at[t];pt.has(n)||(pt.add(n),n())}at.length=0}while(it.length);for(;ut.length;)ut.pop()();ft=!1,ht=!1,pt.clear()}}function gt(t){if(null!==t.fragment){t.update(),s(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(dt)}}let _t;function yt(t,n,e){t.dispatchEvent(function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(`${n?"intro":"outro"}${e}`))}const $t=new Set;let bt;function xt(){bt={r:0,c:[],p:bt}}function vt(){bt.r||s(bt.c),bt=bt.p}function wt(t,n){t&&t.i&&($t.delete(t),t.i(n))}function Et(t,n,e,o){if(t&&t.o){if($t.has(t))return;$t.add(t),bt.c.push((()=>{$t.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const kt={duration:0};function St(e,o,r,c){let a=o(e,r),u=c?0:1,l=null,f=null,d=null;function h(){d&&V(e,d)}function p(t,n){const e=t.b-u;return n*=Math.abs(e),{a:u,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function m(o){const{delay:r=0,duration:i=300,easing:c=n,tick:m=t,css:g}=a||kt,_={start:y()+r,b:o};o||(_.group=bt,bt.r+=1),l||f?f=_:(g&&(h(),d=U(e,u,o,i,r,c,g)),o&&m(0,1),l=p(_,i),dt((()=>yt(e,o,"start"))),v((t=>{if(f&&t>f.start&&(l=p(f,i),f=null,yt(e,l.b,"start"),g&&(h(),d=U(e,u,l.b,l.duration,0,c,a.css))),l)if(t>=l.end)m(u=l.b,1-u),yt(e,l.b,"end"),f||(l.b?h():--l.group.r||s(l.group.c)),l=null;else if(t>=l.start){const n=t-l.start;u=l.a+l.d*c(n/l.duration),m(u,1-u)}return!(!l&&!f)})))}return{run(t){i(a)?(_t||(_t=Promise.resolve(),_t.then((()=>{_t=null}))),_t).then((()=>{a=a(),m(t)})):m(t)},end(){h(),l=f=null}}}function Ct(t,n){t.f(),function(t,n){Et(t,1,1,(()=>{n.delete(t.key)}))}(t,n)}function At(t,n,e,o,r,s,i,c,a,u,l,f){let d=t.length,h=s.length,p=d;const m={};for(;p--;)m[t[p].key]=p;const g=[],_=new Map,y=new Map;for(p=h;p--;){const t=f(r,s,p),c=e(t);let a=i.get(c);a?o&&a.p(t,n):(a=u(c,t),a.c()),_.set(c,g[p]=a),c in m&&y.set(c,Math.abs(p-m[c]))}const $=new Set,b=new Set;function x(t){wt(t,1),t.m(c,l),i.set(t.key,t),l=t.first,h--}for(;d&&h;){const n=g[h-1],e=t[d-1],o=n.key,r=e.key;n===e?(l=n.first,d--,h--):_.has(r)?!i.has(o)||$.has(o)?x(n):b.has(r)?d--:y.get(o)>y.get(r)?(b.add(o),x(n)):($.add(r),d--):(a(e,i),d--)}for(;d--;){const n=t[d];_.has(n.key)||a(n,i)}for(;h;)x(g[h-1]);return g}function Mt(t,n){const e={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],c=n[s];if(c){for(const t in i)t in c||(o[t]=1);for(const t in c)r[t]||(e[t]=c[t],r[t]=1);t[s]=c}else for(const t in i)r[t]=1}for(const i in o)i in e||(e[i]=void 0);return e}function Nt(t){return"object"==typeof t&&null!==t?t:{}}function jt(t){t&&t.c()}function Rt(t,n){t&&t.l(n)}function Bt(t,n,e,r){const{fragment:c,on_mount:a,on_destroy:u,after_update:l}=t.$$;c&&c.m(n,e),r||dt((()=>{const n=a.map(o).filter(i);u?u.push(...n):s(n),t.$$.on_mount=[]})),l.forEach(dt)}function Ot(t,n){const e=t.$$;null!==e.fragment&&(s(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Pt(t,n){-1===t.$$.dirty[0]&&(it.push(t),ft||(ft=!0,lt.then(mt)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function qt(n,e,o,i,c,a,u,l=[-1]){const f=K;tt(n);const d=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:r(),dirty:l,skip_bound:!1,root:e.target||f.$$.root};u&&u(d.root);let h=!1;if(d.ctx=o?o(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&c(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),h&&Pt(n,t)),e})):[],d.update(),h=!0,s(d.before_update),d.fragment=!!i&&i(d.ctx),e.target){if(e.hydrate){w=!0;const t=z(e.target);d.fragment&&d.fragment.l(t),t.forEach(M)}else d.fragment&&d.fragment.c();e.intro&&wt(n.$$.fragment),Bt(n,e.target,e.anchor,e.customElement),w=!1,mt()}tt(f)}class zt{$destroy(){Ot(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Dt=[];function Tt(n,e=t){let o;const r=new Set;function s(t){if(c(n,t)&&(n=t,o)){const t=!Dt.length;for(const e of r)e[1](),Dt.push(e,n);if(t){for(let t=0;t<Dt.length;t+=2)Dt[t][0](Dt[t+1]);Dt.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(i,c=t){const a=[i,c];return r.add(a),1===r.size&&(o=e(s)||t),i(n),()=>{r.delete(a),0===r.size&&(o(),o=null)}}}}function Lt(t){const n=t-1;return n*n*n+1}function Ft(t){return"[object Date]"===Object.prototype.toString.call(t)}function Ht(t,n,e,o){if("number"==typeof e||Ft(e)){const r=o-e,s=(e-n)/(t.dt||1/60),i=(s+(t.opts.stiffness*r-t.opts.damping*s)*t.inv_mass)*t.dt;return Math.abs(i)<t.opts.precision&&Math.abs(r)<t.opts.precision?o:(t.settled=!1,Ft(e)?new Date(e.getTime()+i):e+i)}if(Array.isArray(e))return e.map(((r,s)=>Ht(t,n[s],e[s],o[s])));if("object"==typeof e){const r={};for(const s in e)r[s]=Ht(t,n[s],e[s],o[s]);return r}throw new Error(`Cannot spring ${typeof e} values`)}function It(t,n={}){const e=Tt(t),{stiffness:o=.15,damping:r=.8,precision:s=.01}=n;let i,c,a,u=t,l=t,f=1,d=0,h=!1;function p(n,o={}){l=n;const r=a={};if(null==t||o.hard||m.stiffness>=1&&m.damping>=1)return h=!0,i=y(),u=n,e.set(t=l),Promise.resolve();if(o.soft){const t=!0===o.soft?.5:+o.soft;d=1/(60*t),f=0}return c||(i=y(),h=!1,c=v((n=>{if(h)return h=!1,c=null,!1;f=Math.min(f+d,1);const o={inv_mass:f,opts:m,settled:!0,dt:60*(n-i)/1e3},r=Ht(o,u,t,l);return i=n,u=t,e.set(t=r),o.settled&&(c=null),!o.settled}))),new Promise((t=>{c.promise.then((()=>{r===a&&t()}))}))}const m={set:p,update:(n,e)=>p(n(l,t),e),subscribe:e.subscribe,stiffness:o,damping:r,precision:s};return m}function Wt(t,{delay:n=0,duration:e=400,easing:o=Lt,start:r=0,opacity:s=0}={}){const i=getComputedStyle(t),c=+i.opacity,a="none"===i.transform?"":i.transform,u=1-r,l=c*(1-s);return{delay:n,duration:e,easing:o,css:(t,n)=>`\n\t\t\ttransform: ${a} scale(${1-u*n});\n\t\t\topacity: ${c-l*n}\n\t\t`}}function Gt(t,n,e={}){const o=getComputedStyle(t),r="none"===o.transform?"":o.transform,s=n.from.width/t.clientWidth,c=n.from.height/t.clientHeight,a=(n.from.left-n.to.left)/s,u=(n.from.top-n.to.top)/c,l=Math.sqrt(a*a+u*u),{delay:f=0,duration:d=(t=>120*Math.sqrt(t)),easing:h=Lt}=e;return{delay:f,duration:i(d)?d(l):d,easing:h,css:(t,n)=>`transform: ${r} translate(${n*a}px, ${n*u}px);`}}export{At as $,et as A,e as B,Tt as C,st as D,j as E,u as F,W as G,C as H,t as I,l as J,f as K,p as L,m as M,h as N,I as O,P,s as Q,It as R,zt as S,G as T,g as U,i as V,Y as W,Z as X,X as Y,dt as Z,St as _,z as a,Gt as a0,Wt as a1,Ct as a2,q as b,T as c,M as d,N as e,A as f,L as g,H as h,qt as i,jt as j,B as k,O as l,Rt as m,F as n,Bt as o,Mt as p,Nt as q,xt as r,c as s,R as t,Et as u,Ot as v,vt as w,wt as x,rt as y,ot as z};