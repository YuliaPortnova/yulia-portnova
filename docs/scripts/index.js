var n=document.querySelector(".main-header"),w=n.querySelector(".main-header__toggle"),i=()=>{let t=()=>{n.classList.toggle("is-open")};w.addEventListener("click",t)};var h=document.querySelectorAll(".animation__button"),E=t=>{if(t){let o=()=>{t.classList.toggle("is-active")};t.addEventListener("click",o)}},c=()=>{h.forEach(t=>{E(t)})};var r=document.querySelector(".main-header:not(.main-header--not-sticky)"),s=document.querySelectorAll(".projects__project"),l=document.querySelector(".scroll-to"),m=500,f=120,A=document.documentElement.clientHeight,a=0,L=t=>{let o=t.getBoundingClientRect(),e=o.top,S=o.bottom;return e>=0&&S-f<=A},d=()=>{s&&s.forEach(t=>{L(t)&&t.classList.add("is-active")})},y=(t,o)=>{r&&r.classList.toggle("main-header--sticky",o>=m&&t>0)},B=(t,o)=>{l&&l.classList.toggle("is-visible",o>=m&&t<0)},u=()=>{d();let t=()=>{let o=window.scrollY,e=o-a;y(e,o),d(),B(e,o),a=o};window.addEventListener("scroll",t)};var g=document.querySelector(".animation__progress-bar"),p=()=>{if(!g)return null;let t=document.documentElement.scrollHeight-document.documentElement.clientHeight;window.addEventListener("scroll",()=>{let e=(window.scrollY/t).toFixed(2);g.style.transform=`scaleX(${e})`})};c();u();p();i();
