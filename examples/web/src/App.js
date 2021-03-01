import React, { Component } from 'react';
import { Surface } from 'gl-react-dom';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

import ImageFilters, { Constants } from 'react-native-gl-image-filters';

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
  {
    component: 'Spacer',
  },
  {
    name: 'colorOverlay',
    component: 'ColorPicker',
  }
];

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...settings,
      ...Constants.DefaultValues,
    };
  };

  saveImage = () => {
    if (!this.image) return;

    const result = this.image.captureAsDataURL()
    console.warn(result);
  };

  resetImage = () => {
    this.setState({
      ...Constants.DefaultValues,
    });
  }

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
              width={SURFACE_SIZE}
              height={SURFACE_SIZE}
            >
              https://i.imgur.com/5EOyTDQ.jpg
            </ImageFilters>
          </Surface>
        </header>
        {settings.map(filter => (
          <Filter
            name={filter.name}
            value={this.state[filter.name]}
            defaultValue={this.state[filter.name]}
            minimum={filter.minValue}
            maximum={filter.maxValue}
            step={filter.step}
            component={filter.component}
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
        <Button
          className="App-button"
          variant="contained"
          color="primary"
          onClick={this.resetImage}
        >
          Reset
        </Button>
      </div>
    );
  }
}
