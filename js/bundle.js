!function(){"use strict";var t=function(){!function(){const t=[{id:1,n:33,k:10,s:100,m:0,v:0},{id:2,n:26,k:12,s:13,m:3,v:2},{id:3,n:52,k:6,s:30,m:5,v:10}];!function(){const n=document.querySelector("#table-1-1");t.forEach((function(t,e){!function(t){let e=document.createElement("tr");e.innerHTML=`\n\t\t\t\t<th scope="row">${t.id}</th>\n\t\t\t\t<td>${t.n}</td>\n\t\t\t\t<td>${t.k}</td>\n\t\t\t\t<td>${t.s}</td>\n\t\t\t\t<td>${t.m}</td>\n\t\t\t\t<td>${t.v}</td>\n\t\t\t\t<td>${function(t,n,e,o,c){const d=Math.pow(t,n)/e;let u;return u=0!==o&&0!==c?d*c/o:d,u/=60,u/=60,u/=24,u}(t.n,t.k,t.s,t.m,t.v)}</td>\n\t\t\t`,n.querySelector("tbody").append(e)}(t)}))}()}(),function(){const t=[{id:1,n:33,t:100,s:100},{id:2,n:26,t:120,s:13},{id:3,n:52,t:60,s:30}];!function(){const n=document.querySelector("#table-1-2");t.forEach((function(t,e){!function(t){let e=document.createElement("tr");var o,c,d,u,l;e.innerHTML=`\n\t\t\t\t<th scope="row">${t.id}</th>\n\t\t\t\t<td>${t.n}</td>\n\t\t\t\t<td>${t.t}</td>\n\t\t\t\t<td>${t.s}</td>\n\t\t\t\t<td>${o=t.n,c=t.t,d=t.s,(u=c*d,l=o,Math.log(u)/Math.log(l)).toFixed(4)}</td>\n\t\t\t`,n.querySelector("tbody").append(e)}(t)}))}()}()},n=function(){const t=["а","б","в","г","д","е","ё","ж","з","и","й","к","л","м","н","о","п","р","с","т","у","ф","х","ц","ч","ш","щ","ъ","ы","ь","э","ю","я","А","Б","В","Г","Д","Е","Ё","Ж","З","И","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ф","Х","Ц","Ч","Ш","Щ","Ъ","Ы","Ь","Э","Ю","Я"],n=document.querySelector("#inputKey"),e=document.querySelector("#inputText"),o=document.querySelector("#outputText"),c=document.querySelector("#encrypt");let d=0;function u(n,e){if(n+e<t.length)return console.log("Не туда"),console.log(n),console.log(e),t[n+e];{let o=n+e-t.length;return console.log(n),console.log(e),console.log(o),t[o]}}function l(t,n){for(let e=0;e<n.length;e++)if(t===n[e])return d=e,!0}c.addEventListener("click",(()=>{let c=e.value,r=+n.value,i="";for(let n=0;n<c.length;n++)l(c[n],t)?i+=u(d,r):i+=c[n];o.value=i}))}();document.addEventListener("DOMContentLoaded",(()=>{t(),n()}))}();
//# sourceMappingURL=bundle.js.map