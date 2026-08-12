document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.navbar').forEach(function (header) {
    var button = header.querySelector('.menu-toggle');
    var nav = header.querySelector('nav');
    if (!button || !nav) return;

    button.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      header.classList.toggle('menu-open');
      button.classList.toggle('open');
      button.setAttribute('aria-expanded', header.classList.contains('menu-open') ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('menu-open');
        button.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', function (e) {
      if (!header.contains(e.target)) {
        header.classList.remove('menu-open');
        button.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
      }
    });
  });
});
