import React from 'react';

import Sepia from './filters/Sepia';
import Hue from './filters/Hue';
import Blur from './filters/Blur';
import Sharpen from './filters/Sharpen';
import Negative from './filters/Negative';
import Temperature from './filters/Temperature';
import ContrastSaturationBrightness from './filters/ContrastSaturationBrightness';
import Exposure from './filters/Exposure';
import ColorOverlay from './filters/ColorOverlay';

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
  return (
    <Sepia factor={sepia}>
      <Hue factor={hue}>
        <Exposure exposure={exposure}>
          <Negative factor={negative}>
            <Temperature factor={temperature}>
              <ContrastSaturationBrightness
                contrast={contrast}
                saturation={saturation}
                brightness={brightness}
              >
                <ColorOverlay factor={colorOverlay}>
                  <Blur factor={blur} passes={4} height={height} width={width}>
                    <Sharpen factor={sharpen} height={height} width={width}>
                      {children}
                    </Sharpen>
                  </Blur>
                </ColorOverlay>
              </ContrastSaturationBrightness>
            </Temperature>
          </Negative>
        </Exposure>
      </Hue>
    </Sepia>
  );
};

export default ImageFiltersComponent;
