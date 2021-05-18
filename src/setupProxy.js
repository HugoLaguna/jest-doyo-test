const { createProxyMiddleware } = require('http-proxy-middleware');
const environments = {
  VTEX_MAIN_URL: 'https://oxfordjeans.myvtex.com/',
};

module.exports = (app) => {
  app.use(
    '/api/*',
    createProxyMiddleware({
      target: environments.VTEX_MAIN_URL,
      changeOrigin: true,
    }),
  );
  app.use(
    '/ViewPagedUserComments*',
    createProxyMiddleware({
      target: environments.VTEX_MAIN_URL,
      changeOrigin: true,
    }),
  );
  app.use(
    '/files/*',
    createProxyMiddleware({
      target: environments.VTEX_MAIN_URL,
      changeOrigin: true,
    }),
  );
  app.use(
    '/arquivos/*',
    createProxyMiddleware({
      target: environments.VTEX_MAIN_URL,
      changeOrigin: true,
    }),
  );
  app.use(
    '/buscaautocomplete/*',
    createProxyMiddleware({
      target: environments.VTEX_MAIN_URL,
      changeOrigin: true,
    }),
  );
  app.use(
    '/no-cache/*',
    createProxyMiddleware({
      target: environments.VTEX_MAIN_URL,
      changeOrigin: true,
    }),
  );
  app.use('/produto/*',
    createProxyMiddleware({
      target: environments.VTEX_MAIN_URL,
      changeOrigin: true,
    }),
  )
};