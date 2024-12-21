module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@assets': './src/assets',
            '@components': './src/components',
            '@routes': './src/routes',
            '@screens': './src/screens',
            '@styles': './src/style',
            '@utils': './src/utils',
            '@shared': './src/shared',
            '@storage': './src/storage',
            '@services': './src/services'
          },
        },
      ],
    ],
  };
};
