(window.SAR_SECTIONS = window.SAR_SECTIONS || []).push(`
  <div class="group-label">Hund</div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🐕 Sporsøk (hund)</span>
      <span class="badge badge-gray">HUND</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Hensikt</div>
        <div class="note">Når utgangspunktet er kjent (rute, POI) og vi har klesplagg med savnedes lukt. Identifisering av sporutgang fra tause vitner eller andre POI.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Egenskaper</div>
        <div class="tags">
          <span class="t i" data-tip="sar_fremdrift">Fremdrift: Høy</span>
          <span class="t w" data-tip="sar_dekning">Dekning: Lav</span>
        </div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Gjennomføring</div>
        <div class="note">Sjelden direkte på rett spor – oftest «sporoppsøk». Rundt <span class="t" data-tip="sar_taust_vitne">tause vitner</span> må det kontrolleres at de tilhører savnede før hunden settes på sporet.</div>
        <div class="note r">Hold søkeområdet «rent» – gamle og nye spor kompliserer arbeidet. Enkelte hunder kan skille spor.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Vinterbruk</div>
        <div class="note">Mulig. Husk metodikk for håndtering av kryssende spor.</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🐕‍🦺 Feltsøk (hund)</span>
      <span class="badge badge-gray">HUND</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Hensikt</div>
        <div class="note">Avsøke avgrenset område 100×100 m fra definert grunnlinje. Primært godkjenning/konkurranse, men brukbart i ettersøkning.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Egenskaper</div>
        <div class="tags">
          <span class="t" data-tip="sar_fremdrift">Fremdrift: Moderat</span>
          <span class="t i" data-tip="sar_dekning">Dekning: Høy</span>
        </div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Når</div>
        <div class="note">Sikre tause vitner, bynære strøk, primære teiger med høy sannsynlighet for funn, rask gjennomsøkning av SKP.</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🗘 Runderingssøk (hund)</span>
      <span class="badge badge-gray">HUND</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Hensikt</div>
        <div class="note">Hunden skal få ferten av eller markere på <span class="t" data-tip="sar_overvaer">overvær</span> og finne noe å søke etter.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Egenskaper</div>
        <div class="tags">
          <span class="t" data-tip="sar_fremdrift">Fremdrift: Moderat</span>
          <span class="t i" data-tip="sar_dekning">Dekning: Høy</span>
        </div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Gjennomføring</div>
        <div class="note">Føreren går langs en tenkt akse. Hunden sendes ut på tvers av aksen i bestemt distanse.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">NB</div>
        <div class="note b">«Rundering» er ikke alltid en egen metode – forekommer innenfor flere hundesøksformer. Litteraturen er ikke entydig.</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">💨 Overværsøk (hund)</span>
      <span class="badge badge-gray">HUND</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Hensikt</div>
        <div class="note">Utnytte hundens evne til å fange lukt båret med vinden – på lang avstand.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Egenskaper</div>
        <div class="tags">
          <span class="t i" data-tip="sar_fremdrift">Fremdrift: Høy</span>
          <span class="t i" data-tip="sar_dekning">Dekning: Høy</span>
          <span class="t" data-tip="sar_overvaer">Overvær</span>
        </div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Vindretning</div>
        <div class="note b">KRITISK ved plassering av ekvipasje. Vinden varierer lokalt (fjell, koller, daler, vegetasjon).</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Informasjonsflyt</div>
        <div class="note">Rapporter både hvor ekvipasjen har søkt og HVOR overværet er plukket opp fra. KO bør bruke kartkalk per ekvipasje.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Gjennomføring</div>
        <div class="note">Kan kombineres med kjøretøy (spesialbygd ATV).</div>
      </div>
    </div>
  </div>
`);
