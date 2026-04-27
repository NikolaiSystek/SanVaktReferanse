(window.SAR_SECTIONS = window.SAR_SECTIONS || []).push(`
  <div class="group-label">Finsøk – mannskap</div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🧑‍🤝‍🧑 Søkekjede (manngard)</span>
      <span class="badge badge-blue">FIN</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Hensikt</div>
        <div class="note">Streng systematisk metode for å søke gjennom HELE teigen – ingen personer, gjenstander eller spor skal oversees. Både i terreng og tettbebygde områder.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Egenskaper</div>
        <div class="tags">
          <span class="t w" data-tip="sar_fremdrift">Fremdrift: Lav</span>
          <span class="t i" data-tip="sar_dekning">Dekning: Svært høy</span>
          <span class="t">Optimalt 10–12 i kjeden</span>
        </div>
        <div class="note r">Svært tidkrevende – SISTE UTVEI når det haster, med mindre man har mange mannskap å forsvare det med.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Når (kriterier)</div>
        <div class="note">• Små barn, suicidale personer (nær SKP, uventet mønster)<br>• Personer som holder seg i ro<br>• Begrenset område + mange mannskap<br>• Søk etter spor / tause vitner rundt POI<br>• Mange uøvde mannskap (passer godt til metoden)</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Formel – avsøkt areal/t</div>
        <div class="note b">(N − 1) × lukeavstand × marsjfart / 1000 = km²/t<br>N = antall i kjeden, marsjfart 1–2 km/t typisk<br>Eks: 11 pers, luke 10 m, 1 km/t → 0,1 km²/t</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Terminologi</div>
        <div class="tags">
          <span class="t" data-tip="sar_hovedakse">Hovedakse</span>
          <span class="t" data-tip="sar_hjelpeakse">Hjelpeakse</span>
          <span class="t" data-tip="sar_vendeakse">Vendeakse</span>
          <span class="t" data-tip="sar_luke">Lukeavstand</span>
          <span class="t w" data-tip="sar_kritisk_sep">Kritisk separasjon</span>
          <span class="t" data-tip="sar_floymann">Fløymann</span>
        </div>
      </div>
      <div class="divider sub" onclick="toggleSub('sar-sk-oppstart')">▶ Oppstart og kommandoer</div>
      <div id="sar-sk-oppstart" class="hidden">
        <div class="row" data-row>
          <div class="note">• Lagleder ruller ut kjeden med valgt lukeavstand<br>• Tydelige nummer til hver hvis navn ikke kjent<br>• Start: «START SØK» (evt. fløyte: lang + kort)<br>• Stopp: «HOLDT» (evt. fløyte: lang tone)<br>• Oransje refleksvest – lettere å se hverandre og bli sett</div>
        </div>
        <div class="row" data-row>
          <div class="moi-label">Lagleders plass</div>
          <div class="note">Bak kjeden = god oversikt. Kan også gå inn i kjeden eller foran. Foran = god oversikt over terrenget. Ikke bytt for ofte – forvirrer laget.</div>
        </div>
      </div>
      <div class="divider sub" onclick="toggleSub('sar-sk-vending')">▶ Vending</div>
      <div id="sar-sk-vending" class="hidden">
        <div class="row" data-row>
          <div class="note">1) Fløymannen BLIR STÅENDE (blir han som følger merkene)<br>2) Nr 2 passerer og stiller seg én lukeavstand bortenfor<br>3) Resten følger etter med samme avstand<br>4) Sistemann (har fulgt hovedaksen) blir ny fløymann – merker vendeaksen</div>
          <div class="note b">Rekkefølgen beholdes – samarbeidet brytes ikke.</div>
        </div>
      </div>
      <div class="divider sub" onclick="toggleSub('sar-sk-merking')">▶ Merking</div>
      <div id="sar-sk-merking" class="hidden">
        <div class="row" data-row>
          <div class="note">• Fløymannens jobb<br>• Merker hjelpeaksen – blir hovedakse for neste lag/sats<br>• Henges slik at SYNLIG I BEGGE RETNINGER<br>• Avstand mellom merker: skal se neste merke fra ett<br>• Halv søkebredde for fløymann, evt. kun merke (krym luken til nabo)<br>• Lukeavstand KONSTANT ved hver vending – ellers svingete hjelpeakse</div>
        </div>
      </div>
      <div class="divider sub" onclick="toggleSub('sar-sk-vanlig')">▶ Vanlige feil</div>
      <div id="sar-sk-vanlig" class="hidden">
        <div class="row" data-row>
          <div class="note r">• Lukeavstand endrer seg ved vendinger – retning glir<br>• Hovedakse krummer → videre vendinger kompliseres<br>• For mange i kjeden → lagleder mister oversikt<br>• Svak stemmebruk ved meldinger<br>• Frivillige fokuserer for mye på teknikk/innretning, for lite på søket</div>
          <div class="note b">Send meldinger mann-til-mann utover i kjeden hvis ikke alle kan høre.</div>
        </div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Grov vs fin kjede</div>
        <div class="tags">
          <span class="t w" data-tip="sar_grov_fin_kjede">Grov/fin</span>
        </div>
        <div class="note b">GROV: hurtighet > grundighet. Lukeavstand kan overgå kritisk separasjon.<br>FIN: 100 % dekning, streng avstand/innretning.<br>KO må spesifisere målet.</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">⭕ Sirkelsøk</span>
      <span class="badge badge-blue">FIN</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Hensikt</div>
        <div class="note">Variant av søkekjede – går i sirkel rundt et POI (hytte, bil, vann) når ingen holdepunkter finnes for retningen savnede har beveget seg.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Egenskaper</div>
        <div class="tags">
          <span class="t w" data-tip="sar_fremdrift">Fremdrift: Svært lav</span>
          <span class="t i" data-tip="sar_dekning">Dekning: Høy</span>
        </div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Begrensninger</div>
        <div class="note r">• Ytre flanke går lengre distanse – begrenser tempoet for hele kjeden<br>• Radius > 100 m blir vanskelig å gjennomføre<br>• Eksempel: 10 mann, 10 m luke, 2 km/t, radius 100 m → 17 min<br>• Tilsvarende 200×200 m med vanlig søkekjede: 5 min</div>
        <div class="note b">Vanlig søkekjede er som regel å foretrekke – også rundt POI hvis terrenget tillater det.</div>
      </div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🏠 Hussøk</span>
      <span class="badge badge-blue">FIN</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label">Hensikt</div>
        <div class="note">Grundig, systematisk søk gjennom hele bygget. Selv om andre har «søkt» – trente mannskaper finner ofte savnede i sted det ble antatt de «ikke kunne være».</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Egenskaper</div>
        <div class="tags">
          <span class="t w" data-tip="sar_fremdrift">Fremdrift: Svært lav</span>
          <span class="t i" data-tip="sar_dekning">Dekning: Svært høy</span>
        </div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Prinsipp</div>
        <div class="note b">Ovenfra-og-ned, innenfra-og-ut. Del bygget i små, fysisk adskilte søksteiger (etasje/fløy/korridor/avdeling).</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Utstyr</div>
        <div class="note">Hodelykt/lommelykt, HOVEDNØKKEL (brannvesenet har til institusjoner), romplan/rømningsplan, tape for avmerking.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Gjennomføring</div>
        <div class="note">• Rom merkes av på romoversikt ELLER tapebit på døren<br>• Låste rom uten nøkkel: tape i KRYSS på døren, lagleder noterer<br>• Søk OVERALT – hvor er det fysisk plass til et menneske?<br>&nbsp;&nbsp;&nbsp;→ i skap, oppå skap, under seng, i seng, bak sentralfyren, i skittentøykurven<br>• Loft, boder, kott, maskinrom – ikke glem</div>
        <div class="note r">Savnede er funnet under dynen til annen beboer i bofellesskap – «alt er mulig».</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Opptreden i institusjon</div>
        <div class="note b">Dette er beboernes HJEM. Vær høflig, ta av yttertøy og tørk av beina. Ta av hodelykten (kan virke voldsom) – hold i hånden. La kjent betjening gå inn til beboere først.</div>
      </div>
      <div class="row" data-row>
        <div class="moi-label">Aktivt skjul</div>
        <div class="note">Sjeldent, men forekommer (spesielt utendørs). Ved mistanke: <span class="t" data-tip="sar_sperrepost">sperreposter</span> ved trapper, heiser og forbindelsespunkter. 100 % sikkerhet er ressurskrevende – som regel er det tilstrekkelig å dekke hovedtrafikkakser.</div>
      </div>
    </div>
  </div>
`);
