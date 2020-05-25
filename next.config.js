require('dotenv').config();

module.exports = {
  env: {
    assetPrefix: process.env.GITHUB_PAGES ? '/propinqua' : '',
  },
};
