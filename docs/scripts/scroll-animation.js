var c=(t,e=100)=>{let o,n;return(...m)=>{let u=Date.now()-n,p=Math.max(e-u,0);window.clearTimeout(o),o=window.setTimeout(()=>{t(...m),n=Date.now()},p)}};var s=document.querySelector(".main-header:not(.main-header--not-sticky)"),i=document.querySelectorAll(".projects__project"),l=document.querySelector(".scroll-to"),d=500,h=document.documentElement.clientHeight,a=0,T=t=>{let e=t.getBoundingClientRect(),o=e.top,n=e.height;return o+n>=0&&o+.5*n<=h},r=()=>{i&&i.forEach(t=>{T(t)&&t.classList.add("is-active")})},g=(t,e)=>{s&&s.classList.toggle("main-header--sticky",e>=d&&t>0)},w=(t,e)=>{l&&l.classList.toggle("is-visible",e>=d&&t<0)},f=()=>{r(),window.addEventListener("scroll",c(()=>{let t=window.scrollY,e=t-a;g(e,t),r(),w(e,t),a=t}))};export{f as initScrollAnimation};