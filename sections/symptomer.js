(window.SECTIONS = window.SECTIONS || []).push(`
  <div class="group-label">Symptomer og sykdommer</div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🌊 Drukning</span>
      <span class="badge badge-red">HØY</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Tegn og vurdering</div>
        <div class="tags"><span class="t d" data-tip="bevissth">Bevissthetspåvirkning</span><span class="t d" data-tip="hypoxi">Hypoksi</span><span class="t d" data-tip="hypotermi">Hypotermi</span><span class="t w" data-tip="cervikalcolumna">Cervikalcolumna ved stuping/ulykke</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Behandling</div>
        <div class="tags"><span class="t d" data-tip="drukning">5 innblåsninger først – deretter 30:2</span><span class="t d" data-tip="sideleie">Sideleie ved bevissthet</span><span class="t w" data-tip="drukning_hypotermi">Kald drukning – ikke gi opp</span></div>
        <div class="note r">Kald drukning: hypotermi kan beskytte hjernen. Fortsett HLR inntil varm.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Spesielle hensyn</div>
        <div class="tags"><span class="t w" data-tip="aspirasjon">Aspirasjon av vann</span><span class="t w" data-tip="drukning_barn">Barn drukner stille</span><span class="t i" data-tip="drukning_sek">Akutt lungeødem etter drukning – observer</span><span class="t w" data-tip="drukning_hypotermi">Hypotermi og drukning</span></div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">⚡ Elektrisk skade</span>
      <span class="badge badge-red">HØY</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Egensikkerhet først</div>
        <div class="tags"><span class="t d" data-tip="el_sikkerhet">Ikke rør pasient før strøm er brutt</span></div>
        <div class="note r">Du kan selv bli offer – koble fra strøm eller bruk isolert materiale</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Lavspent (230V husholdning)</div>
        <div class="tags"><span class="t d" data-tip="arytmi">Hjertearytmi / hjertestans</span><span class="t w" data-tip="el_skade">Inn-/utgangssår</span><span class="t w" data-tip="brannskade">Brannskader langs strømbane</span><span class="t w" data-tip="muskelskade">Muskelskade</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Høyspent (&gt;1000V)</div>
        <div class="tags"><span class="t d" data-tip="kastefenomen">Kastefenomen – sekundærfall</span><span class="t d" data-tip="brannskade">Lysbue-brannskader</span><span class="t d" data-tip="arytmi">Alvorlig arytmi</span><span class="t d" data-tip="rabdomyolyse">Rabdomyolyse</span></div>
        <div class="note r">Høyspent dreper på avstand – hold 10 m og ring 110 + 113</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Tiltak</div>
        <div class="tags"><span class="t d" data-tip="hjertestans">Vurder HLR – arytmi kan oppstå forsinket</span><span class="t w" data-tip="el_skade">Dokumenter inn- og utgangssår</span><span class="t w" data-tip="hypotermi">Hold varm</span></div>
        <div class="note">Observer i minst 6 timer – arytmi kan debutere etter tid</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🔥 Brann og røykeksponering</span>
      <span class="badge badge-red">HØY</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Egensikkerhet</div>
        <div class="tags"><span class="t d" data-tip="brann_sikkerhet">Ikke gå inn uten verneutstyr</span><span class="t d" data-tip="co">CO kan drepe stille – ingen lukt</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Brannskade – vurdering</div>
        <div class="tags"><span class="t w" data-tip="brannskade">Grad 1–3 – dybde og utbredelse</span><span class="t d" data-tip="inhalasjon">Inhalasjonsskade</span><span class="t d" data-tip="luftveisoedem">Luftveisødem – forsinket!</span><span class="t d" data-tip="co">CO-forgiftning</span><span class="t d" data-tip="cyanid">Cyanid ved plastbrann</span></div>
        <div class="note r">Sot rundt munn/nese, heshet eller stridor = inhalasjonsskade – handle raskt</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Røykeksponering / lukket rom</div>
        <div class="tags"><span class="t d" data-tip="co">CO-forgiftning – SpO₂ viser falskt normalt!</span><span class="t d" data-tip="cyanid">Cyanid (plast, møbler)</span><span class="t w" data-tip="bevissth">Bevissthetspåvirkning</span></div>
        <div class="note r">Frisk luft er primærbehandling – flytt pasient ut umiddelbart</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Kjøling av brannskade</div>
        <div class="tags"><span class="t w" data-tip="brannskade_kjoling">Romtemperert vann 20 min</span><span class="t i">Ikke is – forverrer vevsskaden</span><span class="t i">Ikke glasur / smør</span><span class="t d" data-tip="hypotermi">Pass på hypotermi ved kjøling</span></div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">💊 Forgiftning</span>
      <span class="badge badge-red">HØY</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Første tiltak</div>
        <div class="tags"><span class="t d" data-tip="luftvei">Sikre luftvei</span><span class="t d" data-tip="sideleie">Sideleie</span><span class="t w" data-tip="ringGift">Ring Giftinfo: 22 59 13 00</span></div>
        <div class="note b">Giftinformasjonen gir spesifikke råd – ring tidlig</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Mistenkt forgiftning – vurder</div>
        <div class="tags"><span class="t w" data-tip="forgiftning_hva">Hva er inntatt? Dose? Tid?</span><span class="t w" data-tip="miosepupiller">Pupiller</span><span class="t w" data-tip="hudstatus">Hudstatus</span><span class="t w" data-tip="hypoglykemi">Blodsukker</span><span class="t w" data-tip="rf_normal">Respirasjonsfrekvens</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Spesielle forgiftninger</div>
        <div class="tags"><span class="t d" data-tip="co">CO – luktfri, SpO₂ upålitelig</span><span class="t d" data-tip="cyanid">Cyanid – plastbrann</span><span class="t d" data-tip="nalokson">Opiater – nalokson</span><span class="t w" data-tip="alkohol">Alkohol</span><span class="t w" data-tip="benzo_alkohol">Benzo + alkohol</span></div>
      </div>
      <div class="note r" style="margin:8px 14px;">Aldri gi melk, vann eller fremkall brekninger uten råd fra Giftinfo</div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🏋 Overanstrengelse / overbelastning</span>
      <span class="badge badge-amber">MOD</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Uttømming og kollaps</div>
        <div class="tags"><span class="t w" data-tip="uttomming">Uttømming – gi sukker og hvile</span><span class="t d" data-tip="varmeslag">Varmeslag</span><span class="t d" data-tip="hyponatremi">Hyponatremi ved for mye vann</span><span class="t d" data-tip="hjertestans">Hjertestans – alltid vurder</span></div>
        <div class="note r">Kollaps etter målgang = hjertestans inntil annet bevist</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Muskel og sene</div>
        <div class="tags"><span class="t d" data-tip="rabdomyolyse">Rabdomyolyse ved ekstrem belastning</span><span class="t w" data-tip="akillesruptur">Akillesruptur</span><span class="t w" data-tip="lyske">Lyske / hamstring</span></div>
        <div class="note">Cola-farget urin etter hard trening = mistenk rabdomyolyse</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Leddbånd og brusk</div>
        <div class="tags"><span class="t w" data-tip="acl">Kneskade ACL</span><span class="t w" data-tip="ankel">Ankelskade</span><span class="t w" data-tip="skulder">Skulderdislokasjon</span></div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🥶 Eksponering – kaldt vær</span>
      <span class="badge badge-red">HØY</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Hypotermi – gjenkjenn</div>
        <div class="tags"><span class="t w" data-tip="hypotermi_mild">Mild (&gt;32°C): skjelving, klumsete</span><span class="t w" data-tip="hypotermi_mod">Moderat (28–32°C): slutter å skjelve, forvirret</span><span class="t d" data-tip="hypotermi">Alvorlig (&lt;28°C): bevisstløs, arytmi</span></div>
        <div class="note r">Slutter å skjelve + forvirret = farlig tegn, ikke bedring</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Frostskader</div>
        <div class="tags"><span class="t w" data-tip="frostskader">Grad 1–3 – fingre, tær, nese, ører</span><span class="t i">Ikke gni – skader vevet</span><span class="t i">Ikke varm opp hvis refreezing-risiko</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Behandling hypotermi</div>
        <div class="tags"><span class="t d" data-tip="spaceblanket">Space blanket – sølvsiden inn</span><span class="t d" data-tip="isolering">Isolér fra bakken</span><span class="t w" data-tip="expose_klipp">Fjern våte klær forsiktig</span><span class="t w" data-tip="hypoglykemi">Mål blodsukker</span></div>
        <div class="note">Håndter forsiktig – kalde hjerter er sensitive for arytmi ved bevegelse</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Kombinasjoner å passe på</div>
        <div class="tags"><span class="t d" data-tip="hypotermi">Hypotermi + alkohol – alkohol øker varmetap</span><span class="t d" data-tip="hypoglykemi">Hypotermi + hypoglykemi</span><span class="t d" data-tip="hodeskade">Hypotermi maskerer hodeskade</span></div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🔍 Rus – klinisk vurdering</span>
      <span class="badge badge-red">HØY</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label" style="color:#f87171;">⚠ Rus kan maskere skade</div>
        <div class="tags"><span class="t d" data-tip="rus_maskerer">Smerte dempes – skjuler alvorlig skade</span><span class="t d" data-tip="hodeskade">Hodeskade ligner rus</span><span class="t d" data-tip="hypoglykemi">Hypoglykemi ligner rus</span></div>
        <div class="note r">Alltid ABCDE – aldri anta at det «bare er rus»</div>
      </div>
      <div class="divider">Pupiller som diagnostisk verktøy</div>
      <div class="row" data-row>
        <div class="tags"><span class="t d" data-tip="miosepupiller">Trange (miose) → depressiva (opioider, benzo, alkohol)</span><span class="t w" data-tip="vidpupiller">Vide (mydriasis) → stimulanter, hallusinogener</span></div>
      </div>
      <div class="divider">ABCDE-tilnærming ved ruspåvirkning</div>
      <div class="row" data-row>
        <div class="tags"><span class="t d" data-tip="luftvei">A – Sikre luftvei alltid</span><span class="t d" data-tip="respirasjonsdep">B – Vurder RF og pustemønster</span><span class="t d" data-tip="sjokk">C – Puls og sirkulasjon</span><span class="t w" data-tip="hypoglykemi">D – Mål blodsukker alltid</span><span class="t w" data-tip="hypotermi">E – Temperatur</span></div>
        <div class="note r">Bevisstløs ruspåvirket person = sikre luftvei + sideleie + ring 113</div>
      </div>
      <div class="divider">Farlige kombinasjoner</div>
      <div class="row" data-row>
        <div class="tags"><span class="t d" data-tip="benzo_alkohol">Alkohol + benzo</span><span class="t d" data-tip="ghb">Alkohol + GHB</span><span class="t d" data-tip="opioidtriade">Opioider + benzo</span><span class="t d" data-tip="hypertermi_rus">MDMA + varme</span></div>
      </div>
      <div class="divider">Generelle tiltak ukjent rus</div>
      <div class="row" data-row>
        <div class="tags"><span class="t d" data-tip="luftvei">Sikre luftvei</span><span class="t d" data-tip="sideleie">Sideleie</span><span class="t w" data-tip="hypoglykemi">Mål blodsukker</span><span class="t w" data-tip="hypotermi">Temperatur</span><span class="t w" data-tip="rf_normal">Observer RF</span><span class="t d" data-tip="hjertestans">Ring 113</span></div>
        <div class="note r">Aldri la bevisstløs ruspåvirket person være alene</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">💊 Rus – rusmidler</span>
      <span class="badge badge-red">HØY</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="divider sub" onclick="toggleSub('rus-alkohol')">🍺 Alkohol ▸</div>
      <div id="rus-alkohol" class="hidden">
        <div class="row" data-row>
          <div class="tags"><span class="t w" data-tip="alkohol">Koordinasjonssvikt</span><span class="t w" data-tip="alkohol_tale">Utydelig tale</span><span class="t d" data-tip="respirasjonsdep">Respirasjonsdepresjon</span><span class="t d" data-tip="hypotermi">Hypotermi</span><span class="t d" data-tip="hypoglykemi">Hypoglykemi</span></div>
          <div class="note r">Bevisstløs + alkohol = sideleie alltid – aspirasjonfare</div>
        </div>
      </div>
      <div class="divider sub" onclick="toggleSub('rus-opioider')">💉 Opioider (heroin, morfin, fentanyl) ▸</div>
      <div id="rus-opioider" class="hidden">
        <div class="row" data-row>
          <div class="tags"><span class="t d" data-tip="opioidtriade">Respirasjonsdepresjon</span><span class="t d" data-tip="bevissth">Bevisstløshet</span><span class="t d" data-tip="miosepupiller">Nålespisse pupiller</span></div>
          <div class="note r">Alle tre = opioidoverdose inntil annet bevist</div>
        </div>
        <div class="row" data-row>
          <div class="tags"><span class="t d" data-tip="luftvei">Luftvei + sideleie</span><span class="t d" data-tip="hjertestans">Ring 113</span><span class="t d" data-tip="nalokson">Nalokson (Narcanti)</span></div>
          <div class="note">Nalokson virker 30–90 min. Fentanyl krever gjentatte doser.</div>
        </div>
      </div>
      <div class="divider sub" onclick="toggleSub('rus-stimulanter')">⚡ Stimulanter (amfetamin, kokain, MDMA) ▸</div>
      <div id="rus-stimulanter" class="hidden">
        <div class="row" data-row>
          <div class="tags"><span class="t d" data-tip="stimulanter">Agitasjon / aggresjon</span><span class="t d" data-tip="takykardi">Takykardi / hypertensjon</span><span class="t d" data-tip="hypertermi_rus">Hypertermi</span><span class="t w" data-tip="vidpupiller">Vide pupiller</span></div>
        </div>
        <div class="row" data-row>
          <div class="moi-label">MDMA</div>
          <div class="tags"><span class="t d" data-tip="hyponatremi">Hyponatremi</span><span class="t d" data-tip="hypertermi_rus">Overoppheting</span><span class="t w" data-tip="epilepsi">Kramper</span></div>
          <div class="note r">MDMA + dans + varme = livsfarlig. Ikke gi mer vann ved forvirring.</div>
        </div>
        <div class="row" data-row>
          <div class="moi-label">Kokain</div>
          <div class="tags"><span class="t d" data-tip="arytmi">Arytmi</span><span class="t d" data-tip="infarkt">Hjerteinfarkt ung!</span><span class="t w" data-tip="utstråling_hjerte">Brystsmerter</span></div>
        </div>
      </div>
      <div class="divider sub" onclick="toggleSub('rus-hallusinogener')">🍄 Hallusinogener (LSD, sopp, ketamin) ▸</div>
      <div id="rus-hallusinogener" class="hidden">
        <div class="row" data-row>
          <div class="tags"><span class="t w" data-tip="vidpupiller">Vide pupiller</span><span class="t w" data-tip="hallusinasjon">Hallusinasjoner</span><span class="t w" data-tip="desorientering">Desorientering / panikk</span></div>
        </div>
        <div class="row" data-row>
          <div class="tags"><span class="t d" data-tip="ketaminhole">K-hole (ketamin)</span><span class="t w" data-tip="talkdown">Rolig miljø – talk-down</span></div>
        </div>
      </div>
      <div class="divider sub" onclick="toggleSub('rus-benzo')">💊 Benzodiazepiner ▸</div>
      <div id="rus-benzo" class="hidden">
        <div class="row" data-row>
          <div class="tags"><span class="t w" data-tip="sedasjon">Sløvhet / sedasjon</span><span class="t d" data-tip="respirasjonsdep">Respirasjonsdepresjon</span><span class="t w" data-tip="amnesi">Hukommelsestap</span></div>
          <div class="note r">Benzo + alkohol = livsfarlig kombinasjon</div>
        </div>
      </div>
      <div class="divider sub" onclick="toggleSub('rus-ghb')">🔬 GHB / GBL ▸</div>
      <div id="rus-ghb" class="hidden">
        <div class="row" data-row>
          <div class="tags"><span class="t d" data-tip="ghb">Brå bevisstløshet</span><span class="t d" data-tip="respirasjonsdep">Respirasjonsdepresjon</span><span class="t w" data-tip="bradykardi">Bradykardi</span></div>
          <div class="note r">Kan gå fra oppegående til bevisstløs på minutter</div>
        </div>
        <div class="row" data-row>
          <div class="tags"><span class="t d" data-tip="luftvei">Luftvei</span><span class="t d" data-tip="sideleie">Sideleie</span><span class="t d" data-tip="hjertestans">Ring 113</span><span class="t w" data-tip="ghb_vaakne">Kan våkne agitert</span></div>
          <div class="note">GHB + alkohol = ekstremt farlig.</div>
        </div>
      </div>
      <div class="divider sub" onclick="toggleSub('rus-cannabis')">🌿 Cannabis / Spice ▸</div>
      <div id="rus-cannabis" class="hidden">
        <div class="row" data-row>
          <div class="tags"><span class="t w" data-tip="rode_oyne">Røde øyne</span><span class="t w" data-tip="cannabis_rus">Eufori / paranoia</span><span class="t w" data-tip="takykardi">Økt puls</span></div>
        </div>
        <div class="row" data-row>
          <div class="moi-label">Spice – langt farligere</div>
          <div class="tags"><span class="t d" data-tip="epilepsi">Kramper</span><span class="t d" data-tip="arytmi">Arytmi</span><span class="t d" data-tip="bevissth">Bevisstløshet</span><span class="t w" data-tip="psykose">Psykose</span></div>
          <div class="note r">Spice er uforutsigbart – livstruende selv ved lav dose</div>
        </div>
      </div>
    </div>
  </div>
`);
