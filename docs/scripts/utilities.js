var m=(o,a=100)=>{let t,e;return(...l)=>{let n=Date.now()-e,i=Math.max(a-n,0);window.clearTimeout(t),t=window.setTimeout(()=>{o(...l),e=Date.now()},i)}};export{m as throttle};
