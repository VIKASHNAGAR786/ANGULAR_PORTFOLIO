
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ANGULAR_PORTFOLIO/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ANGULAR_PORTFOLIO"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 511, hash: '7eb66b2e63465c3bf6986d97a5f53dc18f5cdf2dd83e2b79a4bb5a3d20bc6e33', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: '002bc7cb6cf9e220a12e1ae18b5d0926c844ad9c77969bd229c2702148640b2c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20852, hash: '939a995f92e4ad27f7ca5f4b1d9a2bdd3f00268d7ea8c53aa060fc95be3472ee', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
