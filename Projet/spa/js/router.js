const routes = [
  {
    hash: '#/',
    render: home, // à importer
  },
  {
    hash: '#/about',
    render: about, // à importer
  },
  {
    hash: '#/search',
    render: search, // à importer
  },
  {
    hash: '#/products',
    render: products, // à importer
  },
  {
    hash: '#/product-details',
    render: productDetails, // à importer
  },
];

function matchRoute() {
  const mainEl = document.querySelector('body > main');

  const match = routes.find((route) => route.hash === location.hash);

  if (!match) {
    return notFound(mainEl); // à importer
  }

  match.render(mainEl);

  const links = document.querySelectorAll('header a');

  for (const link of links) {
    link.classList.remove('active');

    if (link.href.endsWith(location.hash)) {
      link.classList.add('active');
    }
  }
}

matchRoute();
window.addEventListener('hashchange', matchRoute);
