
export default {
  basePath: '/ANGULAR_PORTFOLIO',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
