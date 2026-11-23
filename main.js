const P=[
{id:1,n:'اسپرسو بلند زانا (۳۰٪ روبوستا ـ ۷۰٪ عربیکا)',p:480000,w:'۱ کیلوگرم',i:'bag.jpg',d:'میکس متعادل با بدنه‌ی پر و کرمای غلیظ؛ مناسب اسپرسو و موکاپات.',s:[['نوع محصول','دانه‌ی قهوه'],['ترکیب','۷۰٪ عربیکا + ۳۰٪ روبوستا'],['درجه‌ی رُست','متوسط به تیره'],['طعم','شکلات تلخ، فندق، کرمای غلیظ'],['مناسب برای','دستگاه اسپرسو، موکاپات'],['ماندگاری','۶ ماه از تاریخ رُست']]},
{id:2,n:'دانه قهوه عربیکا ۱۰۰٪',p:620000,w:'۵۰۰ گرم',i:'beans.jpg',d:'رُست متوسط با طعم شکلات تلخ و فندق و اسیدیته‌ی ملایم.',s:[['نوع محصول','دانه‌ی قهوه'],['ترکیب','۱۰۰٪ عربیکا'],['درجه‌ی رُست','متوسط'],['طعم','شکلات تلخ، فندق، اسیدیته‌ی ملایم'],['مناسب برای','V60، اروپرس، اسپرسو'],['ماندگاری','۶ ماه از تاریخ رُست']]},
{id:3,n:'میکس کافه زانا',p:350000,w:'۵۰۰ گرم',i:'bag.jpg',d:'انتخاب کافه‌ها؛ پایدار، پرکرما و مناسب شیر.',s:[['نوع محصول','دانه‌ی قهوه'],['ترکیب','میکس عربیکا و روبوستا'],['درجه‌ی رُست','متوسط'],['طعم','کرمای پایدار، بادام، مناسب شیر'],['مناسب برای','لاته، کاپوچینو، دستگاه کافه'],['ماندگاری','۶ ماه از تاریخ رُست']]},
{id:4,n:'قهوه رُست تیره',p:420000,w:'۵۰۰ گرم',i:'beans.jpg',d:'رُست تیره با تلخی دلنشین و عطر کاراملی.',s:[['نوع محصول','دانه‌ی قهوه'],['ترکیب','میکس عربیکا و روبوستا'],['درجه‌ی رُست','تیره'],['طعم','کاراملی، شکلات تلخ، تلخی ملایم'],['مناسب برای','اسپرسو، موکاپات، قهوه ترک'],['ماندگاری','۶ ماه از تاریخ رُست']]},
{id:5,n:'پک دم‌آوری فرنچ‌پرس',p:560000,w:'۲۵۰ گرم + آسیاب درشت',i:'beans.jpg',d:'قهوه‌ی آسیاب‌شده‌ی درشت، آماده‌ی فرنچ‌پرس.',s:[['نوع محصول','قهوه‌ی آسیاب‌شده'],['درجه‌ی آسیاب','درشت'],['درجه‌ی رُست','متوسط'],['نسبت پیشنهادی','۱ گرم قهوه به ۱۵ گرم آب'],['زمان دم‌آوری','حدود ۴ دقیقه'],['ماندگاری','۳ ماه از تاریخ رُست']]},
{id:6,n:'اسپرسو بلند زانا ۲۵۰ گرمی',p:140000,w:'۲۵۰ گرم',i:'bag.jpg',d:'همان میکس محبوب در بسته‌ی کوچک برای شروع.',s:[['نوع محصول','دانه‌ی قهوه'],['ترکیب','۷۰٪ عربیکا + ۳۰٪ روبوستا'],['درجه‌ی رُست','متوسط به تیره'],['طعم','شکلات تلخ، فندق، کرمای غلیظ'],['مناسب برای','دستگاه اسپرسو، موکاپات'],['ماندگاری','۶ ماه از تاریخ رُست']]},
{id:7,n:'قهوه‌ی مخصوص لاته و کاپوچینو',p:395000,w:'۵۰۰ گرم',i:'latte2.jpg',k:'لاته کاپوچینو شیر کافه',d:'میکس نرم و شیرین برای قهوه‌ی شیری؛ کرمای پایدار و فوم زیبا.',s:[['نوع محصول','دانه‌ی قهوه'],['ترکیب','میکس عربیکا و روبوستا'],['درجه‌ی رُست','متوسط'],['طعم','کاراملی، کاکائو، شیرین و نرم'],['مناسب برای','لاته، کاپوچینو، دستگاه اسپرسو'],['ماندگاری','۶ ماه از تاریخ رُست']]},
{id:8,n:'اسپرسو کرمادار آسیاب‌شده',p:215000,w:'۲۵۰ گرم',i:'espresso-glass.jpg',k:'اسپرسو آسیاب‌شده کرما موکاپات',d:'آسیاب ریز و آماده؛ اسپرسوی غلیظ با کرمای طلایی.',s:[['نوع محصول','قهوه‌ی آسیاب‌شده'],['درجه‌ی آسیاب','ریز'],['درجه‌ی رُست','متوسط به تیره'],['طعم','شکلات تلخ، کرمای غلیظ'],['مناسب برای','اسپرسوساز، موکاپات'],['ماندگاری','۳ ماه از تاریخ رُست']]},
{id:9,n:'قهوه فوری اسپرسو لانگو (۲۰ ساشه)',p:180000,w:'۲۰ ساشه × ۱۰ گرم',i:'sachet.jpg',k:'فوری ساشه کافی‌میکس لانگو نسکافه',d:'ساشه‌های تک‌نفره‌ی کافی‌میکس با طعم اسپرسو لانگو؛ سریع و آماده‌ی مصرف.',s:[['نوع محصول','کافی‌میکس فوری'],['تعداد در بسته','۲۰ ساشه'],['وزن هر ساشه','۱۰ گرم'],['طعم','اسپرسو لانگو'],['مناسب برای','محل کار، سفر، مصرف سریع']]},
{id:10,n:'اسپرسوساز نیمه‌حرفه‌ای',p:8900000,w:'یک دستگاه',wl:'تعداد',i:'machine.jpg',k:'اسپرسوساز دستگاه قهوه‌ساز ماشین پرتافیلتر',d:'اسپرسوساز با بدنه‌ی استیل، فشارسنج، پرتافیلتر و لوله‌ی بخار برای فوم شیر.',s:[['نوع محصول','اسپرسوساز نیمه‌حرفه‌ای'],['بدنه','استیل'],['امکانات','فشارسنج، پرتافیلتر، لوله‌ی بخار، سینی قطره‌گیر'],['مناسب برای','اسپرسو، لاته، کاپوچینو']]}];
const sel=id=>{try{localStorage.zid=id}catch(e){}};
const fa=n=>Number(n).toLocaleString('fa-IR');
const get=()=>{try{return JSON.parse(localStorage.getItem('zc')||'{}')}catch(e){return{}}};
const put=c=>{try{localStorage.setItem('zc',JSON.stringify(c))}catch(e){}count()};
const add=id=>{const c=get();c[id]=(c[id]||0)+1;put(c);toast()};
function count(){document.querySelectorAll(".cartlink").forEach(e=>{e.classList.remove("bump");void e.offsetWidth;e.classList.add("bump")});const n=Object.values(get()).reduce((a,b)=>a+b,0);document.querySelectorAll('.cc').forEach(e=>e.textContent=fa(n))}
function toast(){const t=document.createElement('div');t.className='msg toast';t.textContent='به سبد خرید اضافه شد';t.style.cssText='position:fixed;bottom:20px;inset-inline-start:20px;z-index:20';document.body.append(t);setTimeout(()=>t.remove(),1600)}
const cardHTML=p=>`<article class="card"><a href="product.html?id=${p.id}" onclick="sel(${p.id})"><img src="${p.i}" alt="${p.n}"></a><div class="in"><a href="product.html?id=${p.id}" onclick="sel(${p.id})"><b>${p.n}</b></a><span class="mut">${p.w}</span><span class="price">${fa(p.p)} تومان</span><button class="btn" onclick="add(${p.id})">افزودن به سبد</button></div></article>`;
function total(){const c=get();return P.reduce((s,p)=>s+(c[p.id]||0)*p.p,0)}
function cart(){const c=get(),el=document.getElementById('cart');const rows=P.filter(p=>c[p.id]);
if(!rows.length){el.innerHTML='<p class="mut">سبد خرید خالی است.</p><p><a class="btn" href="shop.html">رفتن به فروشگاه</a></p>';return}
el.innerHTML=rows.map(p=>`<div class="row"><img src="${p.i}" alt=""><div class="g"><b>${p.n}</b><div class="price">${fa(p.p*c[p.id])} تومان</div></div><div class="qty"><button onclick="chg(${p.id},1)" aria-label="افزودن">+</button> <b>${fa(c[p.id])}</b> <button onclick="chg(${p.id},-1)" aria-label="کم کردن">−</button></div></div>`).join('')+`<h2>جمع کل: ${fa(total())} تومان</h2><a class="btn alt" href="checkout.html">ادامه و تسویه حساب</a>`}
function chg(id,d){const c=get();c[id]=(c[id]||0)+d;if(c[id]<=0)delete c[id];put(c);cart()}
document.addEventListener('DOMContentLoaded',()=>{count();const pg=document.body.dataset.page;
if(pg=='home')document.getElementById('feat').innerHTML=P.slice(0,4).map(cardHTML).join('');
if(pg=='shop')document.getElementById('list').innerHTML=P.map(cardHTML).join('');
if(pg=='product'){let id=new URLSearchParams(location.search).get('id');try{id=id||localStorage.zid}catch(e){}const p=P.find(x=>x.id==id)||P[0];document.title=p.n+' | زانا کافی';
document.getElementById('prod').innerHTML=`<img src="${p.i}" alt="${p.n}"><div><h1 style="font-size:34px">${p.n}</h1><p class="mut">${p.w}</p><p style="margin:14px 0">${p.d}</p><table class="specs"><caption class="mut" style="text-align:start">مشخصات محصول</caption>${[[p.wl||'وزن',p.w],...p.s].map(r=>`<tr><th>${r[0]}</th><td>${r[1]}</td></tr>`).join('')}</table><p class="price" style="font-size:26px;margin-bottom:18px">${fa(p.p)} تومان</p><button class="btn" onclick="add(${p.id})">افزودن به سبد</button> <a class="btn ghost" href="shop.html">بازگشت به فروشگاه</a></div>`}
if(pg=='cart')cart();
if(pg=='checkout'){document.getElementById('sum').textContent='مبلغ قابل پرداخت: '+fa(total())+' تومان';
document.getElementById('f').onsubmit=e=>{e.preventDefault();if(!total()){document.getElementById('ok').textContent='سبد خرید خالی است. ابتدا محصولی اضافه کنید.';return}
put({});document.getElementById('sum').textContent='';document.getElementById('ok').textContent='سفارش شما ثبت شد. به‌زودی با شما تماس می‌گیریم.'}}
if(pg=='contact')document.getElementById('f').onsubmit=e=>{e.preventDefault();document.getElementById('ok').textContent='پیام شما ارسال شد. ممنون!';e.target.reset()};
if(pg=='login'){const f=document.getElementById('f'),t=document.querySelectorAll('.tabs button');t.forEach((b,i)=>b.onclick=()=>{document.getElementById('nm').hidden=i==0;t.forEach(x=>x.className='btn ghost');b.className='btn alt'});
f.onsubmit=e=>{e.preventDefault();document.getElementById('ok').textContent='این فرم نمایشی است؛ برای فعال‌شدن به سرور نیاز دارد.'}}})
document.documentElement.classList.add('js');
const RM=matchMedia('(prefers-reduced-motion:reduce)').matches;
try{if(document.body.dataset.page=='home'&&!RM&&!sessionStorage.zl){sessionStorage.zl=1;document.body.classList.add('pre');
const l=document.createElement('div');l.className='loader';l.innerHTML='<div><div class="cw"><div class="cup"><i></i></div></div><p>زانا کافی</p></div>';document.body.append(l);
setTimeout(()=>document.body.classList.remove('pre'),1300);setTimeout(()=>l.classList.add('out'),1500);setTimeout(()=>l.remove(),2300)}}catch(e){}
document.addEventListener('DOMContentLoaded',()=>{
const hero=document.querySelector('.hero');
if(hero&&!RM){
const im=hero.querySelector('img'),w=document.createElement('div');w.className='steamwrap';
const sl=document.createElement('div');sl.className='slides';
sl.innerHTML=['espresso','heart','mocha','latte'].map((n,i)=>`<img src="${n}.jpg" alt="${i?'':im.alt}" class="${i?'':'on'}">`).join('');
im.replaceWith(w);w.append(sl);
[38,50,62].forEach((x,i)=>{const s=document.createElement('span');s.className='steam';s.style.cssText=`left:${x}%;animation-delay:${i}s`;w.append(s)});
const bd=document.createElement('div');bd.className='badge';bd.innerHTML='<svg viewBox="0 0 100 100" aria-hidden="true"><defs><path id="cp" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"/></defs><text><textPath href="#cp">FRESH ROASTED • ZANA COFFEE • </textPath></text></svg><b>☕</b>';w.append(bd);
let k=0;setInterval(()=>{const a=sl.children;a[k].classList.remove('on');k=(k+1)%a.length;a[k].classList.add('on')},3800);
for(let i=0;i<8;i++){const b=document.createElement('i');b.className='bean';b.style.cssText=`left:${(i*13+5)%94}%;top:${(i*29+8)%78}%;animation-delay:${-i*1.3}s;scale:${.7+i%3*.35};--d2:${8+i*5}`;hero.append(b)}
hero.insertAdjacentHTML('beforeend','<svg class="wave" viewBox="0 0 2400 40" preserveAspectRatio="none" aria-hidden="true"><path d="M0 22 q75 -22 150 0'+' t150 0'.repeat(15)+' V40 H0Z"/></svg>');
const t='تازه‌رُست • ارسال به سراسر ایران • اسپرسو • لاته • موکا • فرنچ‌پرس • ۱۰۰٪ عربیکا • ';
const m=document.createElement('div');m.className='marquee';m.innerHTML='<div>'+('<span>'+t+'</span>').repeat(8)+'</div>';hero.after(m);
let mx=0,my=0;const upd=()=>{w.style.transform=`translate(${mx*-14}px,${my*-14+Math.min(scrollY*.12,60)}px)`};
hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();mx=(e.clientX-r.left)/r.width-.5;my=(e.clientY-r.top)/r.height-.5;hero.style.setProperty('--mx',mx);hero.style.setProperty('--my',my);upd()});
addEventListener('scroll',upd,{passive:true})}
const pg=document.createElement('div');pg.className='prog';document.body.append(pg);
const hd=document.querySelector('header');
addEventListener('scroll',()=>{hd.classList.toggle('sc',scrollY>10);pg.style.transform=`scaleX(${scrollY/Math.max(1,document.body.scrollHeight-innerHeight)})`},{passive:true});
const els=document.querySelectorAll('h2,.card,.cat,.two>*,details,.row,main form,.acc');
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);setTimeout(()=>e.target.classList.add('done'),1000)}}),{threshold:.12});
els.forEach((e,i)=>{e.classList.add('reveal');e.style.setProperty('--d',(i%4)*.08+'s');io.observe(e)});
if(matchMedia('(hover:hover)').matches&&!RM)document.querySelectorAll('.card').forEach(c=>{c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--ry',((e.clientX-r.left)/r.width-.5)*10+'deg');c.style.setProperty('--rx',((e.clientY-r.top)/r.height-.5)*-10+'deg')});c.addEventListener('pointerleave',()=>{c.style.setProperty('--rx','0deg');c.style.setProperty('--ry','0deg')})})});
