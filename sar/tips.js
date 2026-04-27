// SAR-terminologi. Slås sammen med TIPS-objektet slik at hovedappens tooltip-
// renderer virker uendret. Alle nøkler prefikses med "sar_" for å unngå kollisjon.
(function () {
  var SAR_TIPS = {
    // ---------- Forkortelser ----------
    sar_poi: {
      name: "POI – Point of Interest",
      plain: "Punkt av interesse",
      body: "Et hvilket som helst interessepunkt i søket: SKP, savnedes bil, hytte, hus, parkeringsplass.",
      sev: "",
    },
    sar_skp: {
      name: "SKP – Sist kjente posisjon",
      plain: "Siste sikre observasjon",
      body: "Sted der man med sikkerhet kan stadfeste at savnede har vært. Utgangspunkt for søk (se tommelfingerregel 2).",
      sev: "i",
      rel: ["sar_tr2", "sar_ipp"],
    },
    sar_hrs: {
      name: "HRS – Hovedredningssentralen",
      plain: "Nasjonal koordinering",
      body: "To sentraler: Bodø (HRS-NN) og Stavanger (HRS-SN). Koordinerer større redningsaksjoner nasjonalt.",
      sev: "",
    },
    sar_ko: {
      name: "KO – Kommandoområde",
      plain: "Aksjonsledelse",
      body: "Sted der aksjonen ledes fra. Synonymt med aksjonsledelsen.",
      sev: "",
    },
    sar_pod: {
      name: "POD – Probability of Detection",
      plain: "Sannsynlighet for påvisning",
      body: "Mål for hvor stor sjanse det er for å finne savnede i lagets søksteig, forutsatt at savnede er der.\n\nBasert på subjektiv vurdering av lagleder etter avsøking: tar hensyn til dekningsgrad og om mannskap kan ha oversett savnede.",
      sev: "i",
      rel: ["sar_dekning", "sar_fremdrift"],
    },
    sar_gps: {
      name: "GPS",
      plain: "Bruk som supplement",
      body: "Bra for raskt å angi kartreferanse, plotte spor, kontrollere orientering.\n\nALDRI eneste orienteringshjelpemiddel – bruk alltid sammen med kompass og papirkart. Husk ekstra batterier.",
      sev: "w",
    },
    sar_atv: {
      name: "ATV – All-terrain vehicle",
      plain: "Terrengkjøretøy",
      body: "Hjul- eller beltegående terrengkjøretøy. Brukes mye i terrenget når det ikke er snø. Husk: motorstøy + hjelm reduserer evnen til å høre rop.",
      sev: "",
    },
    sar_5po: {
      name: "5PO – Fempunktsordre",
      plain: "Strukturert ordregivning",
      body: "Militært hjelpemiddel for nøyaktig overføring av informasjon fra ledelse til mannskap. Sikrer at alle har samme forståelse av oppdraget og gir laget kritiske spørsmål å fokusere på.",
      sev: "i",
    },
    sar_cla: {
      name: "CLA-søk – Creeping Line Ahead",
      plain: "Søkemønster fra luft",
      body: "Brukes når søkeområdet er relativt lite. Parallelle søkelinjer, men korte – antas at savnede er i den enden man starter. Se Motorisert søk fra luft.",
      sev: "",
    },
    sar_tm: {
      name: "TM – Taktisk metode",
      plain: "Hypotesedrevet søkeplan",
      body: "Datainnsamling → Analyse → Hypotese → Planlegging → Gjennomføring.\n\nSikrer at valg av søkemetode er begrunnet, ikke tilfeldig. Behandles grundigere i eget kompendium.",
      sev: "i",
      rel: ["sar_hypotese", "sar_tr1", "sar_tr2"],
    },
    sar_ipp: {
      name: "IPP – Initial Planning Point",
      plain: "Utgangspunkt for planlegging",
      body: "Utgangspunktet for planlegging av søket. Hvis SKP ikke er kjent, velges ett eller flere innledende POI som utgangspunkt. Konseptet ligger i tommelfingerregel 2.",
      sev: "",
      rel: ["sar_skp", "sar_tr2"],
    },

    // ---------- Kjernekonsepter ----------
    sar_fremdrift: {
      name: "Fremdrift",
      plain: "Hvor raskt gjennomsøkes teigen",
      body: "Areal per tid (km²/t). Økt dekning → redusert fremdrift. Flere mannskaper → økt fremdrift ved konstant POD.",
      sev: "",
      rel: ["sar_dekning", "sar_pod"],
    },
    sar_dekning: {
      name: "Dekning / Dekningsgrad",
      plain: "Hvor grundig er teigen avsøkt",
      body: "Prosent av teigen som faktisk er avsøkt (avsøkt areal / teig areal × 100 %). Jo høyere dekningsgrad, jo finere er søket.\n\nØkt dekning → økt POD → redusert fremdrift.",
      sev: "",
      rel: ["sar_fremdrift", "sar_pod"],
    },
    sar_finsok: {
      name: "Finsøk",
      plain: "Grundig avsøking av hele området",
      body: "Samlebetegnelse for søkeformer der vi søker gjennom HELE søkeområdet. Krever god tilgang på mannskaper. Brukes når vi er rimelig sikre på at savnede er i området.\n\nEks: søkekjede, hussøk, sirkelsøk.",
      sev: "i",
      rel: ["sar_grovsok"],
    },
    sar_grovsok: {
      name: "Grovsøk",
      plain: "Hurtig søk – utelater lavsannsynlige områder",
      body: "Samlebetegnelse for søkeformer der vi utelater områder med lav sannsynlighet for funn. Raskt gjennom høysannsynlige områder først.\n\nBrukes når finsøk ikke kan forsvares med tilgjengelige mannskaper. Ofres dekningsgrad til fordel for fremdrift.",
      sev: "w",
      rel: ["sar_finsok", "sar_tr1"],
    },
    sar_patruljesok: {
      name: "Patruljesøk",
      plain: "Samlebegrep – unngå begrepet",
      body: "Mye brukt i redningstjenesten, men upresist. Fellesnevner er kun at søket utføres av en patrulje. Bruk heller konkret metode: «stisøk m/flanke», «kompasskurssøk», «løksøk».",
      sev: "w",
    },
    sar_tr1: {
      name: "Tommelfingerregel 1",
      plain: "Rask dekning av høysannsynlige områder",
      body: "Vi velger metoder som raskest dekker områder med størst sannsynlighet for funn.\n\n• Metoden må gi høy fremdrift.\n• Største dekning i høysannsynlighetsområder, minst i lavsannsynlighet.",
      sev: "i",
      rel: ["sar_tr2", "sar_tm"],
    },
    sar_tr2: {
      name: "Tommelfingerregel 2",
      plain: "Søk innenfra og ut",
      body: "Vi søker alltid innenfra og ut – med utgangspunkt i SKP.\n\nHvis SKP ikke er kjent: velg ett eller flere innledende POI som utgangspunkt (IPP).",
      sev: "i",
      rel: ["sar_skp", "sar_ipp", "sar_tr1"],
    },
    sar_hypotese: {
      name: "Hypotese",
      plain: "Antakelse om hva som har skjedd",
      body: "Utarbeides i analysefasen basert på datainnsamling. Bestemmer valg av søkemetode: «Savnede har søkt ly i telt», «Savnede har skadet seg langs stien», osv.\n\nEt søk skal alltid ha en begrunnet hypotese.",
      sev: "i",
      rel: ["sar_tm"],
    },
    sar_kritiske_sp: {
      name: "Kritiske spørsmål",
      plain: "Fokus under søket",
      body: "Spørsmål gitt i 5PO som mannskapet skal holde fokus på. Eks: «Har savnede søkt ly under trær eller skrenter?»\n\nSørger for at mannskapet leter på relevante steder på eget initiativ.",
      sev: "",
      rel: ["sar_5po"],
    },

    // ---------- Søkekjede-terminologi ----------
    sar_luke: {
      name: "Lukeavstand",
      plain: "Avstand mellom mannskap i kjeden",
      body: "Valg avhenger av terreng, trening og hva vi leter etter. MÅ holdes konstant mellom vendinger – ellers blir hjelpeaksen svingete.\n\nMåles mot hovedaksen.",
      sev: "",
      rel: ["sar_kritisk_sep"],
    },
    sar_kritisk_sep: {
      name: "Kritisk separasjon",
      plain: "Grensen mellom grov og fin søkekjede",
      body: "Lukeavstanden akkurat så stor at området mellom to søkere dekkes. Tester viser: for godt trente mannskap gir denne ca 5 av 10 funn (når savnede er i teigen).\n\nFinn enklest ved praktisk test i aktuelt terreng.",
      sev: "w",
    },
    sar_hovedakse: {
      name: "Hovedakse",
      plain: "Referanseakse for kjeden",
      body: "Kan være vei, sti, kraftlinje, vegetasjonsgrense eller kompasskurs. Bør være så rett som mulig. Kompasskurs foretrekkes fremfor svingete vei.",
      sev: "",
    },
    sar_hjelpeakse: {
      name: "Hjelpeakse",
      plain: "Merket ytre grense etter en sats",
      body: "Fløymannens merkebånd danner hjelpeaksen. Blir ny hovedakse for neste lag/sats. Derfor kritisk at den er rett – ujevnheter forplanter seg videre.",
      sev: "",
    },
    sar_vendeakse: {
      name: "Vendeakse",
      plain: "Akse kjeden vender langs",
      body: "Merkes av sistemann (som blir ny fløymann) når kjeden snur. Rekkefølgen i kjeden beholdes slik at samarbeidet ikke brytes.",
      sev: "",
    },
    sar_floymann: {
      name: "Fløymann (merkemann)",
      plain: "Ytterste mann – merker",
      body: "Går i ytterkanten, merker hjelpeaksen med merkebånd. Har halv bredde å søke i (merker både gående og snuende). Hvis merking sinker kjeden: gjør bare merking, krymp lukeavstand til nabo.",
      sev: "",
    },
    sar_merkeband: {
      name: "Merkebånd",
      plain: "Viskosebånd anbefales",
      body: "Viskosebånd – brytes ned naturlig, naturvennlig, skogbruksartikkel. Mange farger for døgnkoding.\n\nUnngå dopapir/kreppapir (dårlig i regn) og plastikkbånd (må samles inn).",
      sev: "i",
    },
    sar_grov_fin_kjede: {
      name: "Grov vs fin søkekjede",
      plain: "Hurtighet vs grundighet",
      body: "GROV: høyere krav til hurtighet, lukeavstand kan gå over kritisk separasjon.\nFIN: mål er 100 % dekning, streng lukeavstand og innretning.\n\nKO MÅ spesifisere målet i sin ordre.",
      sev: "w",
      rel: ["sar_kritisk_sep"],
    },

    // ---------- Spesielle begreper ----------
    sar_flanke: {
      name: "Flanke",
      plain: "Søker ut fra aksen",
      body: "Mannskap på siden(e) av hovedaksen. Avstand ut avhenger av terreng og hypotese. Vanlig feil: å gjøre flanken til en søkekjede – fokus bør være på søk, ikke innretning.",
      sev: "",
    },
    sar_sperrepost: {
      name: "Sperrepost",
      plain: "Hindrer savnede å passere",
      body: "Bemannet post som hindrer savnede fra å komme tilbake inn i avsøkt teig eller som lytter/observerer. Plasseres ved trapper, kryss, veier eller andre forbindelsespunkter.\n\nVed søk etter person som aktivt gjemmer seg: dekk alle innganger til avsøkte områder.",
      sev: "w",
    },
    sar_observasjonspost: {
      name: "Observasjonspost",
      plain: "Stille visuell post",
      body: "Plasseres med god oversikt over søkeområdet. Kikkert (gjerne stativ) + samband. Mørke: lysforsterkningsutstyr fra HV.\n\nKan forsterkes med hund (god lukt + hørsel, minst 100 m).",
      sev: "",
    },
    sar_overvaer: {
      name: "Overvær",
      plain: "Hund lukter noe med vinden",
      body: "Når hund fanger opp lukt båret av vinden. Vindretning er kritisk ved plassering av ekvipasje. Vinden kan variere lokalt pga fjell, koller, daler, vegetasjon.\n\nKartkalk i KO for å holde oversikt over ekvipasjenes overværsområder.",
      sev: "i",
    },
    sar_taust_vitne: {
      name: "Taust vitne",
      plain: "Gjenstand etter savnede",
      body: "Fysisk spor etter savnede: klær, utstyr, avfall. Må kontrolleres om det faktisk tilhører savnede – feilidentifisering kan sette hund på feil spor.",
      sev: "i",
    },
    sar_blikket: {
      name: "Bruk av blikket",
      plain: "Observasjonsteknikk",
      body: "Se til sidene og bakover like mye som fremover. Rett fram og på skrå viser skygger fra vegetasjon. Se både på avstand og tett ved. Ikke glem tretoppene.\n\nMotivasjon, mat og hvile er grunnlaget for god observasjon.",
      sev: "i",
    },
    sar_motivasjonsfall: {
      name: "Motivasjonsfall",
      plain: "Fall i fokus ca 30–60 min inn",
      body: "Oppmerksomhet synker typisk en halv til en time etter oppstart når adrenalinet faller og mannskapet innser at oppdraget kan ta tid. Alle ledere må være bevisst dette.",
      sev: "w",
    },
    sar_pause: {
      name: "Pauser",
      plain: "God pause hver 3–4 time",
      body: "Konsentrasjonen svikter etter 3–4 timer. Trenger lengre pause hver 8. time. Ingen bør ha ansvar mer enn 8 timer i strekk, maksimalt 12.",
      sev: "w",
    },

  };

  window.TIPS = Object.assign(window.TIPS || {}, SAR_TIPS);
})();
