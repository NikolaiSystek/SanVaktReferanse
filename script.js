
  var activeTip = null;

  function hideTip() {
    document.getElementById('tooltip').classList.remove('show');
    if (activeTip) { activeTip.classList.remove('active-tip'); activeTip = null; }
  }

  function positionTip(el) {
    var tt = document.getElementById('tooltip');
    var r = el.getBoundingClientRect();
    var tw = 260; var th = tt.offsetHeight || 160;
    var vw = window.innerWidth; var vh = window.innerHeight;
    var left = r.left; var top = r.bottom + 8;
    if (left + tw > vw - 10) { left = vw - tw - 10; }
    if (left < 10) { left = 10; }
    if (top + th > vh - 10) { top = r.top - th - 8; }
    if (top < 10) { top = Math.max(10, Math.round((vh - th) / 2)); }
    tt.style.left = left + 'px';
    tt.style.top = top + 'px';
  }

  function quickJump(key) {
    var map = { hlr: 'HLR og hjertestans', abcde: 'XABCDE – sjekkliste', slag: 'NIHSS', sjokk: 'Medisinske tilstander', '113': 'Nødnumre', triage: 'Triage' };
    var target = map[key];
    var sections = document.querySelectorAll('[data-section]');
    for (var i = 0; i < sections.length; i++) {
      var title = sections[i].querySelector('.section-title');
      if (title && title.textContent.indexOf(target) !== -1) {
        var body = sections[i].querySelector('.section-body');
        var h = sections[i].querySelector('.section-header');
        var c = h.querySelector('.chevron');
        body.classList.remove('hidden');
        c.classList.add('open');
        h.classList.add('open');
        sections[i].scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      }
    }
  }

  function renderTip(key, anchorEl) {
    var tip = TIPS[key];
    if (!tip) { return; }
    document.getElementById('tip-name').textContent = tip.name;
    var plain = document.getElementById('tip-plain');
    plain.textContent = tip.plain || '';
    plain.style.display = tip.plain ? '' : 'none';
    document.getElementById('tip-body').textContent = tip.body;
    var sev = document.getElementById('tip-sev-el');
    sev.className = 'tip-sev ' + (tip.sev || '');
    sev.textContent = tip.sev === 'd' ? 'Livstruende' : tip.sev === 'w' ? 'Alvorlig' : tip.sev === 'i' ? 'Vurder' : '';
    sev.style.display = tip.sev ? '' : 'none';
    var relDiv = document.getElementById('tip-related');
    var relLinks = document.getElementById('tip-related-links');
    relLinks.innerHTML = '';
    if (tip.rel && tip.rel.length) {
      for (var i = 0; i < tip.rel.length; i++) {
        (function(k) {
          var t2 = TIPS[k];
          if (!t2) { return; }
          var span = document.createElement('span');
          span.className = 'tip-link';
          span.textContent = t2.name;
          span.addEventListener('touchend', function(e) { e.preventDefault(); e.stopPropagation(); renderTip(k, null); });
          span.addEventListener('click', function(e) { e.stopPropagation(); renderTip(k, null); });
          relLinks.appendChild(span);
        })(tip.rel[i]);
      }
      relDiv.style.display = '';
    } else {
      relDiv.style.display = 'none';
    }
    var tt = document.getElementById('tooltip');
    tt.classList.add('show');
    if (anchorEl) { positionTip(anchorEl); }
  }

  function showTip(el) {
    var key = el.getAttribute('data-tip');
    if (!key || !TIPS[key]) { return; }
    if (activeTip === el) { hideTip(); return; }
    if (activeTip) { activeTip.classList.remove('active-tip'); }
    activeTip = el;
    el.classList.add('active-tip');
    renderTip(key, el);
  }

  var allTipEls = document.querySelectorAll('[data-tip]');
  for (var i = 0; i < allTipEls.length; i++) {
    (function(el) {
      el.addEventListener('touchend', function(e) { e.preventDefault(); e.stopPropagation(); showTip(el); });
      el.addEventListener('click', function(e) { e.stopPropagation(); showTip(el); });
    })(allTipEls[i]);
  }

  var closeBtn = document.getElementById('tip-close');
  closeBtn.addEventListener('touchend', function(e) { e.preventDefault(); e.stopPropagation(); hideTip(); });
  closeBtn.addEventListener('click', function(e) { e.stopPropagation(); hideTip(); });

  document.addEventListener('touchend', function(e) {
    if (!e.target.closest('#tooltip') && !e.target.hasAttribute('data-tip')) { hideTip(); }
  });
  document.addEventListener('click', function(e) {
    if (!e.target.closest('#tooltip') && !e.target.hasAttribute('data-tip')) { hideTip(); }
  });

  function toggleSub(id) {
    var el = document.getElementById(id);
    if (el) { el.classList.toggle('hidden'); }
  }

  function toggle(h) {
    var b = h.nextElementSibling;
    var c = h.querySelector('.chevron');
    var open = !b.classList.contains('hidden');
    b.classList.toggle('hidden', open);
    c.classList.toggle('open', !open);
    h.classList.toggle('open', !open);
    var titleEl = h.querySelector('.section-title');
    if (titleEl) {
      try { sessionStorage.setItem('sec_' + titleEl.textContent.trim(), open ? 'closed' : 'open'); } catch(e) {}
    }
  }

  // Restore section open/closed state from sessionStorage
  (function() {
    try {
      var allSecs = document.querySelectorAll('[data-section]');
      for (var i = 0; i < allSecs.length; i++) {
        var h2 = allSecs[i].querySelector('.section-header');
        var b2 = allSecs[i].querySelector('.section-body');
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
    } catch(e) {}
  })();

  function filterRows() {
    var q = document.getElementById('search').value.toLowerCase();
    var sections = document.querySelectorAll('[data-section]');
    for (var i = 0; i < sections.length; i++) {
      var sec = sections[i];
      var h = sec.querySelector('.section-header');
      var b = sec.querySelector('.section-body');
      var c = h.querySelector('.chevron');
      var rows = b.querySelectorAll('[data-row]');
      if (!q) {
        b.classList.add('hidden'); c.classList.remove('open'); h.classList.remove('open');
        for (var j = 0; j < rows.length; j++) { rows[j].style.display = ''; rows[j].classList.remove('search-match'); }
        sec.style.display = ''; continue;
      }
      var any = false;
      for (var j = 0; j < rows.length; j++) {
        var m = rows[j].textContent.toLowerCase().indexOf(q) !== -1;
        rows[j].style.display = m ? '' : 'none';
        rows[j].classList.toggle('search-match', m);
        if (m) { any = true; }
      }
      if (h.textContent.toLowerCase().indexOf(q) !== -1) {
        for (var j = 0; j < rows.length; j++) { rows[j].style.display = ''; rows[j].classList.remove('search-match'); }
        any = true;
      }
      sec.style.display = any ? '' : 'none';
      if (any) { b.classList.remove('hidden'); c.classList.add('open'); h.classList.add('open'); }
    }
    var groups = document.querySelectorAll('.group-label');
    for (var i = 0; i < groups.length; i++) {
      if (!q) { groups[i].style.display = ''; continue; }
      var sib = groups[i].nextElementSibling; var vis = false;
      while (sib && !sib.classList.contains('group-label')) {
        if (sib.style.display !== 'none') { vis = true; }
        sib = sib.nextElementSibling;
      }
      groups[i].style.display = vis ? '' : 'none';
    }
  }

