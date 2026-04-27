(window.SAR_SECTIONS = window.SAR_SECTIONS || []).push(`
  <div class="group-label">Motorisert</div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🏍️ Motorisert søk på land</span>
      <span class="badge badge-gray">LAND</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Hensikt</div>
        <div class="note">Spare tid/ressurser der terreng tillater det. ATV, MC, traktor, bil, hest, beltevogn, snøscooter.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Egenskaper</div>
        <div class="tags">
          <span class="t i" data-tip="sar_fremdrift">Fremdrift: Høy</span>
          <span class="t w" data-tip="sar_dekning">Dekning: Lav</span>
        </div>
        <div class="note r">Hastighet går på bekostning av observasjon. Kjøretøyet kan stenge for utsikt. Sjåføren kan ikke regnes med som observatør – han må kjøre.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Når</div>
        <div class="note">• Raskt eliminere POI i stort område<br>• Lete etter savnedes kjøretøy langs vei<br>• Punktsøk der avstand/terreng gjør motor best egnet<br>• Finkjemming av grøfter → til fots</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Gjennomføring</div>
        <div class="note">• Avklar kritiske spørsmål FØR inn i bilen<br>• Fordel sektorer per person<br>• Bytt sektor ofte (motvirk kvalme)<br>• Kjør langsommere der vegetasjon/autovern hindrer sikt</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Vinter</div>
        <div class="note">Brøyting kan mangle. Terrengkjøretøy/snøscooter avhengig av vær, føre, skråninger, snømengde, tett skog.</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🚁 Motorisert søk fra luft</span>
      <span class="badge badge-gray">LUFT</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Hensikt</div>
        <div class="note">Raskt avsøke store områder, relativt god dekning avhengig av vegetasjon, sikt og vær.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Egenskaper</div>
        <div class="tags">
          <span class="t i" data-tip="sar_fremdrift">Fremdrift: Høy</span>
          <span class="t i" data-tip="sar_dekning">Dekning: Høy</span>
        </div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Når</div>
        <div class="note">• Store avstander<br>• Farlig terreng for bakkemannskap (skredfare, bratt lende, glatt, høydeforskjeller)<br>• Helikopter kan sveve = tettere vegetasjon OK<br>• Vær- og siktbegrensninger gjelder</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Begrep</div>
        <div class="note b">Engelske begrep brukes muntlig av HRS, politihelikopter og 330-skvadronen – brukes derfor også skriftlig for å unngå begrepsforvirring.</div>
      </div>
      <div class="divider">Søkemønstre fra luft</div>
      <div class="row" data-row>
        <div class="moi-label">Track-line</div>
        <div class="note">Når ruten til savnede er kjent (eller rimelig sikker). Kan utføres én vei (A→B) eller begge veier (A→B→A). Ved begge: søk på hver side av ruten.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Parallellsøk</div>
        <div class="note">Ruten mindre sikker. Flere parallelle søkelinjer langs antatt rute. Bred korridor dekkes.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Creeping Line Ahead (CLA)</div>
        <div class="tags">
          <span class="t" data-tip="sar_cla">CLA</span>
        </div>
        <div class="note">Lite område, kjent avgrenset. Som parallellsøk, men kortere søkelinjer. Antas størst sjanse i enden der søket starter.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Expanding Box</div>
        <div class="note">Lite område med god POI/SKP. Starter i punktet, utvides i stadig større firkanter sentrert om samme punkt. I enden av hver linje: 90° mot klokken? Nei – MED klokken (høyre). «Trackspacing» = avstand mellom parallelle sider.</div>
        <div class="note b">Gjentatt søk: vri 45° med klokken eller endre trackspacing.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Sektorsøk</div>
        <div class="note">Lite område, god posisjon, kort tid siden hendelse, lite søkeobjekt. Meget god dekning over konsentrert område. Nye søk kan vris 30/60/90/120/... grader.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Kontursøk</div>
        <div class="note">Over land, bestemt av terreng – fjell, daler, fjorder, topper. Utføres ofte nedenfra og oppover. Trackspacing, høyde og hastighet varierer med terreng, vind, søkeobjekt.</div>
        <div class="note r">FALLVINDER rundt fjell kan være katastrofale i finsøksfasen (stå i ro over et punkt). God rekognosering/grovsøk + planlegging er avgjørende. Plott ruten på kart.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Referanse</div>
        <div class="note">Retningslinjer: «International Aeronautical and Maritime Search and Rescue Manual» (IAMSAR).</div>
      </div>
    </div>
  </div>
`);
