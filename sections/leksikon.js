(function() {
  var CATS = [
    { key: 'blodning',      label: 'Blødningskontroll (X)' },
    { key: 'luftvei',       label: 'Luftvei (A)' },
    { key: 'pust',          label: 'Pust (B)' },
    { key: 'sirkulasjon',   label: 'Sirkulasjon (C)' },
    { key: 'nevrologi',     label: 'Bevissthet og nevrologi (D)' },
    { key: 'eksponering',   label: 'Eksponering (E)' },
    { key: 'hjerte',        label: 'Hjerte og HLR' },
    { key: 'medisinske',    label: 'Medisinske tilstander' },
    { key: 'rus',           label: 'Rus og overdose' },
    { key: 'skader',        label: 'Skader og traumer' },
    { key: 'spesielle',     label: 'Spesielle situasjoner' },
    { key: 'kommunikasjon', label: 'Kommunikasjon og verktøy' },
    { key: 'normalverdier', label: 'Normalverdier og skalaer' },
    { key: 'nodnum',        label: 'Nødnumre' }
  ];

  var html = '<div class="group-label">Oppslagsverk</div>\n';
  html += '<div class="section" data-section>\n';
  html += '  <div class="section-header" onclick="toggle(this)">\n';
  html += '    <span class="section-title">&#128218; Leksikon – medisinske begreper</span>\n';
  html += '    <span class="badge badge-gray">REF</span><span class="chevron">&#9660;</span>\n';
  html += '  </div>\n';
  html += '  <div class="section-body hidden">\n';

  CATS.forEach(function(cat) {
    var entries = Object.keys(TIPS).filter(function(k) {
      return TIPS[k].cat === cat.key;
    }).sort(function(a, b) {
      return TIPS[a].name.localeCompare(TIPS[b].name, 'nb');
    });

    if (!entries.length) { return; }

    html += '    <div class="divider">' + cat.label + '</div>\n';
    html += '    <div class="row" data-row>\n';
    html += '      <div class="lex-list">\n';

    entries.forEach(function(k) {
      var t = TIPS[k];
      var sevCls = t.sev ? (' lex-' + t.sev) : '';
      html += '        <div class="lex-entry' + sevCls + '" data-tip="' + k + '">';
      html += '<span class="lex-name">' + t.name + '</span>';
      if (t.plain) {
        html += '<span class="lex-plain">' + t.plain + '</span>';
      }
      html += '</div>\n';
    });

    html += '      </div>\n';
    html += '    </div>\n';
  });

  html += '  </div>\n';
  html += '</div>\n';

  (window.SECTIONS = window.SECTIONS || []).push(html);
})();
