import React, { Component } from 'react';
import { Surface } from 'gl-react-dom';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

import ImageFilters from 'react-native-gl-image-filters';

import Filter from './Filter';

import './App.css';

const SURFACE_SIZE = 300;

const settings = [
  {
    name: 'hue',
    minValue: -100.0,
    maxValue: 100.0,
  },
  {
    name: 'blur',
    maxValue: 6.0,
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
  {
    name: 'exposure',
    step: 0.05,
    minValue: -1.0,
    maxValue: 1.0,
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...settings,
      hue: 0,
      blur: 0,
      sepia: 0,
      sharpen: 0,
      negative: 0,
      contrast: 1,
      saturation: 1,
      brightness: 1,
      temperature: 6500,
      exposure: 0,
    };
  };

  saveImage = () => {
    if (!this.image) return;

    const result = this.image.captureAsDataURL()
    console.warn(result);
  };

  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Image Filters
            </Typography>
          </Toolbar>
        </AppBar>
        <header className="App-header">
          <Surface
            ref={ref => (this.image = ref)}
            width={SURFACE_SIZE}
            height={SURFACE_SIZE}
            webglContextAttributes={{preserveDrawingBuffer: true}}
          >
            <ImageFilters
              {...this.state}
              width={SURFACE_SIZE} height={SURFACE_SIZE}
            >
              https://i.imgur.com/5EOyTDQ.jpg
            </ImageFilters>
          </Surface>
        </header>
        {settings.map(filter => (
          <Filter
            key={filter.name}
            name={filter.name}
            defaultValue={this.state[filter.name]}
            minimum={filter.minValue}
            maximum={filter.maxValue}
            step={filter.step}
            onChange={value => this.setState({[filter.name]: value})}
          />
        ))}
        <Button
          className="App-button"
          variant="contained"
          color="primary"
          onClick={this.saveImage}
        >
          Save
        </Button>
      </div>
    );
  }
}
