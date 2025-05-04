
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
    'index.csr.html': {size: 5198, hash: '223910e20fa6a843d3dbdaa2f36623ba76ccf00b0d70e19ce0cfc6c7a24e7842', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1024, hash: '402567348bf9a13334bd49133615ed029b66cb62c94eea0eca3c19b8cb0f3e12', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14324, hash: '42cba33dbade33281808ae32e15718a32c3056d8579136665f30832b27f7b81f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QIKIO3GQ.css': {size: 232422, hash: 'SFCye/OoreU', text: () => import('./assets-chunks/styles-QIKIO3GQ_css.mjs').then(m => m.default)}
  },
};
