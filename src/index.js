import React, { Component } from "react";
import PropTypes from "prop-types";

import GL from "gl-react";
import { Surface } from "gl-react-native";

import Sepia from "./filters/Sepia";
import Hue from "./filters/Hue";
import Blur from "./filters/Blur";
import Sharpen from "./filters/Sharpen";
import Negative from "./filters/Negative";
import Temperature from "./filters/Temperature";
import ContrastSaturationBrightness from "./filters/ContrastSaturationBrightness";

export default GL.createComponent(
({
  children,
  width,
  height,
  hue,
  blur,
  sepia,
  sharpen,
  negative,
  contrast,
  saturation,
  brightness,
  temperature
}) => (
  <Sepia sepia={sepia}>
    <Hue hue={hue}>
      <Negative factor={negative}>
        <Temperature temp={temperature}>
          <ContrastSaturationBrightness
            contrast={contrast}
            saturation={saturation}
            brightness={brightness}
          >
            <Blur factor={blur} passes={4} height={height} width={width}>
              <Sharpen factor={sharpen} height={height} width={width}>
                {children}
              </Sharpen>
            </Blur>
          </ContrastSaturationBrightness>
        </Temperature>
      </Negative>
    </Hue>
  </Sepia>
),
{
  displayName: "ImageFilter",
  defaultProps: {
    width: 240,
    height: 240,
    hue: 0,
    blur: 0,
    sepia: 0,
    sharpen: 0,
    negative: 0,
    contrast: 1,
    saturation: 1,
    brightness: 1,
    temperature: 6500
  },
  propTypes: {
    children: PropTypes.node.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    hue: PropTypes.number,
    blur: PropTypes.number,
    sepia: PropTypes.number,
    sharpen: PropTypes.number,
    negative: PropTypes.number,
    contrast: PropTypes.number,
    saturation: PropTypes.number,
    brightness: PropTypes.number,
    temperature: PropTypes.number
  }
});
