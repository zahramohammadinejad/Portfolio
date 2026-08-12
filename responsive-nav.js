(function(){
  function init(){
    document.querySelectorAll('.navbar').forEach(function(header){
      var nav=header.querySelector('nav');
      if(!nav) return;

      var button=header.querySelector('.menu-toggle');
      if(!button){
        button=document.createElement('button');
        button.className='menu-toggle';
        button.type='button';
        button.innerHTML='<span></span><span></span><span></span>';
        header.insertBefore(button,nav);
      }

      nav.id=nav.id||('main-navigation-'+Math.random().toString(36).slice(2,8));
      button.setAttribute('aria-controls',nav.id);
      button.setAttribute('aria-expanded','false');
      button.setAttribute('aria-label','Open navigation menu');

      function closeMenu(){
        header.classList.remove('menu-open');
        button.classList.remove('open');
        button.setAttribute('aria-expanded','false');
        button.setAttribute('aria-label','Open navigation menu');
      }

      function toggleMenu(e){
        if(e) e.stopPropagation();
        var open=!header.classList.contains('menu-open');
        header.classList.toggle('menu-open',open);
        button.classList.toggle('open',open);
        button.setAttribute('aria-expanded',String(open));
        button.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');
      }

      if(!button.dataset.navReady){
        button.addEventListener('click',toggleMenu);
        nav.querySelectorAll('a').forEach(function(link){
          link.addEventListener('click',closeMenu);
        });
        document.addEventListener('click',function(e){
          if(header.classList.contains('menu-open')&&!header.contains(e.target)) closeMenu();
        });
        document.addEventListener('keydown',function(e){
          if(e.key==='Escape') closeMenu();
        });
        button.dataset.navReady='true';
      }
    });
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init);
  else init();
})();
