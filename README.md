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
npm i --save gl-react-native
npm i --save react-native-gl-image-filters
```
or
```
yarn add gl-react-native
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

### Example
