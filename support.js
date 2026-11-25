/* پشتیبانی آنلاین زانا
   برای وصل‌شدن مشتری به پشتیبان واقعی، یک یا چند مورد زیر را پر کنید (خالی = نمایش داده نمی‌شود):
   whatsapp: شماره با کد کشور، بدون + و صفر اول، مثل '989121234567'
   telegram: آیدی بدون @، مثل 'zana_support'
   phone: شماره‌ی تلفن، مثل '02112345678' */
const SUPPORT={whatsapp:'',telegram:'',phone:''};
(()=>{
const KEY='zchat',enc=encodeURIComponent;
const el=h=>{const d=document.createElement('div');d.innerHTML=h.trim();return d.firstChild};
const human=()=>{const l=['<a href="contact.html">فرم تماس</a>'];
if(SUPPORT.whatsapp)l.push(`<a href="https://wa.me/${enc(SUPPORT.whatsapp)}" target="_blank" rel="noopener">واتس‌اپ</a>`);
if(SUPPORT.telegram)l.push(`<a href="https://t.me/${enc(SUPPORT.telegram)}" target="_blank" rel="noopener">تلگرام</a>`);
if(SUPPORT.phone)l.push(`<a href="tel:${enc(SUPPORT.phone)}">تماس تلفنی</a>`);
return l.join(' ')};
const link=id=>{const p=P.find(x=>x.id==id);return p?`<a href="product.html?id=${id}" onclick="sel(${id})">${p.n}</a>`:'<a href="shop.html">فروشگاه</a>'};
const norm=x=>x.toLowerCase().replace(/[يى]/g,'ی').replace(/ك/g,'ک').replace(/[ۀة]/g,'ه').replace(/[\u064B-\u065F\u0640]/g,'').replace(/[۰-۹]/g,d=>'۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).replace(/[٠-٩]/g,d=>'٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[\u200c_-]/g,' ').replace(/[^\p{L}\p{N}\s]/gu,' ').replace(/\s+/g,' ').trim();
const STOP=new Set('قهوه محصول دارید دارم داره دارین خوام خواهم لطفا برای این که را از با در به می هست چی چه کدوم کدام چند میشه می‌شود ممنون خواستم بود هم تا یا اگه اگر کنم کنید بدم هستند ها یه یک'.split(' '));
const T=[
['سلام درود وقتبخیر صبحبخیر عصربخیر شببخیر خستهنباشید سلامعلیکم hi hello salam slm',()=>'سلام! خوش آمدید ☕ چه کمکی از من برمی‌آید؟',1],
['ممنون مرسی تشکر سپاس دمتگرم متشکرم thanks mersi',()=>'خواهش می‌کنم 🌿 اگر سوال دیگری دارید بپرسید.',1],
['خداحافظ فعلا روزخوش خدانگهدار بای bye',()=>'موفق باشید! هر وقت خواستید یک قهوه‌ی خوب بنوشید، ما اینجاییم ☕',1],
['کمک راهنمایی راهنما help',()=>'خوشحال می‌شوم کمک کنم. درباره‌ی ارسال، پرداخت، قیمت‌ها، آسیاب، دستگاه یا پیشنهاد محصول بپرسید.',1],
['هزینهارسال هزینهپست هزینهحمل پیک کرایه ارسالرایگان رایگان پستپیشتاز تیپاکس tipax',()=>'هزینه‌ی ارسال در مرحله‌ی تسویه حساب نمایش داده می‌شود.'],
['ارسال زمانارسال زمانتحویل تحویل چندروز میرسد میرسه برسد برسه کیمیرسه پستی ersal',()=>'سفارش‌ها معمولاً ظرف ۲ تا ۴ روز کاری به دست شما می‌رسد.'],
['رهگیری پیگیری کدپیگیری وضعیتسفارش سفارشمن',()=>'برای پیگیری سفارش، شماره‌ی تلفن یا نام ثبت‌شده در سفارش را به پشتیبان بگویید: '+human()],
['پرداخت درگاه کارتبهکارت نقدی درمحل آنلاین اینترنتی بانک اقساط چک pardakht',()=>'در مرحله‌ی تسویه حساب می‌توانید «پرداخت آنلاین» یا «پرداخت در محل» را انتخاب کنید. گزینه‌های دیگر مثل اقساط فعلاً در سایت نیست.'],
['چطورخرید نحوهخرید خریدکنم سفارشبدم سفارشبدهم ثبتسفارش سبدخرید تسویه',()=>'خرید ساده است: محصول را به سبد اضافه کنید، به <a href="cart.html">سبد خرید</a> بروید و در <a href="checkout.html">تسویه حساب</a> نام، تلفن و آدرس را بنویسید.'],
['آسیاب آسیابشده درشت ریز فرنچ فرنچپرس پرس ترک v60 اروپرس دمآوری دمی کلدبرو',()=>'برای فرنچ‌پرس این پک مناسب است (آسیاب درشت): '+link(5)+'<br>برای اسپرسوساز و موکاپات '+link(8)+' را ببینید. برای روش‌های دیگر نوع آسیاب را از پشتیبان بپرسید: '+human()],
['اسپرسو موکا موکاپات لاته کاپوچینو ماکیاتو آمریکانو شیر کرما فوم لونگو espresso latte cappuccino',()=>'برای اسپرسو، لاته و کاپوچینو این‌ها را پیشنهاد می‌کنیم:<br>'+link(1)+'<br>'+link(7)+'<br>'+link(8)],
['رست تیره روشن عربیکا روبوستا ترکیب میکس دانه تلخ ترش اسیدیته ملایم کافئین بیکافئین طعم',()=>'اگر طعم ملایم و کمی ترش می‌خواهید، '+link(2)+'. اگر تلخی و کرمای بیشتر می‌خواهید، '+link(4)+' یا '+link(1)+' مناسب است.'],
['ماندگاری تاریخ انقضا تازه تازگی نگهداری یخچال فریزر ماندگار',()=>'طبق مشخصات هر محصول، قهوه‌ی دانه ۶ ماه و آسیاب‌شده ۳ ماه از تاریخ رُست ماندگار است. آن را در ظرف دربسته و دور از نور و رطوبت نگه دارید و بهتر است ظرف ۳۰ روز مصرف شود.'],
['مرجوع برگشت بازگشت تعویض نپسندیدم خراب ناراضی شکایت عودت',()=>'اگر قهوه را نپسندیدید با ما تماس بگیرید تا بهترین راه را برای تعویض یا بازگشت پیدا کنیم: '+human()],
['قیمت چنده چقدر گران ارزان لیست تومان gheymat ghimat price',()=>P.slice(0,5).map(p=>link(p.id)+' — '+fa(p.p)+' تومان').join('<br>')+'<br><a href="shop.html">دیدن همه‌ی محصولات و قیمت‌ها</a>'],
['تخفیف کدتخفیف حراج ارزانتر پیشنهادویژه',()=>'درباره‌ی تخفیف و پیشنهادهای ویژه از پشتیبان بپرسید: '+human()],
['اسپرسوساز دستگاه قهوهساز دستگاهقهوه ماشین لوازم پرتافیلتر بخارساز espressomachine',()=>'اسپرسوساز ما:<br>'+link(10)+'<br>با آن می‌توانید اسپرسو و قهوه‌ی شیری (لاته و کاپوچینو) درست کنید. مشخصات در صفحه‌ی محصول است.'],
['فوری ساشه کیسهای نسکافه کافیمیکس قهوهفوری تکنفره',()=>'قهوه‌ی فوری ما:<br>'+link(9)],
['هدیه کادو گیفت',()=>'برای سفارش هدیه یا بسته‌بندی ویژه با پشتیبان صحبت کنید: '+human()],
['پشتیبان اپراتور انسان آدم تلفن شماره واتساپ واتس تلگرام ایمیل تماس آدرس ساعتکاری مدیر',()=>'می‌توانید از این راه‌ها با پشتیبان ما در تماس باشید: '+human()],
['ورود ثبتنام حسابکاربری رمز پسورد فراموشی عضویت اکانت',()=>'برای ورود یا ثبت‌نام به <a href="login.html">صفحه‌ی ورود</a> بروید. اگر رمز عبور را فراموش کرده‌اید یا مشکلی دارید، با پشتیبان در تماس باشید: '+human()],
['دربارهشما کیستید کیهستید زانا برند رستری شرکت تاریخچه',()=>'زانا کافی قهوه‌ی تازه‌رُست‌شده را در دسته‌های کوچک عرضه می‌کند؛ بیشتر در <a href="about.html">درباره‌ی ما</a> بخوانید.'],
['آموزش طرزتهیه نسبت بلاگ مقاله یادبگیرم چطوردم چطوردرست طریقهدم',()=>'چند نکته: اسپرسو با آسیاب ریز، حدود ۹ بار فشار و ۲۵ تا ۳۰ ثانیه عصاره‌گیری شروع می‌شود؛ فرنچ‌پرس با نسبت ۱ به ۱۵ و حدود ۴ دقیقه. بیشتر در <a href="blog.html">بلاگ</a>.'],
['موجود موجودی ناموجود تمامشده',()=>'برای اطمینان از موجودی هر محصول با پشتیبان در تماس باشید: '+human()],
['لغو کنسل ویرایشسفارش تغییرآدرس',()=>'برای لغو یا تغییر سفارش هرچه زودتر با پشتیبان تماس بگیرید: '+human()],
['گارانتی ضمانت اصل اصالت کیفیت تضمین',()=>'برای جزئیات گارانتی و اصالت کالا (به‌خصوص دستگاه‌ها) از پشتیبان بپرسید: '+human()],
['مبتدی شروع پیشنهاد کدوم بهترین انتخاب توصیه',()=>'اگر تازه شروع کرده‌اید، بسته‌ی کوچک را امتحان کنید: '+link(6)+'. برای قهوه‌ی شیری '+link(7)+' و برای فرنچ‌پرس '+link(5)+' مناسب است.']];
const answer=t=>{const sp=norm(t),ns=sp.replace(/ /g,''),w=sp.split(' ');
const sc=T.map(([k,f,soft])=>[k.split(' ').reduce((a,x)=>a+((x.length<=3?w.includes(x):ns.includes(x))?(x.length>=5?2:1):0),0),f,soft]);
const hard=sc.filter(x=>x[0]&&!x[2]).sort((a,b)=>b[0]-a[0]);
if(hard.length){const o=[hard[0][1]()];if(hard[1]&&hard[1][0]*2>=hard[0][0])o.push(hard[1][1]());return o.join('<br><br>')}
const toks=w.filter(x=>x.length>=3&&!STOP.has(x));
const hits=P.map(p=>{const tx=norm(p.n+' '+p.d+' '+(p.k||'')+' '+p.s.map(r=>r[1]).join(' '));return [p,toks.filter(x=>tx.includes(x)).length]}).filter(x=>x[1]).sort((a,b)=>b[1]-a[1]).slice(0,3);
if(hits.length)return 'این محصولات به درخواست شما نزدیک‌اند:<br>'+hits.map(h=>link(h[0].id)+' — '+fa(h[0].p)+' تومان').join('<br>');
const soft=sc.filter(x=>x[0]&&x[2]).sort((a,b)=>b[0]-a[0]);
if(soft.length)return soft[0][1]();
return 'متوجه نشدم 🙏 درباره‌ی ارسال، پرداخت، قیمت، آسیاب، دستگاه یا پیشنهاد محصول بپرسید، یا با پشتیبان صحبت کنید: '+human()};
const btn=el('<button class="chatbtn" aria-label="پشتیبانی آنلاین" aria-expanded="false" aria-controls="zchatbox"><svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true"><path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/></svg></button>');
const box=el('<div class="chatbox" id="zchatbox" role="dialog" aria-label="پشتیبانی آنلاین زانا"><div class="chead"><div><b>پشتیبانی آنلاین زانا</b><small>دستیار خودکار · پاسخ فوری</small></div><button class="cx" aria-label="بستن">×</button></div><div class="chatlog" role="log" aria-live="polite"></div><div class="chips"></div><div class="human">ارتباط با پشتیبان: '+human()+'</div><form class="chatform"><input aria-label="پیام شما" placeholder="پیام خود را بنویسید..." maxlength="300" autocomplete="off"><button class="btn alt">ارسال</button></form></div>');
const tip=el('<div class="chattip">سوالی دارید؟ اینجا هستیم ☕</div>');
document.body.append(box,btn,tip);
const log=box.querySelector('.chatlog'),inp=box.querySelector('input'),chips=box.querySelector('.chips');
let msgs=[];try{msgs=JSON.parse(sessionStorage.getItem(KEY)||'[]')}catch(e){}
const add=(role,t,save=true)=>{const d=document.createElement('div');d.className='m '+role;role=='u'?d.textContent=t:d.innerHTML=t;log.append(d);log.scrollTop=log.scrollHeight;
if(save){msgs.push([role,t]);try{sessionStorage.setItem(KEY,JSON.stringify(msgs))}catch(e){}}};
const ask=t=>{add('u',t);const d=el('<div class="m b dots"><i></i><i></i><i></i></div>');log.append(d);log.scrollTop=log.scrollHeight;setTimeout(()=>{d.remove();add('b',answer(t))},750)};
['زمان ارسال','پرداخت','قیمت محصولات','آسیاب قهوه','اسپرسوساز','تعویض و بازگشت'].forEach(t=>{const b=document.createElement('button');b.type='button';b.textContent=t;b.onclick=()=>ask(t);chips.append(b)});
box.querySelector('form').onsubmit=e=>{e.preventDefault();const t=inp.value.trim();if(t){inp.value='';ask(t)}};
const open=o=>{box.classList.toggle('open',o);btn.setAttribute('aria-expanded',o);tip.remove();
if(o){if(!log.children.length)add('b','سلام! من دستیار خودکار زانا هستم ☕ درباره‌ی ارسال، پرداخت، قیمت‌ها، محصولات، آسیاب قهوه و دستگاه‌ها می‌توانم کمک کنم. برای صحبت با پشتیبان انسانی هم از راه‌های پایین پنجره استفاده کنید.');setTimeout(()=>inp.focus(),300)}else btn.focus()};
msgs.forEach(m=>add(m[0],m[1],false));
btn.onclick=()=>open(!box.classList.contains('open'));
box.querySelector('.cx').onclick=()=>open(false);
addEventListener('keydown',e=>{if(e.key=='Escape'&&box.classList.contains('open'))open(false)});
try{if(!sessionStorage.zct){setTimeout(()=>{if(!box.classList.contains('open')){tip.classList.add('show');sessionStorage.zct=1;setTimeout(()=>tip.classList.remove('show'),7000)}},5000)}}catch(e){}
})();
