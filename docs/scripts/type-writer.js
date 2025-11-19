var e=t=>{if(!t)return;let n=0,i=t.textContent;t.textContent="";let r=80;function o(){n<i.length&&(t.innerHTML+=i.charAt(n),n++,setTimeout(o,r))}o()};export{e as initTypeWriter};
