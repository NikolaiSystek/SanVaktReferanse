(window.SECTIONS = window.SECTIONS || []).push(`
  <div class="group-label">MOI – skader og mekanisme</div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">⛷ Alpint / snowboard / langrenn</span>
      <span class="badge badge-red">HØY</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Høyhastighetskollisjon</div>
        <div class="tags"><span class="t d" data-tip="hodeskade">Hodeskade</span><span class="t d" data-tip="cervikalcolumna">Cervikalcolumna</span><span class="t d" data-tip="thorax">Thorax / pneumothorax</span><span class="t d" data-tip="milt">Milt / lever</span><span class="t w" data-tip="bekken">Bekken</span><span class="t w" data-tip="femur">Femur</span></div>
        <div class="note r">Hjelm ≠ ingen hodeskade – vurder alltid</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Fall – rotasjon / fastkjørt ski</div>
        <div class="tags"><span class="t d" data-tip="acl">Kneskade ACL/MCL</span><span class="t w" data-tip="tibia">Tibia</span><span class="t w" data-tip="columna">Columna thorakolumbal</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Medisinske årsaker i felt</div>
        <div class="tags"><span class="t d" data-tip="hypotermi">Hypotermi</span><span class="t d" data-tip="hypoglykemi">Hypoglykemi</span><span class="t w" data-tip="uttomming">Uttømming</span><span class="t w" data-tip="frostskader">Frostskader</span></div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🚴 Sykkel – vei og terreng</span>
      <span class="badge badge-red">HØY</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Massestyrt – høy hastighet</div>
        <div class="tags"><span class="t d" data-tip="hodeskade">Hodeskade</span><span class="t d" data-tip="cervikalcolumna">Cervikalcolumna</span><span class="t w" data-tip="klavikkel">Klavikkel</span><span class="t w" data-tip="thorax">Thorax</span><span class="t" data-tip="degloving">Degloving</span></div>
        <div class="note r">Hjelm med synlig skade = mistenk hodeskade uansett</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Styret i abdomen / thorax</div>
        <div class="tags"><span class="t d" data-tip="miltruptur">Miltruptur</span><span class="t d" data-tip="leverruptur">Leverruptur</span><span class="t d" data-tip="pneumothorax">Pneumothorax</span><span class="t w" data-tip="ribbeinsbrudd">Ribbeinsbrudd</span></div>
        <div class="note">Intern blødning kan debutere forsinket</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🏉 Rugby / kontaktsport</span>
      <span class="badge badge-red">HØY</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Takling</div>
        <div class="tags"><span class="t d" data-tip="cervikalcolumna">Cervikalcolumna</span><span class="t d" data-tip="hjernerystelse">Hjernerystelse</span><span class="t w" data-tip="skulder">Skulder AC-ledd</span></div>
        <div class="note r">Spinalprotokoll ved takling + hodeskade inntil avkreftet</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Slag mot truncus</div>
        <div class="tags"><span class="t d" data-tip="miltruptur">Miltruptur</span><span class="t w" data-tip="ribbeinsbrudd">Ribbeinsbrudd</span><span class="t w" data-tip="pneumothorax">Pneumothorax</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Hjernerystelse – gjenkjenn</div>
        <div class="tags"><span class="t d" data-tip="hjernerystelse">Forvirring / amnesi</span><span class="t d" data-tip="hodepine">Hodepine</span><span class="t w" data-tip="kvalme_oppkast">Kvalme</span><span class="t w" data-tip="lysoemt">Lysømfintlighet</span></div>
        <div class="note r">Ut av spill – ikke tilbake samme dag</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">⚽ Fotball / futsal / håndball</span>
      <span class="badge badge-amber">MOD</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Takling / kollisjon</div>
        <div class="tags"><span class="t w" data-tip="ankel">Ankel</span><span class="t w" data-tip="acl">Kne ACL / menisk</span><span class="t w" data-tip="hodeskade">Hodeskade</span><span class="t" data-tip="tibia">Tibia</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Ikke-kontaktskader</div>
        <div class="tags"><span class="t d" data-tip="akillesruptur">Akillesruptur</span><span class="t w" data-tip="lyske">Lyske / hamstring</span><span class="t w" data-tip="acl">Kne ACL vridning</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Medisinsk kollaps</div>
        <div class="tags"><span class="t d" data-tip="hjertestans">Hjertestans ung utøver!</span><span class="t d" data-tip="arytmi">Arytmi</span><span class="t w" data-tip="hypoglykemi">Hypoglykemi</span></div>
        <div class="note r">Ung utøver kollaps = hjertestans inntil annet bevist. AED umiddelbart.</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🥊 Kampsport / boksing / MMA</span>
      <span class="badge badge-red">HØY</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Slag mot hode</div>
        <div class="tags"><span class="t d" data-tip="hjernerystelse">Hjernerystelse</span><span class="t d" data-tip="intrakranialt">Intrakranialt hematom</span><span class="t w" data-tip="ansiktsfraktur">Ansiktsfrakturer</span></div>
        <div class="note r">Gjentatte slag: symptomer kan komme forsinket</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">KO / bevisstløs</div>
        <div class="tags"><span class="t d" data-tip="hodeskade">Hodeskade til avkreftet</span><span class="t d" data-tip="luftvei">Luftvei</span><span class="t w" data-tip="cervikalcolumna">Cervikalcolumna</span></div>
        <div class="note r">Ikke tilbake til kamp. Observer minimum 1 time.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Kvelertag / struping</div>
        <div class="tags"><span class="t d" data-tip="luftveisskade">Luftveisskade</span><span class="t d" data-tip="karotis">Karotisdisseksjon</span><span class="t w" data-tip="bevissth">Bevissthetspåvirkning</span></div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🎵 Konsert / festival / scene</span>
      <span class="badge badge-red">HØY</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Crowd crush / mengdetrykk</div>
        <div class="tags"><span class="t d" data-tip="crowdcrush">Thoraxkompresjon / pustestopp</span><span class="t d" data-tip="trampling">Trampling</span><span class="t w" data-tip="ribbeinsbrudd">Ribbeinsbrudd</span></div>
        <div class="note r">Stående kompresjon = puster ikke selv om oppreist</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Kollaps i folkemengde</div>
        <div class="tags"><span class="t d" data-tip="overdose">Rus / overdose</span><span class="t d" data-tip="varmeslag">Varmeslag</span><span class="t d" data-tip="hjertestans">Hjertestans</span><span class="t w" data-tip="hypoglykemi">Hypoglykemi</span><span class="t w" data-tip="epilepsi">Epilepsi</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Rigg- / scenekolaps</div>
        <div class="tags"><span class="t d" data-tip="crush">Crush-skader</span><span class="t d" data-tip="multippeltraume">Multippeltraume</span></div>
        <div class="note r">Masseskade-protokoll – triage, ikke alt på én pasient</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">👥 Løp / folkemengde / arrangement</span>
      <span class="badge badge-amber">MOD</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Kollaps under / etter løp</div>
        <div class="tags"><span class="t d" data-tip="hjertestans">Hjertestans</span><span class="t d" data-tip="varmeslag">Varmeslag</span><span class="t d" data-tip="hyponatremi">Hyponatremi</span><span class="t w" data-tip="hypoglykemi">Hypoglykemi</span></div>
        <div class="note r">Kollaps etter målgang = hjertestans inntil annet bevist</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Besvimelse / synkope</div>
        <div class="tags"><span class="t w" data-tip="synkope">Vasovagal</span><span class="t w" data-tip="hypoglykemi">Hypoglykemi</span><span class="t d" data-tip="arytmi">Arytmi (eldre)</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Eldre på arrangement</div>
        <div class="tags"><span class="t d" data-tip="hofte">Fall = hoftebrudd</span><span class="t w" data-tip="arytmi">Kardiologisk kollaps</span><span class="t w" data-tip="dehydrering">Dehydrering</span></div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🎪 Opprigg / nedrigg scene</span>
      <span class="badge badge-red">HØY</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Fall fra høyde (rigg, stillas, truss)</div>
        <div class="tags"><span class="t d" data-tip="hodeskade">Hodeskade</span><span class="t d" data-tip="cervikalcolumna">Cervikalcolumna</span><span class="t d" data-tip="thorax">Thorax</span><span class="t d" data-tip="bekken">Bekken</span><span class="t d" data-tip="columna">Columna aksial</span></div>
        <div class="note r">Høyenergi MOI – full XABCDE og spinalvurdering</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Klemskade (gods, rigg, truss)</div>
        <div class="tags"><span class="t d" data-tip="crush">Crush-skade</span><span class="t d" data-tip="rabdomyolyse">Rabdomyolyse ved langvarig klem</span><span class="t d" data-tip="compartment">Compartment-syndrom</span><span class="t w" data-tip="femur">Ekstremitetsskade</span></div>
        <div class="note">Frigjøring av langvarig klem kan gi sirkulatorisk kollaps – varsle AMK før frigjøring</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Fallende gjenstander (utstyr, riggelement)</div>
        <div class="tags"><span class="t d" data-tip="hodeskade">Hodeskade</span><span class="t d" data-tip="cervikalcolumna">Cervikalcolumna</span><span class="t w" data-tip="skulder">Skulder / klavikkel</span><span class="t w" data-tip="thorax">Thorax</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Elektrisk skade (scenelys, kabel)</div>
        <div class="tags"><span class="t d" data-tip="arytmi">Hjertearytmi</span><span class="t d" data-tip="el_skade">Inn-/utgangssår</span><span class="t w" data-tip="brannskade">Brannskader</span><span class="t d" data-tip="kastefenomen">Kastefenomen – sekundærfall</span></div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🚗 Bil – kollisjon og velting</span>
      <span class="badge badge-red">HØY</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Frontkollisjon høy hastighet</div>
        <div class="tags"><span class="t d" data-tip="aorta">Aorta</span><span class="t d" data-tip="milt">Milt</span><span class="t d" data-tip="leverruptur">Lever</span><span class="t w" data-tip="bekken">Bekken</span><span class="t w" data-tip="femur">Femur</span><span class="t w" data-tip="cervikalcolumna">Cervikalcolumna</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Fotgjenger påkjørt</div>
        <div class="tags"><span class="t w" data-tip="tibia">Tibia/fibula (bumper)</span><span class="t d" data-tip="thorax">Thorax/abdomen (panser)</span><span class="t d" data-tip="hodeskade">Hodeskade (bakkefall)</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Motorsykkel</div>
        <div class="tags"><span class="t d" data-tip="thorax">Thorax</span><span class="t w" data-tip="bekken">Bekken</span><span class="t w" data-tip="femur">Femur</span><span class="t w" data-tip="hodeskade">Hodeskade</span><span class="t" data-tip="degloving">Degloving</span></div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">⬇ Fall – høyde og mekanisme</span>
      <span class="badge badge-amber">MOD</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Under 1 m – eldre!</div>
        <div class="tags"><span class="t d" data-tip="hofte">Hoftebrudd</span><span class="t w" data-tip="handledd">Håndledd</span><span class="t w" data-tip="columna">Columna</span><span class="t w" data-tip="subduralt">Subduralt hematom</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Over 3 m / 2× høyde</div>
        <div class="tags"><span class="t d" data-tip="calcaneus">Calcaneus</span><span class="t d" data-tip="columna">Columna aksial</span><span class="t d" data-tip="bekken">Bekken</span><span class="t w" data-tip="femur">Femur</span><span class="t d" data-tip="milt">Milt / lever</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Diving / stuping grunt vann</div>
        <div class="tags"><span class="t d" data-tip="cervikalcolumna">Cervikalcolumna C4–C6</span><span class="t d" data-tip="hodeskade">Hodeskade</span></div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🔪 Kniv / penetrerende</span>
      <span class="badge badge-red">HØY</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Thorax</div>
        <div class="tags"><span class="t d" data-tip="pneumothorax">Pneumothorax</span><span class="t d" data-tip="hemothorax">Hemothorax</span><span class="t d" data-tip="hjerteskade">Hjerteskade</span><span class="t d" data-tip="aorta">Store kar</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Abdomen</div>
        <div class="tags"><span class="t d" data-tip="tarmperf">Tarmperforasjon</span><span class="t d" data-tip="milt">Milt</span><span class="t d" data-tip="leverruptur">Lever</span><span class="t d" data-tip="aorta">Aorta / v. cava</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Nakke</div>
        <div class="tags"><span class="t d" data-tip="karotis">Karotis / jugular</span><span class="t d" data-tip="luftror">Luftrør</span><span class="t w" data-tip="spiseror">Spiserør</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Impalement</div>
        <div class="tags"><span class="t d" data-tip="impalement">IKKE fjern – stabiliser</span></div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">💥 Eksplosjon / termisk</span>
      <span class="badge badge-red">HØY</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Primær – trykkbølge</div>
        <div class="tags"><span class="t d" data-tip="blastlung">Blast lung</span><span class="t w" data-tip="tympanisk">Tympanisk membran</span></div>
        <div class="note r">Primærskader er usynlige</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Kvartær – varme / kjemikalier</div>
        <div class="tags"><span class="t w" data-tip="brannskade">Brannskader</span><span class="t d" data-tip="inhalasjon">Inhalasjonsskade</span><span class="t d" data-tip="co">CO-forgiftning</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Brannskade ansikt / hals</div>
        <div class="tags"><span class="t d" data-tip="inhalasjon">Inhalasjonsskade</span><span class="t d" data-tip="luftveisoedem">Luftveisødem forsinket!</span></div>
        <div class="note r">Stridor / heshet = handle raskt</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🏔 På fjellet – hypotermi og overlevelse</span>
      <span class="badge badge-red">HØY</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">

      <div class="divider">Hypotermi – stadier (HT I–V)</div>
      <div class="row" data-row>
        <div style="font-size:11px; color:#ccc; line-height:2.1;">
          <div style="display:grid; grid-template-columns:2fr 3fr 2fr; gap:0 6px;">
            <span style="color:#60a5fa;font-weight:600;">Stadium</span><span style="color:#60a5fa;font-weight:600;">Kliniske funn</span><span style="color:#60a5fa;font-weight:600;">Temp.</span>
            <span style="color:#34d399;">HT I – Mild</span><span>Våken, skjelver</span><span>32–35°C</span>
            <span style="color:#e5a820;">HT II – Moderat</span><span>Nedsatt bevissthet, skjelver IKKE</span><span>28–32°C</span>
            <span style="color:#f87171;">HT III – Alvorlig</span><span>Bevisstløs, pust og puls til stede</span><span>24–28°C</span>
            <span style="color:#f87171;font-weight:700;">HT IV – Kritisk</span><span>Ingen pust, ingen puls → HLR</span><span>&lt;24°C</span>
            <span style="color:#888;">HT V</span><span>Irreversibel død</span><span>–</span>
          </div>
        </div>
        <div class="note b">«Ikke erklær død før pasienten er VARM og DØD.»</div>
      </div>

      <div class="divider">Behandling etter stadium</div>
      <div class="row" data-row>
        <div class="moi-label" style="color:#34d399;">HT I – Mild (32–35°C)</div>
        <div class="tags">
          <span class="t" data-tip="hypotermi_mild">Aktiv egenoppvarming</span>
          <span class="t" data-tip="hypotermi_mild">Varme sukkerholdige drikker</span>
          <span class="t i" data-tip="fjell_risiko">Fjern utløsende faktorer</span>
          <span class="t" data-tip="spaceblanket">Space blanket / sovepose</span>
        </div>
      </div>
      <div class="row" data-row>
        <div class="moi-label" style="color:#e5a820;">HT II – Moderat (28–32°C)</div>
        <div class="tags">
          <span class="t d" data-tip="hypotermi_mod">Skjelver IKKE – farlig tegn</span>
          <span class="t d" data-tip="paradoks_avkledning">Kan kle av seg</span>
          <span class="t w" data-tip="hypotermi_transport">Horisontal transport</span>
          <span class="t w" data-tip="hypotermi_transport">Skånsom håndtering</span>
          <span class="t i" data-tip="hypotermi_mod">Innleggelse sykehus</span>
        </div>
        <div class="note r">Slutter å skjelve = forverring! Gi ikke oralt.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label" style="color:#f87171;">HT III – Alvorlig (24–28°C)</div>
        <div class="tags">
          <span class="t d" data-tip="hypotermi_alvorlig">Bevisstløs – ligner død</span>
          <span class="t d" data-tip="hypotermi_alvorlig">Kjenn puls opptil 60 sek</span>
          <span class="t d" data-tip="hypotermi_transport">Horisontal – absolutt</span>
          <span class="t d" data-tip="arytmi">Arytmirisiko ved bevegelse</span>
        </div>
        <div class="note r">Bevisstløs ≠ død. Mål puls nøye – bruk god tid.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label" style="color:#f87171;">HT IV – Kritisk (&lt;24°C)</div>
        <div class="tags">
          <span class="t d" data-tip="hypotermi_kritisk">Ingen puls → start HLR</span>
          <span class="t d" data-tip="hypotermi_hlr">AED maks 3 støt</span>
          <span class="t d" data-tip="hypotermi_hlr">Ingen medisiner &lt;30°C</span>
          <span class="t d" data-tip="hypotermi_hlr">HLR under transport</span>
          <span class="t d" data-tip="drukning_hypotermi">ECMO-senter</span>
        </div>
        <div class="note r">HLR avsluttes IKKE i felt – fortsett til sykehus med hjerte-lunge-maskin.</div>
      </div>

      <div class="divider">BANAK-modellen – innpakking (330-skvadronen)</div>
      <div class="row" data-row>
        <div style="padding:2px 0;">
          <div class="piksib-step">
            <div class="piksib-letter" style="color:#60a5fa;">1</div>
            <div class="piksib-text"><strong>Dampsperre (innerst)</strong>Søppelsekk eller tarp – helvanntett mot kroppen. Tape tett rundt hele kroppen inkl. hodet og føtter. Hindrer <em>fordampning</em>.</div>
          </div>
          <div class="piksib-step">
            <div class="piksib-letter" style="color:#e5a820;">2</div>
            <div class="piksib-text"><strong>Isolasjon (midterst)</strong>Dunjakke, sovepose eller tepper. Hindrer varmetap til underlaget (<em>ledning</em>), <em>stråling</em> og noe <em>strømning</em>.</div>
          </div>
          <div class="piksib-step" style="border-bottom:none;">
            <div class="piksib-letter" style="color:#9ca3af;">3</div>
            <div class="piksib-text"><strong>Vindtett ytterlag (ytterst)</strong>Fjellduk, presenning eller teltduk. Beskytter mot fukt og hindrer <em>strømningstap</em> til vinden.</div>
          </div>
        </div>
        <div class="note b">Tape dampsperre tett – ingen hull. Inkluder hodet og føtter.</div>
      </div>

      <div class="divider">Feltbehandling – alle stadier</div>
      <div class="row" data-row>
        <div class="tags">
          <span class="t d" data-tip="expose_klipp">Klipp bort vått tøy raskt</span>
          <span class="t d" data-tip="isolering">Isoler fra bakken</span>
          <span class="t d" data-tip="spaceblanket">Dekk til inkl. hodet</span>
          <span class="t w" data-tip="hypotermi_transport">Varmeflasker – nakke, armhuler, lyske</span>
          <span class="t w" data-tip="hypotermi_transport">Horisontal transport</span>
          <span class="t i" data-tip="banak_modell">BANAK-innpakking</span>
        </div>
        <div class="note">Infrarøde øretermometre er upålitelige ved hypotermi. Klinisk vurdering er viktigere enn et tall.</div>
      </div>

      <div class="divider">Overlevelse på fjellet – risikofaktorer</div>
      <div class="row" data-row>
        <div class="tags">
          <span class="t d" data-tip="fjell_risiko">Fuktighet + vind = rask nedkjøling</span>
          <span class="t d" data-tip="fjell_risiko">Utmattelse – mister varmproduksjon</span>
          <span class="t w" data-tip="fjell_risiko">Alkohol – falsk varmefølelse</span>
          <span class="t w" data-tip="hypotermi">Barn og eldre – dårligere kompensasjon</span>
          <span class="t w" data-tip="uttomming">Lav energi / dårlig ernæring</span>
          <span class="t w" data-tip="frostskader">Frostskader ved langvarig eksponering</span>
        </div>
        <div class="note">Traume + hypotermi = økt dødelighet. Forebygg nedkjøling fra dag én av redningsaksjonen.</div>
      </div>

    </div>
  </div>
`);
