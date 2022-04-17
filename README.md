[![Stand With Ukraine](https://raw.githubusercontent.com/vshymanskyy/StandWithUkraine/main/banner-direct-single.svg)](https://stand-with-ukraine.pp.ua)
<h1 align="center">
  <img width="32" alt="icon" src="https://raw.githubusercontent.com/GregoryNative/react-native-gl-image-filters/docusaurus/website/static/img/favicon_32.ico">
  react-native-gl-image-filters
</h1>

<p align="center">
  <a href="https://github.com/GregoryNative/react-native-gl-image-filters/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="react-native-gl-image-filters is released under the MIT license." />
  </a>
  <a href="https://www.npmjs.org/package/react-native-gl-image-filters">
    <img src="https://img.shields.io/npm/v/react-native-gl-image-filters" alt="Current npm package version." />
  </a>
  <a href="https://www.npmjs.com/package/react-native-gl-image-filters">
    <img src="https://img.shields.io/npm/dm/react-native-gl-image-filters.svg" alt="Current npm package downloads." />
  </a>
  <a href="https://snack.expo.io/@gregoryrn/expo-gregorynative-react-native-gl-image-filters">
    <img src="https://badgen.net/badge/expo/snack/blue?icon=https://symbols.getvecta.com/stencil_79/82_expo-icon.11a3983570.svg" alt="Expo snack." />
  </a>
  <a href="https://stackblitz.com/edit/react-native-gl-image-filters-web-example">
    <img src="https://badgen.net/badge/web/blitz/purple?icon=bitcoin-lightning" alt="Stackblitz project." />
  </a>
</p>

[](https://badgen.net/badge/expo/snack/blue?icon=https://symbols.getvecta.com/stencil_79/82_expo-icon.11a3983570.svg)
OpenGL bindings for React Native to implement complex effects over images and components, in the descriptive VDOM paradigm. You can use predefined filters:
  - blur
  - contrast
  - saturation
  - brightness
  - hue
  - negative
  - sepia
  - sharpen
  - temperature
  - exposure. 

![](https://github.com/GregoryNative/react-native-gl-image-filters/blob/master/cat-gl-filters.gif)

**`gl-react-native` is an implementation of `gl-react` for `react-native`. Please [read the main gl-react README](https://github.com/gre/gl-react) and [gl-react-native README](https://github.com/gre/gl-react/tree/master/packages/gl-react-native) for more information.**

Table of Contents
=================
<!--ts-->
  * [API](#api)
     * [Props](#props)
     * [Constants](#constants)
        * [DefaultValues](#defaultvalues)
           * [Usage example](#usage-example)
        * [DefaultPresets](#defaultpresets)
           * [Usage example](#usage-example-1)
     * [Presets](#presets)
     * [Utils](#utils)
        * [createPreset](#createpreset)
  * [Recommended Min and Max range for each filter](#recommended-min-and-max-range-for-each-filter)
  * [Installation](#installation)
     * [Installation for React Native](#installation-for-react-native)
        * [Configure your React Native Application](#configure-your-react-native-application)
     * [Installation on Expo](#installation-on-expo)
     * [Installation on React Web](#installation-on-react-web)
  * [Usage](#usage)
     * [Usage with React Native](#usage-with-react-native)
     * [Usage with Expo](#usage-with-expo)
     * [Usage with React web](#usage-with-react-web)
<!--te-->

## API
- [`Props`](#props)
- [`Constants`](#constants)
- [`Presets`](#presets)
- [`Utils`](#utils)

### `Props`
Props for ImageFilters Component

| Name | Description | Type | Required | Default Value |
| :--- | :----- | :--- | :---: | :---: |
| children | Inner component or url for image | Any | + |  |
| width | Width of component | Number | + |  |
| height | Height of component | Number | + |  |
| hue | Hue filter | Number |   | 0 |
| blur | Blur filter | Number |   | 0 |
| sepia | Sepia filter | Number |   | 0 |
| sharpen | Sharpen filter | Number |   | 0 |
| negative | Negative filter | Number |   | 0 |
| contrast | Contrast filter | Number |   | 1 |
| saturation | Saturation filter | Number |   | 1 |
| brightness | Brightness filter | Number |   | 1 |
| temperature | Temperature filter | Number |   | 6500 |
| exposure | Exposure filter | Number |   | 0 |
| 🆕 colorOverlay | Color Overlay with the length of 4 (RGBA format). Values must be a real value between 0 and 255. | Array |   | [0.0, 0.0, 0.0, 0.0] |

### `Constants`
- [`DefaultValues`](#defaultvalues)
- [`DefaultPresets`](#defaultpresets)

#### `DefaultValues`
Can be used to set filter to default one manually. 

```ts
interface DefaultValues {
  sepia: number;
  hue: number;
  blur: number;
  sharpen: number;
  negative: number;
  temperature: number;
  brightness: number;
  contrast: number;
  saturation: number;
  exposure: number;
  colorOverlay: Array<number>;
}
```

##### Usage example

```js
import ImageFilters, { Constants } from 'react-native-gl-image-filters';

...

state = {
  blur: 4,
};

...

resetFilter = () => {
  this.setState({
    blur: Constants.DefaultValues.blur,
  });
}
```

#### `DefaultPresets`
Can be used to list available presets. 

```ts
interface DefaultPresets extends Array<DefaultPreset> {}
```

```ts
interface DefaultPreset {
  name: string,
  description: string,
  preset: Preset,
}
```

```ts
interface Preset {
  sepia?: number;
  hue?: number;
  blur?: number;
  sharpen?: number;
  negative?: number;
  temperature?: number;
  brightness?: number;
  contrast?: number;
  saturation?: number;
  exposure?: number;
}
```

##### Usage example

```js
import ImageFilters, { Constants } from 'react-native-gl-image-filters';

...

<>
  {Constants.DefaultPresets.map(item =>
    <View>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Surface>
        <ImageFilters {...item.preset}>
          {{ uri: 'https://i.imgur.com/5EOyTDQ.jpg' }}
        </ImageFilters>
       </Surface>
    </View>
  )}
</>
```

### `Presets`
Use predefined presets.

```js
import { Presets } from 'react-native-gl-image-filters';

Presets.NoPreset;
Presets.AmaroPreset;
Presets.ClarendonPreset;
Presets.DogpatchPreset;
Presets.GinghamPreset;
Presets.GinzaPreset;
Presets.HefePreset;
Presets.LudwigPreset;
Presets.SkylinePreset;
Presets.SlumberPreset;
Presets.SierraPreset;
Presets.StinsonPreset;

...

<ImageFilters {...Presets.StinsonPreset}>
  {{ uri: 'https://i.imgur.com/5EOyTDQ.jpg' }}
</ImageFilters>
```

### `Utils`

#### createPreset
Available for creating own presets.

```js
import ImageFilters, { Utils } from 'react-native-gl-image-filters';

const MyOwnPreset = Utils.createPreset({
  brightness: .1,
  saturation: -.5,
  sepia: .15,
});

...

<ImageFilters {...MyOwnPreset}>
  {{ uri: 'https://i.imgur.com/5EOyTDQ.jpg' }}
</ImageFilters>
```

## Recommended Min and Max range for each filter

| Name | Min. Value | Max. Value |
| :--- | :---: | :---: |
| hue | 0 | 6.3 |
| blur | 0 | 30 |
| sepia | -5 | 5 |
| sharpen | 0 | 15 |
| negative | -2 | 2 |
| contrast | -10 | 10 |
| saturation | 0 | 2 |
| brightness | 0 | 5 |
| temperature | 0 | 40000 |
| exposure | -1 | 1 |

## Installation

### Installation for React Native

```
npm i --save react-native-gl-image-filters
npm i --save gl-react@^4.0.1
npm i --save gl-react-native@^4.0.1
npm i --save buffer@^5.4.3
npm i --save react-native-unimodules@^0.7.0
```
or
```
yarn add react-native-gl-image-filters
yarn add gl-react@^4.0.1
yarn add gl-react-native@^4.0.1
yarn add buffer@^5.4.3
yarn add react-native-unimodules@^0.7.0
```

#### Configure your React Native Application

**on iOS:**

https://github.com/unimodules/react-native-unimodules#-configure-ios

**on Android:**

https://github.com/unimodules/react-native-unimodules#-configure-android

### Installation on Expo

```
npm i --save react-native-gl-image-filters
npm i --save expo-gl
npm i --save gl-react@^4.0.1
npm i --save gl-react-expo@^4.0.1
npm i --save buffer@^5.4.3
```
or
```
yarn add react-native-gl-image-filters
yarn add expo-gl
yarn add gl-react@^4.0.1
yarn add gl-react-expo@^4.0.1
yarn add buffer@^5.4.3
```

### Installation on React Web

```
npm i --save react-native-gl-image-filters
npm i --save gl-react@^4.0.1
npm i --save gl-react-dom@^4.0.1
```
or
```
yarn add react-native-gl-image-filters
yarn add gl-react@^4.0.1
yarn add gl-react-dom@^4.0.1
```

## Usage

### Usage with React Native
Example here: [examples/react-native](https://github.com/GregoryNative/react-native-gl-image-filters/tree/master/examples/react-native)

### Usage with Expo
Snack: https://snack.expo.io/@gregoryrn/expo-gregorynative-react-native-gl-image-filters <br>
Example here: [examples/expo](https://github.com/GregoryNative/react-native-gl-image-filters/tree/master/examples/expo)

### Usage with React web
Blitz: https://stackblitz.com/edit/react-native-gl-image-filters-web-example <br>
Example here: [examples/web](https://github.com/GregoryNative/react-native-gl-image-filters/tree/master/examples/web)
