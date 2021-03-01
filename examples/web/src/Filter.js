import React, { useState } from 'react';
import { Slider } from '@material-ui/core';
import { ChromePicker } from 'react-color';

const Container = ({ name, children }) => (
  <div className="App-filter">
    <p className="App-filter-name">{name}</p>
    {children}
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

export const ColorPicker = ({
  value,
  onChange
}) => {
  const [isPickerVisible, setPickerVisible] = useState(false);

  const handleClick = () => {
    setPickerVisible(true);
  };

  const handleClose = () => {
    setPickerVisible(false);
  }

  const handleChange = (color) => {
    const { rgb } = color;

    onChange([rgb.r, rgb.g, rgb.b, rgb.a]);
  }

  return (
    <>
      <button onClick={handleClick}>Pick Color</button>
      {
        isPickerVisible ?
          <div className="popover">
            <div className="cover" onClick={handleClose} />
            <ChromePicker
              color={{
                r: value[0],
                g: value[1],
                b: value[2],
                a: value[3],
              }}
              onChangeComplete={handleChange}
            />
          </div>
        : null
      }
      <style jsx>{`
        .popover {
          position: absolute;
          zIndex: 2;
          top: 50%;
        }
        .cover {
          position: fixed;
          top: 0px;
          right: 0px;
          bottom: 0px;
          left: 0px;
        }
      `}</style>
    </>
  );
}

export default ({
  name,
  value,
  defaultValue,
  minimum = 0,
  maximum,
  step = 0.1,
  component = 'Slider',
  onChange
}) => {
  const renderComponent = () => {
    if (component === 'Spacer') {
      return null;
    }

    if (component === 'Slider') {
      return (
        <Slider
          className="App-filter-slider"
          valueLabelDisplay="auto"
          defaultValue={defaultValue}
          value={value}
          min={minimum}
          max={maximum}
          step={step}
          onChange={(_, value) => onChange(value)}
        />
      )
    }

    if (component === 'ColorPicker') {
      return (
        <ColorPicker
          value={value}
          onChange={onChange}
        />
      )
    }

    return null;
  }

  return (
    <Container name={name}>
      {renderComponent()}
    </Container>
  );
}
