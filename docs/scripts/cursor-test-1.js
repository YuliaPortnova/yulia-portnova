var n=document.querySelector(".cursor"),l,d={speed:.2,offset:Math.round(n.getBoundingClientRect().width/2)},i=["#F66C41","#00E0FF","#D9AB36","#4EF483","#7C4EFF"],o={x:null,y:null},t={x:null,y:null},m=e=>e[y(0,e.length-1)],y=(e=0,s=1)=>{let r=Math.ceil(Math.min(e,s)),u=Math.floor(Math.max(e,s));return Math.floor(r+Math.random()*(u-r+1))},f=()=>{let e=Math.round(o.x-t.x),s=Math.round(o.y-t.y);t.x=Math.round(t.x+e*d.speed),t.y=Math.round(t.y+s*d.speed);let r=`translate3d(${t.x}px, ${t.y}px, 0)`;n.style.transform=r},h=e=>{o.x=e.clientX-d.offset,o.y=e.clientY-d.offset,console.log(o.x,o.y)},c=()=>{let e=m(i);e===l?c():(n.style.fill=e,l=e)};window.addEventListener("mousemove",h);window.addEventListener("click",c);document.addEventListener("mouseenter",()=>{document.body.style.cursor="none"});document.body.style.cursor="none";window.addEventListener("mouseout",()=>{n.style.display="none"});window.addEventListener("mouseover",()=>{n.style.display="block"});var a=()=>{f(),requestAnimationFrame(a)};requestAnimationFrame(a);
