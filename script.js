'use strict';

/* ===== CONTENT DICTIONARY ===== */
const CONTENT = {
en: {
  nav: { home:'HOME', firm:'THE FIRM', thesis:'THESIS', approach:'APPROACH', contact:'CONTACT' },
  home: {
    kicker:'PROPRIETARY TRADING · DIGITAL ASSETS',
    titleA:'Proprietary intelligence.', titleB:'Disciplined capital.',
    subtitle:'LNO deploys internal capital across digital asset markets through research, structured execution, and rigorous risk discipline.',
    cta:'INQUIRIES', scroll:'SCROLL',
    glanceLabel:'FIRM AT A GLANCE',
    stats:[{value:'100%',label:'Internal Capital'},{value:'Focused',label:'Disciplined'},{value:'24/7',label:'Markets Covered'},{value:'∞',label:'Time Horizon'}],
    principles:[
      {num:'01',title:'Internal Capital',body:'We operate exclusively with our own balance sheet. We do not manage third-party funds, accept external investors, or design products for public consumption. Our structural independence guarantees strategic alignment.'},
      {num:'02',title:'Research-Led',body:'Conviction stems from profound structural understanding. We invest heavily in systems, data, and analytical frameworks to decode market mechanics before deploying capital.'},
      {num:'03',title:'Execution Discipline',body:'Strategy without precision is intellectual exercise. Our edge is realized through meticulous trade structuring, latency optimization, and unemotional risk management.'},
      {num:'04',title:'Confidentiality',body:'We consider information control a strategic imperative. We do not publish our strategies, market our successes, or participate in the broader industry noise cycle.'}
    ],
    thesisTitle:'Our Thesis.', thesisBody:'Crypto remains one of the few global asset classes where fragmentation, reflexivity, and structural inefficiencies coexist at meaningful scale. Edge does not come from constant activity, but from structural understanding and selective exposure.', thesisLink:'READ THESIS',
    approachTitle:'Our Approach.', approachBody:'We approach markets as a system — not as a sequence of isolated opportunities. Structure first. Precision over activity. Repeatability over noise. Our operating model rests on defined, bounded strategic frameworks.', approachLink:'VIEW OPERATING MODEL',
    ctaQuoteA:'Selective disclosure is not a limitation —', ctaQuoteB:'it is a deliberate operating principle.',
    ctaBody:'LNO does not seek broad engagement. Inquiries from qualified institutional contacts, strategic partners, and senior professionals are considered selectively.'
  },
  firm: {
    title:'The Firm.', lead:'LNO is an independent proprietary trading firm. We deploy our own capital into digital asset markets with institutional rigor.',
    stat1:{value:'100%',label:'Proprietary Capital'}, stat2:{value:'∞',label:'Time Horizon'},
    identityLabel:'IDENTITY', identityBody:'LNO operates exclusively with internal capital. It is not a fund. It does not accept external investors. It is not a public-facing product business. Our structure allows us to focus entirely on compounding capital over long time horizons without the pressure of raising assets, managing external expectations, or conforming to standard industry benchmarking.',
    principlesLabel:'CORE PRINCIPLES',
    principles:[
      {title:'Independence',body:'Complete control over our balance sheet and strategic direction without external LP mandates.'},
      {title:'Research Depth',body:'We build deep structural understanding before committing capital to any market or strategy.'},
      {title:'Execution Discipline',body:'Strategy is irrelevant without rigorous, risk-managed, and technologically superior execution.'},
      {title:'Long-Term Orientation',body:'We optimize for compounding over years, surviving cycles rather than maximizing short-term yield at the expense of ruin risk.'}
    ],
    notDoLabel:'WHAT LNO DOES NOT DO',
    notDo:['— We do not manage third-party capital or operate as a hedge fund.','— We do not offer investment advice, research subscriptions, or market commentary.','— We do not publish our alpha-generating strategies or proprietary data.','— We do not market ourselves to the retail public.']
  },
  thesis: {
    title:'Market structure as strategic foundation.', lead:'We approach markets as a system — not as a sequence of opportunities. Structure first. Precision over activity. Repeatability over noise.',
    landscapeLabel:'THE LANDSCAPE', landscapeBody:'Crypto remains one of the few global asset classes where fragmentation, reflexivity, and structural inefficiencies coexist at meaningful scale. These inefficiencies persist not despite market growth, but often alongside it, created by the disparate nature of exchanges, varied regulatory regimes, and the unique retail-to-institutional participant mix.',
    inefficienciesLabel:'PERSISTENT INEFFICIENCIES',
    inefficiencies:[
      {title:'Fragmented Liquidity',body:'Capital is distributed across dozens of venues with varying risk profiles, creating constant pricing dislocations and funding rate imbalances.'},
      {title:'Uneven Information Processing',body:'The speed and accuracy with which different market participants digest on-chain and off-chain data varies dramatically, creating structural lag.'},
      {title:'Behavioral Dislocations',body:'Extreme leverage combined with emotional retail positioning regularly causes forced liquidations and predictable market overreactions.'}
    ],
    edgeLabel:'WHERE EDGE ORIGINATES',
    edgeBody1:'Edge does not come from noise, constant activity, or predicting the macroeconomic future. It comes from deep market understanding, execution quality, risk discipline, and selective exposure. We believe that alpha decays, but rigorous infrastructure and process compound.',
    edgeBody2:'Conversely, we observe that most capital is destroyed by weak process, poor calibration, emotional positioning, and structurally undisciplined behavior. Our mandate is the absolute avoidance of these failure modes.'
  },
  approach: {
    title:'A disciplined operating model.', lead:'We separate intellectual ideation from the mechanics of execution. Our approach breaks down the trading lifecycle into distinct, highly optimized pillars.',
    pillars:[
      {num:'01',title:'Research',body:'Systematic market intelligence, structural analysis, and data-driven signal generation. We do not guess; we measure, model, and backtest.'},
      {num:'02',title:'Strategy Design',body:'Translating research into defined, bounded strategic frameworks. Every strategy has clear invalidation criteria and mathematically defined risk profiles.'},
      {num:'03',title:'Execution',body:'Precise entry and exit, minimizing friction, slippage, and behavioral error. Execution quality is treated as a core component of alpha.'},
      {num:'04',title:'Risk Management',body:'Strict position sizing, exposure limits, drawdown controls, and extreme scenario planning. Capital preservation is prioritized above all else.'},
      {num:'05',title:'Infrastructure',body:'Reliable, redundant, latency-aware technical stack. We invest heavily in our proprietary technology to ensure operational resilience in volatile regimes.'},
      {num:'06',title:'Continuous Refinement',body:'Systematic review, adaptation, and disciplined learning cycles. Markets adapt; therefore, our edge must be continuously recalibrated.'}
    ]
  },
  contact: {
    title:'Selective Inquiries.', lead:'LNO does not seek broad engagement. Inquiries from qualified investors, institutional contacts, strategic partners, and senior professionals are considered selectively. Unsolicited investment solicitations will not be reviewed.',
    directLabel:'DIRECT CORRESPONDENCE', email:'contact@lno.company',
    emailNote:'Write to us directly. Please include your name, affiliation, and a concise description of your inquiry. We respond selectively and at our discretion.'
  },
  footer:{ tagline:'Proprietary intelligence. Disciplined capital.', firmLabel:'THE FIRM', about:'About', thesisLink:'Thesis', approachLink:'Approach', connectLabel:'CONNECT', inquiries:'Inquiries', linkedin:'LinkedIn', copyright:'© 2026 LNO. All rights reserved.', legal:'Legal & Disclaimers', cookie:'Cookie Policy' }
},

fr: {
  nav:{ home:'ACCUEIL', firm:'LA FIRME', thesis:'THÈSE', approach:'APPROCHE', contact:'CONTACT' },
  home:{
    kicker:'TRADING PROPRIÉTAIRE · ACTIFS NUMÉRIQUES',
    titleA:'Intelligence propriétaire.', titleB:'Capital discipliné.',
    subtitle:'LNO déploie du capital interne sur les marchés d’actifs numériques grâce à la recherche, une exécution structurée et une discipline de risque rigoureuse.',
    cta:'DEMANDES', scroll:'DÉFILER',
    glanceLabel:'LA FIRME EN UN COUP D’ŒIL',
    stats:[{value:'100%',label:'Capital Interne'},{value:'Focalisé',label:'Discipliné'},{value:'24/7',label:'Marchés Couverts'},{value:'∞',label:'Horizon Temporel'}],
    principles:[
      {num:'01',title:'Capital Interne',body:'Nous opérons exclusivement avec notre propre bilan. Nous ne gérons pas de fonds tiers, n’acceptons pas d’investisseurs externes et ne concevons pas de produits destinés au grand public. Notre indépendance structurelle garantit un alignement stratégique total.'},
      {num:'02',title:'Pilotée par la Recherche',body:'La conviction naît d’une compréhension structurelle profonde. Nous investissons massivement dans les systèmes, les données et les cadres analytiques pour décoder les mécanismes de marché avant de déployer du capital.'},
      {num:'03',title:'Discipline d’Exécution',body:'Une stratégie sans précision reste un exercice intellectuel. Notre avantage se concrétise par une structuration méticuleuse des transactions, une optimisation de la latence et une gestion du risque sans émotion.'},
      {num:'04',title:'Confidentialité',body:'Nous considérons le contrôle de l’information comme un impératif stratégique. Nous ne publions pas nos stratégies, ne communiquons pas sur nos succès et ne participons pas au bruit ambiant du secteur.'}
    ],
    thesisTitle:'Notre Thèse.', thesisBody:'Les cryptoactifs demeurent l’une des rares classes d’actifs mondiales où fragmentation, réflexivité et inefficiences structurelles coexistent à une échelle significative. L’avantage ne vient pas d’une activité constante, mais d’une compréhension structurelle et d’une exposition sélective.', thesisLink:'LIRE LA THÈSE',
    approachTitle:'Notre Approche.', approachBody:'Nous abordons les marchés comme un système — non comme une succession d’opportunités isolées. La structure d’abord. La précision plutôt que l’activité. La répétabilité plutôt que le bruit. Notre modèle opérationnel repose sur des cadres stratégiques définis et bornés.', approachLink:'VOIR LE MODÈLE OPÉRATIONNEL',
    ctaQuoteA:'La divulgation sélective n’est pas une limite —', ctaQuoteB:'c’est un principe opérationnel délibéré.',
    ctaBody:'LNO ne recherche pas un engagement large. Les demandes émanant de contacts institutionnels qualifiés, de partenaires stratégiques et de professionnels expérimentés sont examinées de façon sélective.'
  },
  firm:{
    title:'La Firme.', lead:'LNO est une firme de trading propriétaire indépendante. Nous déployons notre propre capital sur les marchés d’actifs numériques avec une rigueur institutionnelle.',
    stat1:{value:'100%',label:'Capital Propriétaire'}, stat2:{value:'∞',label:'Horizon Temporel'},
    identityLabel:'IDENTITÉ', identityBody:'LNO opère exclusivement avec du capital interne. Ce n’est pas un fonds. Elle n’accepte pas d’investisseurs externes. Ce n’est pas une activité de produits destinée au public. Notre structure nous permet de nous concentrer entièrement sur la capitalisation du capital sur de longs horizons, sans la pression de lever des actifs, de gérer des attentes externes ou de se conformer aux standards du secteur.',
    principlesLabel:'PRINCIPES FONDAMENTAUX',
    principles:[
      {title:'Indépendance',body:'Contrôle total de notre bilan et de notre direction stratégique, sans mandat de LP externe.'},
      {title:'Profondeur de Recherche',body:'Nous construisons une compréhension structurelle approfondie avant d’engager du capital sur un marché ou une stratégie.'},
      {title:'Discipline d’Exécution',body:'La stratégie est sans effet sans une exécution rigoureuse, maîtrisée sur le plan du risque et technologiquement supérieure.'},
      {title:'Orientation Long Terme',body:'Nous optimisons pour la capitalisation sur plusieurs années, en traversant les cycles plutôt qu’en maximisant le rendement à court terme au prix d’un risque de ruine.'}
    ],
    notDoLabel:'CE QUE LNO NE FAIT PAS',
    notDo:['— Nous ne gérons pas de capital tiers et n’opérons pas comme un hedge fund.','— Nous ne proposons ni conseil en investissement, ni abonnements de recherche, ni commentaires de marché.','— Nous ne publions pas nos stratégies génératrices d’alpha ni nos données propriétaires.','— Nous ne nous adressons pas au grand public.']
  },
  thesis:{
    title:'La structure de marché comme fondation stratégique.', lead:'Nous abordons les marchés comme un système — non comme une succession d’opportunités. La structure d’abord. La précision plutôt que l’activité. La répétabilité plutôt que le bruit.',
    landscapeLabel:'LE CONTEXTE', landscapeBody:'Les cryptoactifs demeurent l’une des rares classes d’actifs mondiales où fragmentation, réflexivité et inefficiences structurelles coexistent à une échelle significative. Ces inefficiences persistent non pas malgré la croissance du marché, mais souvent parallèlement à elle, créées par la nature disparate des plateformes, des régimes réglementaires variés et un mélange unique de participants particuliers et institutionnels.',
    inefficienciesLabel:'INEFFICIENCES PERSISTANTES',
    inefficiencies:[
      {title:'Liquidité Fragmentée',body:'Le capital est réparti sur des dizaines de plateformes aux profils de risque variés, créant des dislocations de prix constantes et des déséquilibres de taux de financement.'},
      {title:'Traitement Inégal de l’Information',body:'La vitesse et la précision avec lesquelles les différents participants digèrent les données on-chain et off-chain varient fortement, créant un décalage structurel.'},
      {title:'Dislocations Comportementales',body:'Un effet de levier extrême combiné à un positionnement particulier émotionnel provoque régulièrement des liquidations forcées et des réactions de marché prévisibles.'}
    ],
    edgeLabel:'D’OÙ VIENT L’AVANTAGE',
    edgeBody1:'L’avantage ne vient pas du bruit, d’une activité constante ou de la prédiction de l’avenir macroéconomique. Il vient d’une compréhension profonde du marché, de la qualité d’exécution, de la discipline de risque et d’une exposition sélective. Nous pensons que l’alpha se dégrade, mais qu’une infrastructure et un processus rigoureux se capitalisent.',
    edgeBody2:'À l’inverse, nous observons que la majorité du capital est détruite par un processus faible, un mauvais calibrage, un positionnement émotionnel et un comportement structurellement indiscipliné. Notre mandat est l’évitement absolu de ces modes de défaillance.'
  },
  approach:{
    title:'Un modèle opérationnel discipliné.', lead:'Nous séparons l’idéation intellectuelle de la mécanique d’exécution. Notre approche décompose le cycle de trading en piliers distincts et hautement optimisés.',
    pillars:[
      {num:'01',title:'Recherche',body:'Intelligence de marché systématique, analyse structurelle et génération de signaux fondée sur les données. Nous ne devinons pas ; nous mesurons, modélisons et testons.'},
      {num:'02',title:'Conception Stratégique',body:'Traduire la recherche en cadres stratégiques définis et bornés. Chaque stratégie dispose de critères d’invalidation clairs et de profils de risque définis mathématiquement.'},
      {num:'03',title:'Exécution',body:'Entrées et sorties précises, minimisant la friction, le slippage et l’erreur comportementale. La qualité d’exécution est traitée comme une composante essentielle de l’alpha.'},
      {num:'04',title:'Gestion du Risque',body:'Dimensionnement strict des positions, limites d’exposition, contrôles de drawdown et planification de scénarios extrêmes. La préservation du capital prime sur tout le reste.'},
      {num:'05',title:'Infrastructure',body:'Pile technique fiable, redondante et sensible à la latence. Nous investissons massivement dans notre technologie propriétaire pour garantir une résilience opérationnelle en régime volatil.'},
      {num:'06',title:'Amélioration Continue',body:'Revue systématique, adaptation et cycles d’apprentissage disciplinés. Les marchés évoluent ; notre avantage doit donc être recalibré en continu.'}
    ]
  },
  contact:{
    title:'Demandes Sélectives.', lead:'LNO ne recherche pas un engagement large. Les demandes émanant d’investisseurs qualifiés, de contacts institutionnels, de partenaires stratégiques et de professionnels expérimentés sont examinées de façon sélective. Les sollicitations d’investissement non sollicitées ne seront pas examinées.',
    directLabel:'CORRESPONDANCE DIRECTE', email:'contact@lno.company',
    emailNote:'Écrivez-nous directement. Merci d’indiquer votre nom, votre affiliation et une description concise de votre demande. Nous répondons de façon sélective et à notre discrétion.'
  },
  footer:{ tagline:'Intelligence propriétaire. Capital discipliné.', firmLabel:'LA FIRME', about:'À propos', thesisLink:'Thèse', approachLink:'Approche', connectLabel:'CONTACT', inquiries:'Demandes', linkedin:'LinkedIn', copyright:'© 2026 LNO. Tous droits réservés.', legal:'Mentions légales', cookie:'Politique de cookies' }
},

es: {
  nav:{ home:'INICIO', firm:'LA FIRMA', thesis:'TESIS', approach:'ENFOQUE', contact:'CONTACTO' },
  home:{
    kicker:'TRADING PROPIETARIO · ACTIVOS DIGITALES',
    titleA:'Inteligencia propietaria.', titleB:'Capital disciplinado.',
    subtitle:'LNO despliega capital interno en los mercados de activos digitales mediante investigación, ejecución estructurada y una rigurosa disciplina de riesgo.',
    cta:'CONSULTAS', scroll:'DESPLAZAR',
    glanceLabel:'LA FIRMA DE UN VISTAZO',
    stats:[{value:'100%',label:'Capital Interno'},{value:'Enfocado',label:'Disciplinado'},{value:'24/7',label:'Mercados Cubiertos'},{value:'∞',label:'Horizonte Temporal'}],
    principles:[
      {num:'01',title:'Capital Interno',body:'Operamos exclusivamente con nuestro propio balance. No gestionamos fondos de terceros, no aceptamos inversores externos ni diseñamos productos para el público. Nuestra independencia estructural garantiza la alineación estratégica.'},
      {num:'02',title:'Impulsado por la Investigación',body:'La convicción surge de una comprensión estructural profunda. Invertimos intensamente en sistemas, datos y marcos analíticos para descifrar la mecánica del mercado antes de desplegar capital.'},
      {num:'03',title:'Disciplina de Ejecución',body:'Una estrategia sin precisión es solo un ejercicio intelectual. Nuestra ventaja se materializa mediante una estructuración meticulosa de operaciones, optimización de la latencia y una gestión de riesgo sin emociones.'},
      {num:'04',title:'Confidencialidad',body:'Consideramos el control de la información un imperativo estratégico. No publicamos nuestras estrategias, no promocionamos nuestros éxitos ni participamos en el ruido general del sector.'}
    ],
    thesisTitle:'Nuestra Tesis.', thesisBody:'Las criptomonedas siguen siendo una de las pocas clases de activos globales donde la fragmentación, la reflexividad y las ineficiencias estructurales coexisten a gran escala. La ventaja no proviene de la actividad constante, sino de la comprensión estructural y la exposición selectiva.', thesisLink:'LEER LA TESIS',
    approachTitle:'Nuestro Enfoque.', approachBody:'Abordamos los mercados como un sistema, no como una secuencia de oportunidades aisladas. Estructura primero. Precisión antes que actividad. Repetibilidad antes que ruido. Nuestro modelo operativo se basa en marcos estratégicos definidos y acotados.', approachLink:'VER MODELO OPERATIVO',
    ctaQuoteA:'La divulgación selectiva no es una limitación —', ctaQuoteB:'es un principio operativo deliberado.',
    ctaBody:'LNO no busca un compromiso amplio. Las consultas de contactos institucionales calificados, socios estratégicos y profesionales senior se consideran de forma selectiva.'
  },
  firm:{
    title:'La Firma.', lead:'LNO es una firma de trading propietario independiente. Desplegamos nuestro propio capital en los mercados de activos digitales con rigor institucional.',
    stat1:{value:'100%',label:'Capital Propietario'}, stat2:{value:'∞',label:'Horizonte Temporal'},
    identityLabel:'IDENTIDAD', identityBody:'LNO opera exclusivamente con capital interno. No es un fondo. No acepta inversores externos. No es un negocio de producto orientado al público. Nuestra estructura nos permite centrarnos por completo en la capitalización del capital a largo plazo, sin la presión de captar activos, gestionar expectativas externas o ajustarnos a los estándares del sector.',
    principlesLabel:'PRINCIPIOS FUNDAMENTALES',
    principles:[
      {title:'Independencia',body:'Control total sobre nuestro balance y dirección estratégica, sin mandatos de LP externos.'},
      {title:'Profundidad de Investigación',body:'Construimos una comprensión estructural profunda antes de comprometer capital en cualquier mercado o estrategia.'},
      {title:'Disciplina de Ejecución',body:'La estrategia carece de sentido sin una ejecución rigurosa, gestionada en riesgo y tecnológicamente superior.'},
      {title:'Orientación a Largo Plazo',body:'Optimizamos para la capitalización a lo largo de los años, sobreviviendo a los ciclos en lugar de maximizar el rendimiento a corto plazo a costa del riesgo de ruina.'}
    ],
    notDoLabel:'LO QUE LNO NO HACE',
    notDo:['— No gestionamos capital de terceros ni operamos como un hedge fund.','— No ofrecemos asesoramiento de inversión, suscripciones de investigación ni comentarios de mercado.','— No publicamos nuestras estrategias generadoras de alfa ni nuestros datos propietarios.','— No nos promocionamos ante el público minorista.']
  },
  thesis:{
    title:'La estructura del mercado como base estratégica.', lead:'Abordamos los mercados como un sistema, no como una secuencia de oportunidades. Estructura primero. Precisión antes que actividad. Repetibilidad antes que ruido.',
    landscapeLabel:'EL PANORAMA', landscapeBody:'Las criptomonedas siguen siendo una de las pocas clases de activos globales donde la fragmentación, la reflexividad y las ineficiencias estructurales coexisten a gran escala. Estas ineficiencias persisten no a pesar del crecimiento del mercado, sino a menudo junto a él, creadas por la naturaleza dispar de los exchanges, regímenes regulatorios variados y la particular mezcla de participantes minoristas e institucionales.',
    inefficienciesLabel:'INEFICIENCIAS PERSISTENTES',
    inefficiencies:[
      {title:'Liquidez Fragmentada',body:'El capital se distribuye entre docenas de plataformas con perfiles de riesgo variables, generando dislocaciones de precios constantes y desequilibrios en las tasas de financiación.'},
      {title:'Procesamiento Desigual de la Información',body:'La velocidad y precisión con que los distintos participantes del mercado digieren datos on-chain y off-chain varía drásticamente, generando un rezago estructural.'},
      {title:'Dislocaciones Conductuales',body:'El apalancamiento extremo combinado con el posicionamiento emocional minorista provoca regularmente liquidaciones forzadas y reacciones de mercado predecibles.'}
    ],
    edgeLabel:'ORIGEN DE LA VENTAJA',
    edgeBody1:'La ventaja no proviene del ruido, la actividad constante ni de predecir el futuro macroeconómico. Proviene de una comprensión profunda del mercado, la calidad de ejecución, la disciplina de riesgo y la exposición selectiva. Creemos que el alfa se degrada, pero la infraestructura y el proceso rigurosos se capitalizan.',
    edgeBody2:'A la inversa, observamos que la mayor parte del capital se destruye por procesos débiles, mala calibración, posicionamiento emocional y comportamiento estructuralmente indisciplinado. Nuestro mandato es evitar por completo estos modos de fallo.'
  },
  approach:{
    title:'Un modelo operativo disciplinado.', lead:'Separamos la ideación intelectual de la mecánica de ejecución. Nuestro enfoque descompone el ciclo de trading en pilares distintos y altamente optimizados.',
    pillars:[
      {num:'01',title:'Investigación',body:'Inteligencia de mercado sistemática, análisis estructural y generación de señales basada en datos. No adivinamos; medimos, modelamos y realizamos backtesting.'},
      {num:'02',title:'Diseño de Estrategia',body:'Traducir la investigación en marcos estratégicos definidos y acotados. Cada estrategia tiene criterios de invalidación claros y perfiles de riesgo definidos matemáticamente.'},
      {num:'03',title:'Ejecución',body:'Entradas y salidas precisas, minimizando la fricción, el slippage y el error conductual. La calidad de ejecución se trata como un componente central del alfa.'},
      {num:'04',title:'Gestión de Riesgo',body:'Dimensionamiento estricto de posiciones, límites de exposición, controles de drawdown y planificación de escenarios extremos. La preservación del capital tiene prioridad absoluta.'},
      {num:'05',title:'Infraestructura',body:'Pila tecnológica fiable, redundante y sensible a la latencia. Invertimos intensamente en tecnología propietaria para garantizar la resiliencia operativa en regímenes volátiles.'},
      {num:'06',title:'Refinamiento Continuo',body:'Revisión sistemática, adaptación y ciclos de aprendizaje disciplinados. Los mercados se adaptan; por ello, nuestra ventaja debe recalibrarse continuamente.'}
    ]
  },
  contact:{
    title:'Consultas Selectivas.', lead:'LNO no busca un compromiso amplio. Las consultas de inversores calificados, contactos institucionales, socios estratégicos y profesionales senior se consideran de forma selectiva. Las solicitudes de inversión no requeridas no serán revisadas.',
    directLabel:'CORRESPONDENCIA DIRECTA', email:'contact@lno.company',
    emailNote:'Escríbanos directamente. Incluya su nombre, afiliación y una descripción concisa de su consulta. Respondemos de forma selectiva y a nuestra discreción.'
  },
  footer:{ tagline:'Inteligencia propietaria. Capital disciplinado.', firmLabel:'LA FIRMA', about:'Acerca de', thesisLink:'Tesis', approachLink:'Enfoque', connectLabel:'CONTACTO', inquiries:'Consultas', linkedin:'LinkedIn', copyright:'© 2026 LNO. Todos los derechos reservados.', legal:'Aviso Legal', cookie:'Política de Cookies' }
},

de: {
  nav:{ home:'START', firm:'DIE FIRMA', thesis:'THESE', approach:'ANSATZ', contact:'KONTAKT' },
  home:{
    kicker:'PROPRIETÄRER HANDEL · DIGITALE VERMÖGENSWERTE',
    titleA:'Proprietäre Intelligenz.', titleB:'Diszipliniertes Kapital.',
    subtitle:'LNO setzt internes Kapital an den Märkten für digitale Vermögenswerte ein – durch Forschung, strukturierte Ausführung und konsequente Risikodisziplin.',
    cta:'ANFRAGEN', scroll:'SCROLLEN',
    glanceLabel:'DIE FIRMA AUF EINEN BLICK',
    stats:[{value:'100%',label:'Internes Kapital'},{value:'Fokussiert',label:'Diszipliniert'},{value:'24/7',label:'Abgedeckte Märkte'},{value:'∞',label:'Zeithorizont'}],
    principles:[
      {num:'01',title:'Internes Kapital',body:'Wir arbeiten ausschließlich mit unserer eigenen Bilanz. Wir verwalten keine Fremdgelder, akzeptieren keine externen Investoren und entwickeln keine Produkte für die Öffentlichkeit. Unsere strukturelle Unabhängigkeit sichert die strategische Ausrichtung.'},
      {num:'02',title:'Forschungsgetrieben',body:'Überzeugung entsteht aus tiefem strukturellem Verständnis. Wir investieren stark in Systeme, Daten und analytische Rahmenwerke, um Marktmechanismen zu entschlüsseln, bevor Kapital eingesetzt wird.'},
      {num:'03',title:'Ausführungsdisziplin',body:'Strategie ohne Präzision ist bloße Theorie. Unser Vorteil entsteht durch akribische Trade-Strukturierung, Latenzoptimierung und emotionsloses Risikomanagement.'},
      {num:'04',title:'Vertraulichkeit',body:'Wir betrachten Informationskontrolle als strategisches Gebot. Wir veröffentlichen weder unsere Strategien noch bewerben wir unsere Erfolge oder beteiligen uns am allgemeinen Branchenrauschen.'}
    ],
    thesisTitle:'Unsere These.', thesisBody:'Krypto bleibt eine der wenigen globalen Anlageklassen, in denen Fragmentierung, Reflexivität und strukturelle Ineffizienzen in bedeutendem Ausmaß nebeneinander bestehen. Vorteile entstehen nicht durch ständige Aktivität, sondern durch strukturelles Verständnis und selektives Engagement.', thesisLink:'THESE LESEN',
    approachTitle:'Unser Ansatz.', approachBody:'Wir betrachten Märkte als System – nicht als eine Abfolge isolierter Gelegenheiten. Struktur zuerst. Präzision vor Aktivität. Wiederholbarkeit vor Lärm. Unser Betriebsmodell beruht auf klar definierten, begrenzten strategischen Rahmenwerken.', approachLink:'BETRIEBSMODELL ANSEHEN',
    ctaQuoteA:'Selektive Offenlegung ist keine Einschränkung —', ctaQuoteB:'sie ist ein bewusstes Betriebsprinzip.',
    ctaBody:'LNO strebt kein breites Engagement an. Anfragen von qualifizierten institutionellen Kontakten, strategischen Partnern und erfahrenen Fachleuten werden selektiv geprüft.'
  },
  firm:{
    title:'Die Firma.', lead:'LNO ist eine unabhängige proprietäre Handelsfirma. Wir setzen unser eigenes Kapital mit institutioneller Sorgfalt an den Märkten für digitale Vermögenswerte ein.',
    stat1:{value:'100%',label:'Eigenkapital'}, stat2:{value:'∞',label:'Zeithorizont'},
    identityLabel:'IDENTITÄT', identityBody:'LNO arbeitet ausschließlich mit internem Kapital. Es ist kein Fonds. Es akzeptiert keine externen Investoren. Es ist kein öffentlich ausgerichtetes Produktgeschäft. Unsere Struktur erlaubt es uns, uns vollständig auf die Kapitalvermehrung über lange Zeithorizonte zu konzentrieren – ohne den Druck, Kapital einzuwerben, externe Erwartungen zu managen oder branchenübliche Benchmarks zu erfüllen.',
    principlesLabel:'KERNPRINZIPIEN',
    principles:[
      {title:'Unabhängigkeit',body:'Volle Kontrolle über unsere Bilanz und strategische Ausrichtung, ohne externe LP-Mandate.'},
      {title:'Forschungstiefe',body:'Wir bauen tiefes strukturelles Verständnis auf, bevor wir Kapital in einem Markt oder einer Strategie einsetzen.'},
      {title:'Ausführungsdisziplin',body:'Strategie ist ohne rigorose, risikogesteuerte und technologisch überlegene Ausführung bedeutungslos.'},
      {title:'Langfristige Ausrichtung',body:'Wir optimieren für Kapitalvermehrung über Jahre hinweg – wir überstehen Zyklen, statt kurzfristigen Ertrag auf Kosten des Ruinrisikos zu maximieren.'}
    ],
    notDoLabel:'WAS LNO NICHT TUT',
    notDo:['— Wir verwalten kein Fremdkapital und agieren nicht als Hedgefonds.','— Wir bieten keine Anlageberatung, Research-Abonnements oder Marktkommentare an.','— Wir veröffentlichen weder unsere alpha-generierenden Strategien noch proprietäre Daten.','— Wir vermarkten uns nicht an die breite Öffentlichkeit.']
  },
  thesis:{
    title:'Marktstruktur als strategisches Fundament.', lead:'Wir betrachten Märkte als System – nicht als eine Abfolge von Gelegenheiten. Struktur zuerst. Präzision vor Aktivität. Wiederholbarkeit vor Lärm.',
    landscapeLabel:'DAS UMFELD', landscapeBody:'Krypto bleibt eine der wenigen globalen Anlageklassen, in denen Fragmentierung, Reflexivität und strukturelle Ineffizienzen in bedeutendem Ausmaß nebeneinander bestehen. Diese Ineffizienzen bestehen nicht trotz, sondern oft neben dem Marktwachstum fort – bedingt durch die uneinheitliche Natur der Börsen, unterschiedliche regulatorische Regime und die besondere Mischung aus Privat- und institutionellen Teilnehmern.',
    inefficienciesLabel:'ANHALTENDE INEFFIZIENZEN',
    inefficiencies:[
      {title:'Fragmentierte Liquidität',body:'Kapital verteilt sich auf Dutzende Handelsplätze mit unterschiedlichen Risikoprofilen, was zu ständigen Preisverzerrungen und Ungleichgewichten bei den Finanzierungssätzen führt.'},
      {title:'Ungleiche Informationsverarbeitung',body:'Die Geschwindigkeit und Genauigkeit, mit der verschiedene Marktteilnehmer On-Chain- und Off-Chain-Daten verarbeiten, variiert stark und erzeugt strukturelle Verzögerungen.'},
      {title:'Verhaltensbedingte Verwerfungen',body:'Extreme Hebelwirkung in Kombination mit emotionalem Privatanleger-Verhalten führt regelmäßig zu Zwangsliquidationen und vorhersehbaren Marktüberreaktionen.'}
    ],
    edgeLabel:'URSPRUNG DES VORTEILS',
    edgeBody1:'Der Vorteil entsteht nicht durch Lärm, ständige Aktivität oder das Vorhersagen makroökonomischer Entwicklungen. Er entsteht durch tiefes Marktverständnis, Ausführungsqualität, Risikodisziplin und selektives Engagement. Wir glauben, dass Alpha verfällt, während rigorose Infrastruktur und Prozesse sich vermehren.',
    edgeBody2:'Umgekehrt beobachten wir, dass der Großteil des Kapitals durch schwache Prozesse, mangelhafte Kalibrierung, emotionales Verhalten und strukturell undiszipliniertes Handeln vernichtet wird. Unser Auftrag ist die konsequente Vermeidung dieser Fehlermodi.'
  },
  approach:{
    title:'Ein diszipliniertes Betriebsmodell.', lead:'Wir trennen die intellektuelle Ideenfindung von der Mechanik der Ausführung. Unser Ansatz gliedert den Handelszyklus in klar abgegrenzte, hochoptimierte Säulen.',
    pillars:[
      {num:'01',title:'Forschung',body:'Systematische Marktintelligenz, strukturelle Analyse und datengetriebene Signalgenerierung. Wir raten nicht; wir messen, modellieren und backtesten.'},
      {num:'02',title:'Strategieentwicklung',body:'Übersetzung von Forschung in klar definierte, begrenzte strategische Rahmenwerke. Jede Strategie hat klare Invalidierungskriterien und mathematisch definierte Risikoprofile.'},
      {num:'03',title:'Ausführung',body:'Präziser Ein- und Ausstieg, Minimierung von Friktion, Slippage und Verhaltensfehlern. Ausführungsqualität wird als Kernkomponente des Alphas behandelt.'},
      {num:'04',title:'Risikomanagement',body:'Strikte Positionsgrößen, Expositionslimits, Drawdown-Kontrollen und Planung für Extremszenarien. Kapitalerhalt hat oberste Priorität.'},
      {num:'05',title:'Infrastruktur',body:'Zuverlässiger, redundanter, latenzbewusster technischer Stack. Wir investieren stark in unsere proprietäre Technologie, um operative Resilienz auch in volatilen Phasen sicherzustellen.'},
      {num:'06',title:'Kontinuierliche Verfeinerung',body:'Systematische Überprüfung, Anpassung und disziplinierte Lernzyklen. Märkte verändern sich – daher muss unser Vorteil fortlaufend neu kalibriert werden.'}
    ]
  },
  contact:{
    title:'Selektive Anfragen.', lead:'LNO strebt kein breites Engagement an. Anfragen von qualifizierten Investoren, institutionellen Kontakten, strategischen Partnern und erfahrenen Fachleuten werden selektiv geprüft. Unaufgeforderte Anlageangebote werden nicht bearbeitet.',
    directLabel:'DIREKTE KORRESPONDENZ', email:'contact@lno.company',
    emailNote:'Schreiben Sie uns direkt. Bitte geben Sie Ihren Namen, Ihre Zugehörigkeit und eine kurze Beschreibung Ihres Anliegens an. Wir antworten selektiv und nach eigenem Ermessen.'
  },
  footer:{ tagline:'Proprietäre Intelligenz. Diszipliniertes Kapital.', firmLabel:'DIE FIRMA', about:'Über uns', thesisLink:'These', approachLink:'Ansatz', connectLabel:'KONTAKT', inquiries:'Anfragen', linkedin:'LinkedIn', copyright:'© 2026 LNO. Alle Rechte vorbehalten.', legal:'Rechtliches', cookie:'Cookie-Richtlinie' }
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
