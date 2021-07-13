/* eslint-disable */
(function (m, a, i, l, e, r) {
  m.MailerLiteObject = e;
  function f() {
    const c = { a: arguments, q: [] };
    const r = this.push(c);
    return typeof r !== 'number' ? r : f.bind(c.q);
  }
  f.q = f.q || [];
  m[e] = m[e] || f.bind(f.q);
  m[e].q = m[e].q || f.q;
  r = a.createElement(i);
  const _ = a.getElementsByTagName(i)[0];
  r.async = 1;
  r.src = `${l}?v${~~(new Date().getTime() / 1000000)}`;
  _.parentNode.insertBefore(r, _);
})(
  window,
  document,
  'script',
  'https://static.mailerlite.com/js/universal.js',
  'ml'
);

const ml_account = ml('accounts', '3292648', 'j0b6l7d2p0', 'load');
