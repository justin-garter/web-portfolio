/* justingarter.com 2.0. Optional polish. Every page renders and navigates fully without this file. */
(function () {
  var d = document.documentElement;
  d.classList.add('js');
  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reveal blocks as they scroll in. Without JS, or with reduced motion, they are simply visible.
  var rev = document.querySelectorAll('[data-reveal]');
  if (!still && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    rev.forEach(function (el) { io.observe(el); });
  } else {
    rev.forEach(function (el) { el.classList.add('is-in'); });
  }

  // Contents list: mark the section currently being read.
  var links = document.querySelectorAll('.toc a[href^="#"]');
  if (links.length && 'IntersectionObserver' in window) {
    var map = {};
    links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var spy = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a) { a.removeAttribute('aria-current'); });
        var a = map[e.target.id]; if (a) a.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) spy.observe(s); });
  }

  // Network diagram: a tap focuses a box, which shows its details on touch screens.
  var detail = document.querySelector('.hl-detail');
  document.querySelectorAll('.hl-net .node').forEach(function (n) {
    n.addEventListener('click', function () { n.focus({ preventScroll: true }); });
    // On phones the drawing's own details panel is usually scrolled out of view,
    // so copy the focused box's details into the text block under the drawing.
    if (detail) n.addEventListener('focus', function () {
      var lines = Array.prototype.map.call(n.querySelectorAll('.tip text'), function (t) { return t.textContent; });
      if (!lines.length) return;
      detail.textContent = '';
      var head = document.createElement('strong'); head.textContent = lines[0];
      var body = document.createElement('p'); body.textContent = lines.slice(1).join(' ');
      detail.appendChild(head); detail.appendChild(body); detail.hidden = false;
    });
  });

  // Pointer-tracked highlight on cards that ask for it.
  if (!still) {
    document.querySelectorAll('[data-glow]').forEach(function (c) {
      c.addEventListener('pointermove', function (ev) {
        var r = c.getBoundingClientRect();
        c.style.setProperty('--mx', (ev.clientX - r.left) + 'px');
        c.style.setProperty('--my', (ev.clientY - r.top) + 'px');
      });
    });
  }
})();
