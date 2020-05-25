require('dotenv').config();

console.log(process.env.NODE_ENV);
module.exports = {
  exportPathMap: async function () {
    const paths = {
      '/': { page: '/' },
      // '/posts': { page: '/posts' },
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

  // assetPrefix: '/propinqua',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/propinqua' : '',
};
