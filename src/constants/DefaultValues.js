import { DefaultValue as SepiaDefaultValue } from '../filters/Sepia';
import { DefaultValue as HueDefaultValue } from '../filters/Hue';
import { DefaultValue as BlurDefaultValue } from '../filters/Blur';
import { DefaultValue as SharpenDefaultValue } from '../filters/Sharpen';
import { DefaultValue as NegativeDefaultValue } from '../filters/Negative';
import { DefaultValue as TemperatureDefaultValue } from '../filters/Temperature';
import { DefaultValue as ContrastSaturationBrightnessDefaultValue } from '../filters/ContrastSaturationBrightness';
import { DefaultValue as ExposureDefaultValue } from '../filters/Exposure';
import { DefaultValue as ColorOverlayDefaultValue } from '../filters/ColorOverlay';

const DefaultValues = Object.freeze({
  sepia: SepiaDefaultValue,
  hue: HueDefaultValue,
  blur: BlurDefaultValue,
  sharpen: SharpenDefaultValue,
  negative: NegativeDefaultValue,
  temperature: TemperatureDefaultValue,
  brightness: ContrastSaturationBrightnessDefaultValue.brightness,
  contrast: ContrastSaturationBrightnessDefaultValue.contrast,
  saturation: ContrastSaturationBrightnessDefaultValue.saturation,
  exposure: ExposureDefaultValue,
  colorOverlay: ColorOverlayDefaultValue,
});

export default DefaultValues;
