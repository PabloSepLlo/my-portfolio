
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/work-experience"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5069, hash: 'c8aba71531e7a3173eafb5e93e8d1e11e8e4cab9a1257a627c040560032d5987', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1001, hash: '08ec7bcb3169652658847d4af2084cdcdb9c04989e2796d0062cb73d2126bf42', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 24017, hash: 'd6398565434ee1cff6be801266f55d32e5c70939f29b9e79dafe479d8cbd4716', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'work-experience/index.html': {size: 24147, hash: 'af40aa4308cd1c1b12dd6aff6350a1240152a61ef177319ae414217e9b168abe', text: () => import('./assets-chunks/work-experience_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 30887, hash: '7df3d169387c59654e3e5c18b025baec3baa34cb0c0630b2977aedabad63d8be', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'styles-YBNEPZ22.css': {size: 315836, hash: 'Em3XiExI290', text: () => import('./assets-chunks/styles-YBNEPZ22_css.mjs').then(m => m.default)}
  },
};
