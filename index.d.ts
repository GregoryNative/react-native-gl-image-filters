// @ts-ignore
import * as React from 'react';

export type IFiltersProps = {
  /**
   * Value of hue
   */
  hue?: number;
  /**
   * Value of blur
   */
  blur?: number,
  /**
   * Value of sepia
   */
  sepia?: number,
  /**
   * Value of sharpen
   */
  sharpen?: number,
  /**
   * Value of negative
   */
  negative?: number,
  /**
   * Value of contrast
   */
  contrast?: number,
  /**
   * Value of saturation
   */
  saturation?: number,
  /**
   * Value of brightness
   */
  brightness?: number,
  /**
   * Value of temperature
   */
  temperature?: number,
  /**
   * Value of exposure
   */
  exposure?: number,
  /**
   * Value of color overlay
   */
  colorOverlay?: Array<number>,
}

export type IImageFiltersProps = IFiltersProps & {
  /**
   * A floating-point number that determines width of image container
   */
  width: number;
  /**
   * A floating-point number that determines height of image container
   */
  height: number;
  /**
   * Content of the overlay
   */
  children: React.ReactElement<any> | { uri: string };
}

export default function ImageFilters(props: IImageFiltersProps): React.ReactElement<{}>;

type IDefaultPreset = {
  name: string;
  description: string;
  preset: IFiltersProps;
}

export interface Constants {
  DefaultValues: Required<IFiltersProps>;
  DefaultPresets: Array<IDefaultPreset>;
}

export interface Presets {
  NoPreset: IFiltersProps;
  AmaroPreset: IFiltersProps;
  ClarendonPreset: IFiltersProps;
  DogpatchPreset: IFiltersProps;
  GinghamPreset: IFiltersProps;
  GinzaPreset: IFiltersProps;
  HefePreset: IFiltersProps;
  LudwigPreset: IFiltersProps;
  SkylinePreset: IFiltersProps;
  SlumberPreset: IFiltersProps;
  SierraPreset: IFiltersProps;
  StinsonPreset: IFiltersProps;
}

export interface Utils {
  createPreset: (properties: IFiltersProps) => IFiltersProps;
}

export default function ImageFilters(props: IImageFiltersProps): React.ReactElement<{}>;
