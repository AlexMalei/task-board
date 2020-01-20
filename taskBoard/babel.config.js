const path = require('path')

module.exports = api => {
  api.cache(false)
  return {
    presets: ['module:metro-react-native-babel-preset', 'module:react-native-dotenv'],
    plugins: [
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-transform-async-to-generator',
      [
        'module-resolver',
        {
          alias: {
            '@': path.resolve(__dirname, './src/'),
          },
        },
      ],
    ],
  }
}
