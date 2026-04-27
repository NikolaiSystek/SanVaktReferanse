// SAR-modulen: injiserer SAR-innhold i #sar-sections og håndterer modusbytte
// mellom Førstehjelp og SAR. Gjenbruker hovedappens tooltip-, toggle- og
// filter-funksjoner (script.js) – SAR_TIPS er allerede slått sammen i TIPS.

(function () {
  function setMode(mode) {
    var firstaid = document.getElementById('all-sections');
    var sar = document.getElementById('sar-sections');
    if (!firstaid || !sar) { return; }
    firstaid.style.display = mode === 'sar' ? 'none' : '';
    sar.style.display = mode === 'sar' ? '' : 'none';

    var btns = document.querySelectorAll('.mode-btn');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('active', btns[i].getAttribute('data-mode') === mode);
    }

    var h1 = document.querySelector('.header h1');
    if (h1) { h1.textContent = mode === 'sar' ? 'SAR – Søkemetoder' : 'Komplett feltguide'; }

    var search = document.getElementById('search');
    if (search) {
      search.placeholder = mode === 'sar'
        ? 'Søk metode, begrep, case...'
        : 'Søk skade, sport, mekanisme...';
      if (search.value) {
        search.value = '';
        if (typeof filterRows === 'function') { filterRows(); }
      }
    }

    try { localStorage.setItem('app_mode', mode); } catch (e) {}
  }
  window.setMode = setMode;

  document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('sar-sections');
    if (container) {
      (window.SAR_SECTIONS || []).forEach(function (html) {
        container.insertAdjacentHTML('beforeend', html);
      });

      // Wire up tip listeners for SAR content (mirrors script.js logic).
      var sarTipEls = container.querySelectorAll('[data-tip]');
      for (var i = 0; i < sarTipEls.length; i++) {
        (function (el) {
          el.addEventListener('touchend', function (e) { e.preventDefault(); e.stopPropagation(); showTip(el); });
          el.addEventListener('click', function (e) { e.stopPropagation(); showTip(el); });
        })(sarTipEls[i]);
      }

      // Session restore for SAR sections (same pattern as script.js).
      try {
        var sarSecs = container.querySelectorAll('[data-section]');
        for (var j = 0; j < sarSecs.length; j++) {
          var h2 = sarSecs[j].querySelector('.section-header');
          var b2 = sarSecs[j].querySelector('.section-body');
          var c2 = h2.querySelector('.chevron');
          var titleEl2 = h2.querySelector('.section-title');
          if (!titleEl2) { continue; }
          var st = sessionStorage.getItem('sec_' + titleEl2.textContent.trim());
          if (st === 'open') {
            b2.classList.remove('hidden');
            c2.classList.add('open');
            h2.classList.add('open');
          }
        }
      } catch (e) {}
    }

    // Restore last chosen mode.
    var saved = 'firstaid';
    try { saved = localStorage.getItem('app_mode') || 'firstaid'; } catch (e) {}
    setMode(saved);
  });
})();
