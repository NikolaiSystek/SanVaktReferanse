(window.SECTIONS = window.SECTIONS || []).push(`
  <div class="group-label">Skader</div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🏅 PRICE – idrettsskade</span>
      <span class="badge badge-gray">REF</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div style="padding: 2px 0;">
          <div class="piksib-step">
            <div class="piksib-letter" style="color:#60a5fa;">P</div>
            <div class="piksib-text"><strong>Protection</strong>Beskytt skadestedet mot videre skade. Støttebandage, krykker.</div>
          </div>
          <div class="piksib-step">
            <div class="piksib-letter" style="color:#60a5fa;">R</div>
            <div class="piksib-text"><strong>Rest</strong>Avlast – stopp aktiviteten. Ikke belast.</div>
          </div>
          <div class="piksib-step">
            <div class="piksib-letter" style="color:#60a5fa;">I</div>
            <div class="piksib-text"><strong>Ice</strong>Is/kulde i 15–20 min. Alltid tøy mellom is og hud. Ikke direkte is mot hud.</div>
          </div>
          <div class="piksib-step">
            <div class="piksib-letter" style="color:#60a5fa;">C</div>
            <div class="piksib-text"><strong>Compression</strong>Kompresjonsbandasje for å dempe hevelse. Ikke for stramt.</div>
          </div>
          <div class="piksib-step" style="border-bottom:none;">
            <div class="piksib-letter" style="color:#60a5fa;">E</div>
            <div class="piksib-text"><strong>Elevation</strong>Hev ekstremiteten over hjertehøyde for å redusere hevelse.</div>
          </div>
        </div>
      </div>
      <div class="note">Gjelder bløtvevsskader: strekk, forstuing, muskelruptur. Ikke ved mistenkt brudd.</div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🦴 Bruddskader</span>
      <span class="badge badge-gray">REF</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="divider">Sikre tegn på brudd</div>
      <div class="row" data-row>
        <div class="tags"><span class="t d" data-tip="brudd_sikre">Unormal stilling / vinkling</span><span class="t d" data-tip="brudd_sikre">Krepitasjon (knitring)</span><span class="t d" data-tip="brudd_sikre">Synlig bein</span><span class="t d" data-tip="brudd_sikre">Unormal bevegelse</span></div>
      </div>
      <div class="divider">Usikre tegn på brudd</div>
      <div class="row" data-row>
        <div class="tags"><span class="t w" data-tip="brudd_usikre">Smerte og ømhet</span><span class="t w" data-tip="brudd_usikre">Hevelse og bloduttredelse</span><span class="t w" data-tip="brudd_usikre">Nedsatt funksjon</span><span class="t w" data-tip="brudd_usikre">Økt varme</span></div>
        <div class="note">Usikre tegn kan også skyldes forstuing eller muskelskade</div>
      </div>
      <div class="divider">Tiltak</div>
      <div class="row" data-row>
        <div class="tags"><span class="t i" data-tip="brudd_tiltak">Stabiliser i funnet stilling</span><span class="t i" data-tip="puls_distalt">Sjekk puls og sensibilitet distalt</span><span class="t w" data-tip="brudd_aapent">Åpent brudd – dekk med sterilt bandasje</span><span class="t w" data-tip="bekken_test">Bekken – kun ett forsøk</span></div>
      </div>
      <div class="divider">Alvorlige brudd å mistenke ved MOI</div>
      <div class="row" data-row>
        <div class="tags"><span class="t d" data-tip="femur">Lårben – stor intern blødning</span><span class="t d" data-tip="bekken">Bekken – opptil 4L intern blødning</span><span class="t d" data-tip="cervikalcolumna">Nakke – alltid ved relevant MOI</span><span class="t d" data-tip="calcaneus">Hælbein ved fall fra høyde</span></div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🔥 Brannskade – behandling</span>
      <span class="badge badge-gray">REF</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="divider">Prioriter luftvei – tegn på inhalasjonsskade</div>
      <div class="row" data-row>
        <div class="tags"><span class="t d" data-tip="inhalasjon_tegn">Sot rundt munn / nese</span><span class="t d" data-tip="inhalasjon_tegn">Svidde nesehår</span><span class="t d" data-tip="stridor">Heshet / stridor</span><span class="t d" data-tip="luftveisoedem">Hovne lepper</span></div>
        <div class="note r">Inhalasjonsskade = rask transport. Luftveisødem kan lukke seg etter timer.</div>
      </div>
      <div class="divider">Dybde – rask vurdering</div>
      <div class="row" data-row>
        <div style="font-size:11px; color:#ccc; line-height:2.1;">
          <div style="display:grid; grid-template-columns:1fr 1fr 1fr 1fr; gap:0 6px;">
            <span style="color:#60a5fa;font-weight:600;">Grad</span><span style="color:#60a5fa;font-weight:600;">Utseende</span><span style="color:#60a5fa;font-weight:600;">Smerte</span><span style="color:#60a5fa;font-weight:600;">Tiltak</span>
            <span>1. grad</span><span>Rød, tørr</span><span>++</span><span>Krem</span>
            <span>2. overfladisk</span><span>Blemmer, fuktig</span><span>+++</span><span>Bandasje</span>
            <span>2. dyp</span><span>Mørkerød</span><span>+/–</span><span>Sykehus</span>
            <span>3. grad</span><span>Hvit/brun, læraktig</span><span>–</span><span>Sykehus</span>
          </div>
        </div>
      </div>
      <div class="divider">Utbredelse – 9 %-regelen</div>
      <div class="row" data-row>
        <div style="font-size:11px; color:#ccc; line-height:2;">
          <div style="display:grid; grid-template-columns:1fr 1fr 1fr 1fr; gap:0 6px;">
            <span style="color:#60a5fa;font-weight:600;">Område</span><span style="color:#60a5fa;font-weight:600;">%</span><span style="color:#60a5fa;font-weight:600;">Område</span><span style="color:#60a5fa;font-weight:600;">%</span>
            <span>Hode/hals</span><span>9%</span><span>Arm (hver)</span><span>9%</span>
            <span>Trunkus for</span><span>18%</span><span>Ben (hvert)</span><span>18%</span>
            <span>Trunkus bak</span><span>18%</span><span>Genitalia</span><span>1%</span>
          </div>
        </div>
        <div class="note">Pasientens håndflate + fingre ≈ 1 % av kroppsoverflaten</div>
      </div>
      <div class="divider">Kjøling og tiltak</div>
      <div class="row" data-row>
        <div class="tags"><span class="t w" data-tip="brannskade_kjoling">Romtemperert vann – 20 min</span><span class="t i">Ikke is</span><span class="t d" data-tip="hypotermi">Pass hypotermi – stopp kjøling etter 20 min</span></div>
      </div>
      <div class="row" data-row>
        <div class="tags"><span class="t w" data-tip="brannskade_dekk">Dekk med plastfilm / tørre tepper</span><span class="t w" data-tip="co">Mistenk CO ved lukket rom</span><span class="t d" data-tip="brannskade_innlegg">Innleggelse? &gt;5% voksen / &gt;10% barn</span></div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">👁 Øyeskade</span>
      <span class="badge badge-amber">MOD</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label" style="color:#f87171;">Impalert gjenstand i øyet</div>
        <div class="tags"><span class="t d" data-tip="oye_impalement">IKKE fjern gjenstanden</span><span class="t d" data-tip="oye_impalement">Dekk med kopp / beger</span><span class="t d" data-tip="oye_impalement">Stabiliser og transport</span></div>
        <div class="note r">Aldri press mot øyet. Dekk begge øyne for å hindre bevegelse.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label" style="color:#e5a820;">Kjemisk sprut</div>
        <div class="tags"><span class="t d" data-tip="oye_kjemisk">Skyll umiddelbart og rikelig</span><span class="t d" data-tip="oye_kjemisk">Minst 10–15 min med rennende vann</span><span class="t w" data-tip="oye_kjemisk">Hold øyelokk åpent under skylling</span></div>
        <div class="note r">Tid er avgjørende – ikke vent. Start skylling på stedet.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Andre øyeskader</div>
        <div class="tags"><span class="t w" data-tip="oye_saar">Perforerende sår: dekk med sterilt bandasje – ikke trykk</span><span class="t w" data-tip="oye_kontusjon">Stump slag: is mot kinn, ikke direkte på øye</span></div>
      </div>
    </div>
  </div>
`);
