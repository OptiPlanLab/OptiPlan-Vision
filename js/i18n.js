/* ============================================
   OptiPlan Showcase — i18n (HE/EN) Toggle
   ============================================ */

const translations = {
  // Navigation
  'nav.vision': { he: 'החזון', en: 'Vision' },
  'nav.products': { he: 'המוצרים', en: 'Products' },
  'nav.personas': { he: 'למי מיועד', en: 'Users' },
  'nav.numbers': { he: 'השוק', en: 'Market' },
  'nav.roadmap': { he: 'המסלול', en: 'Roadmap' },
  'nav.contact': { he: 'צור קשר', en: 'Contact' },

  // Hero
  'hero.title': {
    he: 'פלטפורמה אחת.<br>כל הפרויקטים.<br>כל הנתונים.',
    en: 'One Platform.<br>Every Project. Every Insight.'
  },
  'hero.subtitle': {
    he: 'מערכת ניהול פרויקטי תשתית משולבת לחברות הנדסה בישראל — מעקב תיאומים, מסמכים, סיכונים, לוחות זמנים וניהול עסקי תחת קורת גג אחת.',
    en: 'Integrated infrastructure project management for Israeli engineering firms — permit coordination, documents, risks, scheduling, and business management under one roof.'
  },
  'hero.cta': { he: 'גלה את המוצרים', en: 'Explore Products' },

  // Vision
  'vision.label': { he: 'החזון', en: 'THE VISION' },
  'vision.title': {
    he: 'הבעיה שאנחנו פותרים',
    en: 'The Problem We Solve'
  },
  'vision.p1': {
    he: 'חברות הנדסה המנהלות פרויקטי תשתית גדולים בישראל — כמו הקו הירוק של הרכבת הקלה — מתמודדות עם מציאות של כלים מפוצלים, תהליכים ידניים ועשרות בעלי עניין.',
    en: 'Engineering firms managing large infrastructure projects in Israel — like the Green Line light rail — face a reality of fragmented tools, manual processes, and dozens of stakeholders.'
  },
  'vision.p2': {
    he: 'תיאום מול 61+ גופים מאשרים, מעקב אישורים בגיליונות אקסל, תקשורת בוואטסאפ, ואין תמונה אחת שלמה של מצב הפרויקט. זה מוביל לעיכובים, חשיפה כספית ואובדן שליטה.',
    en: 'Coordinating with 61+ approval authorities, tracking permits in Excel spreadsheets, communicating via WhatsApp, with no single complete picture of project status. This leads to delays, financial exposure, and loss of control.'
  },

  // Vision stats
  'stat.authorities': { he: 'גופים מאשרים', en: 'Approval Authorities' },
  'stat.products': { he: 'מוצרים מאוחדים', en: 'Unified Products' },
  'stat.entities': { he: 'ישויות נתונים', en: 'Data Entities' },
  'stat.pages': { he: 'עמודים במערכת', en: 'Pages in Platform' },

  // Comparison
  'compare.before': { he: 'לפני — המצב הקיים', en: 'Before — Current State' },
  'compare.after': { he: 'אחרי — OptiPlan', en: 'After — OptiPlan' },
  'compare.b1': { he: 'גיליונות אקסל מרובים ללא קישור', en: 'Multiple disconnected Excel sheets' },
  'compare.b2': { he: 'תקשורת בוואטסאפ ומיילים', en: 'Communication via WhatsApp & email' },
  'compare.b3': { he: 'אין תמונה מלאה של מצב הפרויקט', en: 'No complete project status picture' },
  'compare.b4': { he: 'מעקב ידני מול עשרות גופים', en: 'Manual tracking across dozens of authorities' },
  'compare.b5': { he: 'מידע מפוזר בין מערכות נפרדות', en: 'Information scattered across separate systems' },
  'compare.a1': { he: 'מטריצת אישורים אינטראקטיבית', en: 'Interactive permits matrix' },
  'compare.a2': { he: 'מעקב משימות חכם עם קידוד אוטומטי', en: 'Smart task tracking with auto-coding' },
  'compare.a3': { he: 'דשבורד מאוחד לכל הפרויקטים', en: 'Unified dashboard for all projects' },
  'compare.a4': { he: 'ניהול סיכונים ולוחות זמנים משולב', en: 'Integrated risk & schedule management' },
  'compare.a5': { he: 'תזרים מזומנים ותכנון עסקי', en: 'Cash flow & business planning' },

  // Products
  'products.label': { he: 'המוצרים', en: 'THE PRODUCTS' },
  'products.title': { he: 'שישה מוצרים. פלטפורמה אחת.', en: 'Six Products. One Platform.' },
  'products.subtitle': {
    he: 'כל מוצר מטפל בתחום ייעודי, אך כולם חולקים נתונים, הרשאות ותשתית משותפת.',
    en: 'Each product handles a dedicated domain, yet they all share data, permissions, and infrastructure.'
  },

  // OptiTrack
  'optitrack.name': { he: 'אופטיטראק', en: 'OptiTrack' },
  'optitrack.subtitle': { he: 'תיאום תשתיות', en: 'Permit Coordination' },
  'optitrack.desc': {
    he: 'מעקב סטטוס אישורים מול 61+ גופים מאשרים בכל שלב ומקטע בפרויקט.',
    en: 'Track approval status across 61+ infrastructure authorities for each project section and phase.'
  },
  'optitrack.f1': { he: 'מטריצת אישורים (גופים × מקטעים × שלבים)', en: 'Permits matrix (authorities × sections × phases)' },
  'optitrack.f2': { he: '61 גופים מאשרים מוגדרים מראש', en: '61 pre-configured approval authorities' },
  'optitrack.f3': { he: 'ייבוא מערכת מת״ל הארצית', en: 'Import from national Matal system' },
  'optitrack.f4': { he: 'קידוד משימות חכם אוטומטי', en: 'Smart automatic task coding' },

  // OptiDocs
  'optidocs.name': { he: 'אופטידוקס', en: 'OptiDocs' },
  'optidocs.subtitle': { he: 'ניהול מסמכים', en: 'Document Management' },
  'optidocs.desc': {
    he: 'ניהול משימות עם ניתוח מיילים בינה מלאכותית, מכתבים רשמיים עם מספור אוטומטי, וסיכומי ישיבות.',
    en: 'Task management with AI email parsing, formal letters with auto-numbering, and meeting summaries.'
  },
  'optidocs.f1': { he: 'משימות עם ניתוח מיילים חכם', en: 'Tasks with AI email parsing' },
  'optidocs.f2': { he: 'מכתבים עם קוד ייחוס ושרשור', en: 'Letters with reference coding & threading' },
  'optidocs.f3': { he: 'סיכומי ישיבות עם חילוץ משימות', en: 'Meeting summaries with task extraction' },
  'optidocs.f4': { he: 'ייצוא ל-PDF ואקסל', en: 'PDF & Excel export' },

  // OptiRisk
  'optirisk.name': { he: 'אופטיריסק', en: 'OptiRisk' },
  'optirisk.subtitle': { he: 'ניהול סיכונים', en: 'Risk Management' },
  'optirisk.desc': {
    he: 'מרשם סיכונים עם דירוג, מגמות, מעקב טיפול וייבוא/ייצוא CSV.',
    en: 'Risk registry with scoring, trends, mitigation tracking, and CSV import/export.'
  },
  'optirisk.f1': { he: 'דשבורד סיכונים מקיף', en: 'Comprehensive risk dashboard' },
  'optirisk.f2': { he: 'מעקב מגמות (עולה/יורד/יציב)', en: 'Trend tracking (up/down/stable)' },
  'optirisk.f3': { he: 'משימות טיפול מקושרות', en: 'Linked mitigation tasks' },
  'optirisk.f4': { he: 'סיכומי AI חכמים', en: 'AI-powered risk summaries' },

  // OptiGantt
  'optigantt.name': { he: 'אופטיגנט', en: 'OptiGantt' },
  'optigantt.subtitle': { he: 'ניהול לוח זמנים', en: 'Schedule Management' },
  'optigantt.desc': {
    he: 'תרשימי גנט עם ייבוא MS Project, 4 סוגי תלויות, ומסלול קריטי.',
    en: 'Gantt charts with MS Project import, 4 dependency types, and critical path visualization.'
  },
  'optigantt.f1': { he: 'ייבוא קבצי MS Project (MPP)', en: 'MS Project file import (MPP)' },
  'optigantt.f2': { he: '4 סוגי תלויות (FS/FF/SS/SF)', en: '4 dependency types (FS/FF/SS/SF)' },
  'optigantt.f3': { he: 'חישוב מסלול קריטי', en: 'Critical path calculation' },
  'optigantt.f4': { he: 'תצוגה מפוצלת (רשימה + גנט)', en: 'Split view (list + Gantt)' },

  // OptiBiz
  'optibiz.name': { he: 'אופטיביז', en: 'OptiBiz' },
  'optibiz.subtitle': { he: 'ניהול עסקי', en: 'Business ERP' },
  'optibiz.desc': {
    he: 'תכנון תזרים מזומנים, לקוחות, עובדים, הצעות מחיר עם AI, חוזים ודיווח שעות.',
    en: 'Cash flow planning, clients, employees, AI-powered proposals, contracts, and time reporting.'
  },
  'optibiz.f1': { he: 'תכנון תזרים 12 חודשים', en: '12-month cash flow planning' },
  'optibiz.f2': { he: 'תכנון מול ביצוע', en: 'Plan vs. actual comparison' },
  'optibiz.f3': { he: 'הצעות מחיר בסיוע AI', en: 'AI-assisted proposals' },
  'optibiz.f4': { he: 'דיווח שעות ומעקב הוצאות', en: 'Time reporting & expense tracking' },

  // Hub
  'hub.name': { he: 'דשבורד מאוחד', en: 'Hub Dashboard' },
  'hub.subtitle': { he: 'מרכז שליטה', en: 'Command Center' },
  'hub.desc': {
    he: 'דשבורד מרכזי שמאגד מדדים מכל המוצרים — תמונת מצב מלאה בלחיצה.',
    en: 'Central dashboard aggregating metrics from all products — complete status picture in one click.'
  },
  'hub.f1': { he: 'אגרגציה מכל המוצרים', en: 'Aggregation from all products' },
  'hub.f2': { he: 'סינון לפי פרויקט או חוצה-פרויקטים', en: 'Filter by project or cross-project' },
  'hub.f3': { he: 'סטטיסטיקות בזמן אמת', en: 'Real-time statistics' },
  'hub.f4': { he: 'ניווט מאוחד לכל המוצרים', en: 'Unified navigation to all products' },

  // Personas
  'personas.label': { he: 'למי זה מיועד', en: 'WHO IT\'S FOR' },
  'personas.title': { he: 'בנוי עבור כל בעל תפקיד בפרויקט', en: 'Built for Every Role in the Project' },
  'personas.subtitle': {
    he: 'מתאם תשתיות, מנהלת פרויקט או מנכ"ל — OptiPlan נותן לכל אחד בדיוק מה שהוא צריך.',
    en: 'Coordinator, project manager, or CEO — OptiPlan gives everyone exactly what they need.'
  },
  'persona.badge.primary': { he: 'משתמש עיקרי', en: 'Primary User' },
  'persona.badge.decision': { he: 'מקבל החלטות', en: 'Decision Maker' },
  'persona.badge.stakeholder': { he: 'בעלת עניין', en: 'Stakeholder' },
  'persona.badge.sponsor': { he: 'מזמין העבודה', en: 'Project Sponsor' },
  'persona.nir.name': { he: 'ניר', en: 'Nir' },
  'persona.nir.role': { he: 'מתאם תשתיות', en: 'Infrastructure Coordinator' },
  'persona.nir.pain': {
    he: '20 דקות למצוא תשובה על סטטוס מקטע — בין 5 קבצי אקסל',
    en: '20 minutes to find a section status — across 5 Excel files'
  },
  'persona.nir.gain': {
    he: 'לחיצה אחת על הדשבורד — כל האישורים, כל הגופים, בזמן אמת',
    en: 'One dashboard click — all permits, all authorities, in real-time'
  },
  'persona.dana.name': { he: 'דנה', en: 'Dana' },
  'persona.dana.role': { he: 'מנהלת פרויקט', en: 'Project Manager' },
  'persona.dana.pain': {
    he: 'שעות עד ימים להבין את ההשפעה של אישור שנדחה',
    en: 'Hours to days to assess the impact of a rejected permit'
  },
  'persona.dana.gain': {
    he: 'המערכת מציגה מיד: לוח זמנים, סיכונים, תזרים — הכל מקושר',
    en: 'System shows instantly: schedule, risks, cashflow — all connected'
  },
  'persona.avi.name': { he: 'אבי', en: 'Avi' },
  'persona.avi.role': { he: 'מנהל כספים', en: 'Finance Manager' },
  'persona.avi.pain': {
    he: 'יום שלם לאיחוד תזרים — נוסחאות שבורות באקסל',
    en: 'A full day to reconcile cashflow — broken Excel formulas'
  },
  'persona.avi.gain': {
    he: 'תזרים מזומנים בזמן אמת, מסונכרן אוטומטית מאבני דרך',
    en: 'Real-time cashflow, auto-synced from project milestones'
  },
  'persona.rami.name': { he: 'רמי', en: 'Rami' },
  'persona.rami.role': { he: 'בעל החברה / מנכ"ל', en: 'Firm Owner / CEO' },
  'persona.rami.pain': {
    he: 'מידע מהשבוע שעבר — מגלה בעיות רק כשהן כבר משבר',
    en: 'Last week\'s data — discovers problems only when they\'re already crises'
  },
  'persona.rami.gain': {
    he: 'דשבורד בנייד עם בריאות תיק הפרויקטים — בזמן אמת',
    en: 'Mobile dashboard with real-time portfolio health'
  },
  'persona.yael.name': { he: 'יעל', en: 'Yael' },
  'persona.yael.role': { he: 'בעלת עניין חיצונית', en: 'External Stakeholder' },
  'persona.yael.pain': {
    he: 'מתאמים מתקשרים שוב ושוב — אין לה הקשר על הפרויקט',
    en: 'Coordinators keep calling — no context on the overall project'
  },
  'persona.yael.gain': {
    he: 'דשבורד צד שלישי — רואה רק מה שרלוונטי, בלי חשבון',
    en: 'Third-party dashboard — sees only what\'s relevant, no account needed'
  },
  'persona.tamir.name': { he: 'תמיר', en: 'Tamir' },
  'persona.tamir.role': { he: 'יזם', en: 'Developer / Sponsor' },
  'persona.tamir.pain': {
    he: 'דוחות חודשיים מנופחים — חושד שמסתירים ממנו בעיות',
    en: 'Inflated monthly reports — suspects problems are being hidden'
  },
  'persona.tamir.gain': {
    he: 'גישה ישירה לסטטוס — אותו מידע שרואה צוות הניהול',
    en: 'Direct access to status — same data the management team sees'
  },

  // Transformation
  'transform.label': { he: 'השינוי', en: 'THE IMPACT' },
  'transform.title': { he: 'מ-20 דקות למיידי', en: 'From 20 Minutes to Instant' },
  'transform.subtitle': {
    he: 'כך OptiPlan משנה את יום העבודה — מדדים אמיתיים, לא הבטחות.',
    en: 'How OptiPlan transforms your workday — real metrics, not promises.'
  },
  'transform.m1.before': { he: '~20 דקות', en: '~20 minutes' },
  'transform.m1.before_desc': { he: 'לחפש סטטוס מקטע', en: 'to look up section status' },
  'transform.m1.after': { he: 'מיידי', en: 'Instant' },
  'transform.m1.after_desc': { he: 'לחיצה אחת על הדשבורד', en: 'One dashboard click' },
  'transform.m1.label': { he: 'שאילתת סטטוס', en: 'Status Query' },
  'transform.m2.before': { he: 'שעות עד ימים', en: 'Hours to days' },
  'transform.m2.before_desc': { he: 'לאתר את כל ההשלכות', en: 'to trace all impacts' },
  'transform.m2.after': { he: 'דקות', en: 'Minutes' },
  'transform.m2.after_desc': { he: 'המערכת מציגה מפת השפעה', en: 'System shows impact map' },
  'transform.m2.label': { he: 'הערכת משבר', en: 'Crisis Assessment' },
  'transform.m3.before': { he: 'ידני, הולך לאיבוד', en: 'Manual, gets lost' },
  'transform.m3.before_desc': { he: 'משימות נשכחות אחרי ישיבות', en: 'Tasks forgotten after meetings' },
  'transform.m3.after': { he: 'חילוץ AI אוטומטי', en: 'Automatic AI extraction' },
  'transform.m3.after_desc': { he: '12 משימות נוצרו מסיכום ישיבה', en: '12 tasks created from meeting summary' },
  'transform.m3.label': { he: 'מישיבה למשימות', en: 'Meeting to Tasks' },
  'transform.m4.before': { he: 'יום שלם, פעם בחודש', en: 'Full day, once a month' },
  'transform.m4.before_desc': { he: 'איחוד ידני של גיליונות', en: 'Manual spreadsheet reconciliation' },
  'transform.m4.after': { he: 'בזמן אמת', en: 'Real-time' },
  'transform.m4.after_desc': { he: 'מסונכרן אוטומטית מאבני דרך', en: 'Auto-synced from milestones' },
  'transform.m4.label': { he: 'התאמת תזרים', en: 'Cashflow Reconciliation' },
  'transform.m5.before': { he: 'דוחות שבועיים', en: 'Weekly reports' },
  'transform.m5.before_desc': { he: 'מידע שכבר לא רלוונטי', en: 'Data that\'s already outdated' },
  'transform.m5.after': { he: 'דשבורד בנייד', en: 'Mobile dashboard' },
  'transform.m5.after_desc': { he: 'תיק פרויקטים חי — בכל מקום', en: 'Live portfolio — anywhere' },
  'transform.m5.label': { he: 'נראות תיק פרויקטים', en: 'Portfolio Visibility' },
  'transform.m6.before': { he: 'שבועות', en: 'Weeks' },
  'transform.m6.before_desc': { he: 'ידע מוסדי הולך לאיבוד', en: 'Institutional knowledge walks out the door' },
  'transform.m6.after': { he: 'ימים', en: 'Days' },
  'transform.m6.after_desc': { he: 'הזיכרון הארגוני במערכת', en: 'Organizational memory in the system' },
  'transform.m6.label': { he: 'קליטת עובד חדש', en: 'New Employee Onboarding' },
  'transform.quote': {
    he: '"לפני OptiPlan, זה היה שבוע של כיבוי שריפות."',
    en: '"Before OptiPlan, this would have been a week-long fire drill."'
  },

  // Numbers (Market)
  'numbers.label': { he: 'הזדמנות', en: 'OPPORTUNITY' },
  'numbers.title': { he: 'השוק מחכה לפתרון', en: 'The Market Awaits a Solution' },
  'numbers.subtitle': {
    he: 'שוק ההנדסה האזרחית בישראל חסר פלטפורמה מאוחדת — עד עכשיו.',
    en: 'Israel\'s civil engineering market has lacked a unified platform — until now.'
  },
  'num.market': { he: '₪ פרויקטי הנדסה אזרחית בשנה', en: '₪ in annual civil engineering projects' },
  'num.addressable': { he: '₪ תכנון וניהול — השוק שלנו', en: '₪ planning & management — our market' },
  'num.pillars': { he: 'עולמות בפלטפורמה אחת', en: 'Pillars in one platform' },
  'num.competitors': { he: 'מתחרים שמכסים את כולם', en: 'Competitors covering all three' },

  // Three Pillars
  'pillar.eng.title': { he: 'הנדסי', en: 'Engineering' },
  'pillar.eng.subtitle': { he: 'Engineering', en: 'Engineering' },
  'pillar.eng.products': { he: 'OptiTrack · OptiGantt · OptiRisk', en: 'OptiTrack · OptiGantt · OptiRisk' },
  'pillar.admin.title': { he: 'מנהלי', en: 'Administrative' },
  'pillar.admin.subtitle': { he: 'Administrative', en: 'Administrative' },
  'pillar.admin.products': { he: 'OptiDocs', en: 'OptiDocs' },
  'pillar.fin.title': { he: 'כספי', en: 'Financial' },
  'pillar.fin.subtitle': { he: 'Financial', en: 'Financial' },
  'pillar.fin.products': { he: 'OptiBiz', en: 'OptiBiz' },
  'pillar.hub': { he: 'דשבורד מאוחד — מרכז שליטה', en: 'Hub Dashboard — Command Center' },

  // Roadmap
  'roadmap.label': { he: 'לאן מגיעים', en: 'THE ROADMAP' },
  'roadmap.title': { he: 'מפלטפורמה לאלגוריתם', en: 'From Platform to Intelligence' },
  'roadmap.subtitle': {
    he: 'OptiPlan נבנית כפלטפורמה שהולכת ומשתפרת — ככל שיותר נתונים זורמים, המערכת הופכת חכמה יותר.',
    en: 'OptiPlan is built as a platform that keeps getting smarter — the more data flows through, the more intelligent it becomes.'
  },
  'roadmap.y1.title': { he: 'השקה ופיילוטים', en: 'Launch & Pilots' },
  'roadmap.y1.desc': {
    he: 'פלטפורמה מלאה עם כל 6 המוצרים. חברות פיילוט מהרשת הקיימת. הוכחת התאמה לשוק.',
    en: 'Full platform with all 6 products. Pilot firms from our existing network. Proving product-market fit.'
  },
  'roadmap.y1.t1': { he: 'OptiTrack + Hub', en: 'OptiTrack + Hub' },
  'roadmap.y1.t2': { he: 'פיילוטים ראשונים', en: 'First Pilots' },
  'roadmap.y2.title': { he: 'צמיחה והאלגוריתם', en: 'Growth & The Algorithm' },
  'roadmap.y2.desc': {
    he: 'הרחבת בסיס הלקוחות. השקת "האלגוריתם" — בינה מלאכותית חוצת-תחומים שמקשרת אישורים, סיכונים, לוחות זמנים ותזרים.',
    en: 'Expanding the customer base. Launch of "The Algorithm" — cross-domain AI linking permits, risks, schedules, and cashflow.'
  },
  'roadmap.y2.t1': { he: 'הרחבת לקוחות', en: 'Customer Growth' },
  'roadmap.y2.t2': { he: 'האלגוריתם', en: 'The Algorithm' },
  'roadmap.y3.title': { he: 'מובילות והתרחבות', en: 'Leadership & Expansion' },
  'roadmap.y3.desc': {
    he: 'ביסוס מובילות בשוק הישראלי. התרחבות בינלאומית לשווקים נוספים. OptiPlan הופכת לסטנדרט בתעשייה.',
    en: 'Establishing market leadership in Israel. International expansion to new markets. OptiPlan becomes the industry standard.'
  },
  'roadmap.y3.t1': { he: 'התרחבות בינלאומית', en: 'International Expansion' },
  'roadmap.y3.t2': { he: 'סטנדרט תעשייתי', en: 'Industry Standard' },
  'roadmap.algo.title': { he: 'האלגוריתם — בינה חוצת-תחומים', en: 'The Algorithm — Cross-Domain Intelligence' },
  'roadmap.algo.example': {
    he: '"עיכוב אישור במקטע A1 מקושר לסיכון #47, משפיע על פריט לו"ז #312 — השפעה משוערת על תזרים: 1.2 מיליון ₪"',
    en: '"Permit delay in Section A1 is linked to Risk #47 and affects Schedule Item #312 — estimated cashflow impact: 1.2M NIS"'
  },
  'roadmap.algo.desc': {
    he: 'ככל שיותר נתוני פרויקט זורמים במערכת, הקישורים בין התחומים הופכים לבינה שאין לשחזר בשום כלי אחר.',
    en: 'As more project data flows through the system, cross-domain links become intelligence that no other tool can replicate.'
  },

  // CTA
  'cta.title': {
    he: 'מוכנים לשנות את ניהול הפרויקטים?',
    en: 'Ready to Transform Your Project Management?'
  },
  'cta.subtitle': {
    he: 'OptiPlan הולך להפוך את הדרך שחברות הנדסה בישראל מנהלות פרויקטי תשתית.',
    en: 'OptiPlan is about to transform how Israeli engineering firms manage infrastructure projects.'
  },
  'cta.primary': { he: 'צור קשר', en: 'Get in Touch' },
  'cta.secondary': { he: 'חזרה למעלה', en: 'Back to Top' },

  // Footer
  'footer.copyright': {
    he: '© 2026 OptiPlan. כל הזכויות שמורות.',
    en: '© 2026 OptiPlan. All rights reserved.'
  },

  // Mini prototype labels
  'proto.optitrack_title': { he: 'מטריצת אישורים', en: 'Permits Matrix' },
  'proto.optidocs_title': { he: 'מכתב רשמי', en: 'Formal Letter' },
  'proto.optirisk_title': { he: 'מרשם סיכונים', en: 'Risk Registry' },
  'proto.optigantt_title': { he: 'תרשים גנט', en: 'Gantt Chart' },
  'proto.optibiz_title': { he: 'תזרים מזומנים', en: 'Cash Flow' },
  'proto.hub_title': { he: 'דשבורד מאוחד', en: 'Hub Dashboard' },
};

let currentLang = localStorage.getItem('optiplan-lang') || 'he';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('optiplan-lang', lang);

  // Set document direction and lang
  document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;

  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][lang]) {
      el.innerHTML = translations[key][lang];
    }
  });

  // Update toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Update mobile comparison labels (CSS ::before content via data attributes)
  const beforeList = document.querySelector('.comparison-list.before');
  const afterList = document.querySelector('.comparison-list.after');
  if (beforeList) {
    beforeList.setAttribute('data-mobile-label-before',
      lang === 'he' ? '\u2716 לפני — המצב הקיים' : '\u2716 Before — Current State');
  }
  if (afterList) {
    afterList.setAttribute('data-mobile-label-after',
      lang === 'he' ? '\u2714 אחרי — OptiPlan' : '\u2714 After — OptiPlan');
  }

  // Re-render Lucide icons (innerHTML destroys them)
  if (window.lucide) {
    lucide.createIcons();
  }
}

function initI18n() {
  // Set initial language
  setLanguage(currentLang);

  // Bind toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.getAttribute('data-lang'));
    });
  });
}

// Export for use in main.js
window.OptiI18n = { init: initI18n, setLanguage, translations, getLang: () => currentLang };
