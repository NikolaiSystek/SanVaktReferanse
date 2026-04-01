(window.SECTIONS = window.SECTIONS || []).push(`
  <div class="group-label">Spesielle populasjoner</div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">👶 Barn og eldre</span>
      <span class="badge badge-blue">OBS</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="divider">Eldre</div>
      <div class="row" data-row>
        <div class="tags"><span class="t d" data-tip="hofte">Hoftebrudd ved fall fra stående</span><span class="t d" data-tip="subduralt">Subduralt hematom</span><span class="t w" data-tip="antikoag">Antikoagulasjon</span></div>
        <div class="note">Betablokkere maskerer takykardi. Lav terskel for alvorlig skade.</div>
      </div>
      <div class="divider">Barn</div>
      <div class="row" data-row>
        <div class="tags"><span class="t d" data-tip="hodeskade">Hodeskade (stort hode)</span><span class="t w" data-tip="lungekont">Lungekontusjon uten ribbeinsbrudd</span><span class="t i" data-tip="barn_kompenserer">Kompenserer lenge – kollapser brått</span></div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">♀ Kvinnehelse</span>
      <span class="badge badge-blue">OBS</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="divider">Kvinner</div>
      <div class="row" data-row>
        <div class="moi-label">Hjerteinfarkt – atypisk presentasjon</div>
        <div class="tags"><span class="t d" data-tip="infarkt_kvinner">Kvalme / oppkast / tretthet</span><span class="t d" data-tip="infarkt_kvinner">Smerter i rygg, nakke eller kjeve</span><span class="t w" data-tip="infarkt_kvinner">Kortpustethet uten brystsmerter</span></div>
        <div class="note r">Kvinner har oftere atypisk infarkt – brystsmerter kan mangle helt</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Andre tilstander å kjenne til</div>
        <div class="tags"><span class="t d" data-tip="ektopisk">Ektopisk graviditet</span><span class="t d" data-tip="ovariecyste">Ovariecyste / torsjon</span><span class="t w" data-tip="trombose_kvinner">DVT / lungeemboli (p-pille, graviditet)</span><span class="t w" data-tip="osteoporose_kvinner">Osteoporose – lavenergi gir fraktur</span></div>
      </div>
      <div class="note">Kvinner undervurderer ofte egne symptomer – ta dem på alvor</div>
      <div class="row" data-row>
        <div class="tags"><span class="t d" data-tip="abruptio">Abruptio placentae</span><span class="t w" data-tip="aortokavalt">Aortokavalt kompr.</span></div>
        <div class="note">Legg på venstre side. Foster kan ha det dårlig selv om mor er stabil.</div>
      </div>
      <div class="divider">Fødsel – akutt</div>
      <div class="row" data-row>
        <div class="moi-label" style="color:#f87171;">Ikke transport hvis:</div>
        <div class="tags"><span class="t d" data-tip="fodsel_transport">Hodet er synlig (crowning)</span><span class="t d" data-tip="fodsel_transport">Sterk trang til å presse</span><span class="t d" data-tip="fodsel_transport">Fødsel er nært forestående</span></div>
        <div class="note r">Ikke flytt mor under aktiv fødsel. Ring 113 – AMK kan veilede.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Fødsel – tiltak</div>
        <div class="tags"><span class="t w" data-tip="fodsel_hode">Støtt hodet forsiktig – press ikke</span><span class="t w" data-tip="fodsel_hode">La skuldrene rotere naturlig</span><span class="t i" data-tip="fodsel_hode">Tørk og varm barnet umiddelbart</span></div>
        <div class="note">Hold hodet under hendene – ikke hold igjen, ikke press på.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label" style="color:#f87171;">Navlesnor rundt halsen</div>
        <div class="tags"><span class="t d" data-tip="fodsel_navlesnor">Løs snor: skyv forsiktig over hodet</span><span class="t d" data-tip="fodsel_navlesnor">Stram snor: klyp og klipp mellom to klemmer</span></div>
      </div>
      <div class="row" data-row>
        <div class="moi-label" style="color:#f87171;">Skulder macrosom (skulder setter seg fast)</div>
        <div class="tags"><span class="t d" data-tip="fodsel_skulder">Knær til bryst (McRoberts)</span><span class="t d" data-tip="fodsel_skulder">Suprapubisk press – ikke funduspress</span><span class="t d" data-tip="fodsel_skulder">Ring 113 – akutt obstetrikk</span></div>
      </div>
    </div>
  </div>
`);
