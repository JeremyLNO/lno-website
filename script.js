'use strict';

/* ===== CONTENT DICTIONARY ===== */
const CONTENT = {
en: {
  nav: { home:'HOME', firm:'THE FIRM', thesis:'THESIS', contact:'CONTACT' },
  triad:{ research:'RESEARCH', technology:'TECHNOLOGY', execution:'EXECUTION',
           researchBody:'Systematic market intelligence, structural analysis, and data-driven signal generation. We do not guess; we measure, model, and backtest.',
           technologyBody:'Reliable, redundant, latency-aware technical stack. We invest heavily in our proprietary technology to ensure operational resilience in volatile regimes.',
           executionBody:'Precise entry and exit, minimizing friction, slippage, and behavioral error. Execution quality is treated as a core component of alpha.' },
  home: {
    kicker:'PROPRIETARY TRADING · DIGITAL ASSETS',
    title:'PROPRIETARY TRADING FIRM',
    subtitle:'LNO deploys internal capital across digital asset markets through research, structured execution, and rigorous risk discipline.',
    cta:'INQUIRIES', scroll:'SCROLL',
    glanceLabel:'FIRM AT A GLANCE',
    stats:[{value:'100%',label:'Internal Capital'},{value:'Focused',label:'Disciplined'},{value:'24/7',label:'Markets Covered'},{value:'∞',label:'Time Horizon'}],
    thesisTitle:'Our Thesis.', thesisBody:'Crypto remains one of the few global asset classes where fragmentation, reflexivity, and structural inefficiencies coexist at meaningful scale. Edge does not come from constant activity, but from structural understanding and selective exposure.', thesisLink:'READ THESIS',
    ctaQuoteA:'Selective disclosure is not a limitation,', ctaQuoteB:'it is a deliberate operating principle.',
    ctaBody:'LNO does not seek broad engagement. Inquiries from qualified institutional contacts, strategic partners, and senior professionals are considered selectively.'
  },
  firm: {
    title:'The Firm.', lead:'LNO is an independent proprietary trading firm. We deploy our own capital into digital asset markets with institutional rigor.',
    stat1:{value:'100%',label:'Proprietary Capital'}, stat2:{value:'∞',label:'Time Horizon'},
    identityLabel:'IDENTITY', identityBody:'LNO operates exclusively with internal capital. It is not a fund. It does not accept external investors. It is not a public-facing product business. Our structure allows us to focus entirely on compounding capital over long time horizons without the pressure of raising assets, managing external expectations, or conforming to standard industry benchmarking.',
    notDoLabel:'WHAT LNO DOES NOT DO',
    notDo:['We do not manage third-party capital or operate as a hedge fund.','We do not offer investment advice, research subscriptions, or market commentary.','We do not publish our alpha-generating strategies or proprietary data.','We do not market ourselves to the retail public.']
  },
  thesis: {
    title:'Market structure as strategic foundation.', lead:'We approach markets as a system, not as a sequence of opportunities. Structure first. Precision over activity. Repeatability over noise.',
    landscapeLabel:'THE LANDSCAPE', landscapeBody:'Crypto remains one of the few global asset classes where fragmentation, reflexivity, and structural inefficiencies coexist at meaningful scale. These inefficiencies persist not despite market growth, but often alongside it, created by the disparate nature of exchanges, varied regulatory regimes, and the unique retail-to-institutional participant mix.',
    edgeLabel:'WHERE EDGE ORIGINATES',
    edgeBody1:'Edge does not come from noise, constant activity, or predicting the macroeconomic future. It comes from deep market understanding, execution quality, risk discipline, and selective exposure. We believe that alpha decays, but rigorous infrastructure and process compound.',
    edgeBody2:'Conversely, we observe that most capital is destroyed by weak process, poor calibration, emotional positioning, and structurally undisciplined behavior. Our mandate is the absolute avoidance of these failure modes.'
  },
  contact: {
    title:'Selective Inquiries.', lead:'LNO does not seek broad engagement. Inquiries from qualified investors, institutional contacts, strategic partners, and senior professionals are considered selectively. Unsolicited investment solicitations will not be reviewed.',
    directLabel:'DIRECT CORRESPONDENCE', email:'contact@lno.company',
    emailNote:'Write to us directly. Please include your name, affiliation, and a concise description of your inquiry. We respond selectively and at our discretion.'
  },
  footer:{ tagline:'Proprietary intelligence. Disciplined capital.', firmLabel:'THE FIRM', about:'About', thesisLink:'Thesis', connectLabel:'CONNECT', inquiries:'Inquiries', linkedin:'LinkedIn', copyright:'© 2026 LNO. All rights reserved.', legal:'Legal & Disclaimers', cookie:'Cookie Policy' }
},

fr: {
  nav:{ home:'ACCUEIL', firm:'LA FIRME', thesis:'THÈSE', contact:'CONTACT' },
  triad:{ research:'RECHERCHE', technology:'TECHNOLOGIE', execution:'EXÉCUTION',
           researchBody:'Intelligence de marché systématique, analyse structurelle et génération de signaux fondée sur les données. Nous ne devinons pas ; nous mesurons, modélisons et testons.',
           technologyBody:'Pile technique fiable, redondante et sensible à la latence. Nous investissons massivement dans notre technologie propriétaire pour garantir une résilience opérationnelle en régime volatil.',
           executionBody:'Entrées et sorties précises, minimisant la friction, le slippage et l’erreur comportementale. La qualité d’exécution est traitée comme une composante essentielle de l’alpha.' },
  home:{
    kicker:'TRADING PROPRIÉTAIRE · ACTIFS NUMÉRIQUES',
    title:'SOCIÉTÉ DE TRADING POUR COMPTE PROPRE',
    subtitle:'LNO déploie du capital interne sur les marchés d’actifs numériques grâce à la recherche, une exécution structurée et une discipline de risque rigoureuse.',
    cta:'DEMANDES', scroll:'DÉFILER',
    glanceLabel:'LA FIRME EN UN COUP D’ŒIL',
    stats:[{value:'100%',label:'Capital Interne'},{value:'Focalisé',label:'Discipliné'},{value:'24/7',label:'Marchés Couverts'},{value:'∞',label:'Horizon Temporel'}],
    thesisTitle:'Notre Thèse.', thesisBody:'Les cryptoactifs demeurent l’une des rares classes d’actifs mondiales où fragmentation, réflexivité et inefficiences structurelles coexistent à une échelle significative. L’avantage ne vient pas d’une activité constante, mais d’une compréhension structurelle et d’une exposition sélective.', thesisLink:'LIRE LA THÈSE',
    ctaQuoteA:'La divulgation sélective n’est pas une limite,', ctaQuoteB:'c’est un principe opérationnel délibéré.',
    ctaBody:'LNO ne recherche pas un engagement large. Les demandes émanant de contacts institutionnels qualifiés, de partenaires stratégiques et de professionnels expérimentés sont examinées de façon sélective.'
  },
  firm:{
    title:'La Firme.', lead:'LNO est une firme de trading propriétaire indépendante. Nous déployons notre propre capital sur les marchés d’actifs numériques avec une rigueur institutionnelle.',
    stat1:{value:'100%',label:'Capital Propriétaire'}, stat2:{value:'∞',label:'Horizon Temporel'},
    identityLabel:'IDENTITÉ', identityBody:'LNO opère exclusivement avec du capital interne. Ce n’est pas un fonds. Elle n’accepte pas d’investisseurs externes. Ce n’est pas une activité de produits destinée au public. Notre structure nous permet de nous concentrer entièrement sur la capitalisation du capital sur de longs horizons, sans la pression de lever des actifs, de gérer des attentes externes ou de se conformer aux standards du secteur.',
    notDoLabel:'CE QUE LNO NE FAIT PAS',
    notDo:['Nous ne gérons pas de capital tiers et n’opérons pas comme un hedge fund.','Nous ne proposons ni conseil en investissement, ni abonnements de recherche, ni commentaires de marché.','Nous ne publions pas nos stratégies génératrices d’alpha ni nos données propriétaires.','Nous ne nous adressons pas au grand public.']
  },
  thesis:{
    title:'La structure de marché comme fondation stratégique.', lead:'Nous abordons les marchés comme un système, non comme une succession d’opportunités. La structure d’abord. La précision plutôt que l’activité. La répétabilité plutôt que le bruit.',
    landscapeLabel:'LE CONTEXTE', landscapeBody:'Les cryptoactifs demeurent l’une des rares classes d’actifs mondiales où fragmentation, réflexivité et inefficiences structurelles coexistent à une échelle significative. Ces inefficiences persistent non pas malgré la croissance du marché, mais souvent parallèlement à elle, créées par la nature disparate des plateformes, des régimes réglementaires variés et un mélange unique de participants particuliers et institutionnels.',
    edgeLabel:'D’OÙ VIENT L’AVANTAGE',
    edgeBody1:'L’avantage ne vient pas du bruit, d’une activité constante ou de la prédiction de l’avenir macroéconomique. Il vient d’une compréhension profonde du marché, de la qualité d’exécution, de la discipline de risque et d’une exposition sélective. Nous pensons que l’alpha se dégrade, mais qu’une infrastructure et un processus rigoureux se capitalisent.',
    edgeBody2:'À l’inverse, nous observons que la majorité du capital est détruite par un processus faible, un mauvais calibrage, un positionnement émotionnel et un comportement structurellement indiscipliné. Notre mandat est l’évitement absolu de ces modes de défaillance.'
  },
  contact:{
    title:'Demandes Sélectives.', lead:'LNO ne recherche pas un engagement large. Les demandes émanant d’investisseurs qualifiés, de contacts institutionnels, de partenaires stratégiques et de professionnels expérimentés sont examinées de façon sélective. Les sollicitations d’investissement non sollicitées ne seront pas examinées.',
    directLabel:'CORRESPONDANCE DIRECTE', email:'contact@lno.company',
    emailNote:'Écrivez-nous directement. Merci d’indiquer votre nom, votre affiliation et une description concise de votre demande. Nous répondons de façon sélective et à notre discrétion.'
  },
  footer:{ tagline:'Intelligence propriétaire. Capital discipliné.', firmLabel:'LA FIRME', about:'À propos', thesisLink:'Thèse', connectLabel:'CONTACT', inquiries:'Demandes', linkedin:'LinkedIn', copyright:'© 2026 LNO. Tous droits réservés.', legal:'Mentions légales', cookie:'Politique de cookies' }
},

es: {
  nav:{ home:'INICIO', firm:'LA FIRMA', thesis:'TESIS', contact:'CONTACTO' },
  triad:{ research:'INVESTIGACIÓN', technology:'TECNOLOGÍA', execution:'EJECUCIÓN',
           researchBody:'Inteligencia de mercado sistemática, análisis estructural y generación de señales basada en datos. No adivinamos; medimos, modelamos y realizamos backtesting.',
           technologyBody:'Pila tecnológica fiable, redundante y sensible a la latencia. Invertimos intensamente en tecnología propietaria para garantizar la resiliencia operativa en regímenes volátiles.',
           executionBody:'Entradas y salidas precisas, minimizando la fricción, el slippage y el error conductual. La calidad de ejecución se trata como un componente central del alfa.' },
  home:{
    kicker:'TRADING PROPIETARIO · ACTIVOS DIGITALES',
    title:'FIRMA DE TRADING PROPIETARIO',
    subtitle:'LNO despliega capital interno en los mercados de activos digitales mediante investigación, ejecución estructurada y una rigurosa disciplina de riesgo.',
    cta:'CONSULTAS', scroll:'DESPLAZAR',
    glanceLabel:'LA FIRMA DE UN VISTAZO',
    stats:[{value:'100%',label:'Capital Interno'},{value:'Enfocado',label:'Disciplinado'},{value:'24/7',label:'Mercados Cubiertos'},{value:'∞',label:'Horizonte Temporal'}],
    thesisTitle:'Nuestra Tesis.', thesisBody:'Las criptomonedas siguen siendo una de las pocas clases de activos globales donde la fragmentación, la reflexividad y las ineficiencias estructurales coexisten a gran escala. La ventaja no proviene de la actividad constante, sino de la comprensión estructural y la exposición selectiva.', thesisLink:'LEER LA TESIS',
    ctaQuoteA:'La divulgación selectiva no es una limitación,', ctaQuoteB:'es un principio operativo deliberado.',
    ctaBody:'LNO no busca un compromiso amplio. Las consultas de contactos institucionales calificados, socios estratégicos y profesionales senior se consideran de forma selectiva.'
  },
  firm:{
    title:'La Firma.', lead:'LNO es una firma de trading propietario independiente. Desplegamos nuestro propio capital en los mercados de activos digitales con rigor institucional.',
    stat1:{value:'100%',label:'Capital Propietario'}, stat2:{value:'∞',label:'Horizonte Temporal'},
    identityLabel:'IDENTIDAD', identityBody:'LNO opera exclusivamente con capital interno. No es un fondo. No acepta inversores externos. No es un negocio de producto orientado al público. Nuestra estructura nos permite centrarnos por completo en la capitalización del capital a largo plazo, sin la presión de captar activos, gestionar expectativas externas o ajustarnos a los estándares del sector.',
    notDoLabel:'LO QUE LNO NO HACE',
    notDo:['No gestionamos capital de terceros ni operamos como un hedge fund.','No ofrecemos asesoramiento de inversión, suscripciones de investigación ni comentarios de mercado.','No publicamos nuestras estrategias generadoras de alfa ni nuestros datos propietarios.','No nos promocionamos ante el público minorista.']
  },
  thesis:{
    title:'La estructura del mercado como base estratégica.', lead:'Abordamos los mercados como un sistema, no como una secuencia de oportunidades. Estructura primero. Precisión antes que actividad. Repetibilidad antes que ruido.',
    landscapeLabel:'EL PANORAMA', landscapeBody:'Las criptomonedas siguen siendo una de las pocas clases de activos globales donde la fragmentación, la reflexividad y las ineficiencias estructurales coexisten a gran escala. Estas ineficiencias persisten no a pesar del crecimiento del mercado, sino a menudo junto a él, creadas por la naturaleza dispar de los exchanges, regímenes regulatorios variados y la particular mezcla de participantes minoristas e institucionales.',
    edgeLabel:'ORIGEN DE LA VENTAJA',
    edgeBody1:'La ventaja no proviene del ruido, la actividad constante ni de predecir el futuro macroeconómico. Proviene de una comprensión profunda del mercado, la calidad de ejecución, la disciplina de riesgo y la exposición selectiva. Creemos que el alfa se degrada, pero la infraestructura y el proceso rigurosos se capitalizan.',
    edgeBody2:'A la inversa, observamos que la mayor parte del capital se destruye por procesos débiles, mala calibración, posicionamiento emocional y comportamiento estructuralmente indisciplinado. Nuestro mandato es evitar por completo estos modos de fallo.'
  },
  contact:{
    title:'Consultas Selectivas.', lead:'LNO no busca un compromiso amplio. Las consultas de inversores calificados, contactos institucionales, socios estratégicos y profesionales senior se consideran de forma selectiva. Las solicitudes de inversión no requeridas no serán revisadas.',
    directLabel:'CORRESPONDENCIA DIRECTA', email:'contact@lno.company',
    emailNote:'Escríbanos directamente. Incluya su nombre, afiliación y una descripción concisa de su consulta. Respondemos de forma selectiva y a nuestra discreción.'
  },
  footer:{ tagline:'Inteligencia propietaria. Capital disciplinado.', firmLabel:'LA FIRMA', about:'Acerca de', thesisLink:'Tesis', connectLabel:'CONTACTO', inquiries:'Consultas', linkedin:'LinkedIn', copyright:'© 2026 LNO. Todos los derechos reservados.', legal:'Aviso Legal', cookie:'Política de Cookies' }
},

de: {
  nav:{ home:'START', firm:'DIE FIRMA', thesis:'THESE', contact:'KONTAKT' },
  triad:{ research:'RESEARCH', technology:'TECHNOLOGIE', execution:'AUSFÜHRUNG',
           researchBody:'Systematische Marktintelligenz, strukturelle Analyse und datengetriebene Signalgenerierung. Wir raten nicht; wir messen, modellieren und backtesten.',
           technologyBody:'Zuverlässiger, redundanter, latenzbewusster technischer Stack. Wir investieren stark in unsere proprietäre Technologie, um operative Resilienz auch in volatilen Phasen sicherzustellen.',
           executionBody:'Präziser Ein- und Ausstieg, Minimierung von Friktion, Slippage und Verhaltensfehlern. Ausführungsqualität wird als Kernkomponente des Alphas behandelt.' },
  home:{
    kicker:'PROPRIETÄRER HANDEL · DIGITALE VERMÖGENSWERTE',
    title:'EIGENHANDELSUNTERNEHMEN',
    subtitle:'LNO setzt internes Kapital an den Märkten für digitale Vermögenswerte ein, durch Forschung, strukturierte Ausführung und konsequente Risikodisziplin.',
    cta:'ANFRAGEN', scroll:'SCROLLEN',
    glanceLabel:'DIE FIRMA AUF EINEN BLICK',
    stats:[{value:'100%',label:'Internes Kapital'},{value:'Fokussiert',label:'Diszipliniert'},{value:'24/7',label:'Abgedeckte Märkte'},{value:'∞',label:'Zeithorizont'}],
    thesisTitle:'Unsere These.', thesisBody:'Krypto bleibt eine der wenigen globalen Anlageklassen, in denen Fragmentierung, Reflexivität und strukturelle Ineffizienzen in bedeutendem Ausmaß nebeneinander bestehen. Vorteile entstehen nicht durch ständige Aktivität, sondern durch strukturelles Verständnis und selektives Engagement.', thesisLink:'THESE LESEN',
    ctaQuoteA:'Selektive Offenlegung ist keine Einschränkung,', ctaQuoteB:'sie ist ein bewusstes Betriebsprinzip.',
    ctaBody:'LNO strebt kein breites Engagement an. Anfragen von qualifizierten institutionellen Kontakten, strategischen Partnern und erfahrenen Fachleuten werden selektiv geprüft.'
  },
  firm:{
    title:'Die Firma.', lead:'LNO ist eine unabhängige proprietäre Handelsfirma. Wir setzen unser eigenes Kapital mit institutioneller Sorgfalt an den Märkten für digitale Vermögenswerte ein.',
    stat1:{value:'100%',label:'Eigenkapital'}, stat2:{value:'∞',label:'Zeithorizont'},
    identityLabel:'IDENTITÄT', identityBody:'LNO arbeitet ausschließlich mit internem Kapital. Es ist kein Fonds. Es akzeptiert keine externen Investoren. Es ist kein öffentlich ausgerichtetes Produktgeschäft. Unsere Struktur erlaubt es uns, uns vollständig auf die Kapitalvermehrung über lange Zeithorizonte zu konzentrieren, ohne den Druck, Kapital einzuwerben, externe Erwartungen zu managen oder branchenübliche Benchmarks zu erfüllen.',
    notDoLabel:'WAS LNO NICHT TUT',
    notDo:['Wir verwalten kein Fremdkapital und agieren nicht als Hedgefonds.','Wir bieten keine Anlageberatung, Research-Abonnements oder Marktkommentare an.','Wir veröffentlichen weder unsere alpha-generierenden Strategien noch proprietäre Daten.','Wir vermarkten uns nicht an die breite Öffentlichkeit.']
  },
  thesis:{
    title:'Marktstruktur als strategisches Fundament.', lead:'Wir betrachten Märkte als System, nicht als eine Abfolge von Gelegenheiten. Struktur zuerst. Präzision vor Aktivität. Wiederholbarkeit vor Lärm.',
    landscapeLabel:'DAS UMFELD', landscapeBody:'Krypto bleibt eine der wenigen globalen Anlageklassen, in denen Fragmentierung, Reflexivität und strukturelle Ineffizienzen in bedeutendem Ausmaß nebeneinander bestehen. Diese Ineffizienzen bestehen nicht trotz, sondern oft neben dem Marktwachstum fort, bedingt durch die uneinheitliche Natur der Börsen, unterschiedliche regulatorische Regime und die besondere Mischung aus Privat- und institutionellen Teilnehmern.',
    edgeLabel:'URSPRUNG DES VORTEILS',
    edgeBody1:'Der Vorteil entsteht nicht durch Lärm, ständige Aktivität oder das Vorhersagen makroökonomischer Entwicklungen. Er entsteht durch tiefes Marktverständnis, Ausführungsqualität, Risikodisziplin und selektives Engagement. Wir glauben, dass Alpha verfällt, während rigorose Infrastruktur und Prozesse sich vermehren.',
    edgeBody2:'Umgekehrt beobachten wir, dass der Großteil des Kapitals durch schwache Prozesse, mangelhafte Kalibrierung, emotionales Verhalten und strukturell undiszipliniertes Handeln vernichtet wird. Unser Auftrag ist die konsequente Vermeidung dieser Fehlermodi.'
  },
  contact:{
    title:'Selektive Anfragen.', lead:'LNO strebt kein breites Engagement an. Anfragen von qualifizierten Investoren, institutionellen Kontakten, strategischen Partnern und erfahrenen Fachleuten werden selektiv geprüft. Unaufgeforderte Anlageangebote werden nicht bearbeitet.',
    directLabel:'DIREKTE KORRESPONDENZ', email:'contact@lno.company',
    emailNote:'Schreiben Sie uns direkt. Bitte geben Sie Ihren Namen, Ihre Zugehörigkeit und eine kurze Beschreibung Ihres Anliegens an. Wir antworten selektiv und nach eigenem Ermessen.'
  },
  footer:{ tagline:'Proprietäre Intelligenz. Diszipliniertes Kapital.', firmLabel:'DIE FIRMA', about:'Über uns', thesisLink:'These', connectLabel:'KONTAKT', inquiries:'Anfragen', linkedin:'LinkedIn', copyright:'© 2026 LNO. Alle Rechte vorbehalten.', legal:'Rechtliches', cookie:'Cookie-Richtlinie' }
}
};

