var y=document.querySelector(".main-header"),X=y.querySelector(".main-header__toggle"),g=()=>{let e=()=>{y.classList.toggle("is-open")};X.addEventListener("click",e)};var R=document.querySelectorAll(".animation__button"),F=e=>{if(e){let t=()=>{e.classList.toggle("is-active")};e.addEventListener("click",t)}},h=()=>{R.forEach(e=>{F(e)})};var u=(e,t=100)=>{let n,r;return(...d)=>{let s=Date.now()-r,i=Math.max(t-s,0);window.clearTimeout(n),n=window.setTimeout(()=>{e(...d),r=Date.now()},i)}};var v=document.querySelector(".main-header:not(.main-header--not-sticky)"),E=document.querySelectorAll(".projects__project"),w=document.querySelector(".scroll-to"),x=500,$=document.documentElement.clientHeight,L=0,j=e=>{let t=e.getBoundingClientRect(),n=t.top,r=t.height;return n+r>=0&&n+.5*r<=$},S=()=>{E&&E.forEach(e=>{j(e)&&e.classList.add("is-active")})},D=(e,t)=>{v&&v.classList.toggle("main-header--sticky",t>=x&&e>0)},W=(e,t)=>{w&&w.classList.toggle("is-visible",t>=x&&e<0)},M=()=>{S(),window.addEventListener("scroll",u(()=>{let e=window.scrollY,t=e-L;D(t,e),S(),W(t,e),L=e}))};var A=document.querySelector(".animation__progress-bar"),q=()=>{let e=document.documentElement.scrollHeight-document.documentElement.clientHeight,n=(window.scrollY/e).toFixed(2);A.style.transform=`scaleX(${n})`},_=()=>{if(!A)return null;window.addEventListener("scroll",u(()=>{q()})),window.addEventListener("resize",u(()=>{q()}))};var C=e=>e.offsetWidth/2,H=e=>e.offsetHeight/2,T=e=>{if(!e)return;let t=e.querySelectorAll(".parallax-layer"),n=C(e),r=H(e),d=i=>{t.forEach(l=>{let o=l.dataset.speed,c=i.clientX-n,f=i.clientY-r,B=(c*o).toFixed(2),P=(f*o).toFixed(2);l.style.transform=`translate(${B}px, ${P}px)`,l.style.transition="none"})};window.addEventListener("resize",()=>{n=C(e),r=H(e)});let s=()=>{t.forEach(i=>{i.style.transform="translate(0, 0)",i.style.transition="transform 0.8s ease"})};e.addEventListener("mousemove",d),e.addEventListener("mouseout",s)};var z=document.querySelectorAll(".projects__img-link"),b=document.querySelectorAll(".projects__link, .main-header__link"),a=document.querySelector(".cursor"),m=document.querySelector(".cursor circle"),p=document.querySelector(".main-footer"),O=p.querySelectorAll(".main-footer__link"),k=document.querySelector(".scroll-to"),Y=()=>{if(b&&a&&m)if(window.matchMedia("(pointer: coarse)").matches)a.style.display="none";else{let e={speed:.2,offset:Math.round(a.getBoundingClientRect().width/2)},t={x:null,y:null},n={x:null,y:null},r=!1,d=()=>{if(r){let o=Math.round(t.x-n.x),c=Math.round(t.y-n.y);n.x=Math.round(n.x+o*e.speed),n.y=Math.round(n.y+c*e.speed);let f=`translate(${t.x}px, ${t.y}px)`;a.style.transform=f}r=!1},s=(o,c)=>{a.style.fill=o,m.style.transform=c};z.forEach(o=>{o.addEventListener("mouseenter",()=>{s("rgba(251, 45, 247, 0.8)","scale(0.6)")}),o.addEventListener("mouseleave",()=>{s("rgba(36, 88, 82, 0.4)","scale(1)")})}),b.forEach(o=>{o.addEventListener("mouseenter",()=>{s("rgba(36, 88, 82, 0.8)","scale(0.6)")}),o.addEventListener("mouseleave",()=>{s("rgba(36, 88, 82, 0.8)","scale(1)")})}),p.addEventListener("mouseenter",()=>{a.style.fill="rgba(251, 45, 247, 0.6)"}),p.addEventListener("mouseleave",()=>{a.style.fill="rgba(36, 88, 82, 0.6)"}),O.forEach(o=>{o.addEventListener("mouseenter",()=>{s("rgba(251, 45, 247, 0.9)","scale(0.5)")}),o.addEventListener("mouseleave",()=>{s("rgba(251, 45, 247, 0.9)","scale(1)")})}),k.addEventListener("mouseenter",()=>{m.style.transform="scale(0)"}),k.addEventListener("mouseleave",()=>{m.style.transform="scale(1)"}),document.addEventListener("mouseleave",()=>{a.style.opacity=0}),document.addEventListener("mouseenter",()=>{a.style.opacity=1}),window.addEventListener("mousemove",o=>{r=!0,t.x=o.clientX-e.offset,t.y=o.clientY+window.scrollY-e.offset});let i=0;window.addEventListener("scroll",()=>{r=!0;let o=window.scrollY,c=o-i;t.y=t.y+c,i=o});let l=()=>{d(),requestAnimationFrame(l)};requestAnimationFrame(l)}};var I=document.querySelector(".parallax-mouse-move");h();M();_();g();T(I);Y();
