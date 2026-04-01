(window.SECTIONS = window.SECTIONS || []).push(`
  <div class="group-label">Administrative forhold</div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">🔁 PIKSIB – ved hjertestans</span>
      <span class="badge badge-red">HØY</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="note b" style="margin:10px 14px 6px;">Lederverktøy for kontinuerlig situasjonsstyring – syklisk, ikke lineær</div>
      <div class="row" data-row style="padding:12px 14px;">
        <div class="piksib-step">
          <div class="piksib-letter">P</div>
          <div class="piksib-text"><strong>Planlegge</strong>Vurder situasjonen. Lag en plan. Fordel roller og ressurser før innsats.</div>
        </div>
        <div class="piksib-step">
          <div class="piksib-letter">I</div>
          <div class="piksib-text"><strong>Iverksette</strong>Sett planen ut i livet. Gi tydelige oppdrag til teamet.</div>
        </div>
        <div class="piksib-step">
          <div class="piksib-letter">K</div>
          <div class="piksib-text"><strong>Kontrollere</strong>Følg opp at tiltak gjennomføres som planlagt. Sjekk effekt av behandling.</div>
        </div>
        <div class="piksib-step">
          <div class="piksib-letter">S</div>
          <div class="piksib-text"><strong>Støtte</strong>Støtt teammedlemmer med ressurser, avlastning og veiledning underveis.</div>
        </div>
        <div class="piksib-step">
          <div class="piksib-letter">I</div>
          <div class="piksib-text"><strong>Informere</strong>Kommuniser løpende til teamet, AMK og ved overlevering. Closed-loop.</div>
        </div>
        <div class="piksib-step" style="border-bottom:none;">
          <div class="piksib-letter">B</div>
          <div class="piksib-text"><strong>Bedømme</strong>Vurder om planen fungerer. Juster ved behov. Start syklusen på nytt.</div>
        </div>
      </div>
      <div class="note" style="margin:0 14px 10px;">Brukes som ledelsesverktøy av teamleder – ikke som pasientvurdering</div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">📋 SAMPLER – anamnese</span>
      <span class="badge badge-gray">REF</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row><div class="moi-label" style="color:#f87171;">S – Symptoms</div><div class="tags"><span class="t w" data-tip="opqrst">OPQRST: Onset, Provokasjon, Kvalitet, Utstråling, Styrke, Tid</span></div></div>
      <div class="row" data-row><div class="moi-label" style="color:#e5a820;">A – Allergies</div><div class="tags"><span class="t w" data-tip="allergi_med">Medisiner?</span><span class="t w" data-tip="allergi_mat">Mat?</span><span class="t w" data-tip="anafylaksi">Tidligere anafylaksi?</span></div></div>
      <div class="row" data-row><div class="moi-label" style="color:#60a5fa;">M – Medications</div><div class="tags"><span class="t w" data-tip="antikoag">Blodfortynnende?</span><span class="t w" data-tip="antikoag_doak">DOAK / antikoagulantia-type?</span><span class="t w" data-tip="betablokkere">Betablokkere?</span><span class="t w" data-tip="insulin_med">Insulin?</span></div><div class="note">Betablokkere skjuler takykardi ved sjokk. Blodfortynnende øker risiko ved blødning og hodeskade.</div></div>
      <div class="row" data-row><div class="moi-label" style="color:#34d399;">P – Past history</div><div class="tags"><span class="t w" data-tip="infarkt">Hjertesykdom?</span><span class="t w" data-tip="hypoglykemi">Diabetes?</span><span class="t w" data-tip="epilepsi">Epilepsi?</span></div></div>
      <div class="row" data-row><div class="moi-label" style="color:#c084fc;">L – Last oral intake</div><div class="tags"><span class="t i" data-tip="siste_maltid">Hva og når spiste/drakk sist?</span></div></div>
      <div class="row" data-row><div class="moi-label" style="color:#fb923c;">E – Events</div><div class="tags"><span class="t w" data-tip="hendelsesforlop">Hva skjedde rett før?</span><span class="t w" data-tip="aktivitet_debut">Aktivitet ved debut?</span><span class="t w" data-tip="synkope">Besvimelse? Fall?</span></div></div>
      <div class="row" data-row><div class="moi-label" style="color:#a78bfa;">R – Risk factors</div><div class="tags"><span class="t w" data-tip="risiko_royk">Røyker?</span><span class="t w" data-tip="risiko_hjerte">Hjertesykdom i familien?</span><span class="t w" data-tip="risiko_alder">Alder?</span></div></div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">📞 ISBAR – overlevering</span>
      <span class="badge badge-gray">REF</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row><div class="moi-label" style="color:#f87171;">I – Identify</div><div class="tags"><span class="t w" data-tip="isbar_i">Navn + rolle + organisasjon</span></div><div class="note b">«Hei, jeg heter Lars, Røde Kors hjelpekorps»</div></div>
      <div class="row" data-row><div class="moi-label" style="color:#e5a820;">S – Situation</div><div class="tags"><span class="t w" data-tip="isbar_s">Alder / kjønn + hovedproblem + sted</span></div><div class="note b">«Mann ca. 40 år, bevisstløs etter fall fra 4 meter»</div></div>
      <div class="row" data-row><div class="moi-label" style="color:#60a5fa;">B – Background</div><div class="tags"><span class="t w" data-tip="isbar_b">MOI / hendelsesforløp + sykehistorie + tid</span></div><div class="note b">«Funnet bevisstløs ca. 5 min, ukjent sykehistorie»</div></div>
      <div class="row" data-row><div class="moi-label" style="color:#34d399;">A – Assessment</div><div class="tags"><span class="t w" data-tip="gcs">GCS</span><span class="t w" data-tip="vitalia">Puls / RF / SpO₂</span><span class="t w" data-tip="pupiller">Pupiller</span></div><div class="note b">«GCS 8, puls 118 svak, RF 22, pupiller asymmetriske»</div></div>
      <div class="row" data-row><div class="moi-label" style="color:#c084fc;">R – Recommendation</div><div class="tags"><span class="t d" data-tip="isbar_r">Hastegrad + ressursbehov + ETA</span></div><div class="note b">«Ber om traumeteam klart, hva er ETA ambulanse?»</div></div>
      <div class="note r" style="margin:8px 14px;">Det du IKKE sier til AMK eksisterer ikke for dem.</div>
    </div>
  </div>

  <div class="section" data-section>
    <div class="section-header" onclick="toggle(this)">
      <span class="section-title">📱 Nødnumre og fagstøtte</span>
      <span class="badge badge-red">HØY</span><span class="chevron">▼</span>
    </div>
    <div class="section-body hidden">
      <div class="row" data-row>
        <div class="moi-label" style="color:#f87171;">Nødetater</div>
        <div class="numgrid">
          <span class="num" style="color:#f87171;">113</span><span style="color:#ccc;">Ambulanse / medisinsk nødhjelp</span>
          <span class="num" style="color:#f87171;">112</span><span style="color:#ccc;">Politi</span>
          <span class="num" style="color:#f87171;">110</span><span style="color:#ccc;">Brann</span>
        </div>
      </div>
      <div class="row" data-row>
        <div class="moi-label" style="color:#e5a820;">Medisinsk fagstøtte</div>
        <div class="numgrid">
          <span class="num" style="color:#e5a820;">116 117</span><span style="color:#ccc;">Legevakt – ikke-akutte henvendelser</span>
          <span class="num" style="color:#e5a820;">22 59 13 00</span><span style="color:#ccc;">Giftinformasjonen – 24/7</span>
        </div>
      </div>
      <div class="row" data-row>
        <div class="moi-label" style="color:#60a5fa;">Støtte til hjelpere</div>
        <div class="numgrid">
          <span class="num" style="color:#60a5fa;">02415</span><span style="color:#ccc;">Norsk Luftambulanse – oppfølging etter krevende hendelser</span>
        </div>
        <div class="note b">Ring 02415 etter krevende hendelser – gratis og konfidensielt</div>
      </div>
      <div class="row" data-row>
        <div class="tags"><span class="t d" data-tip="ring113">113 – livstruende</span><span class="t w" data-tip="ring116117">116 117 – trenger lege</span><span class="t i" data-tip="ring02415">02415 – etter hendelse</span><span class="t w" data-tip="ringGift">22 59 13 00 – forgiftning</span></div>
      </div>
    </div>
  </div>
`);
