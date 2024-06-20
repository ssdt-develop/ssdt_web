import{r as e,J as n,bV as t,bp as o,d as l,bW as s,M as a,w as i,O as r,a3 as u,P as d,T as c,B as v,aQ as b,$ as m,N as g,bX as f,A as p,Y as x,bY as y,bZ as C}from"./index.BRpw1nKc.js";function k(b){let m;const g=e(!1),f=n({...b,originalPosition:"",originalOverflow:"",visible:!1});function p(){var e,n;null==(n=null==(e=k.$el)?void 0:e.parentNode)||n.removeChild(k.$el)}function x(){if(!g.value)return;const e=f.parent;g.value=!1,e.vLoadingAddClassList=void 0,function(){const e=f.parent,n=k.ns;if(!e.vLoadingAddClassList){let t=e.getAttribute("loading-number");t=Number.parseInt(t)-1,t?e.setAttribute("loading-number",t.toString()):(v(e,n.bm("parent","relative")),e.removeAttribute("loading-number")),v(e,n.bm("parent","hidden"))}p(),C.unmount()}()}const y=l({name:"ElLoading",setup(e,{expose:n}){const{ns:t,zIndex:o}=s("loading");return n({ns:t,zIndex:o}),()=>{const e=f.spinner||f.svg,n=a("svg",{class:"circular",viewBox:f.svgViewBox?f.svgViewBox:"0 0 50 50",...e?{innerHTML:e}:{}},[a("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),o=f.text?a("p",{class:t.b("text")},[f.text]):void 0;return a(c,{name:t.b("fade"),onAfterLeave:x},{default:i((()=>[r(u("div",{style:{backgroundColor:f.background||""},class:[t.b("mask"),f.customClass,f.fullscreen?"is-fullscreen":""]},[a("div",{class:t.b("spinner")},[n,o])]),[[d,f.visible]])]))})}}}),C=t(y),k=C.mount(document.createElement("div"));return{...o(f),setText:function(e){f.text=e},removeElLoadingChild:p,close:function(){var e;b.beforeClose&&!b.beforeClose()||(g.value=!0,clearTimeout(m),m=window.setTimeout(x,400),f.visible=!1,null==(e=b.closed)||e.call(b))},handleAfterLeave:x,vm:k,get $el(){return k.$el}}}let w;const L=function(e={}){if(!b)return;const n=A(e);if(n.fullscreen&&w)return w;const t=k({...n,closed:()=>{var e;null==(e=n.closed)||e.call(n),n.fullscreen&&(w=void 0)}});h(n,n.parent,t),$(n,n.parent,t),n.parent.vLoadingAddClassList=()=>$(n,n.parent,t);let o=n.parent.getAttribute("loading-number");return o=o?`${Number.parseInt(o)+1}`:"1",n.parent.setAttribute("loading-number",o),n.parent.appendChild(t.$el),m((()=>t.visible.value=n.visible)),n.fullscreen&&(w=t),t},A=e=>{var n,t,o,l;let s;return s=g(e.target)?null!=(n=document.querySelector(e.target))?n:document.body:e.target||document.body,{parent:s===document.body||e.body?document.body:s,background:e.background||"",svg:e.svg||"",svgViewBox:e.svgViewBox||"",spinner:e.spinner||!1,text:e.text||"",fullscreen:s===document.body&&(null==(t=e.fullscreen)||t),lock:null!=(o=e.lock)&&o,customClass:e.customClass||"",visible:null==(l=e.visible)||l,target:s}},h=async(e,n,t)=>{const{nextZIndex:o}=t.vm.zIndex||t.vm._.exposed.zIndex,l={};if(e.fullscreen)t.originalPosition.value=f(document.body,"position"),t.originalOverflow.value=f(document.body,"overflow"),l.zIndex=o();else if(e.parent===document.body){t.originalPosition.value=f(document.body,"position"),await m();for(const n of["top","left"]){const t="top"===n?"scrollTop":"scrollLeft";l[n]=e.target.getBoundingClientRect()[n]+document.body[t]+document.documentElement[t]-Number.parseInt(f(document.body,`margin-${n}`),10)+"px"}for(const n of["height","width"])l[n]=`${e.target.getBoundingClientRect()[n]}px`}else t.originalPosition.value=f(n,"position");for(const[s,a]of Object.entries(l))t.$el.style[s]=a},$=(e,n,t)=>{const o=t.vm.ns||t.vm._.exposed.ns;["absolute","fixed","sticky"].includes(t.originalPosition.value)?v(n,o.bm("parent","relative")):p(n,o.bm("parent","relative")),e.fullscreen&&e.lock?p(n,o.bm("parent","hidden")):v(n,o.bm("parent","hidden"))},B=Symbol("ElLoading"),V=(n,t)=>{var o,l,s,a;const i=t.instance,r=e=>x(t.value)?t.value[e]:void 0,u=t=>(n=>{const t=g(n)&&(null==i?void 0:i[n])||n;return t?e(t):t})(r(t)||n.getAttribute(`element-loading-${C(t)}`)),d=null!=(o=r("fullscreen"))?o:t.modifiers.fullscreen,c={text:u("text"),svg:u("svg"),svgViewBox:u("svgViewBox"),spinner:u("spinner"),background:u("background"),customClass:u("customClass"),fullscreen:d,target:null!=(l=r("target"))?l:d?void 0:n,body:null!=(s=r("body"))?s:t.modifiers.body,lock:null!=(a=r("lock"))?a:t.modifiers.lock};n[B]={options:c,instance:L(c)}},I={mounted(e,n){n.value&&V(e,n)},updated(e,n){const t=e[B];n.oldValue!==n.value&&(n.value&&!n.oldValue?V(e,n):n.value&&n.oldValue?x(n.value)&&((e,n)=>{for(const t of Object.keys(n))y(n[t])&&(n[t].value=e[t])})(n.value,t.options):null==t||t.instance.close())},unmounted(e){var n;null==(n=e[B])||n.instance.close(),e[B]=null}};export{I as v};