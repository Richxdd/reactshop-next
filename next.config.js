module.exports = {
  reactStrictMode: true,
  env: {
    customKey: 'customValue',
  },
  images: {
    domains: ['placeimg.com'],
  },
  compress: true,
  async redirets() {
    return [
      {
        source: '/*',
        destination: '/',
        premanent: true,
      },
    ];
  },
};
