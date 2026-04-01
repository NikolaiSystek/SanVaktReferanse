(window.SECTIONS = window.SECTIONS || []).push(`
  <div class="group-label">Når det haster</div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🇳🇴 HLR og hjertestans</span>
      <span class="badge badge-blue">NRR</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="divider">HLR – voksen (30:2)</div>
      <div class="row" data-row>
        <div class="tags"><span class="t d" data-tip="hlr">30:2</span><span class="t d" data-tip="kompresjonsdyp">5–6 cm dybde</span><span class="t d" data-tip="kompfrekvens">100–120/min</span><span class="t w" data-tip="aed">AED så raskt som mulig</span></div>
        <div class="note r">Pause maks 10 sek</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Agonal pust</div>
        <div class="tags"><span class="t d" data-tip="agonalpust">Uregelmessig gisp ≠ normal pust</span></div>
        <div class="note r">Start HLR umiddelbart</div>
      </div>
      <div class="divider">Fremmedlegeme – voksen</div>
      <div class="row" data-row>
        <div class="tags"><span class="t w" data-tip="hosteoppfordring">Oppmuntre til hosting</span><span class="t d" data-tip="ryggslagg">5 ryggslag</span><span class="t d" data-tip="heimlich">5 Heimlich-støt</span></div>
      </div>
      <div class="divider">HLR – barn (&gt;1 år)</div>
      <div class="row" data-row>
        <div class="tags"><span class="t d" data-tip="hlr">30:2</span><span class="t d" data-tip="hlr_barn">Større barn: én hånd</span><span class="t d" data-tip="hlr_barn_dybde">Komprimer 1/3 av brystkassen</span><span class="t w" data-tip="aed">AED – barnepads hvis tilgjengelig</span></div>
        <div class="note">Spedbarn (&lt;1 år): 2 fingre. Komprimer 1/3 ned.</div>
      </div>
      <div class="divider">Drukning</div>
      <div class="row" data-row>
        <div class="tags"><span class="t d" data-tip="drukning">5 innblåsninger først</span><span class="t d" data-tip="hlr">Deretter 30:2</span><span class="t w" data-tip="drukning_hypotermi">Kald drukning – ikke gi opp</span></div>
        <div class="note">«Ikke død før varm og død»</div>
      </div>
      <div class="divider">4H / 4T – reversible årsaker</div>
      <div class="row" data-row>
        <div class="moi-label">4H</div>
        <div class="tags"><span class="t w" data-tip="hypoxi">Hypoksi</span><span class="t w" data-tip="hypovolemi">Hypovolemi</span><span class="t w" data-tip="hypotermi">Hypotermi</span><span class="t w" data-tip="hypokalemi">Hypo/hyperkalemi</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">4T</div>
        <div class="tags"><span class="t w" data-tip="tamponade">Hjertetamponade</span><span class="t w" data-tip="tensjon">Tensjonspneumothorax</span><span class="t w" data-tip="trombose">Trombose</span><span class="t w" data-tip="toksiner">Toksiner</span></div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">💊 Medisinske tilstander – felt</span>
      <span class="badge badge-blue">MED</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Hjerteinfarkt</div>
        <div class="tags"><span class="t d" data-tip="infarkt">Brystsmerter &gt;20 min</span><span class="t d" data-tip="utstråling_hjerte">Utstråling arm/kjeve/rygg</span><span class="t w" data-tip="infarkt_tegn">Svette / kvalme / dyspné</span></div>
        <div class="note r">Ring 113. Legg til ro. Ikke la dem gå.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Hjerneslag – FAST</div>
        <div class="tags"><span class="t d" data-tip="fast_f">Ansiktshenge (F)</span><span class="t d" data-tip="fast_a">Armsvakhet (A)</span><span class="t d" data-tip="fast_s">Taleforstyrrelse (S)</span><span class="t d" data-tip="fast">Tid – ring 113 (T)</span></div>
        <div class="note r">Trombolyse-vindu: 4,5 timer fra symptomdebut</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Anafylaksi</div>
        <div class="tags"><span class="t d" data-tip="anafylaksi">Elveblest + luftveissvikt</span><span class="t d" data-tip="sjokk">Hypotensjon + takykardi</span><span class="t d" data-tip="epipen">Adrenalin (EpiPen)</span></div>
        <div class="note r">Adrenalin er eneste behandling – gi umiddelbart</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Astmaanfall</div>
        <div class="tags"><span class="t w" data-tip="astma">Piping i utpust</span><span class="t d" data-tip="astma_alvorlig">Kan ikke snakke setninger = alvorlig</span><span class="t d" data-tip="astma_kritisk">Stille thorax = kritisk</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Hypoglykemi</div>
        <div class="tags"><span class="t w" data-tip="hypoglykemi">Bevisst: gi sukker oralt</span><span class="t d" data-tip="hypoglykemi_bevisstlos">Bevisstløs: sideleie, ring 113</span><span class="t i" data-tip="ikke_oralt">Aldri gi noe oralt til bevisstløs</span></div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🔺 Triage – rask oversikt</span>
      <span class="badge badge-gray">REF</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row><div class="moi-label" style="color:#f87171;">RØD – umiddelbar</div><div class="tags"><span class="t d" data-tip="luftvei">Luftvei truet</span><span class="t d" data-tip="blodning_stopp">Ukontrollert blødning</span><span class="t d" data-tip="sjokk">Sjokk</span><span class="t d" data-tip="gcs">GCS synkende</span></div></div>
      <div class="row" data-row><div class="moi-label" style="color:#e5a820;">GUL – kan vente</div><div class="tags"><span class="t w" data-tip="triage_gul">Stabil med skade</span><span class="t w" data-tip="blodning_kontrollert">Kontrollert blødning</span></div></div>
      <div class="row" data-row><div class="moi-label" style="color:#34d399;">GRØNN – gå selv</div><div class="tags"><span class="t" data-tip="triage_gronn">Gangbar</span><span class="t" data-tip="triage_gronn">Mindre skader</span></div></div>
      <div class="row" data-row><div class="moi-label" style="color:#666;">SORT – ikke prioriter</div><div class="tags"><span class="t" data-tip="triage_sort">Ingen puls</span><span class="t" data-tip="triage_sort">Ikke-overlevbar ved ressursmangel</span></div></div>
      <div class="note r">Gjør mest mulig for flest mulig.</div>
      <div class="divider">START-triage – masseulykke</div>
      <div class="row" data-row>
        <div class="start-tree">
          <div class="step g"><strong>① Kan gå?</strong> → Be alle om å reise seg og gå til et samlepunkt. Disse er GRØNN.</div>
          <div class="step" style="padding-left:24px; border-left: none; color:#888;">↓ Gjenstående / ikke-gangbare:</div>
          <div class="step r"><strong>② Puster? (etter luftveisjustering)</strong> Nei → SORT</div>
          <div class="step" style="padding-left:24px; border-left: none; color:#888;">↓ Ja, puster:</div>
          <div class="step r"><strong>③ RF &gt;30/min?</strong> Ja → RØD</div>
          <div class="step" style="padding-left:24px; border-left: none; color:#888;">↓ RF ≤ 30:</div>
          <div class="step r"><strong>④ Kapillærfyll &gt;2 sek?</strong> Ja → RØD</div>
          <div class="step" style="padding-left:24px; border-left: none; color:#888;">↓ Kapillærfyll normal:</div>
          <div class="step r"><strong>⑤ Følger kommando?</strong> Nei → RØD</div>
          <div class="step y">Ja → <strong style="color:#fbbf24;">GUL</strong></div>
        </div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🩸 Hemoragisk sjokk – klasser</span>
      <span class="badge badge-gray">REF</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div style="font-size:11px; color:#ccc; line-height:2;">
          <div style="display:grid; grid-template-columns:1fr 1fr 1fr 1fr 1.5fr; gap:0 6px;">
            <span style="color:#60a5fa;font-weight:600;">Klasse</span><span style="color:#60a5fa;font-weight:600;">Puls</span><span style="color:#60a5fa;font-weight:600;">BT</span><span style="color:#60a5fa;font-weight:600;">RF</span><span style="color:#60a5fa;font-weight:600;">Bevissthet</span>
            <span style="color:#34d399;">I</span><span>&lt;100</span><span>Normal</span><span>14–20</span><span>Normal</span>
            <span style="color:#e5a820;">II</span><span>100–120</span><span>Normal</span><span>20–30</span><span>Uro</span>
            <span style="color:#f87171;">III</span><span>120–140</span><span>Lav</span><span>30–40</span><span>Forvirret</span>
            <span style="color:#f87171;">IV</span><span>&gt;140</span><span>Svært lav</span><span>&gt;35</span><span>Bevisstløs</span>
          </div>
        </div>
        <div class="note">Klasse I–II: kompensert sjokk. Klasse III–IV: dekompensert – kritisk. Hypotensjon er et SENT tegn.</div>
      </div>
      <div class="row" data-row>
        <div class="tags"><span class="t d" data-tip="sjokk">Sjokk</span><span class="t w" data-tip="hypovolemi">Hypovolemi</span><span class="t i" data-tip="betablokkere">Betablokkere maskerer takykardi</span><span class="t i" data-tip="barn_kompenserer">Barn kompenserer lenge</span></div>
      </div>
    </div>
  </div>
`);
