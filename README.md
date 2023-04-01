# React-native-app

A react native template with bunch of settings for a code ready project.

### App icon setup

This project uses the react-native-make library to setup app icon without hassle.

```bash
  yarn add @bam.tech/react-native-make -D
```

After installing the library the image needs to be in png/jpeg format and 1024x1024 minimum size.

Then run the following command:

```bash
  yarn react-native set-icon --path [path-to-image] --background color
```

For platform specific setup

[![react-native-make](https://img.shields.io/badge/React_NATIVE_MAKE-blue?style=for-the-badge&logo=react&logoColor=white)](https://github.com/bamlab/react-native-make/blob/master/docs/set-icon.md)

> **_NOTE:_** If you want to setup an animated splash screen with **react-native-lottie-splash-screen** checkout to the following branch 👉 https://github.com/m1ch3l99/react-native-app/tree/feature/animated-splash-screen
