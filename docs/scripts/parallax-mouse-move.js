var c=t=>t.offsetWidth/2,i=t=>t.offsetHeight/2,v=t=>{if(!t)return;let n=t.querySelectorAll(".parallax-layer"),s=c(t),r=i(t),l=e=>{n.forEach(o=>{let a=o.dataset.speed,u=e.clientX-s,f=e.clientY-r,h=(u*a).toFixed(2),m=(f*a).toFixed(2);o.style.transform=`translate(${h}px, ${m}px)`,o.style.transition="none"})};window.addEventListener("resize",()=>{s=c(t),r=i(t)});let d=()=>{n.forEach(e=>{e.style.transform="translate(0, 0)",e.style.transition="transform 0.8s ease"})};t.addEventListener("mousemove",l),t.addEventListener("mouseout",d)};export{v as activateParallaxMouseMove};
