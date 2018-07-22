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

![](https://github.com/GregoryNative/react-native-gl-image-filters/blob/master/saytama_example.gif)

**`gl-react-native` is an implementation of `gl-react` for `react-native`. Please [read the main gl-react README](https://github.com/ProjectSeptemberInc/gl-react/) for more information.**

## Documentation

[**doc**](https://github.com/ProjectSeptemberInc/gl-react/tree/master/docs)

Props for ImageFilters component

| Name | Description | Type | Required | Default Value |
| :--- | :----- | :--- | :---: | :---: |
| children | Inner component or url for image | Any |  |  |
| width | Width of component | Number |   | 240 |
| height | Height of component | Number |   | 240 |
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
npm i --save gl-react-native@2.48.0
npm i --save gl-react@2.2.0
npm i --save react-native-gl-image-filters
```
or
```
yarn add gl-react-native@2.48.0
yarn add gl-react@2.2.0
yarn add react-native-gl-image-filters
```

### Configure your React Native Application

**on iOS:**

![](https://github.com/ProjectSeptemberInc/gl-react-native/raw/master/docs/install-steps.png)

or if you use Cocapods:

```ruby
pod 'RNGL', :path => './node_modules/gl-react-native'
```

**on Android:**

1. `android/settings.gradle`:: Add the following snippet
```gradle
include ':RNGL'
project(':RNGL').projectDir = file('../node_modules/gl-react-native/android')
```
2. `android/app/build.gradle`: Add in dependencies block.
```gradle
compile project(':RNGL')
```
3. in your `MainApplication` (or equivalent) the RNGLPackage needs to be added. Add the import at the top:
```java
import com.projectseptember.RNGL.RNGLPackage;
```
4. In order for React Native to use the package, add it the packages inside of the class extending ReactActivity.
```java
@Override
protected List<ReactPackage> getPackages() {
  return Arrays.<ReactPackage>asList(
	new MainReactPackage(),
	...
	new RNGLPackage()
  );
}
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
import { Surface } from "gl-react-native";
import ImageFilters from "react-native-gl-image-filters";

export default class App extends Component {
  save = () => {
    if (!this.image) return;

    this.image.captureFrame() // <= you can pass config here, check docs
      .then(console.warn);
  }

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
            https://vk.vkfaces.com/639827/v639827987/67cbc/aODwAJMQ8jM.jpg
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
