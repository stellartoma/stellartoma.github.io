(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7397:function(e,t,n){Promise.resolve().then(n.bind(n,9573))},9573:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var c=n(7437),a=n(2265),r=n(9512),o=()=>{let[e,t]=(0,a.useState)(!1),{theme:n,setTheme:o}=(0,r.F)();return((0,a.useEffect)(()=>{t(!0)},[]),e)?(0,c.jsxs)("div",{className:"bg-background text-primary-green",children:["Mode: ",n,(0,c.jsx)("br",{}),(0,c.jsx)("button",{onClick:()=>o("light"),children:"Light"}),(0,c.jsx)("br",{}),(0,c.jsx)("button",{onClick:()=>o("dark"),children:"Dark"})]}):null};function s(e){let{text:t,size:n}=e;switch(n){case"1":return(0,c.jsx)("h1",{className:"text-xl",children:t});case"2":return(0,c.jsx)("h2",{className:"text-lg",children:t});case"3":return(0,c.jsx)("h3",{className:"text-lg",children:t});default:return(0,c.jsx)("h1",{className:"text-lg",children:t})}}function l(){let[e,t]=(0,a.useState)(!1);return(0,c.jsx)("main",{className:"text-gray-900 dark:text-white bg-gray-400 dark:bg-gray-950 flex min-h-screen flex-col items-centerp-24 p-24",children:(0,c.jsxs)("div",{className:" bg-white dark:bg-gray-800 text-xs z-10 w-full max-w-5xl items-center font-mono border-opacity-30 rounded-xl text-center p-4",children:[(0,c.jsx)(s,{text:"Quiz Game Next",size:"1"}),e,(0,c.jsx)(o,{})]})})}},9512:function(e,t,n){"use strict";n.d(t,{F:function(){return i},f:function(){return d}});var c=n(2265),a=["light","dark"],r="(prefers-color-scheme: dark)",o="undefined"==typeof window,s=c.createContext(void 0),l={setTheme:e=>{},themes:[]},i=()=>{var e;return null!=(e=c.useContext(s))?e:l},d=e=>c.useContext(s)?e.children:c.createElement(u,{...e}),m=["light","dark"],u=e=>{let{forcedTheme:t,disableTransitionOnChange:n=!1,enableSystem:o=!0,enableColorScheme:l=!0,storageKey:i="theme",themes:d=m,defaultTheme:u=o?"system":"light",attribute:y="data-theme",value:b,children:v,nonce:k}=e,[p,w]=c.useState(()=>f(i,u)),[S,C]=c.useState(()=>f(i)),E=b?Object.values(b):d,T=c.useCallback(e=>{let t=e;if(!t)return;"system"===e&&o&&(t=x());let c=b?b[t]:t,r=n?g():null,s=document.documentElement;if("class"===y?(s.classList.remove(...E),c&&s.classList.add(c)):c?s.setAttribute(y,c):s.removeAttribute(y),l){let e=a.includes(u)?u:null,n=a.includes(t)?t:e;s.style.colorScheme=n}null==r||r()},[]),j=c.useCallback(e=>{let t="function"==typeof e?e(e):e;w(t);try{localStorage.setItem(i,t)}catch(e){}},[t]),N=c.useCallback(e=>{C(x(e)),"system"===p&&o&&!t&&T("system")},[p,t]);c.useEffect(()=>{let e=window.matchMedia(r);return e.addListener(N),N(e),()=>e.removeListener(N)},[N]),c.useEffect(()=>{let e=e=>{e.key===i&&j(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[j]),c.useEffect(()=>{T(null!=t?t:p)},[t,p]);let L=c.useMemo(()=>({theme:p,setTheme:j,forcedTheme:t,resolvedTheme:"system"===p?S:p,themes:o?[...d,"system"]:d,systemTheme:o?S:void 0}),[p,j,t,S,o,d]);return c.createElement(s.Provider,{value:L},c.createElement(h,{forcedTheme:t,disableTransitionOnChange:n,enableSystem:o,enableColorScheme:l,storageKey:i,themes:d,defaultTheme:u,attribute:y,value:b,children:v,attrs:E,nonce:k}),v)},h=c.memo(e=>{let{forcedTheme:t,storageKey:n,attribute:o,enableSystem:s,enableColorScheme:l,defaultTheme:i,value:d,attrs:m,nonce:u}=e,h="system"===i,f="class"===o?"var d=document.documentElement,c=d.classList;".concat("c.remove(".concat(m.map(e=>"'".concat(e,"'")).join(","),")"),";"):"var d=document.documentElement,n='".concat(o,"',s='setAttribute';"),g=l?(a.includes(i)?i:null)?"if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'".concat(i,"'"):"if(e==='light'||e==='dark')d.style.colorScheme=e":"",x=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2)||void 0===arguments[2]||arguments[2],c=d?d[e]:e,r=t?e+"|| ''":"'".concat(c,"'"),s="";return l&&n&&!t&&a.includes(e)&&(s+="d.style.colorScheme = '".concat(e,"';")),"class"===o?t||c?s+="c.add(".concat(r,")"):s+="null":c&&(s+="d[s](n,".concat(r,")")),s},y=t?"!function(){".concat(f).concat(x(t),"}()"):s?"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if('system'===e||(!e&&").concat(h,")){var t='").concat(r,"',m=window.matchMedia(t);if(m.media!==t||m.matches){").concat(x("dark"),"}else{").concat(x("light"),"}}else if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(x(d?"x[e]":"e",!0),"}").concat(h?"":"else{"+x(i,!1,!1)+"}").concat(g,"}catch(e){}}()"):"!function(){try{".concat(f,"var e=localStorage.getItem('").concat(n,"');if(e){").concat(d?"var x=".concat(JSON.stringify(d),";"):"").concat(x(d?"x[e]":"e",!0),"}else{").concat(x(i,!1,!1),";}").concat(g,"}catch(t){}}();");return c.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:y}})}),f=(e,t)=>{let n;if(!o){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},g=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},x=e=>(e||(e=window.matchMedia(r)),e.matches?"dark":"light")}},function(e){e.O(0,[971,23,744],function(){return e(e.s=7397)}),_N_E=e.O()}]);