/* ===== RIBBON TEXT ===== */
const RIBBON = {
  en:'STRUCTURE FIRST ◆ PRECISION OVER ACTIVITY ◆ REPEATABILITY OVER NOISE ◆ CAPITAL PRESERVATION ◆ SELECTIVE DISCLOSURE ◆ LONG-TERM COMPOUNDING ◆ RESEARCH-LED CONVICTION ◆ OPERATIONAL RESILIENCE ◆ ',
  fr:'LA STRUCTURE D’ABORD ◆ LA PRÉCISION PLUTÔT QUE L’ACTIVITÉ ◆ LA RÉPÉTABILITÉ PLUTÔT QUE LE BRUIT ◆ PRÉSERVATION DU CAPITAL ◆ DIVULGATION SÉLECTIVE ◆ CAPITALISATION À LONG TERME ◆ CONVICTION FONDÉE SUR LA RECHERCHE ◆ RÉSILIENCE OPÉRATIONNELLE ◆ ',
  es:'ESTRUCTURA PRIMERO ◆ PRECISIÓN ANTES QUE ACTIVIDAD ◆ REPETIBILIDAD ANTES QUE RUIDO ◆ PRESERVACIÓN DEL CAPITAL ◆ DIVULGACIÓN SELECTIVA ◆ CAPITALIZACIÓN A LARGO PLAZO ◆ CONVICCIÓN BASADA EN INVESTIGACIÓN ◆ RESILIENCIA OPERATIVA ◆ ',
  de:'STRUKTUR ZUERST ◆ PRÄZISION VOR AKTIVITÄT ◆ WIEDERHOLBARKEIT VOR LÄRM ◆ KAPITALERHALT ◆ SELEKTIVE OFFENLEGUNG ◆ LANGFRISTIGE KAPITALVERMEHRUNG ◆ FORSCHUNGSGELEITETE ÜBERZEUGUNG ◆ OPERATIVE RESILIENZ ◆ '
};

