(window.SAR_SECTIONS = window.SAR_SECTIONS || []).push(`
  <div class="group-label">Grunnleggende</div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🔤 Forkortelser</span>
      <span class="badge badge-gray">REF</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Kjerne</div>
        <div class="tags">
          <span class="t" data-tip="sar_poi">POI</span>
          <span class="t i" data-tip="sar_skp">SKP</span>
          <span class="t" data-tip="sar_ipp">IPP</span>
          <span class="t" data-tip="sar_ko">KO</span>
          <span class="t" data-tip="sar_hrs">HRS</span>
        </div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Metode og målinger</div>
        <div class="tags">
          <span class="t i" data-tip="sar_tm">TM</span>
          <span class="t i" data-tip="sar_pod">POD</span>
          <span class="t i" data-tip="sar_5po">5PO</span>
          <span class="t" data-tip="sar_cla">CLA</span>
        </div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Utstyr og kjøretøy</div>
        <div class="tags">
          <span class="t w" data-tip="sar_gps">GPS</span>
          <span class="t" data-tip="sar_atv">ATV</span>
        </div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">⚖️ Fremdrift vs dekning</span>
      <span class="badge badge-blue">KJERNE</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Lovmessigheter</div>
        <div class="tags">
          <span class="t i" data-tip="sar_fremdrift">Fremdrift</span>
          <span class="t i" data-tip="sar_dekning">Dekning</span>
          <span class="t i" data-tip="sar_pod">POD</span>
        </div>
        <div class="note b">Økt dekning → økt POD → redusert fremdrift<br>Flere mannskap → økt fremdrift (ved konstant POD)<br>Flere mannskap → økt POD (ved konstant fremdrift)</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">To kategorier</div>
        <div class="tags">
          <span class="t i" data-tip="sar_finsok">Finsøk</span>
          <span class="t w" data-tip="sar_grovsok">Grovsøk</span>
          <span class="t w" data-tip="sar_patruljesok">Patruljesøk (unngå)</span>
        </div>
        <div class="note">Som regel vil vi ha begge deler – men det krever mange mannskap. Velg metode ut fra hypotesen og tommelfingerregel 1.</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">📐 Tommelfingerreglene</span>
      <span class="badge badge-blue">KJERNE</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Regel 1 – Metodevalg</div>
        <div class="tags">
          <span class="t i" data-tip="sar_tr1">Tommelfinger 1</span>
        </div>
        <div class="note b">Velg metoder som raskest dekker områder med størst sannsynlighet for funn.<br>• Høy fremdrift<br>• Mest dekning der sannsynligheten er høy, minst der den er lav</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Regel 2 – Startpunkt</div>
        <div class="tags">
          <span class="t i" data-tip="sar_tr2">Tommelfinger 2</span>
          <span class="t i" data-tip="sar_skp">SKP</span>
          <span class="t" data-tip="sar_ipp">IPP</span>
        </div>
        <div class="note b">Søk alltid innenfra og ut, med utgangspunkt i SKP.<br>Hvis SKP ikke er kjent – velg ett eller flere innledende POI (IPP).</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🧠 Taktisk metode (TM)</span>
      <span class="badge badge-blue">PLAN</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Arbeidsprosess</div>
        <div class="tags">
          <span class="t i" data-tip="sar_tm">TM</span>
          <span class="t i" data-tip="sar_hypotese">Hypotese</span>
          <span class="t" data-tip="sar_kritiske_sp">Kritiske spørsmål</span>
        </div>
        <div class="note b">Datainnsamling → Analyse → Planlegging → Gjennomføring<br>Hypotesen styrer metodevalg. Hvert søk skal ha begrunnet metode.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Eksempel på hypotese</div>
        <div class="note">«Savnede har søkt ly i telt i påvente av redningsmannskap eller oppholdsvær.»<br>→ Telt egnet for været = god situasjon → metoder med høyere dekning/mindre hast er OK.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Parallelle akser</div>
        <div class="note b">Fremdrift på flere akser (luft, land, sjø) samtidig øker sannsynligheten for funn. Hver ressurs har sin egnethet – utnytt alle parallelt.</div>
      </div>
    </div>
  </div>
`);
