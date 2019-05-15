const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const manifestConfig = JSON.parse(fs.readFileSync(path.resolve(__dirname, './manifest.json')));
const postcssConfig = JSON.parse(fs.readFileSync(path.resolve(__dirname, './.postcss')));
const faviconDescriptionConfig = JSON.parse(fs.readFileSync(path.resolve(__dirname, './faviconDescription.json')));
const dotenvConfig = dotenv.parse(fs.readFileSync(path.resolve(__dirname, `./envs/${process.env.DOT_ENV}/.env`)));
const StyleLintPlugin = require('stylelint-webpack-plugin');
dotenv.config();

// 本番環境以外のみ
if (dotenvConfig.NODE_ENV !== 'production') {
  manifestConfig.icons = [];
}

module.exports = {
  mode: 'universal',
  srcDir: 'src/',
  server: {
    port: 20170
  },
  head: {
    title: manifestConfig.title,
    titleTemplate: (t) => (t === 'LAB' ? t : `${t} | LAB`),
    meta: [
      { hid: 'og:image', property: 'og:image', content: '/img/common/ogp.png' } //
    ]
  },
  manifest: manifestConfig,
  meta: {
    // @nuxtjs/pwa
    charset: 'utf-8',
    viewport: 'width=device-width, initial-scale=1',
    favicon: false,
    author: false,
    description: false,
    ogTitle: false,
    ogDescription: false,
    ogImage: '/img/common/ogp.png',
    ogType: 'article',
    twitterCard: 'summary_large_image'
  },
  plugins: [{ src: '~/plugins/device', ssr: false }],
  loading: {
    color: '#559'
  },
  modules: [
    'nuxt-polyfill',
    '@nuxtjs/axios',
    ['@nuxtjs/dotenv', { path: path.resolve(__dirname, `./envs/${process.env.DOT_ENV}/`) }],
    'nuxt-user-agent',
    'nuxt-imagemin',
    ['@nuxtjs/pwa', { icon: false }],
    ['@nuxtjs/style-resources'],
    ['nuxt-rfg-icon', { rfg: faviconDescriptionConfig }]
  ],
  axios: {
    baseURL: dotenvConfig.API_BASE_URL,
    retry: false // { retries: 3 }
  },
  polyfill: {
    features: [
      {
        require: 'url-polyfill'
      },
      {
        require: 'intersection-observer',
        detect: () => 'IntersectionObserver' in window
      },
      {
        require: 'smoothscroll-polyfill',
        detect: () => 'scrollBehavior' in document.documentElement.style && window.__forceSmoothScrollPolyfill__ !== true,
        install: (smoothscroll) => smoothscroll.polyfill()
      }
    ]
  },
  styleResources: {
    scss: './src/assets/scss/common.scss'
  },
  css: ['sanitize.css', '~/assets/scss/root.scss'],
  router: {
    extendRoutes(routes, resolve) {
      // generate用
      if (dotenvConfig.NODE_ENV === 'production') {
        routes.push({
          name: 'custom',
          path: '*',
          component: resolve(__dirname, 'src/pages/index.vue')
        });
      }
    }
  },
  build: {
    splitChunks: {
      layouts: false,
      pages: false,
      commons: false
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            name: 'commons',
            test: /\.(s?css|js|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    extractCSS: true,
    postcss: postcssConfig,
    extend(config, ctx) {
      // 共通: 拡張子
      config.resolve.extensions.push('.scss', '.svg');

      // 共通: SVG
      config.module.rules
        .filter((rule) => rule.test && /svg/.test(rule.test.toString()))
        .forEach((rule) => {
          rule.test = /\.(png|jpe?g|gif)$/;
        });
      config.module.rules.push({
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        options: {
          svgo: false
        }
      });

      // 開発
      if (ctx.isDev && ctx.isClient) {
        // 開発: Stylelint
        config.plugins.push(
          new StyleLintPlugin({
            configFile: '.stylelintrc',
            files: ['./src/**/*.scss'],
            fix: true
          })
        );

        // 開発: ESLint
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        });
      }

      // generate用
      if (!ctx.isDev) {
        config.output.publicPath = '_nuxt/';
      }
    }
  }
};
