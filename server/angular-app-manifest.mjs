
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/my-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/my-portfolio/home"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio/work-experience"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5082, hash: '1163f9bcbe1ffda27ee537e8dded80ed1ba62f0ee061aa9c7489bb165d2dd928', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1014, hash: 'bfdcd1fe1a276592e40fcbe65531e9f86873ffc04ff6a539e56d54f3563c5746', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 24069, hash: '33718e81481151d247f7f2883f5d5042ef3269db6d588c29a2846cee3813d89e', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'work-experience/index.html': {size: 24199, hash: 'e6ecc057ec1703864f61a315266b4e06d09a1b8939e640fa4257b7f8ae2b59ed', text: () => import('./assets-chunks/work-experience_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 30939, hash: '37edaf763aa7608a47db221ebd8292281caaac078775c85b46511d618c3e3656', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'styles-YBNEPZ22.css': {size: 315836, hash: 'Em3XiExI290', text: () => import('./assets-chunks/styles-YBNEPZ22_css.mjs').then(m => m.default)}
  },
};
