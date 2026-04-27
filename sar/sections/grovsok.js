(window.SAR_SECTIONS = window.SAR_SECTIONS || []).push(`
  <div class="group-label">Grovsøk – mannskap</div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🚶 Stisøk</span>
      <span class="badge badge-amber">GROV</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Hensikt</div>
        <div class="note">Rask avsøking av veier, stier og tråkk der savnede forventes å være på stien eller synlig like ved.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Egenskaper</div>
        <div class="tags">
          <span class="t i" data-tip="sar_fremdrift">Fremdrift: Høy</span>
          <span class="t w" data-tip="sar_dekning">Dekning: Lav</span>
          <span class="t">Min. 2 pers</span>
        </div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Når</div>
        <div class="note">• Oppfangingslinje – savnede følger stien tilbake til kjent terreng<br>• Skadet turgåer langs sti<br>• Transport til POI (bil, hytte)</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Gjennomføring</div>
        <div class="note">Laget går på rekke. Leder sentralt (samband + kart). Blikksoner fordeles mellom mannskap, roteres underveis. Kan gjennomføres med sykkel, hest, MC, ATV eller snøscooter.</div>
        <div class="note b">Hest kan reagere på menneskelukt og gi indikasjon.</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🚶‍♂️ Stisøk med flanke</span>
      <span class="badge badge-amber">GROV</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Hensikt</div>
        <div class="note">Når savnede kan være PÅ SIDEN av stien – søkt ly (barn i mørket, dårlig vær), bærplukking, utsiktspunkt, severdighet.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Egenskaper</div>
        <div class="tags">
          <span class="t" data-tip="sar_fremdrift">Fremdrift: Middels</span>
          <span class="t i" data-tip="sar_dekning">Dekning: Middels</span>
          <span class="t">Min. 3 pers</span>
          <span class="t" data-tip="sar_flanke">Flanke</span>
        </div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Gjennomføring</div>
        <div class="note">• Leder plasserer seg sentralt med samband og kart<br>• Mannskap på hver flanke, avstand avhengig av terreng og hypotese<br>• Lederen merker og går litt inn stier som krysses</div>
        <div class="note r">Vanlig feil: gjennomføres som søkekjede. En sti er sjelden rett – fokus på innretning tar oppmerksomhet bort fra søket.</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🧭 Kompasskurssøk</span>
      <span class="badge badge-amber">GROV</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Hensikt</div>
        <div class="note">Terreng uten naturlige holdepunkter eller ledeakser – åpent høyfjell, vidde.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Egenskaper</div>
        <div class="tags">
          <span class="t" data-tip="sar_fremdrift">Fremdrift: Middels</span>
          <span class="t i" data-tip="sar_dekning">Dekning: Middels</span>
        </div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Gjennomføring</div>
        <div class="note">Kompasskurs fungerer som akse (tilsvarer sti). Søk en distanse, drei 180°, sideforflytt til neste teig. Kan avgrenses med bekk eller sti i begge ender. Med eller uten flanke.</div>
        <div class="note r">Krevende i dårlig sikt/mørke. GPS med forhåndsprogrammerte ruter gir bedre nøyaktighet – men må kombineres med kompass og papirkart.</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🗺️ Søk langs naturlige veivalg</span>
      <span class="badge badge-amber">GROV</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Hensikt</div>
        <div class="note">Savnedes forventede rute basert på turens hensikt – bærplukker, sauesanker, jeger, skigåer, fjellsportsutøver.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Egenskaper</div>
        <div class="tags">
          <span class="t" data-tip="sar_fremdrift">Fremdrift: Middels</span>
          <span class="t i" data-tip="sar_dekning">Dekning: Middels</span>
        </div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Gjennomføring</div>
        <div class="note">Velg traseer savnede naturlig ville ha fulgt. Fisketur → adkomstveier til fiskevann. Jeger → jaktterreng for skogsfugl. Som stisøk, med eller uten flanke.</div>
        <div class="note r">Lagleder og mannskap MÅ forstå savnedes aktivitet/tankegang – ellers blir funn bare flaks.</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🧅 Løksøk</span>
      <span class="badge badge-amber">GROV</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Hensikt</div>
        <div class="note">Grovsøk av stor teig når savnede forventes lett synlig eller at spor vil oppdages. Egner seg når savnede antas i live og kan gi seg til kjenne.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Egenskaper</div>
        <div class="tags">
          <span class="t" data-tip="sar_fremdrift">Fremdrift: Middels</span>
          <span class="t w" data-tip="sar_dekning">Dekning: Lav–Middels</span>
          <span class="t">4–9 pers</span>
        </div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Når</div>
        <div class="note">• Usikker på rute/mål for turen<br>• Stort område + høy hastegrad<br>• Lite etterretning<br>• Jakt, bærplukking, fiske (savnede utenfor sti)<br>• Savnede kan gi seg til kjenne</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Gjennomføring</div>
        <div class="note">Mannskap radierer ut fra samlingspunkt i rutene som ligner en gjennomskåret løk (derav navnet). 100–200 m mellom hver person i åpent terreng, tettere i kratt. Avtal MØTEPUNKTER underveis for informasjonsutveksling.</div>
        <div class="note b">Hver person MÅ ha kart, kompass, GPS, samband. Fløyte, kikkert, fanglinjer.</div>
        <div class="note r">Avtal prosedyre for funn og for «noen borte» FØR søket. Ustabile savnede → gå to og to.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Vinterbruk</div>
        <div class="note">Egner seg med ski, truger, scooter. Se opp for markeringer som indikerer nedgraving (staver, gjenstander).</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">📍 Punktsøk (mannskap)</span>
      <span class="badge badge-amber">GROV</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Hensikt</div>
        <div class="note">Avsøke spesifikke steder innenfor en større teig – terrengformasjoner, bekker, elver, hus, hytter, utsiktspunkter, steinur, vannkummer.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Egenskaper</div>
        <div class="tags">
          <span class="t w" data-tip="sar_fremdrift">Fremdrift: Lav</span>
          <span class="t w" data-tip="sar_dekning">Dekning: Lav</span>
        </div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Gjennomføring</div>
        <div class="note">Egne lag med kompetanse/utstyr for den spesifikke oppgaven. Hemmer ikke fremdriften i hovedsøket. Kan kombinere liten søkekjede, sikring med tau, etc.</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">👣 Sporsøk (mannskap)</span>
      <span class="badge badge-amber">GROV</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Hensikt</div>
        <div class="note">Forventer SYNLIGE eller HØRBARE spor (hund brukes ved lukt). Sommer og vinter. Skispor, tråkk, markeringer.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Egenskaper</div>
        <div class="tags">
          <span class="t" data-tip="sar_fremdrift">Fremdrift: Middels</span>
          <span class="t w" data-tip="sar_dekning">Dekning: Lav</span>
        </div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Gjennomføring</div>
        <div class="note">Som stisøk uten flanke. Kan ikke detaljplanlegges fra KO – enheten planlegger ute basert på observerte spor.</div>
        <div class="note r">Avklar på forhånd: hvor langt følge sporet (tid/avstand), hvordan håndtere og merke kryssende spor (særlig vinter).</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🏘️ Rodesøk (tettbygd område)</span>
      <span class="badge badge-amber">TETT</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Hensikt</div>
        <div class="note">Systematisk søk i tettbebygd område – villaområder, rekkehus, blokker. For personer som ikke kan/vil gi seg til kjenne (demens, redsel).</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Egenskaper</div>
        <div class="tags">
          <span class="t w" data-tip="sar_fremdrift">Fremdrift: Lav</span>
          <span class="t i" data-tip="sar_dekning">Dekning: Høy</span>
          <span class="t w">Meget ressurskrevende</span>
        </div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Rekkefølge</div>
        <div class="note b">1) Patruljer med faste krysserute<br>2) Pendelpatrulje (gate opp/ned)<br>3) Systematisk rodesøk (siste utvei)</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Gjennomføring</div>
        <div class="note">Veier som teiggrenser – ett lag hver side. Lag på 2–4 pers, to og to søker sammen. Sjekk:<br>• Bygningens utside, balkonger, fremspring<br>• Fellesrom (kjeller, boder, under trapper)<br>• Gårdsplass, garasjer, skur, søppelkasser, beplantning<br>• Intervju beboere (hvis avtalt med KO)</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Ressurser</div>
        <div class="note">Godt synlig identifikasjon. Informasjon til publikum – naboer kan reagere. Ved risiko for at savnede flytter seg: parallelle lag + <span class="t" data-tip="sar_sperrepost">sperreposter</span> i kryss.</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🚷 Ledesøk (sperrepost)</span>
      <span class="badge badge-amber">DRIVER</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Hensikt</div>
        <div class="note">Drive savnede mot observasjonsposter ved hjelp av lyd – som elgjakt med postering. Kun når savnede IKKE ønsker å bli funnet.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Forutsetning</div>
        <div class="tags">
          <span class="t" data-tip="sar_sperrepost">Sperrepost</span>
          <span class="t" data-tip="sar_observasjonspost">Observasjonspost</span>
        </div>
        <div class="note r">Savnede skal KUN være en fare for seg selv. Ustabile/farlige savnede og kriminelle = politioppgave – ikke frivillige.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Egenskaper</div>
        <div class="tags">
          <span class="t w" data-tip="sar_fremdrift">Fremdrift: Lav</span>
          <span class="t i" data-tip="sar_dekning">Dekning: Høy</span>
          <span class="t w">Ressurskrevende</span>
        </div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">👥 Skanning av menneskemasser</span>
      <span class="badge badge-amber">URBAN</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Hensikt</div>
        <div class="note">Finne person i folkemengde ved avgrensning og observasjon. Utekonsert, messe, torg, gate med mye folk. Også når savnede prøver å gjemme seg.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Gjennomføring</div>
        <div class="note">• 2 pers per observasjonspost – en hviler mens andre skanner<br>• Post i hvert hjørne / ved hver port, gjerne høyt plassert<br>• Forhåndsbestemt observasjonsretning per post<br>• Sivile klær hvis savnede prøver å unngå oss</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Kjennetegn</div>
        <div class="note b">Få, tydelige kjennetegn: «meget lang», «halter», «rød treningsdrakt», «gulrotfarget hår». Patruljene «skanner» etter disse – ikke alt og alle.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Identifisering</div>
        <div class="note">Ved mulig kandidat: makker nærmer seg for bekreftelse. Observatøren fortsetter skanningen og leder makkeren frem via samband/tegn.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Vanlige feil</div>
        <div class="note r">• For lange økter uten rullering<br>• Forsøker å følge med på «alt» i stedet for kjennetegn</div>
      </div>
    </div>
  </div>
`);