/* ===== LANG DETECTION ===== */
const LANGS = ['en','fr','es','de'];
function detectLang() {
  try { const s = localStorage.getItem('lno-lang'); if (s && LANGS.includes(s)) return s; } catch(e){}
  const codes = (navigator.languages || [navigator.language || 'en']).map(l => l.slice(0,2).toLowerCase());
  return codes.find(c => LANGS.includes(c)) || 'en';
}

/* ===== DOT-PATH GETTER ===== */
function get(obj, path) { return path.split('.').reduce((o,k) => o?.[k], obj); }

/* ===== APPLY LANGUAGE ===== */
function applyLang(lang) {
  try { localStorage.setItem('lno-lang', lang); } catch(e){}
  document.documentElement.lang = lang;
  const C = CONTENT[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = get(C, el.dataset.i18n);
    if (v !== undefined) el.textContent = v;
  });

  const ribbon = document.querySelector('[data-ribbon]');
  if (ribbon) {
    const t = RIBBON[lang];
    ribbon.innerHTML = '<span class="marquee__text">'+t+'</span><span class="marquee__text">'+t+'</span>';
  }

  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.classList.toggle('nav__lang-btn--active', btn.dataset.langBtn === lang);
  });
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded', () => {
  applyLang(detectLang());

  document.querySelectorAll('[data-lang-btn]').forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.langBtn));
  });

  const ham = document.getElementById('hamburger');
  const navRight = document.getElementById('navRight');
  if (ham && navRight) {
    ham.addEventListener('click', () => {
      const open = ham.getAttribute('aria-expanded') === 'true';
      ham.setAttribute('aria-expanded', String(!open));
      navRight.classList.toggle('nav--open', !open);
    });
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});
