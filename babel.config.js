module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          assets: './src/assets',
          atoms: './src/components/atoms',
          config: './src/config',
          http: './src/http',
          hooks: './src/hooks',
          i18n: './src/i18n',
          layouts: './src/components/layouts',
          molecules: './src/components/molecules',
          navigation: './src/navigation',
          organisms: './src/components/organisms',
          screens: './src/screens',
          store: './src/store',
          types: './src/types',
          utils: './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
