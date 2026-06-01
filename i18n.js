/**
 * MedFactory — Complete bilingual i18n (Arabic / English)
 * Brand: Dental Student Training & Simulation — NOT clinic equipment
 */
window.MedFactoryI18n = (function () {
  "use strict";

  const STORAGE_KEY = "mf-lang";
  let currentLang = localStorage.getItem(STORAGE_KEY) || "ar";

  const strings = {
    en: {
      "meta.title.home": "MedFactory — Dental Student Training & Simulation",
      "meta.title.products": "Training Models — MedFactory",
      "meta.title.product": "Training Model — MedFactory",
      "meta.title.about": "About Us — MedFactory",
      "meta.title.contact": "Contact — MedFactory",
      "meta.desc.home": "Realistic dental training models for students — dummy heads, endo teeth, typodonts, and simulation products to build clinical confidence before treating patients.",
      "meta.desc.products": "Browse dental student training models — simulation dummy heads, endodontic practice teeth, dental casts, and typodont kits.",
      "meta.desc.product": "Dental student training model — specifications, simulation features, and nationwide delivery from MedFactory.",
      "meta.desc.about": "MedFactory helps dental students in Egypt practice safely with realistic simulation models before clinical years.",
      "meta.desc.contact": "Contact MedFactory for help choosing dental training models — WhatsApp support for dental students across Egypt.",

      "announcement": "Free delivery on training orders over <strong>EGP 1,500</strong> · Ships to students nationwide",
      "announcement.dismiss": "Dismiss announcement",
      "skip": "Skip to main content",

      "nav.shop": "Shop",
      "nav.categories": "Categories",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.faq": "FAQ",
      "nav.search": "Search training models",
      "nav.cart": "Cart",
      "nav.menu.open": "Open menu",
      "nav.menu.close": "Close menu",
      "lang.label": "Language",
      "lang.en": "English",
      "lang.ar": "Arabic",

      "footer.tagline": "Realistic dental training models for students — practice safely before clinical work.",
      "footer.shop": "Shop",
      "footer.support": "Support",
      "footer.connect": "Connect",
      "footer.company": "Company",
      "footer.subscribe": "Subscribe",
      "footer.email": "Email for restock alerts",
      "footer.privacy": "Privacy",
      "footer.terms": "Terms",
      "footer.rights": "All rights reserved.",
      "footer.payments": "We accept",
      "footer.shipping": "Shipping",
      "footer.returns": "Returns",
      "footer.track": "Track order",

      "btn.addCart": "Add to cart",
      "btn.buyNow": "Buy now",
      "btn.shopAll": "Shop all training models",
      "btn.explore": "Explore training models",
      "btn.whatsapp": "Chat on WhatsApp",
      "btn.whatsapp.order": "Order on WhatsApp",

      "toast.added": "added to cart",
      "toast.newsletter": "Thanks — you're on the list for restock alerts.",
      "toast.checkout": "Redirecting to checkout…",
      "toast.checkoutSoon": "Checkout coming soon — complete your order on WhatsApp today.",

      "home.hero.overline": "Dental student training · Egypt",
      "home.hero.title": "Practice before you treat real patients.",
      "home.hero.sub": "Realistic simulation models — dummy heads, endo training teeth, and typodonts designed to help dental students build confidence and clinical skills.",
      "home.hero.cta1": "Start with Dummy Head",
      "home.trust1": "Built for students",
      "home.trust2": "Fast nationwide delivery",
      "home.trust3": "WhatsApp student support",

      "home.cat.title": "Training models by module",
      "home.cat.sub": "Shop the way dental students think — simulation, endo, and prosthodontic practice.",
      "home.cat.sim": "Simulation",
      "home.cat.endo": "Endodontics",
      "home.cat.prost": "Prosthodontics",
      "home.cat.all": "Full training setup",
      "home.cat.dummy": "Dummy Head →",
      "home.cat.endoTeeth": "Endo Teeth →",
      "home.cat.casts": "Dental Casts →",
      "home.cat.allLink": "All models →",

      "home.best.title": "Popular with students",
      "home.best.sub": "What students reorder every semester for practice.",
      "home.best.viewAll": "View all models",

      "home.why.overline": "Why MedFactory",
      "home.why.title": "Simulation training that builds real clinical confidence.",
      "home.why.1.title": "Realistic training experience",
      "home.why.1.body": "Models that feel like real cases — practice procedures safely before your clinical years.",
      "home.why.2.title": "Student-friendly pricing",
      "home.why.2.body": "Quality training products priced for semester budgets, not clinic markups.",
      "home.why.3.title": "High-quality materials",
      "home.why.3.body": "Durable simulation models built for repeated practice throughout your degree.",
      "home.why.4.title": "Nationwide shipping",
      "home.why.4.body": "Training models delivered across Egypt — Cairo & Giza in 48 hours on average.",

      "home.stats.students": "Students training with us",
      "home.stats.lines": "Training model categories",
      "home.stats.delivery": "Avg. delivery Cairo & Giza",
      "home.stats.rating": "Student rating",

      "home.testimonials.title": "Trusted by dental students across Egypt",
      "home.testimonials.sub": "Real feedback from students building clinical skills.",
      "home.testimonials.1": "Got the dummy head before operative simulation — same realistic feel as faculty training. Arrived in Giza in two days, perfectly packed.",
      "home.testimonials.2": "The endo training teeth have realistic canal anatomy. I bought two packs for the semester — much better than cheap practice models.",
      "home.testimonials.3": "Dental casts for crown prep practice were exactly what I needed. MedFactory answered my WhatsApp about arch size before I ordered.",
      "home.testimonials.1.meta": "Year 3 · Cairo University · Dummy Head",
      "home.testimonials.2.meta": "Year 4 · Alexandria University · Endo Teeth",
      "home.testimonials.3.meta": "Year 2 · Mansoura University · Dental Casts",
      "home.rating.label": "Average student rating 4.9 out of 5",

      "home.faq.title": "Questions before your first order",
      "home.faq.sub": "Clear answers for dental students.",
      "home.faq.1.q": "Are these training models suitable for student practice?",
      "home.faq.1.a": "Yes. Every product is an educational simulation model designed for repeated student practice — dummy heads, endo teeth, typodonts, and casts. Specs and compatibility are listed on each product page.",
      "home.faq.2.q": "Do you deliver outside Cairo and Giza?",
      "home.faq.2.a": "We ship training models nationwide across Egypt. Cairo and Giza typically receive orders within 48 hours. Other governorates vary by carrier.",
      "home.faq.3.q": "Which training model should I start with?",
      "home.faq.3.a": "For operative simulation, start with a Dummy Head. For endodontic practice, choose Endo Teeth sets. For crown prep, Dental Casts are essential. Message us on WhatsApp with your year and module — we'll recommend the right first order.",
      "home.faq.4.q": "What payment methods do you accept?",
      "home.faq.4.a": "Visa, Mastercard, mobile wallets, and Fawry where available. Secure checkout with confirmation by email and SMS.",
      "home.faq.5.q": "What if my training model arrives damaged?",
      "home.faq.5.a": "Contact us within 48 hours via WhatsApp with photos. We'll arrange a replacement or refund — your practice tools should arrive ready to use.",

      "home.cta.title": "Ready to build clinical confidence?",
      "home.cta.sub": "Browse training models or message us — we'll match products to your year and module.",

      "trust.shipping": "Free shipping over EGP 1,500",
      "trust.delivery": "48h delivery Cairo & Giza",
      "trust.authentic": "Student training quality",
      "trust.support": "WhatsApp support",
      "trust.secure": "Secure checkout",

      "products.page.overline": "Student training models",
      "products.page.title": "All training models",
      "products.page.sub": "Dummy heads, endo practice teeth, dental casts, and typodont kits — educational simulation products for dental students in Egypt.",
      "products.search": "Search dummy heads, endo teeth, typodonts…",
      "products.filter": "Filter",
      "products.sort.label": "Sort by",
      "products.sort.featured": "Featured",
      "products.sort.newest": "Newest",
      "products.sort.priceAsc": "Price: low to high",
      "products.sort.priceDesc": "Price: high to low",
      "products.sort.name": "Name: A–Z",
      "products.filter.all": "All models",
      "products.filter.dummy": "Dummy Heads",
      "products.filter.endo": "Endo Teeth",
      "products.filter.casts": "Dental Casts",
      "products.filter.kits": "Training Kits",
      "products.clear": "Clear all filters",
      "products.show": "Show results",
      "products.empty.title": "No models found",
      "products.empty.sub": "Try a different search term or category.",
      "products.categories": "Categories",
      "products.count": "Showing {n} of {total} training models",
      "products.pagination.prev": "Previous page",
      "products.pagination.next": "Next page",
      "products.pagination.pages": "Pages",

      "product.qty": "Quantity",
      "product.qty.minus": "Decrease quantity",
      "product.qty.plus": "Increase quantity",
      "product.inStock": "In stock — ships within 48h (Cairo & Giza)",
      "product.outStock": "Out of stock — message us on WhatsApp for restock date",
      "product.features": "Training features",
      "product.specs": "Model specifications",
      "product.related": "Related training models",
      "product.related.sub": "More simulation products for your practice.",
      "product.viewCat": "View category",
      "product.zoom": "Hover to zoom",
      "product.zoomTap": "Tap to enlarge",
      "product.breadcrumb.home": "Home",
      "product.breadcrumb.shop": "Shop",
      "product.trust.delivery": "Delivery to students nationwide",
      "product.trust.authentic": "Educational training quality",
      "product.trust.support": "WhatsApp help before you buy",
      "product.rating.text": "4.9 · Student-trusted",
      "product.notFound.title": "Training model not found",
      "product.notFound.sub": "This item may have been removed or the link is incorrect.",
      "product.notFound.cta": "Back to shop",
      "product.gallery.expand": "View full size image",
      "product.gallery.label": "Product images",
      "product.sku": "SKU",

      "about.hero.overline": "Our story",
      "about.hero.title": "Helping dental students practice safely before clinical work.",
      "about.hero.lead": "MedFactory is a dental simulation and training brand — we help students across Egypt build practical skills with realistic models before treating real patients.",

      "about.story.overline": "Brand story",
      "about.story.title": "Born from the gap between lectures and clinical confidence.",
      "about.story.p1": "Every dental student knows the feeling: you understand the theory, but the first time you prep a tooth or negotiate a canal, everything feels new. The training models matter. And finding the right simulation products shouldn't be another stress.",
      "about.story.p2": "MedFactory started when we saw students juggling orders — a dummy head from one place, endo teeth from another, casts that didn't match their module needs. We built one destination for <strong>everything practical training requires</strong>, curated for how dental students actually learn.",
      "about.story.p3": "Today, students from Cairo to Aswan order from MedFactory because we speak their language: semesters, modules, practice lists, and the quiet anxiety before clinical years. We're not a clinic supplier or equipment company. We're built for <em>you</em> — the student who needs to practice.",

      "about.mv.overline": "Purpose",
      "about.mv.title": "What drives us forward",
      "about.mv.mission.title": "Mission",
      "about.mv.mission.body": "To help every dental student in Egypt build confident clinical skills through realistic, accessible simulation models — supported by honest guidance and reliable delivery.",
      "about.mv.vision.title": "Vision",
      "about.mv.vision.body": "To become the most trusted dental training brand for students across the Arab world — where quality simulation models and student-first support set the standard for pre-clinical excellence.",

      "about.trust.overline": "Trust",
      "about.trust.title": "Why students trust MedFactory",
      "about.trust.sub": "Peer recommendations spread fast in student group chats. Here's what earns us that trust.",
      "about.trust.1.title": "Student-focused curation",
      "about.trust.1.body": "We stock what dental students actually use for simulation practice — not random catalog filler.",
      "about.trust.2.title": "Clear model specifications",
      "about.trust.2.body": "Every product lists materials, compatibility, and practice use cases — so you know before you spend.",
      "about.trust.3.title": "WhatsApp before you buy",
      "about.trust.3.body": "Not sure which training model fits your module? Message us. Real answers, typically within an hour.",
      "about.trust.4.title": "Students who come back",
      "about.trust.4.body": "2,400+ students supplied. Most orders are repeats — reordering before the next semester.",

      "about.quality.overline": "Model quality",
      "about.quality.title": "Training-grade simulation. Never novelty toys.",
      "about.quality.p1": "We reject cheap models that crack after one prep or lose canal anatomy after a single access. MedFactory products are selected for <strong>repeated student practice</strong> — the standard you need before clinical years.",
      "about.quality.l1": "Realistic anatomy for endo, prostho, and simulation practice",
      "about.quality.l2": "Materials tested for durability under student practice conditions",
      "about.quality.l3": "Clear specs — compatibility, weight, and included items",
      "about.quality.l4": "Careful packaging so models arrive practice-ready",
      "about.quality.cta": "Explore training models",
      "about.quality.quote": "\"The quality matched our faculty training — I didn't have to buy twice.\"",
      "about.quality.quoteCite": "— Year 3 student, Cairo University",

      "about.shipping.overline": "Nationwide delivery",
      "about.shipping.title": "Training models delivered across Egypt",
      "about.shipping.lead": "From Alexandria to Aswan — your simulation models come to you. No hunting between classes.",
      "about.shipping.cairo": "Cairo & Giza",
      "about.shipping.cairoTime": "48-hour average delivery",
      "about.shipping.delta": "Alexandria & Delta",
      "about.shipping.deltaTime": "2–4 business days",
      "about.shipping.upper": "Upper Egypt & Red Sea",
      "about.shipping.upperTime": "3–6 business days via trusted carriers",
      "about.shipping.note": "Free delivery on orders over <strong>EGP 1,500</strong>. Tracking shared by SMS and WhatsApp when your order ships.",

      "about.stats.students": "Students training with us",
      "about.stats.govs": "Governorates served",
      "about.stats.delivery": "Cairo & Giza delivery",
      "about.stats.rating": "Student rating",

      "about.cta.title": "Ready to practice with confidence?",
      "about.cta.sub": "Browse dummy heads, endo teeth, casts, and typodonts — everything for student simulation in one place.",

      "contact.hero.overline": "Student support",
      "contact.hero.title": "Talk to a team that understands dental students.",
      "contact.hero.lead": "Orders, training model advice, shipping, or semester bundles — reach us on WhatsApp for the fastest reply, or send a message below.",
      "contact.form.overline": "Send a message",
      "contact.form.title": "Contact form",
      "contact.form.sub": "We typically reply within a few hours on business days. Fields marked * are required.",
      "contact.form.name": "Full name *",
      "contact.form.namePh": "Your name",
      "contact.form.phone": "Phone / WhatsApp *",
      "contact.form.phonePh": "01xxxxxxxxx",
      "contact.form.email": "Email",
      "contact.form.emailPh": "you@university.edu.eg",
      "contact.form.subject": "Topic *",
      "contact.form.subjectPh": "Select a topic",
      "contact.form.subjectOrder": "Order & checkout",
      "contact.form.subjectProduct": "Training model advice",
      "contact.form.subjectShipping": "Shipping & delivery",
      "contact.form.subjectBulk": "Semester bundle order",
      "contact.form.subjectOther": "Other",
      "contact.form.message": "Message *",
      "contact.form.messagePh": "Your year, module, training models you need, or your question…",
      "contact.form.submit": "Send message",
      "contact.form.submitWa": "Send via WhatsApp instead",
      "contact.form.success": "Thanks — opening WhatsApp with your message.",
      "contact.form.errorRequired": "Please fill in all required fields.",
      "contact.form.errorPhone": "Please enter a valid phone number.",
      "contact.wa.title": "Fastest: WhatsApp",
      "contact.wa.sub": "Share your year and module — we'll recommend the right training models in minutes.",
      "contact.wa.hours": "Usually online Sun–Thu, 10:00–20:00 Cairo time",
      "contact.social.title": "Follow us",
      "contact.quick.email": "Email",
      "contact.quick.phone": "Phone",
      "contact.location.overline": "Visit & pickup",
      "contact.location.title": "Our location in Greater Cairo",
      "contact.location.sub": "Nationwide delivery is our main channel — visit by appointment for bulk student orders or local pickup.",
      "contact.location.name": "MedFactory — Cairo Hub",
      "contact.location.address": "6th of October City, Giza Governorate, Egypt",
      "contact.location.hours": "Sun–Thu: 10:00 – 20:00 · Fri–Sat: by appointment",
      "contact.location.zone": "Serving students in all governorates across Egypt",
      "contact.location.maps": "Open in Google Maps",
      "contact.support.overline": "Student support",
      "contact.support.title": "How we help you",
      "contact.support.1.title": "Training model matching",
      "contact.support.1.body": "Send your year and module — we'll match the right dummy heads, endo teeth, or casts for your practice.",
      "contact.support.2.title": "Shipping & tracking",
      "contact.support.2.body": "Cairo & Giza typically 48h. Other governorates via trusted carriers — tracking shared when your order ships.",
      "contact.support.3.title": "Quality guarantee",
      "contact.support.3.body": "Damaged on arrival? WhatsApp us within 48 hours with photos — replacement or refund for verified issues.",
      "contact.support.4.title": "Semester bundles",
      "contact.support.4.body": "Student groups — ask for bundle pricing for your simulation practice needs.",
      "contact.faq.title": "Contact FAQ",
      "contact.faq.sub": "Quick answers before you reach out.",
      "contact.faq.1.q": "How fast do you reply on WhatsApp?",
      "contact.faq.1.a": "During Sun–Thu business hours we usually respond within 1–2 hours. Evenings and weekends may take longer — your message is always queued.",
      "contact.faq.2.q": "Can I visit to see training models?",
      "contact.faq.2.a": "Yes, by appointment. Message us on WhatsApp — helpful for inspecting dummy heads before a semester order.",
      "contact.faq.3.q": "Will you help me choose models for my module?",
      "contact.faq.3.a": "Absolutely. Share your year, university, and current module. We'll recommend starter training models for simulation, endo, or prosthodontic practice.",
      "contact.faq.4.q": "How do I track my order?",
      "contact.faq.4.a": "After dispatch we send tracking via SMS and WhatsApp. Reply to your confirmation message anytime for a status update.",
      "contact.faq.5.q": "Do you offer student discounts or bundle pricing?",
      "contact.faq.5.a": "Semester bundles qualify for special rates. Contact us with quantities — custom quote within one business day.",

      "theme.search.title": "Search training models",
      "theme.search.hint": "Try: dummy head, endo teeth, typodont, dental casts…",
      "theme.search.popular": "Popular",
      "theme.search.close": "Close search",
      "theme.backTop": "Back to top",
      "theme.dock.home": "Home",
      "theme.dock.shop": "Shop",
      "theme.dock.whatsapp": "WhatsApp",
      "theme.dock.contact": "Contact",
      "theme.dock.label": "Mobile navigation",

      "announcement.region": "Promotion",
      "nav.home": "MedFactory home",
      "nav.main": "Main navigation",
      "footer.shopNav": "Shop links",
      "footer.supportNav": "Support links",
      "footer.connectNav": "Connect links",
      "footer.companyNav": "Company links",
      "footer.newsletter": "Newsletter signup",
      "footer.currency": "Currency: Egyptian pounds",
      "shop.main": "Product catalog",
      "products.filters": "Filter products",
      "products.filters.close": "Close filters",
      "products.filters.chips": "Category filters",
      "products.pagination.label": "Product pages pagination",
      "product.lightbox": "Product image viewer",
      "product.lightbox.close": "Close image",
      "product.rating.aria": "4.9 out of 5 stars",
      "contact.aside": "Quick contact",
      "stats.home": "MedFactory statistics",
      "stats.about": "MedFactory impact",
      "meta.title.notFound": "Training Model Not Found — MedFactory",
      "product.pageTitle": "{name} — MedFactory",
      "product.related.empty": "Browse our <a href=\"products.html\">full catalog</a> for more training models.",
      "about.shipping.pin.cairo": "Cairo",
      "about.shipping.pin.alex": "Alexandria",
      "about.shipping.pin.aswan": "Aswan",
      "img.hero.alt": "Dental simulation dummy head for student operative training",
      "img.why.alt": "Dental student practicing operative skills on a simulation model",
      "img.cta.alt": "Dental training models arranged for student simulation practice",

      "cat.simulation": "Simulation",
      "cat.endodontics": "Endodontics",
      "cat.prosthodontics": "Prosthodontics",
      "cat.kit": "Training Kit",
    },
    ar: {
      "meta.title.home": "ميد فاكتوري — تدريبك العملي قبل الكلينيك",
      "meta.title.products": "متجر التدريب — ميد فاكتوري",
      "meta.title.product": "منتج تدريب — ميد فاكتوري",
      "meta.title.about": "مين إحنا — ميد فاكتوري",
      "meta.title.contact": "تواصل معنا — ميد فاكتوري",
      "meta.desc.home": "كل اللي محتاجه للتدريب العملي — رؤوس تجريبية، أسنان إندو، تايبودنت وقوالب. اتدرّب على حالات حقيقية من الأول.",
      "meta.desc.products": "رؤوس تجريبية، أسنان إندو، قوالب وأطقم جاهزة — أدوات تدريب لطلاب طب الأسنان في مصر.",
      "meta.desc.about": "ميد فاكتوري علامة مصرية للتدريب العملي — نساعدك تتمرّن براحة قبل ما تدخل الكلينيك.",
      "meta.desc.product": "مواصفات المنتج، تفاصيل التدريب، وتوصيل لكل المحافظات — من ميد فاكتوري.",
      "meta.desc.contact": "محتاج مساعدة تختار أداة لمادتك؟ كلمنا على واتساب — بنرد على طلاب طب الأسنان في كل مصر.",

      "announcement": "توصيل مجاني للطلبات فوق <strong>١٬٥٠٠ ج.م</strong> · بنوصّل لك في أي محافظة",
      "announcement.dismiss": "قفل الإعلان",
      "skip": "روح للمحتوى",

      "nav.shop": "المتجر",
      "nav.categories": "الأقسام",
      "nav.about": "مين إحنا",
      "nav.contact": "تواصل",
      "nav.faq": "أسئلة شائعة",
      "nav.search": "دور على أدوات التدريب",
      "nav.cart": "السلة",
      "nav.menu.open": "فتح القائمة",
      "nav.menu.close": "إغلاق القائمة",
      "lang.label": "اللغة",
      "lang.en": "English",
      "lang.ar": "العربية",

      "footer.tagline": "أدوات تدريب تحاكي الحالات الحقيقية — اتدرّب بثقة قبل الكلينيك.",
      "footer.shop": "المتجر",
      "footer.support": "مساعدة",
      "footer.connect": "تابعنا",
      "footer.company": "الشركة",
      "footer.subscribe": "اشترك",
      "footer.email": "إيميلك لو حابب نبلّغك لما يرجع المنتج",
      "footer.privacy": "الخصوصية",
      "footer.terms": "الشروط",
      "footer.rights": "جميع الحقوق محفوظة.",
      "footer.payments": "طرق الدفع",
      "footer.shipping": "الشحن",
      "footer.returns": "الاسترجاع",
      "footer.track": "تتبع الطلب",

      "btn.addCart": "حطّه في السلة",
      "btn.buyNow": "اطلب دلوقتي",
      "btn.shopAll": "شوف كل أدوات التدريب",
      "btn.explore": "استكشف المنتجات",
      "btn.whatsapp": "كلمنا على واتساب",
      "btn.whatsapp.order": "اطلب على واتساب",

      "toast.added": "اتضاف للسلة",
      "toast.newsletter": "تمام — هنبعتلك لما يتوفر.",
      "toast.checkout": "جاري التحويل للدفع…",
      "toast.checkoutSoon": "الدفع أونلاين قريب — دلوقتي كمل طلبك على واتساب.",

      "home.hero.overline": "تدريب عملي لطلاب طب الأسنان · مصر",
      "home.hero.title": "اتدرّب الأول… قبل ما تمسّ المريض.",
      "home.hero.sub": "رؤوس تجريبية، أسنان إندو وتايبودنت زي اللي في المعمل — علشان تدخل الكلينيك وأنت واثق من إيدك.",
      "home.hero.cta1": "ابدأ بالرأس التجريبي",
      "home.trust1": "مصمّم للطلاب",
      "home.trust2": "توصيل سريع لكل المحافظات",
      "home.trust3": "واتساب يرد عليك",

      "home.cat.title": "اختار حسب مادتك",
      "home.cat.sub": "جراحة، إندو، تعويضات — كل قسم في مكانه.",
      "home.cat.sim": "جراحة ومحاكاة",
      "home.cat.endo": "إندو",
      "home.cat.prost": "تعويضات",
      "home.cat.all": "طقم كامل",
      "home.cat.dummy": "الرأس التجريبي ←",
      "home.cat.endoTeeth": "أسنان الإندو ←",
      "home.cat.casts": "القوالب ←",
      "home.cat.allLink": "كل المنتجات ←",

      "home.best.title": "الأكتر طلباً بين الطلاب",
      "home.best.sub": "اللي بيتجدّد كل فصل — لأن التدريب محتاج تكرار.",
      "home.best.viewAll": "شوف كل المنتجات",

      "home.why.overline": "ليه ميد فاكتوري؟",
      "home.why.title": "تدريب يحسّسك إنك في المعمل… مش في المحاضرة.",
      "home.why.1.title": "قريب من الواقع",
      "home.why.1.body": "حالات شبه الحقيقة — جرّب براحتك قبل ما المادة تضغط عليك في الكلينيك.",
      "home.why.2.title": "سعر يناسب طالب",
      "home.why.2.body": "جودة كويسة بميزانية الفصل — مش أسعار عيادات.",
      "home.why.3.title": "مواد بتتحمّل التكرار",
      "home.why.3.body": "تتمرّن عليها طول السنة — مش حاجة تتكسر من أول prep.",
      "home.why.4.title": "نوصّل لكل مصر",
      "home.why.4.body": "القاهرة والجيزة غالباً خلال يومين — وباقي المحافظات على شركات شحن موثوقة.",

      "home.stats.students": "طالب بيتدرب معانا",
      "home.stats.lines": "أقسام التدريب",
      "home.stats.delivery": "متوسط التوصيل (قاهرة وجيزة)",
      "home.stats.rating": "تقييم الطلاب",

      "home.testimonials.title": "طلاب من كل الجامعات بيطلبوا مننا",
      "home.testimonials.sub": "آراء حقيقية من ناس زيك — قبل الكلينيك.",
      "home.testimonials.1": "جبت الرأس التجريبي قبل مادة الجراحة — نفس الإحساس في المعمل. وصل الجيزة في يومين، والتغليف ممتاز.",
      "home.testimonials.2": "أسنان الإندو القنوات فيها واقعية. اشتريت عبوتين للفصل — أحسن بكتير من الحاجات الرخيصة.",
      "home.testimonials.3": "القوالب للتاج كانت بالظبط اللي محتاجها. سألتهم على واتساب عن حجم الفك قبل ما أطلب.",
      "home.testimonials.1.meta": "سنة ٣ · القاهرة · رأس تجريبي",
      "home.testimonials.2.meta": "سنة ٤ · الإسكندرية · أسنان إندو",
      "home.testimonials.3.meta": "سنة ٢ · المنصورة · قوالب",
      "home.rating.label": "تقييم الطلاب ٤٫٩ من ٥",

      "home.faq.title": "أسئلة قبل أول طلب",
      "home.faq.sub": "إجابات مختصرة — من غير لف.",
      "home.faq.1.q": "الحاجات دي تنفع للتدريب في المعمل؟",
      "home.faq.1.a": "أيوه. كل منتج للتمرين المتكرر — رؤوس تجريبية، أسنان إندو، تايبودنت وقوالب. المواصفات والتوافق مكتوبين في صفحة كل منتج.",
      "home.faq.2.q": "بتوصّلوا برّه القاهرة والجيزة؟",
      "home.faq.2.a": "أيوه، لكل المحافظات. القاهرة والجيزة غالباً خلال ٤٨ ساعة. باقي المحافظات حسب شركة الشحن.",
      "home.faq.3.q": "أبدأ بإيه؟",
      "home.faq.3.a": "مادة جراحة؟ ابدأ بالرأس التجريبي. إندو؟ أسنان الإندو. تاج؟ القوالب. ابعت لنا على واتساب سنتك ومادتك — نقولك تبدأ بإيه.",
      "home.faq.4.q": "طرق الدفع إيه؟",
      "home.faq.4.a": "Visa وMastercard والمحافظ الإلكترونية وفوري. تأكيد على الإيميل وSMS.",
      "home.faq.5.q": "لو وصل المنتج مكسور؟",
      "home.faq.5.a": "كلمنا على واتساب خلال ٤٨ ساعة مع صور. نبدّله أو نرجّع فلوسك — المهم توصلك جاهز للتدريب.",

      "home.cta.title": "جاهز تدخل الكلينيك وأنت مستعد؟",
      "home.cta.sub": "شوف المنتجات أو ابعت لنا — نقولك إيه اللي يناسب سنتك ومادتك.",

      "trust.shipping": "شحن مجاني فوق ١٬٥٠٠ ج.م",
      "trust.delivery": "توصيل سريع (قاهرة وجيزة)",
      "trust.authentic": "جودة تدريب للطلاب",
      "trust.support": "واتساب يرد عليك",
      "trust.secure": "دفع آمن",

      "products.page.overline": "أدوات التدريب",
      "products.page.title": "كل منتجات التدريب",
      "products.page.sub": "رؤوس تجريبية، أسنان إندو، قوالب وأطقم — كل اللي محتاجه للتدريب العملي في مكان واحد.",
      "products.search": "دور: رأس تجريبي، إندو، تايبودنت…",
      "products.filter": "فلتر",
      "products.sort.label": "ترتيب",
      "products.sort.featured": "مميز",
      "products.sort.newest": "الأجدد",
      "products.sort.priceAsc": "السعر: من الأقل",
      "products.sort.priceDesc": "السعر: من الأعلى",
      "products.sort.name": "الاسم",
      "products.filter.all": "كل المنتجات",
      "products.filter.dummy": "رؤوس تجريبية",
      "products.filter.endo": "أسنان إندو",
      "products.filter.casts": "قوالب",
      "products.filter.kits": "أطقم جاهزة",
      "products.clear": "امسح الفلتر",
      "products.show": "اعرض النتائج",
      "products.empty.title": "مفيش منتجات هنا",
      "products.empty.sub": "جرّب كلمة تانية أو قسم مختلف.",
      "products.categories": "الأقسام",
      "products.count": "عرض {n} من {total} منتج",
      "products.pagination.prev": "الصفحة السابقة",
      "products.pagination.next": "الصفحة التالية",
      "products.pagination.pages": "الصفحات",

      "product.qty": "الكمية",
      "product.qty.minus": "قلّل الكمية",
      "product.qty.plus": "زوّد الكمية",
      "product.inStock": "متوفر — بنشحن خلال ٤٨ ساعة (قاهرة وجيزة)",
      "product.outStock": "خلص — ابعت لنا على واتساب ونقولك امتى يرجع",
      "product.features": "ليه يناسب تدريبك",
      "product.specs": "المواصفات",
      "product.related": "منتجات ممكن تعجبك",
      "product.related.sub": "حاجات تانية للتمرين في نفس المادة.",
      "product.viewCat": "شوف القسم",
      "product.zoom": "مرّر للتكبير",
      "product.zoomTap": "اضغط للتكبير",
      "product.breadcrumb.home": "الرئيسية",
      "product.breadcrumb.shop": "المتجر",
      "product.trust.delivery": "نوصّل لكل المحافظات",
      "product.trust.authentic": "جودة للتدريب المتكرر",
      "product.trust.support": "اسأل على واتساب قبل ما تطلب",
      "product.rating.text": "٤٫٩ · طلاب بيثقوا فينا",
      "product.notFound.title": "المنتج مش موجود",
      "product.notFound.sub": "يمكن اتشال أو اللينك غلط.",
      "product.notFound.cta": "ارجع للمتجر",
      "product.gallery.expand": "كبّر الصورة",
      "product.gallery.label": "صور المنتج",
      "product.sku": "كود المنتج",

      "about.hero.overline": "قصتنا",
      "about.hero.title": "نساعدك تتمرّن براحة… قبل ما تدخل الكلينيك.",
      "about.hero.lead": "ميد فاكتوري للتدريب العملي — أدوات تحاكي الحالات الحقيقية علشان تطوّر مستواك قبل ما تمسّ المريض.",

      "about.story.overline": "إزاي بدينا",
      "about.story.title": "من فرق المحاضرة… لأول يوم في الكلينيك.",
      "about.story.p1": "كل طالب طب أسنان عارف الإحساس: النظرية في دماغك، بس أول prep أو أول قناة إندو كل حاجة جديدة. والأدوات اللي هتتمرّن عليها مهمة — ومش المفروض تدور عليها في أماكن كتير.",
      "about.story.p2": "شوفنا طلاب بيجمعوا من هنا وهنا — رأس من مكان، إندو من مكان، قوالب مش مناسبة للمادة. عملنا مكان واحد فيه <strong>كل اللي محتاجه للتدريب العملي</strong>، مرتّب زي ما الطالب بيفكّر.",
      "about.story.p3": "النهارده طلاب من القاهرة لأسوان بيطلبوا مننا لأننا بنتكلم لغتهم: فصول، مواد، قوايم المعمل، والقلق قبل الكلينيك. إحنا مش مورد عيادات ولا شركة معدات. إحنا لـ <em>أنت</em> — الطالب اللي محتاج يتمرّن.",

      "about.mv.overline": "رسالتنا",
      "about.mv.title": "إيه اللي بيحرّكنا",
      "about.mv.mission.title": "مهمتنا",
      "about.mv.mission.body": "نساعد كل طالب طب أسنان في مصر يطوّر مستواه العملي بأدوات واقعية وسعر مناسب — مع نصيحة صريحة وتوصيل يوثق فيه.",
      "about.mv.vision.title": "رؤيتنا",
      "about.mv.vision.body": "نبقى العلامة اللي أي طالب في الوطن العربي يقول عليها: «ده المكان اللي بجهّزك للكلينيك قبل ما تدخل.»",

      "about.trust.overline": "ليه الطلاب بيثقوا فينا",
      "about.trust.title": "ليه الطلاب بيرجعوا يطلبوا تاني",
      "about.trust.sub": "التوصية في جروبات السنة أسرع من أي إعلان. ده اللي بنعتمد عليه.",
      "about.trust.1.title": "بنختار اللي الطالب فعلاً بيستخدمه",
      "about.trust.1.body": "مش قائمة عشوائية — اللي في المعمل واللي على قايمة المادة.",
      "about.trust.2.title": "مواصفات واضحة",
      "about.trust.2.body": "المواد، التوافق، والاستخدام مكتوبين — تعرف بتشتري إيه قبل ما تدفع.",
      "about.trust.3.title": "واتساب قبل الطلب",
      "about.trust.3.body": "مش متأكد إيه اللي يناسب مادتك؟ ابعت — بنرد في ساعة تقريباً.",
      "about.trust.4.title": "طلاب بيرجعوا كل فصل",
      "about.trust.4.body": "أكتر من ٢٬٤٠٠ طالب — ومعظم الطلبات تكرار قبل امتحان أو مادة جديدة.",

      "about.quality.overline": "الجودة",
      "about.quality.title": "للتدريب المتكرر — مش لعب أطفال.",
      "about.quality.p1": "بنرفض الحاجات اللي بتتكسر من أول prep أو القناة بتبوظ بعد أول access. منتجاتنا للتمرين <strong>طول السنة</strong> — زي اللي محتاجه قبل الكلينيك.",
      "about.quality.l1": "تشريح قريب من الواقع — إندو، تعويضات وجراحة",
      "about.quality.l2": "مواد تتحمّل تكرار التمرين",
      "about.quality.l3": "مواصفات واضحة: التوافق، الوزن، واللي جوه العلبة",
      "about.quality.l4": "تغليف محكم — يوصلك جاهز للمعمل",
      "about.quality.cta": "شوف أدوات التدريب",
      "about.quality.quote": "\"الجودة زي اللي في الكلية — ماشتريتش مرتين.\"",
      "about.quality.quoteCite": "— طالب سنة ٣، القاهرة",

      "about.shipping.overline": "التوصيل",
      "about.shipping.title": "بنوصّل لك في أي محافظة",
      "about.shipping.lead": "من الإسكندرية لأسوان — الأدوات تجيلك. من غير ما تلف بين المحاضرات.",
      "about.shipping.cairo": "القاهرة والجيزة",
      "about.shipping.cairoTime": "غالباً خلال ٤٨ ساعة",
      "about.shipping.delta": "الإسكندرية والدلتا",
      "about.shipping.deltaTime": "٢–٤ أيام شغل",
      "about.shipping.upper": "الصعيد والبحر الأحمر",
      "about.shipping.upperTime": "٣–٦ أيام — شركات شحن موثوقة",
      "about.shipping.note": "توصيل مجاني فوق <strong>١٬٥٠٠ ج.م</strong>. التتبع على SMS وواتساب أول ما الطلب يتحرك.",

      "about.stats.students": "طالب بيتدرب معانا",
      "about.stats.govs": "محافظة بنوصّل لها",
      "about.stats.delivery": "توصيل قاهرة وجيزة",
      "about.stats.rating": "تقييم الطلاب",

      "about.cta.title": "جاهز تتمرّن بثقة؟",
      "about.cta.sub": "رؤوس، إندو، قوالب وتايبودنت — كل حاجة للتدريب العملي في مكان واحد.",

      "contact.hero.overline": "كلمنا",
      "contact.hero.title": "فريق بيفهم طالب طب أسنان.",
      "contact.hero.lead": "طلب، نصيحة لمادة، شحن، أو طلب جماعي للفصل — واتساب أسرع، أو ابعت رسالة تحت.",
      "contact.form.overline": "ابعت رسالة",
      "contact.form.title": "فورم التواصل",
      "contact.form.sub": "بنرد في ساعات شغل أيام الأسبوع. اللي عليه * لازم يتملّى.",
      "contact.form.name": "الاسم *",
      "contact.form.namePh": "اسمك",
      "contact.form.phone": "موبايل / واتساب *",
      "contact.form.phonePh": "01xxxxxxxxx",
      "contact.form.email": "الإيميل",
      "contact.form.emailPh": "you@university.edu.eg",
      "contact.form.subject": "الموضوع *",
      "contact.form.subjectPh": "اختار الموضوع",
      "contact.form.subjectOrder": "طلب ودفع",
      "contact.form.subjectProduct": "محتاج نصيحة لمنتج",
      "contact.form.subjectShipping": "الشحن والتوصيل",
      "contact.form.subjectBulk": "طلب جماعي للفصل",
      "contact.form.subjectOther": "حاجة تانية",
      "contact.form.message": "الرسالة *",
      "contact.form.messagePh": "سنتك، مادتك، إيه اللي محتاجه، أو سؤالك…",
      "contact.form.submit": "ابعت",
      "contact.form.submitWa": "ابعت على واتساب بدل كده",
      "contact.form.success": "تمام — هنفتح واتساب برسالتك.",
      "contact.form.errorRequired": "املأ الحقول المطلوبة.",
      "contact.form.errorPhone": "رقم الموبايل مش مظبوط.",
      "contact.wa.title": "الأسرع: واتساب",
      "contact.wa.sub": "ابعت سنتك ومادتك — نقولك تشتري إيه في دقايق.",
      "contact.wa.hours": "غالباً متاحين أحد–خميس ١٠–٨ مساءً (توقيت القاهرة)",
      "contact.social.title": "تابعنا",
      "contact.quick.email": "إيميل",
      "contact.quick.phone": "موبايل",
      "contact.location.overline": "زيارة أو استلام",
      "contact.location.title": "موقعنا في القاهرة الكبرى",
      "contact.location.sub": "الشحن لكل المحافظات هو الأساس — الزيارة بموعد للطلبات الكبيرة أو الاستلام من عندنا.",
      "contact.location.name": "ميد فاكتوري — القاهرة",
      "contact.location.address": "مدينة السادس من أكتوبر، الجيزة",
      "contact.location.hours": "أحد–خميس: ١٠–٨ · جمعة–سبت: بموعد",
      "contact.location.zone": "بنوصّل لطلاب في كل محافظات مصر",
      "contact.location.maps": "افتح على خرائط جوجل",
      "contact.support.overline": "إزاي نساعدك",
      "contact.support.title": "إيه اللي نقدر نعمله",
      "contact.support.1.title": "نختارلك على مادتك",
      "contact.support.1.body": "ابعت سنتك ومادتك — نقولك رأس، إندو ولا قوالب يناسبك.",
      "contact.support.2.title": "الشحن والتتبع",
      "contact.support.2.body": "قاهرة وجيزة غالباً ٤٨ ساعة. باقي المحافظات — بنبعت التتبع أول ما يتحرك.",
      "contact.support.3.title": "لو حصل عيب",
      "contact.support.3.body": "وصل مكسور؟ واتساب خلال ٤٨ ساعة مع صور — نبدّل أو نرجّع.",
      "contact.support.4.title": "طلبات الفصل الجماعية",
      "contact.support.4.body": "مجموعة من السنة؟ اسأل على أسعار الحزم للتدريب.",
      "contact.faq.title": "أسئلة قبل ما تكتب",
      "contact.faq.sub": "إجابات سريعة.",
      "contact.faq.1.q": "بتردوا على واتساب في قد إيه؟",
      "contact.faq.1.a": "أحد–خميس في وقت الشغل: غالباً ١–٢ ساعة. بالليل والويكند ممكن يتأخر شوية.",
      "contact.faq.2.q": "ينفع أزور وأشوف المنتجات؟",
      "contact.faq.2.a": "أيوه بموعد. ابعت على واتساب — مفيد قبل طلب الفصل.",
      "contact.faq.3.q": "تساعدوني أختار لمادتي؟",
      "contact.faq.3.a": "طبعاً. ابعت سنة، جامعة، ومادة — نقولك تبدأ بإيه في الجراحة أو الإندو أو التعويضات.",
      "contact.faq.4.q": "أتابع الطلب إزاي؟",
      "contact.faq.4.a": "بعد الشحن بنبعت التتبع SMS وواتساب.",
      "contact.faq.5.q": "في خصم للطلاب أو حزم؟",
      "contact.faq.5.a": "طلبات الفصل الجماعية ليها سعر خاص. ابعت الكمية — هنرد بعرض خلال يوم شغل.",

      "theme.search.title": "دور على منتج",
      "theme.search.hint": "جرّب: رأس تجريبي، أسنان إندو، تايبودونت، قوالب…",
      "theme.search.popular": "الأكتر بحثاً",
      "theme.search.close": "قفل البحث",
      "theme.backTop": "فوق تاني",
      "theme.dock.home": "الرئيسية",
      "theme.dock.shop": "المتجر",
      "theme.dock.whatsapp": "واتساب",
      "theme.dock.contact": "تواصل",
      "theme.dock.label": "تنقل الجوال",

      "announcement.region": "إعلان",
      "nav.home": "ميد فاكتوري — الرئيسية",
      "nav.main": "القائمة",
      "footer.shopNav": "أقسام المتجر",
      "footer.supportNav": "مساعدة",
      "footer.connectNav": "تواصل",
      "footer.companyNav": "عن الشركة",
      "footer.newsletter": "اشترك في النشرة",
      "footer.currency": "العملة: جنيه مصري",
      "shop.main": "منتجات التدريب",
      "products.filters": "فلتر المنتجات",
      "products.filters.close": "قفل الفلتر",
      "products.filters.chips": "فلتر حسب القسم",
      "products.pagination.label": "صفحات المنتجات",
      "product.lightbox": "عرض الصورة",
      "product.lightbox.close": "قفل",
      "product.rating.aria": "تقييم ٤٫٩ من ٥",
      "contact.aside": "تواصل سريع",
      "stats.home": "أرقام ميد فاكتوري",
      "stats.about": "تأثيرنا مع الطلاب",
      "meta.title.notFound": "المنتج مش موجود — ميد فاكتوري",
      "product.pageTitle": "{name} — ميد فاكتوري",
      "product.related.empty": "شوف <a href=\"products.html\">باقي المتجر</a> — في حاجات تانية للتدريب.",
      "about.shipping.pin.cairo": "القاهرة",
      "about.shipping.pin.alex": "الإسكندرية",
      "about.shipping.pin.aswan": "أسوان",
      "img.hero.alt": "رأس تجريبي لتدريب الجراحة قبل الكلينيك",
      "img.why.alt": "طالب بيتمرّن على prep على رأس تجريبي",
      "img.cta.alt": "أدوات تدريب مرتبة للتمرين في المعمل",

      "cat.simulation": "جراحة ومحاكاة",
      "cat.endodontics": "إندو",
      "cat.prosthodontics": "تعويضات",
      "cat.kit": "أطقم جاهزة",
    },
  };

  function t(key) {
    return strings[currentLang]?.[key] ?? strings.en[key] ?? key;
  }

  function getLang() {
    return currentLang;
  }

  function isRtl() {
    return currentLang === "ar";
  }

  function getProductField(product, field) {
    if (currentLang === "ar" && window.MedFactoryProductI18n?.ar?.[product.id]) {
      const localized = window.MedFactoryProductI18n.ar[product.id][field];
      if (localized !== undefined) return localized;
    }
    return product[field];
  }

  function getCategoryLabel(key) {
    const map = {
      "dummy-heads": { en: "Dummy Heads", ar: "رؤوس تجريبية" },
      "endo-teeth": { en: "Endo Teeth", ar: "أسنان إندو" },
      "dental-casts": { en: "Dental Casts", ar: "قوالب" },
      "dental-kits": { en: "Training Kits", ar: "أطقم جاهزة" },
      all: { en: "All training models", ar: "كل المنتجات" },
    };
    return map[key]?.[currentLang] || map[key]?.en || key;
  }

  function getProductCategoryLabel(label) {
    const map = {
      Simulation: { en: "Simulation", ar: "جراحة ومحاكاة" },
      Endodontics: { en: "Endodontics", ar: "إندو" },
      Prosthodontics: { en: "Prosthodontics", ar: "تعويضات" },
      Kit: { en: "Training Kit", ar: "طقم جاهز" },
    };
    return map[label]?.[currentLang] || label;
  }

  function applyDom() {
    document.documentElement.lang = currentLang === "ar" ? "ar" : "en";
    document.documentElement.dir = isRtl() ? "rtl" : "ltr";
    document.body.classList.toggle("is-rtl", isRtl());

    const titleKey = document.body.getAttribute("data-i18n-title");
    if (titleKey) document.title = t(titleKey);

    const descKey = document.body.getAttribute("data-i18n-desc");
    if (descKey) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", t(descKey));
    }

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (key) el.placeholder = t(key);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (key) el.setAttribute("aria-label", t(key));
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (key) el.alt = t(key);
    });

    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (key) el.innerHTML = t(key);
    });

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (el.hasAttribute("data-i18n-html")) return;
      if (el.hasAttribute("data-i18n-placeholder")) return;
      const val = t(key);
      if (val.includes("<")) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });

    document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === currentLang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "ar") return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyDom();
    window.dispatchEvent(new CustomEvent("mf:langchange", { detail: { lang } }));
  }

  function initSwitcher() {
    document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        setLang(btn.getAttribute("data-lang"));
      });
    });
    applyDom();
  }

  function formatPrice(amount) {
    if (currentLang === "ar") {
      return `${amount.toLocaleString("ar-EG")} ج.م`;
    }
    return `EGP ${amount.toLocaleString("en-EG")}`;
  }

  return {
    t,
    getLang,
    isRtl,
    setLang,
    initSwitcher,
    applyDom,
    getProductField,
    getCategoryLabel,
    getProductCategoryLabel,
    formatPrice,
  };
})();
