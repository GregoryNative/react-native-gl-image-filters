import { default as AmaroPreset } from '../presets/AmaroPreset';
import { default as ClarendonPreset } from '../presets/ClarendonPreset';
import { default as DogpatchPreset } from '../presets/DogpatchPreset';
import { default as GinghamPreset } from '../presets/GinghamPreset';
import { default as GinzaPreset } from '../presets/GinzaPreset';
import { default as HefePreset } from '../presets/HefePreset';
import { default as LudwigPreset } from '../presets/LudwigPreset';
import { default as SierraPreset } from '../presets/SierraPreset';
import { default as SkylinePreset } from '../presets/SkylinePreset';
import { default as SlumberPreset } from '../presets/SlumberPreset';
import { default as StinsonPreset } from '../presets/StinsonPreset';

function Preset(name, description, preset) {
  return { name, description, preset };
}

const DefaultPresets = [
  Preset('Amaro', 'Adds light to an image, with the focus on the centre', AmaroPreset),
  Preset('Clarendon', 'Adds light to lighter areas and dark to darker areas', ClarendonPreset),
  Preset('Dogpatch', 'Increases the contrast, while washing out the lighter colors', DogpatchPreset),
  Preset('Gingham', 'Vintage-inspired, taking some color out', GinghamPreset),
  Preset('Ginza', 'Brightens and adds a warm glow', GinzaPreset),
  Preset('Hefe', 'High contrast and saturation, with a similar effect to Lo-Fi but not quite as dramatic', HefePreset),
  Preset('Ludwig', 'A slight hint of desaturation that also enhances light', LudwigPreset),
  Preset('Sierra', 'Gives a faded, softer look', SierraPreset),
  Preset('Skyline', 'Brightens to the image pop', SkylinePreset),
  Preset('Slumber', 'Desaturates the image as well as adds haze for a retro, dreamy look – with an emphasis on blacks and blues', SlumberPreset),
  Preset('Stinson', 'Washing out the colors ever so slightly', StinsonPreset),
];

export default DefaultPresets;
