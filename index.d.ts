import * as React from 'react';

export type FiltersProps = {
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
  exposure?: number
}

export type ImageFiltersProps = FiltersProps & {
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
  children: React.ReactElement<any> | {uri: string};
}

export default function ImageFilters(props: ImageFiltersProps): React.ReactElement<{}>;
