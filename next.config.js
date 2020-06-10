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
  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
      '/company': { page: '/company' },
      '/service': { page: '/service' },
      '/product': { page: '/product' },
      '/sample': { page: '/sample' },
    };

    return paths;
  },

  assetPrefix: process.env.NODE_ENV === 'production' ? '/propinqua' : '',

  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' ? '/propinqua' : '',
  },
};
