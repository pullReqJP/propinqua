require('dotenv').config();

console.log(process.env.NODE_ENV);
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: 'raw-loader',
    });
    return config;
  },
  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
      '/product': { page: '/product' },
      '/information': { page: '/information' },
      '/sample': { page: '/sample' },
      // '/posts': { page: '/posts' },
      // '/posts/${id}': { page: '/posts/[id]' },
    };
    // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    // const data = await res.json();
    // const shows = data.map(entry => entry.show);

    // shows.forEach(show => {
    //   paths[`/show/${show.id}`] = { page: '/show/[id]', query: { id: show.id } };
    // });

    return paths;
  },
  // env: {
  //   assetPrefix: process.env.NODE_ENV === 'production' ? '/propinqua' : '',
  // },

  assetPrefix: process.env.NODE_ENV === 'production' ? '/propinqua' : '',

  publicRuntimeConfig: {
    basePath: process.env.NODE_ENV === 'production' ? '/propinqua' : '',
  },
};
