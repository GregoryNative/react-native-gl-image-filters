OpenGL bindings for React Native to implement complex effects over images and components, in the descriptive VDOM paradigm. You can use predefined filters:
  - blur
  - contrast
  - saturation
  - brightness
  - hue
  - negative
  - sepia
  - sharpen
  - tempreture.

![](https://github.com/GregoryNative/react-native-gl-image-filters/blob/master/cat-gl-filters.gif)

**`gl-react-native` is an implementation of `gl-react` for `react-native`. Please [read the main gl-react README](https://github.com/gre/gl-react) and [gl-react-native README](https://github.com/gre/gl-react/tree/master/packages/gl-react-native) for more information.**


## Documentation

Props for ImageFilters component

| Name | Description | Type | Required | Default Value |
| :--- | :----- | :--- | :---: | :---: |
| children | Inner component or url for image | Any |  |  |
| width | Width of component | Number |   |  |
| height | Height of component | Number |   |  |
| hue | Hue filter | Number |   | 0 |
| blur | Blur filter | Number |   | 0 |
| sepia | Sepia filter | Number |   | 0 |
| sharpen | Sharpen filter | Number |   | 0 |
| negative | Negative filter | Number |   | 0 |
| contrast | Contrast filter | Number |   | 1 |
| saturation | Saturation filter | Number |   | 1 |
| brightness | Brightness filter | Number |   | 1 |
| temperature | Temperature filter | Number |   | 6500 |

## Installation

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

### Configure your React Native Application

**on iOS:**

https://github.com/unimodules/react-native-unimodules#-configure-ios

**on Android:**

https://github.com/unimodules/react-native-unimodules#-configure-android

## Installation on Expo

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

## Installation on React Web

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


### Usage
```javascript
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { Surface } from 'gl-react-native';
import ImageFilters from 'react-native-gl-image-filters';

export default class App extends Component {
  save = async () => {
    if (!this.image) return;

    const result = await this.image.glView.capture();
    console.warn(result);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Image Filters!
        </Text>
        <Surface
          width={300}
          height={300}
          ref={ref => (this.image = ref)}
        >
          <ImageFilters
            width={300}
            height={300}
            temperature={10000}
            sharpen={1}
            hue={0.5}
            blur={0.5}
          >
            {{ uri: 'https://i.imgur.com/5EOyTDQ.jpg' }}
          </ImageFilters>
        </Surface>
        <Button title="Save" onPress={this.save} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
```

### Usage with Expo
```javascript
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { Surface } from 'gl-react-expo';
import ImageFilters from 'react-native-gl-image-filters';

export default class App extends Component {
  save = async () => {
    if (!this.image) return;

    const result = await this.image.glView.capture();
    console.warn(result);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Image Filters!
        </Text>
        <Surface
          width={300}
          height={300}
          ref={ref => (this.image = ref)}
        >
          <ImageFilters
            width={300}
            height={300}
            temperature={10000}
            sharpen={1}
            hue={0.5}
            blur={0.5}
          >
            {{ uri: 'https://i.imgur.com/5EOyTDQ.jpg' }}
          </ImageFilters>
        </Surface>
        <Button title="Save" onPress={this.save} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
```

### Usage with React web
Example here: [examples/web](https://github.com/GregoryNative/react-native-gl-image-filters/tree/master/examples/web)
