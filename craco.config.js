const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Style': path.resolve(__dirname, 'src/style'),
      '@Layout': path.resolve(__dirname, 'src/layout'),
      '@Pages': path.resolve(__dirname, 'src/pages'),
      '@Actions': path.resolve(__dirname, 'src/actions'),
      '@Reducers': path.resolve(__dirname, 'src/reducers'),
    },
  },
};
