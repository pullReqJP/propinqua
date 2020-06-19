require('dotenv').config();

console.log(process.env.NODE_ENV);
module.exports = {
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.css$/,
  //     use: 'raw-loader',
  //   });
  //   return config;
  // },
  env: {
    static_forms_key: process.env.STATIC_FORMS_KEY,
  },

  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
      '/company': { page: '/company' },
      '/service': { page: '/service' },
      '/hikari': { page: '/hikari' },
      '/contact': { page: '/contact' },
      '/sample': { page: '/sample' },
    };

    return paths;
  },

  assetPrefix: process.env.NODE_ENV === 'production' ? '/propinqua' : '',

  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' ? '/propinqua' : '',
  },
};
