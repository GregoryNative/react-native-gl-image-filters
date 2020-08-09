import React from 'react';
import { Slider } from '@material-ui/core';

export default ({name, defaultValue, minimum = 0, maximum, step = 1, onChange}) => (
  <div className="App-filter">
    <p className="App-filter-name">{name}</p>
    <Slider
      className="App-filter-slider"
      valueLabelDisplay="auto"
      defaultValue={defaultValue}
      min={minimum}
      max={maximum}
      step={step}
      onChangeCommitted={(_, value) => onChange(value)}
    />
    <style jsx>{`
      .App-filter {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: var(--width);
        height: 30px;
      }
      .App-filter-name {
        flex: 1;
        align-self: center;
        text-align: left;
        font-size: 16px;
        color: black;
      }
      .App-filter-slider {
        flex: 1;
        height: 30px;
      }
    `}</style>
  </div>
);