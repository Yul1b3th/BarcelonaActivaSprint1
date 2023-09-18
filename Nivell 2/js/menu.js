((d) => {
  const $btnMenu = d.querySelector('.menu-btn'),
    $menu = d.querySelector('.menu'),
    $body = d.body;

  $btnMenu.addEventListener('click', (e) => {
    $btnMenu.firstElementChild.classList.toggle('none');
    $btnMenu.lastElementChild.classList.toggle('none');
    $menu.classList.toggle('is-active');

    // Añadir o eliminar la clase 'overflow-hidden' del body
    $body.classList.toggle('overflow-hidden');
  });

  d.addEventListener('click', (e) => {
    if (!e.target.matches('.menu a')) return false;

    $btnMenu.firstElementChild.classList.remove('none');
    $btnMenu.lastElementChild.classList.add('none');
    $menu.classList.remove('is-active');

    // Eliminar la clase 'overflow-hidden' del body cuando se hace clic en un enlace del menú
    $body.classList.remove('overflow-hidden');
  });
})(document);
