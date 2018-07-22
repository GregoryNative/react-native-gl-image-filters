import React, { Component } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Text,
  Button,
} from 'native-base';
import { Surface } from 'gl-react-native';
import ImageFilters from 'react-native-gl-image-filters';

import Filter from './Filter';

const width = Dimensions.get('window').width - 40;

const settings = [
  {
    name: 'hue',
    minValue: -100.0,
    maxValue: 100.0,
  },
  {
    name: 'blur',
    maxValue: 2.0,
  },
  {
    name: 'sepia',
    maxValue: 2.0,
  },
  {
    name: 'sharpen',
    maxValue: 2.0,
  },
  {
    name: 'negative',
    maxValue: 2.0,
  },
  {
    name: 'contrast',
    maxValue: 2.0,
  },
  {
    name: 'saturation',
    maxValue: 2.0,
  },
  {
    name: 'brightness',
    maxValue: 2.0,
  },
  {
    name: 'temperature',
    minValue: 1000.0,
    maxValue: 40000.0,
  },
];

export default class App extends Component {
  state = settings.reduce((result, value) => {
    result[value] = 0;
    return result;
  }, {});

  saveImage = () => {
    this.refs.filtered_image.captureFrame().then(console.warn);
  };

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Image Filters</Title>
          </Body>
        </Header>
        <Content style={styles.content} showsVerticalScrollIndicator={false}>
          <Surface preload width={width} height={width} ref="filtered_image">
            <ImageFilters {...this.state}>
              https://vk.vkfaces.com/639827/v639827987/67cbc/aODwAJMQ8jM.jpg
            </ImageFilters>
          </Surface>
          {settings.map(filter => (
            <Filter
              key={filter.name}
              name={filter.name}
              minimum={filter.minValue}
              maximum={filter.maxValue}
              onChange={value => this.setState({ [filter.name]: value })}
            />
          ))}
          <Button
            rounded={false}
            style={styles.button}
            block
            onPress={this.sameImage}
          >
            <Text>Save</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: { marginTop: 20, marginHorizontal: 20 },
  button: { marginVertical: 20, borderRadius: 0 },
});
