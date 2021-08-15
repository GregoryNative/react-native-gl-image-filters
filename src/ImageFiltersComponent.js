import React from 'react';
import { Shaders, Node, GLSL } from 'gl-react';

import Sepia from './filters/Sepia';
import Hue from './filters/Hue';
import Blur from './filters/Blur';
import Sharpen from './filters/Sharpen';
import Negative from './filters/Negative';
import Temperature from './filters/Temperature';
import ContrastSaturationBrightness from './filters/ContrastSaturationBrightness';
import Exposure from './filters/Exposure';
import ColorOverlay from './filters/ColorOverlay';

import { isUndefinedOrNull } from './utils/isUndefinedOrNull';
import { createConditionalWrapper } from './utils/createConditionalWrapper';

const ImageFiltersComponent = ({
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
  temperature,
  exposure,
  colorOverlay
}) => {
  const SepiaConditional = createConditionalWrapper({
    FilterComponent: Sepia,
    condition: isUndefinedOrNull(sepia),
    factor: sepia,
  });

  const HueConditional = createConditionalWrapper({
    FilterComponent: Hue,
    condition: isUndefinedOrNull(hue),
    factor: hue,
  });

  const ExposureConditional = createConditionalWrapper({
    FilterComponent: Exposure,
    condition: isUndefinedOrNull(exposure),
    exposure,
  });

  const NegativeConditional = createConditionalWrapper({
    FilterComponent: Negative,
    condition: isUndefinedOrNull(negative),
    factor: negative,
  });

  const TemperatureConditional = createConditionalWrapper({
    FilterComponent: Temperature,
    condition: isUndefinedOrNull(temperature),
    factor: temperature,
  });

  const ContrastSaturationBrightnessConditional = createConditionalWrapper({
    FilterComponent: ContrastSaturationBrightness,
    condition: isUndefinedOrNull(contrast) || isUndefinedOrNull(saturation) || isUndefinedOrNull(brightness),
    contrast,
    saturation,
    brightness,
  });

  const ColorOverlayConditional = createConditionalWrapper({
    FilterComponent: ColorOverlay,
    condition: isUndefinedOrNull(colorOverlay),
    factor: colorOverlay,
  });

  const BlurConditional = createConditionalWrapper({
    FilterComponent: Blur,
    condition: isUndefinedOrNull(blur),
    factor: blur,
    passes: 4,
    height,
    width,
  });

  const SharpenConditional = createConditionalWrapper({
    FilterComponent: Sharpen,
    condition: isUndefinedOrNull(sharpen),
    factor: sharpen,
    height,
    width,
  });

  return (
    <SepiaConditional>
      <HueConditional>
        <ExposureConditional>
          <NegativeConditional>
            <TemperatureConditional>
              <ContrastSaturationBrightnessConditional>
                <ColorOverlayConditional>
                  <BlurConditional>
                    <SharpenConditional>
                      {children}
                    </SharpenConditional>
                  </BlurConditional>
                </ColorOverlayConditional>
              </ContrastSaturationBrightnessConditional>
            </TemperatureConditional>
          </NegativeConditional>
        </ExposureConditional>
      </HueConditional>
    </SepiaConditional>
  );
};

export default ImageFiltersComponent;
