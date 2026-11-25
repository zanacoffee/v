(()=>{
const pg=document.body.dataset.page,Q=s=>document.querySelector(s),RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
const mk=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e};
const txt=p=>(p.n+' '+p.d+' '+(p.k||'')+' '+(p.s||[]).map(r=>r.join(' ')).join(' ')).replace(/\u200c/g,'');
const f2=n=>String(n).padStart(2,'0').replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[d]);
const rvGet=()=>{try{return JSON.parse(localStorage.zrv||'[]')}catch(e){return[]}};
function recent(anchor){const items=rvGet().map(id=>P.find(p=>p.id==id)).filter(Boolean).slice(0,4);if(!items.length||!anchor)return;
anchor.closest('section').after(mk('section','xr','<div class="wrap"><h2>اخیراً دیده‌اید</h2><div class="grid">'+items.map(cardHTML).join('')+'</div></div>'))}
function quiz(){const an=Q('.acc');if(!an||!P.length)return;
const sec=mk('section','xr','<div class="wrap"><h2>قهوه‌ی مناسب تو کدام است؟</h2><div class="quiz" id="qz"></div></div>');an.closest('section').before(sec);
const M=[['اسپرسو غلیظ',/اسپرسو|موکاپات/],['قهوه‌ی شیری (لاته و کاپوچینو)',/لاته|کاپوچینو|شیر/],['فرنچ‌پرس یا دمی',/فرنچ|دمی|درشت|V60|اروپرس/i],['قهوه‌ی فوری و سریع',/فوری|ساشه/],['دستگاه قهوه‌ساز',/دستگاه|اسپرسوساز/]];
const Tt=[['تلخ و غلیظ',/تلخ|تیره|کرما|غلیظ/],['ملایم و کمی ترش',/ملایم|عربیکا|اسیدیته/],['شیرین و نرم',/شیرین|کاراملی|کاکائو|نرم/]];
const qz=sec.querySelector('#qz');let a=[];
const ask=(q,o)=>{qz.innerHTML=`<p class="qq">${q}</p><div class="qo">${o.map((x,i)=>`<button type="button" data-i="${i}">${x}</button>`).join('')}</div><div class="qd">${[0,1].map(i=>`<i class="${i<=a.length?'on':''}"></i>`).join('')}</div>`;qz.classList.remove('in');void qz.offsetWidth;qz.classList.add('in')};
const result=()=>{const m=M[a[0]][1],t=a[1]!=null?Tt[a[1]][1]:null;
const l=P.map(p=>{const x=txt(p),dev=catOf(p)=='دستگاه';let s=(m.test(x)?3:0)+(t&&t.test(x)?1:0);if(a[0]!=4&&dev)s=0;if(a[0]==4&&!dev)s=0;return[p,s]}).filter(x=>x[1]>0).sort((x,y)=>y[1]-x[1]).slice(0,2);
qz.innerHTML=(l.length?`<p class="qq">پیشنهاد ما برای تو ☕</p><div class="grid">${l.map(x=>cardHTML(x[0])).join('')}</div>`:'<p class="qq">محصولی دقیقاً مطابق سلیقه‌ات پیدا نشد.</p><p><a class="btn" href="shop.html">دیدن همه‌ی محصولات</a></p>')+'<button type="button" class="btn ghost" data-r="1">شروع دوباره</button>';qz.classList.remove('in');void qz.offsetWidth;qz.classList.add('in')};
const draw=()=>{if(!a.length)ask('چطور قهوه می‌نوشی؟',M.map(m=>m[0]));else if(a.length==1&&a[0]<3)ask('چه طعمی را بیشتر دوست داری؟',Tt.map(t=>t[0]));else result()};
qz.onclick=e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.r){a=[];draw()}else if(b.dataset.i!=null){a.push(+b.dataset.i);draw()}};draw()}
function shop(){const list=Q('#list');if(!list)return;
const cats=[...new Set(P.map(catOf))],nm={'دانه':'دانه‌ی قهوه','آسیاب‌شده':'قهوه‌ی آسیاب‌شده','فوری':'قهوه‌ی فوری','دستگاه':'دستگاه و لوازم','سایر':'سایر'};
const bar=mk('div','fbar',`<input type="search" id="fs" placeholder="جستجوی محصول..." aria-label="جستجوی محصول"><div class="chips2" id="fc"><button type="button" class="on" data-c="">همه</button>${cats.map(c=>`<button type="button" data-c="${c}">${nm[c]||c}</button>`).join('')}</div>`);list.before(bar);
const nq=s=>s.toLowerCase().replace(/ي/g,'ی').replace(/ك/g,'ک').replace(/[\u200c ]/g,'');let c='',q='';
const run=()=>{const r=P.filter(p=>(!c||catOf(p)==c)&&(!q||nq(txt(p)).includes(q)));list.innerHTML=r.map(cardHTML).join('')||'<p class="mut">محصولی پیدا نشد.</p>';list.classList.remove('pop');void list.offsetWidth;list.classList.add('pop')};
bar.querySelector('#fs').oninput=e=>{q=nq(e.target.value);run()};
bar.querySelector('#fc').onclick=e=>{const b=e.target.closest('button');if(!b)return;c=b.dataset.c;bar.querySelectorAll('#fc button').forEach(x=>x.classList.toggle('on',x==b));run()}}
function brew(){const g=Q('.grid');if(!g)return;
const sec=mk('section','xr',`<div class="wrap"><h2>ابزارهای دم‌آوری</h2><div class="tools">
<div class="tool"><h3>تایمر دم‌آوری</h3><select id="tm" aria-label="روش دم‌آوری"><option value="28">اسپرسو (۲۸ ثانیه)</option><option value="180">V60 (۳ دقیقه)</option><option value="240" selected>فرنچ‌پرس (۴ دقیقه)</option></select>
<div class="ring"><svg viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="52" class="bg"/><circle id="rg" cx="60" cy="60" r="52" class="fg"/></svg><b id="tt">۴:۰۰</b></div>
<div><button class="btn" id="ts" type="button">شروع</button> <button class="btn ghost" id="tr" type="button">از نو</button></div><p class="mut" id="td" role="status"></p></div>
<div class="tool"><h3>محاسبه‌ی قهوه و آب</h3><label>روش<select id="rm"><option value="15">فرنچ‌پرس (۱ به ۱۵ ـ آسیاب درشت)</option><option value="16">V60 (۱ به ۱۶ ـ آسیاب متوسط)</option><option value="14">اروپرس (۱ به ۱۴ ـ آسیاب متوسط)</option><option value="8">کلدبرو غلیظ (۱ به ۸ ـ آسیاب درشت)</option></select></label>
<label>تعداد فنجان (هر فنجان ۲۰۰ میلی‌لیتر)<input id="rc" type="number" min="1" max="12" value="2"></label><p class="res" id="rr"></p><p class="mut">نسبت‌ها نقطه‌ی شروع‌اند؛ با سلیقه‌ی خودتان کم و زیادشان کنید.</p></div></div></div>`);
g.closest('section').before(sec);
const $=s=>sec.querySelector(s),C=326.7;let tot=240,rem=240,run=false,end=0,iv=null;
const show=()=>{const r=Math.ceil(rem);$('#tt').textContent=fa(Math.floor(r/60))+':'+f2(r%60);$('#rg').style.strokeDashoffset=C*(1-rem/tot)};
const stop=()=>{run=false;clearInterval(iv);$('#ts').textContent='شروع'};
const reset=()=>{stop();tot=rem=+$('#tm').value;$('#td').textContent='';show()};
const beep=()=>{try{const x=new(window.AudioContext||window.webkitAudioContext)(),o=x.createOscillator();o.frequency.value=880;o.connect(x.destination);o.start();setTimeout(()=>{o.stop();x.close()},400)}catch(e){}try{navigator.vibrate&&navigator.vibrate(250)}catch(e){}};
$('#ts').onclick=()=>{if(run){rem=Math.max(0,(end-Date.now())/1000);stop();return}if(rem<=0)reset();run=true;end=Date.now()+rem*1000;$('#ts').textContent='توقف';$('#td').textContent='';
iv=setInterval(()=>{rem=Math.max(0,(end-Date.now())/1000);show();if(rem<=0){stop();$('#td').textContent='قهوه‌ات آماده است ☕';beep()}},200)};
$('#tr').onclick=reset;$('#tm').onchange=reset;show();
const calc=()=>{const n=Math.min(12,Math.max(1,+$('#rc').value||1)),w=n*200,c=Math.round(w/+$('#rm').value);$('#rr').innerHTML=`<b>${fa(c)} گرم</b> قهوه + <b>${fa(w)} میلی‌لیتر</b> آب`};
$('#rm').onchange=$('#rc').oninput=calc;calc()}
function prod(){const h=Q('#prod');if(!h)return;const m=/add\((\d+)\)/.exec(h.innerHTML),cur=m&&P.find(p=>p.id==m[1]);if(!cur)return;
try{localStorage.zrv=JSON.stringify([cur.id,...rvGet().filter(x=>x!=cur.id)].slice(0,8))}catch(e){}
const rel=P.filter(p=>p.id!=cur.id).sort((a,b)=>(catOf(b)==catOf(cur))-(catOf(a)==catOf(cur))).slice(0,4);
if(rel.length)h.closest('section').after(mk('section','xr','<div class="wrap"><h2>محصولات مرتبط</h2><div class="grid">'+rel.map(cardHTML).join('')+'</div></div>'))}
function home(){
const mq=Q('.marquee');if(mq)mq.after(mk('section','xr','<div class="wrap"><div class="feat"><div><i>🔥</i><b>تازه‌رُست</b><span>رُست در دسته‌های کوچک</span></div><div><i>🚚</i><b>ارسال سریع</b><span>۲ تا ۴ روز کاری</span></div><div><i>💬</i><b>پشتیبانی آنلاین</b><span>دستیار خودکار و تماس</span></div><div><i>💳</i><b>پرداخت راحت</b><span>آنلاین یا در محل</span></div></div></div>'));
const q=Q('#qz');if(q)q.closest('section').before(mk('section','xr','<div class="wrap"><h2>از دانه تا فنجان</h2><div class="proc"><div><i>۱</i><b>انتخاب دانه</b><span>دانه‌ی مناسب هر میکس</span></div><div><i>۲</i><b>رُست تازه</b><span>رُست در دسته‌های کوچک</span></div><div><i>۳</i><b>بسته‌بندی</b><span>بسته‌ی دربسته برای حفظ تازگی</span></div><div><i>۴</i><b>رسیدن به شما</b><span>ارسال به سراسر ایران</span></div></div></div>'));
const ac=Q('.acc');if(ac)ac.closest('section').after(mk('section','xr','<div class="wrap"><div class="cta"><h2>اولین قهوه‌ی تازه‌رُستت را انتخاب کن</h2><p>از اسپرسوی غلیظ تا لاته‌ی نرم؛ همه‌ی میکس‌های زانا یک‌جا.</p><a class="btn" href="shop.html">رفتن به فروشگاه</a></div></div>'))}
function cup(){const b=mk('button','totop','<svg viewBox="0 0 40 40" aria-hidden="true"><defs><clipPath id="cc"><path d="M8 12h22v10a11 11 0 0 1-22 0z"/></clipPath></defs><rect id="cf" x="8" y="34" width="22" height="22" fill="#9a6340" clip-path="url(#cc)"/><path d="M8 12h22v10a11 11 0 0 1-22 0z" fill="none" stroke="currentColor" stroke-width="2.2"/><path d="M30 15h3a4 4 0 0 1 0 8h-3" fill="none" stroke="currentColor" stroke-width="2.2"/></svg>');
b.setAttribute('aria-label','بازگشت به بالا');document.body.append(b);
addEventListener('scroll',()=>{const p=scrollY/Math.max(1,document.body.scrollHeight-innerHeight);b.classList.toggle('show',scrollY>400);Q('#cf').setAttribute('y',34-22*Math.min(1,p))},{passive:true});
b.onclick=()=>scrollTo({top:0,behavior:RM?'auto':'smooth'})}
document.addEventListener('click',e=>{const b=e.target.closest('button[onclick^="add("]'),t=Q('.cartlink');if(!b||!t||RM||!b.animate)return;
const a=b.getBoundingClientRect(),z=t.getBoundingClientRect(),x0=a.left+a.width/2,y0=a.top+a.height/2,dx=z.left+z.width/2-x0,dy=z.top+z.height/2-y0;
for(let i=0;i<6;i++){const d=mk('i','flybean');d.style.left=x0+'px';d.style.top=y0+'px';document.body.append(d);
d.animate([{transform:'translate(0,0) scale(1) rotate(0)',opacity:1},{transform:`translate(${dx*.5+(Math.random()-.5)*120}px,${dy*.5-80-Math.random()*60}px) scale(1.2) rotate(180deg)`,opacity:1,offset:.45},{transform:`translate(${dx}px,${dy}px) scale(.3) rotate(420deg)`,opacity:.2}],{duration:800+i*70,easing:'cubic-bezier(.4,.1,.3,1)',delay:i*45}).onfinish=()=>d.remove()}},true);
document.addEventListener('DOMContentLoaded',()=>{
if(pg=='home'){recent(Q('#feat'));quiz();home()}
if(!['home','product','admin'].includes(pg)){const s=Q('main>section:first-child');if(s&&s.querySelector('h1'))s.classList.add('phead')}
if(pg=='shop'){shop();recent(Q('#list'))}
if(pg=='blog')brew();
if(pg=='product')prod();
cup();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.xr').forEach(e=>io.observe(e))});
})();
