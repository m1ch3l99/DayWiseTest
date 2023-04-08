# React-native-app

A react native template with bunch of settings for a code ready project.

### App icon setup

This project uses the react-native-make library to setup app icon without hassle.

```bash
  yarn add @bam.tech/react-native-make -D
  cd ios
  pod install
```

After installing the library the image needs to be in png/jpeg format and 1024x1024 minimum size.

Then run the following command:

```bash
  yarn react-native set-icon --path [path-to-image] --background color
```

For platform specific setup

[![react-native-make](https://img.shields.io/badge/React_NATIVE_MAKE-blue?style=for-the-badge&logo=react&logoColor=white)](https://github.com/bamlab/react-native-make/blob/master/docs/set-icon.md)

### Splash screen setup

This project uses the react-native-bootsplash library to setup splash screen using platform tools.

```bash
  yarn add react-native-bootsplash
  cd ios
  pod install
```

Follow the link below for android and ios setup

[![react-native-bootsplash](https://img.shields.io/badge/React_NATIVE_BOOTSPLASH-blue?style=for-the-badge&logo=react&logoColor=white)](https://github.com/zoontek/react-native-bootsplash#setup)

Then in the code

```
import RNBootSplash from 'react-native-bootsplash';
RNBootSplash.hide({fade,duration});
```

| fade    | duration       |
| ------- | -------------- |
| boolean | number in (ms) |

**_NOTE:_** If you want to setup an animated splash screen with **react-native-lottie-splash-screen** check to the following branch 👉 https://github.com/m1ch3l99/react-native-app/tree/feature/animated-splash-screen

### Setting up husky and linting

#### What is Husky? 

Husky lets us run commands or script before committing or pushing our code to git.

To setup husky, first install the following deps:

```
yarn add husky lint-staged @commitlint/config-conventional @commitlint/cli -D
```

In the terminal run:

```
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js
```

This command will create the commitlint config file.

Then we need to init a .huksy dir in our project, so we run:

```
npx husky init
```

Now in package.json we add the following commands:

```
"scripts":{
  ...
  "lint": "eslint . --fix",
},
"lint-staged": {
  "**/*.{js,tsx,ts}": [
    "eslint --fix"
  ]
},
"husky": {
  "hooks": {
    "pre-commit": "npx lint-staged"
  }
}
```

Now let's create a commit-msg and pre-commit bash files so that huksy will run the proper command.

```
npx husky add .husky/commit-msg "npx --no -- commitlint --edit"
```
```
npx husky add .husky/pre-commit "npx lint-staged"
```

This also can be configurable based on demand.

### Setup absolute imports

```
yarn add -D babel-plugin-module-resolver
```

Now update the babel.config.js

```
module.exports = {
 ...
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
          ...
          // add the others
        },
      },
    ],
  ],
};

```

We need to update also the tsconfig.json file:

```
{
  ...
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "assets/*": ["./src/assets/*"]
      ...
      // add the others
    }
  },
  "exclude": ["node_modules"]
}

```

