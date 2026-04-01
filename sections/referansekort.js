(window.SECTIONS = window.SECTIONS || []).push(`
  <div class="group-label">Referansekort</div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🔤 XABCDE – sjekkliste</span>
      <span class="badge badge-gray">REF</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label" style="color:#c084fc;">X – Før ABCDE</div>
        <div class="tags"><span class="t d" data-tip="x_sikkerhet">Egensikkerhet – er det trygt?</span><span class="t d" data-tip="blodning_stopp">Stans store blødninger</span><span class="t w" data-tip="hypotermi">Forebygg hypotermi</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label" style="color:#f87171;">A – Airway (Luftvei)</div>
        <div class="tags"><span class="t d" data-tip="luftvei">Er luftveien åpen?</span><span class="t d" data-tip="fremmedlegeme">Fremmedlegeme → Heimlich / ryggslag</span><span class="t w" data-tip="snorking">Snorking → kjevetak / NPA</span><span class="t w" data-tip="gurgling">Gurgling → sideleie / sug</span><span class="t w" data-tip="stridor">Stridor → obstruksjon</span></div>
        <div class="note">Ved traume: kjevetak. Spinalstabilisering ved MOI.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label" style="color:#e5a820;">B – Breathing (Pust)</div>
        <div class="tags"><span class="t i" data-tip="rf_normal">RF normal: 12–20/min</span><span class="t d" data-tip="rf_kritisk">RF &lt;10 eller &gt;29 = kritisk</span><span class="t w" data-tip="hjelpemuskulatur">Hjelpemuskulatur i bruk?</span><span class="t w" data-tip="brystbevegelse">Symmetrisk brystbevegelse?</span><span class="t w" data-tip="pneumothorax">Ensidig svekket pustelyd?</span><span class="t i" data-tip="spo2">SpO₂ mål &gt;94%</span><span class="t d" data-tip="cyanose">Cyanose (blå lepper/fingre)?</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label" style="color:#60a5fa;">C – Circulation (Sirkulasjon)</div>
        <div class="tags"><span class="t i" data-tip="puls_vurdering">Puls: frekvens, styrke, reg.</span><span class="t d" data-tip="sjokk">Kapillærfyll &gt;2 sek = sjokk</span><span class="t w" data-tip="blek_klam_kald">Blek, klam og kald hud?</span><span class="t w" data-tip="abdomen_distensjon">Undersøk mage</span><span class="t w" data-tip="femur">Undersøk lår (femur)</span><span class="t i" data-tip="leiring_blodning">Leiring ved blødning</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label" style="color:#34d399;">D – Disability (Bevissthet)</div>
        <div class="tags"><span class="t w" data-tip="avpu">AVPU</span><span class="t w" data-tip="gcs">GCS 3–15</span><span class="t w" data-tip="pupiller">Pupiller</span><span class="t w" data-tip="hypoglykemi">Blodsukker</span><span class="t i" data-tip="fast">FAST ved mistanke om hjerneslag</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label" style="color:#a78bfa;">E – Expose (Avkled)</div>
        <div class="tags"><span class="t w" data-tip="expose_klipp">Klipp opp klærne</span><span class="t w" data-tip="expose_full">Hode til tå – inkl. rygg</span><span class="t d" data-tip="hypotermi">Dekk til umiddelbart etter</span></div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🔍 XABCDE – klinisk fordypning</span>
      <span class="badge badge-gray">REF</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">

      <div class="divider sub" onclick="toggleSub('abcde-x')">X – Før ABCDE ▸</div>
      <div id="abcde-x" class="hidden">
        <div class="row" data-row>
          <div class="moi-label" style="color:#f87171;">Egensikkerhet</div>
          <div class="tags"><span class="t d" data-tip="x_sikkerhet">Er stedet trygt for deg?</span><span class="t d" data-tip="x_sikkerhet">Trafikkfare, gass, brann, aggresjon?</span><span class="t i">Du hjelper ingen hvis du selv blir pasient</span></div>
        </div>
        <div class="row" data-row>
          <div class="moi-label" style="color:#f87171;">Stans store blødninger</div>
          <div class="tags"><span class="t d" data-tip="direkte_trykk">Direkte trykk – alltid første valg</span><span class="t w" data-tip="wound_packing">Wound packing ved lyske / armhule</span><span class="t w" data-tip="tourniquet_info">Tourniquet – kun hvis direkte trykk ikke virker</span></div>
          <div class="note r">Direkte trykk minimum 10 min uten å slippe. Husk hypotermi.</div>
        </div>
        <div class="row" data-row>
          <div class="moi-label" style="color:#e5a820;">Forebygg hypotermi</div>
          <div class="tags"><span class="t w" data-tip="hypotermi">Start tidlig – ikke vent til E</span><span class="t w" data-tip="spaceblanket">Space blanket</span><span class="t w" data-tip="isolering">Isolér fra bakken</span><span class="t w" data-tip="expose_klipp">Fjern våte klær</span></div>
        </div>
      </div>

      <div class="divider sub" onclick="toggleSub('abcde-a')">A – Luftvei ▸</div>
      <div id="abcde-a" class="hidden">
        <div class="row" data-row>
          <div class="moi-label" style="color:#34d399;">Åpen</div>
          <div class="tags"><span class="t i" data-tip="luftvei_aapen">Snakker normalt → ingen tiltak nå</span></div>
        </div>
        <div class="row" data-row>
          <div class="moi-label" style="color:#e5a820;">Fremmedlegeme</div>
          <div class="tags"><span class="t w" data-tip="fremmedlegeme">Delvis: oppmuntre til hosting</span><span class="t d" data-tip="ryggslagg">Fullstendig: 5 ryggslag</span><span class="t d" data-tip="heimlich">Deretter 5 Heimlich-støt – veksle</span></div>
        </div>
        <div class="row" data-row>
          <div class="moi-label" style="color:#e5a820;">Truet</div>
          <div class="tags"><span class="t w" data-tip="snorking">Snorking → kjevetak / NPA</span><span class="t w" data-tip="gurgling">Gurgling → sideleie / sug</span><span class="t w" data-tip="stridor">Stridor → obstruksjon / ødem</span></div>
          <div class="tags" style="margin-top:4px;"><span class="t i" data-tip="kjevetak">Kjevetak</span><span class="t i" data-tip="sideleie">Sideleie</span><span class="t i" data-tip="npa">NPA</span><span class="t i" data-tip="suging">Suging</span></div>
        </div>
        <div class="row" data-row>
          <div class="moi-label" style="color:#f87171;">Lukket</div>
          <div class="tags"><span class="t d" data-tip="luftveisoedem">Ødem (anafylaksi, brannskade)</span><span class="t d" data-tip="luftveisskade">Traume mot strupe</span></div>
        </div>
        <div class="row" data-row>
          <div class="moi-label">Åpningsteknikker</div>
          <div class="tags"><span class="t i" data-tip="kjevetak">Kjevetak – ved traume (foretrukket)</span><span class="t i" data-tip="hodeoverstrekning">Hodeoverstrekning – uten traume</span><span class="t i" data-tip="cervikalcolumna">Spinalstabilisering ved MOI</span></div>
        </div>
      </div>

      <div class="divider sub" onclick="toggleSub('abcde-b')">B – Pust ▸</div>
      <div id="abcde-b" class="hidden">
        <div class="row" data-row>
          <div class="moi-label">Vurder pusten</div>
          <div class="tags"><span class="t i" data-tip="rf_normal">RF 12–20/min = normal</span><span class="t w" data-tip="hjelpemuskulatur">Hjelpemuskulatur i bruk?</span><span class="t w" data-tip="brystbevegelse">Symmetrisk bevegelse?</span><span class="t d" data-tip="cyanose">Cyanose?</span><span class="t i" data-tip="spo2">SpO₂ &gt;94%</span></div>
        </div>
        <div class="row" data-row>
          <div class="moi-label" style="color:#e5a820;">Hypoventilasjon (RF &lt;12)</div>
          <div class="tags"><span class="t d" data-tip="respirasjonsdep">Opioidoverdose / benzo</span><span class="t d" data-tip="hodeskade">Hodeskade – intrakranialt trykk</span><span class="t d" data-tip="hypotermi">Alvorlig hypotermi</span></div>
        </div>
        <div class="row" data-row>
          <div class="moi-label" style="color:#e5a820;">Takypné (RF &gt;20)</div>
          <div class="tags"><span class="t w" data-tip="pneumothorax">Pneumothorax</span><span class="t w" data-tip="astma">Astma / KOLS</span><span class="t w" data-tip="sjokk">Kompensatorisk sjokk</span><span class="t w" data-tip="infarkt">Hjerteinfarkt</span><span class="t w" data-tip="anafylaksi">Anafylaksi</span></div>
        </div>
        <div class="row" data-row>
          <div class="moi-label" style="color:#f87171;">Undersøk brystkassen</div>
          <div class="tags"><span class="t w" data-tip="krepitasjon">Krepitasjon / ømhet</span><span class="t d" data-tip="pneumothorax">Ensidig svekket pustelyd</span><span class="t d" data-tip="hemothorax">Dempet perkusjon</span><span class="t d" data-tip="apent_brystsar">Åpne sår</span><span class="t w" data-tip="lungekont">Lungekontusjon</span></div>
        </div>
        <div class="row" data-row>
          <div class="moi-label" style="color:#f87171;">Piping / hvesing</div>
          <div class="tags"><span class="t w" data-tip="astma">Piping ved utpust = astma</span><span class="t d" data-tip="stridor">Piping ved innpust = stridor = luftveisødem</span></div>
        </div>
      </div>

      <div class="divider sub" onclick="toggleSub('abcde-c')">C – Sirkulasjon ▸</div>
      <div id="abcde-c" class="hidden">
        <div class="row" data-row>
          <div class="moi-label">Kliniske sjokkegn</div>
          <div class="tags"><span class="t d" data-tip="blek_klam_kald">Blek, klam og kald hud</span><span class="t d" data-tip="takykardi">Takykardi (&gt;100)</span><span class="t d" data-tip="kapillaerfyll">Kapillærfyll &gt;2 sek</span><span class="t w" data-tip="hypotensjon">Hypotensjon – sent tegn!</span></div>
        </div>
        <div class="row" data-row>
          <div class="moi-label" style="color:#f87171;">Hypovolemisk sjokk</div>
          <div class="tags"><span class="t d" data-tip="hypovolemi">Blødning (indre eller ytre)</span><span class="t d" data-tip="dehydrering">Alvorlig dehydrering</span><span class="t d" data-tip="brannskade">Store brannskader</span></div>
        </div>
        <div class="row" data-row>
          <div class="moi-label" style="color:#f87171;">Kardiogent sjokk</div>
          <div class="tags"><span class="t d" data-tip="infarkt">Hjerteinfarkt</span><span class="t d" data-tip="arytmi">Alvorlig arytmi</span><span class="t d" data-tip="tamponade">Hjertetamponade</span></div>
        </div>
        <div class="row" data-row>
          <div class="moi-label" style="color:#f87171;">Distributivt sjokk</div>
          <div class="tags"><span class="t d" data-tip="anafylaksi">Anafylaksi</span><span class="t d" data-tip="sepsis">Sepsis</span><span class="t d" data-tip="ryggmargsjokk">Nevrogent (ryggmarg)</span></div>
        </div>
        <div class="row" data-row>
          <div class="moi-label" style="color:#f87171;">Obstruktivt sjokk</div>
          <div class="tags"><span class="t d" data-tip="tensjon">Tensjonspneumothorax</span><span class="t d" data-tip="tamponade">Hjertetamponade</span><span class="t d" data-tip="trombose">Massiv lungeemboli</span></div>
        </div>
        <div class="row" data-row>
          <div class="moi-label">Undersøkelse – C</div>
          <div class="tags"><span class="t w" data-tip="abdomen_distensjon">Undersøk mage (rigiditet, ømhet)</span><span class="t w" data-tip="femur">Undersøk lår (femurfraktur)</span><span class="t w" data-tip="bekken_test">Bekken – kun ett forsøk</span><span class="t i" data-tip="leiring_blodning">Leiring ved blødning</span></div>
        </div>
        <div class="row" data-row>
          <div class="moi-label">Puls – tolkning</div>
          <div class="tags"><span class="t w" data-tip="takykardi">Svak og rask → sjokk</span><span class="t w" data-tip="arytmi">Uregelmessig → arytmi</span><span class="t d" data-tip="hjertestans">Ingen puls → HLR</span><span class="t i" data-tip="betablokkere">Betablokkere maskerer takykardi!</span></div>
        </div>
      </div>

      <div class="divider sub" onclick="toggleSub('abcde-d')">D – Bevissthet ▸</div>
      <div id="abcde-d" class="hidden">
        <div class="row" data-row>
          <div class="moi-label">Vurder med</div>
          <div class="tags"><span class="t i" data-tip="avpu">AVPU – rask screening</span><span class="t w" data-tip="gcs">GCS – ved hodeskade / forløp</span><span class="t w" data-tip="pupiller">Pupiller alltid</span><span class="t w" data-tip="hypoglykemi">Blodsukker alltid</span></div>
        </div>
        <div class="row" data-row>
          <div class="moi-label">Mistanke om hjerneslag</div>
          <div class="tags"><span class="t d" data-tip="fast_f">Ansiktshenge (F)</span><span class="t d" data-tip="fast_a">Armsvakhet (A)</span><span class="t d" data-tip="fast_s">Taleforstyrrelse (S)</span><span class="t d" data-tip="fast">Tid – ring 113 (T)</span><span class="t i" data-tip="nihss_tip">NIHSS-score</span></div>
          <div class="note r">Trombolyse-vindu 4,5 timer – tid er hjerneceller</div>
        </div>
        <div class="row" data-row>
          <div class="moi-label" style="color:#f87171;">Årsaker til nedsatt bevissthet</div>
          <div class="tags"><span class="t d" data-tip="hodeskade">Hodeskade</span><span class="t d" data-tip="hypoglykemi">Hypoglykemi</span><span class="t d" data-tip="overdose">Rus / overdose</span><span class="t d" data-tip="fast">Hjerneslag</span><span class="t d" data-tip="epilepsi">Postiktalt</span><span class="t d" data-tip="hypotermi">Hypotermi</span><span class="t d" data-tip="hypoxi">Hypoksi</span><span class="t d" data-tip="sjokk">Alvorlig sjokk</span><span class="t d" data-tip="co">CO-forgiftning</span><span class="t d" data-tip="hyponatremi">Hyponatremi</span></div>
          <div class="note r">Mål alltid blodsukker – hypoglykemi er lett behandlbart</div>
        </div>
        <div class="row" data-row>
          <div class="moi-label">AEIOU-TIPS huskeregel</div>
          <div class="tags"><span class="t i" data-tip="aeiou_a">A – Alkohol/Acidose</span><span class="t i" data-tip="aeiou_e">E – Epilepsi</span><span class="t i" data-tip="aeiou_i1">I – Insulin</span><span class="t i" data-tip="aeiou_o">O – Overdose</span><span class="t i" data-tip="aeiou_u">U – Uremi</span><span class="t i" data-tip="aeiou_t">T – Traume</span><span class="t i" data-tip="aeiou_i2">I – Infeksjon</span><span class="t i" data-tip="aeiou_p">P – Psykiatri/Slag</span><span class="t i" data-tip="aeiou_s">S – Sjokk</span></div>
        </div>
      </div>

      <div class="divider sub" onclick="toggleSub('abcde-e')">E – Eksponering ▸</div>
      <div id="abcde-e" class="hidden">
        <div class="row" data-row>
          <div class="moi-label">Hode og ansikt</div>
          <div class="tags"><span class="t w" data-tip="hodeskade">Blødning / deformitet</span><span class="t w" data-tip="pupiller">Pupiller</span><span class="t w" data-tip="basisfraktur">Øre/neseblødning → basisfraktur?</span></div>
        </div>
        <div class="row" data-row>
          <div class="moi-label">Nakke</div>
          <div class="tags"><span class="t w" data-tip="cervikalcolumna">Ømhet over virvler</span><span class="t w" data-tip="veneturgescens">Veneturgescens</span><span class="t w" data-tip="trakealdeviasjon">Trakeal deviasjon</span></div>
        </div>
        <div class="row" data-row>
          <div class="moi-label">Thorax</div>
          <div class="tags"><span class="t w" data-tip="krepitasjon">Krepitasjon / ømhet</span><span class="t w" data-tip="pneumothorax">Asymmetrisk bevegelse</span><span class="t w" data-tip="apent_brystsar">Åpne sår</span></div>
        </div>
        <div class="row" data-row>
          <div class="moi-label">Abdomen</div>
          <div class="tags"><span class="t w" data-tip="milt">Rigiditet venstre øvre</span><span class="t w" data-tip="leverruptur">Ømhet høyre øvre</span><span class="t w" data-tip="abdomen_distensjon">Distensjon</span></div>
        </div>
        <div class="row" data-row>
          <div class="moi-label">Bekken / lår / rygg</div>
          <div class="tags"><span class="t w" data-tip="bekken_test">Bekken – kun ett forsøk</span><span class="t w" data-tip="femur">Lår – deformitet / hevelse</span><span class="t w" data-tip="loggroll">Loggroll – palpér rygg</span></div>
        </div>
        <div class="row" data-row>
          <div class="moi-label" style="color:#f87171;">Hypotermiforebygging</div>
          <div class="tags"><span class="t d" data-tip="hypotermi">Dekk til umiddelbart</span><span class="t w" data-tip="spaceblanket">Space blanket</span><span class="t w" data-tip="isolering">Isolér fra bakken</span></div>
        </div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">📊 Normalverdier</span>
      <span class="badge badge-gray">REF</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="divider">Vitale tegn – voksen</div>
      <div class="row" data-row>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
          <div><div class="moi-label">Puls</div><div class="tags"><span class="t i" data-tip="puls_normal">Normal: 60–100</span><span class="t w" data-tip="bradykardi">Under 50</span><span class="t d" data-tip="takykardi">Over 130</span></div></div>
          <div><div class="moi-label">BT systolisk</div><div class="tags"><span class="t i" data-tip="bt_normal">Normal: 100–140</span><span class="t d" data-tip="hypotensjon">Under 90</span></div></div>
          <div><div class="moi-label">RF</div><div class="tags"><span class="t i" data-tip="rf_normal">Normal: 12–20</span><span class="t d" data-tip="rf_kritisk">Under 10 / over 29</span></div></div>
          <div><div class="moi-label">SpO₂</div><div class="tags"><span class="t i" data-tip="spo2">Normal: 95–100%</span><span class="t w" data-tip="spo2_lav">90–94%</span><span class="t d" data-tip="spo2_kritisk">Under 90%</span></div></div>
          <div><div class="moi-label">Temperatur</div><div class="tags"><span class="t i" data-tip="temp_normal">Normal: 36,5–37,5°C</span><span class="t d" data-tip="hypotermi">Under 35°</span><span class="t d" data-tip="varmeslag">Over 40°</span></div></div>
          <div><div class="moi-label">Blodsukker</div><div class="tags"><span class="t i" data-tip="bs_normal">Normal: 4–7 mmol/L</span><span class="t d" data-tip="hypoglykemi">Under 4</span></div></div>
        </div>
      </div>
      <div class="divider">AVPU</div>
      <div class="row" data-row>
        <div class="tags"><span class="t i" data-tip="avpu_a">A – Alert</span><span class="t w" data-tip="avpu_v">V – Voice</span><span class="t w" data-tip="avpu_p">P – Pain</span><span class="t d" data-tip="avpu_u">U – Unresponsive</span></div>
      </div>
      <div class="divider">GCS</div>
      <div class="row" data-row>
        <div style="font-size:11px; color:#ccc; line-height:2;">
          <div style="display:grid; grid-template-columns:20px 1fr 1fr 1fr; gap:0 8px;">
            <span style="color:#555;"></span><span style="color:#60a5fa;font-weight:600;">Øyne</span><span style="color:#60a5fa;font-weight:600;">Verbal</span><span style="color:#60a5fa;font-weight:600;">Motorisk</span>
            <span style="color:#555;">4</span><span>Spontant</span><span>Orientert</span><span>Følger ordre</span>
            <span style="color:#555;">3</span><span>På stemme</span><span>Forvirret</span><span>Lokaliserer</span>
            <span style="color:#555;">2</span><span>På smerte</span><span>Enkeltord</span><span>Trekker unna</span>
            <span style="color:#555;">1</span><span>Ingen</span><span>Lyder/ingen</span><span>Ext./ingen</span>
          </div>
        </div>
        <div class="tags" style="margin-top:6px;"><span class="t i" data-tip="gcs_normal">15 = normal</span><span class="t w" data-tip="gcs_paavirket">13–14 = påvirket</span><span class="t d" data-tip="gcs_alvorlig">8 eller under = alvorlig</span></div>
      </div>
      <div class="divider">Barn – orienterende</div>
      <div class="row" data-row>
        <div style="font-size:11px; color:#ccc; line-height:2;">
          <div style="display:grid; grid-template-columns:1fr 1fr 1fr 1fr; gap:0 4px;">
            <span style="color:#60a5fa;font-weight:600;">Alder</span><span style="color:#60a5fa;font-weight:600;">Puls</span><span style="color:#60a5fa;font-weight:600;">RF</span><span style="color:#60a5fa;font-weight:600;">BT syst.</span>
            <span>Nyfødt</span><span>100–160</span><span>30–60</span><span>&gt;60</span>
            <span>1 år</span><span>100–150</span><span>25–40</span><span>&gt;70</span>
            <span>5 år</span><span>80–120</span><span>20–30</span><span>&gt;80</span>
            <span>10 år</span><span>70–110</span><span>15–25</span><span>&gt;90</span>
          </div>
        </div>
        <div class="note" style="margin:6px 0 0;">Min. BT barn ≈ 70 + (2 × alder i år)</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🧠 NIHSS – Slag-skala</span>
      <span class="badge badge-gray">REF</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div style="padding: 4px 0;">
          <div class="nihss-row hd"><span>Punkt</span><span>Hva testes</span><span>Score</span></div>
          <div class="nihss-row"><span>1a</span><span>Bevissthetsnivå</span><span>0–3</span></div>
          <div class="nihss-row"><span>1b</span><span>Spørsmål (alder, måned)</span><span>0–2</span></div>
          <div class="nihss-row"><span>1c</span><span>Kommandoer (knytt hånd)</span><span>0–2</span></div>
          <div class="nihss-row"><span>2</span><span>Blikk (øyebevegelse)</span><span>0–2</span></div>
          <div class="nihss-row"><span>3</span><span>Synsfelt</span><span>0–3</span></div>
          <div class="nihss-row"><span>4</span><span>Ansiktslammelse</span><span>0–3</span></div>
          <div class="nihss-row"><span>5a/5b</span><span>Arm motorikk (V/H)</span><span>0–4</span></div>
          <div class="nihss-row"><span>6a/6b</span><span>Ben motorikk (V/H)</span><span>0–4</span></div>
          <div class="nihss-row"><span>7</span><span>Ataksi (koordinasjon)</span><span>0–2</span></div>
          <div class="nihss-row"><span>8</span><span>Sensibilitet</span><span>0–2</span></div>
          <div class="nihss-row"><span>9</span><span>Språk / afasi</span><span>0–3</span></div>
          <div class="nihss-row"><span>10</span><span>Dysartri (utydelig tale)</span><span>0–2</span></div>
          <div class="nihss-row"><span>11</span><span>Neglekt / uoppmerksomhet</span><span>0–2</span></div>
        </div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Alvorlighetsgrad – total score 0–42</div>
        <div class="tags">
          <span class="t i" data-tip="nihss_tip">0 = Normal</span>
          <span class="t i" data-tip="nihss_tip">1–4 = Mild</span>
          <span class="t w" data-tip="nihss_tip">5–15 = Moderat</span>
          <span class="t d" data-tip="nihss_tip">16–20 = Alvorlig</span>
          <span class="t d" data-tip="nihss_tip">21–42 = Svært alvorlig</span>
        </div>
        <div class="note r">Score ≥5 = sannsynlig kandidat for trombolyse / trombektomi</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Motorikk – score per lem</div>
        <div class="tags"><span class="t i">0 = Ingen drift</span><span class="t w">1 = Drift etter 10 sek</span><span class="t w">2 = Klarer mot tyngdekraft</span><span class="t d">3 = Ingen mot tyngdekraft</span><span class="t d">4 = Ingen bevegelse</span></div>
      </div>
    </div>
  </div>
`);
