/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type CIMRasterColorizer1 = CIMObject & {
  /**
   * Gets or sets the raster resampling type.
   */
  resamplingType?: RasterResamplingType;
  /**
   * Gets or sets the contrast value.
   */
  contrast?: number;
  /**
   * Gets or sets the brightness value.
   */
  brightness?: number;
  /**
   * Gets or sets the no data color.
   */
  noDataColor?: null | CIMColor;
};
/**
 * Raster resampling types.
 */
export type RasterResamplingType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type CIMColor = CIMObject & {
  /**
   * Gets and sets alpha.
   */
  alpha?: number;
  /**
   * Gets or sets the color spaced used defined by an ICC color profile.
   */
  colorSpace?: null | CIMColorSpace;
  /**
   * Gets or sets the values for the color and alpha channels as defined by the color model. Alpha is the last value in the array for all colors.
   */
  values?: number[] | null;
};
export type CIMColorSpace = CIMObject;
export type CIMRasterColorizer = CIMRasterColorizer1[];

/**
 * Represents the base CIM object class.
 *
 */
export interface CIMObject {}
