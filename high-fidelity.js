(()=>{'use strict';
const slides=[...document.querySelectorAll('.slide')];
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
slides.forEach((slide,i)=>{
  if(!slide.querySelector('.hf-aurora.a')){
    const a=document.createElement('i'),b=document.createElement('i'),n=document.createElement('span');
    a.className='hf-aurora a';b.className='hf-aurora b';n.className='hf-index';n.textContent=String(i+1).padStart(2,'0');
    slide.prepend(a,b,n);
  }
});
const tiltSelectors=['.journey article','.master article','.principles article','.orbit article','.loop>article','.result','.neq article','.reliable>article','.portrait','.record-ui','.compare article','.float'];
const tilt=[...document.querySelectorAll(tiltSelectors.join(','))];
tilt.forEach(el=>{el.classList.add('hf-tilt');if(!el.querySelector(':scope > .hf-focus-ring')){const r=document.createElement('i');r.className='hf-focus-ring';el.appendChild(r)}});
if(!reduce&&matchMedia('(pointer:fine)').matches){
  tilt.forEach(el=>{
    el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(900px) rotateX(${(-y*3.2).toFixed(2)}deg) rotateY(${(x*4.2).toFixed(2)}deg) translateY(-3px)`});
    el.addEventListener('mouseleave',()=>{el.style.transform=''});
  });
}
const wipe=document.createElement('div');wipe.className='hf-wipe';document.body.appendChild(wipe);
const s=document.createElement('style');s.textContent=`.hf-wipe{position:fixed;z-index:400;inset:0;pointer-events:none;opacity:0;background:linear-gradient(115deg,transparent 0%,rgba(100,240,223,.025) 42%,rgba(100,240,223,.18) 50%,rgba(100,240,223,.025) 58%,transparent 100%);transform:translateX(110%)}.hf-wipe.go{animation:hfWipe .78s cubic-bezier(.16,1,.3,1)}@keyframes hfWipe{0%{opacity:0;transform:translateX(110%)}20%{opacity:.55}100%{opacity:0;transform:translateX(-110%)}}.slide.active .title{animation:hfTitle .9s cubic-bezier(.16,1,.3,1)}@keyframes hfTitle{0%{opacity:.1;transform:translateY(24px);filter:blur(10px)}100%{opacity:1;transform:none;filter:none}}`;
document.head.appendChild(s);
let last=-1;const ob=new MutationObserver(()=>{const now=slides.findIndex(x=>x.classList.contains('active'));if(now>=0&&now!==last){if(last>=0&&!reduce){wipe.classList.remove('go');void wipe.offsetWidth;wipe.classList.add('go')}last=now}});slides.forEach(x=>ob.observe(x,{attributes:true,attributeFilter:['class']}));
let mx=0,my=0;if(!reduce&&matchMedia('(pointer:fine)').matches){addEventListener('mousemove',e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5;const active=slides.find(x=>x.classList.contains('active'));if(active){const arts=active.querySelectorAll('.story-art');arts.forEach((art,j)=>{art.style.marginLeft=`${(mx*(j?8:12)).toFixed(1)}px`;art.style.marginTop=`${(my*(j?6:9)).toFixed(1)}px`})}})}
})();