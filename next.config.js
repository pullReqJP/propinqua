require('dotenv').config();

module.exports = {
  env: {
    assetPrefix: process.env.GITHUB_PAGES ? '/propinqua' : '',
  },
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
};
