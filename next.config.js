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
      '/service': { page: '/service' },
      '/product': { page: '/product' },
      '/information': { page: '/information' },
      '/sample': { page: '/sample' },
    };

    return paths;
  },

  assetPrefix: process.env.NODE_ENV === 'production' ? '/propinqua' : '',

  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' ? '/propinqua' : '',
  },
};
